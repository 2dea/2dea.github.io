import React, { useEffect, useMemo, useRef, useState } from "react";

import SppBreadcrumb from "@/pages/spp/component/Button/SppBreadcrumb";
import RoleMainHeaderTitle from "@/layout/RoleMainHeaderTitle";
import RoleMainHeaderFavorite from "@/layout/RoleMainHeaderFavorite";
import RoleMainHeaderManual from "@/layout/RoleMainHeaderManual";

import SppButton from "@/pages/spp/component/Button/SppButton";

function TmpTsProg() {
  return (
    <>
              <div className="nodes" data-node-no="0">
                <div className="div-header">
                  <div className="prime">
                    <SppBreadcrumb itemsArray={['조회사유등록결재', '등록', '전일조회사유등록']} />

                    <div className="m-title">
                      <RoleMainHeaderTitle label="전일조회사유등록" />

                      <div className="utile _user">
                        <RoleMainHeaderFavorite render={true} />

                        <RoleMainHeaderManual render={true} />
                      </div>
                    </div>
                  </div>

                  <div className="extra">
                    <div className="m-binds type-start">
                      <div className="group">
                        {/* <CommonButton label="알림전송" className="_lined-secondary" />
                        <CommonButton label="공지사항" className="_lined-secondary" />
                        <CommonButton label="결재선변경관리" className="_lined-secondary" />
                        <CommonButton label="결재바로가기" className="_lined-secondary" /> */}
                        <SppButton color="green" variant="filled">적정</SppButton>
                        <SppButton color="default" variant="outlined">저장</SppButton>
                        <SppButton color="geekblue" variant="outlined">저장</SppButton>
                        <SppButton color="cyan" variant="outlined">저장</SppButton>
                        <SppButton color="volcano" variant="outlined">저장</SppButton>
                      </div>
                    </div>

                    <div className="m-binds type-end">
                      <div className="group _primary">
                        {/* <CommonButton label="업무지원반려" className="_lined-primary" />
                        <CommonButton label="업무지원결정" className="_lined-primary" />
                        <CommonButton label="삭제" className="_delete" />
                        <CommonButton label="취소" className="_cancel" />
                        <CommonButton label="결재요청" className="_solid-primary" /> */}
                        <SppButton color="red" variant="filled">부적정</SppButton>
                        <SppButton color="default" variant="filled">적정</SppButton>
                        <SppButton color="default" variant="solid">저장</SppButton>
                        <SppButton color="geekblue" variant="solid">저장</SppButton>
                        <SppButton color="cyan" variant="solid">저장</SppButton>
                        <SppButton color="volcano" variant="solid">저장</SppButton>
                      </div>
                    </div>
                  </div>
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
                                <SppButton color="default" variant="solid">저장</SppButton>
                                <SppButton color="default" variant="text">저장</SppButton>
                                <SppButton color="default" variant="link">저장</SppButton>
                                <button type="button"><span className="label">저장</span></button>
                                <SppButton color="danger" variant="text">저장</SppButton>
                                <SppButton color="danger" variant="link">저장</SppButton>
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
    </>
  );
}

export default TmpTsProg;
