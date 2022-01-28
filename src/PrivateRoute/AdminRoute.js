import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className=" flex justify-center items-center py-72 bg-current">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-300"></div>
        </div>
    }
    if (user.email && admin) {
        return children;
    }
    else {
        Swal.fire('Admin usage only', 'Login with admin account & try again')
        return <Navigate to="/" state={{ from: location }} />
    }

};

export default AdminRoute;