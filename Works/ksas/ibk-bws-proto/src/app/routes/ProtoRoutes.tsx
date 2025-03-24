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

// proto 관리자
import ADMAU0101M from 'app/pages/adm/ADMAU0101M'; // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
import ADMAU0201M from 'app/pages/adm/ADMAU0201M'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리

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
        { path: 'ING', element: <ING /> },
      ],
    },
    {
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMAU0101M', element: <ADMAU0101M /> },

        { path: 'ADMAU0201M', element: <ADMAU0201M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
