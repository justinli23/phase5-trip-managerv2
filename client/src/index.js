import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Components/Home'
import TravelerPage from "./Components/TravelerPage";
import TripPage from "./Components/TripPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="travelers" element={<TravelerPage />} />
        <Route path="trips" element={<TripPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
