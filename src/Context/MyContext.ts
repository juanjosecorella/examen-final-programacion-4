import { createContext } from "react"
import BusRoute from "../Models/BusRoute"
import Page from "../Models/Page"
import LoadState from "../api/LoadState"

type MyContextData = {
    routes: BusRoute[] | LoadState
    setRoutes: (routes: BusRoute[] | LoadState) => void
    pages: Page[] | LoadState
    setPages: (pages: Page[] | LoadState) => void
}

const MyContext = createContext<MyContextData>({
    routes: LoadState.Loading,
    setRoutes: () => {},
    pages: LoadState.Loading,
    setPages: () => {}
});

export default MyContext;