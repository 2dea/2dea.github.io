/**
 * @description MDI 영역
 */

// dependency
import React from 'react';

function Mdi() {
  return (
    <div className="div-tablist">
      <div className="m-mdi">
        <ul className="defaults">
          <li>
            <a href="javascript:" title="홈" className="link o-icon _home"><span className="label">홈</span></a>
          </li>
        </ul>

        <ul className="lists">
          <li>
            <a href="javascript:" className="link"><span className="label">원화현수송신청</span></a>
            <button type="button" title="닫기" className="o-image-button o-icon _close"><span className="label">닫기</span></button>
          </li>
          <li>
            <a href="javascript:" className="link" aria-current="page"><span className="label">외화보유현황</span></a>{/* 현재화면 .link[aria-current="page"] { @DEV } */}
            <button type="button" title="닫기" className="o-image-button o-icon _close" disabled><span className="label">닫기</span></button>
          </li>
          <li>
            <a href="javascript:" className="link"><span className="label">자금현송명령부관리</span></a>
            <button type="button" title="닫기" className="o-image-button o-icon _close" disabled><span className="label">닫기</span></button>{/* 화면잠금 .o-image-button._close[disabled] { @DEV } */}
          </li>
          <li>
            <a href="javascript:" className="link"><span className="label">행내등기 신청제한 미인수내역</span></a>
            <button type="button" title="닫기" className="o-image-button o-icon _close"><span className="label">닫기</span></button>
          </li>
        </ul>

        <ul className="controls">
          <li>
            <span className="link group">
              <span className="item">
                <button type="button" title="앞으로 스크롤" className="o-image-button o-icon _arrow-left"><span className="label">&larr;</span></button>
              </span>
              <span className="item">
                <button type="button" title="뒤로 스크롤" className="o-image-button o-icon _arrow-right"><span className="label">&rarr;</span></button>
              </span>
            </span>
          </li>
          <li>
            <button type="button" title="화면목록" className="link o-icon _menu-alt"><span className="label">화면목록</span></button>
          </li>
          <li>
            <button type="button" title="전체닫기" className="link o-icon _mdi-close"><span className="label">전체닫기</span></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mdi;
