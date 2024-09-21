import React from 'react';
import { Link } from 'react-router-dom';

const AgentProfile = ({ agentP }) => {
    const { image, name, company, id,short_bio } = agentP
    return (
        <div className='p-10  h-[500px] hover:shadow-2xl hover:scale-105 '>
            <div className='flex justify-center '>
                <img className='rounded-full' src={image} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
                <h1 className='text-lg font-bold text-sky-500 my-2'>{name}</h1>
                <p className='text-lg font-bold my-2'>{company.agent}</p>
                <p className='my-1'>{short_bio.slice(0,90)}...</p>
                <Link to={`profile/${id}`} className='text-lg font-bold text-sky-500 mt-1'><button className=''>Profile</button></Link>
            </div>
        </div>
    );
};

export default AgentProfile;