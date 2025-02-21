import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { join } from "path";
import { readdirSync } from "fs";

function getNav(folder) {
  const path = join("E:\\other\\my-blog\\docs", folder);
  const file_list = readdirSync(path);
  const children = [];
  for (let i = 0; i < file_list.length; i++) {
    children.push({
      text: file_list[i].slice(0, -3),
      link: `/${folder}/${file_list[i]}`,
    });
  }
  return children;
}

export default defineUserConfig({
  title: "",
  description: "This is a blog.",
  base: "/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: "基础",
        children: [
          {
            text: "项目基础配置",
            children: getNav("basic_config"),
          },
          {
            text: "CSS基础",
            children: getNav("css"),
          },
          {
            text: "HTML基础",
            children: getNav("html"),
          },
        ],
      },
      {
        text: "进阶",
        children: [
          {
            text: "git",
            children: getNav("git"),
          },
        
        ],
      },
      {
        text: "前端框架",
        children: [
          {
            text: "Vue.js",
            children: getNav("vue"),
          },
          {
            text: "React.js",
            children: getNav("react"),
          },
          {
            text: "Angular",
            children: getNav("angular"),
          },
          {
            text: "Electron",
            children: getNav("Electron"),
          },
        ],
      },
      {
        text: "后端和工具",
        children: [
          {
            text: "Node.js",
            children: getNav("node"),
          },
          {
            text: "Python",
            children: getNav("python"),
          },
          {
            text: "前端工具",
            children: getNav("tools"),
          },
          {
            text: "UI组件库",
            children: getNav("component"),
          },
          {
            text: "服务器",
            children: getNav("server"),
          },
        ],
      },
      {
        text: "实用工具及其他",
        children: [
          {
            text: "实用工具类及脚本",
            children: getNav("script"),
          },
          {
            text: "未分类-随记",
            children: getNav("other"),
          },
        ],
      },
    ],
    
  }),

  head: [
    ["link", { rel: "icon", href: "favicon.ico" }], // 设置 Favicon
  ],
});
