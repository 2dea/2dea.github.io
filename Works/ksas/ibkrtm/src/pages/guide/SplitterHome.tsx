/**
 * @description 퍼블리싱 가이드_스플릿터 인덱스
 */

// dependency
import React from 'react';

// components
import Navigation from '@pages/guide/Navigation';

function SplitterHome() {
  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>SPLITTER</h2>
          <div className="ov-html-list">
            <div className="group">
              <h3 className="title">Splitter</h3>
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
                    <td>SULM1010M01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_01목록_화면분할_가로</td>
                    <td>
                      <a target="_blank" href="../guide/Horizontal">
                        src/pages/guide/Horizontal.tsx
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>페이지</td>
                    <td>SULM1010M01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_01목록_화면분할_세로</td>
                    <td>
                      <a target="_blank" href="../guide/Vertical">
                        src/pages/guide/Vertical.tsx
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

export default SplitterHome;
