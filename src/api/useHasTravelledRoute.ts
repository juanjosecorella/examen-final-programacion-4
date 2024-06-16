import { useState } from 'react'
import ApiRoute from './ApiRoute';
import LoadState from './LoadState';

type Response = {
    numero: number
}

const useHasTravelled = () => {
    const [hasTravelled, setHasTravelled] = useState<LoadState | Response>(LoadState.Loading);
    
    return {
        getHasTravelled: (data: any) => {
            if (!data.id) {
                setHasTravelled(LoadState.Failure);
                return;
            }

            fetch(`${ApiRoute}/Tiquete/TiquetesVendidos/${data.id}`)
            .then(response => response.json())
            .then(response => {
                setHasTravelled({numero: response.numero});
            })
            .catch(e => {
                console.log(`Error: ${e}`)
                setHasTravelled(LoadState.Failure);
            }) 
        },
        hasTravelled: hasTravelled
    }
}

export default useHasTravelled;