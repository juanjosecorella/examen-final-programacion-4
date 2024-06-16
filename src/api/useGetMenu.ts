import { useContext } from "react";
import ApiRoute from "./ApiRoute";
import LoadState from "./LoadState";
import MyContext from "../Context/MyContext";

const useGetMenu = () => {
    let { setPages } = useContext(MyContext);
    
    return () => {  
        fetch(`${ApiRoute}/Menu`)
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                alert(`Error: ${response.message}`);
                setPages(LoadState.Failure);
            } else {
                setPages(response);
            }
        })
        .catch(e => {
            console.log(e);
            setPages(LoadState.Failure);
        })
    }
}

export default useGetMenu;