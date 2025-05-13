import React, { useState } from "react";
import { getContrastText } from "../utils/colorUtils";

interface PreviewComponentsProps {
  colorName: string;
  shades: Record<number, string>;
}

export const PreviewComponents: React.FC<PreviewComponentsProps> = ({
  colorName,
  shades,
}) => {
  const [view, setView] = useState(false);

  return (
    <div className="mt-4 border-t border-gray-300 dark:border-gray-700">
      <div className="flex flex-row mt-1">
        <h2 className="text-xl text-center font-bold text-gray-900 dark:text-white">
          Components Preview (Single Base Color) -
        </h2>
        <button
          onClick={() => setView(!view)}
          className="ml-2 bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md shadow-md font-bold text-white dark:text-gray-900"
        >
          {view ? "Hide" : "View"}
        </button>
      </div>
      {view && (
        <div className="mt-2 space-y-4">
          <h2 className="text-lg text-gray-900 dark:text-white">
            Color Name - {colorName}
          </h2>

          {/* Buttons */}
          <section className="space-y-1">
            <h3 className="text-lg font-semibold underline text-gray-900 dark:text-white">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(shades).map(([shade, color]) => (
                <button
                  key={`btn-${shade}`}
                  style={{
                    backgroundColor: color,
                    color: getContrastText(color),
                  }}
                  className="px-4 py-2 border border-gray-400 dark:border-gray-700 rounded-md shadow-sm font-medium transition hover:scale-105"
                >
                  Shade {shade}
                </button>
              ))}
            </div>
          </section>

          {/* Cards */}
          <section className="space-y-1">
            <h3 className="text-lg font-semibold underline text-gray-900 dark:text-white">
              Cards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(shades).map(([shade, color]) => (
                <div
                  key={`card-${shade}`}
                  style={{ backgroundColor: color }}
                  className="rounded-xl p-4 border border-gray-400 dark:border-gray-700 shadow-sm"
                >
                  <h4
                    className="font-semibold mb-1 text-gray-900 dark:text-white"
                    style={{ color: getContrastText(color) }}
                  >
                    Card Shade {shade}
                  </h4>
                  <p
                    className="text-sm text-gray-700 dark:text-gray-300"
                    style={{ color: getContrastText(color, 0.8) }}
                  >
                    Background with shade {shade}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Badges */}
          <section className="space-y-1">
            <h3 className="text-lg font-semibold underline text-gray-900 dark:text-white">
              Badges
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(shades).map(([shade, color]) => (
                <span
                  key={`badge-${shade}`}
                  style={{
                    backgroundColor: color,
                    color: getContrastText(color),
                  }}
                  className="px-3 py-1 border border-gray-400 dark:border-gray-700 rounded-full text-sm font-medium"
                >
                  {shade}
                </span>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
