import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import Toy from './Toy';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    // Data from other place
    useEffect(() => {
        const url = `http://localhost:5000/toys?page=${currentPage}&limit=${itemsPerPage}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [currentPage]);


    const handleSetCurrentPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <NavBar></NavBar>

            {/* All Toys Code */}
            <div className="overflow-x-auto sm:w-11/12 my-7 mx-auto shadow-lg">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-[16px] font-semibold'>Name & Category</th>
                            <th className='text-[16px] font-semibold'>Toy Seller Information</th>
                            <th className='text-[16px] font-semibold'>Price</th>
                            <th className='text-[16px] font-semibold'>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>

                    {/* All Toy Here with another component but same page */}
                    <tbody>
                        {
                            toys.map((toy, index) => <Toy
                                key={toy._id}
                                toy={toy}
                                digit={index + 1}
                            ></Toy>)
                        }
                    </tbody>


                </table>
                <div className='w-full bg-white'>
                    {/* Pagination */}
                    <div className='pagination p-5 w-fit ms-auto'>
                        {
                            pageNumbers.map(number => <button
                                key={number}
                                className={`w-14 h-9 text-lg border ${currentPage === number ? 'bg-error' : ''}`}
                                onClick={() => handleSetCurrentPage(number)}
                            >
                                {number}
                            </button>)
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AllToys;