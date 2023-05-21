import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import logo from '../../assets/logo.png';

const Profile = () => {
    const { user } = useContext(AuthContext);
    // Set Title
    useTitle('Profile')
    return (
        <div className='px-5'>
            <NavBar></NavBar>
            <div className='sm:w-11/12 my-7 mx-auto'>
                <section className="relative isolate overflow-hidden bg-white px-6 py-5 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <img className="mx-auto h-16 opacity-75" src={logo} alt="" />
                        <figure className="mt-1">
                            <blockquote className="text-center text-[18px] font-normal text-gray-500 md:w-8/12 mx-auto opacity-75">
                                <p>
                                    Welcome to the <span className='text-error'>Marvel Universe</span>, your satisfaction our achievement, Join our toy universe to make your life happy
                                </p>
                            </blockquote>
                            <figcaption className="mt-7">
                                <div className="w-24 mx-auto mask mask-squircle">
                                    <img src={user?.photoURL} />
                                </div>
                                <div className="mt-1 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-normal text-lg text-error">{user?.displayName}</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="text-gray-600">SELLER - Marvel Universe</div>
                                </div>

                                <div className="font-normal text-center text-lg text-error">{user?.email}</div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;