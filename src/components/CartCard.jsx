import React from 'react';
import {RiDeleteBin2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const CartCard = ({cart, myCart, setMyCart}) => {
    const {_id, name, image, price} = cart;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-shop-server-3zg9avtcs-rintias-projects.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = myCart.filter(cart => cart._id !== _id);
                            setMyCart(remaining);
                        }
                    })

            }
        })
    }



    return (
        <div className="card border card-side bg-base-100 rounded-md">
  <figure><img className='w-32 px-2' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price:  {price}$</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(_id)} className="btn btn-ghost"><RiDeleteBin2Fill className='text-3xl'></RiDeleteBin2Fill></button>
    </div>
  </div>
</div>
    );
};

export default CartCard;