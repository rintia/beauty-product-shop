import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import BrandCard from './BrandCard';
import Reviews from './Reviews';
import Discount from './Discount';

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-2xl font-semibold text-dark text-center mt-12 mb-12'>Brands</h1>
                <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24 px-4 md:px-0'>
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>

            </div>
            <Discount></Discount>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;