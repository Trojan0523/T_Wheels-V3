<template>
  <button @click="toggle" class="trojan-switch" :class="{'trojan-checked':value}">
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      console.log(props);
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }

}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.trojan-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 /2;
    transition: all 250ms;
  }
  &.trojan-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &.trojan-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
}

</style>