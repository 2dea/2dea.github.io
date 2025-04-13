/**
 * @description 공통 푸터 컴포넌트
 */

// dependency
import React from 'react';

// components
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

function Footer() {
  return (
    <>

      <aside role="complementary" id="Aside" className="dom-aside">
        <hr className="g-overlay" />

        <div className="roles">
          ASIDE
        </div>
      </aside>

      <footer role="contentinfo" id="Footer" className="dom-footer">
        <hr className="g-overlay" />

        <div className="roles">
          <address className="div-info">
            <strong className="copyright"><span className="words copy">Copyright <span className="date">2025</span></span> <span className="words corp">IBK(Industrial Bank of Korea).</span> <span className="words right">All rights reserved.</span></strong>
          </address>
        </div>
      </footer><i aria-hidden="true"></i>

    </>
  );
}

export default Footer;
