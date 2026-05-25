import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const ColorPicker = () => {
  const { setAccent } = useTheme();

  return (
    <div className="flex gap-2 p-2 bg-surface/50 backdrop-blur-md border border-white/10 rounded-full">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setAccent(color)}
          style={{ backgroundColor: color }}
          className="w-4 h-4 rounded-full hover:scale-125 transition-transform cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ColorPicker;