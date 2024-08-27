const path = require("path");

module.exports = {
  entry: "./src/components/index.ts", // Entry point for bundling
  output: {
    path: path.resolve(__dirname, "src/components/dist"),
    filename: "bundle.js", // Output file name
    library: "MyComponents", // Global variable name for UMD
    libraryTarget: "umd", // UMD format for compatibility
    umdNamedDefine: true,
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: "react", // React as external dependency
    "react-dom": "react-dom",
  },
};
