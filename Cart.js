import { useSelector, useDispatch } from "react-redux";
import { remove } from "./Slices/cart";
function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.Cart);

    const removeFromCart = (productId) => {
        dispatch(remove(productId));
    }
    if (cartItems.length === 0) return <h2>EMPTY CART</h2>
    return (
        <div className="flex">
            {
                cartItems.map((product) => (
                     //  Do it directly no need toadd curly braces or round braces or return keyword
                        <div className="bg-white p-5 flex flex-col justify-around w-[220px] h-[320px]  rounded-xl" key={product.id}>
                            <img className="p-5 h-[70%]" src={product.image} alt={product.title} />
                            <h2 className="text-center font-extrabold">Rs.{product.price * 100}/-</h2>
                            <h2 className="text-center font-extrabold">{product.title}</h2>
                            <button onClick={() => removeFromCart(product.id)}
                                className="bg-yellow-500 rounded-lg text-lg hover:bg-red-600 hover:scale-110 duration-300">
                                 Remove
                            </button>
                        </div>
                    
                ))
            }
        </div>
    )
}
export default Cart;