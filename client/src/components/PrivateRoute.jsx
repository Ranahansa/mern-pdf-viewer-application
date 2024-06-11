import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to="/upload" />;
};

export default PrivateRoute;
