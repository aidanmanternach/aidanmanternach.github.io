import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

import { sun, moon } from '../assets';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}
        className="p-2"
    >
      <img
        src={theme === 'light' ? moon : sun}
        alt={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
        className={`w-10 h-10 ${theme === 'dark' ? 'filter invert' : ''}`}
      />
    </button>
  );
};

export default ThemeToggle;
