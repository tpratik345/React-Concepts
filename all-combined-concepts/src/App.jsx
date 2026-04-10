import './App.css'
import { lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import Dashboard from './Components/Dashboard'
// import Home from './Components/Home'
// import About from './Components/About'
// import Login from './Components/Login'
// import Unathorized from './Components/Unathorized'
// import Admin from './Components/Admin'
import ProtectedRoute from './Components/ProtectedRoute'
import withLogger from './Components/HOC/withLogger';
import { useAuth } from './auth/AuthContext';
import { useTheme } from './theme/ThemeContext';

function App() {
  const Home = lazy(() => import('./Components/Home'));
  const Dashboard = lazy(() => import('./Components/Dashboard'));
  const About = lazy(() => import('./Components/About'))
  const Login = lazy(() => import('./Components/Login'))
  const Admin = lazy(() => import('./Components/Admin'))
  const Unathorized = lazy(() => import('./Components/Unathorized'))

  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const NewComp = withLogger(Home);

  return (
    <>

      <nav>
        <Link to={'/'}>Home</Link> |{" "}
        <Link to={'/dashboard'}>Dashboard</Link> |{" "}
        <Link to={'/about'}>About</Link> |{" "}
        <Link to={'/admin'}>Admin</Link> |{" "}
        <button onClick={logout}>Logout!</button>
        <button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
      </nav>

      <hr />

      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path='/' element={<NewComp />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route index path='/dashboard' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
          </Route>

          <Route element={<ProtectedRoute role='admin' />}>
            <Route path='/admin' element={<Admin />} />
          </Route>

          <Route path='/unathorized' element={<Unathorized />} />
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
