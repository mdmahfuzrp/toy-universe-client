import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);

    // Load My All Toys From DataBase
    useEffect(() => {
        fetch(`https://marvel-universe-server.vercel.app/toys/email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [])
    

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
                fetch(`https://marvel-universe-server.vercel.app/toys/${id}`, {
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
                        else{
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

    return (
        <div>
            <NavBar></NavBar>

            {/* Code For My Toys Section */}
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
                            <th></th>
                            <th className='text-[16px] font-semibold'>Name & Category</th>
                            <th className='text-[16px] font-semibold'>Toy Seller Information</th>
                            <th className='text-[16px] font-semibold'>Price</th>
                            <th className='text-[16px] font-semibold'>Quantity</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyToys;