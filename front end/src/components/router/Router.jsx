import React from 'react';
import Home from '../../pages/home/Home.jsx';
import APISelection from '../../pages/APISelection/APISelection.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<APISelection />} />
                <Route path="/:mock/:id" element={<Home />} />
                <Route path="*" element={<APISelection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;