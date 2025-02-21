import{_ as a,o as n,c as s,d as e}from"./app-8b6d79d9.js";const i={},c=e(`<h1 id="常用服务器命令" tabindex="-1"><a class="header-anchor" href="#常用服务器命令" aria-hidden="true">#</a> 常用服务器命令</h1><h2 id="_1-系统管理" tabindex="-1"><a class="header-anchor" href="#_1-系统管理" aria-hidden="true">#</a> 1.系统管理</h2><h3 id="查看系统信息" tabindex="-1"><a class="header-anchor" href="#查看系统信息" aria-hidden="true">#</a> 查看系统信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>    <span class="token comment"># 显示系统信息</span>
lsb_release <span class="token parameter variable">-a</span>  <span class="token comment"># 显示Linux发行版信息</span>
<span class="token function">top</span>    <span class="token comment"># 实时显示系统资源使用情况</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>  <span class="token comment"># 查看磁盘空间使用情况</span>
<span class="token function">free</span> <span class="token parameter variable">-h</span>  <span class="token comment"># 查看内存使用情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> username   <span class="token comment"># 添加用户</span>
<span class="token function">passwd</span> username   <span class="token comment"># 设置用户密码</span>
<span class="token function">userdel</span> username   <span class="token comment"># 删除用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> filename   <span class="token comment"># 更改文件权限</span>
<span class="token function">chown</span> user:group filename   <span class="token comment"># 更改文件所有者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-网络配置" tabindex="-1"><a class="header-anchor" href="#_2-网络配置" aria-hidden="true">#</a> 2.网络配置</h2><h3 id="查看网络配置" tabindex="-1"><a class="header-anchor" href="#查看网络配置" aria-hidden="true">#</a> 查看网络配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span>   <span class="token comment"># 查看网络接口配置</span>
<span class="token function">ip</span> addr show   <span class="token comment"># 查看IP地址信息</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tuln</span>   <span class="token comment"># 查看网络端口使用情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络测试" tabindex="-1"><a class="header-anchor" href="#网络测试" aria-hidden="true">#</a> 网络测试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> <span class="token function">hostname</span>   <span class="token comment"># 测试网络连通性</span>
<span class="token function">traceroute</span> <span class="token function">hostname</span>   <span class="token comment"># 跟踪网络路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-文件操作" tabindex="-1"><a class="header-anchor" href="#_3-文件操作" aria-hidden="true">#</a> 3.文件操作</h2><h3 id="文件和目录管理" tabindex="-1"><a class="header-anchor" href="#文件和目录管理" aria-hidden="true">#</a> 文件和目录管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span>    <span class="token comment"># 列出目录内容及详细信息</span>
<span class="token function">cp</span> <span class="token builtin class-name">source</span> destination   <span class="token comment"># 复制文件或目录</span>
<span class="token function">mv</span> <span class="token builtin class-name">source</span> destination   <span class="token comment"># 移动或重命名文件或目录</span>
<span class="token function">rm</span> filename   <span class="token comment"># 删除文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-r</span> directory   <span class="token comment"># 删除目录及其内容</span>
<span class="token function">mkdir</span> <span class="token function">dirname</span>   <span class="token comment"># 创建目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件内容查看" tabindex="-1"><a class="header-anchor" href="#文件内容查看" aria-hidden="true">#</a> 文件内容查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> filename   <span class="token comment"># 查看文件内容</span>
<span class="token function">less</span> filename   <span class="token comment"># 分页查看文件内容</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> filename   <span class="token comment"># 动态查看文件内容（如日志文件）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-服务管理" tabindex="-1"><a class="header-anchor" href="#_4-服务管理" aria-hidden="true">#</a> 4.服务管理</h2><h3 id="启动、停止和重启服务" tabindex="-1"><a class="header-anchor" href="#启动、停止和重启服务" aria-hidden="true">#</a> 启动、停止和重启服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">service</span>   <span class="token comment"># 启动服务</span>
systemctl stop <span class="token function">service</span>   <span class="token comment"># 停止服务</span>
systemctl restart <span class="token function">service</span>   <span class="token comment"># 重启服务</span>
systemctl status <span class="token function">service</span>   <span class="token comment"># 查看服务状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-安装和更新软件" tabindex="-1"><a class="header-anchor" href="#_5-安装和更新软件" aria-hidden="true">#</a> 5.安装和更新软件</h2><h3 id="使用包管理器-如apt、yum等" tabindex="-1"><a class="header-anchor" href="#使用包管理器-如apt、yum等" aria-hidden="true">#</a> 使用包管理器（如apt、yum等）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update   <span class="token comment"># 更新包列表</span>
<span class="token function">apt</span> upgrade   <span class="token comment"># 升级已安装的软件包</span>
<span class="token function">apt</span> <span class="token function">install</span> package   <span class="token comment"># 安装软件包</span>
<span class="token function">apt</span> remove package   <span class="token comment"># 移除软件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[c];function l(d,r){return n(),s("div",null,t)}const p=a(i,[["render",l],["__file","服务器基础.html.vue"]]);export{p as default};
