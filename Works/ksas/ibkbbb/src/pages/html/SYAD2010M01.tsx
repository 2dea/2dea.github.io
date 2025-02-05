/**
 * @description SYAD2010M01_06시스템관리_02사용자관리_01사용자관리
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

function SYAD2010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '사용자관리' }, { label: '사용자관리' }];

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
                <PageTitle title={'사용자관리'}></PageTitle>
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
                        <span className="label w-57">직원정보</span>
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
                        <span className="label w-57">부점정보</span>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="u-submit">
              <div className="inner">
                <Button label="조회" className="btn-text primary gray-fill" />
              </div>
            </div>

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">사용자 관리 내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
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
                    <col width="90px" />
                    <col width="100px" />
                    <col width="90px" />
                    <col width="140px" />
                    <col width="70px" />
                    <col width="140px" />
                    <col width="*" />
                    <col width="160px" />
                    <col width="160px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>직원번호</th>
                      <th>직원명</th>
                      <th>직위코드</th>
                      <th>직책</th>
                      <th>부점코드</th>
                      <th>부점명</th>
                      <th>팀코드</th>
                      <th>팀명</th>
                      <th>부점변경사유</th>
                      <th>최종 로그인 일시</th>
                      <th>최종 로그인 IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(3)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td>
                          <span>012345</span>
                        </td>
                        <td>
                          <span>강미영</span>
                        </td>
                        <td>
                          <span>1245</span>
                        </td>
                        <td>
                          <span>고경력직원</span>
                        </td>
                        <td>
                          <span>4561</span>
                        </td>
                        <td>
                          <span>내부통제총괄부</span>
                        </td>
                        <td>
                          <span>8956</span>
                        </td>
                        <td>
                          <span>상시감시팀</span>
                        </td>
                        <td className="text-left">
                          <span>변경 사유</span>
                        </td>
                        <td>
                          <span>2024-09-02 09:02:00</span>
                        </td>
                        <td>
                          <span>10.100.17.129</span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-blue">
                      <td>
                        <span>4</span>
                      </td>
                      <td>
                        <span>012345</span>
                      </td>
                      <td>
                        <span>강미영</span>
                      </td>
                      <td>
                        <span>1245</span>
                      </td>
                      <td>
                        <span>고경력직원</span>
                      </td>
                      <td>
                        <span>4561</span>
                      </td>
                      <td>
                        <span>내부통제총괄부</span>
                      </td>
                      <td>
                        <span>8956</span>
                      </td>
                      <td>
                        <span>상시감시팀</span>
                      </td>
                      <td className="text-left">
                        <span>변경 사유</span>
                      </td>
                      <td>
                        <span>2024-09-02 09:02:00</span>
                      </td>
                      <td>
                        <span>10.100.17.129</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* window */}
            <div className="u-window border mt-40">
              <div className="win-panel">
                <div className="with-btns mb-12">
                  <h3 className="win-title">사용자 정보</h3>
                  <div className="flex">
                    <Button label="초기화" className="btn-text primary blue-line" />
                    <Button label="삭제" className="btn-text primary blue-line" />
                    <Button label="수정" className="btn-text primary blue-line" />
                    <Button label="등록" className="btn-text primary blue-fill" />
                  </div>
                </div>

                <div className="u-dataview expand w-138">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>직원명</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup search">
                            <InputText />
                            <Button className="btn-ico search" />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>부점명</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>소속팀</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>직위코드</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>IP주소</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="u-dataview expand w-138 mt-r-1">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>부점변경사유</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
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

export default SYAD2010M01;
