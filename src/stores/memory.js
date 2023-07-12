import { defineStore } from "pinia";
import { GAME, HOME } from "@/config";
import { initialCardsState, getNumberBasedOnDifficulty } from "@/helper";

export const useMemoryStore = defineStore("memory", {
  state: () => ({
    view: HOME,
    cards: [],
    difficulty: "Default",
    personalBest: 100,
    moveCount: 0,
    pairsFound: [],
  }),
  getters: {},
  actions: {
    start() {
      this.view = GAME;
      this.cards = initialCardsState(
        getNumberBasedOnDifficulty(this.difficulty)
      );
    },
    goHome() {
      this.view = HOME;
    },
    flipCard(position) {
      this.cards[position].isFlipped = !this.cards[position].isFlipped;
    },
    resetCards() {
      this.cards = initialCardsState(6);
    },
    resetPB() {
      this.personalBest = 100;
    },
  },
});
