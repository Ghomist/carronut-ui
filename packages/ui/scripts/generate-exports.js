import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url)
  .split(path.sep)
  .pop();

const componentsDir = path.resolve(__dirname, "../src/components");
const indexFile = path.resolve(__dirname, "../src/components/index.ts");

function findVueFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findVueFiles(filePath, fileList);
    } else if (file.endsWith(".vue") && file.startsWith("cr-")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function generateExports(vueFiles) {
  const exports = [];

  vueFiles.forEach(filePath => {
    const relativePath = path.relative(path.dirname(indexFile), filePath).replace(/\\/g, "/");
    const fileName = path.basename(filePath, ".vue");
    const componentName = fileName
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    exports.push(`export { default as ${componentName} } from "./${relativePath}";`);
  });

  return exports.join("\n");
}

function updateIndexFile(exportStatements) {
  let content = `/// Auto-generated exports by ${__filename}\n/// DO NOT MODIFY\n\n`;
  content += exportStatements;
  content += "\n";

  fs.writeFileSync(indexFile, content, "utf8");
  console.log(
    `Updated ${indexFile} with ${exportStatements.split("\n").length} component exports.`
  );
}

const vueFiles = findVueFiles(componentsDir);
const exportStatements = generateExports(vueFiles);
updateIndexFile(exportStatements);
