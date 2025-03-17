/**
 * @description SYAD4020M01_06시스템관리_04메뉴관리_02메뉴권한그룹관리
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import TreeNodeGroup from '@components/TreeNodeGroup';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

function SYAD4020M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '메뉴관리' }, { label: '메뉴권한그룹관리' }];

  // 라디오
  const [ingredient, setIngredient] = useState<string>('');

  // 텍스트박스
  const [value, setValue] = useState<string>('');

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
                <PageTitle title={'메뉴권한그룹관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* table */}
            <div className="grid">
              <div className="col-6">
                <div className="u-window mt-24">
                  <div className="win-panel">
                    <h3 className="win-title flex align-end mb-12 h-32">그룹명</h3>
                    <div className="h-561">
                      <TreeNodeGroup />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="u-window mt-24 border">
                  <div className="win-panel">
                    <div className="with-btns">
                      <h3 className="win-title">메뉴권한 상세조회</h3>
                      <div className="flex">
                        <Button label="수정" className="btn-text primary blue-line" />
                      </div>
                    </div>
                    <div className="u-table">
                      <div className="inner xh-561">
                        <table>
                          <colgroup>
                            <col width="80px" />
                            <col width="*" />
                            <col width="100px" />
                            <col width="100px" />
                            <col width="100px" />
                            <col width="100px" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>그룹ID</th>
                              <th>그룹명</th>
                              <th>
                                <div className="th-checkbox">
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                  조회권한
                                </div>
                              </th>
                              <th>
                                <div className="th-checkbox">
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                  등록권한
                                </div>
                              </th>
                              <th>
                                <div className="th-checkbox">
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                  수정권한
                                </div>
                              </th>
                              <th>
                                <div className="th-checkbox">
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                  삭제권한
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(20)].map((e, idx) => (
                              <tr key={idx}>
                                <td>
                                  <span>8523</span>
                                </td>
                                <td className="text-left">
                                  <span>감사자명령</span>
                                </td>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
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

            <div className="bunch mt-32">
              <h3 className="u-sub-title">변경내역</h3>
            </div>
            <div className="u-table">
              <div className="inner xh-441">
                <table>
                  <colgroup>
                    <col width="48px" />
                    <col width="90px" />
                    <col width="*" />
                    <col width="*" />
                    <col width="*" />
                    <col width="120px" />
                    <col width="160px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>그룹ID</th>
                      <th>그룹명</th>
                      <th>메뉴</th>
                      <th>변경내역</th>
                      <th>최종변경직원명</th>
                      <th>최종변경일시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(4)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td>
                          <span>2000</span>
                        </td>
                        <td className="text-left">
                          <span>감사자명령</span>
                        </td>
                        <td className="text-left">
                          <span>감사자명령관리</span>
                        </td>
                        <td className="text-left">
                          <span>조회권한 삭제</span>
                        </td>
                        <td>
                          <span>이기업</span>
                        </td>
                        <td>
                          <span>2024-11-25 13:33:35</span>
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

export default SYAD4020M01;
