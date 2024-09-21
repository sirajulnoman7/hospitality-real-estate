import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { LuTriangleRight } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';




const FeatureCart = ({ hotel }) => {
    const { id, estate_title, segment_name, description, price, status, images, area, bed, shower } = hotel
    return (
        <div className=' shadow-lg shadow-gray-300 '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className='relative'>

                    <div>
                        {
                            images.map(image => <SwiperSlide>
                                <div className='absolute flex w-full justify-between p-4'>
                                    <div><p className='text-sm bg-red-600 text-white px-2 rounded '>Featured</p></div>
                                    <div className=''><p className='text-sm bg-green-500 text-white hover:bg-green-800 px-2 rounded'>{status}</p></div>
                                </div>
                                <img className='h-72 w-full rounded-t-xl' src={image} alt="" />
                            </SwiperSlide>)
                        }
                    </div>

                </div>
                <p className='text-2xl font-sans font-semibold text-start px-3'>{segment_name}</p>
                <div className='flex justify-between my-5 p-2'>
                    <p className='text-md'>{price}</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <IoBedOutline></IoBedOutline>
                            <p className='ml-2'>{bed}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaShower></FaShower>
                            <p className='ml-2'>{shower}</p>
                        </div>
                        <div className='flex items-center'>
                            <LuTriangleRight></LuTriangleRight>
                            <p className='ml-2'>{area}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/apartment/${id}`}><button className='w-full btn btn-outline btn-accent'>Details</button></Link>

            </Swiper>

        </div>
    );
};

export default FeatureCart;