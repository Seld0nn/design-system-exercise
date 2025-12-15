/**
 * Font Families
 * using system fonts for zero load time, native platform feel and excellent readability
 */
export const typography = {
  fontFamily: {
    // Sans-serif for body text and UI
    sans: {
      // For web
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      // For React Native
      native: "System",
    },
    // Monospace for code
    mono: {
      web: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      native: "Courier",
    },
  },

  /**
   * Font Sizes scale based on 16px base (1rem on web)
   */
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
  },

  // Font Weights
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  /**
   * Line Heights
   *
   * relative values (multiplier of font size)
   */
  lineHeight: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  /**
   * Letter Spacing (tracking)
   * in pixels
   */
  letterSpacing: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },

  /**
   * Preset Text Styles
   */
  textStyles: {
    // Display styles
    display: {
      fontSize: 72,
      fontWeight: "800",
      lineHeight: 1,
      letterSpacing: -0.8,
    },

    // Heading styles (h1, h2, h3, h4, h5, h6)
    h1: {
      fontSize: 48,
      fontWeight: "700",
      lineHeight: 1.25,
      letterSpacing: -0.4,
    },
    h2: {
      fontSize: 36,
      fontWeight: "700",
      lineHeight: 1.25,
      letterSpacing: -0.4,
    },
    h3: {
      fontSize: 30,
      fontWeight: "600",
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 1.5,
      letterSpacing: 0,
    },

    // Body styles
    body: {
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    bodyLarge: {
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 1.75,
      letterSpacing: 0,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 1.5,
      letterSpacing: 0,
    },

    // Specialized styles
    caption: {
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 1.5,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 1.5,
      letterSpacing: 1.6,
      textTransform: "uppercase" as const,
    },
    label: {
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    code: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 1.75,
      letterSpacing: 0,
    },
  },
} as const;

export type Typography = typeof typography;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type TextStyle = keyof typeof typography.textStyles;
