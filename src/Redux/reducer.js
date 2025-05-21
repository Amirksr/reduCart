const initialState = { addedToCart: 0, addedProducts: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, price } = action.data;

      // کپی عمیق از addedProducts
      const newAddedProducts = state.addedProducts.map((product) => ({
        ...product,
      }));

      // بررسی وجود محصول
      const productIndex = newAddedProducts.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        // اگر محصول موجود بود، مقدار آن را بروزرسانی می‌کنیم
        const updatedProduct = { ...newAddedProducts[productIndex] };
        updatedProduct.count += 1;
        updatedProduct.totalPrice = updatedProduct.count * updatedProduct.price;
        newAddedProducts[productIndex] = updatedProduct;
      } else {
        // اگر محصول جدید بود، آن را اضافه می‌کنیم
        newAddedProducts.push({
          ...action.data,
          count: 1,
          totalPrice: price,
        });
      }

      return {
        ...state,
        addedProducts: newAddedProducts,
        addedToCart:
          productIndex === -1 ? state.addedToCart + 1 : state.addedToCart,
      };
    }

    case "INCREASE_IN_CART": {
      const newAddedProducts = state.addedProducts.map((product) => ({
        ...product,
      }));
      newAddedProducts.map((product) => {
        if (product.id == action.id) {
          product.count += 1;
          product.totalPrice = product.count * product.price;
        }
      });
      return { ...state, addedProducts: newAddedProducts };
    }
    case "DECREASE_IN_CART": {
      const newAddedProducts = state.addedProducts.map((product) => ({
        ...product,
      }));
      newAddedProducts.map((product) => {
        if (product.id == action.id) {
          product.count -= 1;
          product.totalPrice = product.count * product.price;
        }
      });
      return { ...state, addedProducts: newAddedProducts };
    }
    case "REMOVE_FROM_CART": {
      const newState = { ...state };
      const updateAddedProducts = newState.addedProducts.filter(
        (product) => product.id !== action.id
      );
      newState.addedProducts = updateAddedProducts;
      newState.addedToCart -= 1;

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
