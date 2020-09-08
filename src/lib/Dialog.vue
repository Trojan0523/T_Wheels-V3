<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>取消</Button>
      <Button>确定</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  name: 'Dialog',
  components: {
    Button,
  }
}
</script>

<style lang="scss">

</style>