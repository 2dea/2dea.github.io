/**
 * @description 공통 레이아웃
 */

// dependency
import { Outlet } from 'react-router';
import Header from './Header';
import Mdi from './Mdi';
import Footer from './Footer';

// components
// import Footer from '@layouts/Footer';
// import Header from '@layouts/Header';
// import Mdi from '@layouts/Mdi';

function Decorator() {
  return (
    <>
      <div id="Document" className="dom-wrapper">
        <Header />
        {/* <!-- /* Container { @DEV } --> */}
        <div role="main" id="Center" className="dom-main">
          <Mdi />

          {/* <!-- /* Primary { @DEV } --> */}
          <Outlet />
          {/* <!-- // Primary { @DEV } --> */}

        </div>
        {/* <!-- // Container { @DEV } --> */}
        <Footer />
      </div>
    </>
  );
}

export default Decorator;
