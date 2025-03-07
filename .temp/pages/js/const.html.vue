<template><div><h1 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h1>
<p>在 JavaScript 中，使用 <code v-pre>const</code> 定义的对象是可以修改其属性的，但不能重新赋值。<code v-pre>const</code> 关键字确保的是变量绑定的不可变性，而不是对象内容的不可变性。</p>
<h3 id="示例说明" tabindex="-1"><a class="header-anchor" href="#示例说明" aria-hidden="true">#</a> 示例说明</h3>
<h4 id="_1-修改对象属性" tabindex="-1"><a class="header-anchor" href="#_1-修改对象属性" aria-hidden="true">#</a> 1. 修改对象属性</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 修改对象属性</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "Bob", age: 30 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-重新赋值对象" tabindex="-1"><a class="header-anchor" href="#_2-重新赋值对象" aria-hidden="true">#</a> 2. 重新赋值对象</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 重新赋值对象会抛出错误</span>
person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Charlie"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">35</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="详细解释" tabindex="-1"><a class="header-anchor" href="#详细解释" aria-hidden="true">#</a> 详细解释</h3>
<ul>
<li><strong>属性修改</strong>：使用 <code v-pre>const</code> 声明的对象可以修改其属性。这是因为 <code v-pre>const</code> 声明的只是对象的引用，而不是真正冻结对象内容。</li>
<li><strong>重新赋值</strong>：试图重新赋值整个对象会抛出 <code v-pre>TypeError</code> 错误，因为 <code v-pre>const</code> 保证了引用的不可变性。</li>
</ul>
<h3 id="深度冻结对象" tabindex="-1"><a class="header-anchor" href="#深度冻结对象" aria-hidden="true">#</a> 深度冻结对象</h3>
<p>如果需要完全不可修改对象，可以使用 <code v-pre>Object.freeze</code> 方法进行深度冻结。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 尝试修改被冻结的对象属性不会生效</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "Alice", age: 25 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于深度冻结（冻结嵌套对象），需要递归地调用 <code v-pre>Object.freeze</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepFreeze</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> prop <span class="token operator">=</span> obj<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> prop <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> prop <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">deepFreeze</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">deepFreeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">"Wonderland"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 尝试修改深度冻结的对象属性不会生效</span>
person<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">"Reality"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "Alice", age: 25, address: { city: "Wonderland" } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li><strong><code v-pre>const</code> 定义的对象</strong>：可以修改对象的属性，但不能重新赋值。</li>
<li><strong>属性修改</strong>：使用 <code v-pre>const</code> 定义的对象允许修改其内部属性。</li>
<li><strong>重新赋值</strong>：重新赋值 <code v-pre>const</code> 对象会抛出错误。</li>
<li><strong>冻结对象</strong>：使用 <code v-pre>Object.freeze</code> 可以防止对象被修改。对于深层次的对象，需递归使用 <code v-pre>Object.freeze</code> 进行深度冻结。</li>
</ul>
</div></template>


