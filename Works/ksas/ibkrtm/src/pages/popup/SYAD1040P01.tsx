/**
 * @description SYAD1040P01_06시스템관리_01감사항목관리_04타시스템링크관리_02상세팝업
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

function SYAD1040P01() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="삭제" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="수정" className="btn-text primary blue-fill" onClick={() => setVisible(false)} />
    </div>
  );

  // 라디오
  const [ingredient, setIngredient] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="타시스템 링크 상세"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-window border">
        <div className="grid">
          <div className="col-12">
            <div className="win-panel">
              <div className="u-dataview w-122 expand">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>접속화면번호</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="여신입출금 취소정정" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>화면번호(출력용)</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="여신입출금 취소정정" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>화면명</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="여신입출금 취소정정" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>사용여부</span>
                      </dt>
                      <dd>
                        <div className="u-formgroup w-auto mf-0">
                          <div className="u-radio expand">
                            <RadioButton
                              inputId="ingredient6"
                              name="radioItems"
                              value="Y"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === 'Y'}
                            />
                            <label htmlFor="ingredient6">Y</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient7"
                              name="radioItems"
                              value="N"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === 'N'}
                            />
                            <label htmlFor="ingredient7">N</label>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>대상시스템</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup">
                          <SelectBox />
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>정렬순서</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="1" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>서버URL</span>
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
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>접속URL</span>
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
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column flex-none">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>파라미터정보</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup">
                          <div className="u-fileupload parameter">
                            <div className="fileupload-btns">
                              <Button label="행추가" className="btn-text tertiary default" />
                              <Button label="행삭제" className="btn-text tertiary default" />
                            </div>
                            <div className="fileupload-list">
                              <table>
                                <colgroup>
                                  <col width="33px" />
                                  <col width="100px" />
                                  <col width="70px" />
                                  <col width="*" />
                                  <col width="144px" />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <th>
                                      <div className="u-checkbox">
                                        <CheckBox />
                                      </div>
                                    </th>
                                    <th>파라미터ID</th>
                                    <th>상수값</th>
                                    <th>파라미터값</th>
                                    <th>파라미터설명</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[...Array(5)].map((e, idx) => (
                                    <tr key={idx}>
                                      <td>
                                        <div className="u-checkbox">
                                          <CheckBox />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="p-inputgroup">
                                          <InputText />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="p-inputgroup">
                                          <InputText />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="p-inputgroup">
                                          <InputText />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="p-inputgroup">
                                          <InputText />
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-122 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>비고내용</span>
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
    </Dialog>
  );
}

export default SYAD1040P01;
