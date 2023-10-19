import { BsStarFill } from 'react-icons/bs';

const ProductCard = ({product}) => {
    const {_id, name, image, brand, type, rating, price} = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="card-compact w-full h-3/5"><img className="w-full h-full" src={image} alt="Shoes" /></figure>
            <div className="px-4">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{brand}</p>
                <div className="flex justify-between">
                <p>{type}</p>
                <p>Price: $ {price}</p>
                </div>
              
             <div className='flex items-center'>
             <p className="text-center">Rating: {rating} </p>
              <BsStarFill className='text-dark'></BsStarFill>
             </div>
              
                <div className="flex justify-center gap-8">
                    <button className=" mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Details</button>
                    <button className= "mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;