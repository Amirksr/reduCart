import { useSelector } from "react-redux";
import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";

function Cart() {
  const addedProducts = useSelector((store) => store.addedProducts);
  return (
    <div className="cartContainer">
      {addedProducts.length > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart key={product.id} {...product} />
          ))}
        </>
      ) : (
        <p>The shopping cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
