<template>
  <div class="trojan-tabs">
    <div class="trojan-tabs-nav">
    <div class="trojan-tabs-nav-item" v-for="(t, index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="trojan-tabs-content">
      <component class="trojan-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index"/>
    </div>
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

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .trojan-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
        &-item {
          padding: 8px 0;
          margin: 0 16px;
          cursor: pointer;
            &:first-child {
              margin-left: 0;
            }
            &.selected {
              color: $blue;
            }
        }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>
