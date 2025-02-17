/**
 * @description SYAD1010P02_06시스템관리_01감사항목관리_01상시감시지표목록_03상세팝업
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import SelectBoxMultiChips from '@components/SelectBoxMultiChips';
import DatePicker from '@components/DatePicker';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

function SYAD1010P02() {
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

  // 텍스트박스
  const [value, setValue] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="상시감시항목목록 상세"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-window border">
        <div className="grid">
          <div className="col-12">
            <div className="win-panel">
              <h3 className="win-title mb-12">상시감시지표정의서</h3>
              <div className="u-dataview w-112 expand">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>지표코드</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText placeholder="2012002" disabled />
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
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>지표명</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="10억이상CD신규" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>주기</span>
                      </dt>
                      <dd>
                        <div className="u-formgroup w-auto mf-0">
                          <div className="u-radio expand">
                            <RadioButton
                              inputId="ingredient3"
                              name="radioItems"
                              value="즉시"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '즉시'}
                            />
                            <label htmlFor="ingredient3">즉시</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient4"
                              name="radioItems"
                              value="익일"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '익일'}
                            />
                            <label htmlFor="ingredient4">익일</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient5"
                              name="radioItems"
                              value="익월"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '익월'}
                            />
                            <label htmlFor="ingredient5">익월</label>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>적용기간</span>
                      </dt>
                      <dd>
                        <div className="flex">
                          <div className="p-inputgroup flex-shrink w-109">
                            <DatePicker />
                          </div>
                          <div className="p-inputgroup flex-shrink w-109 ml-5">
                            <DatePicker />
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>업무명</span>
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
                        <span>상세분류</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="10억이상CD신규" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>원천시스템</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup">
                          <SelectBoxMultiChips />
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>추출단위</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="계좌" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>추출조건</span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={'내용이 들어갑니다'}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                          placeholder="placeholder"
                          rows={6}
                          cols={30}
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          관련규정
                          <br />
                          (시행문서)
                        </span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={'내용이 들어갑니다'}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                          placeholder="placeholder"
                          rows={6}
                          cols={30}
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>점검방법</span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={'내용이 들어갑니다'}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                          placeholder="placeholder"
                          rows={6}
                          cols={30}
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>관련시스템</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="[11101]수신신규 [27970]스캔목록" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>화면번호</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="[11101]수신신규 [27970]스캔목록" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>시스템점검여부</span>
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
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>담당자</span>
                      </dt>
                      <dd>
                        <div className="u-formgroup w-auto mf-0">
                          <div className="u-radio expand">
                            <RadioButton
                              inputId="ingredient8"
                              name="radioItems"
                              value="감시역"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '감시역'}
                            />
                            <label htmlFor="ingredient8">감시역</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient9"
                              name="radioItems"
                              value="지원역"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '지원역'}
                            />
                            <label htmlFor="ingredient9">지원역</label>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-112 expand mt-r-1">
                <div className="inner">
                  <div className="column rw-50">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>중요도</span>
                      </dt>
                      <dd>
                        <div className="u-formgroup w-auto mf-0">
                          <div className="u-radio expand">
                            <RadioButton
                              inputId="ingredient10"
                              name="radioItems"
                              value="고"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '고'}
                            />
                            <label htmlFor="ingredient10">고</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient11"
                              name="radioItems"
                              value="중"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '중'}
                            />
                            <label htmlFor="ingredient11">중</label>
                          </div>
                          <div className="u-radio expand ml-12">
                            <RadioButton
                              inputId="ingredient12"
                              name="radioItems"
                              value="저"
                              onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                              checked={ingredient === '저'}
                            />
                            <label htmlFor="ingredient12">저</label>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="win-panel mt-32">
              <div className="with-btns">
                <h3 className="win-title">타시스템 링크</h3>
                <div className="flex">
                  <Button label="링크검색" className="btn-text tertiary default" />
                  <Button label="삭제" className="btn-text tertiary default" />
                </div>
              </div>
              <div className="u-table">
                <div className="inner xh-241">
                  <table>
                    <colgroup>
                      <col width="48px" />
                      <col width="90px" />
                      <col width="80px" />
                      <col width="80px" />
                      <col width="*" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>
                          <CheckBox />
                        </th>
                        <th>시스템구분</th>
                        <th>화면번호</th>
                        <th>정렬순서</th>
                        <th>화면명</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(10)].map((e, idx) => (
                        <tr key={idx}>
                          <td>
                            <CheckBox />
                          </td>
                          <td>
                            <span>통합단말</span>
                          </td>
                          <td>
                            <span>123456</span>
                          </td>
                          <td>
                            <span>2</span>
                          </td>
                          <td className="text-left">
                            <div className="text-wrap">
                              <span className="pr-16">부점관리계약 조회</span>
                              <Button className="btn-ico drag" icon="pi" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="win-panel mt-32">
              <div className="with-btns">
                <h3 className="win-title">첨부파일</h3>
                <div className="flex">
                  <Button label="파일추가" className="btn-text tertiary default" />
                  <Button label="파일삭제" className="btn-text tertiary default" />
                  <Button label="파일다운" className="btn-text tertiary default" />
                </div>
              </div>
              <div className="u-table">
                <div className="inner xh-241">
                  <table>
                    <colgroup>
                      <col width="48px" />
                      <col width="48px" />
                      <col width="*" />
                      <col width="114px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>
                          <CheckBox />
                        </th>
                        <th>NO</th>
                        <th>첨부파일명</th>
                        <th>파일크기(Byte)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(3)].map((e, idx) => (
                        <tr key={idx}>
                          <td>
                            <CheckBox />
                          </td>
                          <td>
                            <span>{idx + 1}</span>
                          </td>
                          <td>
                            <span>
                              (붙임3)2024년 국외점표 「사고예방대책」 전문_240615.hwp (붙임3)2024년 국외점표
                              「사고예방대책」 전문_240615.hwp
                            </span>
                          </td>
                          <td className="text-right">
                            <span>424,464</span>
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
    </Dialog>
  );
}

export default SYAD1010P02;
