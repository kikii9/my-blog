export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"基础\",\"children\":[{\"text\":\"项目基础配置\",\"children\":[{\"text\":\"vite.config.js配置\",\"link\":\"/basic_config/vite.config.js配置.md\"},{\"text\":\"vite\",\"link\":\"/basic_config/vite.md\"},{\"text\":\"vue基础\",\"link\":\"/basic_config/vue基础.md\"},{\"text\":\"服务器基础\",\"link\":\"/basic_config/服务器基础.md\"}]},{\"text\":\"CSS基础\",\"children\":[{\"text\":\"css3的新特性\",\"link\":\"/css/css3的新特性.md\"}]},{\"text\":\"HTML基础\",\"children\":[{\"text\":\"window对象\",\"link\":\"/html/window对象.md\"},{\"text\":\"地址栏各种特殊符号的含义\",\"link\":\"/html/地址栏各种特殊符号的含义.md\"}]}]},{\"text\":\"进阶\",\"children\":[{\"text\":\"git\",\"children\":[{\"text\":\"git术语\",\"link\":\"/git/git术语.md\"}]}]},{\"text\":\"前端框架\",\"children\":[{\"text\":\"Vue.js\",\"children\":[{\"text\":\"MVVM模型详解\",\"link\":\"/vue/MVVM模型详解.md\"},{\"text\":\"生命周期\",\"link\":\"/vue/生命周期.md\"}]},{\"text\":\"React.js\",\"children\":[]},{\"text\":\"Angular\",\"children\":[]},{\"text\":\"Electron\",\"children\":[]}]},{\"text\":\"后端和工具\",\"children\":[{\"text\":\"Node.js\",\"children\":[]},{\"text\":\"Python\",\"children\":[{\"text\":\"基于flask开发的dify\",\"link\":\"/python/基于flask开发的dify.md\"}]},{\"text\":\"前端工具\",\"children\":[]},{\"text\":\"UI组件库\",\"children\":[{\"text\":\"elementui组件库\",\"link\":\"/component/elementui组件库.md\"}]},{\"text\":\"服务器\",\"children\":[{\"text\":\"http请求方式\",\"link\":\"/server/http请求方式.md\"}]}]},{\"text\":\"实用工具及其他\",\"children\":[{\"text\":\"实用工具类及脚本\",\"children\":[{\"text\":\"类型转换js方法合集\",\"link\":\"/script/类型转换js方法合集.md\"}]},{\"text\":\"未分类-随记\",\"children\":[{\"text\":\"20240429\",\"link\":\"/other/20240429.md\"},{\"text\":\"20240726\",\"link\":\"/other/20240726.md\"},{\"text\":\"20240729\",\"link\":\"/other/20240729.md\"}]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
