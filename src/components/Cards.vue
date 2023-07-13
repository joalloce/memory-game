<template>
  <div class="cardGrid">
    <div class="cardGrid__inner">
      <div class="cardGrid__flex">
        <Card v-for="(card, position) in memory.cards" :position="position" :imgId="card.id"
          :isFlipped="card.isFlipped" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import { useMemoryStore } from "@/stores/memory"

const memory = useMemoryStore();

</script>

<style lang="scss" scoped>
.cardGrid__flex {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

}

@media only screen and (max-width: 768px) {
  .cardGrid__flex {
    gap: 15px;
  }
}

@media only screen and (max-width: 600px) {
  .cardGrid__flex {
    gap: 10px;
  }
}
</style>