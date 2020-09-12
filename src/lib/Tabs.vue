<template>
  <div class="trojan-tabs">
    <div class="trojan-tabs-nav" ref="container">
      <div class="trojan-tabs-nav-item"
           @click="select(t)"
           :class="{selected: t === selected}"
           v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }" :key="index">{{ t }}
      </div>
      <div class="trojan-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="trojan-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, ref, watchEffect, onMounted} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value?.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      })
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 字标签必须为Tab')
      }
    })
    const select = (title: string) => {
      context.emit('update:selected', title);
    }
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return {defaults, titles, select, indicator, container, selectedItem, current};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
