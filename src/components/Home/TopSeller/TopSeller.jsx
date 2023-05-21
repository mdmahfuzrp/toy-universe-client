import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TopSeller = () => {

    
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <div className=' overflow-hidden'>
            <div className="uniqHeader">
                <h1 className="text-3xl text-center font-medium" data-aos="fade-right">Our Top <span className="text-error">Seller</span></h1>
                <p className="text-lg text-gray-500 text-center mb-6" data-aos="fade-left">Join and connected with us for expensive business knowledge and best achievement</p>
            </div>
            <div className='sm:w-11/12 my-14 mt-5 mx-auto px-5'>
            <div className=" flex flex-col w-full lg:flex-row mb-5">
                <div data-aos="fade-up-right" className="max-h-80 card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/m679Mr7/1.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div data-aos="fade-up-left" className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/Zhnf6gk/Happy-Employee.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div data-aos="flip-left" className="max-h-80 flex-grow card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/cXKsRf8/pngtree-businessman-winning-best-employee-of-the-month-award-photo-image-1785850.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div  data-aos="flip-right" className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/ncsRpGp/pexels-george-milton-7034787.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div data-aos="flip-up" className="max-h-80 card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/3yPJrP1/video-home.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div data-aos="flip-down" className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/crnS26V/ye-I3-C8t-AWA.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mb-5">
                <div data-aos="zoom-in" className="max-h-80 flex-grow card bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img className='max-h-full w-full object-cover object-top rounded-box' src="https://i.ibb.co/b6DgPJG/istockphoto-1064056738-170667a-DESKTOP-2-MLIDTT.jpg" alt="" />
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div data-aos="zoom-out-left" className="max-h-80 card flex-grow bg-base-300 rounded-box place-items-center w-[100%] md:w-[50%]">
                    <img src="https://i.ibb.co/qywnxty/photo-1549923746-c502d488b3ea.jpg" className='max-h-full w-full object-cover object-top rounded-box' alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopSeller;