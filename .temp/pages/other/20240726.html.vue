<template><div><h1 id="_20240726" tabindex="-1"><a class="header-anchor" href="#_20240726" aria-hidden="true">#</a> 20240726</h1>
<h2 id="promise在事件循环中的执行过程是怎样的" tabindex="-1"><a class="header-anchor" href="#promise在事件循环中的执行过程是怎样的" aria-hidden="true">#</a> Promise在事件循环中的执行过程是怎样的？</h2>
<p><code v-pre>Promise</code> 在事件循环（Event Loop）中的执行过程涉及一些关键步骤和机制。为了更好地理解，我们需要了解 JavaScript 的执行栈、任务队列、微任务队列以及事件循环的工作原理。以下是详细的解释：</p>
<h3 id="_1-执行栈-call-stack" tabindex="-1"><a class="header-anchor" href="#_1-执行栈-call-stack" aria-hidden="true">#</a> 1. 执行栈（Call Stack）</h3>
<p>JavaScript 是单线程语言，所有同步任务会在执行栈中依次执行。</p>
<h3 id="_2-web-apis" tabindex="-1"><a class="header-anchor" href="#_2-web-apis" aria-hidden="true">#</a> 2. Web APIs</h3>
<p>一些异步任务（如 <code v-pre>setTimeout</code>、HTTP 请求等）会被发送到浏览器的 Web API 环境中处理，处理完成后会将回调函数放入相应的队列。</p>
<h3 id="_3-任务队列-task-queue-或-macro-task-queue" tabindex="-1"><a class="header-anchor" href="#_3-任务队列-task-queue-或-macro-task-queue" aria-hidden="true">#</a> 3. 任务队列（Task Queue 或 Macro Task Queue）</h3>
<p>包含来自 <code v-pre>setTimeout</code>、<code v-pre>setInterval</code>、<code v-pre>I/O</code> 等异步任务的回调函数。</p>
<h3 id="_4-微任务队列-microtask-queue" tabindex="-1"><a class="header-anchor" href="#_4-微任务队列-microtask-queue" aria-hidden="true">#</a> 4. 微任务队列（Microtask Queue）</h3>
<p>包含 Promise 的回调函数（<code v-pre>.then</code> 和 <code v-pre>.catch</code>）、<code v-pre>MutationObserver</code> 回调等微任务。</p>
<h3 id="_5-事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#_5-事件循环-event-loop" aria-hidden="true">#</a> 5. 事件循环（Event Loop）</h3>
<p>事件循环不断检查执行栈是否为空，当栈为空时会优先处理微任务队列中的任务，然后处理任务队列中的任务。</p>
<h3 id="promise-的执行过程" tabindex="-1"><a class="header-anchor" href="#promise-的执行过程" aria-hidden="true">#</a> Promise 的执行过程</h3>
<ol>
<li>
<p><strong>Promise 创建时</strong>：</p>
<ul>
<li>当一个 <code v-pre>Promise</code> 被创建时，其执行器（executor）立即在执行栈中同步执行。</li>
<li>如果执行器中包含异步操作，完成后会将 <code v-pre>.then</code> 或 <code v-pre>.catch</code> 回调放入微任务队列。</li>
</ul>
</li>
<li>
<p><strong>Promise 回调</strong>：</p>
<ul>
<li>当一个 <code v-pre>Promise</code> 被解决（resolved）或拒绝（rejected）时，其对应的 <code v-pre>.then</code> 或 <code v-pre>.catch</code> 回调会被放入微任务队列。</li>
<li>微任务队列中的任务会在当前执行栈中的所有同步代码执行完毕后立即执行。</li>
</ul>
</li>
</ol>
<h3 id="示例代码解释" tabindex="-1"><a class="header-anchor" href="#示例代码解释" aria-hidden="true">#</a> 示例代码解释</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setTimeout'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行过程" tabindex="-1"><a class="header-anchor" href="#执行过程" aria-hidden="true">#</a> 执行过程</h3>
<ol>
<li>
<p><strong>同步任务执行</strong>：</p>
<ul>
<li>首先输出 <code v-pre>script start</code>。</li>
<li>将 <code v-pre>setTimeout</code> 回调放入任务队列。</li>
<li><code v-pre>Promise.resolve()</code> 立即完成，将第一个 <code v-pre>.then</code> 回调放入微任务队列。</li>
<li>输出 <code v-pre>script end</code>。</li>
</ul>
</li>
<li>
<p><strong>微任务队列执行</strong>：</p>
<ul>
<li>当前执行栈为空，事件循环处理微任务队列，输出 <code v-pre>Promise1</code>。</li>
<li>第一个 <code v-pre>.then</code> 回调完成后，将第二个 <code v-pre>.then</code> 回调放入微任务队列。</li>
<li>继续处理微任务队列，输出 <code v-pre>Promise2</code>。</li>
</ul>
</li>
<li>
<p><strong>任务队列执行</strong>：</p>
<ul>
<li>微任务队列为空，事件循环处理任务队列，输出 <code v-pre>setTimeout</code>。</li>
</ul>
</li>
</ol>
<h3 id="输出顺序" tabindex="-1"><a class="header-anchor" href="#输出顺序" aria-hidden="true">#</a> 输出顺序</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>script start
script end
Promise1
Promise2
setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li><code v-pre>Promise</code> 的回调（<code v-pre>.then</code> 和 <code v-pre>.catch</code>）作为微任务，会在当前执行栈中的所有同步代码执行完毕后立即执行。</li>
<li>微任务队列中的任务优先于任务队列中的任务执行。</li>
<li>理解事件循环和 Promise 的执行过程有助于更好地编写和调试异步代码。</li>
</ul>
<h2 id="事件循环是什么" tabindex="-1"><a class="header-anchor" href="#事件循环是什么" aria-hidden="true">#</a> 事件循环是什么</h2>
<p>事件循环（Event Loop）是 JavaScript 运行时环境中处理异步操作的机制。它允许 JavaScript 单线程执行异步任务，从而使得 JavaScript 在处理 I/O 操作、计时器、用户交互等方面表现得像是并行执行一样。事件循环的主要职责是监控调用栈和任务队列，确保非阻塞的异步任务能够正确执行。</p>
<h3 id="事件循环的工作原理" tabindex="-1"><a class="header-anchor" href="#事件循环的工作原理" aria-hidden="true">#</a> 事件循环的工作原理</h3>
<p>事件循环主要由以下几个部分组成：</p>
<ol>
<li>
<p><strong>调用栈（Call Stack）</strong>：</p>
<ul>
<li>用于存放执行中的函数调用。当一个函数被调用时，它会被推入调用栈的顶部；当函数执行完成时，它会从调用栈中弹出。</li>
</ul>
</li>
<li>
<p><strong>任务队列（Task Queue 或 Macro Task Queue）</strong>：</p>
<ul>
<li>存放需要异步执行的宏任务（macro task）。例如 <code v-pre>setTimeout</code>、<code v-pre>setInterval</code>、I/O 操作等。</li>
</ul>
</li>
<li>
<p><strong>微任务队列（Microtask Queue）</strong>：</p>
<ul>
<li>存放需要异步执行的微任务（micro task）。例如 <code v-pre>Promise.then</code> 回调、<code v-pre>MutationObserver</code> 回调等。</li>
</ul>
</li>
<li>
<p><strong>事件循环（Event Loop）</strong>：</p>
<ul>
<li>事件循环不断地检查调用栈和任务队列。如果调用栈为空，它会从微任务队列中取出任务执行；如果微任务队列也为空，它会从任务队列中取出任务执行。</li>
</ul>
</li>
</ol>
<h3 id="事件循环的执行步骤" tabindex="-1"><a class="header-anchor" href="#事件循环的执行步骤" aria-hidden="true">#</a> 事件循环的执行步骤</h3>
<ol>
<li>
<p><strong>执行调用栈中的同步任务</strong>：</p>
<ul>
<li>执行栈中的同步任务（函数调用）会立即执行。</li>
</ul>
</li>
<li>
<p><strong>处理微任务队列中的任务</strong>：</p>
<ul>
<li>当调用栈为空时，事件循环会依次执行微任务队列中的任务，直到微任务队列为空。</li>
</ul>
</li>
<li>
<p><strong>处理宏任务队列中的任务</strong>：</p>
<ul>
<li>微任务队列清空后，事件循环会从宏任务队列中取出一个任务执行。</li>
</ul>
</li>
<li>
<p><strong>重复上述步骤</strong>：</p>
<ul>
<li>事件循环不断重复上述步骤，确保所有任务都能正确执行。</li>
</ul>
</li>
</ol>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<p>以下是一个简单的例子，展示了事件循环的执行顺序：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setTimeout'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Promise2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行顺序分析" tabindex="-1"><a class="header-anchor" href="#执行顺序分析" aria-hidden="true">#</a> 执行顺序分析</h3>
<ol>
<li>
<p><strong>同步代码执行</strong>：</p>
<ul>
<li><code v-pre>console.log('script start');</code> 输出 <code v-pre>script start</code></li>
<li><code v-pre>setTimeout</code> 回调函数被放入宏任务队列</li>
<li><code v-pre>Promise.resolve()</code> 的第一个 <code v-pre>.then</code> 回调被放入微任务队列</li>
<li><code v-pre>console.log('script end');</code> 输出 <code v-pre>script end</code></li>
</ul>
</li>
<li>
<p><strong>微任务队列执行</strong>：</p>
<ul>
<li>微任务队列中的 <code v-pre>Promise1</code> 回调被执行，输出 <code v-pre>Promise1</code></li>
<li><code v-pre>Promise1</code> 的 <code v-pre>.then</code> 回调被放入微任务队列</li>
<li>微任务队列中的 <code v-pre>Promise2</code> 回调被执行，输出 <code v-pre>Promise2</code></li>
</ul>
</li>
<li>
<p><strong>宏任务队列执行</strong>：</p>
<ul>
<li>宏任务队列中的 <code v-pre>setTimeout</code> 回调被执行，输出 <code v-pre>setTimeout</code></li>
</ul>
</li>
</ol>
<h3 id="输出顺序-1" tabindex="-1"><a class="header-anchor" href="#输出顺序-1" aria-hidden="true">#</a> 输出顺序</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>script start
script end
Promise1
Promise2
setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3>
<p>事件循环通过不断检查调用栈、微任务队列和宏任务队列，确保 JavaScript 能够高效地处理异步任务，从而使得 JavaScript 单线程环境中可以执行异步操作而不会阻塞主线程。这一机制是 JavaScript 高效、非阻塞 I/O 操作的关键。</p>
<h2 id="restful-api-是什么" tabindex="-1"><a class="header-anchor" href="#restful-api-是什么" aria-hidden="true">#</a> RESTful API 是什么</h2>
<p>RESTful API（Representational State Transfer）是一种基于REST架构风格的Web API设计方法。REST架构风格是一种轻量级的、无状态的、面向资源的分布式系统架构。RESTful API通过HTTP协议传输数据，使得不同系统之间能够通过标准的HTTP方法进行通信和数据交换。下面是RESTful API的一些基本概念和特点：</p>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<ol>
<li>
<p><strong>资源（Resource）</strong>：</p>
<ul>
<li>资源是RESTful API的核心概念，通常表示为Web上的一个实体或对象。资源可以是用户、订单、文件等任何可以被表示和操作的数据。</li>
<li>每个资源通过URI（统一资源标识符）唯一标识。</li>
</ul>
</li>
<li>
<p><strong>URI（Uniform Resource Identifier）</strong>：</p>
<ul>
<li>URI是资源的唯一标识符，通过URL（统一资源定位符）来访问资源。</li>
</ul>
</li>
<li>
<p><strong>HTTP方法</strong>：</p>
<ul>
<li>RESTful API使用标准的HTTP方法来操作资源。常见的HTTP方法包括：
<ul>
<li><strong>GET</strong>：获取资源</li>
<li><strong>POST</strong>：创建资源</li>
<li><strong>PUT</strong>：更新资源</li>
<li><strong>DELETE</strong>：删除资源</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>无状态（Stateless）</strong>：</p>
<ul>
<li>每个请求从客户端到服务器都必须包含完成该请求所需的所有信息。服务器不会在请求之间保存客户端的状态。</li>
</ul>
</li>
<li>
<p><strong>表示（Representation）</strong>：</p>
<ul>
<li>资源可以有多种表示形式，如JSON、XML、HTML等。客户端和服务器通过这些表示形式来交换数据。</li>
</ul>
</li>
</ol>
<h3 id="restful-api的设计原则" tabindex="-1"><a class="header-anchor" href="#restful-api的设计原则" aria-hidden="true">#</a> RESTful API的设计原则</h3>
<ol>
<li>
<p><strong>使用HTTP方法</strong>：</p>
<ul>
<li>合理使用HTTP方法来操作资源，确保请求和操作的一致性。</li>
</ul>
</li>
<li>
<p><strong>资源的URI设计</strong>：</p>
<ul>
<li>使用有意义且规范的URI来标识资源。例如，<code v-pre>/users</code>表示用户资源，<code v-pre>/users/{id}</code>表示特定用户。</li>
</ul>
</li>
<li>
<p><strong>状态码</strong>：</p>
<ul>
<li>使用标准的HTTP状态码来表示请求的结果。例如，<code v-pre>200 OK</code>表示请求成功，<code v-pre>404 Not Found</code>表示资源未找到。</li>
</ul>
</li>
<li>
<p><strong>无状态交互</strong>：</p>
<ul>
<li>每个请求应包含所有必要的信息，以便服务器能够理解和处理请求，而不依赖于服务器端会话。</li>
</ul>
</li>
<li>
<p><strong>资源的表示</strong>：</p>
<ul>
<li>使用标准格式（如JSON或XML）来表示资源，确保数据的可读性和可解析性。</li>
</ul>
</li>
</ol>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p>以下是一个简单的RESTful API示例，展示了如何管理用户资源：</p>
<div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre v-pre class="language-plaintext"><code>GET /users             // 获取所有用户
GET /users/{id}        // 获取特定用户
POST /users            // 创建新用户
PUT /users/{id}        // 更新特定用户
DELETE /users/{id}     // 删除特定用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h3>
<p>假设我们要创建一个简单的用户管理API，使用Node.js和Express框架：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'john.doe@example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane Doe'</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'jane.doe@example.com'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 获取所有用户</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取特定用户</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">u</span> <span class="token operator">=></span> u<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'用户未找到'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建新用户</span>
app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> users<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>email
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>newUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更新特定用户</span>
app<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">u</span> <span class="token operator">=></span> u<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'用户未找到'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  user<span class="token punctuation">.</span>email <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>email<span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除特定用户</span>
app<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userIndex <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">u</span> <span class="token operator">=></span> u<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>userIndex <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'用户未找到'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  users<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>userIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码创建了一个简单的RESTful API来管理用户资源，包括获取所有用户、获取特定用户、创建新用户、更新特定用户和删除特定用户。</p>
</div></template>


