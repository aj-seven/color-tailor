import React from "react";

interface ExportOptionsProps {
  shades: Record<number, string>;
  baseColorName: string;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({
  shades,
  baseColorName,
}) => {
  const generateTailwindConfig = () => {
    let config = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        ${baseColorName}: {\n`;
    Object.entries(shades).forEach(([shade, color]) => {
      config += `          ${shade}: '${color}',\n`;
    });
    config += `        },\n      },\n    },\n  },\n}\n`;
    return config;
  };

  const downloadFile = (
    filename: string,
    content: string,
    type: string = "text/plain"
  ) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownload = (type: "json" | "js" | "ts") => {
    if (type === "json") {
      downloadFile(
        `${baseColorName}-palette.json`,
        JSON.stringify(shades, null, 2),
        "application/json"
      );
    } else {
      const config = generateTailwindConfig();
      downloadFile(`tailwind.config.${type}`, config, "application/javascript");
    }
  };

  return (
    <div className="mt-4 space-x-2">
      <h2 className="text-lg font-semibold mb-2 underline">Export Options:</h2>
      <button
        onClick={() => handleDownload("json")}
        className="px-4 py-1 rounded-md shadow border bg-white text-black hover:bg-gray-100"
      >
        Download JSON
      </button>
      <button
        onClick={() => handleDownload("js")}
        className="px-4 py-1 rounded-md shadow border bg-white text-black hover:bg-gray-100"
      >
        Download JS Config
      </button>
      <button
        onClick={() => handleDownload("ts")}
        className="px-4 py-1 rounded-md shadow border bg-white text-black hover:bg-gray-100"
      >
        Download TS Config
      </button>
    </div>
  );
};

export default ExportOptions;
