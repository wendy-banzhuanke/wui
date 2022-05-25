/*
 * @Author: zhangjian
 * @Date: 2022-03-29 11:49:58
 * @LastEditTime: 2022-05-25 14:59:31
 * @LastEditors: zhangjian
 * @Description: 描述
 */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    // "../src/**/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.ts$/,
  //     loader: "ts-loader",
  //     options: { appendTsSuffixTo: [/\.vue$/] },
  //   });
  //   config.resolve.plugins = config.resolve.plugins || [];
  //   config.resolve.plugins.push(new TsconfigPathsPlugin({}));
  //   return config;
  // },
}