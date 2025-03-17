/**
 * @description 퍼블리싱 가이드_페이지 인덱스
 */

// dependency
import React from 'react';

// components
import Navigation from '@pages/guide/Navigation';

function Pages() {
  // 윈도우팝업_SULM1010P0
  const handleOpenNewTab = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener, noreferrer, width=1400, height=700, left=200, top=150');
  };

  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>pages</h2>
          <div className="ov-html-list">
            <div className="group">
              <h3 className="title">00_공통</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>팝업</td>
                    <td>공통_04엑셀다운로드_GBCM1010P01</td>
                    <td>
                      <a target="_blank" href="../popup/GBCM1010P01">
                        src/pages/popup/GBCM1010P01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>공통_05부점조회_GBCM1000P01</td>
                    <td>
                      <a target="_blank" href="../popup/GBCM1000P01">
                        src/pages/popup/GBCM1000P01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>공통_06직원조회_GBCM1000P02</td>
                    <td>
                      <a target="_blank" href="../popup/GBCM1000P02">
                        src/pages/GBCM1000P02.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>공통_07로그인_DACM0000M01</td>
                    <td>
                      <a target="_blank" href="../login">
                        src/pages/DACM0000M01.tsx
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <h3 className="title">01_상시감시실시(준법감시역)</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>페이지</td>
                    <td>SULM1010M01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_01목록</td>
                    <td>
                      <a target="_blank" href="../html/SULM1010M01">
                        src/pages/html/SULM1010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업_윈도우</td>
                    <td>SULM1010P01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세</td>
                    <td>
                      <a href="#" onClick={() => handleOpenNewTab('../popup/SULM1010P01')}>
                        src/pages/popup/SULM1010P01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>SUCM1010P15_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청</td>
                    <td>
                      <a target="_blank" href="../popup/SUCM1010P15">
                        src/pages/popup/SUCM1010P15.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>
                      SUCM1010P31_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청_지도문선택
                    </td>
                    <td>
                      <a target="_blank" href="../popup/SUCM1010P31">
                        src/pages/popup/SUCM1010P31.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SULM3010M01_01상시감시실시(준법감시역)_03감시역업무배정관리</td>
                    <td>
                      <a target="_blank" href="../html/SULM3010M01">
                        src/pages/html/SULM3010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SULM4010M01_01상시감시실시(준법감시역)_04감시역업무대직관리</td>
                    <td>
                      <a target="_blank" href="../html/SULM4010M01">
                        src/pages/html/SULM4010M01.tsx
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <h3 className="title">03_상시감시현황(본부/영업점)</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>페이지</td>
                    <td>COHQ1010M01_03상시감시현황(본부영업점)_01보완요청현황_01목록</td>
                    <td>
                      <a target="_blank" href="../html/COHQ1010M01">
                        src/pages/html/COHQ1010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>COHQ1010P01_03상시감시현황(본부영업점)_01보완요청현황_02상세_01본부영업점(재보완시)</td>
                    <td>
                      <a target="_blank" href="../popup/COHQ1010P01_A">
                        src/pages/popup/COHQ1010P01_A.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>COHQ1010P01_03상시감시현황(본부영업점)_01보완요청현황_02상세_02감시역(재보완시)</td>
                    <td>
                      <a target="_blank" href="../popup/COHQ1010P01_B">
                        src/pages/popup/COHQ1010P01_B.tsx
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <h3 className="title">04_통합관리</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>페이지</td>
                    <td>UNAD1010M01_04통합관리_01경영평가</td>
                    <td>
                      <a target="_blank" href="../html/UNAD1010M01">
                        src/pages/html/UNAD1010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>UNAD2010M01_04통합관리_02상시감시일일보고서_01목록</td>
                    <td>
                      <a target="_blank" href="../html/UNAD2010M01">
                        src/pages/html/UNAD2010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>UNCM2010P21_04통합관리_03상시감시기간별보고서_02보고서작성(공통)_01선택전</td>
                    <td>
                      <a target="_blank" href="../popup/UNCM2010P21">
                        src/pages/popup/UNCM2010P21.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>UNAD5010M01_04통합관리_05감시현황통계</td>
                    <td>
                      <a target="_blank" href="../html/UNAD5010M01">
                        src/pages/html/UNAD5010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>UNAD9010M01_04통합관리_08공지사항업무가이드</td>
                    <td>
                      <a target="_blank" href="../html/UNAD9010M01">
                        src/pages/html/UNAD9010M01.tsx
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <h3 className="title">05_전자결재</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>팝업</td>
                    <td>ELCM1010P11_05전자결재_01미결재함_03결재진행내역</td>
                    <td>
                      <a target="_blank" href="../popup/ELCM1010P11">
                        src/pages/popup/ELCM1010P11.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>ELSA3010M01_05전자결재_03결재선관리</td>
                    <td>
                      <a target="_blank" href="../html/ELSA3010M01">
                        src/pages/html/ELSA3010M01.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>ELCM3010P01_05전자결재_03결재선관리_팝업</td>
                    <td>
                      <a target="_blank" href="../popup/ELCM3010P01">
                        src/pages/popup/ELCM3010P01.tsx
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="group">
              <h3 className="title">06_시스템관리</h3>
              <table>
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                  <col width="350px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>화면 타입</th>
                    <th>화면명</th>
                    <th>파일 경로</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>팝업</td>
                    <td>SYAD1010P02_06시스템관리_01감사항목관리_01상시감시지표목록_03상세팝업</td>
                    <td>
                      <a target="_blank" href="../popup/SYAD1010P02">
                        src/pages/popup/SYAD1010P02
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD1030M01_06시스템관리_01감사항목관리_03추가사항관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD1030M01">
                        src/pages/html/SYAD1030M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>팝업</td>
                    <td>SYAD1040P01_06시스템관리_01감사항목관리_04타시스템링크관리_02상세팝업</td>
                    <td>
                      <a target="_blank" href="../popup/SYAD1040P01">
                        src/pages/popup/SYAD1040P01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD2010M01_06시스템관리_02사용자관리_01사용자관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD2010M01">
                        src/pages/html/SYAD2010M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD3010M01_06시스템관리_03권한관리_01권한그룹관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD3010M01">
                        src/pages/html/SYAD3010M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD4010M01_06시스템관리_04메뉴관리_01메뉴관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD4010M01">
                        src/pages/html/SYAD4010M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD4020M01_06시스템관리_04메뉴관리_02메뉴권한그룹관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD4020M01">
                        src/pages/html/SYAD4020M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD6010M01_06시스템관리_06공휴일관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD6010M01">
                        src/pages/html/SYAD6010M01
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SYAD8030M01_06시스템관리_08기타관리_03평가기준관리</td>
                    <td>
                      <a target="_blank" href="../html/SYAD8030M01">
                        src/pages/html/SYAD8030M01
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
