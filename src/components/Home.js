import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
    const {data, error, isLoading} =useGetAllProductsQuery()
    return ( 
        <>
        <div className="home-container">
            {isLoading ? <p>Loading...</p> : error ? <p>An error occured</p> : <>
            <h2>
                </h2></>}
        </div>
        </>
     );
}

export default Home;