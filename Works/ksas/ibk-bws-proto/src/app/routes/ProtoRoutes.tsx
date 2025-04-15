/**
 * @description ProtoRoutes
 */

// dependency
import React from 'react';
import { useRoutes } from 'react-router';

// components
import Decorator from 'app/shared/layouts/Decorator';

// test
import SUBTMPL from 'app/pages/test/SUBTMPL'; // subtmpl
import POPTMPL from 'app/pages/test/POPTMPL'; // poptmpl
import TMPL from 'app/pages/test/TMPL'; // tmpl
import ING from 'app/pages/test/ING'; // ing

import LoadingBar from 'app/pages/test/LoadingBar'; // loading

// proto 공통
import CMP000401P from 'app/pages/cmp/CMP000401P'; // 공통 ~ (LP)이미지업로드
import CMP000501P from 'app/pages/cmp/CMP000501P'; // 공통 ~ (LP)직원조회
import CMP001101P from 'app/pages/cmp/CMP001101P'; // 공통 ~ (LP)이미지보기

// proto 관리자
import ADMCM0101M from 'app/pages/adm/ADMCM0101M'; // 관리자 > 코드관리 > 공통코드관리

import ADMPA0101M from 'app/pages/adm/ADMPA0101M'; // 관리자 > 인사정보 > 부점관리
import ADMPA0301M from 'app/pages/adm/ADMPA0301M'; // 관리자 > 인사정보 > 직원관리

import ADMAU0101M from 'app/pages/adm/ADMAU0101M'; // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
import ADMAU0201M from 'app/pages/adm/ADMAU0201M'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
import ADMAU0201P02 from 'app/pages/adm/ADMAU0201P02'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)관련화면매핑
import ADMAU0202M from 'app/pages/adm/ADMAU0202M'; // 관리자 > 권한관리 > 매핑관리 > (T)권한별 메뉴/팝업관리

import ADMAC0201M from 'app/pages/adm/ADMAC0201M'; // 관리자 > 권한위임 > 사용자별 권한관리

function ProtoRoutes() {
  return useRoutes([
    {
      path: '/test',
      children: [
        { path: 'SUBTMPL', element: <SUBTMPL /> },
        { path: 'LoadingBar', element: <LoadingBar /> },
      ],
    },
    {
      path: '/test',
      element: <Decorator />,
      children: [
        { path: 'POPTMPL', element: <POPTMPL /> },
        { path: 'TMPL', element: <TMPL /> },
        { path: 'ING', element: <ING /> },
      ],
    },
    {
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'CMP000401P', element: <CMP000401P /> },
        { path: 'CMP000501P', element: <CMP000501P /> },
        { path: 'CMP001101P', element: <CMP001101P /> },
      ],
    },
    {
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMCM0101M', element: <ADMCM0101M /> },

        { path: 'ADMPA0101M', element: <ADMPA0101M /> },
        { path: 'ADMPA0301M', element: <ADMPA0301M /> },

        { path: 'ADMAU0101M', element: <ADMAU0101M /> },
        { path: 'ADMAU0201M', element: <ADMAU0201M /> },
        { path: 'ADMAU0201P02', element: <ADMAU0201P02 /> },
        { path: 'ADMAU0202M', element: <ADMAU0202M /> },

        { path: 'ADMAC0201M', element: <ADMAC0201M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
