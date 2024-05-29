import Bun from "bun"; // Assuming Bun is a module you can import

async function parseThemeFile(filePath, excludeStartsWith = ["color", "perspective", "transition", "font-family"]) {
  try {
    const fileContent = await Bun.read(filePath);
    const themeVariables = {};

    const regex = /^\s*--([^\s:]+):\s*(.*);/gm;

    let match;
    while ((match = regex.exec(fileContent)) !== null) {
      const [, key, value] = match;

      if (!excludeStartsWith.some((prefix) => key.startsWith(prefix))) {
        themeVariables[key] = value;
      }
    }

    return themeVariables;
  } catch (error) {
    console.error("Error parsing theme file:", error);
    return {};
  }
}

async function writeThemeToFile(themeVariables, outputFilePath) {
  try {
    const data = `export const themeDefaultOpts = ${JSON.stringify(themeVariables, null, 2)};`;
    await Bun.write(outputFilePath, data);
    console.log("Theme variables written to:", outputFilePath);
  } catch (error) {
    console.error("Error writing theme variables to file:", error);
  }
}

// Example usage:
const themeFilePath = "./tw-default-theme.css";
const outputFilePath = "./theme-variables.js";

parseThemeFile(themeFilePath).then((themeVariables) => {
  writeThemeToFile(themeVariables, outputFilePath);
});
