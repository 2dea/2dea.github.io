/**
 * @description SYAD3010M01_06시스템관리_03권한관리_01권한그룹관리
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
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

function SYAD3010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '권한관리' }, { label: '권한그룹관리' }];

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
                <PageTitle title={'권한그룹관리'}></PageTitle>
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
                        <span className="label w-57">그룹명</span>
                        <div className="field">
                          <div className="p-inputgroup clear w-120">
                            <InputText disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">사용여부</span>
                        <div className="field">
                          <div className="p-inputgroup search w-60">
                            <SelectBox />
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
              <h3 className="u-sub-title">권한그룹내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <PageCheckList />
                <div className="xh-241">
                  <table>
                    <colgroup>
                      <col width="48px" />
                      <col width="90px" />
                      <col width="300px" />
                      <col width="*" />
                      <col width="80px" />
                      <col width="120px" />
                      <col width="120px" />
                      <col width="160px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>NO</th>
                        <th>그룹ID</th>
                        <th>그룹명</th>
                        <th>그룹설명</th>
                        <th>사용여부</th>
                        <th>배치처리여부</th>
                        <th>최종변경직원</th>
                        <th>최종변경일시</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue">
                        <td>
                          <span>1</span>
                        </td>
                        <td>
                          <span>012345</span>
                        </td>
                        <td className="text-left">
                          <span>감사자명령</span>
                        </td>
                        <td className="text-left">
                          <span>감사자 임명권한, 준법지원부 모니터링 팀장</span>
                        </td>
                        <td>
                          <span>Y</span>
                        </td>
                        <td>
                          <span>Y</span>
                        </td>
                        <td>
                          <span>최기업</span>
                        </td>
                        <td>
                          <span>2024-11-25 13:33:35</span>
                        </td>
                      </tr>
                      {[...Array(10)].map((e, idx) => (
                        <tr key={idx}>
                          <td>
                            <span>{idx + 2}</span>
                          </td>
                          <td>
                            <span>012345</span>
                          </td>
                          <td className="text-left">
                            <span>감사자명령</span>
                          </td>
                          <td className="text-left">
                            <span>감사자 임명권한, 준법지원부 모니터링 팀장</span>
                          </td>
                          <td>
                            <span>Y</span>
                          </td>
                          <td>
                            <span>Y</span>
                          </td>
                          <td>
                            <span>최기업</span>
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

            {/* window */}
            <div className="u-window border mt-40">
              <div className="win-panel">
                <div className="with-btns mb-12">
                  <h3 className="win-title">상세정보</h3>
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
                          <span>그룹ID</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-142">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>그룹명</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-142">
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
                          <span>그룹설명</span>
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
                          <span>등록자</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-142">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>등록일시</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup w-142">
                            <DatePicker />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>최종변경직원</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-142">
                            <InputText />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>최종변경일시</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup w-142">
                            <DatePicker />
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
                          <span>배치처리여부</span>
                        </dt>
                        <dd>
                          <div className="u-formgroup w-auto mf-0">
                            <div className="u-radio expand">
                              <RadioButton
                                inputId="ingredient1"
                                name="radioItems"
                                value="Y"
                                onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                checked={ingredient === 'Y'}
                              />
                              <label htmlFor="ingredient1">Y</label>
                            </div>
                            <div className="u-radio expand ml-12">
                              <RadioButton
                                inputId="ingredient2"
                                name="radioItems"
                                value="N"
                                onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                checked={ingredient === 'N'}
                              />
                              <label htmlFor="ingredient2">N</label>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>사용여부</span>
                        </dt>
                        <dd>
                          <div className="u-formgroup w-auto mf-0">
                            <div className="u-radio expand">
                              <RadioButton
                                inputId="ingredient3"
                                name="radioItems"
                                value="Y"
                                onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                checked={ingredient === 'Y'}
                              />
                              <label htmlFor="ingredient3">Y</label>
                            </div>
                            <div className="u-radio expand ml-12">
                              <RadioButton
                                inputId="ingredient4"
                                name="radioItems"
                                value="N"
                                onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                checked={ingredient === 'N'}
                              />
                              <label htmlFor="ingredient4">N</label>
                            </div>
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

export default SYAD3010M01;
