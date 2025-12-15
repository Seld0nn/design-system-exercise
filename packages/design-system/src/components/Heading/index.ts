/**
 * Heading Component Entry Point: Automatically exports the correct platform-specific implementation.
 * (web: imports Heading.tsx) (React Native: imports Heading.native.tsx)
 */

export { Heading } from "./Heading";
export type { WebHeadingProps as HeadingProps } from "./types";
export type { HeadingLevel, HeadingColor, HeadingAlign } from "./types";
