const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // For server-side code, use the CJS version
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(/dmeditor/, path.resolve(__dirname, './node_modules/dmeditor/index.cjs')));
    } else {
      // For client-side code, use the ESM version
      config.plugins.push(new webpack.NormalModuleReplacementPlugin(/dmeditor/, path.resolve(__dirname, './node_modules/dmeditor/index.mjs')));
    }

    return config;
  },
};

module.exports = nextConfig;
