import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppBreadcrumb from "@/pages/spp/component/Breadcrumb/SppBreadcrumb";
import RoleMainHeaderTitle from "@/layout/RoleMainHeaderTitle";
import RoleMainHeaderFavorite from "@/layout/RoleMainHeaderFavorite";
import RoleMainHeaderManual from "@/layout/RoleMainHeaderManual";

import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";

import SppButton from "@/pages/spp/component/Button/SppButton";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";

import { AutoComplete, Badge, Tabs } from "antd";

function TmpTsProg() {
  return (
    <>
              <div className="nodes" data-node-no="0">
                <div className="div-header">
                  <div className="prime">
                    <SppBreadcrumb itemsArray={['조회사유등록결재', '등록', '전일조회사유등록']} />

                    <div className="m-title">
                      <RoleMainHeaderTitle label={`전일조회사유등록`} />

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
                        <SppButton color="green" variant="filled" specName="filled-status-80">적정</SppButton>
                        <SppButton color="default" variant="outlined" specName="normal">저장</SppButton>
                        <SppButton color="geekblue" variant="outlined" specName="lined-1">저장</SppButton>
                        <SppButton color="cyan" variant="outlined" specName="lined-2">저장</SppButton>
                        <SppButton color="volcano" variant="outlined" specName="lined-3">저장</SppButton>
                      </div>
                    </div>

                    <div className="m-binds type-end">
                      <div className="group _primary">
                        {/* <CommonButton label="업무지원반려" className="_lined-primary" />
                        <CommonButton label="업무지원결정" className="_lined-primary" />
                        <CommonButton label="삭제" className="_delete" />
                        <CommonButton label="취소" className="_cancel" />
                        <CommonButton label="결재요청" className="_solid-primary" /> */}
                        <SppButton color="red" variant="filled" specName="filled-status-20">부적정</SppButton>
                        <SppButton color="default" variant="filled" specName="filled-status-00">적정</SppButton>
                        <SppButton color="default" variant="solid" specName="inquire">저장</SppButton>
                        <SppButton color="geekblue" variant="solid" specName="solid-1">저장</SppButton>
                        <SppButton color="cyan" variant="solid" specName="create">저장</SppButton>
                        <SppButton color="volcano" variant="solid" specName="solid-3">저장</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="div-center">
                  {/* <Tabs className="m-tabs">
                    <Tabs.TabPane tab="Tab 1" key="item-1" children={<>Content 1</>} />
                    <Tabs.TabPane tab="Tab 2" key="item-2">
                      Content 2
                    </Tabs.TabPane>
                  </Tabs> */}

                  <Tabs
                    type="card"
                    className="m-tabs type-1"
                    defaultActiveKey="2"
                    items={[
                      {
                        key: '1',
                        label: <><span className="label">미결재내역</span></>,
                        children: (
                          <>
                            <div>탭패널 1</div>
                          </>
                        ),
                      },
                      {
                        key: '2',
                        // label: <>반려내역</>,
                        label: <><span className="label">반려내역</span> <Badge showZero={true} count={1000} /></>,
                        children: (
                          <>
                            <div>탭패널 2</div>

                            <Tabs
                              type="line"
                              className="m-tabs type-2"
                              defaultActiveKey="1"
                              items={[
                                {
                                  key: '1',
                                  label: <><span className="label">미결재내역</span></>,
                                  children: (
                                    <>
                                      <div>탭패널 2-1</div>
                                    </>
                                  ),
                                },
                                {
                                  key: '2',
                                  // label: <>반려내역</>,
                                  label: <><span className="label">반려내역</span> <Badge showZero={true} count={44} /></>,
                                  children: (
                                    <>
                                      <div>탭패널 2-2</div>
                                    </>
                                  ),
                                },
                              ]}
                            />
                          </>
                        ),
                      },
                    ]}
                  />

                  <SppAutoComplete placeholder="" width="50" className="mode-required" />

                  <AutoComplete className="      mode-required         aaaaaaaaa bbbbbbbbbbbbb           cccccccccccccc    ddddd    " />

                  <div className="m-grid">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel required={true} wrapper="header" />

                            <div className="main">
                              <SppDatePicker placeholder="" width="80" className="mode-required" picker="date" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`직원`} required={true} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" value={`[88888888] 제갈공명`} width="80" className="mode-required" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={true} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" value={`[4444] 디지털금융센터`} width="90" className="mode-required" />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton color="default" variant="solid" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="m-section">
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
                          </div>
                        </div>

                        <div className="main">
                          <div className="o-data-form">
                            <div className="table-wrapper">
                              <table className="table">
                                <colgroup>
                                  <col className="head" />
                                  <col className="data" />
                                  <col className="head" />
                                  <col className="data" />
                                  <col className="head" />
                                  <col className="data" />
                                </colgroup>

                                <tbody>
                                  <tr>
                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      AutoComplete
                                    </th>
                                    <td colSpan={1}>
                                      <SppAutoComplete placeholder="" className="mode-required" />
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      SppButton
                                    </th>
                                    <td colSpan={5}>
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="m-section">
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
                                <SppButton specName="inquire" className="eeeeeeeeeeeeee">저장</SppButton>
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
