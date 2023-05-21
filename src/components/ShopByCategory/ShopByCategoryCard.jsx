import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';

const ShopByCategoryCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, toyPhoto, rating, toyName, price } = toy;

    const handleViewDetails = () =>{
        alert('You have to log in first to view details');
    }

    return (
        <div className='border border-slate-200 p-5 rounded-lg'>
            <h1 className='text-lg text-error font-medium'>{toyName}</h1>
            <div className="card card-side flex-col sm:flex-row justify-center items-center p-0 mt-3">
                <figure className='w-1/2'><img src={toyPhoto} alt="Toys" /></figure>
                <div className="card-body ms-1 p-0">
                    <h2 className="font-normal text-lg border text-center py-1 border-error text-gray-500 w-fit px-3 mx-auto"><span className=''>Price:</span> $ {price}</h2>
                    <div className='flex flex-col items-center py-1'>
                        <h2 className="font-normal text-lg text-gray-500"><span className=''>Rating:</span> {rating}</h2>
                        <div className="rating justify-center">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[15px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[15px]" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[15px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[15px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[15px]" />
                        </div>
                    </div>
                    <div className="card-actions justify-end px-5">
                        {
                            user ? <Link to={`/allToys/${_id}`} className="px-3 bg-error text-white text-lg py-2 hover:bg-[#e05a5a] text-center">View Details</Link> 
                            : <Link onClick={handleViewDetails} to={`/allToys/${_id}`} className="px-3 bg-error text-white text-lg py-2 hover:bg-[#e05a5a] text-center">View Details</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;