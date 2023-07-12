<template>
  <article>
    Game
    <Cards />
    <button @click="memory.goHome" class="game__back">Back</button>
  </article>
</template>

<script setup>
import { useMemoryStore } from "@/stores/memory";
import Cards from '@/components/Cards.vue';
const memory = useMemoryStore();

</script>

<style lang="scss" scoped></style>