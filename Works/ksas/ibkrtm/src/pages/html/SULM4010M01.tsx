/**
 * @description SULM4010M01_01상시감시실시(준법감시역)_04감시역업무대직관리
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

function SULM4010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '상시감시실시(준법감시역)' }, { label: '감시역업무대직관리' }];

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
                <PageTitle title={'감시역 업무 대직관리'}></PageTitle>
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
                        <span className="label w-57">대직자</span>
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

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">담당부점현황</h3>
              <div className="inner">
                <div className="num">
                  총<span>50</span>건
                </div>
                <div className="btns">
                  <Button label="대직정보삭제" className="btn-text primary blue-line" />
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <table>
                  <colgroup>
                    <col width="48px" />
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
                      <th>
                        <div className="u-checkbox">
                          <CheckBox />
                        </div>
                      </th>
                      <th>지역본부</th>
                      <th>부점명</th>
                      <th>담당직원</th>
                      <th>담당시작</th>
                      <th>담당종료</th>
                      <th>대직직원</th>
                      <th>대직시작</th>
                      <th>대직종료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue">
                      <td>
                        <div className="u-checkbox">
                          <CheckBox />
                        </div>
                      </td>
                      <td className="text-left">
                        <span>강동지역본부</span>
                      </td>
                      <td>
                        <span>영업부(235235)</span>
                      </td>
                      <td>
                        <span>이기업(329559)</span>
                      </td>
                      <td>
                        <span>2024-12-12</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span>김감사</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span className="accordion accordion-open">
                          2024-12-31
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
                      <td className="text-left">
                        <span>강동지역본부</span>
                      </td>
                      <td>
                        <span>영업부(235235)</span>
                      </td>
                      <td>
                        <span>이기업(329559)</span>
                      </td>
                      <td>
                        <span>2024-12-12</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span>김감사</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                    </tr>
                    <tr className="bg-skyblue">
                      <td>
                        <div className="u-checkbox">
                          <CheckBox />
                        </div>
                      </td>
                      <td className="text-left">
                        <span>강동지역본부</span>
                      </td>
                      <td>
                        <span>영업부(235235)</span>
                      </td>
                      <td>
                        <span>이기업(329559)</span>
                      </td>
                      <td>
                        <span>2024-12-12</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span>김감사</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                      <td>
                        <span>2024-12-31</span>
                      </td>
                    </tr>
                    {[...Array(9)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="u-checkbox">
                            <CheckBox />
                          </div>
                        </td>
                        <td className="text-left">
                          <span>강동지역본부</span>
                        </td>
                        <td>
                          <span>영업부(235235)</span>
                        </td>
                        <td>
                          <span>이기업(329559)</span>
                        </td>
                        <td>
                          <span>2024-12-12</span>
                        </td>
                        <td>
                          <span>2024-12-31</span>
                        </td>
                        <td>
                          <span>김감사</span>
                        </td>
                        <td>
                          <span>2024-12-31</span>
                        </td>
                        <td>
                          <span className="accordion">
                            2024-12-31
                            <Button icon="pi" className="btn-ico accordion" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* notice */}
            <div className="u-notice">
              <i className="ico notice"></i>
              <p>담당자 ‘적용’ 후 ‘등록’ 버튼을 눌러 등록하세요.</p>
            </div>

            {/* save */}
            <div className="u-save">
              <div className="grid">
                <div className="col-12">
                  <div className="formgroup-inline">
                    <div className="u-formgroup w-auto">
                      <span className="label">기간</span>
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
                    <div className="u-formgroup w-auto">
                      <span className="label">대직직원</span>
                      <div className="field">
                        <div className="p-inputgroup search w-120">
                          <InputText />
                          <Button className="btn-ico clear" />
                          <Button className="btn-ico search" />
                        </div>
                      </div>
                    </div>
                    <div className="u-formsubmit">
                      <Button label="등록" className="btn-text primary blue-fill" />
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

export default SULM4010M01;
