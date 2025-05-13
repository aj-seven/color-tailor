import React, { useEffect, useState } from "react";
import { generateTheme } from "../utils/colorUtils";

const ThemePreview: React.FC = () => {
  const [theme, setTheme] = useState<Record<string, any> | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const baseColor = localStorage.getItem("baseColor");
    if (baseColor) {
      const generated = generateTheme(baseColor);
      setTheme(generated);
    }

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkMode = () => setIsDark(darkModeQuery.matches);

    handleDarkMode();
    darkModeQuery.addEventListener("change", handleDarkMode);

    return () => {
      darkModeQuery.removeEventListener("change", handleDarkMode);
    };
  }, []);

  if (!theme)
    return <p className="py-20 text-center">No theme found in localStorage.</p>;

  const background = theme.background;
  const foreground = theme.foreground;

  const { primary, secondary, accent, neutral } = theme;

  return (
    <div
      className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col mx-auto max-w-6xl px-4 py-20 space-y-4"
      style={{ backgroundColor: background, color: foreground }}
    >
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-white">
          🎨 Theme Preview
        </h1>
      </header>

      <section className="space-y-12 w-6xl">
        {/* Themed Button */}
        <button
          className="w-full py-3 rounded-lg text-white font-medium shadow hover:brightness-90 transition"
          style={{ backgroundColor: primary[500] }}
        >
          Themed Button (Primary)
        </button>

        {/* Themed Badge */}
        <span
          className="px-4 py-4 rounded-xl text-sm font-semibold text-center"
          style={{
            backgroundColor: secondary[200],
            color: secondary[700],
          }}
        >
          Themed Badge (Secondary)
        </span>

        {/* Themed Alert */}
        <div
          className="p-4 rounded-md text-white text-sm shadow"
          style={{ backgroundColor: accent[700] }}
        >
          ⚠️ This is a themed alert using Accent.
        </div>

        {/* Themed Card */}
        <div
          className="p-4 rounded-lg shadow border-l-4"
          style={{
            backgroundColor: neutral[100],
            borderColor: primary[500],
          }}
        >
          <h3 className="font-semibold mb-1" style={{ color: primary[700] }}>
            Themed Card (Neutral)
          </h3>
          <p className="text-sm" style={{ color: neutral[800] }}>
            This card uses your generated theme colors.
          </p>
        </div>

        {/* Themed Header */}
        <header
          className="p-6 rounded-md shadow-md"
          style={{ backgroundColor: primary[500] }}
        >
          <h2 className="text-white font-semibold text-2xl">
            Themed Header (Primary)
          </h2>
          <p className="text-white text-sm">This is a themed header</p>
        </header>

        {/* Themed Footer */}
        <footer
          className="p-6 rounded-md shadow-md mt-6"
          style={{ backgroundColor: secondary[700] }}
        >
          <p className="text-white text-center">
            This is a themed footer using secondary shade.
          </p>
        </footer>

        {/* Themed Input */}
        <div className="space-y-2 w-full">
          <label className="block font-medium text-gray-700 dark:text-white" >
            Themed Input
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm"
            style={{
              backgroundColor: neutral[100],
              borderColor: primary[500],
              color: neutral[700],
            }}
            placeholder="Enter text"
          />
        </div>

        {/* Themed Tooltip */}
        <div className="relative inline-block w-full">
          <button
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: accent[500] }}
          >
            Hover me (Accent)
          </button>
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mt-8 px-3 py-1 text-sm text-white rounded-md"
            style={{ backgroundColor: accent[700] }}
          >
            Themed Tooltip
          </span>
        </div>
      </section>
    </div>
  );
};

export default ThemePreview;
