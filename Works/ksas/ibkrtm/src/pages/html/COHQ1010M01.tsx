/**
 * @description COHQ1010M01_03상시감시현황(본부영업점)_01보완요청현황_01목록
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function COHQ1010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '상시감시현황(본부/영업점)' }, { label: '보완요청현황' }];

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
                <PageTitle title={'보완요청현황'}></PageTitle>
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
                        <span className="label w-57">감사일자</span>
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
                      <div className="u-formgroup">
                        <span className="label w-57">취급부점</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup clear w-120">
                            <InputText disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-57">감사자</span>
                        <div className="field">
                          <div className="p-inputgroup search w-120">
                            <InputText />
                            <Button className="btn-ico clear" />
                            <Button className="btn-ico search" />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup clear w-120">
                            <InputText disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="formgroup-inline">
                      <div className="u-formgroup">
                        <span className="label w-57">점검상태</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label w-57">이력포함</span>
                        <div className="mt-8">
                          <CheckBox />
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

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">보완요청현황 내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>50</span>건
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <PageCheckList />
                <table>
                  <colgroup>
                    <col width="48px" />
                    <col width="120px" />
                    <col width="56px" />
                    <col width="120px" />
                    <col width="90px" />
                    <col width="*" />
                    <col width="120px" />
                    <col width="120px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="120px" />
                    <col width="120px" />
                    <col width="120px" />
                    <col width="120px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>보고서번호</th>
                      <th>회차</th>
                      <th>감사기준일자</th>
                      <th>중요도</th>
                      <th>지표명</th>
                      <th>점검상태</th>
                      <th>감사자직원번호</th>
                      <th>감사자</th>
                      <th>부점코드</th>
                      <th>취급부점명</th>
                      <th>보완요청일</th>
                      <th>보완기한일</th>
                      <th>재보완기환일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(12)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td>
                          <span>20240826-12</span>
                        </td>
                        <td>
                          <span>1</span>
                        </td>
                        <td>
                          <span>2020-08-25</span>
                        </td>
                        <td>
                          <span>중</span>
                        </td>
                        <td className="text-left">
                          <span>대출만기전담보제공된예금</span>
                        </td>
                        <td>
                          <span>부점보완중</span>
                        </td>
                        <td>
                          <span>017813</span>
                        </td>
                        <td>
                          <span>이기업</span>
                        </td>
                        <td>
                          <span>0077</span>
                        </td>
                        <td>
                          <span>영등포</span>
                        </td>
                        <td>
                          <span>2024-08-23</span>
                        </td>
                        <td>
                          <span>2024-08-23</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
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
  );
}

export default COHQ1010M01;
