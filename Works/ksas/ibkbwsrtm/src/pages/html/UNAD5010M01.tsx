/**
 * @description UNAD5010M01_04통합관리_05감시현황통계
 */

// dependency
import React, { useState } from 'react';

// components
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

// 탭메뉴 타이틀, 건수
const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">담당자</span>
    </div>
  );
};
const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">지표</span>
    </div>
  );
};
const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" onClick={options.onClick}>
      <span className="label">영업점</span>
    </div>
  );
};

function UNAD5010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '통합관리' }, { label: '감시현황통계' }];

  // 라디오
  const [ingredient, setIngredient] = useState<string>('');

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
                <PageTitle title={'감시현황통계'}></PageTitle>
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
                        <span className="label w-57">기준일자</span>
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
                      <div className="u-formgroup w-314 align-center">
                        <span className="label w-57">점검자</span>
                        <div className="u-radio">
                          <RadioButton
                            inputId="ingredient1"
                            name="radioItems"
                            value="준법감시역"
                            onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                            checked={ingredient === '준법감시역'}
                          />
                          <label htmlFor="ingredient1">준법감시역</label>
                        </div>
                        <div className="u-radio ml-12">
                          <RadioButton
                            inputId="ingredient2"
                            name="radioItems"
                            value="준법지원역"
                            onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                            checked={ingredient === '준법지원역'}
                          />
                          <label htmlFor="ingredient2">준법지원역</label>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-57">담당자</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText value="3242" />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-57">업무명</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="formgroup-inline">
                      <div className="u-formgroup">
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
                      <div className="u-formgroup">
                        <span className="label w-57">취급부점</span>
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
                      총<span>5</span>건
                    </div>
                    <div className="btns">
                      <Button label="인쇄" className="btn-print" icon="pi" />
                    </div>
                  </div>
                </div>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="90px" />
                        <col width="90px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>직원번호</th>
                          <th>담당자</th>
                          <th>업무구분</th>
                          <th>대상건수</th>
                          <th>점검건수</th>
                          <th>점검율</th>
                          <th>미점검</th>
                          <th>점검필</th>
                          <th>조치보류</th>
                          <th>보완</th>
                          <th>지도</th>
                          <th>제외</th>
                          <th>시스템점검대상</th>
                          <th>시스템점검완료</th>
                          <th>시스템대기</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={5} className="bg-none">
                            <span>1</span>
                          </td>
                          <td rowSpan={5} className="bg-none">
                            <span>012345678</span>
                          </td>
                          <td rowSpan={5} className="bg-none">
                            <span>김감사</span>
                          </td>
                          <td className="bg-gray border-left">
                            <span className="ft-bold">수신</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>100</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-gray border-left">
                            <span className="ft-bold">여신</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>100</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-gray border-left">
                            <span className="ft-bold">외환</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>100</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-gray border-left">
                            <span className="ft-bold">기타</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>32</span>
                          </td>
                          <td className="text-right">
                            <span>100</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                          <td className="text-right">
                            <span>0</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-skyblue border-left">
                            <span className="ft-bold ft-c3">소계</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">32</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">32</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">32</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
                          </td>
                          <td className="bg-skyblue text-right">
                            <span className="ft-bold ft-c3">0</span>
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

export default UNAD5010M01;
