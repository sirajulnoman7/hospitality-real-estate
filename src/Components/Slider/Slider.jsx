
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

import { IoBedOutline } from "react-icons/io5";
import { BiWater } from "react-icons/bi";
import { TbChartArea } from "react-icons/tb";



const Slider = () => {
  const [images, setImages] = useState([])
  console.log(images)
  useEffect(() => {
    fetch('../../../public/slider.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  return (
    <div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

          {
            images.map(imgs => <SwiperSlide className='relative hover:opacity-80 max-h-[500px] '>
              <div className="h-44 text-start hidden rounded bg-violet-50  border border-green-400 w-[500px] shadow-xl  absolute sm:mt-20 sm:ml-3 md:mt-64 md:ml-12">

                <div className=''>
                  <div className='flex justify-between p-3'>
                    <h3 className='text-lg font-sans font-semibold   hover:text-blue-400'>{imgs.name}</h3>
                    <p className="text-lg font-sans font-bold">{imgs.price}</p>
                  </div>
                  <div className='flex justify-between px-2 my-2'>
                    <p>{imgs.short_info}</p>
                    <p>{imgs.area}</p>
                  </div>
                  <div  className='flex gap-20 px-2'>
                    <p className='flex gap-3 items-center'><IoBedOutline></IoBedOutline> {imgs.bed}</p>
                    <p className='flex gap-3 items-center'><BiWater></BiWater>{imgs.type}</p>
                    <p className='flex gap-3 items-center'><TbChartArea></TbChartArea>{imgs.area}</p>
                  </div>
                  <div className='flex  justify-end  items-end '>
                    <button className='btn btn-outline mt-3  btn-accent btn-sm  '>Details</button>
                  </div>
                </div>
              </div>
            <div>
            <img className='max-h-[500px] w-full rounded-lg' src={imgs.image} alt="" />
            </div>
            </SwiperSlide>)
          }

        </Swiper>
      </>
    </div>
  );
};

export default Slider;