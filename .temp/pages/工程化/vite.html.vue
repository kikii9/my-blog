<template><div><h1 id="vite-详解" tabindex="-1"><a class="header-anchor" href="#vite-详解" aria-hidden="true">#</a> <strong>Vite 详解</strong></h1>
<h2 id="一、vite-是什么" tabindex="-1"><a class="header-anchor" href="#一、vite-是什么" aria-hidden="true">#</a> <strong>一、Vite 是什么？</strong></h2>
<p>Vite（法语“快速”的意思）是一个 <strong>现代前端构建工具</strong>，专为 <strong>开发体验优化</strong>，主要用于 <strong>Vue、React</strong> 等框架的开发。相比 Webpack，Vite <strong>启动更快、构建更快、热更新更快</strong>，是新一代前端开发工具。</p>
<h3 id="_1-vite-的特点" tabindex="-1"><a class="header-anchor" href="#_1-vite-的特点" aria-hidden="true">#</a> <strong>1. Vite 的特点</strong></h3>
<p>✅ <strong>极快的开发服务器</strong>（基于 ES Module，避免了 Webpack 的“打包等待”）
✅ <strong>原生 ES Module 支持</strong>（只编译当前使用的模块，提升速度）
✅ <strong>更快的热更新（HMR）</strong>（仅更新改动部分，减少浏览器刷新）
✅ <strong>内置支持 TypeScript、Vue、React、CSS 预处理器</strong>
✅ <strong>Rollup 构建优化</strong>（生产环境使用 Rollup 进行打包，优化输出）</p>
<hr>
<h2 id="二、vite-的核心原理" tabindex="-1"><a class="header-anchor" href="#二、vite-的核心原理" aria-hidden="true">#</a> <strong>二、Vite 的核心原理</strong></h2>
<p>Vite <strong>分为两种模式</strong>：</p>
<ol>
<li><strong>开发模式（Dev Mode）</strong>：基于 <strong>ES Module</strong>，不需要打包，按需加载文件。</li>
<li><strong>生产模式（Build Mode）</strong>：使用 <strong>Rollup</strong> 进行打包优化，生成高效的静态文件。</li>
</ol>
<h3 id="_1-传统-webpack-的问题" tabindex="-1"><a class="header-anchor" href="#_1-传统-webpack-的问题" aria-hidden="true">#</a> <strong>1. 传统 Webpack 的问题</strong></h3>
<p>Webpack <strong>启动慢</strong>，因为：</p>
<ul>
<li>需要 <strong>提前打包</strong> 整个项目（即使只改了一行代码）。</li>
<li>代码改动后，热更新 <strong>重新编译整个 Bundle</strong>，导致速度变慢。</li>
</ul>
<h3 id="_2-vite-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-vite-解决方案" aria-hidden="true">#</a> <strong>2. Vite 解决方案</strong></h3>
<ul>
<li>开发模式下，Vite <strong>不需要打包</strong>，直接基于 <strong>浏览器的 ES Module</strong> 机制进行按需加载。</li>
<li>修改代码时，Vite <strong>只编译改动的模块</strong>，而不是重新打包整个项目，<strong>HMR（热更新）速度更快</strong>。</li>
</ul>
<hr>
<h2 id="三、vite-的安装与使用" tabindex="-1"><a class="header-anchor" href="#三、vite-的安装与使用" aria-hidden="true">#</a> <strong>三、Vite 的安装与使用</strong></h2>
<h3 id="_1-安装-vite" tabindex="-1"><a class="header-anchor" href="#_1-安装-vite" aria-hidden="true">#</a> <strong>1. 安装 Vite</strong></h3>
<p>Vite 支持 <strong>Vue、React、Svelte 等框架</strong>，可以直接创建项目：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 直接创建 Vue 项目</span>
<span class="token function">npm</span> create vite@latest my-vite-app -- <span class="token parameter variable">--template</span> vue

