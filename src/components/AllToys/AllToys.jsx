import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import Toy from './Toy';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    console.log(toys);
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    // Set Title
    useTitle('All Toys')

    // Data from other place
    const [searchName, setSearchName] = useState('');

    const handleSetSearch = event => {
        const newValue = event.target.value;
        setSearchName(newValue);
        console.log(newValue);
    }

    console.log(searchName);

    let url = '';
    useEffect(() => {
        searchName ? url = `https://marvel-universe-server.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}&name=${searchName}`
            : url = `https://marvel-universe-server.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}&name=`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [currentPage, searchName]);


    const handleSetCurrentPage = (page) => {
        setCurrentPage(page);
    }


    return (
        <div className='px-5'>
            <NavBar></NavBar>

            {/* All Toys Code */}
            <div className="overflow-x-auto sm:w-11/12 my-7 mx-auto">
                <div className='max-w-[500px] mx-auto my-5'>
                    <input onChange={handleSetSearch} type="text" placeholder="Search any toy what you want ?" className="input input-bordered border-t-0 border-x-0 border-b-2 border-error text-center focus:outline-none focus:ring-0 w-full text-lg font-[300] cursor-zoom-in" />
                </div>
                <table className="table table-zebra w-full border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='rounded-none'></th>
                            <th className='text-[16px] font-semibold'>Name & Category</th>
                            <th className='text-[16px] font-semibold'>Toy Seller Information</th>
                            <th className='text-[16px] font-semibold'>Price</th>
                            <th className='text-[16px] font-semibold'>Quantity</th>
                            <th className='rounded-none'></th>
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