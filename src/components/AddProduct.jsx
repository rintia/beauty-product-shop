import Swal from 'sweetalert2'


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const descrpition = form.description.value;

        const newProduct = {name, image, brand, type, price, rating, descrpition}

        console.log(newProduct);

        fetch('https://brand-shop-server-omega.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                       
                      })
                    form.reset()
                }
            
            
            })
    }

    return (
        <div className=" p-24">
        <h2 className="text-3xl text-dark mb-12 font-extrabold text-center">Add A New Product</h2>
        <form onSubmit={handleAddProduct}>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-dark">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text text-dark">Image URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-dark">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text text-dark">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-dark">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text text-dark">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-dark">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Product" className="btn btn-block bg-dark hover:bg-pink" />

        </form>
    </div>
    );
};

export default AddProduct;