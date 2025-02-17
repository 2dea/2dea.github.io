/**
 * @description UNAD2010M01_04통합관리_02상시감시일일보고서_01목록
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { Tag } from 'primereact/tag';

// 탭메뉴 타이틀, 건수
const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">보완기일경과</span>
    </div>
  );
};
const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">지도</span>
    </div>
  );
};
const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">제외</span>
    </div>
  );
};

function UNAD2010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '통합관리' }, { label: '상시감시일일보고서' }];

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
                <PageTitle title={'상시감시일일보고서'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* search */}
            <div className="u-search">
              <div className="inner">
                <div className="grid">
                  <div className="col-12">
                    <div className="formgroup-inline">
                      <div className="u-formgroup">
                        <span className="label w-79">심의기준일자</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <DatePicker />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-79">취급부점</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText value="3242" />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup clear w-120">
                            <InputText placeholder="3242" disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-79">취급직원</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText value="3242" />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup clear w-120">
                            <InputText placeholder="3242" disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-79">취급일자</span>
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
                <div className="u-bunch">
                  <div className="inner">
                    <div className="num">
                      총<span>100</span>건
                    </div>
                    <div className="btns">
                      <Button label="일일보고서 작성" className="btn-text primary blue-line" />
                      <Button label="확정통보" className="btn-text primary blue-line" />
                    </div>
                  </div>
                </div>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="48px" />
                        <col width="90px" />
                        <col width="125px" />
                        <col width="90px" />
                        <col width="125px" />
                        <col width="60px" />
                        <col width="125px" />
                        <col width="111px" />
                        <col width="90px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="174px" />
                        <col width="174px" />
                        <col width="100px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>1</th>
                          <th>심의상태</th>
                          <th>부점명</th>
                          <th>고객번호</th>
                          <th>고객명</th>
                          <th>감점</th>
                          <th>준법감시역</th>
                          <th>거래일자</th>
                          <th>점검주기</th>
                          <th>지표명</th>
                          <th>제목</th>
                          <th>요청내용</th>
                          <th>참고사항</th>
                          <th>일련번호</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>1</span>
                          </td>
                          <td>
                            <div className="u-tag">
                              <Tag severity="warning" value="심의대기"></Tag>
                            </div>
                          </td>
                          <td>
                            <span>구미첨단타워</span>
                          </td>
                          <td>
                            <span>022</span>
                          </td>
                          <td>
                            <span>(주)거상</span>
                          </td>
                          <td>
                            <span>0.0</span>
                          </td>
                          <td>
                            <span>심길동</span>
                          </td>
                          <td>
                            <span>2024-10-31</span>
                          </td>
                          <td>
                            <span>즉시</span>
                          </td>
                          <td className="text-left">
                            <span>대출만기전담보제공된예금</span>
                          </td>
                          <td className="text-left">
                            <span>수출환어음 매입 업무</span>
                          </td>
                          <td className="text-left">
                            <span>(주)거상 (022-52453)</span>
                          </td>
                          <td className="text-left">
                            <span>참고사항내용</span>
                          </td>
                          <td>
                            <span>123456789</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>1</span>
                          </td>
                          <td>
                            <div className="u-tag">
                              <Tag severity="secondary" value="통보완료"></Tag>
                            </div>
                          </td>
                          <td>
                            <span>구미첨단타워</span>
                          </td>
                          <td>
                            <span>022</span>
                          </td>
                          <td>
                            <span>(주)거상</span>
                          </td>
                          <td>
                            <span>0.0</span>
                          </td>
                          <td>
                            <span>심길동</span>
                          </td>
                          <td>
                            <span>2024-10-31</span>
                          </td>
                          <td>
                            <span>즉시</span>
                          </td>
                          <td className="text-left">
                            <span>대출만기전담보제공된예금</span>
                          </td>
                          <td className="text-left">
                            <span>수출환어음 매입 업무</span>
                          </td>
                          <td className="text-left">
                            <span>(주)거상 (022-52453)</span>
                          </td>
                          <td className="text-left">
                            <span>참고사항내용</span>
                          </td>
                          <td>
                            <span>123456789</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>1</span>
                          </td>
                          <td>
                            <div className="u-tag">
                              <Tag severity="info" value="심의완료"></Tag>
                            </div>
                          </td>
                          <td>
                            <span>구미첨단타워</span>
                          </td>
                          <td>
                            <span>022</span>
                          </td>
                          <td>
                            <span>(주)거상</span>
                          </td>
                          <td>
                            <span>0.0</span>
                          </td>
                          <td>
                            <span>심길동</span>
                          </td>
                          <td>
                            <span>2024-10-31</span>
                          </td>
                          <td>
                            <span>즉시</span>
                          </td>
                          <td className="text-left">
                            <span>대출만기전담보제공된예금</span>
                          </td>
                          <td className="text-left">
                            <span>수출환어음 매입 업무</span>
                          </td>
                          <td className="text-left">
                            <span>(주)거상 (022-52453)</span>
                          </td>
                          <td className="text-left">
                            <span>참고사항내용</span>
                          </td>
                          <td>
                            <span>123456789</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={15}>
                            <p className="u-table-nodata">
                              <i className="ico alert"></i>
                              <span>조회된 데이터가 없습니다.</span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel headerTemplate={tab2HeaderTemplate}></TabPanel>
              <TabPanel headerTemplate={tab3HeaderTemplate}></TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UNAD2010M01;
