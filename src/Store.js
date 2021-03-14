import { createSlice, configureStore, createSelector } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Provider } from "react-redux";
import App from './App'

// REDUX STORE
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
  },
});


function Store() {
  const store = configureStore({ reducer: counterSlice.reducer });
  const { add, minus } = counterSlice.actions;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Store;
