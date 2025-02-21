<template><div><h1 id="window-对象" tabindex="-1"><a class="header-anchor" href="#window-对象" aria-hidden="true">#</a> <code v-pre>window</code> 对象</h1>
<p><code v-pre>window</code> 对象是浏览器环境中的全局对象，代表当前的浏览器窗口。它提供了与浏览器交互的接口，包括浏览器的窗口操作、文档访问、存储功能、历史记录控制等。</p>
<p><strong>参考文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noopener noreferrer">Window - Web API | MDN (mozilla.org)<ExternalLinkIcon/></a></p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<ul>
<li><strong>全局对象</strong>：在 JavaScript 中，所有的全局变量、函数和对象都作为 <code v-pre>window</code> 对象的属性。</li>
<li><strong>BOM 核心</strong>：<code v-pre>window</code> 对象是 BOM（Browser Object Model，浏览器对象模型）的核心，用于与浏览器的窗口和页面交互。</li>
<li><strong>DOM 的入口</strong>：通过 <code v-pre>window.document</code> 可以访问当前页面的 DOM 树，并对其进行操作。</li>
</ul>
<hr>
<h2 id="属性介绍" tabindex="-1"><a class="header-anchor" href="#属性介绍" aria-hidden="true">#</a> 属性介绍</h2>
<p><code v-pre>window</code> 对象有非常多的属性和方法，下面的表格详细列出了常见的属性：</p>
<h3 id="常见属性" tabindex="-1"><a class="header-anchor" href="#常见属性" aria-hidden="true">#</a> 常见属性</h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>window.document</code></td>
<td>返回当前窗口中的文档（DOM 树）</td>
<td><code v-pre>window.document.title</code></td>
</tr>
<tr>
<td><code v-pre>window.location</code></td>
<td>用于获取或设置当前页面的 URL</td>
<td><code v-pre>window.location.href</code></td>
</tr>
<tr>
<td><code v-pre>window.navigator</code></td>
<td>提供关于浏览器的信息，比如用户代理、语言、平台等</td>
<td><code v-pre>window.navigator.userAgent</code></td>
</tr>
<tr>
<td><code v-pre>window.history</code></td>
<td>操作浏览器的历史记录</td>
<td><code v-pre>window.history.back()</code></td>
</tr>
<tr>
<td><code v-pre>window.screen</code></td>
<td>提供关于用户屏幕的信息</td>
<td><code v-pre>window.screen.width</code></td>
</tr>
<tr>
<td><code v-pre>window.innerWidth</code></td>
<td>返回窗口的内容区宽度（包括滚动条，但不包括工具栏）</td>
<td><code v-pre>window.innerWidth</code></td>
</tr>
<tr>
<td><code v-pre>window.innerHeight</code></td>
<td>返回窗口的内容区高度（包括滚动条，但不包括工具栏）</td>
<td><code v-pre>window.innerHeight</code></td>
</tr>
<tr>
<td><code v-pre>window.outerWidth</code></td>
<td>返回浏览器窗口的外部宽度</td>
<td><code v-pre>window.outerWidth</code></td>
</tr>
<tr>
<td><code v-pre>window.outerHeight</code></td>
<td>返回浏览器窗口的外部高度</td>
<td><code v-pre>window.outerHeight</code></td>
</tr>
<tr>
<td><code v-pre>window.localStorage</code></td>
<td>提供在用户浏览器中存储数据的方法，数据在页面刷新后仍然存在</td>
<td><code v-pre>window.localStorage.setItem()</code></td>
</tr>
<tr>
<td><code v-pre>window.sessionStorage</code></td>
<td>提供在浏览器会话期间存储数据的方法，页面关闭后数据丢失</td>
<td><code v-pre>window.sessionStorage.setItem()</code></td>
</tr>
<tr>
<td><code v-pre>window.console</code></td>
<td>提供对浏览器控制台的访问接口，允许输出调试信息</td>
<td><code v-pre>window.console.log()</code></td>
</tr>
<tr>
<td><code v-pre>window.alert()</code></td>
<td>显示一个警告对话框</td>
<td><code v-pre>window.alert('警告！')</code></td>
</tr>
<tr>
<td><code v-pre>window.confirm()</code></td>
<td>显示一个确认对话框，用户可以选择确认或取消</td>
<td><code v-pre>window.confirm('你确定吗？')</code></td>
</tr>
<tr>
<td><code v-pre>window.prompt()</code></td>
<td>显示一个输入对话框，用户可以输入文本</td>
<td><code v-pre>window.prompt('请输入你的名字：')</code></td>
</tr>
<tr>
<td><code v-pre>window.open()</code></td>
<td>打开一个新的浏览器窗口或标签页</td>
<td><code v-pre>window.open('https://example.com')</code></td>
</tr>
<tr>
<td><code v-pre>window.close()</code></td>
<td>关闭当前窗口（需要窗口是通过 <code v-pre>window.open()</code> 打开的）</td>
<td><code v-pre>window.close()</code></td>
</tr>
<tr>
<td><code v-pre>window.setTimeout()</code></td>
<td>在指定的时间后执行代码</td>
<td><code v-pre>window.setTimeout(function, 2000)</code></td>
</tr>
<tr>
<td><code v-pre>window.setInterval()</code></td>
<td>每隔指定时间重复执行代码</td>
<td><code v-pre>window.setInterval(function, 1000)</code></td>
</tr>
<tr>
<td><code v-pre>window.clearTimeout()</code></td>
<td>清除通过 <code v-pre>setTimeout</code> 设置的定时器</td>
<td><code v-pre>window.clearTimeout(timerId)</code></td>
</tr>
<tr>
<td><code v-pre>window.clearInterval()</code></td>
<td>清除通过 <code v-pre>setInterval</code> 设置的定时器</td>
<td><code v-pre>window.clearInterval(intervalId)</code></td>
</tr>
<tr>
<td><code v-pre>window.scrollTo()</code></td>
<td>滚动窗口到指定的坐标</td>
<td><code v-pre>window.scrollTo(0, 100)</code></td>
</tr>
<tr>
<td><code v-pre>window.scrollBy()</code></td>
<td>相对于当前滚动位置，滚动窗口</td>
<td><code v-pre>window.scrollBy(0, 50)</code></td>
</tr>
<tr>
<td><code v-pre>window.matchMedia()</code></td>
<td>检测是否符合指定的 CSS 媒体查询条件</td>
<td><code v-pre>window.matchMedia('(max-width: 600px)')</code></td>
</tr>
<tr>
<td><code v-pre>window.focus()</code></td>
<td>将焦点设置到当前窗口</td>
<td><code v-pre>window.focus()</code></td>
</tr>
<tr>
<td><code v-pre>window.blur()</code></td>
<td>取消窗口的焦点</td>
<td><code v-pre>window.blur()</code></td>
</tr>
<tr>
<td><code v-pre>window.onload</code></td>
<td>在页面加载完成时触发的事件</td>
<td><code v-pre>window.onload = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onerror</code></td>
<td>在页面发生错误时触发的事件</td>
<td><code v-pre>window.onerror = function() {}</code></td>
</tr>
</tbody>
</table>
<h3 id="常见事件" tabindex="-1"><a class="header-anchor" href="#常见事件" aria-hidden="true">#</a> 常见事件</h3>
<table>
<thead>
<tr>
<th>事件</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>window.onload</code></td>
<td>页面加载完成时触发的事件</td>
<td><code v-pre>window.onload = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onresize</code></td>
<td>当窗口大小变化时触发的事件</td>
<td><code v-pre>window.onresize = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onscroll</code></td>
<td>当页面滚动时触发的事件</td>
<td><code v-pre>window.onscroll = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onbeforeunload</code></td>
<td>页面刷新或关闭之前触发的事件，用户可以取消关闭</td>
<td><code v-pre>window.onbeforeunload = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onfocus</code></td>
<td>窗口获得焦点时触发的事件</td>
<td><code v-pre>window.onfocus = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onblur</code></td>
<td>窗口失去焦点时触发的事件</td>
<td><code v-pre>window.onblur = function() {}</code></td>
</tr>
<tr>
<td><code v-pre>window.onpopstate</code></td>
<td>当浏览器历史记录改变时触发（比如点击浏览器的返回按钮）</td>
<td><code v-pre>window.onpopstate = function() {}</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<h3 id="_1-全局变量和函数" tabindex="-1"><a class="header-anchor" href="#_1-全局变量和函数" aria-hidden="true">#</a> 1. <strong>全局变量和函数</strong></h3>
<p>所有全局作用域下的变量和函数都挂载在 <code v-pre>window</code> 对象上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myVar <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"This is a function."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>myVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Hello"</span>
window<span class="token punctuation">.</span><span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 输出 "This is a function."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-浏览器窗口的尺寸" tabindex="-1"><a class="header-anchor" href="#_2-浏览器窗口的尺寸" aria-hidden="true">#</a> 2. <strong>浏览器窗口的尺寸</strong></h3>
<p>可以使用 <code v-pre>window.innerWidth</code> 和 <code v-pre>window.innerHeight</code> 获取浏览器窗口的宽度和高度（不包括工具栏和滚动条）。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>js复制代码console.log(window.innerWidth);   // 输出窗口的宽度
console.log(window.innerHeight);  // 输出窗口的高度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-控制页面滚动" tabindex="-1"><a class="header-anchor" href="#_3-控制页面滚动" aria-hidden="true">#</a> 3. <strong>控制页面滚动</strong></h3>
<p>使用 <code v-pre>window.scrollTo()</code> 可以将页面滚动到指定的坐标。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>js


