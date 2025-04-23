import React, { useState, useRef, useEffect } from "react";
import { ChromePicker } from "react-color";

interface ColorInputProps {
  label?: string;
  color: string;
  onChange: (color: string) => void;
  showHex?: boolean;
}

const ColorInput: React.FC<ColorInputProps> = ({
  label = "Select Base Color:",
  color,
  onChange,
  showHex = true,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

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

  const handleChange = (colorResult: any) => {
    onChange(colorResult.hex);
  };

  return (
    <div className="w-full max-w-sm flex flex-row gap-2 items-center relative dark:border-gray-700">
      {label && (
        <label className="text-xl font-bold text-gray-900 dark:text-white">
          {label}
        </label>
      )}

      <button
        onClick={() => setShowPicker(!showPicker)}
        className="w-20 h-10 rounded-md border shadow-sm hover:shadow-lg transition"
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
