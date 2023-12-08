import { useEffect } from "react";

import { add } from "./Slices/cart";
import { useDispatch,useSelector } from "react-redux";
import { STATUS, fetchProducts } from "./Slices/product";

const Products = () => {
    const dispatch = useDispatch();

    const getProduct = async () => {
      dispatch(fetchProducts());
    }

    const addToCart = (product) =>{
        dispatch(add(product));
    }   

    const {data : products,status} = useSelector((store) => store.product);
    


    useEffect(() => {
        getProduct();
    }, [])
    if(status === STATUS.LOADING) return <div>Loading...</div>
    if(status === STATUS.FAILED) return <div>Failed To Fetch</div>
    
    return (
        <div className="flex flex-wrap gap-10 px-12 py-5 bg-slate-100">
            {
                products.map((prod) => {
                    return (
                        <div className="bg-white p-5 flex flex-col justify-around w-[250px] h-[320px]  rounded-xl" key={prod.id}>
                            <img className="p-5 h-[70%]" src={prod.image} alt={prod.title} />
                            <h2 className="text-center font-extrabold">Rs.{prod.price * 100}/-</h2>
                            <h2 className="text-center font-extrabold">{prod.title}</h2>
                            <button onClick={() => addToCart(prod)} 
                                className="bg-yellow-500 rounded-lg text-lg hover:bg-lime-600 hover:scale-110 duration-300">
                                 Add To Cart
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;