/**
 * @description 공통 레이아웃
 */

// dependency
import React from 'react';
import { Outlet } from 'react-router';

// components
import Header from '@components/Header';
import Footer from '@components/Footer';

function Layout() {
  return (
    <div className="ibk-sys-wrap">
      <div className="ibk-sys-cover">
        <Header />
        <main className="ibk-sys-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
