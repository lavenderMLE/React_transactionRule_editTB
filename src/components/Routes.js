// importing component
import React, { memo } from "react";

import { Routes , Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";





// code ....

const Routing = () => {
    return (
        <Routes>                        
            <Route path="/" element={ <Landing />} />
        </Routes>
    );
}

export default memo(Routing);
