/**
 * Design System - Main Entry Point: A cross-platform design system for React and React Native.
 * Provides typography components and theming system.
 * Usage:
 * import { ThemeProvider, Text, Heading } from 'design-system';
 *
 * <ThemeProvider>
 *   <Heading level={1}>Welcome</Heading>
 *   <Text variant="body">Hello World</Text>
 * </ThemeProvider>
 */

// Theme System
export { ThemeProvider } from "./theme/ThemeProvider";
export { useTheme } from "./theme/useTheme";
export type { Theme, ThemeMode, ThemeContextValue } from "./theme/ThemeContext";

// Components
export { Text } from "./components/Text";
export type {
  TextProps,
  TextVariant,
  TextColor,
  TextAlign,
} from "./components/Text";

// Heading Component
export { Heading } from "./components/Heading";
export type {
  HeadingProps,
  HeadingLevel,
  HeadingColor,
  HeadingAlign,
} from "./components/Heading";

// Design Tokens
// Colors
export { colors } from "./tokens/colors";
export type {
  ColorPalette,
  PrimaryColor,
  SecondaryColor,
  AccentColor,
  NeutralColor,
  SemanticColorType,
} from "./tokens/colors";

// Typography
export { typography } from "./tokens/typography";
export type {
  Typography,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  TextStyle,
} from "./tokens/typography";
