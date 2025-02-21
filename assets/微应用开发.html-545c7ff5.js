import{_ as n,o as a,c as e,a as s}from"./app-fcf78d11.js";const t={},i=s(`<h1 id="微应用开发" tabindex="-1"><a class="header-anchor" href="#微应用开发" aria-hidden="true">#</a> 微应用开发</h1><p>开发周期：20231016-20231102</p><p>项目概述：怎么说呢，vue2+vue3+小程序mix，各种语法都怪怪的</p><p>技术：element plus + vue3</p><p>难度：⭐⭐⭐</p><p>相关知识点：</p><ul><li>要研究底层源码</li><li>element plus之【tree】组件实现单选</li></ul><h2 id="_20231025" tabindex="-1"><a class="header-anchor" href="#_20231025" aria-hidden="true">#</a> 20231025</h2><h3 id="element-plus之【tree】组件实现单选" tabindex="-1"><a class="header-anchor" href="#element-plus之【tree】组件实现单选" aria-hidden="true">#</a> element plus之【tree】组件实现单选</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;el-tree ref=&quot;treeRef&quot; :data=&quot;treeData&quot; node-key=&quot;is&quot; 
         v-model=&quot;form[item.prop]&quot;
         :props=defaultProps&quot;
         check-strictly 
         show-checkbox 
         default-expand-all 
         @check-change=&quot;handleCheckChange&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token function">handleCheckChange</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> checked<span class="token punctuation">,</span> indeterminate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;treeRef&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setCheckedKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span>data<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20231102" tabindex="-1"><a class="header-anchor" href="#_20231102" aria-hidden="true">#</a> 20231102</h2><h3 id="项目总结" tabindex="-1"><a class="header-anchor" href="#项目总结" aria-hidden="true">#</a> 项目总结</h3><p>好像没学到什么。。</p>`,14),c=[i];function p(l,u){return a(),e("div",null,c)}const d=n(t,[["render",p],["__file","微应用开发.html.vue"]]);export{d as default};
