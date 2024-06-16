import { useForm } from "react-hook-form";
import LoadState from "../api/LoadState";
import { useContext } from "react";
import MyContext from "../Context/MyContext";
import useGetGananciasDateRange from "../api/useGetGananciasDateRange";

const GananciasDateRange = () => {
    let { register, handleSubmit } = useForm();

    const { routes } = useContext(MyContext);
    const { ganancias, getGanancias } = useGetGananciasDateRange();

    if (routes === LoadState.Failure) {
        return <div>Algo salio mal...</div>
    }

    if (routes === LoadState.Loading) {
        return <div>Cargando</div>
    }

    return (
        <div className="ganancias-area">
            <form onSubmit={handleSubmit(getGanancias)}>

                Consultar ganancias desde la fecha:
                <input type="date" {...register("fechaInicio", {
                    required: true
                })} />
                hasta la fecha:
                <input type="date" {...register("fechaFin", {
                    required: true
                })} />
                <button type="submit">Consultar</button>
                {
                    ganancias === LoadState.Failure
                    ? "algo ha salido mal..."
                    : ganancias === LoadState.Loading
                    ? ""
                    : `Se han acumulado ${ganancias.numero}₡ en total.`
                }    
            </form>
        </div>
    )
}

export default GananciasDateRange;