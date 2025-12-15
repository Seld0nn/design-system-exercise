/**
 * Color Palette "Aurora"
 * this palette is inspired by the aurora borealis
 */

export const colors = {
  // Primary
  primary: {
    50: "#E6F7F7",
    100: "#B3EAEA",
    200: "#80DCDC",
    300: "#4DCFCF",
    400: "#26C5C5", // Main primary color
    500: "#1AA3A3",
    600: "#158282",
    700: "#106161",
    800: "#0A4040",
    900: "#052020",
  },

  // Secondary
  secondary: {
    50: "#F3EEFF",
    100: "#DECFFF",
    200: "#C9B0FF",
    300: "#B391FF",
    400: "#9E72FF", // Main secondary color
    500: "#8554E6",
    600: "#6C3FCC",
    700: "#532BB3",
    800: "#3A1A99",
    900: "#210A80",
  },

  // Accent
  accent: {
    50: "#FFF0ED",
    100: "#FFD6CC",
    200: "#FFBDAB",
    300: "#FFA38A",
    400: "#FF8A69", // Main accent color
    500: "#FF6B42",
    600: "#E6522B",
    700: "#CC3A15",
    800: "#B32300",
    900: "#991D00",
  },

  // Neutral
  neutral: {
    0: "#FFFFFF",
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    1000: "#000000",
  },

  // Semantic Colors
  semantic: {
    // Success
    success: {
      light: "#10B981",
      main: "#059669",
      dark: "#047857",
      bg: "#D1FAE5",
      bgDark: "#064E3B",
    },

    // Error
    error: {
      light: "#EF4444",
      main: "#DC2626",
      dark: "#B91C1C",
      bg: "#FEE2E2",
      bgDark: "#7F1D1D",
    },

    // Warning
    warning: {
      light: "#F59E0B",
      main: "#D97706",
      dark: "#B45309",
      bg: "#FEF3C7",
      bgDark: "#78350F",
    },

    // Info
    info: {
      light: "#3B82F6",
      main: "#2563EB",
      dark: "#1D4ED8",
      bg: "#DBEAFE",
      bgDark: "#1E3A8A",
    },
  },

  // Theme specific colors
  theme: {
    light: {
      background: "#FFFFFF",
      surface: "#F8FAFC",
      surfaceVariant: "#F1F5F9",
      border: "#E2E8F0",
      text: {
        primary: "#0F172A",
        secondary: "#475569",
        tertiary: "#94A3B8",
        disabled: "#CBD5E1",
        inverse: "#FFFFFF",
      },
    },
    dark: {
      background: "#0F172A",
      surface: "#1E293B",
      surfaceVariant: "#334155",
      border: "#475569",
      text: {
        primary: "#F8FAFC",
        secondary: "#CBD5E1",
        tertiary: "#94A3B8",
        disabled: "#64748B",
        inverse: "#0F172A",
      },
    },
  },
} as const;

export type ColorPalette = typeof colors;
export type PrimaryColor = keyof typeof colors.primary;
export type SecondaryColor = keyof typeof colors.secondary;
export type AccentColor = keyof typeof colors.accent;
export type NeutralColor = keyof typeof colors.neutral;
export type SemanticColorType = keyof typeof colors.semantic;
