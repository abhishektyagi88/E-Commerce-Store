import React from "react";

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const cartItems = useSelector((Store) => Store.Cart);
    
    return(
        <div className="flex justify-between gap-20 px-3 mx-5 bg-fuchsia-300">
            <div className="text-xl font-semibold">Redux Store</div>
            <Link className="text-lg font-bold text-cyan-500" to = "/">Home</Link>
            <Link className="text-lg font-bold text-cyan-500" to = "/Cart">Cart</Link>
            <div className="text-xl font-extrabold text-blue-800">Cart Items : {cartItems.length}</div>
        </div>
    )
}
export default Navbar;