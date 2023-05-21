import React from 'react';

const TopSeller = () => {
    return (
        <div className='sm:w-11/12 my-7 mx-auto px-5'>
            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div className="max-h-80 card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/m679Mr7/1.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/Zhnf6gk/Happy-Employee.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div className="max-h-80 flex-grow card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/cXKsRf8/pngtree-businessman-winning-best-employee-of-the-month-award-photo-image-1785850.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/ncsRpGp/pexels-george-milton-7034787.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div className="max-h-80 card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/m679Mr7/1.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/Zhnf6gk/Happy-Employee.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div className="max-h-80 flex-grow card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/cXKsRf8/pngtree-businessman-winning-best-employee-of-the-month-award-photo-image-1785850.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/ncsRpGp/pexels-george-milton-7034787.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopSeller;