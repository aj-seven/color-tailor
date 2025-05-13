import React, { useState } from "react";

interface ThemeConfigOutputProps {
  theme: Record<string, any>;
}

const ThemeConfigOutput: React.FC<ThemeConfigOutputProps> = ({ theme }) => {
  const [show, setShow] = useState(false);

  const generateThemeConfig = () => {
    return `module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(theme, null, 6)}
    }
  }
}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateThemeConfig()).then(() => {
      alert("✅ Theme config copied to clipboard!");
    });
  };

  const handleDownload = () => {
    const blob = new Blob([generateThemeConfig()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tailwind.theme.config.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-10 space-y-4">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
      >
        {show ? "🙈 Hide Theme Config" : "👀 Show Theme Config"}
      </button>

      {show && (
        <>
          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full md:w-auto"
            >
              Copy to Clipboard
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-800 text-white rounded-md w-full md:w-auto"
            >
              Download Config
            </button>

            <a
              href="/theme-showcase"
              className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md w-full md:w-auto text-center"
            >
              🎨 Preview Theme
            </a>
          </div>

          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
            {generateThemeConfig()}
          </pre>
        </>
      )}
    </div>
  );
};

export default ThemeConfigOutput;
