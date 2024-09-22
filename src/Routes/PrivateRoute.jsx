

import React, { useContext } from 'react';
import { AuthContext } from '../MainContext/MainContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <p><span className="loading loading-spinner loading-lg"></span>
</p>
    }
        
    
    if(user){
          return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;