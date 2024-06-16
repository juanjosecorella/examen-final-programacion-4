import { createContext } from "react"
import BusRoute from "../Models/BusRoute"
import LoadState from "../api/LoadState"

type MyContextData = {
    routes: BusRoute[] | LoadState
    setRoutes: (routes: BusRoute[] | LoadState) => void
}

const MyContext = createContext<MyContextData>({
    routes: LoadState.Loading,
    setRoutes: () => {}
});

export default MyContext;