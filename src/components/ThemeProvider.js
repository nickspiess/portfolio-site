import React, { useState, createContext, useContext, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';

// Create a context for theme management
export const ThemeContext = createContext();

// Theme names for easy reference
export const THEMES = {
  NORTHERN: 'themeNorthern',
  SUNSET: 'themeSunset',
  OCEAN: 'themeOcean',
  AURORA: 'themeAurora'
};

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  // Initialize with saved theme or default to Northern Lights
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('runningAppTheme');
      return savedTheme || THEMES.NORTHERN; // Default to Northern theme
    }
    return THEMES.NORTHERN;
  });
  
  // Apply theme classes to the body when theme changes
  useEffect(() => {
    // Remove all theme classes
    Object.values(THEMES).forEach(theme => {
      document.body.classList.remove(theme);
    });
    
    // Add current theme class and variables class
    document.body.classList.add('themeVariables');
    document.body.classList.add(currentTheme);
    
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('runningAppTheme', currentTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Switcher Component
const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme, THEMES } = useTheme();
  
  // Theme options with display names and corresponding class names
  const themeOptions = [
    { name: 'Northern Lights', value: THEMES.NORTHERN, class: styles.themeButtonNorthern },
    { name: 'Sunset', value: THEMES.SUNSET, class: styles.themeButtonSunset },
    { name: 'Ocean Depths', value: THEMES.OCEAN, class: styles.themeButtonOcean },
    { name: 'Aurora', value: THEMES.AURORA, class: styles.themeButtonAurora }
  ];
  
  return (
    <div className={styles.themeSwitcherContainer}>
      <h3 className={styles.themeSwitcherTitle}>Color Scheme</h3>
      <div className={styles.themeButtonsContainer}>
        {themeOptions.map((theme) => (
          <button
            key={theme.value}
            className={`${styles.themeButton} ${theme.class} ${currentTheme === theme.value ? styles.active : ''}`}
            onClick={() => setCurrentTheme(theme.value)}
            aria-label={`Switch to ${theme.name} theme`}
            title={theme.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;