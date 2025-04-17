/**
 * @description MDI 영역
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import Icon from 'app/shared/modules/OIcon';
import ImageButton from '../modules/OImageButton';
import { OverlayPanel } from 'primereact/overlaypanel';

function Mdi() {
  // OverlayPanel
  const mdilistOverlay0 = useRef(null);

  return (
    <>
      <div className="div-tablist">
        <div className="m-mdi">
          <ul className="defaults">
            <li>
              <a href="javascript:" title="홈" className="link o-icon _home" /* aria-current="page" */><span className="label">홈</span></a>
            </li>
          </ul>

          <ul className="lists">
            <li>
              <a href="javascript:" className="link"><span className="label">원화현수송신청</span></a>
              <ImageButton label="화면잠금" icon="mdi-lock" />
              <ImageButton label="닫기" icon="close" />
            </li>
            <li>
              <a href="javascript:" className="link" aria-current="page"><span className="label">외화보유현황</span></a>{/* 현재화면 .link[aria-current="page"] { @DEV } */}
              <ImageButton label="화면잠금" icon="mdi-lock-locked" />{/* 화면잠금 .ImageButton._mdi-lock-locked { @DEV } */}
              <ImageButton label="닫기" icon="close" />
            </li>
            <li>
              <a href="javascript:" className="link"><span className="label">자금현송명령부관리</span></a>
              <ImageButton label="화면잠금" icon="mdi-lock-locked" />{/* 화면잠금 .ImageButton._mdi-lock-locked { @DEV } */}
              <ImageButton label="닫기" icon="close" />
            </li>
            <li>
              <a href="javascript:" className="link" /* aria-current="page" */><span className="label">행내등기 신청제한 미인수내역</span></a>
              <ImageButton label="화면잠금" icon="mdi-lock" />
              <ImageButton label="닫기" icon="close" />
            </li>
          </ul>

          <ul className="controls">
            <li>
              <span className="link group">
                <span className="item">
                  <ImageButton label="&larr;" title="앞으로 스크롤" icon="arrow-left" />
                </span>
                <span className="item">
                  <ImageButton label="&rarr;" title="뒤로 스크롤" icon="arrow-right" />
                </span>
              </span>
            </li>
            <li>
              <button type="button" title="화면목록" className="link o-icon _menu-alt" onClick={(e) => mdilistOverlay0.current.toggle(e)}><span className="label">화면목록</span></button>
              <OverlayPanel className="o-overlaytoggle case-mdilist" ref={mdilistOverlay0}  unstyled appendTo={'self'} closeIcon={<Icon icon="popup-close" />} /* showCloseIcon */ closeOnEscape dismissable>
                <div className="layer-body">
                  <div className="m-mdi-list">
                    {/* <div className="data-empty"><p className="messages">열린 화면이 없습니다.</p></div> */}

                    <ul className="data-lists m-tabular">
                      <li className="row" role="button" tabIndex={0}>
                        <span className="cell scr-number">111111</span>
                        <span className="cell scr-name">
                          <span className="primary">행내등기 신청제한-14글자까지 보이도록</span>
                          <span className="binds">
                            <ImageButton label="화면잠금" icon="mdi-lock" />
                            <ImageButton label="닫기" icon="close" />
                          </span>
                        </span>
                      </li>
                      {[...Array(24)].map((e, idx) => (
                      <li className="row" role="button" tabIndex={0}>
                        <span className="cell scr-number">444444</span>
                        <span className="cell scr-name">
                          <span className="primary">원화현수송신청</span>
                          <span className="binds">
                            <ImageButton label="화면잠금" icon="mdi-locked" />
                            <ImageButton label="닫기" icon="close" />
                          </span>
                        </span>
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </OverlayPanel>
            </li>
            <li>
              <button type="button" title="전체닫기" className="link o-icon _mdi-close"><span className="label">전체닫기</span></button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Mdi;
