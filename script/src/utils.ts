import { copyFile, ensureDir, ensureFile, readdir, stat } from "fs-extra";
import { join } from "path";
const { run: jscodeshift } = require("jscodeshift/src/Runner");

type ConfigInternal = Array<{ source: string; target: string }>;

async function replaceScreenImports(targetDirectory: string, options?: any) {
  const importTransformer = join(__dirname, `./transformer.js`);

  console.log("options", options);

  try {
    await jscodeshift(importTransformer, [targetDirectory], options);
  } catch (err) {
    console.error(`Error while replacing imports in ${targetDirectory}`, err);
  }
}

export async function copyDirectoryFromSourceToTarget({
  sourceDirectory,
  copyDestination,
  options = {},
  shouldTransform = false,
  depthLevel = 0,
}: {
  sourceDirectory: string;
  copyDestination: string;
  depthLevel?: number;
  options?: any;
  shouldTransform?: boolean;
}) {
  try {
    if (!sourceDirectory) {
      throw new Error(`Package not found!\npath: ${sourceDirectory}`);
    }

    if (!copyDestination) {
      throw new Error(`Project not found!\npath: ${copyDestination}`);
    }

    const directories = (await readdir(sourceDirectory)).filter(
      (dirName) =>
        !dirName.startsWith(".") &&
        !dirName.includes("node_modules") &&
        !dirName.includes("dist") &&
        !dirName.includes("build")
    );

    for (const dir of directories) {
      const source = join(sourceDirectory, dir);
      const target = join(copyDestination, dir);

      const fileStats = await stat(source);

      if (fileStats.isDirectory()) {
        await ensureDir(target);
        await copyDirectoryFromSourceToTarget({
          sourceDirectory: source,
          copyDestination: target,
          depthLevel: depthLevel + 1,
          options,
          shouldTransform,
        });
      } else if (
        fileStats.isFile() &&
        !(dir.includes(".d.ts") || dir.includes(".jsx")) &&
        depthLevel > 0
      ) {
        await ensureFile(target);
        console.info(`Copying file from ${source} to ${target}`);
        await copyFile(source, target);
        console.info(`File copied successfully!`);

        if (shouldTransform) {
          console.log("Transforming imports for " + target + "...");
          await replaceScreenImports(target, options);
          console.log("Imports transformed successfully!");
        }
      }
    }
  } catch (err) {
    console.error(
      `Error while copying ${sourceDirectory} to ${copyDestination}`,
      err
    );
  }
}

export async function copyDirectoriesFromSourceToTarget(
  configs: ConfigInternal,
  options?: any
) {
  try {
    for (const config of configs) {
      const { source, target } = config;
      console.info(
        `\n************ Copying directories from ${source} to ${target} ************`
      );
      await copyDirectoryFromSourceToTarget({
        sourceDirectory: join(process.cwd(), source),
        copyDestination: join(process.cwd(), target),
        options,
      });
    }
  } catch (err) {
    console.error(
      "Error while copying directories from source to target: ",
      err
    );
  }
}
