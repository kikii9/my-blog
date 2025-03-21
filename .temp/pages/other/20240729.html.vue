<template><div><h1 id="_20240729" tabindex="-1"><a class="header-anchor" href="#_20240729" aria-hidden="true">#</a> 20240729</h1>
<h2 id="promise是如何进行then链式调用的" tabindex="-1"><a class="header-anchor" href="#promise是如何进行then链式调用的" aria-hidden="true">#</a> promise是如何进行then链式调用的？</h2>
<p><code v-pre>Promise</code> 是 JavaScript 中用于处理异步操作的对象。链式调用是 <code v-pre>Promise</code> 的一个重要特性，使得我们可以通过连续调用 <code v-pre>.then()</code> 方法来处理一系列异步操作。下面是对 <code v-pre>Promise</code> 链式调用机制的详细解释和一个示例。</p>
<h3 id="promise-链式调用机制" tabindex="-1"><a class="header-anchor" href="#promise-链式调用机制" aria-hidden="true">#</a> <code v-pre>Promise</code> 链式调用机制</h3>
<ol>
<li>
<p><strong>基本原理</strong>：</p>
<ul>
<li>每次调用 <code v-pre>.then()</code> 方法时，都会返回一个新的 <code v-pre>Promise</code> 对象。</li>
<li><code v-pre>.then()</code> 方法接收两个回调函数：一个处理成功的结果，一个处理失败的结果（即 <code v-pre>.catch()</code> 的功能）。</li>
</ul>
</li>
<li>
<p><strong>返回值处理</strong>：</p>
<ul>
<li>如果 <code v-pre>.then()</code> 方法中的回调函数返回的是一个值（非 <code v-pre>Promise</code>），那么该值会被包装成一个立即解决的 <code v-pre>Promise</code>，并传递给下一个 <code v-pre>.then()</code>。</li>
<li>如果 <code v-pre>.then()</code> 方法中的回调函数返回的是一个 <code v-pre>Promise</code>，那么下一个 <code v-pre>.then()</code> 会在这个 <code v-pre>Promise</code> 解决之后执行。</li>
<li>如果回调函数抛出一个错误，该错误会被包装成一个被拒绝的 <code v-pre>Promise</code>，并传递给下一个 <code v-pre>.catch()</code> 或 <code v-pre>.then()</code> 的错误处理函数。</li>
</ul>
</li>
<li>
<p><strong>错误处理</strong>：</p>
<ul>
<li>链中的任何一个 <code v-pre>.then()</code> 或 <code v-pre>.catch()</code> 抛出的错误都会被下一个 <code v-pre>.catch()</code> 捕获到。</li>
</ul>
</li>
</ol>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<p>下面是一个示例，展示了 <code v-pre>Promise</code> 的链式调用如何工作：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟一个异步操作，返回一个Promise</span>
<span class="token keyword">function</span> <span class="token function">asyncOperation</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'Error: value must be greater than 0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 链式调用示例</span>
<span class="token function">asyncOperation</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
    <span class="token keyword">return</span> <span class="token function">asyncOperation</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
    <span class="token keyword">return</span> <span class="token function">asyncOperation</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 40</span>
    <span class="token keyword">return</span> <span class="token function">asyncOperation</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分析示例" tabindex="-1"><a class="header-anchor" href="#分析示例" aria-hidden="true">#</a> 分析示例</h3>
