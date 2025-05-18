/**
 * @description ProtoRoutes
 */

// dependency
import React from 'react';
import { useRoutes } from 'react-router';

// components
import Decorator from     'app/shared/layouts/Decorator';

// test
import SUBTMPL from       'app/pages/test/SUBTMPL';     // SUBTMPL
import POPTMPL from       'app/pages/test/POPTMPL';     // POPTMPL
import TMPL from          'app/pages/test/TMPL';        // TMPL
import DEX from           'app/pages/test/DEX';         // DEX
import ING from           'app/pages/test/ING';         // ING

import DialogPopup from   'app/pages/test/DialogPopup'; // DialogPopup
import LoadingBar from    'app/pages/test/LoadingBar';  // LoadingBar
import FileUploads from   'app/pages/test/FileUploads'; // FileUploads

// proto 공통
import CMP000201P from    'app/pages/cmp/CMP000201P';   // 공통 ~ (LP)엑셀업로드
import CMP000301P from    'app/pages/cmp/CMP000301P';   // 공통 ~ (LP)파일업로드
import CMP000302P from    'app/pages/cmp/CMP000302P';   // 공통 ~ (LP)첨부파일
import CMP000401P from    'app/pages/cmp/CMP000401P';   // 공통 ~ (LP)이미지업로드
import CMP000501P from    'app/pages/cmp/CMP000501P';   // 공통 ~ (LP)직원조회
import CMP001101P from    'app/pages/cmp/CMP001101P';   // 공통 ~ (LP)이미지보기
import CMP001401P from    'app/pages/cmp/CMP001401P';   // 공통 ~ (LP)업체조회
import CMP001402P from    'app/pages/cmp/CMP001402P';   // 공통 ~ (LP)업체기본정보
import CMP001502P from    'app/pages/cmp/CMP001502P';   // 공통 ~ (LP)결재상세정보

// proto 중요용지·용도품(본부)
import HSPBT0101M from    'app/pages/hsp/HSPBT0101M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역
import HSPBT0101P01 from  'app/pages/hsp/HSPBT0101P01';     // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역 ~ (LP)인도취소
import HSPBT0301M from    'app/pages/hsp/HSPBT0301M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역
import HSPBT0301P01 from  'app/pages/hsp/HSPBT0301P01';     // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역 ~ (LP)부분취소
import HSPBT0201M from    'app/pages/hsp/HSPBT0201M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지자동배송인도
import HSPBT0401M from    'app/pages/hsp/HSPBT0401M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지일반인도
import HSPBT0601M from    'app/pages/hsp/HSPBT0601M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지임시저장분인도
import HSPBT0701M from    'app/pages/hsp/HSPBT0701M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송대상조회
import HSPBT0801M from    'app/pages/hsp/HSPBT0801M';       // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송명령
import HSPBT1001M from    'app/pages/hsp/HSPBT1001M';       // 중요용지·용도품(본부) > 영업점배송관리 > 용도품인도내역조회
import HSPBT1101M from    'app/pages/hsp/HSPBT1101M';       // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도
import HSPBT1101P01 from  'app/pages/hsp/HSPBT1101P01';     // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도     > 신청내역 ~ (LP)부분취소
import HSPBT1201M from    'app/pages/hsp/HSPBT1201M';       // 중요용지·용도품(본부) > 영업점배송관리 > 용도품일반인도
import HSPBT0901M from    'app/pages/hsp/HSPBT0901M';       // 중요용지·용도품(본부) > 영업점배송관리 > 용도품배송명령
import HSPBT1501M from    'app/pages/hsp/HSPBT1501M';       // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회
import HSPBT1501P01 from  'app/pages/hsp/HSPBT1501P01';     // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림발송
import HSPBT1501P02 from  'app/pages/hsp/HSPBT1501P02';     // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림설정
import HSPBT1601M from    'app/pages/hsp/HSPBT1601M';       // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목관리
import HSPBT1701M from    'app/pages/hsp/HSPBT1701M';       // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목정산확정
import HSPHS0101M from    'app/pages/hsp/HSPHS0101M';       // 중요용지·용도품(본부) > 본부재고관리   > 중요용지발주명세표
import HSPHS0201M from    'app/pages/hsp/HSPHS0201M';       // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청
import HSPHS0201P01 from  'app/pages/hsp/HSPHS0201P01';     // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청 ~ (LP)물품신청결재창

