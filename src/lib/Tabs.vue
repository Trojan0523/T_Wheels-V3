<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
  export default {
    setup(props, context) {
      // console.log({...context.slots.default()});
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if(tag.type !== Tab) {
          throw new Error('Tabs 字标签必须为Tab')
        }
      })
      const titles =  defaults.map((tag) => {
            return tag.props.title
      })
      console.log(defaults[0].type);
      return {defaults, titles};
    }
  }
</script>

<style></style>
