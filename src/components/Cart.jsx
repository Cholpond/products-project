import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";


const Cart = () => {
    const {data, updateData, cart,setCart, removeFromCart, toggleModal } = useContext(MyContext);
    console.log(cart, 'cart')
    return(
        <div>
        <ProductDetails/>
        <button onClick={(() => {removeFromCart()})}>Remove from Cart</button>
        <Link to={"/checkout"}>
        <button onClick={(() => {toggleModal()})}>Proceed to Checkout</button>
        </Link>
        </div>
    )
  
}

export default Cart;