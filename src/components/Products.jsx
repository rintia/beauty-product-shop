import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";




const Products = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    console.log(setProducts);

    const brands = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const brand = brands.find(brand => brand.id == idInt);
    console.log(brand);


    
    const selected = products.filter(prod => prod.brand == brand.name);
    console.log(selected);
    return (
        <div className="min-h-screen" >
            <Slider brand={brand} ></Slider>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 gap-4 my-24">
                {   selected.length > 0 ?
                    selected.map(product => <ProductCard product={product}
                         key={product._id}></ProductCard>)
                        :
                        <div className="col-span-4 ">
                            <h1 className="text-4xl text-center">No Products Available</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;