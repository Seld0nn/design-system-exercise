/**
 * Theme Context
 *
 * Provides theme configuration for future components and mode (light/dark) to all components
 */

import { createContext } from "react";
import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";

/**
 * Theme mode type
 */
export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: typeof colors;
  typography: typeof typography;
  active: {
    background: string;
    surface: string;
    surfaceVariant: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
    };
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

/**
 * Helper to build active colors based on mode
 *
 * @param mode - Current theme mode
 * @returns Active color set for the mode
 */
export const getActiveColors = (mode: ThemeMode) => {
  const themeColors = colors.theme[mode];

  return {
    background: themeColors.background,
    surface: themeColors.surface,
    surfaceVariant: themeColors.surfaceVariant,
    border: themeColors.border,
    text: themeColors.text,
    primary: colors.primary[400],
    secondary: colors.secondary[400],
    accent: colors.accent[400],
    success: colors.semantic.success[mode === "dark" ? "dark" : "light"],
    error: colors.semantic.error[mode === "dark" ? "dark" : "light"],
    warning: colors.semantic.warning[mode === "dark" ? "dark" : "light"],
    info: colors.semantic.info[mode === "dark" ? "dark" : "light"],
  };
};
