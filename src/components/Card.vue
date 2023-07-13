<template>
  <div @click="toggleFlip(props.position)" class="card">
    <VueFlip v-model="memory.cards[props.position].isFlipped" class="card__flip" height="120px" width="120px">
      <template v-slot:front>
        <img :src="backSrc" alt="">
      </template>
      <template v-slot:back>
        <img :src="imgSrc(props.imgId)" alt="">
      </template>
    </VueFlip>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { VueFlip } from "vue-flip";
import { CARDS, BACK } from "@/config";
import { useMemoryStore } from "@/stores/memory";

const memory = useMemoryStore();

const props = defineProps(["imgId", "isFlipped", "position"]);


function toggleFlip(position) {
  memory.flipCard(position);
}

function imgSrc(id) {
  return `/memory-game/images/${CARDS[id]}`;
}
const backSrc = computed(() => {
  return `/memory-game/images/${BACK}`;
})

</script>

<style lang="scss" scoped>
.card {
  border: 2px solid #0a0a0a;
  border-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card:hover {
  cursor: pointer;
}

.card__flip {

  height: 120px;
  width: 120px;
}

@media only screen and (max-width: 768px) {
  .card__flip {
    max-width: 90px;
    max-height: 90px;
  }
}

@media only screen and (max-width: 600px) {
  .card__flip {
    max-width: 70px;
    max-height: 70px;
  }
}
</style>