import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaCartArrowDown } from 'react-icons/fa';
import headerBg from '../../../assets/headerbg.png';
import { motion } from 'framer-motion';
import './Hero.css'

const Hero = () => {
    return (
        <div className="sm:w-11/12 my-7 mx-auto">
            <div className="hero min-h-[500px] bg-slate-50 rounded-lg">
                <div className="hero-content w-full flex-col lg:flex-row-reverse justify-evenly">
                    <div id="hero-img">
                        <motion.div initial={{ x: "7rem", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                            className="image-container">
                            <img src={headerBg} className="max-w-xs" />
                        </motion.div>
                    </div>
                    <div className="md:w-[500px] text-center lg:text-left mt-6 lg:mt-0">
                        <h1 className="text-5xl font-semibold">Toy Universe</h1>
                        <p className="py-6 text-2xl flex flex-col md:flex-row">We have all of your favourite
                            <span className="text-error ps-1">
                                <TypeAnimation
                                    sequence={[
                                        'Avengers Toys', // Types 'One'
                                        1000, // Waits 1s
                                        'Marvel Heros', // Deletes 'One' and types 'Two'
                                        1000, // Waits 2s
                                        'All Villain', // Types 'Three' without deleting 'Two'
                                        1000,
                                        () => {
                                            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                        }
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                />
                            </span>
                        </p>
                        <ul className="flex">
                            <Link className="flex items-center text-lg btn btn-md capitalize font-medium px-6 rounded-none btn-outline hover:btn-error">Buy Now <span className="ms-2"><FaCartArrowDown /></span></Link>
                            <Link to='/login' className="flex items-center text-lg btn btn-md capitalize font-medium px-6 rounded-none btn-outline hover:btn-error ms-0 md:ms-3">Get Started <span className="ms-2"><FaArrowRight /></span></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;