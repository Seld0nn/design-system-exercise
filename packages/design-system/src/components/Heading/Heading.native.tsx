/**
 * Heading Component - React Native Version: A heading component for React Native that matches web styling.
 * Supports levels 1-6 for consistent cross-platform hierarchy and theme-based colors.
 */

import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { NativeHeadingProps } from "./types";
import { getColorValue } from "../../utils/getColorValue";

// Heading Component for React Native Usage:
// <Heading level={1}>Main Title</Heading> <Heading level={2} color="accent">Subtitle</Heading>
export const Heading: React.FC<NativeHeadingProps> = ({
  children,
  level = 1,
  color = "primary",
  align = "left",
  weight,
  style,
  testID,
}) => {
  const { theme } = useTheme();

  const levelKey = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const variantStyle = theme.typography.textStyles[levelKey];

  const combinedStyle: TextStyle = {
    fontSize: variantStyle.fontSize,
    fontWeight: weight
      ? theme.typography.fontWeight[weight]
      : variantStyle.fontWeight,
    lineHeight: variantStyle.lineHeight * variantStyle.fontSize,
    letterSpacing: variantStyle.letterSpacing,

    fontFamily: theme.typography.fontFamily.sans.native,

    color: getColorValue(color, theme),

    textAlign: align,

    ...(style as TextStyle),
  };

  return (
    <RNText style={combinedStyle} testID={testID} accessibilityRole="header">
      {children}
    </RNText>
  );
};
