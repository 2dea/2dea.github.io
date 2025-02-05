/**
 * @description SYAD4010M01_06시스템관리_04메뉴관리_01메뉴관리
 */

// dependency
import React, { useState } from 'react';

// components
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import TreeNodeGroup from '@components/TreeNodeGroup';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

function SYAD4010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '메뉴관리' }, { label: '메뉴관리' }];

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
                <PageTitle title={'메뉴관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            <div className="grid">
              <div className="col-6">
                <div className="u-window mt-24">
                  <div className="win-panel">
                    <h3 className="win-title flex align-end mb-12 h-32">그룹명</h3>
                    <div className="h-739">
                      <TreeNodeGroup />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="u-window mt-24 border">
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
                    <div className="">
                      <div className="u-dataview expand w-138">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>상위ID</span>
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
                                <span>메뉴ID</span>
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
                                <span>메뉴명</span>
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
                                <span>메뉴순서</span>
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
                                <span>프로그램ID</span>
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
                                <span>메뉴URL</span>
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
                                <span>사용여부</span>
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
                        </div>
                      </div>
                      <div className="u-dataview expand w-138 mt-r-1">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>비고</span>
                              </dt>
                              <dd>
                                <div className="p-inputgroup">
                                  <InputTextarea
                                    value="내용이 들어갑니다."
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                                    className="mt-6 h-432"
                                    rows={28}
                                    cols={30}
                                  />
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
        </div>
      </div>
    </div>
  );
}

export default SYAD4010M01;
