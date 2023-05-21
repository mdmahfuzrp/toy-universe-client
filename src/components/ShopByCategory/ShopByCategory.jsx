import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCard from './ShopByCategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategory = () => {
    const [categoryToy, setCategoryToy] = useState([]);
    const [category, setCategory] = useState('Heros');

    useEffect(() => {
        fetch(`https://marvel-universe-server.vercel.app/toys/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setCategoryToy(data);
            })
    }, [category]);

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <div className=' overflow-x-hidden' data-aos="fade-up">
            <div className="uniqHeader">
                <h1 className="text-3xl text-center font-medium" data-aos="fade-left">Shop by <span className="text-error">Category</span></h1>
                <p className="text-lg text-gray-500 text-center mb-6" data-aos="fade-right">See what is our most amazing and best product for your today</p>
            </div>
            <div className='sm:w-11/12 px-5 my-10 mt-3 mx-auto'>
            <Tabs className='rounded-lg'>
                <TabList>
                    <Tab onClick={() => setCategory('Heros')}>Marvel Heros</Tab>
                    <Tab onClick={() => setCategory('Villains')}>Marvel Villains</Tab>
                    <Tab onClick={() => setCategory('Toys')}>Marvel Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            categoryToy.map(toy => <ShopByCategoryCard
                                key={toy?._id}
                                toy={toy}
                            ></ShopByCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            categoryToy.map(toy => <ShopByCategoryCard
                                key={toy?._id}
                                toy={toy}
                            ></ShopByCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            categoryToy.map(toy => <ShopByCategoryCard
                                key={toy?._id}
                                toy={toy}
                            ></ShopByCategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;