import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { FaPhotoVideo, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    const singleToy = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, toyName, category, description, toyPhoto, price, rating, quantity, sellerName, sellerEmail } = singleToy;

    // Set Title
    useTitle('Update Toy')


    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const description = form.description.value;
        const toyPhoto = form.toyPhoto.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;

        const updatedToy = { toyName, category, description, toyPhoto, price, rating, quantity, sellerName, sellerEmail }
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: `Successful`,
                        text: 'Toy update successful',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
                else {
                    Swal.fire({
                        title: `Failed`,
                        text: 'Toy update failed',
                        icon: 'error',
                        confirmButtonText: 'Continue'
                    })
                }
            })

    }

    return (
        <div className=' px-5'>
            <NavBar></NavBar>


            <div className='sm:w-11/12 md:w-9/12 my-7 mx-auto'>
                <form onSubmit={handleUpdateToy}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className=" text-2xl font-medium leading-7 text-gray-900">Update <span className='text-error'>Toy</span></h2>
                            <p className="mt-1 text-md leading-6 text-gray-600">
                                Update all information what you need
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor='toyName' className="block text-md font-medium leading-6 text-gray-900">
                                        Toy name
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-error sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-md">Toy name/</span>
                                            <input
                                                type="text"
                                                name="toyName"
                                                id="toyName"
                                                autoComplete="toyName"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 rounded-r-md ring-inset focus:ring-2 focus:ring-inset focus:ring-error sm:text-md sm:leading-6 outline-none"
                                                placeholder="Spider man"
                                                defaultValue={toyName}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="category" className="block text-md font-medium leading-6 text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="category"
                                            name="category"
                                            autoComplete="category"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error sm:max-w-xs sm:text-md sm:leading-6 outline-none"
                                            defaultValue={category}
                                            disabled
                                        >
                                            <option>Heros</option>
                                            <option>Toys</option>
                                            <option>Villains</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-md font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400 outline-0 sm:text-md sm:leading-6"
                                            defaultValue={description}
                                            placeholder='Description'
                                        />
                                    </div>
                                    <p className="mt-3 text-md leading-6 text-gray-600">Update a few sentences description.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="toy-photo" className="block text-md font-medium leading-6 text-gray-900">
                                        Toy photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center w-full md:w-10/12">
                                            <FaPhotoVideo className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-md leading-6 text-gray-600">
                                                <input id="toy-photo" name="toyPhoto" type="text" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400 outline-0 sm:text-md sm:leading-6" placeholder='PhotoURL'
                                                    defaultValue={toyPhoto}
                                                    disabled
                                                />
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">Choose only http or https toy photo link</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="price" className="block text-md font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            autoComplete="price"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400 sm:text-md sm:leading-6 outline-none"
                                            placeholder='Price'
                                            defaultValue={price}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="rating" className="block text-md font-medium leading-6 text-gray-900">
                                        Rating
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="rating"
                                            name="rating"
                                            id="rating"
                                            autoComplete="rating"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Rating'
                                            defaultValue={rating}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="quantity" className="block text-md font-medium leading-6 text-gray-900">
                                        Quantity
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="quantity"
                                            name="quantity"
                                            id="quantity"
                                            autoComplete="quantity"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Quantity'
                                            defaultValue={quantity}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-md leading-6 text-gray-600">Please provide valid information for submit a toy</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="sellerName" className="block text-md font-medium leading-6 text-gray-900">
                                        Seller name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="sellerName"
                                            id="sellerName"
                                            autoComplete="sellerName"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Seller name'
                                            defaultValue={sellerName}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="sellerEmail" className="block text-md font-medium leading-6 text-gray-900">
                                        Seller email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="sellerEmail"
                                            id="sellerEmail"
                                            autoComplete="sellerEmail"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-error placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Seller email'
                                            defaultValue={sellerEmail}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to='/myToys' type="button" className="text-md font-semibold leading-6 text-gray-900">
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-error px-3 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;