import { legacy_createStore } from "redux";

const initialState = { addedToCart: 0, addedProducts: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, price } = action.data;
      const newState = { ...state };
      if (newState.addedProducts.some((product) => product.id == id)) {
        newState.addedProducts.map((product) => {
          if (product.id == id) {
            product.count += 1;
            product.totalPrice = product.count * product.price;
          }
        });
      } else {
        newState.addedProducts.push({
          ...action.data,
          count: 1,
          totalPrice: price,
        });
        newState.addedToCart += 1;
      }

      return newState;
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
