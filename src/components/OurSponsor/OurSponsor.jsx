import React from 'react';
import Marquee from "react-fast-marquee";

const OurSponsor = () => {
    return (
        <div className='overflow-x-hidden mt-10 mb-3 px-5'>
            <h1 className="text-xl md:text-4xl text-center font-semibold opacity-75"><span className="text-error">Our </span> Sponsor</h1>
            <div className='sm:w-11/12 mb-7 mx-auto'>
                <Marquee gradient>
                    <div className='flex flex-row items-center justify-center '>
                        <img className='w-[170px] m-5 grayscale' src="https://i.ibb.co/4g88Pp7/airbnb.png" alt="" />
                        <img className='w-[170px] m-5 grayscale' src="https://i.ibb.co/SB7nq1f/Google.png" alt="" />
                        <img className='w-[170px] m-5 grayscale opacity-50' src="https://i.ibb.co/4N6rdft/tesla.png" alt="" />
                        <img className='w-[170px] m-5 grayscale' src="https://i.ibb.co/6tQN0rV/microsoft.png" alt="" />
                        <img className='w-[170px] m-5 grayscale opacity-50' src="https://i.ibb.co/FDbdC2H/netflix.png" alt="" />
                        <img className='w-[170px] m-5 grayscale opacity-50' src="https://i.ibb.co/Bg1SdJV/sequoia.png" alt="" />
                        <img className='w-[170px] m-5 grayscale opacity-50' src="https://i.ibb.co/6rYCdPh/yahoo.png" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default OurSponsor;