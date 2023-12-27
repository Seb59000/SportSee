import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home.jsx';
import APISelection from './pages/APISelection/APISelection.jsx';
import MockSelection from './pages/mockSelection/MockSelection.jsx';
import './style/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mock/:id" element={<Home />} />
        <Route path="/profil" element={<MockSelection />} />
        <Route path="/reglage" element={< APISelection />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);