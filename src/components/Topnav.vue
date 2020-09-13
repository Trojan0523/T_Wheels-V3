<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-trojan"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue';

export default {
  name: 'Topnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    }
    return {
      toggleMenu, asideVisible
    };
  }
};
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
      >svg {
        width: 32px;
        height: 32px;
      }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    background: #3b2e5a;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
