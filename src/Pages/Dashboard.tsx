import HasTravelled from '../Components/HasTravelledRoute';
import HasTravelledDateRange from '../Components/HasTravelledDateRange';
import Ganancias from '../Components/Ganancias';
import GananciasDateRange from '../Components/GananciasDateRange';


const Dashboard = () => {

    return (
        <>
            <h1>Dashboard</h1>
            <HasTravelled />
            <HasTravelledDateRange />
            <Ganancias />
            <GananciasDateRange />
        </>
    )
}

export default Dashboard;