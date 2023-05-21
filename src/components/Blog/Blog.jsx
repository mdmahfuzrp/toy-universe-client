import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='sm:w-9/12 px-5 my-10 mx-auto text-justify border sm:p-5'>
                <h1 className='text-2xl mb-2'><span className='text-white bg-error px-3 mr-3 rounded-md'>Question:</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='text-lg font-normal text-gray-600'><span className='text-white bg-success px-2 rounded-md mr-2'>Answer:</span>An access token is a credential that provides temporary access to protected resources. A refresh token is used to obtain a new access token without re-entering credentials. Access tokens are included in requests to access resources, while refresh tokens are used to request new access tokens. It's important to store tokens securely on the client-side.</p>
            </div>
            <div className='sm:w-9/12 px-5 my-10 mx-auto text-justify border sm:p-5'>
                <h1 className='text-2xl mb-2'><span className='text-white bg-error px-3 mr-3 rounded-md'>Question:</span>Compare SQL and NoSQL databases?</h1>
                <p className='text-lg font-normal text-gray-600'><span className='text-white bg-success px-2 rounded-md mr-2'>Answer:</span>SQL databases are based on a relational model, use structured schemas, ensure data integrity, and are suitable for applications with complex data structures. Examples include MySQL and PostgreSQL. <br />NoSQL databases are designed for unstructured and non-relational data, offer flexibility and scalability, prioritize performance over strong consistency, and are suitable for applications handling large volumes of data. Examples include MongoDB and Redis.</p>
            </div>
            <div className='sm:w-9/12 px-5 my-10 mx-auto text-justify border sm:p-5'>
                <h1 className='text-2xl mb-2'><span className='text-white bg-error px-3 mr-3 rounded-md'>Question:</span>What is express js? What is Next JS?</h1>
                <p className='text-lg font-normal text-gray-600'><span className='text-white bg-success px-2 rounded-md mr-2'>Answer:</span>Express.js is a lightweight web application framework for Node.js, used for building APIs and web applications.<br />Next.js is a React framework that provides server-side rendering, static site generation, and other advanced features for building React-based web applications.</p>
            </div>
            <div className='sm:w-9/12 px-5 my-10 mx-auto text-justify border sm:p-5'>
                <h1 className='text-2xl mb-2'><span className='text-white bg-error px-3 mr-3 rounded-md'>Question:</span>What is MongoDB aggregate and how does it work?</h1>
                <p className='text-lg font-normal text-gray-600'><span className='text-white bg-success px-2 rounded-md mr-2'>Answer:</span>MongoDB's aggregate is a feature for performing advanced data aggregation and processing. It uses a pipeline of stages to manipulate and aggregate data, including grouping, filtering, sorting, and computing results. It allows for flexible and powerful data transformations within the database.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;