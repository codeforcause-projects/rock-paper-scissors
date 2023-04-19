import { createSlice } from "@reduxjs/toolkit";
import { hand } from "../../model/hands";

const initialState = {
  computerHand: hand.DEFAULT,
  playerHand: hand.DEFAULT,
  playerScore: 0,
  computerScore: 0,
};

const compareHands = (playerHand, computerHand) => {
  if (playerHand === computerHand) {
    return [0, 0];
  }
  if (playerHand === "Rock") {
    if (computerHand === "Scissors") {
      return [1, 0];
    } else {
      return [0, 1];
    }
  }
  if (playerHand === "Paper") {
    if (computerHand === "Rock") {
      return [1, 0];
    } else {
      return [0, 1];
    }
  }
  if (playerHand === "Scissors") {
    if (computerHand === "Paper") {
      return [1, 0];
    } else {
      return [0, 1];
    }
  }
}

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerHand: (state, action) => {
      state.playerHand = action.payload;
      let arr = [hand.ROCK, hand.PAPER, hand.SCISSORS];
      const randomIndex = Math.floor(Math.random() * arr.length);
      state.computerHand = arr[randomIndex];
      let [playerScore, computerScore] = compareHands(state.playerHand.value, state.computerHand.value);
      state.playerScore += playerScore;
      state.computerScore += computerScore;
    },
  },
});

export default game.reducer;
