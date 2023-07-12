<template>
  <div class="cardGrid">
    <div class="cardGrid__inner">
      <div class="cardGrid__flex">
        <Card v-for="card in cardList" :imgId="card.imgId" :isFlipped="card.isFlipped" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { CARDS_LENGTH, CARDS, BACK } from "../config";

import Card from "@/components/Card.vue";


const cardList = CARDS.map((e, i) => {
  return {
    imgId: i,
    isFlipped: false
  }
})

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