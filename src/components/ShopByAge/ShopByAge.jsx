import React from 'react';

const ShopByAge = () => {
    return (
        <div className='sm:w-11/12 px-5 my-12 mt-3 mx-auto'>
            <div className="uniqHeader">
                <h1 className="text-3xl text-center font-medium" >Shop by <span className="text-error">Age</span></h1>
                <p className="text-lg text-gray-500 text-center mb-7">Toy doesn't decided your age, so enjoy with full excitement and excited life</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 items-center justify-center'>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/GJMJjTH/1.webp" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">0-12 MONTH</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/3srnqNJ/2.jpg" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">1-2 YEARS</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/4Np73vB/3.jpg" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">3-4 YEARS</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/tQM9RxR/4.jpg" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">5-7 YEARS</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/8N18Dwp/5.jpg" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">8-11 YEARS</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/g3XNPVn/6.webp" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">12-14 YEARS</h2>
                    </div>
                </div>
                <div className="card w-fit card-compact bg-base-100 shadow-md rounded-lg">
                    <figure><img src="https://i.ibb.co/Y2gB4qn/6.jpg" alt="Shoes" /></figure>
                    <div className="p-2 text-center">
                        <h2 className="text-lg font-medium">BIG KIDS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;