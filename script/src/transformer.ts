import { existsSync } from "fs";
import { readFileSync } from "fs-extra";
import { Transform, FileInfo, API, Options } from "jscodeshift";
import { join } from "path";

const getScreenFile = (path: string, ogScreenPath: string) => {
  const fullPath = join(ogScreenPath, `${path}/index.tsx`);

  let content = "";
  if (existsSync(fullPath)) {
    content = readFileSync(fullPath, "utf-8");
  }
  return content;
};

const transform: Transform = (file: FileInfo, api: API, options: Options) => {
  try {
    const j = api.jscodeshift;
    const root = j(file.source);

    const ogScreenPath = options?.screenPath;

    let screenPath = "";
    let importName = "";
    let isDefaultExport = false;

    root
      .find(j.ImportDeclaration)
      .filter(
        (path) =>
          typeof path.node.source.value === "string" &&
          path.node.source.value.includes("@base-template/screens/")
      )
      .forEach((path) => {
        if (
          typeof path.node.source.value === "string" &&
          path.node.source.value.includes("@base-template/screens/")
        ) {
          screenPath = path.node.source.value.replace(
            "@base-template/screens/",
            ""
          );
        }
      });

    root.find(j.ImportSpecifier).forEach((path) => {
      if (path.node.local && path.node.local.name) {
        importName = path.node.local.name;
      }
    });

    root.find(j.ImportDefaultSpecifier).forEach((path) => {
      if (path.node.local && path.node.local.name) {
        importName = path.node.local.name;
      }
    });

    root.find(j.ExportDefaultDeclaration).forEach((path) => {
      if (path.node.declaration?.name === importName) {
        isDefaultExport = true;
      }
    });

    if (isDefaultExport) {
      return getScreenFile(screenPath, ogScreenPath);
    }
    return root.toSource();
  } catch (err) {
    console.log(`\x1b[31mError: ${err as Error}\x1b[0m`);
  }
};

export default transform;
