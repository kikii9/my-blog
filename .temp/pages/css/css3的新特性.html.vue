<template><div><h1 id="css3的新特性" tabindex="-1"><a class="header-anchor" href="#css3的新特性" aria-hidden="true">#</a> css3的新特性</h1>
<p>CSS3 引入了许多新特性和增强功能，这些特性为前端开发提供了更多的控制和灵活性。以下是一些主要的 CSS3 新特性：</p>
<h3 id="_1-选择器-selectors" tabindex="-1"><a class="header-anchor" href="#_1-选择器-selectors" aria-hidden="true">#</a> 1. 选择器（Selectors）</h3>
<p>CSS3 增加了多种选择器，使得选择页面元素更加灵活和简便：</p>
<ul>
<li>属性选择器（Attribute selectors）：<code v-pre>[type=&quot;text&quot;]</code></li>
<li>伪类选择器（Pseudo-classes）：<code v-pre>:nth-child()</code>, <code v-pre>:nth-of-type()</code>, <code v-pre>:not()</code></li>
<li>伪元素选择器（Pseudo-elements）：<code v-pre>::before</code>, <code v-pre>::after</code></li>
</ul>
<h3 id="_2-盒模型-box-model" tabindex="-1"><a class="header-anchor" href="#_2-盒模型-box-model" aria-hidden="true">#</a> 2. 盒模型（Box Model）</h3>
<ul>
<li><code v-pre>box-sizing</code> 属性：控制盒模型的计算方式，常见值为 <code v-pre>content-box</code> 和 <code v-pre>border-box</code>。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-弹性盒-flexbox" tabindex="-1"><a class="header-anchor" href="#_3-弹性盒-flexbox" aria-hidden="true">#</a> 3. 弹性盒（Flexbox）</h3>
<p>Flexbox 提供了一种更有效的布局方式，特别适合复杂的布局和对齐。</p>
<ul>
<li><code v-pre>display: flex</code></li>
<li><code v-pre>justify-content</code>, <code v-pre>align-items</code>, <code v-pre>flex-direction</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-网格布局-grid-layout" tabindex="-1"><a class="header-anchor" href="#_4-网格布局-grid-layout" aria-hidden="true">#</a> 4. 网格布局（Grid Layout）</h3>
<p>CSS Grid 是一种二维布局系统，适用于复杂的网页布局。</p>
<ul>
<li><code v-pre>display: grid</code></li>
<li><code v-pre>grid-template-columns</code>, <code v-pre>grid-template-rows</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-变换-transforms" tabindex="-1"><a class="header-anchor" href="#_5-变换-transforms" aria-hidden="true">#</a> 5. 变换（Transforms）</h3>
<p>CSS3 提供了多种变换功能，可以对元素进行旋转、缩放、倾斜和移动。</p>
<ul>
<li><code v-pre>transform: rotate(45deg)</code></li>
<li><code v-pre>transform: scale(1.5)</code></li>
<li><code v-pre>transform: translateX(100px)</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-过渡-transitions-和动画-animations" tabindex="-1"><a class="header-anchor" href="#_6-过渡-transitions-和动画-animations" aria-hidden="true">#</a> 6. 过渡（Transitions）和动画（Animations）</h3>
<p>过渡和动画允许对 CSS 属性的变化进行平滑过渡和动画效果。</p>
<ul>
<li><code v-pre>transition: all 0.3s ease</code></li>
<li><code v-pre>@keyframes</code> 规则定义动画</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> slidein</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-多列布局-multi-column-layout" tabindex="-1"><a class="header-anchor" href="#_7-多列布局-multi-column-layout" aria-hidden="true">#</a> 7. 多列布局（Multi-column Layout）</h3>
<p>多列布局允许将内容分割成多列，适用于报纸和杂志排版。</p>
<ul>
<li><code v-pre>column-count</code>, <code v-pre>column-gap</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.text</span> <span class="token punctuation">{</span>
  <span class="token property">column-count</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-阴影-shadows" tabindex="-1"><a class="header-anchor" href="#_8-阴影-shadows" aria-hidden="true">#</a> 8. 阴影（Shadows）</h3>
<p>CSS3 增加了文本阴影和盒阴影属性，可以为元素添加阴影效果。</p>
<ul>
<li><code v-pre>text-shadow</code></li>
<li><code v-pre>box-shadow</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.text</span> <span class="token punctuation">{</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 2px 2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 5px 5px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-背景-backgrounds" tabindex="-1"><a class="header-anchor" href="#_9-背景-backgrounds" aria-hidden="true">#</a> 9. 背景（Backgrounds）</h3>
<p>CSS3 对背景属性进行了扩展，支持多重背景图像和更多控制。</p>
<ul>
<li><code v-pre>background-size</code></li>
<li><code v-pre>background-clip</code></li>
<li><code v-pre>background-origin</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image1.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image2.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-媒体查询-media-queries" tabindex="-1"><a class="header-anchor" href="#_10-媒体查询-media-queries" aria-hidden="true">#</a> 10. 媒体查询（Media Queries）</h3>
<p>媒体查询允许根据不同的设备和屏幕尺寸应用不同的 CSS 样式，响应式设计的关键技术。</p>
<ul>
<li><code v-pre>@media</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些新特性使得 CSS3 在设计和布局方面更加强大和灵活，适用于各种现代网页开发需求。更多详细信息可以参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer">MDN Web Docs<ExternalLinkIcon/></a>。</p>
</div></template>


