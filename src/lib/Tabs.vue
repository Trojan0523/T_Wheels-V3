<template>
  <div class="trojan-tabs">
    <div class="trojan-tabs-nav">
      <div class="trojan-tabs-nav-item"
           @click="select(t)"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index">{{ t }}
      </div>
      <div class="trojan-tabs-nav-indicator"></div>
    </div>
    <div class="trojan-tabs-content">
      <component class="trojan-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 字标签必须为Tab')
      }
    })
    const select = (title: string) => {
      context.emit('update:selected', title);
    }
    const current = computed(() => {
      console.log('重新return');
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {defaults, titles, current, select};
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

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
}
</style>
