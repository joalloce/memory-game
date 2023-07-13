import { defineStore } from "pinia";
import { GAME, HOME, WAIT } from "@/config";
import { initialCardsState, getNumberBasedOnDifficulty, sleep } from "@/helper";

export const useMemoryStore = defineStore("memory", {
  state: () => ({
    view: HOME,
    cards: [],
    difficulty: "Default",
    personalBest: 100,
    moveCount: 0,
    pairsFound: [],
    cardClicked: [],
  }),
  getters: {
    pairs: (state) => state.pairsFound.length,
  },
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
    async flipCard(position) {
      if (this.cardClicked.length <= 1) {
        if (!this.cards[position].isFlipped) {
          // flip once
          this.cardClicked.push(position);
          this.cards[position].isFlipped = true;
        }

        if (this.cardClicked.length === 2) {
          // when 2 cards are flipped
          if (
            this.cards[this.cardClicked[0]].id ===
            this.cards[this.cardClicked[1]].id
          ) {
            this.pairsFound.push(this.cards[this.cardClicked[0]].id);
          } else {
            await sleep(WAIT); // sleep
            // unflip the cards
            this.cards[this.cardClicked[0]].isFlipped = false;
            this.cards[this.cardClicked[1]].isFlipped = false;
          }
          this.cardClicked = []; // reset the card clicked
          this.moveCount++; // add move count
          if (
            this.pairsFound.length ===
            getNumberBasedOnDifficulty(this.difficulty)
          ) {
            // check if game is finished
            this.personalBest =
              this.moveCount < this.personalBest
                ? this.moveCount
                : this.personalBest;
          }
        }
      }
    },
  },
});
