/**
 * @description SUBTMPL
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function SUBTMPL() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '통합관리' }, { label: '공지사항/업무가이드' }];

  // 텍스트박스
  const [value, setValue] = useState<string>('');

  return (
    <div id="Document" className="dom-wrapper">

      <header role="banner" id="Header" className="dom-header">
        <div role="navigation" className="div-skip">
          <span className="o-ogp"><img src="../../../public/images/img_ogp.alt.png" alt="" /></span>

          <ul>
            <li><a id="Go-SkipMain" href="#Center"><strong>주요 콘텐츠로 이동</strong></a></li>
          </ul>
        </div>

        <div className="roles">
          <div className="div-root">
            <span className="logo"><span className="inner"><em className="symbol">IBK</em></span></span>
            <strong className="system"><span className="inner">업무지원시스템</span></strong>
          </div>

          <div className="div-nav-global">
            <ul>
              <li><a href="javascript:" className="link"><span className="label">원화정산</span></a></li>
              <li><a href="javascript:" className="link" aria-current="true"><span className="label">중도용지용도품(영업점)</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">중도용지용도품(본부)</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">행내등기우편물</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">안전관리</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">비상계획안전기획</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">영업지원</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">수수료관리</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">관리자</span></a></li>
            </ul>
          </div>

          {/* <div className="div-account">
            <strong className="data">
              <span className="name">홍길동</span>
              <span className="div">(<span>04123</span>)</span>
            </strong>
            <span className="binds">
              <button type="button" className="signout"><i aria-hidden="true"></i><span className="inner">로그아웃</span></button>
            </span>
          </div>

          <div className="div-bind">
            <span className="item mymenu"><button type="button" title="My 메뉴"><i aria-hidden="true"></i><span className="inner">My메뉴</span></button></span>
            <span className="item menu-show"><a id="Go-Navigator" href="#Navigator" title="전체메뉴 보이기"><i aria-hidden="true"></i><span className="inner">전체메뉴</span></a></span>
          </div> */}

          <div className="div-search">
            <div className="fields">
              <span className="o-form _input">
                <input type="text" placeholder="Settings Search" value="" className="bind" /><i aria-hidden="true"></i>
                <span className="inner-binds">
                  <button type="button" title="Search" className="o-button type-icon"><i className="o-symbol style-outlined" aria-hidden="true">search</i><span className="label">Search</span></button>
                </span>
              </span>
            </div>
          </div>
        </div>

        <hr className="g-overlay" />
      </header>

      <nav role="navigation" id="Navigator" className="dom-nav">
        <div className="div-tablist">
          <div className="m-tab">
            <ul>
              <li><a href="javascript:" className="link total"><span className="label">전체메뉴</span></a></li>
              <li><a href="javascript:" className="link person"><span className="label">마이메뉴</span></a></li>
            </ul>
          </div>
        </div>

        <div className="roles">
          <div className="div-nav-local">
            <ul>
              <li><a href="javascript:" className="link"><span className="label">menu</span></a></li>
              <li><a href="javascript:" className="link" aria-current="true"><span className="label">menu</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">menu</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">menu</span></a></li>
            </ul>
          </div>
        </div>

        <hr className="g-overlay" />
      </nav>

      {/* <!-- /* Container { @DEV } --> */}
      <div role="main" id="Center" className="dom-main">
        <div className="div-tablist">
          <div className="m-mdi m-tab">
            <ul>
              <li><a href="javascript:" title="대시보드" className="link root"><span className="label">대시보드</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">원화현수송신청</span></a></li>
              <li><a href="javascript:" className="link"><span className="label" aria-current="page">외화보유현황</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">자금현송명령부관리</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">행내등기 신청제한 미인수내역</span></a></li>
            </ul>
          </div>
        </div>

        {/* <!-- /* Primary { @DEV } --> */}
        <div className="roles" data-div-role="0">
          <div className="div-header">
            <div role="navigation" className="o-breadcrumb" aria-label="Breadcurmb trail">
              <span className="path">
                <span className="item"><span title="대시보드" className="label root">Home</span> <span className="sep">&gt;</span></span>
                <span className="item"><span className="label">DEPTH_LEVEL1</span> <span className="sep">&gt;</span></span>
                <span className="item"><span className="label">DEPTH_LEVEL2</span> <span className="sep">&gt;</span></span>
                <span className="item"><span className="label" aria-current="page">PAGE_TITLE</span></span>
              </span>
            </div>

            <div className="o-title">
              <h1 className="o-heading1">
                <span className="inner">Headline</span>
                <label className="o-check type-symbol style-favorite">
                  <input type="checkbox" value="" className="bind" /><i aria-hidden="true"></i>
                  <span className="label _hidden">마이메뉴</span>
                </label>
              </h1>
            </div>

            <div className="m-binds type-start">
              <span className="group">
                <span className="item"><button type="button" className="o-button"><span className="label">화면잠금</span></button></span>
                <span className="item"><button type="button" className="o-button"><span className="label">도움말</span></button></span>
              </span>
            </div>
          </div>

          {/* <!-- /* Contents { @DEV } --> */}
          <div className="div-contents">

            <div className="o-grid">
              <div className="column">
                PRIMARY CONTENTS

                <div class="test">
                  GRID
                </div>
              </div>

              <div className="column">
                SECONDARY CONTENTS
              </div>
            </div>

          </div>
          {/* <!-- // Contents { @DEV } --> */}

          <div className="div-footer">
            <div className="m-binds type-end">
              <span className="group">
                <span className="item"><button type="button" className="o-button"><span className="label">Cancel</span></button></span>
                <span className="item"><button type="button" className="o-button"><span className="label">Apply</span></button></span>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- // Primary { @DEV } --> */}

      </div>
      {/* <!-- // Container { @DEV } --> */}

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

    </div>
  );
}

export default SUBTMPL;
