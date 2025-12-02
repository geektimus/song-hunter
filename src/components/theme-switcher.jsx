import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../config/themes';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const themeList = Object.values(themes);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
        aria-label="Theme switcher"
      >
        <span className="text-xl">{themes[theme]?.icon || '🎨'}</span>
        <span className="text-sm font-medium">Theme</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-20">
            {themeList.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => {
                  toggleTheme(themeOption.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  theme === themeOption.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{themeOption.icon}</span>
                <span className="font-medium">{themeOption.name}</span>
                {theme === themeOption.id && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;

