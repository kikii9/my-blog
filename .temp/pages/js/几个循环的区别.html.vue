<template><div><h1 id="javascript-循环总结" tabindex="-1"><a class="header-anchor" href="#javascript-循环总结" aria-hidden="true">#</a> JavaScript 循环总结</h1>
<table>
<thead>
<tr>
<th>循环类型</th>
<th>适用场景</th>
<th>获取内容</th>
<th>支持控制流（<code v-pre>break</code>, <code v-pre>continue</code>）</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>for</code></td>
<td>精确控制循环次数，索引操作</td>
<td>索引、值</td>
<td>是</td>
<td>适用于需要手动控制循环条件的场景</td>
</tr>
<tr>
<td><code v-pre>for...in</code></td>
<td>遍历对象的可枚举属性</td>
<td>属性名</td>
<td>是</td>
<td>不推荐用于数组遍历，可能遍历到继承的属性</td>
</tr>
<tr>
<td><code v-pre>for...of</code></td>
<td>遍历可迭代对象（如数组、字符串、<code v-pre>Map</code>）</td>
<td>值</td>
<td>是</td>
<td>适合遍历数组、字符串等可迭代对象，支持异步操作</td>
</tr>
<tr>
<td><code v-pre>forEach</code></td>
<td>数组遍历</td>
<td>值，当前索引，数组本身</td>
<td>否</td>
<td>无法中途终止循环，适用于需要执行函数的每个数组元素</td>
</tr>
<tr>
<td><code v-pre>while</code></td>
<td>条件满足时执行</td>
<td>自定义</td>
<td>是</td>
<td>手动控制循环条件，适用于条件控制的循环</td>
</tr>
<tr>
<td><code v-pre>do...while</code></td>
<td>先执行一次，再根据条件决定是否继续</td>
<td>自定义</td>
<td>是</td>
<td>至少执行一次循环，适用于循环体至少要执行一次的场景</td>
</tr>
</tbody>
</table>
<h2 id="_1-for-循环" tabindex="-1"><a class="header-anchor" href="#_1-for-循环" aria-hidden="true">#</a> 1. <code v-pre>for</code> 循环</h2>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3>
<ul>
<li>通过设置初始条件、循环条件和迭代步骤来控制循环次数。</li>
<li>适用于需要精确控制循环次数的场景，通常用于数组遍历或需要手动调整循环条件的场景。</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0, 1, 2, 3, 4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-for-in-循环" tabindex="-1"><a class="header-anchor" href="#_2-for-in-循环" aria-hidden="true">#</a> 2. <code v-pre>for...in</code> 循环</h2>
<h3 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1" aria-hidden="true">#</a> 用法</h3>
<ul>
<li>用于遍历对象的可枚举属性（包括继承的属性）。</li>
<li><strong>适合对象属性的遍历，但不适合数组遍历，因为它可能会遍历到数组的非数值属性。</strong></li>
</ul>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 a 1, b 2, c 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-for-of-循环" tabindex="-1"><a class="header-anchor" href="#_3-for-of-循环" aria-hidden="true">#</a> 3. <code v-pre>for...of</code> 循环</h2>
<h3 id="用法-2" tabindex="-1"><a class="header-anchor" href="#用法-2" aria-hidden="true">#</a> 用法</h3>
<ul>
<li>用于遍历可迭代对象（如数组、字符串、<code v-pre>Map</code>、<code v-pre>Set</code> 等）。</li>
<li>适用于遍历数组、字符串等，可直接获取元素值，而无需使用索引。</li>
</ul>
<h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 10, 20, 30</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 h, e, l, l, o</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-foreach-循环" tabindex="-1"><a class="header-anchor" href="#_4-foreach-循环" aria-hidden="true">#</a> 4. <code v-pre>forEach</code> 循环</h2>
<h3 id="用法-3" tabindex="-1"><a class="header-anchor" href="#用法-3" aria-hidden="true">#</a> 用法</h3>
<ul>
<li><code v-pre>forEach</code> 是数组的内置方法，用于遍历数组中的每一个元素。</li>
<li>不支持 <code v-pre>break</code> 或 <code v-pre>continue</code> 控制流。</li>
<li>遍历过程中会执行指定的回调函数，回调函数接收三个参数：当前元素、当前索引和原数组。</li>
</ul>
<h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Index: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">// 输出: </span>
  <span class="token comment">// Index: 0, Value: 1</span>
  <span class="token comment">// Index: 1, Value: 2</span>
  <span class="token comment">// Index: 2, Value: 3</span>
  <span class="token comment">// Index: 3, Value: 4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-while-循环" tabindex="-1"><a class="header-anchor" href="#_5-while-循环" aria-hidden="true">#</a> 5. <code v-pre>while</code> 循环</h2>
<h3 id="用法-4" tabindex="-1"><a class="header-anchor" href="#用法-4" aria-hidden="true">#</a> 用法</h3>
<ul>
<li><code v-pre>while</code> 循环在每次迭代前检查循环条件。</li>
<li>当条件为 <code v-pre>true</code> 时，循环体内的代码会被执行。</li>
<li>适用于需要在循环前检查条件的场景。</li>
</ul>
<h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0, 1, 2, 3, 4</span>
  i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-do-while-循环" tabindex="-1"><a class="header-anchor" href="#_6-do-while-循环" aria-hidden="true">#</a> 6. <code v-pre>do...while</code> 循环</h2>
<h3 id="用法-5" tabindex="-1"><a class="header-anchor" href="#用法-5" aria-hidden="true">#</a> 用法</h3>
<ul>
<li><code v-pre>do...while</code> 循环会先执行一次循环体，然后检查循环条件。</li>
<li>循环体至少会执行一次，无论循环条件是否为 <code v-pre>true</code>。</li>
<li>适用于需要保证循环体至少执行一次的场景。</li>
</ul>
<h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0, 1, 2, 3, 4</span>
  i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


