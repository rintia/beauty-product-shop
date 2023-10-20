import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";


const Details = () => {
    const product = useLoaderData();
    const {user} =useContext( AuthContext);
    const email = user.email;
    const {_id,  name, image, brand, price,  descrpition} = product;

    const handleAddtoCart = () => {
        const cart = { email, name, image, price};
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added to Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                       
                      })
                   
                }
            
            
            })
    }

    return (
        <div className="min-h-screen items-center text-center mb-12">
            <h1 className="mt-12 text-4xl font-semibold text-dark ">{name}</h1>
           <div className="flex justify-center">
           <img className="mt-12 hover:cursor-zoom-in w-96" src={image} alt="" />
           </div>
           <p>{descrpition}</p>
           <h1 className="font-semibold text-dark">{brand}</h1>
           <p><span className="font-semibold">Price: </span>{price} $</p>
           <button onClick={ handleAddtoCart} className=" mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Add to Cart</button>
        </div>
    );
};

export default Details;