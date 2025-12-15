/**
 * Text Component Entry Point: Automatically exports the correct platform-specific implementation.
 * (web: imports Text.tsx) (React Native: imports Text.native.tsx)
 */

export { Text } from "./Text";
export type { WebTextProps as TextProps } from "./types";
export type { TextVariant, TextColor, TextAlign } from "./types";
