/**
 * @description SYAD1030M01_06시스템관리_01감사항목관리_03추가사항관리
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBoxMultiChips from '@components/SelectBoxMultiChips';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function SYAD1030M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '감사항목관리' }, { label: '추가사항관리' }];

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
                <PageTitle title={'추가사항관리'}></PageTitle>
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
                        <span className="label w-57">지표명</span>
                        <div className="field">
                          <div className="p-inputgroup w-200">
                            <SelectBoxMultiChips />
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

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">추가사항관리 내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
                </div>
                <div className="btns">
                  <Button label="추가" className="btn-text primary blue-line" />
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
                    <col width="522px" />
                    <col width="70px" />
                    <col width="140px" />
                    <col width="140px" />
                    <col width="120px" />
                    <col width="90px" />
                    <col width="120px" />
                    <col width="120px" />
                    <col width="90px" />
                    <col width="130px" />
                    <col width="160px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>업무명</th>
                      <th>지표명</th>
                      <th>주기</th>
                      <th>항목명(헤더)</th>
                      <th>항목명</th>
                      <th>컬럼타입값</th>
                      <th>컬럼길이</th>
                      <th>컬럼포맷내용</th>
                      <th>컬럼정렬내용</th>
                      <th>정렬순서</th>
                      <th>최종변경직원명</th>
                      <th>최종변경일시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(12)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td>
                          <span>수신</span>
                        </td>
                        <td className="text-left">
                          <span>전자금융해지후, NET점신규</span>
                        </td>
                        <td>
                          <span>즉시</span>
                        </td>
                        <td>
                          <span>감사기준일자</span>
                        </td>
                        <td>
                          <span>ADT_BASE_YMD</span>
                        </td>
                        <td>
                          <span>ed</span>
                        </td>
                        <td>
                          <span>100</span>
                        </td>
                        <td>
                          <span>dateYMD</span>
                        </td>
                        <td>
                          <span>Center</span>
                        </td>
                        <td>
                          <span>1</span>
                        </td>
                        <td>
                          <span>SYSTEM</span>
                        </td>
                        <td>
                          <span>2018-05-03 10:41:00</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* bottom */}
            <div className="u-bottom">
              <Button label="양식다운로드" className="btn-download" icon="pi" />
              <Button label="일괄업로드" className="btn-download-all" icon="pi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SYAD1030M01;
