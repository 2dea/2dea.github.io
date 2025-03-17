/**
 * @description SULM1010M01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_01목록
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';

// 탭메뉴 타이틀, 건수
const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">전체</span>
      <span className="result">99</span>
    </div>
  );
};
const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">미배정</span>
      <span className="result">10</span>
    </div>
  );
};
const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">미처리</span>
      <span className="result">5</span>
    </div>
  );
};

function SULM3010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '상시감시실시(준법감시역)' }, { label: '감시역업무배정관리' }];

  return (
    <div className="container">
      <div className="grid">
        <div className="col-12">
          <div className="panel">
            {/* snb */}
            <SubNavigation />

            {/* title */}
            <div className="u-title">
              <div className="inner">
                <PageTitle title={'감시역 업무 배정관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* search */}
            <div className="u-search">
              <div className="inner">
                <div className="grid">
                  <div className="col-12">
                    <div className="formgroup-inline">
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">기준일자</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <DatePicker />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">담당자</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">지역본부</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">소속부점</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-submit">
              <div className="inner">
                <Button label="엑셀다운로드" className="btn-download" icon="pi" />
                <Button label="조회" className="btn-text primary gray-fill" />
              </div>
            </div>

            {/* tabs */}
            <TabView className="u-tabs">
              <TabPanel headerTemplate={tab1HeaderTemplate}>
                <div className="grid">
                  <div className="col-6">
                    <div className="u-bunch">
                      <h3 className="u-sub-title">감사자 업무배정내역</h3>
                      <div className="inner">
                        <div className="num">
                          총<span>100</span>건
                        </div>
                      </div>
                    </div>
                    <div className="u-table">
                      <div className="inner">
                        <table>
                          <colgroup>
                            <col width="48px" />
                            <col width="110px" />
                            <col width="78px" />
                            <col width="78px" />
                            <col width="104px" />
                            <col width="104px" />
                            <col width="68px" />
                            <col width="132px" />
                            <col width="*" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>NO</th>
                              <th>본부명</th>
                              <th>배정구분</th>
                              <th>감사자</th>
                              <th>업무시작일</th>
                              <th>업무종료일</th>
                              <th>부점개수</th>
                              <th>최종변경직원</th>
                              <th>최종변경일시</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(10)].map((e, idx) => (
                              <tr key={e}>
                                <td>
                                  <span>{idx + 1}</span>
                                </td>
                                <td>
                                  <span>감동지역본부</span>
                                </td>
                                <td>
                                  <span>전체</span>
                                </td>
                                <td>
                                  <span>이기업</span>
                                </td>
                                <td>
                                  <span>2024-12-12</span>
                                </td>
                                <td>
                                  <span>2024-12-12</span>
                                </td>
                                <td>
                                  <span>30</span>
                                </td>
                                <td>
                                  <span>박변경</span>
                                </td>
                                <td>
                                  <span>2024-07-22 15:15:52</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-24">
                    <div className="u-bunch">
                      <h3 className="u-sub-title">업무배정</h3>
                      <div className="inner">
                        <div className="num">
                          총<span>3,000</span>건
                        </div>
                      </div>
                    </div>
                    <div className="u-table">
                      <div className="inner">
                        <table>
                          <colgroup>
                            <col width="48px" />
                            <col width="130px" />
                            <col width="130px" />
                            <col width="130px" />
                            <col width="*" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </th>
                              <th>구분</th>
                              <th>코드</th>
                              <th>본부/부점명</th>
                              <th>배정구분</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-blue">
                              <td>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </td>
                              <td>
                                <span>지역본부</span>
                              </td>
                              <td>
                                <span>12345</span>
                              </td>
                              <td>
                                <span>강남지역본부</span>
                              </td>
                              <td>
                                <span className="accordion accordion-open">
                                  미배정
                                  <Button icon="pi" className="btn-ico accordion" />
                                </span>
                              </td>
                            </tr>
                            <tr className="bg-skyblue">
                              <td>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </td>
                              <td>
                                <span>지역본부</span>
                              </td>
                              <td>
                                <span>12345</span>
                              </td>
                              <td>
                                <span>강남지역본부</span>
                              </td>
                              <td>
                                <span>미배정</span>
                              </td>
                            </tr>
                            <tr className="bg-skyblue">
                              <td>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </td>
                              <td>
                                <span>지역본부</span>
                              </td>
                              <td>
                                <span>12345</span>
                              </td>
                              <td>
                                <span>강남지역본부</span>
                              </td>
                              <td>
                                <span>미배정</span>
                              </td>
                            </tr>
                            {[...Array(7)].map((e, idx) => (
                              <tr>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <span>지역본부</span>
                                </td>
                                <td>
                                  <span>12345</span>
                                </td>
                                <td>
                                  <span>강남지역본부</span>
                                </td>
                                <td>
                                  <span className="accordion">
                                    미배정
                                    <Button icon="pi" className="btn-ico accordion" />
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel headerTemplate={tab2HeaderTemplate}></TabPanel>
              <TabPanel headerTemplate={tab3HeaderTemplate}></TabPanel>
            </TabView>

            {/* save */}
            <div className="u-save">
              <div className="grid">
                <div className="col-12">
                  <div className="formgroup-inline">
                    <div className="u-formgroup w-auto">
                      <span className="label">담당자</span>
                      <div className="field">
                        <div className="p-inputgroup clear w-120">
                          <InputText />
                          <Button className="btn-ico clear" />
                        </div>
                      </div>
                    </div>
                    <div className="u-formgroup w-auto">
                      <span className="label">업무기간</span>
                      <div className="field">
                        <div className="p-inputgroup w-120">
                          <DatePicker />
                        </div>
                      </div>
                      <div className="field">
                        <div className="p-inputgroup w-120">
                          <DatePicker />
                        </div>
                      </div>
                    </div>
                    <div className="u-formsubmit">
                      <Button label="저장" className="btn-text primary blue-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SULM3010M01;
