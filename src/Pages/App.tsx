import Dashboard from './Dashboard'
import Appointments from './Appointments'
import './App.css'

import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reservas" element={<Appointments />} />
            </Routes>
        </div>
    )
}

export default App;