// Theme configuration
// Each theme defines colors that will be used throughout the app
export const themes = {
  default: {
    id: 'default',
    name: 'Default',
    icon: '🎨',
    colors: {
      // These will be used in step 3 with CSS variables
      primary: '#3b82f6', // blue-500
      secondary: '#1e40af', // blue-700
      background: '#f9fafb', // gray-50
      surface: '#ffffff',
      text: '#111827', // gray-900
      textSecondary: '#6b7280', // gray-500
    }
  },
  // Custom palette theme will be added in step 3
};

export const getTheme = (themeId) => {
  return themes[themeId] || themes.default;
};