<span class="token comment"># 创建 React 项目</span>
<span class="token function">npm</span> create vite@latest my-vite-app -- <span class="token parameter variable">--template</span> react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者手动安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vite <span class="token parameter variable">-g</span>  <span class="token comment"># 全局安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="_2-运行-vite" tabindex="-1"><a class="header-anchor" href="#_2-运行-vite" aria-hidden="true">#</a> <strong>2. 运行 Vite</strong></h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev  <span class="token comment"># 启动开发服务器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🚀 <strong>Vite 启动速度极快</strong>，因为它 <strong>不需要打包</strong>，直接使用浏览器解析模块。</p>
<hr>
<h2 id="四、vite-的核心配置" tabindex="-1"><a class="header-anchor" href="#四、vite-的核心配置" aria-hidden="true">#</a> <strong>四、Vite 的核心配置</strong></h2>
<p>Vite 的配置文件是 <code v-pre>vite.config.js</code>，支持 TypeScript 版本 <code v-pre>vite.config.ts</code>。</p>
<h3 id="_1-基本配置" tabindex="-1"><a class="header-anchor" href="#_1-基本配置" aria-hidden="true">#</a> <strong>1. 基本配置</strong></h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 引入 Vue 插件</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>  <span class="token comment">// 指定端口</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>      <span class="token comment">// 配置代理（解决跨域问题）</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://your-api.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">'dist'</span><span class="token punctuation">,</span>  <span class="token comment">// 指定输出目录</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">'esbuild'</span><span class="token punctuation">,</span>  <span class="token comment">// 使用 esbuild 进行更快的压缩</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="五、vite-重要特性" tabindex="-1"><a class="header-anchor" href="#五、vite-重要特性" aria-hidden="true">#</a> <strong>五、Vite 重要特性</strong></h2>
<h3 id="_1-hmr-热更新" tabindex="-1"><a class="header-anchor" href="#_1-hmr-热更新" aria-hidden="true">#</a> <strong>1. HMR（热更新）</strong></h3>
<p>Vite 内置 <strong>模块热替换（HMR）</strong>，当你修改代码时，Vite 只会更新变更的部分，而不会重新加载整个页面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// example.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听模块变更</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newModule</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Module updated:'</span><span class="token punctuation">,</span> newModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-内置支持-typescript" tabindex="-1"><a class="header-anchor" href="#_2-内置支持-typescript" aria-hidden="true">#</a> <strong>2. 内置支持 TypeScript</strong></h3>
<p>Vite <strong>无需额外配置</strong>，即可支持 TypeScript：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"Vite"</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果要 <strong>开启类型检查</strong>，需要安装 <code v-pre>typescript</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> typescript <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="_3-css-预处理器支持" tabindex="-1"><a class="header-anchor" href="#_3-css-预处理器支持" aria-hidden="true">#</a> <strong>3. CSS 预处理器支持</strong></h3>
<p>Vite <strong>原生支持 SCSS / LESS / Stylus</strong>：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token comment">// styles.scss</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接在 Vue 组件中使用：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'./styles.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-环境变量" tabindex="-1"><a class="header-anchor" href="#_4-环境变量" aria-hidden="true">#</a> <strong>4. 环境变量</strong></h3>
<p>Vite 支持 <code v-pre>.env</code> 文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># .env</span>
<span class="token assign-left variable">VITE_API_URL</span><span class="token operator">=</span>https://api.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码中使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="六、vite-和-webpack-的对比" tabindex="-1"><a class="header-anchor" href="#六、vite-和-webpack-的对比" aria-hidden="true">#</a> <strong>六、Vite 和 Webpack 的对比</strong></h2>
<table>
<thead>
<tr>
<th>维度</th>
<th>Vite</th>
<th>Webpack</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>启动速度</strong></td>
<td>✅ 极快（基于 ES Modules）</td>
<td>🚫 较慢（需先打包）</td>
</tr>
<tr>
<td><strong>热更新</strong></td>
<td>✅ 快速（仅更新改动部分）</td>
<td>🚫 较慢（重新编译整个 Bundle）</td>
</tr>
<tr>
<td><strong>构建速度</strong></td>
<td>✅ 生产模式使用 esbuild，速度更快</td>
<td>🚫 生产模式使用 Terser，速度较慢</td>
</tr>
<tr>
<td><strong>代码拆分</strong></td>
<td>✅ 基于 Rollup 进行 Tree Shaking</td>
<td>✅ 可配置</td>
</tr>
<tr>
<td><strong>生态支持</strong></td>
<td>✅ Vue 官方推荐，支持 Vue、React</td>
<td>✅ 生态成熟，插件丰富</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>🚀 适合现代前端（Vue3、React18）</td>
<td>🏢 适合大型项目</td>
</tr>
</tbody>
</table>
<p><strong>总结</strong>：</p>
<ul>
<li>
<p><strong>开发阶段</strong>：Vite <strong>比 Webpack 更快</strong>，适合前端开发体验优化。</p>
</li>
<li>
<p><strong>生产阶段</strong>：Vite <strong>使用 Rollup 打包</strong>，性能与 Webpack <strong>接近</strong>。</p>
</li>
<li>
<p>综合建议</p>
<p>：</p>
<ul>
<li><strong>Vue 3 / React 18</strong> 项目推荐 <strong>Vite</strong>。</li>
<li><strong>企业级复杂项目</strong>（如微前端、多子应用）仍然建议 <strong>Webpack</strong>。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="七、vite-插件" tabindex="-1"><a class="header-anchor" href="#七、vite-插件" aria-hidden="true">#</a> <strong>七、Vite 插件</strong></h2>
<p>Vite 使用 <strong>Rollup 插件机制</strong>，但有自己独特的插件 API：</p>
<h3 id="_1-使用-vue-插件" tabindex="-1"><a class="header-anchor" href="#_1-使用-vue-插件" aria-hidden="true">#</a> <strong>1. 使用 Vue 插件</strong></h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vitejs/plugin-vue <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code v-pre>vite.config.js</code> 中配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用-react-插件" tabindex="-1"><a class="header-anchor" href="#_2-使用-react-插件" aria-hidden="true">#</a> <strong>2. 使用 React 插件</strong></h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vitejs/plugin-react <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code v-pre>vite.config.js</code> 配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="八、总结" tabindex="-1"><a class="header-anchor" href="#八、总结" aria-hidden="true">#</a> <strong>八、总结</strong></h2>
<h3 id="_1-vite-适合什么项目" tabindex="-1"><a class="header-anchor" href="#_1-vite-适合什么项目" aria-hidden="true">#</a> <strong>1. Vite 适合什么项目？</strong></h3>
<p>✅ <strong>Vue 3 / React 18 项目</strong>
✅ <strong>追求快速热更新的项目</strong>
✅ <strong>静态网站、SPA、SSR 项目</strong></p>
<h3 id="_2-webpack-vs-vite-何时选择" tabindex="-1"><a class="header-anchor" href="#_2-webpack-vs-vite-何时选择" aria-hidden="true">#</a> <strong>2. Webpack vs Vite 何时选择？</strong></h3>
<ul>
<li><strong>新项目</strong>（Vue / React）✅ <strong>推荐 Vite</strong></li>
<li><strong>老项目迁移</strong> 🏢 <strong>Webpack 仍然适用</strong></li>
<li><strong>大型企业项目</strong> 🏢 <strong>Webpack 插件更丰富</strong></li>
</ul>
<hr>
<p>🚀 <strong>Vite 是前端开发的未来</strong>，如果你的项目使用 Vue 3 / React 18，强烈推荐使用 Vite！</p>
</div></template>


