<template>
  <article class="home">
    <div class="home__inner">
      <a class="home__github" href="https://github.com/joalloce/memory-game" target="_blank">
        <img src="/images/github.svg" alt="" class="home__githubImage">
      </a>
      <h1 class="home__heading">Memory Game</h1>
      <h1 class="home__subheading">Jose</h1>
      <div class="home__content">
        <div class="home__pb">
          <h2 class="home__pbTitle">Personal Best:</h2>
          <img v-if="memory.personalBest === 100" src="/images/infinity.svg" alt="" class="home__pbInfinity">
          <p v-else class="home__pbScore"> {{
            memory.personalBest }}</p>
        </div>

        <div class="home__difficulty">
          <h2 class="home__difficultyTitle">Select Difficulty:</h2>
          <div class="home__difficultyRatios">
            <div>
              <input type="radio" id="easy" value="Easy" v-model="memory.difficulty" class="home__difficultyRatio" />
              <label for="easy" class="home__difficultyRatio">Easy</label>
            </div>
            <div>

              <input type="radio" id="default" value="Default" v-model="memory.difficulty"
                class="home__difficultyRatio" />
              <label for="default" class="home__difficultyRatio">Default</label>
            </div>
            <div>

              <input type="radio" id="normal" value="Normal" v-model="memory.difficulty" class="home__difficultyRatio" />
              <label for="normal" class="home__difficultyRatio">Normal</label>
            </div>
            <div>

              <input type="radio" id="hard" value="Hard" v-model="memory.difficulty" class="home__difficultyRatio" />
              <label for="hard" class="home__difficultyRatio">Hard</label>
            </div>
          </div>
        </div>
        <button @click="memory.start" class="home__play">Play</button>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.home__github {
  position: absolute;
  right: 1px;
  z-index: 1;
}

.home__githubImage {
  width: 40px;
}

.home__heading {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 30px;
}

.home__subheading {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
}

.home__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__pb {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__pbTitle {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 25px;
}

.home__pbInfinity {
  width: 80px;
}

.home__pbScore {
  font-weight: 400;
  font-size: 20px;
  margin: 8px 0;
}

.home__difficulty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.home__difficultyTitle {
  margin: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 25px;
}

.home__difficultyRatios {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.home__difficultyRatio:hover {
  cursor: pointer
}

.home__play {
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

.home__play:hover {
  cursor: pointer;
  background-color: #525252;
}

@media only screen and (max-width: 768px) {
  .home__pbInfinity {
    width: 70px;
  }

  .home__difficultyRatios {
    gap: 8px;
  }

  .home__heading {
    margin-top: 5px;
  }
}

@media only screen and (max-width: 600px) {
  .home__pbInfinity {
    width: 60px;
  }

  .home__difficultyRatios {
    gap: 5px;
  }

  .home__heading {
    margin-top: 5px;
  }
}
</style>