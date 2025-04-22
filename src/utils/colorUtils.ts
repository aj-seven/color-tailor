import chroma from "chroma-js";

export const generateShades = (baseColor: string): Record<number, string> => {
  const lightest = chroma(baseColor).brighten(2.5).hex(); // 50
  const darkest = chroma(baseColor).darken(2.5).hex(); // 950

  const scale = chroma
    .scale([lightest, baseColor, darkest])
    .mode("lab")
    .colors(10); // 50 to 950 (10 steps)

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const shades: Record<number, string> = {};
  steps.forEach((step, i) => {
    shades[step] = scale[i];
  });

  // Add a true 950 if you want it even darker
  shades[950] = chroma(baseColor).darken(3.5).hex();

  return shades;
};

// Helper function for dynamic contrast
export const getContrastText = (hex: string, opacity = 1): string => {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const color = luminance > 0.6 ? "black" : "white";
  return `rgba(${color === "black" ? "0,0,0" : "255,255,255"},${opacity})`;
};
