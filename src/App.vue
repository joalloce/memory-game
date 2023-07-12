<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import HomeView from '@/views/HomeView.vue';
import GameView from '@/views/GameView.vue';
import { ref } from "vue";
let view = ref("home");
</script>

<template>
  <BaseLayout>
    <HomeView v-if="view" />
    <GameView v-if="view" />
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
