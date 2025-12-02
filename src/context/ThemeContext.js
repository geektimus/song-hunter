import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTheme } from '../config/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or default to 'default'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('songHunterTheme');
    return savedTheme || 'default';
  });

  // Apply theme CSS variables and save to localStorage
  useEffect(() => {
    const themeConfig = getTheme(theme);
    const root = document.documentElement;
    
    // Apply theme attribute for CSS selectors
    root.setAttribute('data-theme', theme);
    
    // Apply CSS variables dynamically - map all theme colors
    if (themeConfig.colors) {
      Object.entries(themeConfig.colors).forEach(([key, value]) => {
        // Convert camelCase to kebab-case for CSS variables
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--color-${cssKey}`, value);
      });
    }
    
    // Save theme preference
    localStorage.setItem('songHunterTheme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    themeConfig: getTheme(theme),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

