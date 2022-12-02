import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  {deleteCart}  from "../features/cardSlice";
import { addToCart } from "../features/cardSlice";
import { decreaseAmount } from "../features/cardSlice";
import { getTotals } from "../features/cardSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartList = useSelector(store=>store.carts.cartItems);
    const totalPrice = useSelector(store=>store.carts.cartTotalQuantity);
    const totalAmount = useSelector(store=>store.carts.cartTotalAmount)

    useEffect(()=> {
    dispatch(getTotals())}, [cartList])
    return ( 
    <>
    <h1>Shopping Cart</h1>
    
                <div className="cart-container">
                    {cartList.length===0 ?
                        ( <h3>Korb ist leer</h3>)
                        : (<div>
                            <div className="titles">
                                <h3 className="product-title">Product</h3>
                                <h3 className="price">Price</h3>
                                <h3 className="Quantity">Quantity</h3>
                                <h3 className="Quantity">Total</h3>
                            </div>
                            <div className="cart-items">
                                {cartList?.map(product => 
                                    <div key={product.id} className="cart-item">
                                        <div className="cart-product">
                                            <img src={product.image} width="100px" height="100px" alt={product.title}></img>
                                            <div>
                                            <h3>{product.title}</h3>
                                            <p>{product.category}</p>
                                            <button onClick={()=>dispatch(deleteCart(product))}> Delete </button>
                                            </div>
                                        </div>
                                        <div className="card-product-price">
                                            {product.price} $
                                        </div>
                                        <div className="cart-product-quantitys">
                                            <button onClick={()=>dispatch(decreaseAmount(product))}> - </button>
                                            <div className="count">{product.cartQuantity}</div>
                                            <button onClick={()=>dispatch(addToCart(product))}> + </button>
                                        </div>
                                        <div className="cart-product-total-price">
                                            ${product.cartQuantity * product.price}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="cart-summary">
                                <button className="clear-cart">Clear Cart</button>
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <span>Total Price</span>
                                        <b className="amount">${totalPrice}</b>
                                        <span>Total Amount</span>
                                        <b className="amount">${totalAmount}</b>
                                    </div>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>

                            
                            ) 
                    }
                    
                </div>
    </>
     );
}

export default Cart;
/* <h3>{product.title}</h3>
                                        <img src={product.image} width="100px" height="100px" alt={product.name}></img>
                                        <div className="details"> 
                                        <span>{product.category}</span> 
                                        <span>{product.price} $</span> 
                                        <button onClick={()=>dispatch(deleteCart(product))}> Delete </button>
                                        <button onClick={()=>dispatch(addToCart(product))}> + </button>
                                        <p>{product.cartQuantity}</p>
                                        <button onClick={()=>dispatch(decreaseAmount(product))}> - </button>
                                        </div> */