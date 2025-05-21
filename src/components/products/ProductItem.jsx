import "./ProductItem.css";
import productsList from "../../db";
import { useDispatch } from "react-redux";

function ProductItem(data) {
  const { id, name, price, image } = data;
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch({ type: "ADD_TO_CART", data });

  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button onClick={addToCartHandler} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
