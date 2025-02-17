/**
 * @description UNCM2010P21_04통합관리_03상시감시기간별보고서_02보고서작성(공통)_01선택전
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Accordion, AccordionTab } from 'primereact/accordion';

function UNCM2010P21() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="결재요청" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  // 라디오
  const [ingredient, setIngredient] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="보고서 작성"
      visible={visible}
      style={{ width: '1400px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="grid">
        <div className="col-12">
          <div className="u-save">
            <div className="grid">
              <div className="col-12">
                <div className="formgroup-inline">
                  <div className="u-formgroup w-auto align-center">
                    <span className="label">보고서 구분</span>
                    <div className="u-radio">
                      <RadioButton
                        inputId="ingredient1"
                        name="radioItems"
                        value="상시감시 기간별"
                        onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                        checked={ingredient === '상시감시 기간별'}
                      />
                      <label htmlFor="ingredient1">상시감시 기간별</label>
                    </div>
                    <div className="u-radio ml-12">
                      <RadioButton
                        inputId="ingredient2"
                        name="radioItems"
                        value="경영평가"
                        onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                        checked={ingredient === '경영평가'}
                      />
                      <label htmlFor="ingredient2">경영평가</label>
                    </div>
                  </div>
                  <div className="u-formgroup w-auto">
                    <span className="label">보고서 선택</span>
                    <div className="field">
                      <div className="p-inputgroup w-90">
                        <SelectBox />
                      </div>
                    </div>
                    <div className="field">
                      <div className="p-inputgroup w-120">
                        <SelectBox />
                      </div>
                    </div>
                    <div className="field">
                      <div className="p-inputgroup w-90">
                        <SelectBox />
                      </div>
                    </div>
                  </div>
                  <div className="u-formsubmit">
                    <Button label="보고서 선택" className="btn-text primary blue-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-12">
          <div className="u-report">
            <div className="group lt">
              <div className="report-viewer">
                <div className="box">
                  <p className="message">
                    <i className="ico notice"></i>보고서를 선택해주세요.
                  </p>
                </div>
              </div>
              <div className="report-upload">
                <div className="u-bunch">
                  <div className="inner">
                    <div className="btns">
                      <Button label="파일추가" className="btn-text tertiary default" />
                      <Button label="파일삭제" className="btn-text tertiary default" />
                    </div>
                  </div>
                </div>
                <div className="u-table">
                  <div className="inner xh-121">
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="48px" />
                        <col width="*" />
                        <col width="174px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>NO</th>
                          <th>첨부파일명</th>
                          <th>파일크기(Byte)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(4)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="u-checkbox">
                                <CheckBox />
                              </div>
                            </td>
                            <td>
                              <span>{idx + 1}</span>
                            </td>
                            <td className="text-left">
                              <span>(붙임3)2024년 국외점표 「사고예방대책」 전문_240615.hwp</span>
                            </td>
                            <td className="text-right">
                              <span>423,444</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="group rt">
              <div className="panel-title">
                <h4>결재/열람자 정보</h4>
                <Button label="결재자 변경" className="btn-text tertiary default" />
              </div>
              <div className="panel-select">
                <div className="u-formgroup w-auto mf-0">
                  <span className="label w-57">내 결재선</span>
                  <div className="p-inputgroup w-124">
                    <SelectBox />
                  </div>
                </div>
              </div>
              <div className="panel-accordion">
                <Accordion multiple activeIndex={[0]}>
                  <AccordionTab header="결재">
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                  </AccordionTab>
                  <AccordionTab header="참조">
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                    <p>박길동(준법감시역)</p>
                  </AccordionTab>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default UNCM2010P21;
