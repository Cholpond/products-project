import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <Link to={'/'}>
            <h2>Homepage</h2>
            </Link>
            <h2>Home Products</h2>
            <Link to={'/cart'}>
                 <img className="cart-image" src="https://logowik.com/content/uploads/images/shopping-cart5929.jpg"/>
             </Link>

        </div>
    )
}

export default Navbar;