import { useState } from 'react'
import HasTravelled from '../Components/HasTravelled';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <>
            <h1>Dashboard</h1>
            <HasTravelled />
            
            <Link to="reservar">Ir a Reservas</Link>
        </>
    )
}

export default Dashboard;