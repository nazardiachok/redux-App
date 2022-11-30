import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  {deleteCart}  from "../features/cardSlice";
import { addToCart } from "../features/cardSlice";
import { decreaseAmount } from "../features/cardSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartList = useSelector(store=>store.carts.cartItems);
    return ( 
    <>
    <h2>Cart List</h2>
    
                <div className="products">
                    {cartList?.map(product => <div key={product.id} className="eachItem">
                        <h3>{product.title}</h3>
                        <img src={product.image} width="300px" height="400px" alt={product.name}></img>
                        <div className="details"> 
                        <span>{product.category}</span> 
                        <span>{product.price} $</span> 
                        <button onClick={()=>dispatch(deleteCart(product))}> Delete </button>
                        <button onClick={()=>dispatch(addToCart(product))}> + </button>
                        <p>{product.cartQuantity}</p>
                        <button onClick={()=>dispatch(decreaseAmount(product))}> - </button>
                        </div>
                    </div>
                    )}
                </div>
    </>
     );
}

export default Cart;