import { ReactNode, useState } from "react";
import BusRoute from "../Models/BusRoute";
import Page from "../Models/Page";
import LoadState from "../api/LoadState";
import MyContext from "./MyContext";

const MyContextProvider = ({children}: {children: ReactNode}) => {
    let [routes, setRoutes] = useState<BusRoute[] | LoadState>(LoadState.Loading);
    let [pages, setPages] = useState<Page[] | LoadState>(LoadState.Loading);

    return (
        <MyContext.Provider value={{
            routes: routes,
            setRoutes: setRoutes,
            pages: pages,
            setPages: setPages
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;