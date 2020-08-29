<template>
<div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
        <li>菜单一</li>
        <li>菜单二</li>
    </ul>
</div>
</template>

<script lang="ts">
export default {
    name: 'Topnav',
};
</script>

<style lang="scss" scoped>
.topnav {
    background-color: lightcoral;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    >.logo {
        min-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }
}
</style>
