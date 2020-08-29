<template>
<Topnav />
<div class="content">
    <aside>边框</aside>
    <main>主内容</main>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
    name: 'Doc',
    components: {
        Topnav
    },
};
</script>
