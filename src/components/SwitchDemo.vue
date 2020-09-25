<template>
  <div>
    <h1>Switch 组件实例</h1>
    <Demo :component="Switch1Demo"/>
    <hr />
   <Demo :component="Switch2Demo" />
  </div>

</template>

<script lang="ts">
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo},
  setup() {
    return { Switch1Demo, Switch2Demo}
  }
};
</script>

<style lang="scss" scoped>

</style>