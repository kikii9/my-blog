# 20240506

```JavaScript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import externalGlobals from "rollup-plugin-external-globals";
import { viteExternalsPlugin } from "vite-plugin-externals";
import vueCase from "./plugin/vite-plugin-case/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vueCase(),
    vue(),
    viteExternalsPlugin({
      "nt-nui": "nui",
      vue: "Vue",
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  envDir: "./env",
  server: {
    cors: true,
    port: 8001,
    proxy: {
      "/api": {
        target: "http://10.20.30.40:1234/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
          //这个设置能看到代理前后的地址
        bypass(req, res, options: any) {
          const proxyURL = options.target + options.rewrite(req.url);
          console.log("proxyURL", proxyURL);
          req.headers["x-req-proxyURL"] = proxyURL; // 设置未生效
          res.setHeader("x-req-proxyURL", proxyURL); // 设置响应头可以看到
        },
      },
    },
  },
  build: {
    rollupOptions: {
      external: ["vue", "nui", "vue-router"],
      plugins: [
        externalGlobals({ vue: "Vue", nui: "nui", "vue-router": "VueRouter" }),
      ],
      output: {
        format: "iife",
        chunkFileNames: "main.js",
        inlineDynamicImports: true,
      },
    },
  },
});

```

