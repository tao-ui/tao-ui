import { INIT_SETTINGS } from "./theme-settings";

const OUTPUT_FILE_NAME = "theme-vars.css";

export function colorScalesToCSS(colorScales) {
  let cssVars = "";
  for (const key in colorScales) {
    const colorScale = colorScales[key];
    cssVars += `  /* ${colorScale.title} */\n`;
    cssVars += `  --color-${colorScale.key}: ${colorScale.defaultRgb};\n`;
    cssVars += `  --color-${colorScale.key}-foreground: ${colorScale.foreground};\n`;
    cssVars += stopsToCSS(colorScale.stops, colorScale.key, colorScale.defaultRgb);
  }
  return cssVars;
}

export function colorVarsToCSS(colorVars) {
  let cssVars = "";
  for (const key in colorVars) {
    const colorVar = colorVars[key];
    cssVars += `  --color-${key}: ${colorVar.DEFAULT};\n`;
    if (colorVar.foreground) cssVars += `  --color-${key}-foreground: ${colorVar.foreground};\n`;
    if (colorVar.hint) cssVars += `  --color-${key}-hint: ${colorVar.hint};\n`;
    if (colorVar.hover) cssVars += `  --color-${key}-hover: ${colorVar.hover};\n`;
  }
  return cssVars;
}

export function stopsToCSS(stops, colorKey, defaultRgb) {
  let cssVars = "";
  stops.forEach((stop, i) => {
    cssVars += `  --color-${colorKey}-${stop.key}: ${stop.rgb};\n`;
  });
  return cssVars;
}

export function generalVarsToCSS(key, vars, useRgb = false) {
  let cssVars = "";
  for (const varKey in vars) {
    if (useRgb) {
      cssVars += `  --${key}-${varKey}: ${vars[varKey]};\n`;
    } else {
      cssVars += `  --${key}-${varKey}: ${vars[varKey]};\n`;
    }
  }
  return cssVars;
}

function createCSSRoot() {
  let cssRoot = ":root {\n";
  cssRoot += colorScalesToCSS(INIT_SETTINGS.colorScales);
  cssRoot += "/* Individual Color Variables */\n";
  cssRoot += colorVarsToCSS(INIT_SETTINGS.colorVars);

  cssRoot += "/* Border Color Variables */\n";
  if (INIT_SETTINGS.borderColor) cssRoot += generalVarsToCSS("border", INIT_SETTINGS.borderColor, true);
  cssRoot += "/* Border Radius Variables */\n";
  if (INIT_SETTINGS.borderRadius) cssRoot += generalVarsToCSS("rounded", INIT_SETTINGS.borderRadius);
  cssRoot += "/* Border Width Variables */\n";
  if (INIT_SETTINGS.borderWidth) cssRoot += generalVarsToCSS("border", INIT_SETTINGS.borderWidth);
  cssRoot += "/* Shadow Variables */\n";
  if (INIT_SETTINGS.boxShadow) cssRoot += generalVarsToCSS("shadow", INIT_SETTINGS.boxShadow);
  cssRoot += "/* Font Size Variables */\n";
  if (INIT_SETTINGS.fontSize) cssRoot += generalVarsToCSS("font-size", INIT_SETTINGS.fontSize);
  cssRoot += "/* Height Variables */\n";
  if (INIT_SETTINGS.height) cssRoot += generalVarsToCSS("height", INIT_SETTINGS.height);
  cssRoot += "/* Width Variables */\n";
  if (INIT_SETTINGS.width) cssRoot += generalVarsToCSS("width", INIT_SETTINGS.width);
  cssRoot += "/* Padding Variables */\n";
  if (INIT_SETTINGS.padding) cssRoot += generalVarsToCSS("padding", INIT_SETTINGS.padding);
  cssRoot += "/* Spacing Variables */\n";
  if (INIT_SETTINGS.spacing) cssRoot += generalVarsToCSS("spacing", INIT_SETTINGS.spacing);
  if (INIT_SETTINGS.fontFamily) cssRoot += generalVarsToCSS("font", INIT_SETTINGS.fontFamily);

  cssRoot += "}";
  return cssRoot;
}

async function writeCSSRootToFile() {
  try {
    await Bun.write(OUTPUT_FILE_NAME, cssRoot);
    console.log("CSS root variables file created successfully!");
  } catch (error) {
    console.error("Error writing CSS root variables file:", error);
  }
}

const cssRoot = createCSSRoot();

writeCSSRootToFile();
