<template><div><h1 id="harmonyos基础课程" tabindex="-1"><a class="header-anchor" href="#harmonyos基础课程" aria-hidden="true">#</a> HarmonyOS基础课程</h1>
<h2 id="_1、harmonyos介绍" tabindex="-1"><a class="header-anchor" href="#_1、harmonyos介绍" aria-hidden="true">#</a> 1、HarmonyOS介绍</h2>
<h3 id="什么是harmonyos" tabindex="-1"><a class="header-anchor" href="#什么是harmonyos" aria-hidden="true">#</a> 什么是HarmonyOS</h3>
<p>新一代的智能终端系统</p>
<p>关键概念：App和元服务</p>
<h3 id="harmonyos核心技术理念" tabindex="-1"><a class="header-anchor" href="#harmonyos核心技术理念" aria-hidden="true">#</a> HarmonyOS核心技术理念</h3>
<ul>
<li>一次开发 多端部署</li>
<li>可分可合 自由流转</li>
<li>统一生态 原生智能</li>
</ul>
<h3 id="上架与分发" tabindex="-1"><a class="header-anchor" href="#上架与分发" aria-hidden="true">#</a> 上架与分发</h3>
<h2 id="_2、deveco-studio的使用" tabindex="-1"><a class="header-anchor" href="#_2、deveco-studio的使用" aria-hidden="true">#</a> 2、DevEco Studio的使用</h2>
<ul>
<li><strong>AppScope &gt; app.json5</strong>：应用的全局配置信息，详见<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/app-configuration-file-V5" target="_blank" rel="noopener noreferrer">app.json5配置文件<ExternalLinkIcon/></a>。</li>
<li><strong>entry</strong>：HarmonyOS工程模块，编译构建生成一个HAP包。
<ul>
<li><strong>src &gt; main &gt; ets</strong>：用于存放ArkTS源码。</li>
<li><strong>src &gt; main &gt; ets &gt; entryability</strong>：应用/服务的入口。</li>
<li><strong>src &gt; main &gt; ets &gt; entrybackupability</strong>：应用提供扩展的备份恢复能力。</li>
<li><strong>src &gt; main &gt; ets &gt; pages</strong>：应用/服务包含的页面。</li>
<li><strong>src &gt; main &gt; resources</strong>：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，详见<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/resource-categories-and-access-V5" target="_blank" rel="noopener noreferrer">资源分类与访问<ExternalLinkIcon/></a>。</li>
<li><strong>src &gt; main &gt; module.json5</strong>：模块配置文件。主要包含HAP包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。具体的配置文件说明，详见<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/module-configuration-file-V5" target="_blank" rel="noopener noreferrer">module.json5配置文件<ExternalLinkIcon/></a>。</li>
<li><strong>build-profile.json5</strong>：当前的模块信息 、编译信息配置项，包括buildOption、targets配置等。</li>
<li><strong>hvigorfile.ts</strong>：模块级编译构建任务脚本。</li>
<li><strong>obfuscation-rules.txt</strong>：混淆规则文件。混淆开启后，在使用Release模式进行编译时，会对代码进行编译、混淆及压缩处理，保护代码资产。详见<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-build-obfuscation-0000001731754312-V5" target="_blank" rel="noopener noreferrer">开启代码混淆<ExternalLinkIcon/></a>。</li>
<li><strong>oh-package.json5</strong>：用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息。</li>
</ul>
</li>
<li><strong>oh_modules</strong>：用于存放三方库依赖信息。</li>
<li><strong>build-profile.json5</strong>：工程级配置信息，包括签名signingConfigs、产品配置products等。其中products中可配置当前运行环境，默认为HarmonyOS。</li>
<li><strong>hvigorfile.ts</strong>：工程级编译构建任务脚本。</li>
<li><strong>oh-package.json5</strong>：主要用来描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等</li>
</ul>
<h2 id="_3、arkts语法介绍" tabindex="-1"><a class="header-anchor" href="#_3、arkts语法介绍" aria-hidden="true">#</a> 3、ArkTS语法介绍</h2>
<ul>
<li>继承TypeScript语法的基础上进行了优化</li>
</ul>
<p>声明式UI的特征：</p>
<ul>
<li>声明式描述</li>
<li>状态驱动视图更新（@state）</li>
</ul>
<p>以下是 ArkTS 中常用装饰器的总结表格：</p>
<table>
<thead>
<tr>
<th>装饰器</th>
<th>作用</th>
<th>使用场景</th>
<th>示例代码</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Component</code></td>
<td>定义一个组件，标记类为 UI 组件</td>
<td>声明一个 UI 组件的主类</td>
<td><code v-pre>@Component struct MyComponent { build() { Text(&quot;Hello, ArkTS!&quot;) } }</code></td>
</tr>
<tr>
<td><code v-pre>@Entry</code></td>
<td>标记应用程序的入口点</td>
<td>程序启动时加载的初始组件</td>
<td><code v-pre>@Entry struct MainEntry { build() { Text(&quot;Welcome!&quot;) } }</code></td>
</tr>
<tr>
<td><code v-pre>@State</code></td>
<td>定义组件的状态变量</td>
<td>声明组件内部的动态数据</td>
<td><code v-pre>@State var counter: number = 0</code></td>
</tr>
<tr>
<td><code v-pre>@Link</code></td>
<td>定义组件的外部绑定属性</td>
<td>声明从父组件传递的属性值</td>
<td><code v-pre>@Link prop: string;</code></td>
</tr>
<tr>
<td><code v-pre>@Provide</code></td>
<td>提供全局共享的数据上下文</td>
<td>子组件通过 <code v-pre>@Consume</code> 获取共享数据</td>
<td><code v-pre>@Provide theme: string = &quot;light&quot;;</code></td>
</tr>
<tr>
<td><code v-pre>@Consume</code></td>
<td>消费由 <code v-pre>@Provide</code> 提供的共享数据</td>
<td>获取父组件或上层组件的共享数据</td>
<td><code v-pre>@Consume theme: string;</code></td>
</tr>
<tr>
<td><code v-pre>@Watch</code></td>
<td>监听状态变量的变化</td>
<td>在状态变量改变时触发自定义逻辑</td>
<td><code v-pre>@Watch('counter') onCounterChange(newVal, oldVal) { console.log(newVal) }</code></td>
</tr>
</tbody>
</table>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<ul>
<li><strong>灵活性</strong>：装饰器为 ArkTS 提供了简洁的声明式编程支持，能够增强代码的可读性。</li>
<li><strong>使用顺序</strong>：一些装饰器（如 <code v-pre>@Entry</code> 和 <code v-pre>@Component</code>）不能同时作用在同一类上，应根据逻辑区分。</li>
</ul>
<h2 id="_4、应用程序框架基础" tabindex="-1"><a class="header-anchor" href="#_4、应用程序框架基础" aria-hidden="true">#</a> 4、应用程序框架基础</h2>
<p>UIAbility</p>
<ul>
<li>概念：包含用户界面的应用组件</li>
</ul>
<p>页面跳转：</p>
<p>router.pushUrl()</p>
<p>router.getParams()</p>
<p>router.back()</p>
<p>UIAbility生命周期：</p>
<p>create</p>
<p>windowStageCreate</p>
<p>foreground</p>
<p>background</p>
<p>windowStageDestroy</p>
<p>destroy</p>
<p>自定义组件生命周期：</p>
<p>aboutToAppear</p>
<p>onPageShow</p>
<p>onPageHide</p>
<p>onBackPress</p>
<p>aboutToDisappear</p>
<h2 id="_5、从简单的页面开始" tabindex="-1"><a class="header-anchor" href="#_5、从简单的页面开始" aria-hidden="true">#</a> 5、从简单的页面开始</h2>
<h2 id="_6、构建更加丰富的页面" tabindex="-1"><a class="header-anchor" href="#_6、构建更加丰富的页面" aria-hidden="true">#</a> 6、构建更加丰富的页面</h2>
<h2 id="_7、从网络获取数据" tabindex="-1"><a class="header-anchor" href="#_7、从网络获取数据" aria-hidden="true">#</a> 7、从网络获取数据</h2>
<p>1.需要添加网络管理权限，在module.json5文件中添加</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"module":{
	"requestPermissions":[
		{"name":"ohos.permission.INTERNET"}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.导入http对象，创建数据请求对象</p>
<p>3.发请求</p>
<p>4.处理数据</p>
<p>5.销毁数据请求对象</p>
<h2 id="_8、保存应用数据" tabindex="-1"><a class="header-anchor" href="#_8、保存应用数据" aria-hidden="true">#</a> 8、保存应用数据</h2>
<p><strong>用户首选项</strong></p>
<p>1.导入preference模块</p>
<p>2.获取preference实例</p>
<p>3.保存数据</p>
<p>4.读取数据</p>
</div></template>


