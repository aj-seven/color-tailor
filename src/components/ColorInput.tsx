import React, { useState, useRef, useEffect } from "react";
import { ChromePicker } from "react-color";

interface ColorInputProps {
  label?: string;
  defaultColor?: string;
  showHex?: boolean;
  onChange: (color: string) => void;
  storageKey?: string;
}

const ColorInput: React.FC<ColorInputProps> = ({
  label = "Select Base Color:",
  defaultColor = "#4f46e5", // Default to indigo-600
  showHex = true,
  onChange,
  storageKey = "baseColor",
}) => {
  const [color, setColor] = useState(defaultColor);
  const [showPicker, setShowPicker] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setColor(stored);
  }, [storageKey]);

  // Store to localStorage when changed
  const handleChange = (colorResult: any) => {
    const hex = colorResult.hex;
    setColor(hex);
    localStorage.setItem(storageKey, hex);
    onChange(colorResult.hex);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPicker]);

  return (
    <div className="w-full max-w-sm flex flex-row gap-2 items-center relative dark:border-gray-700">
      {label && (
        <label className="text-xl font-bold text-gray-900 dark:text-white">
          {label}
        </label>
      )}

      <button
        onClick={() => setShowPicker(!showPicker)}
        className="w-20 h-10 rounded-md border shadow-sm transition"
        style={{ backgroundColor: color }}
        title="Click to pick a color"
      />

      {showHex && (
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          {color}
        </span>
      )}

      {showPicker && (
        <div
          ref={popoverRef}
          className="absolute z-50 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg"
          style={{ top: "100%", left: 20 }}
        >
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ColorInput;
