import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { Link, Outlet } from 'react-router-dom';

function Home() {
  const { logout } = useAuth();

  return (
    <>
      <div>Home Page!</div>
      {/* <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate({pathname: '/dashboard', search: `?sort=latest`,})}>Dashboard</button>
      <button onClick={() => navigate('dashboard')}>Dashboard</button>
      <button onClick={() => navigate('about')}>About</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/about'}>About</Link> */}
    </>

  )
}

export default Home