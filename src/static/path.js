import Landing from "../pages/Landing" ;

export const HEADER_ROUTERS = [
    {
        id : '',
        path : "/",
        element : <Landing />,
        sub_router : [
            {
                path :"/index"
            },
            {
                path : "index1"
            }
        ]
    },
]