/**
 * @description 퍼블리싱 가이드_헤더 컴포넌트
 */

// dependency
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// components
import Navigation from '@pages/guide/Navigation';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';

function Pages() {
  // 레이아웃 버튼
  const [isSwitched, setIsSwitced] = useState(false);
  const handlerChangeLayout = () => {
    setIsSwitced(!isSwitched);
  };

  // gnb depth3 open
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handlerOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 뎁스3 메뉴 열기
  const [checked, setChecked] = useState(true);

  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>HEADER</h2>
          <div className="wrap">
            <header className="ibk-sys-header ibk-sys-header-open">
              <div className="inner">
                {/* logo */}
                <h1 className="logo">
                  <Link to="/">
                    <span className="skip">IBK상시감시시스템</span>
                  </Link>
                </h1>

                {/* navi */}
                <nav className="gnb">
                  <div className="gnb-depth1">
                    <NavLink to="/" className="active">
                      상시감시실시(준법감시역)
                    </NavLink>
                    <NavLink to="/">상시감시실시(준법지원역)</NavLink>
                    <NavLink to="/">상시감시현황(본부/영업점)</NavLink>
                    <NavLink to="/">통합관리</NavLink>
                    <NavLink to="/">전자결재</NavLink>
                    <NavLink to="/">상시감시명령</NavLink>
                    <NavLink to="/">시스템관리</NavLink>
                  </div>
                  <div className="gnb-depth2">
                    <div className="gnb-depth2-wrap">
                      <div className="gnb-depth2-col">
                        <h2>상시감시실시(준법감시역)</h2>
                        <ul className="gnb-depth2-col-list">
                          <li className="selected">
                            <Link to="/">감시항목조회</Link>
                          </li>
                          <li>
                            <Link to="/">점검등록항목</Link>
                          </li>
                          <li>
                            <Link to="/">감시역업무배정관리</Link>
                          </li>
                          <li>
                            <Link to="/">감시역업무대직관리</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-depth2-col">
                        <h2>상시감시실시(준법지원역)</h2>
                        <ul className="gnb-depth2-col-list">
                          <li>
                            <Link to="/">감시항목조회</Link>
                          </li>
                          <li>
                            <Link to="/">점검등록항목</Link>
                          </li>
                          <li>
                            <Link to="/">지원역업무배정관리</Link>
                          </li>
                          <li>
                            <Link to="/">지원역업무대직관리</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-depth2-col">
                        <h2>상시감시현황(본부/영업점)</h2>
                        <ul className="gnb-depth2-col-list">
                          <li>
                            <Link to="/">보완요청현황</Link>
                          </li>
                          <li>
                            <Link to="/">지도현황</Link>
                          </li>
                          <li>
                            <Link to="/">지도현황</Link>
                          </li>
                          <li>
                            <Link to="/">상시감시 분석 REPORT</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-depth2-col">
                        <h2>통합관리</h2>
                        <ul className="gnb-depth2-col-list">
                          <li>
                            <Link to="/">경영평가</Link>
                          </li>
                          <li>
                            <Link to="/">상시감시일일보고서</Link>
                          </li>
                          <li>
                            <Link to="/">상시감시기간별보고서</Link>
                          </li>
                          <li>
                            <Link to="/">상시감시 분석 REPORT</Link>
                          </li>
                          <li>
                            <Link to="/">감시현황통계</Link>
                          </li>
                          <li>
                            <Link to="/">준법지원역 일일업무현황</Link>
                          </li>
                          <li>
                            <Link to="/">준법지원역 직무성과평가</Link>
                          </li>
                          <li>
                            <Link to="/">공지사항/업무가이드</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-depth2-col">
                        <h2>전자결재</h2>
                        <ul className="gnb-depth2-col-list">
                          <li>
                            <Link to="/">미결재함</Link>
                          </li>
                          <li>
                            <Link to="/">기결재함</Link>
                          </li>
                          <li>
                            <Link to="/">결재선관리</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="gnb-depth2-col">
                        <h2>시스템관리</h2>
                        <ul className="gnb-depth2-col-list">
                          <li>
                            <Link to="/">감사항목관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">상시감시항목록</Link>
                              <Link to="/" className="selected">
                                공통사항관리
                              </Link>
                              <Link to="/">추가사항관리</Link>
                              <Link to="/">타시스템링크관리</Link>
                              <Link to="/">지도문구관리</Link>
                            </div>
                          </li>
                          <li>
                            <Link to="/">사용자관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">사용자관리</Link>
                              <Link to="/">사용자접속이력조회</Link>
                            </div>
                          </li>
                          <li>
                            <Link to="/">관한관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">권한그룹관리</Link>
                              <Link to="/">권한그룹별사용자관리</Link>
                            </div>
                          </li>
                          <li>
                            <Link to="/">메뉴관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">메뉴관리</Link>
                              <Link to="/">메뉴권한관리</Link>
                            </div>
                          </li>
                          <li>
                            <Link to="/">공통코드관리</Link>
                          </li>
                          <li>
                            <Link to="/">공휴일관리</Link>
                          </li>
                          <li>
                            <Link to="/">시스템이력관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">배치실행이력조회</Link>
                              <Link to="/">배치실행관리</Link>
                              <Link to="/">알림이력조회</Link>
                              <Link to="/">알림메시지관리</Link>
                            </div>
                          </li>
                          <li>
                            <Link to="/">기타관리</Link>
                            <ToggleButton
                              checked={checked}
                              onChange={(e) => setChecked(e.value)}
                              className="btn-ico menu toggle"
                            />
                            <div className="gnb-depth3">
                              <Link to="/">DB작업관리</Link>
                              <Link to="/">메시지관리</Link>
                              <Link to="/">평가기준관리</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* admin */}
                <div className="admin">
                  <div className="admin-thumb">
                    <img src="/public/images/gnb/img_profile.svg" alt="썸네일" />
                  </div>
                  <div className="admin-name">김기업</div>
                  <div className="admin-account">(1620256 / 준법감시역 / 상시감시팀)</div>
                  <div className={`admin-layout${isSwitched ? '' : ' admin-layout-open'}`}>
                    <Button className="btn-ico layout split" icon="pi" onClick={handlerChangeLayout} />
                    <div className="admin-layout-list">
                      <Button className="btn-ico layout full" icon="pi" />
                      <Button className="btn-ico layout horizontal selected" icon="pi" />
                      <Button className="btn-ico layout vertical" icon="pi" />
                      <Button className="btn-ico layout close" icon="pi" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
