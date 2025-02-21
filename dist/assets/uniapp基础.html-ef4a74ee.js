import{_ as a,r as s,o as i,c as o,a as t,b as e,e as n}from"./app-8b6d79d9.js";const d={},f=t("h1",{id:"uniapp基础",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uniapp基础","aria-hidden":"true"},"#"),e(" uniapp基础")],-1),g=t("h3",{id:"生命周期",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#生命周期","aria-hidden":"true"},"#"),e(" 生命周期")],-1),r=t("p",null,[t("code",null,"uni-app"),e(" 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数")],-1),_=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"函数名"),t("th",{style:{"text-align":"left"}},"说明"),t("th",{style:{"text-align":"left"}},"平台差异说明"),t("th",{style:{"text-align":"left"}},"最低版本")])],-1),c=t("tr",null,[t("td",{style:{"text-align":"left"}},"onInit"),t("td",{style:{"text-align":"left"}},"监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad"),t("td",{style:{"text-align":"left"}},"百度小程序"),t("td",{style:{"text-align":"left"}},"3.1.0+")],-1),x=t("td",{style:{"text-align":"left"}},"onLoad",-1),y={style:{"text-align":"left"}},h={href:"https://uniapp.dcloud.net.cn/api/router#navigateto",target:"_blank",rel:"noopener noreferrer"},u=t("td",{style:{"text-align":"left"}},null,-1),p=t("td",{style:{"text-align":"left"}},null,-1),b=t("tr",null,[t("td",{style:{"text-align":"left"}},"onShow"),t("td",{style:{"text-align":"left"}},"监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),k=t("tr",null,[t("td",{style:{"text-align":"left"}},"onReady"),t("td",{style:{"text-align":"left"}},"监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),v=t("tr",null,[t("td",{style:{"text-align":"left"}},"onHide"),t("td",{style:{"text-align":"left"}},"监听页面隐藏"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),B=t("tr",null,[t("td",{style:{"text-align":"left"}},"onUnload"),t("td",{style:{"text-align":"left"}},"监听页面卸载"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),m=t("tr",null,[t("td",{style:{"text-align":"left"}},"onResize"),t("td",{style:{"text-align":"left"}},"监听窗口尺寸变化"),t("td",{style:{"text-align":"left"}},"App、微信小程序、快手小程序"),t("td",{style:{"text-align":"left"}})],-1),A=t("td",{style:{"text-align":"left"}},"onPullDownRefresh",-1),I={style:{"text-align":"left"}},H={href:"https://uniapp.dcloud.net.cn/api/ui/pulldown",target:"_blank",rel:"noopener noreferrer"},N=t("td",{style:{"text-align":"left"}},null,-1),S=t("td",{style:{"text-align":"left"}},null,-1),j=t("tr",null,[t("td",{style:{"text-align":"left"}},"onReachBottom"),t("td",{style:{"text-align":"left"}},"页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),Q=t("tr",null,[t("td",{style:{"text-align":"left"}},"onTabItemTap"),t("td",{style:{"text-align":"left"}},"点击 tab 时触发，参数为Object，具体见下方注意事项"),t("td",{style:{"text-align":"left"}},"微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序"),t("td",{style:{"text-align":"left"}})],-1),T=t("tr",null,[t("td",{style:{"text-align":"left"}},"onShareAppMessage"),t("td",{style:{"text-align":"left"}},"用户点击右上角分享"),t("td",{style:{"text-align":"left"}},"微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序、京东小程序"),t("td",{style:{"text-align":"left"}})],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},"onPageScroll"),t("td",{style:{"text-align":"left"}},"监听页面滚动，参数为Object"),t("td",{style:{"text-align":"left"}},"nvue暂不支持"),t("td",{style:{"text-align":"left"}})],-1),O=t("tr",null,[t("td",{style:{"text-align":"left"}},"onNavigationBarButtonTap"),t("td",{style:{"text-align":"left"}},"监听原生标题栏按钮点击事件，参数为Object"),t("td",{style:{"text-align":"left"}},"App、H5"),t("td",{style:{"text-align":"left"}})],-1),w=t("td",{style:{"text-align":"left"}},"onBackPress",-1),C={style:{"text-align":"left"}},P={href:"http://ask.dcloud.net.cn/article/35120",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"left"}},"app、H5、支付宝小程序",-1),V=t("td",{style:{"text-align":"left"}},null,-1),E=t("tr",null,[t("td",{style:{"text-align":"left"}},"onNavigationBarSearchInputChanged"),t("td",{style:{"text-align":"left"}},"监听原生标题栏搜索输入框输入内容变化事件"),t("td",{style:{"text-align":"left"}},"App、H5"),t("td",{style:{"text-align":"left"}},"1.6.0")],-1),z=t("tr",null,[t("td",{style:{"text-align":"left"}},"onNavigationBarSearchInputConfirmed"),t("td",{style:{"text-align":"left"}},"监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。"),t("td",{style:{"text-align":"left"}},"App、H5"),t("td",{style:{"text-align":"left"}},"1.6.0")],-1),D=t("tr",null,[t("td",{style:{"text-align":"left"}},"onNavigationBarSearchInputClicked"),t("td",{style:{"text-align":"left"}},"监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）"),t("td",{style:{"text-align":"left"}},"App、H5"),t("td",{style:{"text-align":"left"}},"1.6.0")],-1),F=t("tr",null,[t("td",{style:{"text-align":"left"}},"onShareTimeline"),t("td",{style:{"text-align":"left"}},"监听用户点击右上角转发到朋友圈"),t("td",{style:{"text-align":"left"}},"微信小程序"),t("td",{style:{"text-align":"left"}},"2.8.1+")],-1),M=t("tr",null,[t("td",{style:{"text-align":"left"}},"onAddToFavorites"),t("td",{style:{"text-align":"left"}},"监听用户点击右上角收藏"),t("td",{style:{"text-align":"left"}},"微信小程序、QQ小程序"),t("td",{style:{"text-align":"left"}},"2.8.1+")],-1);function U(q,G){const l=s("ExternalLinkIcon");return i(),o("div",null,[f,g,r,t("table",null,[_,t("tbody",null,[c,t("tr",null,[x,t("td",y,[e("监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考"),t("a",h,[e("示例"),n(l)])]),u,p]),b,k,v,B,m,t("tr",null,[A,t("td",I,[e("监听用户下拉动作，一般用于下拉刷新，参考"),t("a",H,[e("示例"),n(l)])]),N,S]),j,Q,T,L,O,t("tr",null,[w,t("td",C,[e("监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用："),t("a",P,[e("onBackPress 详解"),n(l)]),e("。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。")]),R,V]),E,z,D,F,M])])])}const K=a(d,[["render",U],["__file","uniapp基础.html.vue"]]);export{K as default};
