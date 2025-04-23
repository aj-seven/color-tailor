import React, { useState, useEffect } from "react";
import ColorInput from "../components/ColorInput";
import PalettePreview from "../components/PalettePreview";
import TailwindConfigOutput from "../components/TailwindConfigOutput";
import { generateShades } from "../utils/colorUtils";
import { PreviewComponents } from "../components/PreviewComponents";
import ExportOptions from "../components/ExportOptions";

const ColorToolPage = () => {
  const [baseColor, setBaseColor] = useState("#ffffff");
  const [shades, setShades] = useState<Record<number, string>>({});

  useEffect(() => {
    const generatedShades = generateShades(baseColor);
    setShades(generatedShades);
  }, []);

  const handleColorChange = (color: string) => {
    setBaseColor(color);
    const generatedShades = generateShades(color);
    setShades(generatedShades);
  };

  return (
    <div
      id="content"
      className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col mx-auto max-w-6xl px-4 py-20 space-y-4"
    >
      <ColorInput color={baseColor} onChange={handleColorChange} />
      {Object.keys(shades).length > 0 && (
        <>
          <PalettePreview shades={shades} />
          <TailwindConfigOutput shades={shades} baseColorName="myColor" />
          <ExportOptions shades={shades} baseColorName="myColor" />
          <PreviewComponents colorName="myColor" shades={shades} />
        </>
      )}
    </div>
  );
};

export default ColorToolPage;
