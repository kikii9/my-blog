<template><div><h1 id="_20240829" tabindex="-1"><a class="header-anchor" href="#_20240829" aria-hidden="true">#</a> 20240829</h1>
<h2 id="http-请求方法" tabindex="-1"><a class="header-anchor" href="#http-请求方法" aria-hidden="true">#</a> HTTP 请求方法</h2>
<table>
<thead>
<tr>
<th>请求方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GET</strong></td>
<td>请求从服务器获取资源或数据。通常用于检索数据。</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td>向服务器发送数据以创建或更新资源。常用于提交表单或上传文件。</td>
</tr>
<tr>
<td><strong>PUT</strong></td>
<td>更新指定资源的全部数据。一般用于更新整个资源对象。</td>
</tr>
<tr>
<td><strong>PATCH</strong></td>
<td>更新指定资源的部分数据。用于对资源进行局部修改。</td>
</tr>
<tr>
<td><strong>DELETE</strong></td>
<td>删除指定资源。</td>
</tr>
<tr>
<td><strong>HEAD</strong></td>
<td>类似于 <code v-pre>GET</code> 请求，但服务器只返回响应头，不返回响应体。用于获取资源的元数据。</td>
</tr>
<tr>
<td><strong>OPTIONS</strong></td>
<td>请求目标资源的支持方法，用于获取服务器的请求选项和功能。</td>
</tr>
<tr>
<td><strong>TRACE</strong></td>
<td>用于诊断和调试，回显服务器收到的请求，用于测试和诊断网络路径。</td>
</tr>
<tr>
<td><strong>CONNECT</strong></td>
<td>建立一个到目标资源的隧道，通常用于通过代理建立安全的 HTTPS 连接。</td>
</tr>
<tr>
<td><strong>PATCH</strong></td>
<td>对资源进行部分更新，适用于更新资源的一部分，而不是整个资源。</td>
</tr>
</tbody>
</table>
<h2 id="get-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-的区别" aria-hidden="true">#</a> GET 和 POST 的区别</h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>GET</th>
<th>POST</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>目的</strong></td>
<td>用于请求从服务器获取资源或数据</td>
<td>用于向服务器发送数据以创建或更新资源</td>
</tr>
<tr>
<td><strong>请求体</strong></td>
<td>通常不使用请求体，所有数据通过 URL 查询字符串传递</td>
<td>使用请求体传递数据</td>
</tr>
<tr>
<td><strong>数据传递</strong></td>
<td>数据通过 URL 查询字符串传递，例如：<code v-pre>/search?query=example</code></td>
<td>数据放在请求体中，不显示在 URL 中</td>
</tr>
<tr>
<td><strong>数据限制</strong></td>
<td>数据量有限，受限于 URL 长度（不同浏览器和服务器有不同限制，通常为几千字符）</td>
<td>数据量通常没有明确限制，可传递大量数据</td>
</tr>
<tr>
<td><strong>安全性</strong></td>
<td>数据在 URL 中明文传输，可能被浏览器历史记录、缓存或代理服务器记录</td>
<td>数据在请求体中，较为隐蔽，不会出现在 URL 中，通常更安全</td>
</tr>
<tr>
<td><strong>幂等性</strong></td>
<td>请求是幂等的，多次执行相同请求将得到相同结果，不改变服务器状态</td>
<td>请求不是幂等的，多次执行相同请求可能会产生不同结果</td>
</tr>
<tr>
<td><strong>缓存</strong></td>
<td>可以被缓存，浏览器和代理服务器通常会缓存 <code v-pre>GET</code> 请求的结果</td>
<td>通常不会被缓存</td>
</tr>
<tr>
<td><strong>书签和历史记录</strong></td>
<td>URL 可以被书签保存和共享，记录在浏览器历史记录中</td>
<td>数据不能被书签保存，不记录在浏览器历史记录中</td>
</tr>
<tr>
<td><strong>浏览器行为</strong></td>
<td>可以通过浏览器的“返回”按钮、刷新或历史记录重新访问相同的 URL</td>
<td>通常不会在浏览器的历史记录中保存</td>
</tr>
<tr>
<td><strong>服务器处理</strong></td>
<td>服务器处理请求通常较简单，处理结果通常不产生副作用</td>
<td>服务器处理请求可能涉及数据创建、更新或删除，通常会有副作用</td>
</tr>
<tr>
<td><strong>应用场景</strong></td>
<td>- 获取资源或数据，如网页、图片、API 数据等<br>- 查询操作，如搜索、过滤<br>- 无需修改服务器状态</td>
<td>- 提交表单数据，如注册、登录<br>- 上传文件，如图片、文档<br>- 创建或更新资源，如新增记录、编辑信息</td>
</tr>
</tbody>
</table>
</div></template>


