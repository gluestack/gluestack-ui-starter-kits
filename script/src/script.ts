import { join } from "path";
import { copyDirectoryFromSourceToTarget } from "./utils";
import { existsSync, readdir, stat, writeFile } from "fs-extra";
import { run as jscodeshift } from "jscodeshift/src/Runner";

export interface EjectConfig {
  screens: string;
  components: string;
  paths: Record<string, string>;
}

const currDir = process.cwd();

async function replaceScreenImports(targetDirectory: string, options?: any) {
  const importTransformer = join(__dirname, `./transformer.js`);

  try {
    await jscodeshift(importTransformer, [targetDirectory], options ?? {});
  } catch (err) {
    console.error(`Error while replacing imports in ${targetDirectory}`, err);
  }
}

const readAllFiles = async (directoryPath: string, screenPath: string) => {
  const directories = await readdir(directoryPath);

  for (const dir of directories) {
    const fullPath = join(directoryPath, dir);
    const fileStats = await stat(fullPath);

    if (fileStats.isFile()) {
      replaceScreenImports(fullPath, { screenPath });
    } else if (fileStats.isDirectory()) {
      console.log(`Directory: ${fullPath}`);
      await readAllFiles(fullPath, screenPath); // Recursively read files if it's a directory
    }
  }
};

const generatePathsForTsConfig = (paths: Record<string, string>) => {
  const resultPaths: any = {};
  Object.keys(paths ?? {}).forEach((key) => {
    resultPaths[key] = [paths[key]];
  });

  return resultPaths;
};

export class EjectScript {
  config: EjectConfig;

  constructor(config: EjectConfig) {
    this.config = config;
  }

  async copyComponents() {
    try {
      // Copy components from source to target
      await copyDirectoryFromSourceToTarget({
        sourceDirectory: this.config.components,
        copyDestination: "./components/ui",
      });
    } catch (err) {
      console.error("Error while copying components", err);
    }
  }

  async copyScreens() {
    try {
      // Copy screens from source to target
      const pagesFiles = join(currDir, "app");

      if (existsSync(pagesFiles)) {
        await readAllFiles(pagesFiles, join(currDir, this.config.screens));
      }
    } catch (err) {
      console.error("Error while copying screens", err);
    }
  }

  async updateTsConfig() {
    try {
      // Update tsconfig.json
      const tsConfigPath = `${currDir}/tsconfig.json`;
      const tsConfig = require(tsConfigPath);

      if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {};
      }

      if (!tsConfig.compilerOptions.paths) {
        tsConfig.compilerOptions.paths = {};
      }

      if (!tsConfig.compilerOptions.paths["@/*"]) {
        tsConfig.compilerOptions.paths["@/*"] = ["./*"];
      }

      tsConfig.compilerOptions.paths = {
        ...tsConfig.compilerOptions.paths,
      };

      await writeFile(tsConfigPath, JSON.stringify(tsConfig, null, 2));
    } catch (err) {
      console.error("Error while updating tsconfig.json", err);
    }
  }

  async run() {
    try {
      console.log("Running eject script...");
      await this.copyComponents();
      console.log("Components copied successfully!");

      console.log("Copying screens...");
      await this.copyScreens();
      console.log("Screens copied successfully!");

      console.log("Updating tsconfig.json...");
      await this.updateTsConfig();
      console.log("tsconfig.json updated successfully!");
    } catch (err) {
      console.error("Error while running eject script", err);
    }
  }
}
