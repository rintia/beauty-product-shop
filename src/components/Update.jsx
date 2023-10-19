import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {
    const product = useLoaderData();
    const {_id, name, image, brand, type, price, rating} = product;
    
    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        
        const updatedProduct = {name, image, brand, type, price, rating}

        console.log(updatedProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="min-h-screen">
            <div className=" p-24">
        <h2 className="text-3xl text-dark mb-12 font-extrabold text-center">Update Product</h2>
        <form onSubmit={handleUpdateProduct}>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={name} type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={image} type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={brand} type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={type} type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={rating} type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
        
            <input type="submit" value="Submit" className="btn btn-block bg-dark hover:bg-pink" />

        </form>
    </div>
        </div>
    );
};

export default Update;