复制代码
window.scrollTo(0, 500);  // 将页面滚动到纵向 500px 的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-打开新窗口或标签页" tabindex="-1"><a class="header-anchor" href="#_4-打开新窗口或标签页" aria-hidden="true">#</a> 4. <strong>打开新窗口或标签页</strong></h3>
<p>通过 <code v-pre>window.open()</code> 可以打开一个新的窗口或标签页。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>js


复制代码
window.open('https://www.example.com', '_blank');  // 在新标签页中打开链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-定时器" tabindex="-1"><a class="header-anchor" href="#_5-定时器" aria-hidden="true">#</a> 5. <strong>定时器</strong></h3>
<p>使用 <code v-pre>window.setTimeout()</code> 来延迟执行代码，使用 <code v-pre>window.setInterval()</code> 来间隔执行代码。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>js复制代码// 2秒后执行
window.setTimeout(function() {
  console.log('2秒后执行');
}, 2000);

// 每隔1秒执行
window.setInterval(function() {
  console.log('每秒执行一次');
}, 1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-操作浏览器历史记录" tabindex="-1"><a class="header-anchor" href="#_6-操作浏览器历史记录" aria-hidden="true">#</a> 6. <strong>操作浏览器历史记录</strong></h3>
<p>通过 <code v-pre>window.history</code> 可以访问浏览器的历史记录，并实现前进或后退。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>js复制代码window.history.back();   // 后退到上一页
window.history.forward(); // 前进到下一页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


