/**
 * @description 공통 푸터 컴포넌트
 */

// dependency
import React from 'react';

// components
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Footer() {
  return (
    <footer className="ibk-sys-footer">
      <div className="inner">
        <div className="copyright">Copyrightⓒ2024 IBK(Industrial Bank of Korea). All rights reserved.</div>
        <div className="cscenter">
          <dl>
            <dt>전산문의</dt>
            <dd>시스템관리자 3456, 4610</dd>
          </dl>
          <dl>
            <dt>업무문의</dt>
            <dd>
              <div className="col-fixed form w-184">
                <div className="p-inputgroup search">
                  <InputText placeholder="담당자 검색" />
                  <Button className="btn-ico reset" />
                  <Button className="btn-ico search" />
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
