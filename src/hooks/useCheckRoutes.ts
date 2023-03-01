import { matchRoutes, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const routesAgree: { path: string }[] = [
    { path: "/home" },
    { path: "/saveone" },
    { path: "/recipes" },
]

export const useCheckRoutes = () => {
    const location = useLocation();
    const tabRoute = matchRoutes(routesAgree, location)
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!tabRoute) return;
        routesAgree.map((x, i) => {
            // return (tabRoute[0].route.path.includes(x.path))
            return (tabRoute[0].route.path.includes(x.path) && setValue(i))
        })
    }, [])

    return { indexValue: value }
}
