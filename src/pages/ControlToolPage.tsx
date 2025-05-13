import React, { useState, useEffect } from "react";
import ColorInput from "../components/ColorInput";
import PalettePreview from "../components/PalettePreview";
import TailwindConfigOutput from "../components/TailwindConfigOutput";
import { generateShades } from "../utils/colorUtils";
import { PreviewComponents } from "../components/PreviewComponents";
import ExportOptions from "../components/ExportOptions";
import ThemeConfigOutput from "../components/ThemeConfigOutput";
import { generateTheme } from "../utils/colorUtils";

const ColorToolPage = () => {
  const [baseColor, setBaseColor] = useState("#ffffff");
  const [shades, setShades] = useState<Record<number, string>>({});

  useEffect(() => {
    // Load baseColor from localStorage if available
    const storedColor = localStorage.getItem("baseColor");
    const initialColor = storedColor || "#ffffff";
    setBaseColor(initialColor);
    setShades(generateShades(initialColor));
  }, []);

  const handleColorChange = (color: string) => {
    setBaseColor(color);
    localStorage.setItem("baseColor", color); // Save new color
    setShades(generateShades(color));
  };

  return (
    <div
      id="content"
      className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col mx-auto max-w-6xl px-4 py-20 space-y-4"
    >
      <ColorInput defaultColor={baseColor} onChange={handleColorChange} />

      {Object.keys(shades).length > 0 && (
        <>
          <PalettePreview shades={shades} />
          <TailwindConfigOutput shades={shades} baseColorName="myColor" />
          <ExportOptions shades={shades} baseColorName="myColor" />
          <ThemeConfigOutput theme={generateTheme(baseColor)} />
          <PreviewComponents colorName="myColor" shades={shades} />
        </>
      )}
    </div>
  );
};

export default ColorToolPage;
