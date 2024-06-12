import webpack from "webpack";
import path from "path";
const __dirname = path.resolve();
console.log(path.resolve(__dirname, "./node_modules/dmeditor/dist/index.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    // antd & deps
    // "@ant-design",
    // "@rc-component",
    // "antd",
    // "rc-cascader",
    // "rc-checkbox",
    // "rc-collapse",
    // "rc-dialog",
    // "rc-drawer",
    // "rc-dropdown",
    // "rc-field-form",
    // "rc-image",
    // "rc-input",
    // "rc-input-number",
    // "rc-mentions",
    // "rc-menu",
    // "rc-motion",
    // "rc-notification",
    // "rc-pagination",
    // "rc-picker",
    // "rc-progress",
    // "rc-rate",
    // "rc-resize-observer",
    // "rc-segmented",
    // "rc-select",
    // "rc-slider",
    // "rc-steps",
    // "rc-switch",
    // "rc-table",
    // "rc-tabs",
    // "rc-textarea",
    // "rc-tooltip",
    // "rc-tree",
    // "rc-tree-select",
    // "rc-upload",
    // "rc-util",
    // dmeditor
    "dmeditor",
  ],
  // experimental: {
  //   esmExternals: true,
  // },
  // for webpack5
  webpack: (config, { isServer }) => {
    console.log("🚀 ~ isServer:", isServer);
    // Conditionally replace the module based on the environment
    if (isServer) {
      // For server-side code, use the CJS version
      // for production
      // config.plugins.push(
      //   new webpack.NormalModuleReplacementPlugin(
      //     /dmeditor/,
      //     path.resolve(__dirname, "./node_modules/dmeditor/dist/index.cjs")
      //   )
      // );
      // need hot reload for dev
      config.resolve.alias["dmeditor"] = path.resolve(
        __dirname,
        "./node_modules/dmeditor/src/index.ts"
      );
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(
          __dirname,
          "./node_modules/dmeditor/src/index.ts"
        ),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      });
    } else {
      // For client-side code, use the ESM version
      // config.plugins.push(
      //   new webpack.NormalModuleReplacementPlugin(
      //     /dmeditor/,
      //     path.resolve(__dirname, "./node_modules/dmeditor/dist/index.mjs")
      //   )
      // );
      config.resolve.alias["dmeditor"] = path.resolve(
        __dirname,
        "./node_modules/dmeditor/src/index.ts"
      );
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(
          __dirname,
          "./node_modules/dmeditor/src/index.ts"
        ),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      });
    }

    return config;
  },
  // for webpack4
  // webpack: (config, { isServer }) => {
  //   console.log("🚀 ~ isServer:", isServer);
  //   // Conditionally replace the module based on the environment
  //   if (isServer) {
  //     config.plugins.push(
  //       new webpack.NormalModuleReplacementPlugin(
  //         /dmeditor/,
  //         // path.resolve(__dirname, "./node_modules/dmeditor/dist/index.cjs")
  //         function (resource) {
  //           resource.request = resource.request.replace(
  //             /dmeditor/,
  //             path.resolve(__dirname, "./node_modules/dmeditor/dist/index.cjs")
  //           );
  //         }
  //       )
  //     );
  //   } else {
  //     // For client-side code, use the ESM version
  //   }
  //   return config;
  // },
};

export default nextConfig;
