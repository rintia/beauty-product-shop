import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import CartCard from './cartCard';

const MyCart = () => {
    const loadedCarts = useLoaderData();
    const {user} = useContext(AuthContext);
    const loadedMyCart = loadedCarts.filter(cart => cart.email === user.email);
    console.log(loadedMyCart);
    const [myCart, setMyCart] = useState(loadedMyCart);
    return (
        <div className='min-h-screen my-12'>
           
           <div className='max-w-screen-md mx-auto space-y-6'>
           {
                myCart.map(cart => <CartCard key={cart._id}
                     cart={cart}
                     myCart={myCart}
                     setMyCart={setMyCart}
                     ></CartCard> )
            }
           </div>
        </div>
    );
};

export default MyCart;