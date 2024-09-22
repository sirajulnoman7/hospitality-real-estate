import React, { useContext } from 'react';
import { AuthContext } from '../MainContext/MainContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const {createUser}=useContext(AuthContext)
    // console.log(name)
    const handleFormSubmit=(e)=>{
          e.preventDefault()
          console.log(e)
          const firstName=e.target.firstName.value
          const lastName=e.target.lastName.value
          const email=e.target.email.value
          const password=e.target.password.value 
          const confirmPassword=e.target.confirmPassword.value 
          console.log(email,password,confirmPassword,firstName,lastName)
        //  password validation
          if(password !== confirmPassword){
            return toast('confirm password is not matching')
          }
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!regex.test(password)) {
           toast("password must be 8 character one number one uppercase later and one special character ")
          }

        //   create user 
       createUser(email,password)  
       .then(result=>{
        const user=result.user;
        console.log(user)
       })  
       .catch(error=>{
        console.log(error.message)
       })

    }
    return (
        <div className=' max-w-2xl  mx-auto  shadow-2xl pt-3 my-5 rounded-xl'>
            <form onSubmit={handleFormSubmit} className='px-5  py-2'>
                <h3 className='text-2xl font font-bold'>Real Estate Inquiry Form</h3>
                <p>Design custom lead capture forms that integrate with the Houzez CRM</p>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-mono font-semibold">Inquiry Type</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>

                    </label>

                </div>
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-lg font-mono font-semibold">Information</span>
                            
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>

                    </label>

                </div>
                <div className='flex justify-between gap-2 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-mono font-semibold">First Name</span>
                        </label>
                        <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-mono font-semibold">Last Name</span>
                        </label>
                        <input type="text" name='lastName' placeholder="First Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-mono font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className='flex justify-between gap-2 '>
                    <div className="form-control w-full">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-lg font-mono font-semibold">Location</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>

                            </select>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-mono font-semibold">Zip Code</span>
                        </label>
                        <input type="text" name='lastName' placeholder="Zip Code" className="input input-bordered" required />
                    </div>

                </div>
                <div>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-lg font-mono font-semibold">Property</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>

                        </select>
                    </label>
             
                </div>
                
                <div className='flex justify-between gap-2 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-mono font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-mono font-semibold">Confirm Password</span>
                        </label>
                        <input type="password" name='confirmPassword' placeholder="confirmPassword" className="input input-bordered" required />
                    </div>
                </div>
                    <button className='btb btn-info w-full bg-green-500  py-3 mt-2  rounded-lg '>Register</button>
               
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register; 