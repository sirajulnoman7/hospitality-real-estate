import React from 'react';
import img1 from '../../assets/mohamed-shimaq-O7Ytoz4wPmE-unsplash.jpg'
import img2 from '../../assets/david-samuel-levinson-lqqUCTcQsXw-unsplash.jpg'
import img3 from '../../assets/francesca-tosolini-6japTIjUQoI-unsplash.jpg'
import { Link } from 'react-router-dom';
import 'animate.css';
 import './Category.css'

const Categories = () => {

    return (
        <div className='grid gap-5 my-3'>
            <div className='grid grid-cols-4 gap-4 '>

                <div className='col-span-2 border opacity'>
                    <Link to={'/apartment'}>
                        <div className='relative hover:opacity-90' >
                            <div className='absolute flex justify-center items-center h-full w-full bg-opacity-20'>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Apartment <span className='block text-sm'>17 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full' src={img1} alt="" />
                            </div>

                        </div>
                    </Link>
                </div>

                <div className='border'>
                    <Link to={'/shop'}>
                        <div className='relative hover:opacity-90' >
                            <div className='absolute flex justify-center items-center h-full w-full '>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Shop <span className='block text-sm'>4 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full ' src={img2} alt="" />
                            </div>

                        </div>
                    </Link>
                </div>
                <div className='border'>
                    <Link to={'/office'}>
                        <div className='relative' >
                            <div className='absolute flex justify-center items-center h-full w-full'>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Office <span className='block text-sm'>7 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full' src={img3} alt="" />
                            </div>

                        </div>
                    </Link>

                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 '>

                <div className=' border '>
                    <Link to={'/apartment'}>
                        <div className='relative hover:opacity-90' >
                            <div className='absolute flex justify-center items-center h-full w-full bg-opacity-20'>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Apartment <span className='block text-sm'>17 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full' src={img1} alt="" />
                            </div>

                        </div>
                    </Link>
                </div>

                <div className='border'>
                    <Link to={'/shop'}>
                        <div className='relative hover:opacity-90' >
                            <div className='absolute flex justify-center items-center h-full w-full '>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Shop <span className='block text-sm'>4 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full ' src={img2} alt="" />
                            </div>

                        </div>
                    </Link>
                </div>
                <div className='border col-span-2'>
                    <Link to={'/office'}>
                        <div className='relative' >
                            <div className='absolute  flex justify-center items-center h-full w-full'>
                                <p className="text-2xl animate__animated animate__bounceInLeft text-white">Office <span className='block text-sm'>7 properties</span></p>

                            </div>
                            <div>
                                <img className='h-96 w-full' src={img3} alt="" />
                            </div>

                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Categories;