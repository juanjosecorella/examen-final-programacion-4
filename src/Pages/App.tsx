import Dashboard from './Dashboard'
import Appointments from './Appointments'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import useGetRoutes from '../api/useGetRoutes'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'

const App = () => {
    let getRoutes = useGetRoutes();
    
    useEffect(getRoutes, []);

    return (
        <div className='app'>
            <ul className="navbar">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="reservas">Reservas</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reservas" element={<Appointments />} />
            </Routes>
        </div>
    )
}

export default App;