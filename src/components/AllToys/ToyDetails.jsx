import React, { useEffect } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { FaCartPlus, FaShoppingBasket } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ToyDetails = () => {
    const toy = useLoaderData();
    const { toyName, toyPhoto, sellerName, sellerEmail, category, price, quantity, rating, description } = toy;
    useEffect(()=>{
        AOS.init({duration: 1500});
    },[])
    return (
        <div>
            <NavBar></NavBar>
            <div className='sm:w-11/12 my-7 mx-auto overflow-x-hidden'>
                <div className='flex flex-row gap-x-1'>
                    <NavLink to='/allToys' className='text-lg font-normal text-error'>All Toys</NavLink>
                    <p className='text-lg font-normal text-gray-500'>/ {toy?.toyName}</p>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-10 my-5'>
                    <div data-aos="fade-right" className='md:w-[400px] rounded-lg shadow-md'>
                        <img src={toy?.toyPhoto} className='border md:w-[400px] rounded-lg' alt="" />
                    </div>
                    <div data-aos="fade-left" className='md:w-1/2 h-full flex flex-col p-5'>
                        <div>

                            <h1 className='text-left text-2xl sm:text-3xl font-medium text-error'>{toy?.toyName}</h1>
                            {
                                toy?.description && <p className='text-gray-500'>Description: {toy?.description}</p>
                            }
                        </div>
                        <div className="stats stats-vertical lg:stats-horizontal shadow my-4">

                            <div className="stat lg:w-[180px] flex flex-col items-center">
                                <div className="stat-title">Toy Price</div>
                                <div className="stat-value">$ {toy?.price}</div>
                                <div className="stat-desc">Limited price only</div>
                            </div>

                            <div className="stat lg:w-[180px] flex flex-col items-center">
                                <div className="stat-title">Rating</div>
                                <div className="stat-value">{toy?.rating}</div>
                                <div className="stat-desc">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="w-[20px] m-[2px] mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="w-[20px] m-[2px] mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="w-[20px] m-[2px] mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="w-[20px] m-[2px] mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="w-[20px] m-[2px] mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="stat lg:w-[180px] flex flex-col items-center">
                                <div className="stat-title">Quantity</div>
                                <div className="stat-value">{toy?.quantity}</div>
                                <div className="stat-desc">Available in stock</div>
                            </div>
                        </div>
                        <div className='text-left w-full'>
                            <span className='text-error text-xl font-medium'>Seller Information:</span>
                            <div className='mt-1 leading-5 border-b pb-3'>
                                {
                                    toy?.sellerName && <p className='text-gray-500'>Seller name: {toy?.sellerName}</p>
                                }
                                {
                                    toy?.sellerEmail && <p className='text-gray-500'>Email: {toy?.sellerEmail}</p>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-3 mt-5'>
                            <Link className='bg-error hover:bg-[#f14d4d] flex sm:w-fit items-center justify-center text-white text-lg py-1 px-4'>Add to Cart <span className='ms-1'><FaCartPlus size={18}/></span></Link>
                            <Link className='bg-error hover:bg-[#f14d4d] flex sm:w-fit items-center justify-center text-white text-lg py-1 px-4'>Buy Now <span className='ms-1'><FaShoppingBasket size={18}/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ToyDetails;