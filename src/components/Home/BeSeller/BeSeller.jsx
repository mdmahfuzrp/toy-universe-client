import React from 'react';
import { FaCalendarAlt, FaHandPaper } from 'react-icons/fa';

const BeSeller = () => {
    return (
        <div className="px-5 relative isolate overflow-hidden bg-gray-900 py-16">
            <div className="sm:w-11/12 my-7 mx-auto">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl tracking-wide">Be a Toy Seller</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Connect with <span className='text-error'>Marvel Universe</span> and sell your amazing product as a <span className='text-error'>Seller</span> - top seller achieve reward from <span className='text-error'>Marvel Universe</span>
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-error outline-none tracking-wide sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md text-lg bg-error hover:bg-red-500 text-white px-3"
                            >
                                Be a Seller
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <FaCalendarAlt className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white tracking-wide">Monthly Achievement</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Our <span className='text-error'>Toy Seller</span> have monthly $ 20k+ income per month - Be a best seller not only just a top seller
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <FaHandPaper className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white tracking-wide">Top Seller</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                            <span className='text-error'>Toy Seller</span> have reward from <span className='text-error'>Marvel Universe</span> as a gift or $ 10k, free toy for child, free shopping reward etc
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
};

export default BeSeller;