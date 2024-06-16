import { useForm } from "react-hook-form";
import LoadState from "../api/LoadState";
import useHasTravelledDateRange from "../api/useHasTravelledDateRange";

const HasTravelledDateRange = () => {
    let { register, handleSubmit } = useForm();

    let { getHasTravelled, hasTravelled } = useHasTravelledDateRange();    
    
    return (
        <div className="has-travelled-date-area">
            <form onSubmit={handleSubmit(getHasTravelled)}>

                Consultar personas que han viajado desde la fecha:
                <input type="date" {...register("fechaInicio", {
                    required: true
                })} />
                hasta la fecha:
                <input type="date" {...register("fechaFin", {
                    required: true
                })} />
                <button type="submit">Consultar</button>
                {
                    hasTravelled === LoadState.Failure
                    ? "algo ha salido mal..."
                    : hasTravelled === LoadState.Loading
                    ? ""
                    : `Han viajado ${hasTravelled.numero} en total.`
                }    
            </form>
        </div>
    )
}

export default HasTravelledDateRange;