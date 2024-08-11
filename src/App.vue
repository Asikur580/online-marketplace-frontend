<script setup>
import { RouterView } from "vue-router";
import Navbar from './components/navbar.vue';
import Down from './components/footer.vue';

</script>

<template>
    <Navbar />
    <RouterView />
    <down />
</template>

<style scoped></style>
