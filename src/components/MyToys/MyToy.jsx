import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { FaCartPlus, FaPhotoVideo, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToy = ({ myToy, digit, handleDeleteToy }) => {
    
    const { user } = useContext(AuthContext);
    const { _id, category, description, price, quantity, rating, toyName, toyPhoto, sellerName, sellerEmail } = myToy;

    return (
        <tr>
            <th>
                <label className=''>
                    <p className='px-5 text-error text-xl font-medium'>{digit}</p>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={toyPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-normal text-lg">{toyName}</div>
                        <div className="text-md font-normal text-error"><span className='badge rounded-md p-1 badge-error font-normal text-white'>Category :</span> <span className='text-gray-500'>{category}</span></div>
                    </div>
                </div>
            </td>
            <td>
                {
                    myToy?.sellerName && <span className="block">{sellerName}</span>
                }
                <span className="badge badge-error text-white font-[300] p-1 badge-md">{sellerEmail}</span>
            </td>
            <td className='text-lg'><span className='text-error'>$ </span>{price}</td>
            <td className='text-lg'><span className='text-error'>{quantity}</span> <small className='text-gray-500'>in stock</small></td>
            <th>

                <Link to={`/myToys/${_id}`} className="btn btn-sm px-2 shadow-md btn-success mr-1.5 text-white font-normal capitalize text-[18px]">Update</Link>
                <Link onClick={()=> handleDeleteToy(_id)} className="btn btn-sm px-2 shadow-md btn-error text-white font-normal capitalize text-[18px]">Delete</Link>
            </th>

        </tr>
    );
};

export default MyToy;