import React from 'react';
import Contact from './contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/contact" element={<Contact />} />{' '}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
