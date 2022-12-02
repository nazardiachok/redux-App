import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cardSlice";
import { useNavigate } from "react-router-dom";

function Home() {
    const {data, error, isLoading} =useGetAllProductsQuery()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function addProductToCart(product){
        navigate("/cart")
        dispatch(addToCart(product))
    }
    return ( 
        <>
        <div className="home-container">
            {isLoading ? (
            <p>Loading...</p>
            ) : error ? (
            <p>An error occured</p>
            ) : (
            <>
                <h2>All Producs</h2>
                <div className="products">
                    {data?.map(product => <div key={product.id} className="eachItem">
                        <h3>{product.title}</h3>
                        <img src={product.image} width="100px" height="100px" alt={product.name}></img>
                        <div className="details"> 
                        <span>{product.category}</span> 
                        <span>{product.price} $</span> 
                        <button onClick={()=>addProductToCart(product)}> Add to Card </button>
                        </div>
                    </div>
                    )}
                </div>
            </>)}
        </div>
        </>
     );
}

export default Home;