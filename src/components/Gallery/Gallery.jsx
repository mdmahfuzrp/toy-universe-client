import { GalleryData } from "./GalleryData";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setData(GalleryData);
        setCollection([... new Set(GalleryData.map((item) => item.titile))])
    }, [])

    const gallery_filter = (itemData) => {
        const filterData = GalleryData.filter((item) => item.titile == itemData);
        setData(filterData);
    }

    const handleItemClick = (items) => {
        setSelected(items);
    }

    return (
        <div className="App">
            <h1 className="text-3xl text-center font-medium">Toy <span className="text-error">Gallery</span></h1>
            <p className="text-lg text-gray-500 text-center">Enter toy paradise, for Exclusive deals! Join now for endless fun and excitement!</p>
            <div className="galleryWrapper">
                <div className="filterItem">
                    <ul>
                        <li onClick={() => handleItemClick('all')} style={{ color: selected === 'all' ? '#f87272' : 'black' }}><button onClick={() => setData(GalleryData)}>All</button></li>
                        {
                            collection.map((item) => <li
                                onClick={() => handleItemClick(item)} style={{ color: selected === item ? '#f87272' : 'black' }}><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
                        }
                    </ul>
                </div>
                <div className="galleryContainer">
                    {
                        data.map((item) => <motion.div 
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                            key={item.id} className="img-parent-gallery galleryItem"><img src={item.image} /></motion.div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallery;