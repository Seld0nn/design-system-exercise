/**
 * useTheme Hook
 * Custom hook to access theme context in any component. Throws error if used outside ThemeProvider.
 */

import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "./ThemeContext";

// useTheme Hook Usage:
/**
 * function MyComponent() {
 *   const { theme, toggleTheme } = useTheme();
 *   return ( <Text style={{ color: theme.active.text.primary }}> Hello World </Text> );
 * }
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. " +
        "Wrap your app with <ThemeProvider> to use theme functionality."
    );
  }

  return context;
};
