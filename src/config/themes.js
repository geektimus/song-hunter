// Theme configuration
// Each theme defines colors that will be used throughout the app
export const themes = {
  default: {
    id: 'default',
    name: 'Default',
    icon: '🎨',
    colors: {
      primary: '#3b82f6', // blue-500
      primaryHover: '#2563eb', // blue-600
      secondary: '#1e40af', // blue-700
      secondaryHover: '#1e3a8a', // blue-800
      background: '#f9fafb', // gray-50
      backgroundSecondary: '#f3f4f6', // gray-100
      surface: '#ffffff',
      surfaceHover: '#f9fafb', // gray-50
      text: '#111827', // gray-900
      textSecondary: '#6b7280', // gray-500
      textLight: '#ffffff', // white
      accent: '#3b82f6', // blue-500
      accentHover: '#2563eb', // blue-600
      navbar: '#1f2937', // gray-800
      navbarSecondary: '#111827', // gray-900
      border: '#e5e7eb', // gray-200
      borderDark: '#d1d5db', // gray-300
      badge: '#3b82f6', // blue-500
      badgeDark: '#1e40af', // blue-700
      ranking: '#1e40af', // blue-700
    }
  },
  oceanSunset: {
    id: 'oceanSunset',
    name: 'Ocean Sunset',
    icon: '🌅',
    colors: {
      // From the palette: dark teal/navy for navbar
      navbar: '#0d1b2a', // Very dark teal/navy
      navbarSecondary: '#1e3a5f', // Dark teal
      
      // Primary actions: medium teal/cyan
      primary: '#0891b2', // Medium teal/cyan
      primaryHover: '#06b6d4', // Vibrant cyan
      
      // Secondary/accent: orange tones
      secondary: '#ea580c', // Burnt orange
      accent: '#f59e0b', // Vibrant orange-yellow
      accentHover: '#fbbf24', // Lighter orange-yellow
      
      // Backgrounds: light beige/cream
      background: '#fef3e2', // Light creamy beige
      backgroundSecondary: '#f5f5dc', // Off-white beige
      
      // Surfaces: white with warm tint
      surface: '#ffffff',
      surfaceHover: '#fff8f0', // Slight warm tint
      
      // Text colors
      text: '#1e293b', // Dark slate
      textSecondary: '#64748b', // Medium slate
      textLight: '#ffffff', // White for dark backgrounds
      
      // Borders and dividers
      border: '#e2e8f0', // Light gray
      borderDark: '#cbd5e1', // Medium gray
      
      // Special colors
      badge: '#dc2626', // Reddish-brown/rust
      badgeDark: '#991b1b', // Deep red
      ranking: '#7f1d1d', // Rich burgundy
    }
  },
};

export const getTheme = (themeId) => {
  return themes[themeId] || themes.default;
};

