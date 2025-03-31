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
import LOADING from 'app/pages/test/LOADING'; // loading
import ING from 'app/pages/test/ING'; // ing

// proto 관리자
import ADMCM0101M from 'app/pages/adm/ADMCM0101M'; // 관리자 > 코드관리 > 공통코드관리

import ADMPA0101M from 'app/pages/adm/ADMPA0101M'; // 관리자 > 인사정보 > 부점관리
import ADMPA0301M from 'app/pages/adm/ADMPA0301M'; // 관리자 > 인사정보 > 직원관리

import ADMAU0101M from 'app/pages/adm/ADMAU0101M'; // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
import ADMAU0201M from 'app/pages/adm/ADMAU0201M'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
import ADMAU0202M from 'app/pages/adm/ADMAU0202M'; // 관리자 > 권한관리 > 매핑관리 > (T)권한별 메뉴/팝업관리

function ProtoRoutes() {
  return useRoutes([
    {
      path: '/test',
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
        { path: 'LOADING', element: <LOADING /> },
        { path: 'ING', element: <ING /> },
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
        { path: 'ADMAU0202M', element: <ADMAU0202M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
