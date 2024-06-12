export const wrapVar = (value: string, type = "") => {
  if (type === "rgb") return `rgb(var(--${value}))`;
  return `var(--${value})`;
};
