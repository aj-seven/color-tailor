import React, { useState } from "react";

interface ColorInputProps {
  onColorChange: (color: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ onColorChange }) => {
  const [color, setColor] = useState("#ff5733");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold mb-2">Enter Base Color</label>
      <input
        type="color"
        value={color}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded-md"
      />
    </div>
  );
};

export default ColorInput;
