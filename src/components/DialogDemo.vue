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
  <h1>实例2</h1>
  <Button @click="showDialog">show</Button>
</template>
<script>
import {openDialog} from '../lib/openDialog.ts';
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
      return false;
    };
    const f2 = () => {
    };
    const showDialog = () => {
        openDialog({title: '标题', content: '你好',
          ok() {console.log('ok');},
          cancel() {console.log('cancel');}
        });
    }
    return {
      x, toggle, f1, f2, showDialog
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
