import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <header className='default-layout-header'>
        <Header />
      </header>

      <main className='default-layout-main'>
        <Outlet />
      </main>

      <footer className='default-layout-footer'>
        <Footer />
      </footer>
    </div>

  );
};

export default DefaultLayout;