/**
 * Heading Component Types: Shared type definitions for Heading component across platforms
 */

import { ReactNode } from "react";
import { TextStyle as RNTextStyle } from "react-native";
import { CSSProperties } from "react";

// Heading levels (h1 through h6)
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// Heading color variants
export type HeadingColor =
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

// Text alignment options
export type HeadingAlign = "left" | "center" | "right";

// Base props shared by both platforms
export interface BaseHeadingProps {
  children: ReactNode;

  level?: HeadingLevel;

  color?: HeadingColor;

  align?: HeadingAlign;

  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";

  testID?: string;
}

// Web-specific props
export interface WebHeadingProps extends BaseHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  className?: string;

  style?: CSSProperties;
}

// Native-specific props
export interface NativeHeadingProps extends BaseHeadingProps {
  style?: RNTextStyle;
}
