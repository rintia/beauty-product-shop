import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id, name, image, brand, type, rating, price} = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="card-compact w-full h-3/5"><img className="w-full h-full" src={image} alt="Shoes" /></figure>
            <div className="card-body px-4">
                <h2 className="card-title">{name}</h2>
                <p className="text-center font-semibold text-dark">{brand}</p>
                <div className="flex justify-between">
                <p className='ml-4'>{type}</p>
                <p>Price: $ {price}</p>
                </div>
              
             <div className='flex items-center'>
             <h1 className="text-end w-1/3 px-0">Rating: <span>{rating} </span>   </h1>
             <BsStarFill  className='text-dark '></BsStarFill>
             
              
             </div>
              
                <div className="card-actions flex justify-center gap-8">
                    <button className=" mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Details</button>
                    <Link to={`/update/${_id}`}><button className= "mt-4 btn btn-primary bg-dark border-none hover:bg-pink hover:text-dark">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;