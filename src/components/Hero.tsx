import React from "react";
import { Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <section className="w-full h-dvh bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-3xl text-center space-y-8">
        <div className="flex flex-col items-center justify-center">
          <img
            height="120"
            width="120"
            src="/assets/image.png"
            className="mb-4 border border-gray-400 dark:border-gray-600 rounded-full"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 transition-all duration-300">
            ColorTailor
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Generate stunning Tailwind color palettes in seconds from a single
          base color, and get them instantly available for both Web and Neovim
          as a plugin (in development).
        </p>

        {/* Neovim Plugin Highlight */}
        <div className="inline-flex items-center justify-center space-x-2 px-6 py-4 border border-gray-400 dark:text-gray-100 dark:border-gray-600 text-lg rounded-2xl shadow-sm transition">
          <span className="align-middle">
            Also available as a Neovim plugin -{" "}
          </span>
          <a
            href="https://github.com/aj-seven/color-tailor.nvim"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-blue-400 align-middle"
          >
            View Plugin
          </a>
        </div>

        {/* Get Started Button */}
        <div className="pt-2">
          <button
            onClick={handleGetStarted}
            className="px-6 py-4 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try it out 🚀
          </button>
        </div>

        {/* Contribution */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <a
            href="https://github.com/aj-seven/color-tailor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 dark:text-gray-100 rounded-md text-md font-bold transition hover:underline"
          >
            <Github className="w-6 h-6" />
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
