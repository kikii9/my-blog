export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"基础\",\"children\":[{\"text\":\"HTML\",\"link\":\"/basic/HTML.md\"},{\"text\":\"网络请求\",\"link\":\"/basic/网络请求.md\"}]},{\"text\":\"Java知识\",\"children\":[{\"text\":\"java基础\",\"link\":\"/java/java基础.md\"}]},{\"text\":\"网络知识\",\"children\":[{\"text\":\"基础\",\"link\":\"/network/基础.md\"},{\"text\":\"网络安全\",\"link\":\"/network/网络安全.md\"}]},{\"text\":\"读书笔记\",\"children\":[{\"text\":\"图解TCPIP\",\"link\":\"/notes/图解TCPIP.md\"}]},{\"text\":\"其他\",\"children\":[{\"text\":\"git\",\"link\":\"/other/git.md\"},{\"text\":\"npm\",\"link\":\"/other/npm.md\"},{\"text\":\"vscode快捷键\",\"link\":\"/other/vscode快捷键.md\"},{\"text\":\"金融基础概念名词\",\"link\":\"/other/金融基础概念名词.md\"}]},{\"text\":\"项目\",\"children\":[{\"text\":\"ide底层代码之组件封装\",\"link\":\"/project/ide底层代码之组件封装.md\"},{\"text\":\"上海银行排队项目\",\"link\":\"/project/上海银行排队项目.md\"},{\"text\":\"南海poc项目\",\"link\":\"/project/南海poc项目.md\"},{\"text\":\"微信管理平台\",\"link\":\"/project/微信管理平台.md\"},{\"text\":\"微应用开发\",\"link\":\"/project/微应用开发.md\"},{\"text\":\"柜面poc项目\",\"link\":\"/project/柜面poc项目.md\"},{\"text\":\"海南柜面项目\",\"link\":\"/project/海南柜面项目.md\"},{\"text\":\"渠道一体化开发者平台\",\"link\":\"/project/渠道一体化开发者平台.md\"},{\"text\":\"渠道一体化项目迁移\",\"link\":\"/project/渠道一体化项目迁移.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
