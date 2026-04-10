import React from 'react'
import { isAuthenticated } from '../services/commonFunctions'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';

function ProtectedRoute({ role }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' replace />
    }

    if (role && user.role !== role) {
        return <Navigate to='/unathorized' replace />
    }

    return <Outlet />;
}

export default ProtectedRoute