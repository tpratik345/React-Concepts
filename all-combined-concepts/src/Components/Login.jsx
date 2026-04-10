import React, { useEffect } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleLogin() {
        let obj = {
            name: 'Pratik',
            role: 'admin'
        }
        login(obj);
        navigate('/dashboard');
    }

    return (
        <>
            <div>Login Page!</div>
            <button onClick={handleLogin}>Login Now!</button>
        </>
    )
}

export default Login