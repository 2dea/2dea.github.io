/**
 * @description 라우터 컴포넌트
 */

// dependency
import React from 'react';
import { useRoutes } from 'react-router';

// components
import Decorator from '@layouts/Decorator';

import SUBTMPL from '@pages/test/SUBTMPL'; // subtmpl
import POPTMPL from '@pages/test/POPTMPL'; // poptmpl
import TMPL from '@pages/test/TMPL'; // tmpl

import ADMAU0101M from '@pages/adm/ADMAU0101M'; // 관리자 > 권한관리 > 생성관리


// import Layout from '@layouts/Layout';

// // 퍼블리싱
// import Pages from '@pages/guide/Pages'; // 퍼블리싱 가이드
// import SplitterHome from '@pages/guide/SplitterHome';
// import Horizontal from '@pages/guide/Horizontal';
// import Vertical from '@pages/guide/Vertical';
// import Header from '@pages/guide/Header';
// import Typography from '@pages/guide/Typography';
// import Buttons from '@pages/guide/Buttons';
// import Icons from '@pages/guide/Icons';
// import Forms from '@pages/guide/Forms';
// import Table from '@pages/guide/Table';
// import Alert from '@pages/guide/Alert';
// import Popup from '@pages/guide/Popup';

// // 공통
// import GBCM1010P01 from '@pages/popup/GBCM1010P01'; // 공통_04엑셀다운로드_GBCM1010P01
// import GBCM1000P01 from '@pages/popup/GBCM1000P01'; // 공통_05부점조회_GBCM1000P01
// import GBCM1000P02 from '@pages/popup/GBCM1000P02'; // 공통_06직원조회_GBCM1000P02
// import DACM0000M01 from '@pages/html/DACM0000M01'; // 공통_07로그인_DACM0000M01

// // 01_상시감시실시(준법감시역)
// import SULM1010M01 from '@pages/html/SULM1010M01'; // SULM1010M01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_01목록(준법감시역)
// import SULM1010P01 from '@pages/popup/SULM1010P01'; // SULM1010P01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세
// import SUCM1010P15 from '@pages/popup/SUCM1010P15'; // SUCM1010P15_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청
// import SUCM1010P31 from '@pages/popup/SUCM1010P31'; // SUCM1010P31_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청_지도문선택
// import SULM3010M01 from '@pages/html/SULM3010M01'; // SULM3010M01_01상시감시실시(준법감시역)_03감시역업무배정관리
// import SULM4010M01 from '@pages/html/SULM4010M01'; // SULM4010M01_01상시감시실시(준법감시역)_04감시역업무대직관리

// // 03_상시감시현황(본부/영업점)
// import COHQ1010M01 from '@pages/html/COHQ1010M01'; // COHQ1010M01_03상시감시현황(본부영업점)_01보완요청현황_01목록
// import COHQ1010P01_A from '@pages/popup/COHQ1010P01_A'; // COHQ1010P01_03상시감시현황(본부영업점)_01보완요청현황_02상세_01본부영업점(재보완시)
// import COHQ1010P01_B from '@pages/popup/COHQ1010P01_B'; // COHQ1010P01_03상시감시현황(본부영업점)_01보완요청현황_02상세_02감시역(재보완시)

// // 04_통합관리
// import UNAD1010M01 from '@pages/html/UNAD1010M01'; // UNAD1010M01_04통합관리_01경영평가
// import UNAD2010M01 from '@pages/html/UNAD2010M01'; // UNAD2010M01_04통합관리_02상시감시일일보고서_01목록
// import UNCM2010P21 from '@pages/popup/UNCM2010P21'; // UNCM2010P21_04통합관리_03상시감시기간별보고서_02보고서작성(공통)_01선택전
// import UNAD5010M01 from '@pages/html/UNAD5010M01'; // UNAD5010M01_04통합관리_05감시현황통계
// import UNAD9010M01 from '@pages/html/UNAD9010M01'; // UNAD9010M01_04통합관리_08공지사항업무가이드

// // 05_전자결재
// import ELCM1010P11 from '@pages/popup/ELCM1010P11'; // ELCM1010P11_05전자결재_01미결재함_03결재진행내역
// import ELSA3010M01 from '@pages/html/ELSA3010M01'; // ELSA3010M01_05전자결재_03결재선관리
// import ELCM3010P01 from '@pages/popup/ELCM3010P01'; // ELCM3010P01_05전자결재_03결재선관리_팝업

