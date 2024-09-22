import React, { useContext } from 'react';
import { AuthContext } from '../../MainContext/MainContext';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const {updateProfileInfo,user}=useContext(AuthContext)
    // const auth=auth
    const navigate=useNavigate()
    console.log(user)
     const handleUpdateForm=(e)=>{
        e.preventDefault()
        const name=e.target.name.value 
        const photoURL=e.target.photo.value 
        // console.log(name,photoURL)
        
        updateProfileInfo({
          displayName: name, photoURL:photoURL,
        })
        .then(()=>{
           
            navigate('/')
            e.target.reset()

            console.log('update')
        })
        .catch(error=>console.log(error.message))
     }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Update now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdateForm} className="card-body">
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                <label className="label">
                                  
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                                <label className="label">
                                  
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;