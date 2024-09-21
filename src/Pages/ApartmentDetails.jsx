import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from 'react-icons/fa';


const ApartmentDetails = () => {
    const hotels = useLoaderData()
    const { id } = useParams()
    const idx = parseInt(id)

    const hotelDetailId = hotels.find(detailId => (detailId.id === idx))
    console.log(hotelDetailId)

    const handleSubmitInfo =(e)=>{
            e.preventDefault()
            e.target,reset()
    }
    return (

        <div>
            <div className='flex justify-between px-3'>

                <div className='my-5'>
                    <h2 className="text-3xl text-start font-bold font-mono my-4">New Home For {hotelDetailId.status}</h2>
                    <div className='text-start'>
                        <button className='mr-5 font-mono py-1 px-3 rounded bg-green-500 text-white '>Featured</button>
                        <button className='mr-5 font-mono py-1 px-3 rounded bg-gray-500 text-white hover:text-sky-400'>{hotelDetailId.status}</button>
                        <button className='mr-5 font-mono py-1 px-3 rounded clear-start text-white bg-red-500 hover:text-sky-400'>HOT OFFER</button>

                    </div>
                    <div className='text-start flex items-center gap-2 mt-2'>
                        <FaLocationDot></FaLocationDot>
                        <p>100 Chopin Plaza, {hotelDetailId.location}, FL 33131, USA</p>
                    </div>
                </div>
                <div className='shadow-2xl p-4'>
                    <h2 className="text-3xl text-start font-bold font-mono ">{hotelDetailId.price}</h2>
                    <h2 className="text-xl text-start  font-mono my-3 ">{hotelDetailId.area}</h2>
                    <p></p>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10 '>
                <div className='col-span-3'>
                    <img src={hotelDetailId.images[0]} alt="" />
                </div>
                <div className='mt-4'>
                    <div >
                        <div className='flex justify-between items-center'>
                            <img className='w-32' src={hotelDetailId.profile_image} alt="" />
                            <div>
                                <div className='flex items-center'>
                                    <FaUser></FaUser>
                                    <p className='ml-2'>Brittany Watkins</p>
                                </div>
                                <div>
                                    <button className=' font  font-semibold text-sky-400'>View Profile</button>
                                </div>
                            </div>
                        </div>
                        {/* input section  */} 
                        <form onSubmit={handleSubmitInfo} className='text-start mt-5 '>
                            <input className='px-3 py-2 border border-sky-400 w-full my-3' type="text" placeholder='Your Name' />
                            <br />
                            <input className='px-3 py-2 border border-sky-400 w-full my-3' type="text" placeholder='Your Number' />
                            <br />
                            <input className='px-3 py-2 border border-sky-400 w-full my-3' type="email" name="" id="" placeholder='Your Email' required />
                            <br />
                            <textarea className='border border-sky-400 w-full h-32 p-3' name="" id="" placeholder='if you want to ,please tell me'>
                            </textarea>
                            <br />
                            <select className="select select-primary w-full max-w-xs my-2">
                                <option disabled selected>What is the best TV show?</option>
                                <option>Game of Thrones</option>
                                <option>Apartment</option>
                                <option>Breaking Bad</option>
                                <option>House</option>
                            </select>

                            <p className='my-2'>By submitting this form I agree to <Link className='text-sky-500'>Terms of Use</Link></p>
                              <button className='btn my-2  btn-success mr-2'>Send Message</button>
                              <button className='btn my-2 btn-success btn-outline w-28'>Coll</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;