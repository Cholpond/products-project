import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useParams } from "react-router-dom";

const ProductDetails = ({ item }) => {
  const { data, addToCart } = useContext(MyContext);
  const params = useParams();

  let selectedProduct;

  for (let item of data) {
    if (item.id === params.id) {
      selectedProduct = item;
    }
  }

  //   Destructure selectedProduct object
  const {
    fields: { name, price, colors, description, image },
    id,
  } = selectedProduct;

  return (
    <div className="singleProduct">
      <img alt={id} src={image[0].url} />
      <div className="productDescription">
        <h2>{name}</h2>
        <h5>{price}</h5>
        {/* You don't need the line below, since colors is an array */}
        {/* <p>{data?.fields?.colors}</p> */}
        <p>{description}</p>
        <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;