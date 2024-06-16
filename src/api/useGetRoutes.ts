import { useContext } from "react"
import MyContext from "../Context/MyContext"

import ApiRoute from "./ApiRoute"
import LoadState from "./LoadState";

const useGetRoutes = () => {
    let { setRoutes } = useContext(MyContext);
    
    return () => { 
        fetch(`${ApiRoute}/Rutas`)
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                alert(`Error: ${response.message}`)
                setRoutes(LoadState.Failure);
            } else {
                setRoutes(response);
            }
        })
        .catch(e => {
            if (e.message) {
                alert(`Error: ${e.message}`)
            }
            console.log(e);
            setRoutes(LoadState.Failure);
        })
    }
}

export default useGetRoutes;