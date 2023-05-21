import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toyGallery')
            .then(res => res.json())
            .then(GalleryData => {
                setData(GalleryData);
            })
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <div className=" App overflow-hidden">
            <div className="uniqHeader">
                <h1 className="text-3xl text-center font-medium" data-aos="fade-right">Toy <span className="text-error">Gallery</span></h1>
                <p className="text-lg text-gray-500 text-center mb-7" data-aos="fade-left">Enter toy paradise, for Exclusive deals! Join now for endless fun and excitement!</p>
            </div>
            <div className="galleryWrapper sm:w-11/12 my-7 mt-4 mx-auto px-5">
                <div className="galleryContainer" data-aos="fade-up">
                    {
                        data.map((item, index) => <motion.div
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                            key={item._id} className="img-parent-gallery galleryItem"><img src={item.image} /></motion.div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallery;