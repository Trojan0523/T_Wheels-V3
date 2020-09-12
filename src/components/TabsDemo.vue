<template>
<div>Tabs 示例</div>
  <h1>实例1</h1>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tab.vue';
import Tab from '../lib/Tabs.vue';
export default {
  components: {
    Tabs,
    Tab
  }
}
</script>