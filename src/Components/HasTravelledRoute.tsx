import useHasTravelled from "../api/useHasTravelledRoute"
import LoadState from "../api/LoadState"
import { useContext } from "react"

import { useForm } from 'react-hook-form'
import MyContext from "../Context/MyContext"


const HasTravelled = () => {
    let { hasTravelled, getHasTravelled } = useHasTravelled();

    let { routes } = useContext(MyContext);

    let { handleSubmit, register } = useForm();

    if (routes === LoadState.Failure) {
        return <div>Algo salio mal...</div>
    }

    if (routes === LoadState.Loading) {
        return <div>Cargando</div>
    }

    return (
        <div className="has-travelled-area">
            <form onSubmit={handleSubmit(getHasTravelled)}>
                Consultar personas que han viajado en la ruta:
                <select {...register("id")}>
                    {
                        routes.map(route => 
                            <option key={route.id} value={route.id}>
                                {route.rutaSalida} - {route.rutaLlegada}
                            </option>
                        )
                    }
                </select>
                <button type="submit">Consultar</button>
                {
                    hasTravelled === LoadState.Failure
                    ? "algo ha salido mal..."
                    : hasTravelled === LoadState.Loading
                    ? ""
                    : `Han viajado ${hasTravelled.numero} en la ruta.`
                }    
            </form>
        </div>
    )
}

export default HasTravelled;