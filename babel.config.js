module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@Navigation": "./src/navigation",
            "@Components": "./src/components",
            "@PhoneApplications": "./src/phoneApplications",
            "@Web": "./src/web",
            "@Assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      ["react-native-reanimated/plugin"],
    ],
  };
};
