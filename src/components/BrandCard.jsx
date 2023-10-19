

const BrandCard = ({brand}) => {
    return (
        <div className="card hover:cursor-pointer hover:scale-105 hover:opacity-70  shadow-xl border-2 bg-pink">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand.name}</h2>
   
  </div>
  <figure className="w-full h-full"><img className="w-full h-full" src={brand.photo} alt="Shoes" /></figure>
</div>
    );
};

export default BrandCard;