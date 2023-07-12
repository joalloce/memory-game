<template>
  <article class="home">
    <div class="home__inner">
      <h1 class="home__heading">Memory Game</h1>
      <div class="home__content">
        <div class="home__pb">
          <h2 class="home__pbTitle">Personal Best:</h2>
          <p class="home__pbScore">{{ memory.personalBest === 100 ? "∞" : personalBest }}</p>
        </div>

        <div class="home__difficulty">
          <h2 class="home__difficultyTitle">Select Difficulty:</h2>
          <input type="radio" id="easy" value="Easy" v-model="memory.difficulty" />
          <label for="easy">Easy</label>

          <input type="radio" id="default" value="Default" v-model="memory.difficulty" />
          <label for="default">Default</label>

          <input type="radio" id="normal" value="Normal" v-model="memory.difficulty" />
          <label for="normal">Normal</label>

          <input type="radio" id="hard" value="Hard" v-model="memory.difficulty" />
          <label for="hard">Hard</label>
        </div>
        <button @click="memory.start" class="home__start">Start</button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useMemoryStore } from "@/stores/memory"
const memory = useMemoryStore();
</script>

<style lang="scss" scoped>
.home__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

}

.home__heading {
  font-weight: 600;
  font-size: 30px;
}
</style>