import { useForm } from "react-hook-form";
import LoadState from "../api/LoadState";
import { useContext } from "react";
import MyContext from "../Context/MyContext";
import useGetGanancias from "../api/useGetGanancias";

const Ganancias = () => {
    let { register, handleSubmit } = useForm();

    const { routes } = useContext(MyContext);
    const { ganancias, getGanancias } = useGetGanancias();

    if (routes === LoadState.Failure) {
        return <div>Algo salio mal...</div>
    }

    if (routes === LoadState.Loading) {
        return <div>Cargando</div>
    }

    return (
        <div className="ganancias-area">
            <form onSubmit={handleSubmit(getGanancias)}>

                Consultar ganancias de la ruta:
                <select {...register("rutaId")}>
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
                    ganancias === LoadState.Failure
                    ? "algo ha salido mal..."
                    : ganancias === LoadState.Loading
                    ? ""
                    : `Se han acumulado ${ganancias.numero}₡ en total en la ruta.`
                }    
            </form>
        </div>
    )
}

export default Ganancias;