<ol>
<li>
<p><strong>初始调用</strong>：</p>
<ul>
<li><code v-pre>asyncOperation(5)</code> 返回一个 <code v-pre>Promise</code>，该 <code v-pre>Promise</code> 在 1 秒后解决，并返回 <code v-pre>5 * 2 = 10</code>。</li>
</ul>
</li>
<li>
<p><strong>第一次 <code v-pre>.then()</code></strong>：</p>
<ul>
<li>第一个 <code v-pre>.then()</code> 接收 <code v-pre>10</code> 作为结果并打印。</li>
<li>返回 <code v-pre>asyncOperation(10)</code>，返回一个新的 <code v-pre>Promise</code>，在 1 秒后解决，并返回 <code v-pre>10 * 2 = 20</code>。</li>
</ul>
</li>
<li>
<p><strong>第二次 <code v-pre>.then()</code></strong>：</p>
<ul>
<li>第二个 <code v-pre>.then()</code> 接收 <code v-pre>20</code> 作为结果并打印。</li>
<li>返回 <code v-pre>asyncOperation(20)</code>，返回一个新的 <code v-pre>Promise</code>，在 1 秒后解决，并返回 <code v-pre>20 * 2 = 40</code>。</li>
</ul>
</li>
<li>
<p><strong>第三次 <code v-pre>.then()</code></strong>：</p>
<ul>
<li>第三个 <code v-pre>.then()</code> 接收 <code v-pre>40</code> 作为结果并打印。</li>
<li>返回 <code v-pre>asyncOperation(40)</code>。</li>
</ul>
</li>
<li>
<p><strong>错误处理</strong>：</p>
<ul>
<li>如果在链的任何一步中发生错误，<code v-pre>.catch()</code> 会捕获到，并打印错误信息。</li>
</ul>
</li>
</ol>
<p>通过这种方式，<code v-pre>Promise</code> 允许我们以一种清晰和结构化的方式处理异步操作，使得代码更加可读和易于维护。</p>
<h1 id="css3有哪些新增的特性" tabindex="-1"><a class="header-anchor" href="#css3有哪些新增的特性" aria-hidden="true">#</a> CSS3有哪些新增的特性</h1>
<p>CSS3 是 Cascading Style Sheets (CSS) 的第三个主要版本，它引入了许多新特性，使网页设计和开发更加灵活和强大。以下是 CSS3 中一些主要的新特性：</p>
<h3 id="_1-选择器-selectors" tabindex="-1"><a class="header-anchor" href="#_1-选择器-selectors" aria-hidden="true">#</a> 1. 选择器（Selectors）</h3>
<ul>
<li><strong>属性选择器增强</strong>：例如，<code v-pre>[attr^=value]</code>（以 <code v-pre>value</code> 开头的属性）、<code v-pre>[attr$=value]</code>（以 <code v-pre>value</code> 结尾的属性）和 <code v-pre>[attr*=value]</code>（包含 <code v-pre>value</code> 的属性）。</li>
<li><strong>伪类选择器</strong>：例如，<code v-pre>:nth-child()</code>, <code v-pre>:nth-of-type()</code>, <code v-pre>:last-child</code>。</li>
<li><strong>伪元素选择器</strong>：例如，<code v-pre>::before</code>, <code v-pre>::after</code>, <code v-pre>::first-line</code>, <code v-pre>::first-letter</code>。</li>
</ul>
<h3 id="_2-盒模型-box-model" tabindex="-1"><a class="header-anchor" href="#_2-盒模型-box-model" aria-hidden="true">#</a> 2. 盒模型（Box Model）</h3>
<ul>
<li><strong>盒子大小（Box-sizing）</strong>：<code v-pre>box-sizing: border-box;</code>，这使得元素的宽度和高度包括内边距和边框。</li>
</ul>
<h3 id="_3-背景和边框-backgrounds-and-borders" tabindex="-1"><a class="header-anchor" href="#_3-背景和边框-backgrounds-and-borders" aria-hidden="true">#</a> 3. 背景和边框（Backgrounds and Borders）</h3>
<ul>
<li><strong>多重背景</strong>：可以为一个元素设置多个背景图片，使用逗号分隔。</li>
<li><strong>背景尺寸</strong>：<code v-pre>background-size</code> 属性，允许调整背景图片的大小。</li>
<li><strong>背景剪裁</strong>：<code v-pre>background-clip</code> 属性，控制背景绘制的区域。</li>
<li><strong>边框图片</strong>：<code v-pre>border-image</code> 属性，允许使用图片作为边框。</li>
<li><strong>圆角边框</strong>：<code v-pre>border-radius</code> 属性，可以创建圆角效果。</li>
</ul>
<h3 id="_4-文本效果-text-effects" tabindex="-1"><a class="header-anchor" href="#_4-文本效果-text-effects" aria-hidden="true">#</a> 4. 文本效果（Text Effects）</h3>
<ul>
<li><strong>阴影</strong>：<code v-pre>text-shadow</code> 属性，可以为文本添加阴影效果。</li>
<li><strong>溢出文本</strong>：<code v-pre>text-overflow</code> 属性，例如，<code v-pre>ellipsis</code>，可以在溢出时显示省略号。</li>
</ul>
<h3 id="_5-颜色-colors" tabindex="-1"><a class="header-anchor" href="#_5-颜色-colors" aria-hidden="true">#</a> 5. 颜色（Colors）</h3>
<ul>
<li><strong>RGBA</strong> 和 <strong>HSLA</strong> 颜色模式：可以设置颜色的不透明度，例如，<code v-pre>rgba(255, 0, 0, 0.5)</code> 表示半透明的红色。</li>
</ul>
<h3 id="_6-渐变-gradients" tabindex="-1"><a class="header-anchor" href="#_6-渐变-gradients" aria-hidden="true">#</a> 6. 渐变（Gradients）</h3>
<ul>
<li><strong>线性渐变</strong>：<code v-pre>linear-gradient</code>，例如，<code v-pre>background: linear-gradient(to right, red, blue);</code>。</li>
<li><strong>径向渐变</strong>：<code v-pre>radial-gradient</code>，例如，<code v-pre>background: radial-gradient(circle, red, blue);</code>。</li>
</ul>
<h3 id="_7-变换-transforms" tabindex="-1"><a class="header-anchor" href="#_7-变换-transforms" aria-hidden="true">#</a> 7. 变换（Transforms）</h3>
<ul>
<li><strong>2D 变换</strong>：<code v-pre>transform</code> 属性，例如，<code v-pre>translate()</code>, <code v-pre>rotate()</code>, <code v-pre>scale()</code>, <code v-pre>skew()</code>。</li>
<li><strong>3D 变换</strong>：支持 3D 变换，例如，<code v-pre>rotateX()</code>, <code v-pre>rotateY()</code>。</li>
</ul>
<h3 id="_8-过渡-transitions" tabindex="-1"><a class="header-anchor" href="#_8-过渡-transitions" aria-hidden="true">#</a> 8. 过渡（Transitions）</h3>
<ul>
<li><strong>过渡效果</strong>：<code v-pre>transition</code> 属性，可以为属性变化添加动画效果，例如，<code v-pre>transition: all 0.3s ease;</code>。</li>
</ul>
<h3 id="_9-动画-animations" tabindex="-1"><a class="header-anchor" href="#_9-动画-animations" aria-hidden="true">#</a> 9. 动画（Animations）</h3>
<ul>
<li><strong>关键帧动画</strong>：<code v-pre>@keyframes</code> 和 <code v-pre>animation</code> 属性，可以创建复杂的动画效果。</li>
</ul>
<h3 id="_10-布局-layouts" tabindex="-1"><a class="header-anchor" href="#_10-布局-layouts" aria-hidden="true">#</a> 10. 布局（Layouts）</h3>
<ul>
<li><strong>弹性布局（Flexbox）</strong>：<code v-pre>display: flex;</code>，用于创建灵活的布局结构。</li>
<li><strong>网格布局（Grid）</strong>：<code v-pre>display: grid;</code>，用于创建复杂的二维布局。</li>
</ul>
<h3 id="_11-多列布局-multi-column-layout" tabindex="-1"><a class="header-anchor" href="#_11-多列布局-multi-column-layout" aria-hidden="true">#</a> 11. 多列布局（Multi-Column Layout）</h3>
<ul>
<li><strong>多列布局</strong>：例如，<code v-pre>column-count</code>，<code v-pre>column-gap</code>，<code v-pre>column-rule</code> 等属性，允许将文本分成多列。</li>
</ul>
<h3 id="_12-媒体查询-media-queries" tabindex="-1"><a class="header-anchor" href="#_12-媒体查询-media-queries" aria-hidden="true">#</a> 12. 媒体查询（Media Queries）</h3>
<ul>
<li><strong>响应式设计</strong>：<code v-pre>@media</code> 规则，根据不同的设备和屏幕尺寸应用不同的样式。</li>
</ul>
<h3 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h3>
<p>以下是一个简单的示例，展示了一些 CSS3 的新特性：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>CSS3 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* 圆角边框和盒子大小 */</span>
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 多重背景 */</span>
  <span class="token selector">.background</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image1.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image2.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 渐变背景和文本阴影 */</span>
  <span class="token selector">.text</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 2px 2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 变换和过渡 */</span>
  <span class="token selector">.transform:hover</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease-in-out<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 弹性布局 */</span>
  <span class="token selector">.flex-container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.flex-item</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>圆角边框和盒子大小<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>多重背景<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>渐变背景和文本阴影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹性布局 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-item transform<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹性布局 2（变换和过渡）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹性布局 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例展示了一些 CSS3 的新特性，包括圆角边框、盒子大小、多重背景、渐变背景、文本阴影、变换、过渡和弹性布局。通过这些新特性，开发者可以更加灵活和高效地进行网页设计。</p>
</div></template>


