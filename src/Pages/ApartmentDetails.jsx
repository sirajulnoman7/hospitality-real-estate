import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar, FaShower, FaUser } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { LuTriangleRight } from 'react-icons/lu';
import { GiHomeGarage } from "react-icons/gi";


const ApartmentDetails = () => {
    const hotels = useLoaderData()
    const { id } = useParams()
    const idx = parseInt(id)

    const hotelDetailId = hotels.find(detailId => (detailId.id === idx))
    console.log(hotelDetailId)

    const handleSubmitInfo = (e) => {
        e.preventDefault()
        e.target, reset()
    }
    return (

        <div className=''>
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

            <div className='grid grid-cols-4 gap-10  '>
                <div className='col-span-3'>
                    <img src={hotelDetailId.images[0]} alt="" />
                    <div className='shadow-2xl p-5'>
                        <div className='flex justify-between my-10'>
                            <p className="text-lg">Overview</p>
                            <p className="text-lg font-mono font-bold">Property Id: 9009</p>
                        </div>
                        <hr className='mt-6 border border-green-500' />
                        <section className='flex justify-between gap-4 my-5'>
                            <div>
                                <p className='text-lg font-bold font-mono'>Single Family Home</p>
                                <p>Property Type</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <IoBedOutline></IoBedOutline>
                                    <p className='ml-2 font-mono font-bold'>{hotelDetailId.bed}</p>
                                </div>
                                <p>Bedrooms</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                <FaShower></FaShower>
                                <p className='ml-2 font-mono font-bold'>{hotelDetailId.shower}</p>
                                </div>
                                <p>Shower</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                <LuTriangleRight></LuTriangleRight>
                                <p className='ml-2 font-mono font-bold'>{hotelDetailId.area}</p>
                                </div>
                                <p>Area</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                   <GiHomeGarage></GiHomeGarage>
                                    <p className='ml-2 font-mono font-bold'>{hotelDetailId.bed}</p>
                                </div>
                                <p>Garage</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                   <FaCalendar></FaCalendar>
                                    <p className='ml-2 font-mono font-bold'>2024</p>
                                </div>
                                <p>Year</p>
                            </div>
                        </section>
                       
                    </div>

                    <section className='p-6 shadow-2xl mt-7'>
                           <h2 className='text-start font-mono font-bold'>Description</h2>
                           <hr className='my-6 '/>
                           <p>{hotelDetailId.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto accusamus corporis similique! Nam, voluptate labore totam temporibus repellat reprehenderit! Aperiam atque officiis natus, expedita doloremque, maxime voluptate sequi, a itaque laudantium distinctio vero ex eum quia rerum non dignissimos dolor ea. Fugit necessitatibus distinctio cum earum harum optio veritatis sint inventore illum laboriosam iure sed mollitia voluptate, dicta quo odio, quidem neque itaque aperiam doloribus magni ipsa excepturi nihil impedit. Temporibus architecto in, quasi omnis natus praesentium sapiente tenetur sed voluptatibus aspernatur vero ratione eaque dolorem facere quae sit debitis iure aliquam non deleniti modi? Adipisci incidunt corporis dolores natus. Tempora, odio in, corporis eligendi esse dicta dolorum tempore rem blanditiis eaque labore atque enim vitae sapiente non quasi aut nemo soluta voluptates quam sit. Soluta ut vel deserunt repudiandae. Voluptate placeat ad cumque. Eius, officiis? Sapiente consectetur voluptates voluptatem voluptatibus esse veniam dignissimos aliquam, sit, natus vero soluta libero porro harum illo quidem necessitatibus pariatur deserunt sunt, eum eos sed qui dolorum possimus? Quibusdam debitis suscipit quo, eos soluta doloremque consequatur sit accusantium harum fugiat, eaque amet excepturi illum laborum rem sint distinctio enim earum, commodi quae? Architecto dolorem omnis molestiae voluptate eligendi praesentium reprehenderit quam iusto dolore!</p>
                        </section>
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