import HSPPC0201M from    'app/pages/hsp/HSPPC0201M';       // 중요용지·용도품(본부) > 대금정산 > 수입인지정산


// proto 영업지원
import BSSTI0101M from    'app/pages/bss/BSSTI0101M';   // 영업지원 > 연수원 > 연수원품목정보관리
import BSSTI0201M from    'app/pages/bss/BSSTI0201M';   // 영업지원 > 연수원 > 연수원품목입출고등록
import BSSTI0301M from    'app/pages/bss/BSSTI0301M';   // 영업지원 > 연수원 > 연수원품목입출고취소
import BSSTI0401M from    'app/pages/bss/BSSTI0401M';   // 영업지원 > 연수원 > 연수원입출고내역조회
import BSSTI0501M from    'app/pages/bss/BSSTI0501M';   // 영업지원 > 연수원 > 연수원품목재고조회

// proto 관리자
import ADMCM0101M from    'app/pages/adm/ADMCM0101M';   // 관리자 > 코드관리 > 공통코드관리

import ADMPA0101M from    'app/pages/adm/ADMPA0101M';   // 관리자 > 인사정보 > 부점관리
import ADMPA0201M from    'app/pages/adm/ADMPA0201M';   // 관리자 > 인사정보 > 팀정보관리
import ADMPA0301M from    'app/pages/adm/ADMPA0301M';   // 관리자 > 인사정보 > 직원관리
import ADMPA0301P01 from  'app/pages/adm/ADMPA0301P01'; // 관리자 > 인사정보 > 직원관리 ~ (LP)직무분장관리
import ADMPA0301P02 from  'app/pages/adm/ADMPA0301P02'; // 관리자 > 인사정보 > 직원관리 ~ (LP)변경이력
import ADMPA0401M from    'app/pages/adm/ADMPA0401M';   // 관리자 > 인사정보 > 외주직원관리

import ADMAU0101M from    'app/pages/adm/ADMAU0101M';   // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
import ADMAU0101P01 from  'app/pages/adm/ADMAU0101P01'; // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리 ~ (LP)상위메뉴선택
import ADMAU0102M from    'app/pages/adm/ADMAU0102M';   // 관리자 > 권한관리 > 생성관리 > (T)화면관리
import ADMAU0103M from    'app/pages/adm/ADMAU0103M';   // 관리자 > 권한관리 > 생성관리 > (T)팝업관리
import ADMAU0104M from    'app/pages/adm/ADMAU0104M';   // 관리자 > 권한관리 > 생성관리 > (T)권한관리
import ADMAU0201M from    'app/pages/adm/ADMAU0201M';   // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
import ADMAU0201P01 from  'app/pages/adm/ADMAU0201P01'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)화면매핑
import ADMAU0201P02 from  'app/pages/adm/ADMAU0201P02'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)관련화면매핑
import ADMAU0202M from    'app/pages/adm/ADMAU0202M';   // 관리자 > 권한관리 > 매핑관리 > (T)권한별 메뉴/팝업관리
import ADMAU0203M from    'app/pages/adm/ADMAU0203M';   // 관리자 > 권한관리 > 매핑관리 > (T)부점/부서별 권한관리
import ADMAU0204M from    'app/pages/adm/ADMAU0204M';   // 관리자 > 권한관리 > 매핑관리 > (T)사용자별 권한관리

import ADMAC0101M from    'app/pages/adm/ADMAC0101M';   // 관리자 > 권한위임 > 부점별 권한위임
import ADMAC0201M from    'app/pages/adm/ADMAC0201M';   // 관리자 > 권한위임 > 사용자별 권한관리

