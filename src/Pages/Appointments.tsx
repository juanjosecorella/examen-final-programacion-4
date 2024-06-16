import { useForm } from "react-hook-form";
import usePostAppointment from "../api/usePostAppointment";
import { useContext, useEffect } from "react";
import MyContext from "../Context/MyContext";
import LoadState from "../api/LoadState";

import { useState } from "react";
import useGetPrecio from "../api/useGetPrecio";

const Appointments = () => {
    let { routes } = useContext(MyContext);

    const { handleSubmit, register, reset } = useForm();
    const postAppointment = usePostAppointment(reset);

    let [selectedRouteId, setSelectedRouteId] = useState<number>(0);
    let { precio, getPrecio } = useGetPrecio();

    useEffect(() => {
        if (routes === LoadState.Failure || routes === LoadState.Loading) return;
        setSelectedRouteId(routes[0].id)
    }, [routes])

    useEffect(() => {
        if (routes === LoadState.Failure || routes === LoadState.Loading) return;
        const route = routes.find(route => route.id === selectedRouteId);
        if (!route) return;

        getPrecio({salida: route.rutaSalida, destino: route.rutaLlegada});
    }, [selectedRouteId])

    if (routes === LoadState.Failure) {
        return <div>Algo salio mal...</div>
    }

    if (routes === LoadState.Loading) {
        return <div>Cargando...</div>
    }
    
    return (
        <>
            <h1>Reservas</h1>
            <form onSubmit={handleSubmit(postAppointment)}>
                <div className="form-area">
                    <label>Fecha</label>
                    <input type="date" {...register("fecha", {
                        required: true
                    })}></input>
                </div>
                <div className="form=area">
                <select {...register("rutaId", {
                    required: true
                })} onChange={(e) => setSelectedRouteId(Number(e.target.value))}>
                    {
                        routes.map(route => 
                            <option key={route.id} value={route.id}>
                                {route.rutaSalida} - {route.rutaLlegada}
                            </option>
                        )
                    }
                </select>
                </div>
                <div>Precio: {precio === LoadState.Failure ? "algo salio mal" : precio === LoadState.Loading ? "cargando..." : precio.precio} ₡</div>
                <button type="submit">Comprar</button>
            </form>
        </>
    )
}

export default Appointments;