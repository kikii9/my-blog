# uniapp

## 项目概述

开发周期：20240201-20230206

项目概要：用于售前展示

评价：uniapp有点难，hbuilder不好用

难度：⭐⭐

繁琐程度：⭐⭐⭐⭐

**相关知识点：**

- uniapp的使用
- uview组件库的使用

## 组件的封装与使用

步骤：

1. 在子组件中接收来自父页面的属性
2. 子组件中的事件通过$emit事件派发给父页面
3. 父页面使用v-on接收事件

```vue
//子组件
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <button @click="handleButtonClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: String,
    content: String
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-clicked');
    }
  }
}
</script>
```

```vue
//父组件
<template>
  <div>
    <my-component title="Hello" content="Welcome to MyComponent" @button-clicked="handleButtonClicked"></my-component>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  methods: {
    handleButtonClicked() {
      console.log('Button clicked in parent component');
      // 在这里编写响应事件的逻辑
    }
  }
}
</script>
```

## 控制台调样式

这个到时再说吧

## 瀑布流布局

```javascript
 .container{
            column-count: 4;//想要排成的列数
            column-gap: 0;
        }
.item img{
            width: 100%;
        }
```

## 自适应布局

- flex布局
- 使用rem
- 使用媒体查询

## 网络请求的封装

1. 安装axios `npm install axios`
2. 引入axios

```javascript
import axios form 'axios'
import QS form 'qs'//序列化珀斯特类型的数据

import {Toast} form 'vant'//引入提示框
```

3. 环境的切换

```javascript
```

