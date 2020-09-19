<demo>
一键打开Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {ref, h} from 'vue'
import {openDialog} from '../lib/openDialog'
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {showDialog}
  }
}
</script>
