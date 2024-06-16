import { useState } from "react"
import LoadState from "./LoadState"
import ApiRoute from "./ApiRoute"

type PrecioResponse = {
    precio: number
}

const useGetPrecio = () => {
    const [precio, setPrecio] = useState<LoadState | PrecioResponse>(LoadState.Loading);
    
    return {
        getPrecio: (data: any) => {
            if (!data.salida || !data.destino) {
                setPrecio(LoadState.Failure);
                return;
            }

            fetch(encodeURI(`${ApiRoute}/Rutas/ObtenerPrecio?salida=${data.salida}&destino=${data.destino}`))
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    alert(`Error: ${response.message}`);
                    setPrecio(LoadState.Failure);
                } else {
                    setPrecio({precio: response.precio})
                }
            })
            .catch(e => {
                console.log(e);
                setPrecio(LoadState.Failure);
            })
        },
        precio: precio
    }
}

export default useGetPrecio;