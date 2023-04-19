import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

function createStore(initialState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  return store;
}

export { createStore };
