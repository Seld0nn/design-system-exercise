/**
 * Text Component - React Native Version: A flexible text component that integrates with the theme system. Supports multiple variants, colors, and styling options.
 */

import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { NativeTextProps } from "./types";
import { getColorValue } from "../../utils/getColorValue";

// Text Component for React Native Usage: <Text variant="body" color="primary"> Hello World </Text>
export const Text: React.FC<NativeTextProps> = ({
  children,
  variant = "body",
  color = "primary",
  align = "left",
  weight,
  size,
  italic = false,
  underline = false,
  strikethrough = false,
  numberOfLines,
  style,
  onPress,
  selectable = false,
  testID,
}) => {
  const { theme } = useTheme();

  const variantStyle = theme.typography.textStyles[variant];

  const combinedStyle: TextStyle = {
    fontSize: size ?? variantStyle.fontSize,
    fontWeight: weight
      ? theme.typography.fontWeight[weight]
      : variantStyle.fontWeight,
    lineHeight: variantStyle.lineHeight * (size ?? variantStyle.fontSize),
    letterSpacing: variantStyle.letterSpacing,

    fontFamily: theme.typography.fontFamily.sans.native,

    color: getColorValue(color, theme),

    textAlign: align,

    fontStyle: italic ? "italic" : "normal",
    textDecorationLine: underline
      ? "underline"
      : strikethrough
      ? "line-through"
      : "none",

    ...(style as TextStyle),
  };

  return (
    <RNText
      style={combinedStyle}
      onPress={onPress}
      numberOfLines={numberOfLines}
      selectable={selectable}
      testID={testID}
    >
      {children}
    </RNText>
  );
};
