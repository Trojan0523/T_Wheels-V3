<template>
  <h1>示例1</h1>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h1>示例2</h1>
  <div style="margin-top: 5px">
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div style="margin-top: 5px">
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div style="margin-top: 5px">
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
  <h1>实例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div style="margin-top: 5px">
      <Button theme="text" level="main">主要文本按钮</Button>
      <Button theme="text">普通文本按钮</Button>
      <Button theme="text" level="danger">危险文本按钮</Button>
    </div>
    <div style="margin-top: 5px">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <h1>实例4</h1>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button disabled theme="text">禁用文本按钮</Button>
      <Button disabled theme="link">禁用链接按钮</Button>
    </div>
    <h1>实例5</h1>
    <div style="margin-top: 5px;">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log('你好');
    }
    const onFocus = () => {
      console.log('你好呀');
    }
    return {onClick, onFocus};
  }
}
</script>