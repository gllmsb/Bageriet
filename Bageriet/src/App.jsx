import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { MainLayout } from './Layout/mainLayout';
import './App.css'
import { Notfound } from './pages/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




