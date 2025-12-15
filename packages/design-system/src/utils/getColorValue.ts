/**
 * Color Utilities: Shared utilities for mapping color props to theme values. This ensures consistency across all components.
 */

import { Theme } from "../theme/ThemeContext";

// All available color keys that can be used in components
export type ColorKey =
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled"
  | "inverse"
  | "accent"
  | "success"
  | "error"
  | "warning"
  | "info";

// Get color value from theme based on color key
export const getColorValue = (color: ColorKey, theme: Theme): string => {
  switch (color) {
    case "primary":
      return theme.active.text.primary;
    case "secondary":
      return theme.active.text.secondary;
    case "tertiary":
      return theme.active.text.tertiary;
    case "disabled":
      return theme.active.text.disabled;
    case "inverse":
      return theme.active.text.inverse;
    case "accent":
      return theme.active.accent;
    case "success":
      return theme.active.success;
    case "error":
      return theme.active.error;
    case "warning":
      return theme.active.warning;
    case "info":
      return theme.active.info;
    default:
      // Fallback to primary text color
      return theme.active.text.primary;
  }
};
