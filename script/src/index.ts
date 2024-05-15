#!/usr/bin/env node

import {
  readdir,
  copyFile,
  ensureDir,
  ensureFile,
  stat,
  existsSync,
} from "fs-extra";
import { join } from "path";
import process from "process";

export interface Config {
  config: Array<{ source: string; target: string }>;
}

type ConfigInternal = Array<{ source: string; target: string }>;

async function copyDirectoryFromSourceToTarget(
  packagePath: string,
  projectPath: string,
  depthLevel = 0
) {
  try {
    if (!packagePath) {
      throw new Error(`Package not found!\npath: ${packagePath}`);
    }

    if (!projectPath) {
      throw new Error(`Project not found!\npath: ${projectPath}`);
    }

    const directories = (await readdir(packagePath)).filter(
      (dirName) =>
        !dirName.startsWith(".") &&
        !dirName.includes("node_modules") &&
        !dirName.includes("dist") &&
        !dirName.includes("build")
    );

    for (const dir of directories) {
      const source = join(packagePath, dir);
      const target = join(projectPath, dir);

      const fileStats = await stat(source);

      if (fileStats.isDirectory()) {
        await ensureDir(target);
        await copyDirectoryFromSourceToTarget(source, target, depthLevel + 1);
      } else if (fileStats.isFile() && depthLevel > 0) {
        await ensureFile(target);
        console.info(`Copying file from ${source} to ${target}`);
        await copyFile(source, target);
      }
    }
  } catch (err) {
    console.error(`Error while copying ${packagePath} to ${projectPath}`, err);
  }
}

async function copyDirectoriesFromSourceToTarget(configs: ConfigInternal) {
  try {
    for (const config of configs) {
      const { source, target } = config;
      console.info(
        `\n************ Copying directories from ${source} to ${target} ************`
      );
      await copyDirectoryFromSourceToTarget(
        join(process.cwd(), source),
        join(process.cwd(), target)
      );
    }
  } catch (err) {
    console.error(
      "Error while copying directories from source to target: ",
      err
    );
  }
}

function main() {
  const configPath = join(process.cwd(), "starter-cli.config.js");

  if (!existsSync(configPath)) {
    console.error(
      "Config file not found! Make sure you have starter-cli.config.js in your project root directory." +
        "config path: " +
        configPath
    );
    process.exit(1);
  }

  console.info("Config file found! Reading config file...");

  const { config } = require(configPath);

  if (!config) {
    const errorJSON = {
      config: [
        {
          source: "path/to/source",
          target: "path/to/target",
        },
      ],
    };
    throw new Error(
      `Config not found in starter-cli.config.js! Please add\n module.exports = ${JSON.stringify(
        errorJSON,
        null,
        2
      )} \nto your config file.`
    );
  }

  console.info("Config file read successfully! Copying directories...");

  copyDirectoriesFromSourceToTarget(config);
}

main();
