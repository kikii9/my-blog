<template><div><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1>
<h2 id="_20240411" tabindex="-1"><a class="header-anchor" href="#_20240411" aria-hidden="true">#</a> 20240411</h2>
<h3 id="vite分包规则" tabindex="-1"><a class="header-anchor" href="#vite分包规则" aria-hidden="true">#</a> vite分包规则</h3>
<p>Vite 使用 Rollup 作为其底层的打包工具来进行项目的构建。在进行代码分包时，Vite 通过配置 Rollup 的 <code v-pre>output.manualChunks</code> 选项来实现自定义的分包规则。以下是关于 Vite 分包规则的基本说明：</p>
<h3 id="output-manualchunks-配置" tabindex="-1"><a class="header-anchor" href="#output-manualchunks-配置" aria-hidden="true">#</a> <strong><code v-pre>output.manualChunks</code> 配置</strong></h3>
<p><code v-pre>output.manualChunks</code> 是一个函数或对象，用于指定哪些模块应该被打包到特定的自定义块（chunk）中。这有助于将大型应用分解为多个较小的、可按需加载的文件，以提高首屏加载速度和整体性能。</p>
<p><strong>1. 函数形式：</strong></p>
<p>当 <code v-pre>manualChunks</code> 是一个函数时，它接收每个模块的文件路径 (<code v-pre>filePath</code>) 作为参数，并应返回一个字符串或 <code v-pre>null</code>。返回值表示该模块应被分配到的 chunk 名称。例如：</p>
<p>Javascript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token comment">// vite.config.js</span>
2export <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token number">3</span>  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">4</span>    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">5</span>      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">6</span>        <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">7</span>          <span class="token comment">// 根据文件路径或其他条件决定分包逻辑</span>
<span class="token number">8</span>          <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'node_modules/lodash'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">9</span>            <span class="token keyword">return</span> <span class="token string">'vendor-lodash'</span><span class="token punctuation">;</span>
<span class="token number">10</span>          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'node_modules/moment'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">11</span>            <span class="token keyword">return</span> <span class="token string">'vendor-moment'</span><span class="token punctuation">;</span>
<span class="token number">12</span>          <span class="token punctuation">}</span>
<span class="token number">13</span>          <span class="token comment">// 如果不符合任何自定义规则，则返回 null，让 Rollup 使用默认分包逻辑</span>
<span class="token number">14</span>          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token number">15</span>        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">16</span>      <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">17</span>    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">18</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，所有引用 <code v-pre>lodash</code> 或 <code v-pre>moment</code> 模块的代码会被分别打包到名为 <code v-pre>vendor-lodash.js</code> 和 <code v-pre>vendor-moment.js</code> 的独立文件中。</p>
<p><strong>2. 对象形式：</strong></p>
<p><code v-pre>manualChunks</code> 也可以是一个对象，键是目标 chunk 名称，值是一个数组或回调函数，用于指定应该被包含在该 chunk 中的模块。例如：</p>
<p>Javascript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token comment">// vite.config.js</span>
2export <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token number">3</span>  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">4</span>    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">5</span>      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">6</span>        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token number">7</span>          <span class="token string">'vendor-libs'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'lodash'</span><span class="token punctuation">,</span> <span class="token string">'moment'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 直接列出模块名</span>
<span class="token number">8</span>          <span class="token string">'my-custom-chunk'</span><span class="token operator">:</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token number">9</span>            <span class="token comment">// 使用回调函数定义更复杂的匹配规则</span>
<span class="token number">10</span>            <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'src/my-special-module'</span><span class="token punctuation">)</span> <span class="token operator">||</span> id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'src/another-module'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">11</span>          <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">12</span>        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">13</span>      <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">14</span>    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">15</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>lodash</code> 和 <code v-pre>moment</code> 模块会被打包到 <code v-pre>vendor-libs.js</code> 文件中，而所有包含 <code v-pre>'src/my-special-module'</code> 或 <code v-pre>'src/another-module'</code> 的模块会被打包到 <code v-pre>my-custom-chunk.js</code> 文件中。</p>
<h3 id="分包原则与最佳实践" tabindex="-1"><a class="header-anchor" href="#分包原则与最佳实践" aria-hidden="true">#</a> <strong>分包原则与最佳实践：</strong></h3>
<ul>
<li><strong>按需加载</strong>：根据模块的功能或依赖关系，将不立即需要的代码分到单独的 chunk 中，以便在首次加载页面时仅加载关键资源，后续再按需加载其他 chunk。</li>
<li><strong>公共库分离</strong>：将第三方库（如 <code v-pre>lodash</code>、<code v-pre>moment</code> 等）独立打包，因为它们通常不会频繁变动，可以利用浏览器缓存提高重复访问时的加载速度。</li>
<li><strong>业务逻辑分组</strong>：按照业务模块划分 chunk，确保相关代码一起加载，避免跨 chunk 造成的额外网络请求和解析成本。</li>
<li><strong>避免过度分包</strong>：虽然分包有助于减小单个文件大小，但过多的 chunk 可能增加 HTTP 请求的数量，导致网络开销增大。需要权衡 chunk 数量与文件大小，合理设定分包粒度。</li>
<li><strong>考虑 Tree Shaking</strong>：Vite 和 Rollup 支持 Tree Shaking，自动去除未使用的代码。在制定分包规则时，应确保不影响这一优化机制。</li>
</ul>
<p>综上所述，Vite 的分包规则是由开发者通过配置 <code v-pre>rollupOptions.output.manualChunks</code> 来定义的，可以根据项目特性和性能优化需求，灵活运用函数或对象形式来定制模块到 chunk 的映射规则，以实现高效的代码分片和按需加载</p>
</div></template>


