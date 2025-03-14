<template><div><h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h2>
<p>URL（统一资源定位符）是用于标识网络资源的标准格式。在 URL 中，通常会包含一些特殊符号，它们有特定的含义或功能。以下是 URL 中常见的符号及其作用：</p>
<hr>
<h3 id="_1-基础符号" tabindex="-1"><a class="header-anchor" href="#_1-基础符号" aria-hidden="true">#</a> <strong>1. 基础符号</strong></h3>
<table>
<thead>
<tr>
<th><strong>符号</strong></th>
<th><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/</code></td>
<td>分隔协议、域名、路径或层级。</td>
</tr>
<tr>
<td><code v-pre>:</code></td>
<td>用于分隔协议和域名，或指定端口号。</td>
</tr>
<tr>
<td><code v-pre>?</code></td>
<td>开始查询参数部分，用于传递键值对参数。</td>
</tr>
<tr>
<td><code v-pre>&amp;</code></td>
<td>分隔多个查询参数。</td>
</tr>
<tr>
<td><code v-pre>=</code></td>
<td>在查询参数中分隔键和值。</td>
</tr>
<tr>
<td><code v-pre>#</code></td>
<td>指定锚点或片段，通常用于页面内导航或前端状态。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-特殊符号" tabindex="-1"><a class="header-anchor" href="#_2-特殊符号" aria-hidden="true">#</a> <strong>2. 特殊符号</strong></h3>
<p>一些符号在 URL 中具有特定功能或需要被编码：</p>
<table>
<thead>
<tr>
<th><strong>符号</strong></th>
<th><strong>作用</strong></th>
<th><strong>编码形式</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre> </code> (空格)</td>
<td>需要编码，通常表示参数中的空格。</td>
<td><code v-pre>%20</code></td>
</tr>
<tr>
<td><code v-pre>%</code></td>
<td>百分号本身在 URL 中用于编码其他符号。</td>
<td><code v-pre>%25</code></td>
</tr>
<tr>
<td><code v-pre>+</code></td>
<td>表示空格（某些场景中，<code v-pre>+</code> 被解读为空格）。</td>
<td><code v-pre>%2B</code></td>
</tr>
<tr>
<td><code v-pre>.</code></td>
<td>文件扩展名或路径分隔的当前目录标识。</td>
<td>无需编码</td>
</tr>
<tr>
<td><code v-pre>,</code></td>
<td>参数分隔符（有时用于多值字段，如 <code v-pre>key=value1,value2</code>）。</td>
<td><code v-pre>%2C</code></td>
</tr>
<tr>
<td><code v-pre>?</code></td>
<td>表示查询参数部分的开始（在值中需要编码）。</td>
<td><code v-pre>%3F</code></td>
</tr>
<tr>
<td><code v-pre>&amp;</code></td>
<td>表示多个查询参数之间的分隔（在值中需要编码）。</td>
<td><code v-pre>%26</code></td>
</tr>
<tr>
<td><code v-pre>=</code></td>
<td>表示键和值的分隔（在值中需要编码）。</td>
<td><code v-pre>%3D</code></td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td>用于路径分隔（在查询参数值中需要编码）。</td>
<td><code v-pre>%2F</code></td>
</tr>
<tr>
<td><code v-pre>#</code></td>
<td>指定锚点或片段（在值中需要编码）。</td>
<td><code v-pre>%23</code></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-url-的组成及符号用法" tabindex="-1"><a class="header-anchor" href="#_3-url-的组成及符号用法" aria-hidden="true">#</a> <strong>3. URL 的组成及符号用法</strong></h3>
<h4 id="协议部分" tabindex="-1"><a class="header-anchor" href="#协议部分" aria-hidden="true">#</a> <strong>协议部分</strong></h4>
<ul>
<li>
<p>用 <code v-pre>://</code> 分隔协议和域名。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="域名和端口" tabindex="-1"><a class="header-anchor" href="#域名和端口" aria-hidden="true">#</a> <strong>域名和端口</strong></h4>
<ul>
<li>
<p>域名和端口号之间用 <code v-pre>:</code> 分隔。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> <strong>路径</strong></h4>
<ul>
<li>
<p>路径部分用 <code v-pre>/</code> 分隔目录层级。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com/folder/page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="查询参数" tabindex="-1"><a class="header-anchor" href="#查询参数" aria-hidden="true">#</a> <strong>查询参数</strong></h4>
<ul>
<li>
<p>查询参数部分以 <code v-pre>?</code> 开始，用 <code v-pre>&amp;</code> 分隔多个参数，键值对用 <code v-pre>=</code> 分隔。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com/page?key1=value1&amp;key2=value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点" aria-hidden="true">#</a> <strong>锚点</strong></h4>
<ul>
<li>
<p>锚点以 <code v-pre>#</code> 开始，标识页面中的某个部分。</p>
</li>
<li>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com/page#section1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_4-url-编码" tabindex="-1"><a class="header-anchor" href="#_4-url-编码" aria-hidden="true">#</a> <strong>4. URL 编码</strong></h3>
<p>如果某些符号需要在 URL 参数中使用，必须对它们进行编码。常见需要编码的符号包括：</p>
<table>
<thead>
<tr>
<th><strong>字符</strong></th>
<th><strong>编码形式</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre> </code></td>
<td><code v-pre>%20</code></td>
</tr>
<tr>
<td><code v-pre>&quot;</code></td>
<td><code v-pre>%22</code></td>
</tr>
<tr>
<td><code v-pre>#</code></td>
<td><code v-pre>%23</code></td>
</tr>
<tr>
<td><code v-pre>%</code></td>
<td><code v-pre>%25</code></td>
</tr>
<tr>
<td><code v-pre>&amp;</code></td>
<td><code v-pre>%26</code></td>
</tr>
<tr>
<td><code v-pre>'</code></td>
<td><code v-pre>%27</code></td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td><code v-pre>%2F</code></td>
</tr>
<tr>
<td><code v-pre>:</code></td>
<td><code v-pre>%3A</code></td>
</tr>
<tr>
<td><code v-pre>=</code></td>
<td><code v-pre>%3D</code></td>
</tr>
<tr>
<td><code v-pre>?</code></td>
<td><code v-pre>%3F</code></td>
</tr>
<tr>
<td><code v-pre>@</code></td>
<td><code v-pre>%40</code></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-示例完整-url" tabindex="-1"><a class="header-anchor" href="#_5-示例完整-url" aria-hidden="true">#</a> <strong>5. 示例完整 URL</strong></h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://example.com:8080/folder/page?key1=value1&amp;key2=value2#section
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>协议</strong>: <code v-pre>https</code></li>
<li><strong>域名</strong>: <code v-pre>example.com</code></li>
<li><strong>端口</strong>: <code v-pre>8080</code></li>
<li><strong>路径</strong>: <code v-pre>/folder/page</code></li>
<li><strong>查询参数</strong>: <code v-pre>key1=value1&amp;key2=value2</code></li>
<li><strong>锚点</strong>: <code v-pre>#section</code></li>
</ul>
<hr>
<h3 id="_6-常见错误和注意事项" tabindex="-1"><a class="header-anchor" href="#_6-常见错误和注意事项" aria-hidden="true">#</a> <strong>6. 常见错误和注意事项</strong></h3>
<ol>
<li><strong>符号未编码</strong>:
<ul>
<li>示例：<code v-pre>https://example.com/page?key=hello world</code>（空格未编码）。</li>
<li>正确：<code v-pre>https://example.com/page?key=hello%20world</code></li>
</ul>
</li>
<li><strong>多余的 <code v-pre>?</code> 或 <code v-pre>&amp;</code></strong>:
<ul>
<li>示例：<code v-pre>https://example.com/page?key=value?another=value</code></li>
<li>修正：<code v-pre>https://example.com/page?key=value&amp;another=value</code></li>
</ul>
</li>
<li><strong>不必要的锚点</strong>:
<ul>
<li>示例：<code v-pre>https://example.com/page#</code></li>
<li>修正：去掉多余的 <code v-pre>#</code>。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>URL 中常见的符号包括 <code v-pre>/</code>, <code v-pre>?</code>, <code v-pre>&amp;</code>, <code v-pre>=</code>, <code v-pre>#</code> 等，它们有特定的用途。</li>
<li>非标准字符（如空格和中文）需要进行 URL 编码，以确保兼容性和正确解析。</li>
<li>编写 URL 时，保持规范化格式可以避免解析问题。</li>
</ul>
</div></template>


