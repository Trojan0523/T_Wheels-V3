<template>
  <div>Dialog 实例</div>
  <h1>实例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2">
    <template v-slot:title><strong>提示</strong></template>
    <template v-slot:content>
      <div>你好</div>
      <div>hi</div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
    };
    return {
      x, toggle, f1, f2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
