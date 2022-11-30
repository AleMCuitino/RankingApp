import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InfoApp from "../components/info-app/InfoApp";
import Home from "../views/home/Home"
import SingleApp from "../views/single-app/SingleApp";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                    <Route path="/:id" element={<InfoApp/>}></Route>
                
                <Route path="/singleapp" element={<SingleApp />}></Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
