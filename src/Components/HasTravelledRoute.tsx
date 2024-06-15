import useHasTravelled from "../api/useHasTravelled"
import LoadState from "../api/LoadState"
import BusRoute from "../Models/BusRoute"
import { ResourceLoadState } from "../api/Resource"
import { useEffect } from "react"

import { useForm } from 'react-hook-form'

let routes: BusRoute[] = [
    {
        id: 1,
        startingPoint: "Lugar 1",
        endPoint: "Lugar 2",
        price: 500
    },
    {
        id: 2,
        startingPoint: "Lugar 2",
        endPoint: "Lugar 3",
        price: 1000
    }
]

const HasTravelled = () => {
    let { hasTravelled, getHasTravelled } = useHasTravelled();

    let { handleSubmit, register } = useForm();

    return (
        <div className="has-travelled-area">
            <form onSubmit={handleSubmit(getHasTravelled)}>
                Consultar personas que han viajado en la ruta
                <select {...register("ruta")}>
                    {
                        routes.map(route => 
                            <option key={route.id} value={route.id}>
                                {route.startingPoint}
                            </option>
                        )
                    }
                </select>
                {
                    hasTravelled?.state === ResourceLoadState.Failure
                    ? "algo ha salido mal..."
                    : hasTravelled?.state === ResourceLoadState.Loading
                    ? "cargando..."
                    : `Han viajado ${hasTravelled?.value} en la ruta.`
                }    
                <button type="submit">Consultar</button>
            </form>
        </div>
    )
}

export default HasTravelled;