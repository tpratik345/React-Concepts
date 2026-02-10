import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const LoggedIn = () => {
    const [user, setUser] = useState<AuthUser | null>(null); // imp
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({
            name: 'Pratik',
            email: 'pratik@gmail.com'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in.' : 'logged out.'}</div>
            <div>Hi {user?.name} with {user?.email}</div>
        </div>
    )
}