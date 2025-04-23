import React from "react";

interface TailwindConfigOutputProps {
  shades: Record<number, string>;
  baseColorName: string;
}

const TailwindConfigOutput: React.FC<TailwindConfigOutputProps> = ({
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

  const handleCopy = () => {
    const config = generateTailwindConfig();
    navigator.clipboard.writeText(config).then(() => {
      alert("Tailwind config copied to clipboard!");
    });
  };

  return (
    <div className="relative mt-4">
      <h1 className="text-xl underline font-semibold mb-2 text-gray-900 dark:text-white">
        Tailwind Config Output:
      </h1>
      <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 pt-10 rounded-md shadow-md">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-4 py-1 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium text-sm"
        >
          Copy
        </button>
        <pre className="whitespace-pre-wrap">{generateTailwindConfig()}</pre>
      </div>
    </div>
  );
};

export default TailwindConfigOutput;
