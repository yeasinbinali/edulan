import React, { useContext } from 'react';
import './PrivateRoute.css';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner className='spinner' animation="grow" />
    }
    if(user && user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;