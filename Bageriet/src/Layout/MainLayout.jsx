import React from 'react';
import { Outlet } from 'react-router-dom';  
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/footer';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
