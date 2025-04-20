import React from "react";
import tinycolor from "tinycolor2";

interface PalettePreviewProps {
  shades: Record<number, string>;
}

const getTextColor = (backgroundColor: string) => {
  const color = tinycolor(backgroundColor);
  return color.isLight() ? "black" : "white"; // Return black or white depending on the shade brightness
};

const getContrastRatio = (backgroundColor: string, textColor: string) => {
  const bgColor = tinycolor(backgroundColor);
  const txtColor = tinycolor(textColor);
  return bgColor.getLuminance() > txtColor.getLuminance() ? "light" : "dark";
};

const PalettePreview: React.FC<PalettePreviewProps> = ({ shades }) => {
  return (
    <div className="flex flex-wrap w-4xl gap-4 mt-4">
      {Object.entries(shades).map(([shade, color]) => {
        const textColor = getTextColor(color);
        const contrastRatio = getContrastRatio(color, textColor);

        return (
          <div key={shade} className="relative w-16 h-16 rounded-lg shadow-md">
            <div
              className="absolute inset-0 flex items-center justify-center text-sm text-white font-semibold"
              style={{ color: textColor }}
            >
              {shade}
            </div>
            <div
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: color,
                border:
                  contrastRatio === "light"
                    ? "2px solid #000"
                    : "2px solid #fff",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PalettePreview;
