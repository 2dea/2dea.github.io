import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SVGSymbolLogo from "@/assets/object/sym_logo.svg?react";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";
import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppButton from "@/pages/spp/component/Button/SppButton";

function DomHeader() {
  return (
    <>
        <header id="Header" className="dom-header">
          <div role="navigation" className="role-skip">
            <span className="o-ogp"><img src="/images/img_ogp.alt.png" alt="" /></span>

            <ul>
              <li><a id="SkipMain" href="#Main"><strong>주요 콘텐츠로 이동</strong></a></li>
            </ul>
          </div>

          <div className="roles">

            <div className="role-banner">
              <div className="div-branding">
                <a href="javascript:" className="system">
                  <span className="logo"><SVGSymbolLogo /></span>
                  <span className="name"><span className="root">신한</span> <span className="brand">정보보호포털</span></span>
                </a>

                {/* <div className="service">
                  <h2 className="name">로그인</h2>
                </div> */}
              </div>
            </div>

            <div className="role-header-util">
              <div className="prime">
                <div className="div-menu-search">
                  <div className="m-field">
                    <SppObjLabel label={`메뉴검색`} required={false} wrapper="header" />

                    <div className="main">
                      <SppAutoComplete placeholder="메뉴명을 입력해주세요" width="80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="extra">
                <div className="div-account">
                  <dl>
                    <dt><span className="label">사용자 정보</span></dt>
                    <dd>
                      <span className="user">
                        <span className="name">김신한</span>
                        <span className="pos">S프로(파트장)</span>
                        <span className="branch">디지털금융센터</span>
                        <em className="job">정보보호본부관리자</em>
                      </span>
                    </dd>
                    <dd>
                      <span className="signout">
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.signoutHeader} />} modelType="symbol" title="로그아웃"></SppButton>
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>

          <hr className="g-overlay" />
        </header>

        <nav id="Navigator" className="dom-nav">
          <div className="roles">

            <div className="role-nav-core">
              <div className="div-control">
                <div className="menu-toggle">
                  <label className="o-image-check _menu-toggle">
                    <input type="checkbox" title="메뉴영역 확장/축소" value="" className="bind" /><SppObjSymbol label={resLabel.toggleNavMenu} modelType="icon" />
                    <span className="label">메뉴 확장/축소</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="role-localnav">
              <div className="div-local depth-1">
                <ul className="navbar">
                  <li><a href="javascript:" className="link -hover"><span className="label">통합 결재 목록</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">신청</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">조회사유 등록/결재</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">정보보호 현황</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">정보보호 점검</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">개인(신용) 정보보호</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">클라우드 이용보고</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">개인(신용)정보 조회권한관리</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">기타</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">운영관리</span></a></li>
                </ul>
              </div>
            </div>

            <div className="role-subnav -hover">
              <div className="div-cascade depth-2">
                <ul className="navbar">
                  <li><a href="javascript:" className="link -hover"><span className="label">통합 결재 목록</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">신청</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">조회사유 등록/결재</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">정보보호 현황</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">정보보호 점검</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">개인(신용) 정보보호</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">클라우드 이용보고</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">개인(신용)정보 조회권한관리</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">기타</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">운영관리</span></a></li>
                </ul>
              </div>

              <div className="div-cascade depth-3 -hover">
                <ul className="navbar">
                  <li><a href="javascript:" className="link -hover"><span className="label">통합 결재 목록</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">신청</span></a></li>
                  <li><a href="javascript:" className="link -hover"><span className="label">조회사유 등록/결재</span></a></li>
                </ul>
              </div>
            </div>

          </div>

          <hr className="g-overlay" />
        </nav>
    </>
  );
}

export default DomHeader;
