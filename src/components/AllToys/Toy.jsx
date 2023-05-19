import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { FaCartPlus } from 'react-icons/fa';

const Toy = ({ toy, digit }) => {
    const { user } = useContext(AuthContext);
    const { toyName, toyPhoto, sellerName, sellerEmail, category, price, quantity, rating, description } = toy;
    console.log(toy);

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
                        <div className="text-md font-normal text-error"><span className='badge rounded-md p-1 badge-error font-normal'>Category :</span> <span className='text-gray-500'>{category}</span></div>
                    </div>
                </div>
            </td>
            <td>
                {
                    toy?.toyName && <span className="block">{sellerName}</span>
                }
                <span className="badge badge-error text-white font-[300] p-1 badge-md">{sellerEmail}</span>
            </td>
            <td className='text-lg'><span className='text-error'>$ </span>{price}.00</td>
            <td className='text-lg'><span className='text-error'>{quantity}</span> <small className='text-gray-500'>in stock</small></td>
            <th>
                {
                    user ?
                        <label htmlFor="toy-modal" className="btn btn-sm px-2 shadow-md btn-error text-white font-normal capitalize text-[18px]">View Details</label>
                        : <Link to='/login' className="btn btn-sm px-2 shadow-md btn-error text-white font-normal capitalize text-[18px]">View Details</Link>
                }
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="toy-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-4xl px-10">
                        <h3 className="font-semibold text-error text-xl md:text-4xl">{toyName}</h3>
                        <div className='max-w-[100px]'>
                            <p className="max-w-[100px] font-normal text-gray-500 pb-2">{description}</p>
                        </div>
                        <div className=' w-full grid grid-cols-1 md:grid-cols-2 py-3'>
                            <div className='max-w-full md:max-w-[300px] mx-auto border rounded-lg p-5 mb-4 md:m-0'>
                                <img className='w-full' src={toyPhoto} alt="" />
                            </div>
                            <div className='flex flex-col items-center justify-center w-full gap-5'>
                                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                                    <div className="stat">
                                        <div className="stat-title text-lg font-semibold">Price</div>
                                        <div className="stat-value">$ {price}</div>
                                        <div className="stat-desc flex items-center"><span className='bg-error text-white w-3 h-3 flex items-center rounded-sm justify-center mr-1'>↘︎</span> Only</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title text-lg font-semibold">Rating</div>
                                        <div className="stat-value">{rating}+</div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title text-lg font-semibold">Quantity</div>
                                        <div className="stat-value">{quantity}</div>
                                        <div className="stat-desc flex items-center"><span className='bg-error text-white w-3 h-3 flex items-center rounded-sm justify-center mr-1'>↗︎</span>in stock</div>
                                    </div>
                                </div>
                                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                                    <div className="stat">
                                        <div className="stat-title text-lg font-medium">Seller name</div>
                                        <div className="stat-value font-semibold text-2xl">{sellerName}</div>
                                        <div className="stat-title text-lg font-medium mt-2">Seller email</div>
                                        <div className="stat-value font-semibold text-2xl">{sellerEmail}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="toy-modal" className="btn btn-error text-white text-[18px] font-normal">Add to Cart <span className='ms-1'><FaCartPlus size={20} /></span></label>
                        </div>
                    </div>
                </div>
            </th>

        </tr>
    );
};

export default Toy;