import { appTools, defineConfig } from '@modern-js/app-tools';
// import { withZephyr as ZephyrPlugin } from 'zephyr-webpack-plugin';
// import type { PluginOptions } from '@modern-js/runtime/dist/types/core';
import rspack from '@rspack/core';
// https://modernjs.dev/en/configure/app/usage

// function withZephyr(): PluginOptions<any, (...args: any[]) => void> {
//   try {
//     return ZephyrPlugin() as PluginOptions<any, (...args: any[]) => void>;
//   } catch (err) {
//     console.error('zephyr error', err);
//     return ZephyrPlugin() as PluginOptions<any, (...args: any[]) => void>;
//   }
// }
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    new rspack.DefinePlugin({
      //  zephyr: ZephyrPlugin(),
    }),
  ],
});
