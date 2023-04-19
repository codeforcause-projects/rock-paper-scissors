import { combineReducers } from '@reduxjs/toolkit';

import gameReducer from './game/gameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;