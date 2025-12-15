/**
 * Theme Provider
 *
 * Wraps the application and provides theme context to all components
 * Manages theme mode state and provides toggle functionality
 */

import React, { useState, useMemo, ReactNode } from "react";
import {
  ThemeContext,
  ThemeMode,
  Theme,
  getActiveColors,
} from "./ThemeContext";
import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";

/**
 * Theme Provider Props
 * @param children - Child components that will have access to theme
 * @param initialMode - Initial theme mode
 * @param onThemeChange - Optional callback when theme changes
 */
export interface ThemeProviderProps {
  children: ReactNode;

  //Initial theme mode @default 'light'
  initialMode?: ThemeMode;

  //Optional callback when theme changes Useful for persisting theme preference
  onThemeChange?: (mode: ThemeMode) => void;
}

//ThemeProvider Component Usage: <ThemeProvider initialMode="light"> <App /> </ThemeProvider>
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = "light",
  onThemeChange,
}) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  //Build complete theme object Memoized to prevent unnecessary re-renders
  const theme: Theme = useMemo(
    () => ({
      mode,
      colors,
      typography,
      active: getActiveColors(mode),
    }),
    [mode]
  );

  //Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      onThemeChange?.(newMode);
      return newMode;
    });
  };

  //Set specific theme mode
  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
    onThemeChange?.(newMode);
  };

  //Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme: setThemeMode,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
