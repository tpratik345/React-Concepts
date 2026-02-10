import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const user = useContext(UserContext);

    const handleLogin = () => {
        user?.setUser({name: 'Pratik', email:'pratik@gmail.com'})
    }
    const handleLogout = () => {
        user?.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Hi {user.user?.name} with {user.user?.email}</div>
        </div>
    )
}

export default User