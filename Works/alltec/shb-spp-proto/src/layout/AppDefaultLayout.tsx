// import Header from './Header';
// import Mdi from './Mdi';
// import Footer from './Footer';

import DomHeader from "./DomHeader";

import React from "react";
import Icon, { StarFilled } from "@ant-design/icons";
import SppButton from "../pages/spp/component/Button/SppButton";

function AppDefaultLayout() {
  return (
    <>
      <div id="Document" className="dom-wrapper type-proto">

        {/* <DomHeader /> */}

        <div className="dom-header">
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
        </div>

        <div id="Container" className="dom-container">
          <div className="roles">

            {/* <DivMdiTabs /> */}

            {/* <Outlet /> */}

            <div className="role-tablist"></div>

            <div role="main" id="Main" className="role-main">
              <div className="nodes" data-node-no="0">
                <div className="div-header">
                  <div className="prime"></div>

                  <div className="extra"></div>
                </div>

                <div className="div-center">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <div className="primary">
                            <h2 className="o-heading level2"><span className="label">계약내역</span></h2>
                          </div>

                          <div className="secondary">
                            <div className="o-length">
                              <span className="head">전체</span>
                              <em className="data">
                                <span className="value">8</span>
                                <span className="units">건</span>
                              </em>
                            </div>

                            <div className="m-binds">
                              <div className="group">
                                {/* <SppButton label="엑셀​다운로드" icon="excel-download" /> */}
                                <SppButton size="middle" variant="solid" icon={<StarFilled />} className="normal">엑셀​다운로드</SppButton>
                                {/* <Button type="default" size="middle">Primary Button</Button> */}
                                <Icon type="StarFilled" style={{ fontSize: '16px', color: '#08c' }} />
                                <StarFilled />
                              </div>

                              <div className="group">
                                <SppButton color="default" variant="solid">저장</SppButton>
                                <SppButton color="primary" variant="solid">저장</SppButton>
                                <SppButton color="danger" variant="solid">저장</SppButton>
                                <SppButton color="blue" variant="solid">저장</SppButton>
                                <SppButton color="purple" variant="solid">저장</SppButton>
                                <SppButton color="cyan" variant="solid">저장</SppButton>
                                <SppButton color="green" variant="solid">저장</SppButton>
                                <SppButton color="magenta" variant="solid">저장</SppButton>
                                <SppButton color="pink" variant="solid">저장</SppButton>
                                <SppButton color="red" variant="solid">저장</SppButton>
                                <SppButton color="orange" variant="solid">저장</SppButton>
                                <SppButton color="yellow" variant="solid">저장</SppButton>
                                <SppButton color="volcano" variant="solid">저장</SppButton>
                                <SppButton color="geekblue" variant="solid">저장</SppButton>
                                <SppButton color="lime" variant="solid">저장</SppButton>
                                <SppButton color="gold" variant="solid">저장</SppButton>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main _primary">
                          <div className="o-grid-table p-datatable">
                            <div className="container p-datatable-wrapper">
                              <table className="p-datatable-table p-datatable-scrollable-table">
                                <colgroup>
                                  <col className="wdth-10" />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자등록번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약상태</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약기간</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지폐수수료</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">주화수수료</span></div></th>
                                    <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                    <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록정보</span></div></th>
                                    <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지정보</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지사유</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={18}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                  {[...Array(24)].map((e, idx) => (
                                    <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                      <td>{idx + 1}</td>
                                      <td className="g-start">(수도권)물류운송대행계약서</td>
                                      <td className="g-start">(주)앤비앤코퍼레이션</td>
                                      <td>999-99-99999</td>
                                      <td>정상</td>
                                      <td><span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span></td>
                                      <td className="g-end">1,000,000,000</td>
                                      <td className="g-end">1,000,000,000</td>
                                      <td>정상</td>
                                      <td>결재반려</td>
                                      <td>10000</td>
                                      <td>홍길동</td>
                                      <td><span className="o-digit type-date">2025-12-25</span></td>
                                      <td>10000</td>
                                      <td>홍길동</td>
                                      <td><span className="o-digit type-date">2025-12-25</span></td>
                                      <td className="g-start"></td>
                                      <td className="g-start"></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <DomFooter /> */}

      </div>
    </>
  );
}

export default AppDefaultLayout;
