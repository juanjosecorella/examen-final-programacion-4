import LoadState from "./LoadState";
import ApiRoute from "./ApiRoute";
import { useState } from "react";

type GananciasResponse = {
    numero: number
}

const useGetGanancias = () => {
    let [ganancias, setGanancias] = useState<LoadState | GananciasResponse>(LoadState.Loading);

    return {
        getGanancias: (data: any) => {
            if (!data.rutaId) {
                setGanancias(LoadState.Failure);
            }

            fetch(`${ApiRoute}/Tiquete/Ganancias/${data.rutaId}`)
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(`Error: ${response.message}`)
                    setGanancias(LoadState.Failure)
                } else {
                    setGanancias({numero: response.numero});
                }
            })
            .catch(e => {
                    console.log(e);
                    setGanancias(LoadState.Failure);
                }
            )
        },
        ganancias: ganancias
    }
}

export default useGetGanancias;