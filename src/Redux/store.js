import { legacy_createStore } from "redux";

const initialState = { addedToCart: 0, addedProducts: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //code
    }
    case "INCREASE_TO_CART": {
      //code
    }
    case "DECREASE_IN_CART": {
      //code
    }
    case "REMOVE_FROM_CART": {
      //code
    }
    default: {
      return state;
    }
  }
};

const store = legacy_createStore(reducer);

export default store;
