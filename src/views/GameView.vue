<template>
  <article class="game">
    <div class="game__inner">
      <h1 class="game__heading">Game</h1>
      <h1 class="home__subheading">Difficulty: {{ memory.difficulty }} ({{ getNumberBasedOnDifficulty(memory.difficulty)
      }}
        pairs)
      </h1>
      <div class="game__content">
        <div class="game__scores">
          <div class="game__score">
            <h2 class="game__scoreTitle ">Pairs:</h2>
            <p class="game__scoreNumber"> {{
              memory.pairs }}</p>
          </div>
          <div class="game__score">
            <h2 class="game__scoreTitle ">Move Count:</h2>
            <p class="game__scoreNumber"> {{
              memory.moveCount }}</p>
          </div>
          <div class="game__score">
            <h2 class="game__scoreTitle ">Personal Best:</h2>
            <img v-if="memory.personalBest === 100" src="/images/infinity.svg" alt="" class="game__pbInfinity">
            <p v-else class="game__scoreNumber"> {{
              memory.personalBest }}</p>
          </div>
        </div>
        <Cards class="game__cards" />
        <button @click="memory.goHome" class="game__back">{{ memory.pairsFound.length ===
          getNumberBasedOnDifficulty(memory.difficulty) ? "Play Again" : "Back" }}</button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { getNumberBasedOnDifficulty } from "@/helper";
import { useMemoryStore } from "@/stores/memory";
import Cards from '@/components/Cards.vue';
const memory = useMemoryStore();

memory.moveCount = 0
memory.cardClicked = [];
memory.pairsFound = [];

</script>

<style lang="scss" scoped>
.game__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.game__heading {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 30px;
}

.home__subheading {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
}

.game__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game__scores {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.game__score {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game__scoreTitle {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
}

.game__pbInfinity {
  width: 25px;
  margin-top: 5px;
}

.game__scoreNumber {
  margin: 0;
}

.game__cards {
  margin-top: 20px;
  margin-bottom: 20px;
}

.game__back {
  background-color: #262626;
  border: none;
  color: #f5f5f5;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  border-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.game__back:hover {
  cursor: pointer;
  background-color: #525252;
}

@media only screen and (max-width: 768px) {

  .game__heading {
    margin-top: 5px;
  }
}

@media only screen and (max-width: 600px) {

  .game__heading {
    margin-top: 5px;
  }
}
</style>