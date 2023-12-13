import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home.jsx';
import './style/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cas={1} />} />
        <Route path="/profil" element={<Home cas={2} />} />
        <Route path="/reglage" element={<Home cas={3} />} />
        <Route path="/communaute" element={<Home cas={4} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);