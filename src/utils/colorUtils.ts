import chroma from "chroma-js";

export const generateShades = (baseColor: string): Record<number, string> => {
  const scale = chroma
    .scale(["#ffffff", baseColor, "#000000"])
    .mode("lab")
    .colors(9); // 100–900

  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const shades: Record<number, string> = {};

  steps.forEach((step, i) => {
    shades[step] = scale[i];
  });

  return shades;
};
