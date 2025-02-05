/**
 * @description SUCM1010P15_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function SUCM1010P15() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="심의등록" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  // 텍스트박스
  const [value, setValue] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="지도요청"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-window border">
        <div className="grid">
          <div className="col-12">
            <div className="win-panel">
              <div className="u-dataview w-125 expand">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          제목<i className="require">*</i>
                        </span>
                      </dt>
                      <dd>
                        <div className="with-btns">
                          <div className="p-inputgroup clear">
                            <InputText />
                            <Button className="btn-ico clear" icon="pi" />
                          </div>
                          <Button label="지도문 선택" className="btn-text secondary default" />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          지도내용<i className="require">*</i>
                        </span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={value}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                          placeholder="placeholder"
                          rows={6}
                          cols={30}
                        />
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          조치내용<i className="require">*</i>
                        </span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={value}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                          placeholder="placeholder"
                          rows={6}
                          cols={30}
                        />
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>참고사항</span>
                      </dt>
                      <dd>
                        <InputTextarea
                          value={value}
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
              <div className="u-dataview w-125 expand mt-12">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>지도조치이행</span>
                      </dt>
                      <dd className="flex align-center">
                        <div className="u-checkbox">
                          <CheckBox />
                        </div>
                        <div className="p-inputgroup w-142 ml-6">
                          <DatePicker />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>취급부점</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup search w-142">
                          <InputText value="동탄(0606)" />
                          <Button className="btn-ico clear" />
                          <Button className="btn-ico search" />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>경평반영부점</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup search w-142">
                          <InputText value="동탄(0606)" />
                          <Button className="btn-ico clear" />
                          <Button className="btn-ico search" />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>지도등록일</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup w-142">
                          <DatePicker />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>통보일</span>
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
                        <span>제외</span>
                      </dt>
                      <dd>
                        <div className="u-checkbox flex-start h-28">
                          <CheckBox />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>기업성장여부</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup w-142">
                          <SelectBox />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>감사자</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup search w-142">
                          <InputText value="홍길동" />
                          <Button className="btn-ico clear" />
                          <Button className="btn-ico search" />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>목록생성일</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup w-142">
                          <DatePicker />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>경평귀속년월</span>
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
              <div className="u-dataview w-125 expand mt-r-1">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>경영평가점수</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup w-142">
                          <SelectBox />
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

      <div className="u-table mt-32">
        <div className="u-heading mb-12">
          <span>취급자</span>
          <Button className="btn-plus" icon="pi"></Button>
        </div>
        <div className="inner xh-452">
          <table>
            <colgroup>
              <col width="48px" />
              <col width="48px" />
              <col width="90px" />
              <col width="90px" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="54px" />
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>
                  <div className="u-checkbox">
                    <CheckBox />
                  </div>
                </th>
                <th rowSpan={2}>NO</th>
                <th rowSpan={2}>직원번호</th>
                <th rowSpan={2}>직원명</th>
                <th colSpan={3}>소속</th>
                <th rowSpan={2}></th>
              </tr>
              <tr>
                <th>직위명</th>
                <th>부점코드</th>
                <th>부점명</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(2)].map((e, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="u-checkbox">
                      <CheckBox />
                    </div>
                  </td>
                  <td>
                    <span>{idx + 1}</span>
                  </td>
                  <td>
                    <span>0021475</span>
                  </td>
                  <td>
                    <span>김길동</span>
                  </td>
                  <td>
                    <span>팀장(VM)</span>
                  </td>
                  <td>
                    <span>0506</span>
                  </td>
                  <td>
                    <span>동탄테크노벨리</span>
                  </td>
                  <td>
                    <span>
                      <Button className="btn-minus" icon="pi"></Button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dialog>
  );
}

export default SUCM1010P15;
