import Dashboard from './Dashboard'
import Appointments from './Appointments'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import useGetRoutes from '../api/useGetRoutes'
import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

import useGetMenu from '../api/useGetMenu'
import MyContext from '../Context/MyContext'
import LoadState from '../api/LoadState'

const App = () => {
    let { pages } = useContext(MyContext);
    
    let getRoutes = useGetRoutes();
    let getMenu = useGetMenu();
    
    useEffect(() => {getRoutes(); getMenu()}, []);

    if (pages === LoadState.Failure) {
        return <div>Algo salio mal...</div>
    }

    if (pages === LoadState.Loading || pages === undefined) {
        return <div>Cargando...</div>
    }

    return (
        <div className='app'>
            <ul className="navbar">
                {
                    pages.map(page => <li><Link key={page.id} to={page.direccion}>{page.titulo}</Link></li>)
                }
            </ul>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reservas" element={<Appointments />} />
            </Routes>
        </div>
    )
}

export default App;