import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../MainContext/MainContext';

const Navbar = () => {
    
    const {user,logOut}=useContext(AuthContext)
    
    const signOutHandler=()=>{
       logOut()
       .then(() => {
        // Sign-out successful.
      })
       .catch(error=>console.log(error))
    }
  
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/profile'}>Update Profile</NavLink></li>
       {
        !user && <>
         <li><NavLink to={'/login'}>Login</NavLink></li>
         <li><NavLink to={'/register'}>Register</NavLink></li>
        </>
       }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Leisure Real Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="w-10 mr-3 ">
                   {
                    user?.photoURL ?  <img className='rounded-full'
                    
                    src={user?.photoURL} />
                    :
                    <img className='rounded-full'
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                   }
                </div>
                {
                    user ?  <button onClick={signOutHandler} className='btn btn-info'><p>Sign Out</p></button>
                    : <Link to={'/login'}><button className='btn btn-info'>Login</button></Link> 
                }
               
            </div>
        </div>
    );
};

export default Navbar;