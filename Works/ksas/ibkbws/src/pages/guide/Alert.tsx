// @ts-nocheck
/**
 * @description 퍼블리싱 가이드_얼럿 컴포넌트
 */

// dependency
import React, { useRef } from 'react';

// components
import Navigation from '@pages/guide/Navigation';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

function Alert() {
  const confirm1 = () => {
    confirmDialog({
      group: 'headless',
    });
  };

  const confirm2 = () => {
    confirmDialog({
      group: 'headless',
    });
  };

  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>ALERT</h2>
          <div className="wrap">
            <ConfirmDialog
              group="headless"
              content={({ headerRef, contentRef, footerRef, hide, message }) => (
                <div className="u-alert">
                  <div className="alert-head" ref={headerRef}>
                    {/* @desc 필요시 주석 해제 후 사용  */}
                    {/* <h3>타이틀</h3> */}

                    <Button
                      icon="pi"
                      className="btn-close"
                      onClick={(event) => {
                        hide(event);
                      }}
                    />
                  </div>
                  <div className="alert-body text-center" ref={contentRef}>
                    <p>
                      텍스트입니다.
                      <br />
                      텍스트입니다.
                    </p>
                    <p className="warn">텍스트입니다.</p>
                  </div>
                  <div className="alert-foot" ref={footerRef}>
                    <Button
                      label="취소"
                      onClick={(event) => {
                        hide(event);
                      }}
                      className="btn-text secondary blue-line"
                    />
                    <Button
                      label="확인"
                      onClick={(event) => {
                        hide(event);
                      }}
                      className="btn-text secondary blue-fill"
                    />
                  </div>
                </div>
              )}
            />

            <Button onClick={confirm1} icon="pi" label="얼럿창 열기" className="btn-text primary blue-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
