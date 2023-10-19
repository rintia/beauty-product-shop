import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const Products = () => {
    
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])

    console.log(brands);

    
    const { id } = useParams();
    const idInt = parseInt(id);
    const brand = brands.find(brand => brand.id == idInt);
    console.log(brand);

    const products = useLoaderData();
    console.log(products);
    // const products = loadedProducts.filter(prod => brand.name === prod.name)
    // console.log(products);
    return (
        <div >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 gap-4 my-24">
                {
                    products.map(product => <ProductCard product={product}
                         key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;