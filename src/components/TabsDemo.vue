<template>
  <div>Tabs 示例</div>
  <h1>实例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航1');
    return {x}
  }
}
</script>