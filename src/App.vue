<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import HomeView from '@/views/HomeView.vue';
import GameView from '@/views/GameView.vue';

import { useMemoryStore } from "@/stores/memory"
import { GAME, HOME } from "@/config";
const memory = useMemoryStore();
</script>

<template>
  <BaseLayout>
    <HomeView v-if="memory.view === HOME" />
    <GameView v-if="memory.view === GAME" />
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
