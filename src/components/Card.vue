<template>
  <div @click="isFlipped = !isFlipped" class="card">
    <VueFlip v-model="isFlipped" class="card__flip" height="120px" width="120px">
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
import { CARDS, BACK } from "../config";


const props = defineProps(["imgId", "isFlipped"]);

const isFlipped = ref(props.isFlipped);

function imgSrc(id) {
  return `/images/${CARDS[id]}`;
}
const backSrc = computed(() => {
  return `/images/${BACK}`;
})


</script>

<style lang="scss" scoped>
.card {
  border: 2px solid #0a0a0a;
  border-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card__flip {

  height: 120px;
  width: 120px;
}

@media only screen and (max-width: 768px) {
  .card__flip {
    max-width: 100px;
    max-height: 100px;
  }
}

@media only screen and (max-width: 600px) {
  .card__flip {
    max-width: 75px;
    max-height: 75px;
  }
}
</style>