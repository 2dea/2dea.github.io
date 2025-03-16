/**
 * @description 공통 레이아웃
 */

// dependency
import React from 'react';
import { Outlet } from 'react-router';

// components
import Header from '@layouts/Header';
import Mdi from '@layouts/Mdi';
import Footer from '@layouts/Footer';

function Decorator() {
  return (
    <div id="Document" className="dom-wrapper">
      <Header />
      {/* <!-- /* Container { @DEV } --> */}
      <div role="main" id="Center" className="dom-main">
        <Mdi />

        {/* <!-- /* Primary { @DEV } --> */}
        <div className="roles" data-div-role="0">
          <Outlet />
        </div>
        {/* <!-- // Primary { @DEV } --> */}

      </div>
      {/* <!-- // Container { @DEV } --> */}
      <Footer />
    </div>
  );
}

export default Decorator;
