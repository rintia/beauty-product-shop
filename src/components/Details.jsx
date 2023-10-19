import { useLoaderData } from "react-router-dom";

const Details = () => {
    const product = useLoaderData();
    const {_id, name, image, brand, price,  descrpition} = product;

    return (
        <div className="min-h-screen items-center text-center mb-12">
            <h1 className="mt-12 text-4xl font-semibold text-dark ">{name}</h1>
           <div className="flex justify-center">
           <img className="mt-12 hover:cursor-zoom-in w-96" src={image} alt="" />
           </div>
           <p>{descrpition}</p>
           <h1 className="font-semibold text-dark">{brand}</h1>
           <p><span className="font-semibold">Price: </span>{price} $</p>
           <button className=" mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Add to Cart</button>
        </div>
    );
};

export default Details;