// // 06_시스템관리
// import SYAD1010P02 from '@pages/popup/SYAD1010P02'; // SYAD1010P02_06시스템관리_01감사항목관리_01상시감시지표목록_03상세팝업
// import SYAD1030M01 from '@pages/html/SYAD1030M01'; // SYAD1030M01_06시스템관리_01감사항목관리_03추가사항관리
// import SYAD1040P01 from '@pages/popup/SYAD1040P01'; // SYAD1040P01_06시스템관리_01감사항목관리_04타시스템링크관리_02상세팝업
// import SYAD2010M01 from '@pages/html/SYAD2010M01'; // SYAD2010M01_06시스템관리_02사용자관리_01사용자관리
// import SYAD3010M01 from '@pages/html/SYAD3010M01'; // SYAD3010M01_06시스템관리_03권한관리_01권한그룹관리
// import SYAD4010M01 from '@pages/html/SYAD4010M01'; // SYAD4010M01_06시스템관리_04메뉴관리_01메뉴관리
// import SYAD4020M01 from '@pages/html/SYAD4020M01'; // SYAD4020M01_06시스템관리_04메뉴관리_02메뉴권한그룹관리
// import SYAD6010M01 from '@pages/html/SYAD6010M01'; // SYAD6010M01_06시스템관리_06공휴일관리
// import SYAD8030M01 from '@pages/html/SYAD8030M01'; // SYAD8030M01_06시스템관리_08기타관리_03평가기준관리


function GlobalRoutes() {
  return useRoutes([
    {
      path: '/test',
      // element: <Layout />,
      children: [
        { path: 'SUBTMPL', element: <SUBTMPL /> },
      ],
    },
    {
      path: '/test',
      element: <Decorator />,
      children: [
        { path: 'POPTMPL', element: <POPTMPL /> },
        { path: 'TMPL', element: <TMPL /> },
      ],
    },
    {
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMAU0101M', element: <ADMAU0101M /> },
      ],
    },
    // {
    //   path: '/',
    //   children: [{ path: 'login', element: <DACM0000M01 /> }],
    // },
    // {
    //   path: '/guide',
    //   children: [
    //     { path: 'pages', element: <Pages /> },
    //     { path: 'splitter-home', element: <SplitterHome /> },
    //     { path: 'horizontal', element: <Horizontal /> },
    //     { path: 'vertical', element: <Vertical /> },
    //     { path: 'header', element: <Header /> },
    //     { path: 'typography', element: <Typography /> },
    //     { path: 'buttons', element: <Buttons /> },
    //     { path: 'icons', element: <Icons /> },
    //     { path: 'forms', element: <Forms /> },
    //     { path: 'table', element: <Table /> },
    //     { path: 'alert', element: <Alert /> },
    //     { path: 'popup', element: <Popup /> },
    //   ],
    // },
    // {
    //   path: '/popup',
    //   children: [
    //     { path: 'SULM1010P01', element: <SULM1010P01 /> },
    //     { path: 'GBCM1010P01', element: <GBCM1010P01 /> },
    //     { path: 'GBCM1000P01', element: <GBCM1000P01 /> },
    //     { path: 'GBCM1000P02', element: <GBCM1000P02 /> },
    //     { path: 'SUCM1010P15', element: <SUCM1010P15 /> },
    //     { path: 'SUCM1010P31', element: <SUCM1010P31 /> },
    //     { path: 'COHQ1010P01_A', element: <COHQ1010P01_A /> },
    //     { path: 'COHQ1010P01_B', element: <COHQ1010P01_B /> },
    //     { path: 'UNCM2010P21', element: <UNCM2010P21 /> },
    //     { path: 'ELCM1010P11', element: <ELCM1010P11 /> },
    //     { path: 'ELCM3010P01', element: <ELCM3010P01 /> },
    //     { path: 'SYAD1010P02', element: <SYAD1010P02 /> },
    //     { path: 'SYAD1040P01', element: <SYAD1040P01 /> },
    //   ],
    // },
    // {
    //   path: '/html',
    //   element: <Layout />,
    //   children: [
    //     { path: 'SULM1010M01', element: <SULM1010M01 /> },
    //     { path: 'SULM3010M01', element: <SULM3010M01 /> },
    //     { path: 'SULM4010M01', element: <SULM4010M01 /> },
    //     { path: 'COHQ1010M01', element: <COHQ1010M01 /> },
    //     { path: 'UNAD1010M01', element: <UNAD1010M01 /> },
    //     { path: 'UNAD2010M01', element: <UNAD2010M01 /> },
    //     { path: 'UNAD5010M01', element: <UNAD5010M01 /> },
    //     { path: 'UNAD9010M01', element: <UNAD9010M01 /> },
    //     { path: 'ELSA3010M01', element: <ELSA3010M01 /> },
    //     { path: 'SYAD1030M01', element: <SYAD1030M01 /> },
    //     { path: 'SYAD2010M01', element: <SYAD2010M01 /> },
    //     { path: 'SYAD3010M01', element: <SYAD3010M01 /> },
    //     { path: 'SYAD4010M01', element: <SYAD4010M01 /> },
    //     { path: 'SYAD4020M01', element: <SYAD4020M01 /> },
    //     { path: 'SYAD6010M01', element: <SYAD6010M01 /> },
    //     { path: 'SYAD8030M01', element: <SYAD8030M01 /> },
    //   ],
    // },
  ]);
}

export default GlobalRoutes;
