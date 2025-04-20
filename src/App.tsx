import React, { useState, useEffect } from "react";
import ColorInput from "./components/ColorInput";
import PalettePreview from "./components/PalettePreview";
import TailwindConfigOutput from "./components/TailwindConfigOutput";
import { generateShades } from "./utils/colorUtils";

const App = () => {
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
    <div className="min-h-dvh flex flex-col mx-auto max-w-4xl justify-center p-3">
      <ColorInput onColorChange={handleColorChange} />
      {Object.keys(shades).length > 0 && (
        <>
          <h1 className="text-2xl font-semibold mt-2"> {baseColor} </h1>
          <PalettePreview shades={shades} />
          <TailwindConfigOutput shades={shades} baseColorName="myColor" />
        </>
      )}
    </div>
  );
};

export default App;
