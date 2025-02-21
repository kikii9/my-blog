<template><div><h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1>
<p>在 JavaScript 中，数据类型可以分为两大类：<strong>基本数据类型</strong>（也称为原始类型）和<strong>引用数据类型</strong>（也称为对象类型）。以下是具体的数据类型：</p>
<h2 id="基本数据类型-primitive-types" tabindex="-1"><a class="header-anchor" href="#基本数据类型-primitive-types" aria-hidden="true">#</a> 基本数据类型（Primitive Types）</h2>
<p>基本数据类型是不可变的，直接存储在栈内存中。JavaScript 提供了七种基本数据类型：</p>
<ol>
<li>
<p><strong>Number</strong>：表示数字，包括整数和浮点数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token number">19.99</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>String</strong>：表示文本数据，使用单引号、双引号或反引号包裹。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"Alice"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> greeting <span class="token operator">=</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The price is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Boolean</strong>：表示真（true）或假（false）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> isActive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hasPermission <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Undefined</strong>：表示变量未定义或未初始化。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Null</strong>：表示空值或空对象引用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Symbol</strong>（ES6 引入）：表示独一无二的值，主要用于对象属性的唯一标识。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> sym <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'description'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>BigInt</strong>（ES10 引入）：表示任意精度的整数，可以表示大于 <code v-pre>Number</code> 类型范围的整数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> bigNumber <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">9007199254740991</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> anotherBigNumber <span class="token operator">=</span> <span class="token number">1234567890123456789012345678901234567890n</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="引用数据类型-reference-types" tabindex="-1"><a class="header-anchor" href="#引用数据类型-reference-types" aria-hidden="true">#</a> 引用数据类型（Reference Types）</h2>
<p>引用数据类型存储在堆内存中，引用变量指向对象在内存中的地址。主要包括以下几种：</p>
<ol>
<li>
<p><strong>Object</strong>：对象是属性的集合，属性可以包含基本数据类型或其他对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isStudent</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Array</strong>：数组是一个有序集合，元素可以是任意数据类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Function</strong>：函数是可调用的对象，封装了可执行的代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Date</strong>：日期对象，用于表示和操作日期和时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>RegExp</strong>：正则表达式对象，用于匹配文本模式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Map</strong>：键值对集合，键可以是任意数据类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Set</strong>：值的集合，值不能重复。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会添加第二个2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p><strong>表格总结</strong></p>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Number</strong></td>
<td>数字，包括整数和浮点数</td>
<td><code v-pre>let age = 25;</code></td>
</tr>
<tr>
<td><strong>String</strong></td>
<td>文本数据</td>
<td><code v-pre>let name = &quot;Alice&quot;;</code></td>
</tr>
<tr>
<td><strong>Boolean</strong></td>
<td>真（true）或假（false）</td>
<td><code v-pre>let isActive = true;</code></td>
</tr>
<tr>
<td><strong>Undefined</strong></td>
<td>未定义或未初始化的变量</td>
<td><code v-pre>let x; console.log(x); // undefined</code></td>
</tr>
<tr>
<td><strong>Null</strong></td>
<td>空值或空对象引用</td>
<td><code v-pre>let y = null;</code></td>
</tr>
<tr>
<td><strong>Symbol</strong></td>
<td>独一无二的值，用于对象属性</td>
<td><code v-pre>let sym = Symbol('description');</code></td>
</tr>
<tr>
<td><strong>BigInt</strong></td>
<td>任意精度的整数</td>
<td><code v-pre>let bigNumber = BigInt(9007199254740991);</code></td>
</tr>
<tr>
<td><strong>Object</strong></td>
<td>属性的集合</td>
<td><code v-pre>let person = { name: &quot;Alice&quot;, age: 25 };</code></td>
</tr>
<tr>
<td><strong>Array</strong></td>
<td>有序集合</td>
<td><code v-pre>let numbers = [1, 2, 3, 4, 5];</code></td>
</tr>
<tr>
<td><strong>Function</strong></td>
<td>可调用的对象</td>
<td><code v-pre>function greet() { console.log(&quot;Hello!&quot;); }</code></td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>表示和操作日期和时间</td>
<td><code v-pre>let now = new Date();</code></td>
</tr>
<tr>
<td><strong>RegExp</strong></td>
<td>正则表达式对象</td>
<td><code v-pre>let pattern = /hello/i;</code></td>
</tr>
<tr>
<td><strong>Map</strong></td>
<td>键值对集合</td>
<td><code v-pre>let map = new Map(); map.set('key', 'value');</code></td>
</tr>
<tr>
<td><strong>Set</strong></td>
<td>值的集合，不重复</td>
<td><code v-pre>let set = new Set(); set.add(1); set.add(2);</code></td>
</tr>
</tbody>
</table>
<h2 id="判断数据类型" tabindex="-1"><a class="header-anchor" href="#判断数据类型" aria-hidden="true">#</a> 判断数据类型</h2>
<p>在 JavaScript 中，有多种方法可以用于判断变量的数据类型。以下是一些常用的方法和它们的适用场景：</p>
<h3 id="_1-typeof-操作符" tabindex="-1"><a class="header-anchor" href="#_1-typeof-操作符" aria-hidden="true">#</a> 1. <code v-pre>typeof</code> 操作符</h3>
<p><code v-pre>typeof</code> 用于判断基本数据类型和函数，返回一个表示数据类型的字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "number"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "string"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "boolean"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "undefined"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "function"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "symbol"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "bigint"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-instanceof-操作符" tabindex="-1"><a class="header-anchor" href="#_2-instanceof-操作符" aria-hidden="true">#</a> 2. <code v-pre>instanceof</code> 操作符</h3>
<p><code v-pre>instanceof</code> 用于判断对象实例是否属于某个特定的构造函数，返回布尔值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">/</span>regex<span class="token operator">/</span> <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-array-isarray" tabindex="-1"><a class="header-anchor" href="#_3-array-isarray" aria-hidden="true">#</a> 3. <code v-pre>Array.isArray()</code></h3>
<p>用于判断一个值是否为数组，返回布尔值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-object-prototype-tostring-call" tabindex="-1"><a class="header-anchor" href="#_4-object-prototype-tostring-call" aria-hidden="true">#</a> 4. <code v-pre>Object.prototype.toString.call()</code></h3>
<p>这是一个更精确的类型判断方法，适用于所有类型，包括内置对象类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Number]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object String]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Boolean]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Undefined]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Null]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Array]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Function]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Date]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">regex</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object RegExp]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Symbol]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object BigInt]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-自定义类型检查" tabindex="-1"><a class="header-anchor" href="#_5-自定义类型检查" aria-hidden="true">#</a> 5. 自定义类型检查</h3>
<p>可以通过构造函数或类名来检查某些对象的类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表格总结" tabindex="-1"><a class="header-anchor" href="#表格总结" aria-hidden="true">#</a> 表格总结</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>适用范围</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>typeof</code></td>
<td>基本数据类型和函数</td>
<td><code v-pre>typeof 123</code> // &quot;number&quot;</td>
</tr>
<tr>
<td><code v-pre>instanceof</code></td>
<td>对象实例和构造函数</td>
<td><code v-pre>[] instanceof Array</code> // true</td>
</tr>
<tr>
<td><code v-pre>Array.isArray()</code></td>
<td>数组</td>
<td><code v-pre>Array.isArray([])</code> // true</td>
</tr>
<tr>
<td><code v-pre>Object.prototype.toString.call</code></td>
<td>所有类型</td>
<td><code v-pre>Object.prototype.toString.call([])</code> // &quot;[object Array]&quot;</td>
</tr>
<tr>
<td>构造函数或类名</td>
<td>自定义对象实例</td>
<td><code v-pre>person instanceof Person</code> // true</td>
</tr>
</tbody>
</table>
<h2 id="判断数组-和对象" tabindex="-1"><a class="header-anchor" href="#判断数组-和对象" aria-hidden="true">#</a> 判断数组 [] 和对象 {}</h2>
<p>在判断数组和对象时，各种方法的效果和准确性如下：</p>
<h3 id="_1-typeof-操作符-1" tabindex="-1"><a class="header-anchor" href="#_1-typeof-操作符-1" aria-hidden="true">#</a> 1. <code v-pre>typeof</code> 操作符</h3>
<ul>
<li><strong>数组</strong>：返回 <code v-pre>&quot;object&quot;</code>，因为在 JavaScript 中数组是对象的一种。</li>
<li><strong>对象</strong>：返回 <code v-pre>&quot;object&quot;</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-instanceof-操作符-1" tabindex="-1"><a class="header-anchor" href="#_2-instanceof-操作符-1" aria-hidden="true">#</a> 2. <code v-pre>instanceof</code> 操作符</h3>
<ul>
<li><strong>数组</strong>：返回 <code v-pre>true</code>，因为数组是 <code v-pre>Array</code> 的实例。</li>
<li><strong>对象</strong>：返回 <code v-pre>true</code>，因为所有对象都是 <code v-pre>Object</code> 的实例。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-array-isarray-1" tabindex="-1"><a class="header-anchor" href="#_3-array-isarray-1" aria-hidden="true">#</a> 3. <code v-pre>Array.isArray()</code></h3>
<ul>
<li><strong>数组</strong>：返回 <code v-pre>true</code>，因为这是专门用于判断数组的方法。</li>
<li><strong>对象</strong>：返回 <code v-pre>false</code>，因为对象不是数组。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-object-prototype-tostring-call-1" tabindex="-1"><a class="header-anchor" href="#_4-object-prototype-tostring-call-1" aria-hidden="true">#</a> 4. <code v-pre>Object.prototype.toString.call()</code></h3>
<ul>
<li><strong>数组</strong>：返回 <code v-pre>&quot;[object Array]&quot;</code>，这是精确的类型判断方法。</li>
<li><strong>对象</strong>：返回 <code v-pre>&quot;[object Object]&quot;</code>，这是精确的类型判断方法。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Array]"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-构造函数或类名" tabindex="-1"><a class="header-anchor" href="#_5-构造函数或类名" aria-hidden="true">#</a> 5. 构造函数或类名</h3>
<ul>
<li><strong>数组</strong>：可以通过 <code v-pre>constructor</code> 属性来判断，数组的 <code v-pre>constructor</code> 是 <code v-pre>Array</code>。</li>
<li><strong>对象</strong>：可以通过 <code v-pre>constructor</code> 属性来判断，普通对象的 <code v-pre>constructor</code> 是 <code v-pre>Object</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表格总结-1" tabindex="-1"><a class="header-anchor" href="#表格总结-1" aria-hidden="true">#</a> 表格总结</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>用于判断数组的效果</th>
<th>用于判断对象的效果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>typeof</code></td>
<td>返回 <code v-pre>&quot;object&quot;</code></td>
<td>返回 <code v-pre>&quot;object&quot;</code></td>
</tr>
<tr>
<td><code v-pre>instanceof</code></td>
<td><code v-pre>[] instanceof Array</code> 返回 <code v-pre>true</code></td>
<td><code v-pre>{} instanceof Object</code> 返回 <code v-pre>true</code></td>
</tr>
<tr>
<td><code v-pre>Array.isArray()</code></td>
<td>返回 <code v-pre>true</code></td>
<td>返回 <code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>Object.prototype.toString.call</code></td>
<td>返回 <code v-pre>&quot;[object Array]&quot;</code></td>
<td>返回 <code v-pre>&quot;[object Object]&quot;</code></td>
</tr>
<tr>
<td>构造函数或类名</td>
<td><code v-pre>[].constructor === Array</code> 返回 <code v-pre>true</code></td>
<td><code v-pre>{}.constructor === Object</code> 返回 <code v-pre>true</code></td>
</tr>
</tbody>
</table>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li><strong><code v-pre>typeof</code></strong>：无法区分数组和对象，都会返回 <code v-pre>&quot;object&quot;</code>。</li>
<li><strong><code v-pre>instanceof</code></strong>：能区分数组和对象，但对于非标准构造函数的对象可能不准确。</li>
<li><strong><code v-pre>Array.isArray()</code></strong>：专门用于判断数组，非常可靠。</li>
<li><strong><code v-pre>Object.prototype.toString.call</code></strong>：非常精确，可以区分数组和对象。</li>
<li><strong>构造函数或类名</strong>：通过 <code v-pre>constructor</code> 属性可以区分数组和对象，但需要对构造函数有一定了解。</li>
</ul>
<p>在实际使用中，判断数组推荐使用 <code v-pre>Array.isArray()</code>，判断对象推荐使用 <code v-pre>Object.prototype.toString.call()</code>。</p>
</div></template>


