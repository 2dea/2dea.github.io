// @ts-nocheck
/**
 * @description 퍼블리싱 가이드_얼럿 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import Navigation from '@pages/guide/Navigation';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function Popup() {
  // 모달1
  const [visible, setVisible] = useState<boolean>(false);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="확인" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  // 모달2
  const [visible2, setVisible2] = useState<boolean>(false);
  const footerContent2 = (
    <div className="u-modal-footer space">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible2(false)} />
      <Button label="확인" className="btn-text primary blue-fill" onClick={() => setVisible2(false)} autoFocus />
    </div>
  );

  // 모달3
  const [visible3, setVisible3] = useState<boolean>(false);
  const footerContent3 = (
    <div className="u-modal-footer divide">
      <div className="flex">
        <Button label="저장" className="btn-text primary blue-line" disabled onClick={() => setVisible3(false)} />
      </div>
      <div className="flex">
        <Button
          label="점검필(관리자)"
          className="btn-text primary blue-fill"
          onClick={() => setVisible3(false)}
          autoFocus
        />
        <Button
          label="재보완등록"
          className="btn-text primary blue-fill"
          disabled
          onClick={() => setVisible3(false)}
          autoFocus
        />
      </div>
    </div>
  );

  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>Popup</h2>
          <div className="wrap">
            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  Popup / width: 480px / button default
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * max-height: 90%가 넘어가면 스크롤Y 발생
                  </em>
                </h3>
                <>
                  <Button label="팝업 열기" onClick={() => setVisible(true)} className="btn-text primary blue-fill" />
                  <Dialog
                    className="u-type-modal"
                    header="팝업 480px"
                    visible={visible}
                    style={{ width: '480px' }}
                    onHide={() => setVisible(false)}
                    footer={footerContent}
                  >
                    <div className="u-window border">
                      <div className="grid">
                        <div className="col-12">
                          <div className="win-panel">
                            <p style={{ height: '1000px' }}>팝업 컨텐츠</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">Popup / width: 800px / button space</h3>
                <>
                  <Button label="팝업 열기" onClick={() => setVisible2(true)} className="btn-text primary blue-fill" />
                  <Dialog
                    className="u-type-modal"
                    header="팝업 800px"
                    visible={visible2}
                    style={{ width: '800px' }}
                    onHide={() => setVisible2(false)}
                    footer={footerContent2}
                  >
                    <div className="u-window border">
                      <div className="grid">
                        <div className="col-12">
                          <div className="win-panel">
                            <p style={{ height: '400px' }}>팝업 컨텐츠</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">Popup / width: 1400px / button divide</h3>
                <>
                  <Button label="팝업 열기" onClick={() => setVisible3(true)} className="btn-text primary blue-fill" />
                  <Dialog
                    className="u-type-modal"
                    header="팝업 1400px"
                    visible={visible3}
                    style={{ width: '1400px' }}
                    onHide={() => setVisible3(false)}
                    footer={footerContent3}
                  >
                    <div className="u-window border">
                      <div className="grid">
                        <div className="col-12">
                          <div className="win-panel">
                            <p style={{ height: '400px' }}>팝업 컨텐츠</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog>
                </>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
