/**
 * Metro configuration for Expo in a monorepo
 *
 * Key: Force react and react-native to resolve from THIS project's
 * node_modules to avoid version conflicts in the monorepo.
 */

const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Watch all files in the monorepo
config.watchFolders = [workspaceRoot];

// Resolve packages from both locations
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// CRITICAL: Force these packages to always resolve from the project root
// This prevents Metro from loading duplicate/incompatible versions
config.resolver.extraNodeModules = {
  react: path.resolve(projectRoot, "node_modules/react"),
  "react-native": path.resolve(projectRoot, "node_modules/react-native"),
};

// Block react-native from being loaded from other locations
config.resolver.blockList = [
  // Block react-native from design-system's node_modules
  new RegExp(
    path.resolve(workspaceRoot, "packages/design-system/node_modules/react-native").replace(/[/\\]/g, "[/\\\\]") + "/.*"
  ),
];

module.exports = config;
