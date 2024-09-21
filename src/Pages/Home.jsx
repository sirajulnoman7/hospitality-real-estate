import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider/Slider';
import ExploreLifeStyle from '../Components/Explore Lifestyles/ExploreLifeStyle';
import Categories from '../Components/Categores/Categories';
import FeaturedLuxury from '../Components/LuxaryFeature/FeaturedLuxury';
import { useLoaderData } from 'react-router-dom';
import FeatureCart from '../Components/FeaturedCart/FeatureCart';
import ExploreAgentProfile from '../Components/ExploreAgentProfile/ExploreAgentProfile';
import AgentProfile from '../Components/AgentProfile/AgentProfile';

const Home = () => {
    const hotels = useLoaderData()
    console.log(hotels)
    const [agents, setAgents] = useState([])

    useEffect(() => {
        fetch('../../public/agentProfile.json')
            .then(res => res.json())
            .then(data => setAgents(data))
    }, [])
    return (
        <div>
            <h3>this is home page</h3>
            <Slider></Slider>

            <div className='my-14'>
                <FeaturedLuxury></FeaturedLuxury>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    hotels.map(hotel => <FeatureCart hotel={hotel} key={hotel.id}></FeatureCart>)
                }
            </div>
            <div className='my-14'>
                <ExploreLifeStyle></ExploreLifeStyle>
            </div>
            <Categories></Categories>
            <div className='my-14'>
                <ExploreAgentProfile></ExploreAgentProfile>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    agents.map(agent => <AgentProfile key={agent.id} agentP={agent}></AgentProfile>)
                }
            </div>
        </div>
    );
};

export default Home;