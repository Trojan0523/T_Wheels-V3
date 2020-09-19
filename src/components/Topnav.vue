<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-trojan"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue';

export default {
  name: 'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
@keyframes spin {
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    animation: spin 750ms ease-in-out infinite;
    animation-direction: alternate;

    > svg {
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
    width: 32px;
    height: 32px;
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
