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
    <div>
      <h1 className="mt-2 text-xl underline font-semibold">
        Tailwind Config Output:
      </h1>
      <pre className="mt-1 bg-gray-800 text-white p-4 rounded-md whitespace-pre-wrap">
        {generateTailwindConfig()}
      </pre>
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md shadow-md"
      >
        Copy Tailwind Config
      </button>
    </div>
  );
};

export default TailwindConfigOutput;
