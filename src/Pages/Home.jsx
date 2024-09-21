import React from 'react';
import Slider from '../Components/Slider/Slider';
import ExploreLifeStyle from '../Components/Explore Lifestyles/ExploreLifeStyle';
import Categories from '../Components/Categores/Categories';
import FeaturedLuxury from '../Components/LuxaryFeature/FeaturedLuxury';
import { useLoaderData } from 'react-router-dom';
import FeatureCart from '../Components/FeaturedCart/FeatureCart';

const Home = () => {
    const hotels=useLoaderData()
    console.log(hotels)
    return (
        <div>
            <h3>this is home page</h3>
            <Slider></Slider>
          
            <FeaturedLuxury></FeaturedLuxury>
            <div className='grid grid-cols-3 gap-4'>
               {
                hotels.map(hotel=><FeatureCart hotel={hotel} key={hotel.id}></FeatureCart>)
               }
            </div>
            <ExploreLifeStyle></ExploreLifeStyle>
            <Categories></Categories>
        </div>
    );
};

export default Home;