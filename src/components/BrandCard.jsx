import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
  const {id, name, photo} = brand;
  return (
    <Link to={`/product/${id}`}>
      <div className="card h-full hover:cursor-pointer hover:scale-105 hover:opacity-70  shadow-xl  bg-pink">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand.name}</h2>

        </div>
        <figure className="w-full h-full"><img className="w-full h-full" src={brand.photo} alt="Shoes" /></figure>
      </div>
    </Link>
  );
};

export default BrandCard;