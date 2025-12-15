/**
 * Text Component Types: Shared type definitions for Text component across platforms
 */

import { ReactNode } from "react";
import { TextStyle as RNTextStyle } from "react-native";
import { CSSProperties } from "react";

// Text variants based on typography presets
export type TextVariant =
  | "body"
  | "bodyLarge"
  | "bodySmall"
  | "caption"
  | "overline"
  | "label"
  | "code";

// Text color variants
export type TextColor =
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
export type TextAlign = "left" | "center" | "right" | "justify";

// Base props shared by both platforms
export interface BaseTextProps {
  children: ReactNode;

  variant?: TextVariant;

  color?: TextColor;

  align?: TextAlign;

  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

  size?: number;

  italic?: boolean;

  underline?: boolean;

  strikethrough?: boolean;

  numberOfLines?: number;

  testID?: string;
}

// Web-specific props
export interface WebTextProps extends BaseTextProps {
  className?: string;

  style?: CSSProperties;

  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

// Native-specific props
export interface NativeTextProps extends BaseTextProps {
  style?: RNTextStyle;

  onPress?: () => void;

  selectable?: boolean;
}
