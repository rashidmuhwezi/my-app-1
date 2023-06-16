import React from 'react';
import './App.css';
import { Search } from './components/search';
import Home from './components/home';
import Landing  from './components/landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route element={<Search />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
  };

export default App;