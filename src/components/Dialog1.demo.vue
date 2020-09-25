<demo>
常规使用
</demo>
<template>
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

<script lang="ts">
import {Dialog, Button} from "../lib/index";
import {openDialog} from '../lib/openDialog.ts';
import {ref} from 'vue';
export default {
  components: {
    Dialog,
    Button,
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
}
</script>