import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-200 p-4 text-center">
        <h1>Header</h1>
      </header>

      {/* Main content (Outlet) */}
      <main className="p-4">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-200 p-4 text-center">
        <p>Footer</p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Layout;
