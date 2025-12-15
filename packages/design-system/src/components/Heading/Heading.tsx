/**
 * Heading Component - Web Version: A semantic heading component with proper HTML hierarchy.
 * Supports levels 1-6 and allows visual/semantic separation.
 */

import React from "react";
import { useTheme } from "../../theme/useTheme";
import { WebHeadingProps } from "./types";
import { getColorValue } from "../../utils/getColorValue";

//Heading Component for Web
//Usage: <Heading level={1}>Main Title</Heading> <Heading level={2} color="accent">Subtitle</Heading>
export const Heading: React.FC<WebHeadingProps> = ({
  children,
  level = 1,
  color = "primary",
  align = "left",
  weight,
  as,
  className,
  style,
  testID,
}) => {
  const { theme } = useTheme();

  const levelKey = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const variantStyle = theme.typography.textStyles[levelKey];

  const combinedStyle: React.CSSProperties = {
    fontSize: variantStyle.fontSize,
    fontWeight: weight
      ? theme.typography.fontWeight[weight]
      : variantStyle.fontWeight,
    lineHeight: variantStyle.lineHeight,
    letterSpacing: variantStyle.letterSpacing,

    fontFamily: theme.typography.fontFamily.sans.web,

    color: getColorValue(color, theme),

    textAlign: align,

    margin: 0,

    ...style,
  };

  const Component = as || `h${level}`;

  return React.createElement(
    Component,
    {
      className,
      style: combinedStyle,
      "data-testid": testID,
    },
    children
  );
};
