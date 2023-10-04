import { configureStore } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = data;

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return action.payload;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
