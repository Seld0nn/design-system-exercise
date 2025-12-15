/**
 * Text Component - Web Version: A flexible text component that integrates with the theme system. Supports multiple variants, colors, and styling options.
 */

import React from "react";
import { useTheme } from "../../theme/useTheme";
import { WebTextProps } from "./types";
import { getColorValue } from "../../utils/getColorValue";

// Text Component for Web Usage: <Text variant="body" color="primary"> Hello World </Text>
export const Text: React.FC<WebTextProps> = ({
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
  className,
  style,
  onClick,
  testID,
}) => {
  const { theme } = useTheme();

  const variantStyle = theme.typography.textStyles[variant];

  const combinedStyle: React.CSSProperties = {
    fontSize: size ?? variantStyle.fontSize,
    fontWeight: weight
      ? theme.typography.fontWeight[weight]
      : variantStyle.fontWeight,
    lineHeight: variantStyle.lineHeight,
    letterSpacing: variantStyle.letterSpacing,

    fontFamily: theme.typography.fontFamily.sans.web,

    color: getColorValue(color, theme),

    textAlign: align,

    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline
      ? "underline"
      : strikethrough
      ? "line-through"
      : "none",

    ...(numberOfLines && {
      display: "-webkit-box",
      WebkitLineClamp: numberOfLines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),

    ...style,
  };

  return (
    <span
      className={className}
      style={combinedStyle}
      onClick={onClick}
      data-testid={testID}
    >
      {children}
    </span>
  );
};
