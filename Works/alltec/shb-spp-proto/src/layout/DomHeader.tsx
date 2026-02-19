import React, { useEffect, useMemo, useRef, useState } from "react";

function DomHeader() {
  return (
    <>
        <header id="Header" className="dom-header">
          통합 결재 목록
          신청
          조회사유 등록/결재
          정보보호 현황
          정보보호 점검
          개인(신용)정보보호
          클라우드 이용보고
          개인(신용)정보 조회권한관리
          기타
          운영관리
          <i className="o-symbol">search</i>
        </header>

        <nav id="Navigator" className="dom-nav">
          통합 결재 목록
          신청
          조회사유 등록/결재
          정보보호 현황
          정보보호 점검
          개인(신용)정보보호
          클라우드 이용보고
          개인(신용)정보 조회권한관리
          기타
          운영관리
          <i className="o-symbol">search</i>
        </nav>
    </>
  );
}

export default DomHeader;