function ProtoRoutes() {
  return useRoutes([
    {
      path: '/test',
      children: [
        { path: 'LoadingBar',   element: <LoadingBar /> },
        { path: 'SUBTMPL',      element: <SUBTMPL /> },
      ],
    },
    {
      path: '/test',
      element: <Decorator />,
      children: [
        { path: 'FileUploads',  element: <FileUploads /> },
        { path: 'DialogPopup',  element: <DialogPopup /> },
        { path: 'POPTMPL',      element: <POPTMPL /> },
        { path: 'TMPL',         element: <TMPL /> },
        { path: 'DEX',          element: <DEX /> },
        { path: 'ING',          element: <ING /> },
      ],
    },
    { // 공통
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'CMP000201P',   element: <CMP000201P /> },
        { path: 'CMP000301P',   element: <CMP000301P /> },
        { path: 'CMP000302P',   element: <CMP000302P /> },
        { path: 'CMP000401P',   element: <CMP000401P /> },
        { path: 'CMP000501P',   element: <CMP000501P /> },
        { path: 'CMP001101P',   element: <CMP001101P /> },
        { path: 'CMP001401P',   element: <CMP001401P /> },
        { path: 'CMP001402P',   element: <CMP001402P /> },
        { path: 'CMP001502P',   element: <CMP001502P /> },
      ],
    },
    { // 중요용지·용도품(본부)
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'HSPBT0101M',     element: <HSPBT0101M /> },
        { path: 'HSPBT0101P01',   element: <HSPBT0101P01 /> },
        { path: 'HSPBT0301M',     element: <HSPBT0301M /> },
        { path: 'HSPBT0301P01',   element: <HSPBT0301P01 /> },
        { path: 'HSPBT0201M',     element: <HSPBT0201M /> },
        { path: 'HSPBT0401M',     element: <HSPBT0401M /> },
        { path: 'HSPBT0601M',     element: <HSPBT0601M /> },
        { path: 'HSPBT0701M',     element: <HSPBT0701M /> },
        { path: 'HSPBT0801M',     element: <HSPBT0801M /> },
        { path: 'HSPBT1001M',     element: <HSPBT1001M /> },
        { path: 'HSPBT1101M',     element: <HSPBT1101M /> },
        { path: 'HSPBT1101P01',   element: <HSPBT1101P01 /> },
        { path: 'HSPBT1201M',     element: <HSPBT1201M /> },
        { path: 'HSPBT0901M',     element: <HSPBT0901M /> },
        { path: 'HSPBT1501M',     element: <HSPBT1501M /> },
        { path: 'HSPBT1501P01',   element: <HSPBT1501P01 /> },
        { path: 'HSPBT1501P02',   element: <HSPBT1501P02 /> },
        { path: 'HSPBT1601M',     element: <HSPBT1601M /> },
        { path: 'HSPBT1701M',     element: <HSPBT1701M /> },
        { path: 'HSPHS0101M',     element: <HSPHS0101M /> },
        { path: 'HSPHS0201M',     element: <HSPHS0201M /> },
        { path: 'HSPHS0201P01',   element: <HSPHS0201P01 /> },

        { path: 'HSPPC0201M',     element: <HSPPC0201M /> },
      ],
    },
    { // 영업지원
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BSSTI0101M',   element: <BSSTI0101M /> },
        { path: 'BSSTI0201M',   element: <BSSTI0201M /> },
        { path: 'BSSTI0301M',   element: <BSSTI0301M /> },
        { path: 'BSSTI0401M',   element: <BSSTI0401M /> },
        { path: 'BSSTI0501M',   element: <BSSTI0501M /> },
      ],
    },
    { // 관리자
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMCM0101M',   element: <ADMCM0101M /> },

        { path: 'ADMPA0101M',   element: <ADMPA0101M /> },
        { path: 'ADMPA0201M',   element: <ADMPA0201M /> },
        { path: 'ADMPA0301M',   element: <ADMPA0301M /> },
        { path: 'ADMPA0301P01', element: <ADMPA0301P01 /> },
        { path: 'ADMPA0301P02', element: <ADMPA0301P02 /> },
        { path: 'ADMPA0401M',   element: <ADMPA0401M /> },

        { path: 'ADMAU0101M',   element: <ADMAU0101M /> },
        { path: 'ADMAU0101P01', element: <ADMAU0101P01 /> },
        { path: 'ADMAU0102M',   element: <ADMAU0102M /> },
        { path: 'ADMAU0103M',   element: <ADMAU0103M /> },
        { path: 'ADMAU0104M',   element: <ADMAU0104M /> },
        { path: 'ADMAU0201M',   element: <ADMAU0201M /> },
        { path: 'ADMAU0201P01', element: <ADMAU0201P01 /> },
        { path: 'ADMAU0201P02', element: <ADMAU0201P02 /> },
        { path: 'ADMAU0202M',   element: <ADMAU0202M /> },
        { path: 'ADMAU0203M',   element: <ADMAU0203M /> },
        { path: 'ADMAU0204M',   element: <ADMAU0204M /> },

        { path: 'ADMAC0101M',   element: <ADMAC0101M /> },
        { path: 'ADMAC0201M',   element: <ADMAC0201M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
