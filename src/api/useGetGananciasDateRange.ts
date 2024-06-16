import LoadState from "./LoadState";
import ApiRoute from "./ApiRoute";
import { useState } from "react";

type GananciasResponse = {
    numero: number
}

const useGetGananciasDateRange = () => {
    const [ganancias, setGanancias] = useState<LoadState | GananciasResponse>(LoadState.Loading);

    return {
        getGanancias: (data: any) => {
            if (!data.fechaInicio || !data.fechaFin) {
                setGanancias(LoadState.Failure);
                return;
            }
            
            fetch(encodeURI(`${ApiRoute}/Tiquete/Ganancias?fechaInicio=${data.fechaInicio}&fechaFin=${data.fechaFin}`))
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(`Error: ${response.message}`)
                    setGanancias(LoadState.Failure);
                } else {
                    setGanancias({numero: response.numero});
                }
            })
            .catch(e => {
                console.log(e)
                setGanancias(LoadState.Failure);
            })
        },
        ganancias: ganancias
    }   
}

export default useGetGananciasDateRange;