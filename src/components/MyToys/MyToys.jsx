import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import MyToy from './MyToy';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('1');
    const [selected, setSelected] = useState('low');

    // Set Title
    useTitle('My Toys')

    // Load My All Toys From DataBase
    useEffect(() => {
        fetch(`http://localhost:5000/toys/email?email=${user?.email}&sort=${sort}&order=${order}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [order])


    const handleDeleteToy = (id) => {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn m-1 btn-error text-[16px]',
                cancelButton: 'btn btn-success m-1 text-[16px]'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "This toy don't have undo options",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                // Here Are Delete Operation Start
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        else {
                            swalWithBootstrapButtons.fire(
                                'Cancelled',
                                'Something wrong, please try again',
                                'error'
                            )
                        }
                    })
                // -----------------------------------
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Cancelled Successful',
                    'error'
                )
            }
        })
    }
    const handleSetOrder = (number) => {
        setOrder(number);
    }
    const handleItemClick = (items) => {
        setSelected(items);
    }

    return (
        <div>
            <NavBar></NavBar>

            {/* Code For My Toys Section */}
            {/* All Toys Code */}
            <div className="overflow-x-auto sm:w-11/12 my-7 mx-auto">
                <div className='w-full flex flex-col items-end mb-2'>
                    <div>
                        <h1 className='mb-1 text-lg text-gray-400 text-right'>Search by Price</h1>
                        <div>
                            <button className={`border border-error ${selected === 'low' ? 'bg-error text-white' : ''}`} onClick={() => handleItemClick('low')}><p className='py-1 px-2' onClick={() => handleSetOrder(1)}>Low to High</p></button>
                            <button className={`border border-error ${selected === 'high' ? 'bg-error text-white' : ''}`} onClick={() => handleItemClick('high')}><p className='py-1 px-2' onClick={() => handleSetOrder(-1)}>High to Low</p></button>
                        </div>
                    </div>
                </div>
                <table className="table table-zebra w-full border rounded-none">
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
                            myToys.map((myToy, index) => <MyToy
                                key={myToy._id}
                                myToy={myToy}
                                digit={index + 1}
                                handleDeleteToy={handleDeleteToy}
                            ></MyToy>)
                        }
                    </tbody>

                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th className='rounded-none'></th>
                            <th className='text-[16px] font-semibold'>Name & Category</th>
                            <th className='text-[16px] font-semibold'>Toy Seller Information</th>
                            <th className='text-[16px] font-semibold'>Price</th>
                            <th className='text-[16px] font-semibold'>Quantity</th>
                            <th className='rounded-none'></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyToys;