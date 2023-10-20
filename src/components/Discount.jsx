import React from 'react';

const Discount = () => {
    return (
        <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/PZgjddb/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Get 50% OFF For Your First Vist</h1>
      <button className="btn bg-dark tex-white border-none rounded-none">Shop Now</button>
    </div>
  </div>
</div>
    );
};

export default Discount;