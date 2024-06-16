import ApiRoute from "./ApiRoute";
import LoadState from "./LoadState";

import { useState } from "react";

type Response = {
    numero: number
}

const useHasTravelledDateRange = () => {
    const [hasTravelled, setHasTravelled] = useState<LoadState | Response>(LoadState.Loading);

    return {
        getHasTravelled: (data: any) => {
            fetch(`${ApiRoute}/Tiquete/TiquetesVendidosPorFechas?fechaInicio=${data.fechaInicio}&fechaFin=${data.fechaFin}`)
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(`Error: ${response.message}`)
                    setHasTravelled(LoadState.Failure)
                } else {
                    setHasTravelled({
                        numero: response.numero
                    })
                }
            })
            .catch(e => {
                console.log(e);
                setHasTravelled(LoadState.Failure)
            })
        },
        hasTravelled: hasTravelled
    }
}

export default useHasTravelledDateRange;