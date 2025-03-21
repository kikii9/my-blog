<template><div><h1 id="webpack-详解" tabindex="-1"><a class="header-anchor" href="#webpack-详解" aria-hidden="true">#</a> <strong>Webpack 详解</strong></h1>
<h2 id="一、webpack-是什么" tabindex="-1"><a class="header-anchor" href="#一、webpack-是什么" aria-hidden="true">#</a> <strong>一、Webpack 是什么？</strong></h2>
<p>Webpack 是一个 <strong>前端模块打包工具（Module Bundler）</strong>，可以将 JavaScript、CSS、HTML、图片等资源进行打包、优化，最终输出浏览器可以运行的代码。</p>
<h3 id="_1-webpack-的作用" tabindex="-1"><a class="header-anchor" href="#_1-webpack-的作用" aria-hidden="true">#</a> <strong>1. Webpack 的作用</strong></h3>
<p>✅ <strong>模块化支持</strong>：兼容 ES Modules、CommonJS、AMD 等模块格式。
✅ <strong>代码拆分（Code Splitting）</strong>：按需加载，提升性能。
✅ <strong>资源优化</strong>：支持 CSS、图片、字体等资源的优化和压缩。
✅ <strong>热更新（HMR）</strong>：修改代码后，自动更新浏览器页面。
✅ <strong>插件扩展（Plugins）</strong>：可通过插件增强功能，如自动生成 HTML、清理文件等。</p>
<hr>
<h2 id="二、webpack-的核心概念" tabindex="-1"><a class="header-anchor" href="#二、webpack-的核心概念" aria-hidden="true">#</a> <strong>二、Webpack 的核心概念</strong></h2>
<p>Webpack 的工作流程可以分为 <strong>入口（Entry）→ 解析（Loaders）→ 插件（Plugins）→ 输出（Output）</strong> 这四个核心步骤。</p>
<h3 id="_1-entry-入口" tabindex="-1"><a class="header-anchor" href="#_1-entry-入口" aria-hidden="true">#</a> <strong>1. Entry（入口）</strong></h3>
<p>Webpack 需要指定一个 <strong>入口文件</strong> 作为打包的起点，通常是 <code v-pre>index.js</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span>  <span class="token comment">// 入口文件</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-output-输出" tabindex="-1"><a class="header-anchor" href="#_2-output-输出" aria-hidden="true">#</a> <strong>2. Output（输出）</strong></h3>
<p>Webpack 将处理后的代码输出到指定的文件夹和文件中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 输出目录</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span>  <span class="token comment">// 输出文件名</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-loaders-加载器" tabindex="-1"><a class="header-anchor" href="#_3-loaders-加载器" aria-hidden="true">#</a> <strong>3. Loaders（加载器）</strong></h3>
<p>Loaders 用于 <strong>转换非 JavaScript 代码</strong>，比如 TypeScript、SCSS、图片等。</p>
<ul>
<li><strong>处理 JavaScript（ES6+ 转 ES5）</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配 JS 文件</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除 node_modules</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span> <span class="token comment">// 使用 Babel 进行转换</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>处理 CSS</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配 CSS 文件</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span> <span class="token comment">// 依次使用两个 Loader</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>处理 图片</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|jpeg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span> <span class="token comment">// 直接复制文件到 dist 目录</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-plugins-插件" tabindex="-1"><a class="header-anchor" href="#_4-plugins-插件" aria-hidden="true">#</a> <strong>4. Plugins（插件）</strong></h3>
<p>Plugins 用于 <strong>增强 Webpack 的功能</strong>，如压缩代码、生成 HTML、清理文件等。</p>
<ul>
<li><strong>自动生成 HTML</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span><span class="token punctuation">,</span>  <span class="token comment">// 使用模板</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span>  <span class="token comment">// 生成的文件名</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>清理 dist 目录</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-devserver-开发服务器" tabindex="-1"><a class="header-anchor" href="#_5-devserver-开发服务器" aria-hidden="true">#</a> <strong>5. DevServer（开发服务器）</strong></h3>
<p>Webpack 允许启动一个本地服务器，支持 <strong>热更新（HMR）</strong>，不需要刷新页面即可看到代码变更。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span>  <span class="token comment">// 静态资源目录</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 开启热更新</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// 自动打开浏览器</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx webpack serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="三、webpack-配置示例" tabindex="-1"><a class="header-anchor" href="#三、webpack-配置示例" aria-hidden="true">#</a> <strong>三、Webpack 配置示例</strong></h2>
<p>完整的 <code v-pre>webpack.config.js</code> 配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span> <span class="token comment">// 入口文件</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|jpeg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="四、webpack-进阶功能" tabindex="-1"><a class="header-anchor" href="#四、webpack-进阶功能" aria-hidden="true">#</a> <strong>四、Webpack 进阶功能</strong></h2>
<h3 id="_1-代码分割-code-splitting" tabindex="-1"><a class="header-anchor" href="#_1-代码分割-code-splitting" aria-hidden="true">#</a> <strong>1. 代码分割（Code Splitting）</strong></h3>
<p>Webpack 允许将代码拆分成多个文件，提高加载性能。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>  <span class="token comment">// 代码分割策略</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_2-tree-shaking" aria-hidden="true">#</a> <strong>2. Tree Shaking</strong></h3>
<p>Webpack 可以自动删除 <strong>无用代码（Dead Code Elimination）</strong>，减少打包体积。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 启用 Tree Shaking</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="五、webpack-和-vite-的对比" tabindex="-1"><a class="header-anchor" href="#五、webpack-和-vite-的对比" aria-hidden="true">#</a> <strong>五、Webpack 和 Vite 的对比</strong></h2>
<table>
<thead>
<tr>
<th>维度</th>
<th>Webpack</th>
<th>Vite</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>启动速度</strong></td>
<td>慢，需打包整个项目</td>
<td>快，按需加载</td>
</tr>
<tr>
<td><strong>热更新</strong></td>
<td>慢</td>
<td>快，基于 ESM</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>适用于大型复杂项目</td>
<td>适用于现代前端框架</td>
</tr>
<tr>
<td><strong>插件系统</strong></td>
<td>强大</td>
<td>依赖 Rollup</td>
</tr>
</tbody>
</table>
<p><strong>总结</strong>：如果你的项目是 <strong>Vue 3、React 18</strong>，推荐使用 <strong>Vite</strong>，如果是 <strong>大型企业级项目</strong>，Webpack 仍然是最佳选择。</p>
<hr>
<h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> <strong>六、总结</strong></h2>
<h3 id="_1-webpack-核心概念" tabindex="-1"><a class="header-anchor" href="#_1-webpack-核心概念" aria-hidden="true">#</a> <strong>1. Webpack 核心概念</strong></h3>
<ul>
<li><strong>Entry</strong>（入口）：打包的起点。</li>
<li><strong>Output</strong>（输出）：指定打包后文件的存放位置。</li>
<li><strong>Loaders</strong>（加载器）：处理 JS、CSS、图片等资源。</li>
<li><strong>Plugins</strong>（插件）：增强 Webpack 功能，如生成 HTML、清理文件等。</li>
<li><strong>DevServer</strong>（开发服务器）：支持热更新，提高开发体验。</li>
</ul>
<h3 id="_2-webpack-的优势" tabindex="-1"><a class="header-anchor" href="#_2-webpack-的优势" aria-hidden="true">#</a> <strong>2. Webpack 的优势</strong></h3>
<p>✅ <strong>适用于大型项目</strong>
✅ <strong>强大的插件和 Loader 生态</strong>
✅ <strong>支持代码分割、Tree Shaking、懒加载等优化策略</strong></p>
<hr>
<p>如果你有更具体的 Webpack 使用问题，可以随时问我！🚀</p>
</div></template>


