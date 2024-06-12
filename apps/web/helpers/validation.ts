import { z } from "zod";

export const rgbRegex = /^(\d{1,3})(?:, ?|,| )(\d{1,3})(?:, ?|,| )(\d{1,3})$/;

export const isValidRGB = (value: string) => {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(rgbRegex);
  if (!match) return false;
  return match.slice(1, 4).every((num) => Number(num) >= 0 && Number(num) <= 255);
};

export const rgbValidation = z.string().refine(isValidRGB, {
  message: "RGB must be in the format 255, 255, 255 or similar and each number between 0 and 255.",
});
