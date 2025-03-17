/**
 * @description SUCM1010P15_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세_05지도요청
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function SUCM1010P31() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="적용" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  // 텍스트박스
  const [value, setValue] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="지도문 선택"
      visible={visible}
      style={{ width: '1400px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="grid">
        <div className="col-7">
          <div className="u-search mt-r-16">
            <div className="inner">
              <div className="grid">
                <div className="col-12">
                  <div className="formgroup-inline">
                    <div className="u-formgroup w-auto">
                      <span className="label w-35">유형</span>
                      <div className="field">
                        <div className="p-inputgroup w-134">
                          <SelectBox />
                        </div>
                      </div>
                      <div className="field">
                        <div className="p-inputgroup w-134">
                          <SelectBox />
                        </div>
                      </div>
                      <div className="field">
                        <div className="p-inputgroup w-134">
                          <SelectBox />
                        </div>
                      </div>
                      <div className="field">
                        <div className="p-inputgroup w-134">
                          <SelectBox />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formgroup-inline">
                    <div className="u-formgroup w-auto">
                      <span className="label w-35">검색</span>
                      <div className="field">
                        <div className="p-inputgroup w-134">
                          <SelectBox />
                        </div>
                      </div>
                      <div className="field">
                        <div className="p-inputgroup clear w-414">
                          <InputText />
                          <Button className="btn-ico clear" />
                        </div>
                      </div>
                    </div>
                    <div className="u-formsubmit">
                      <Button label="조회" className="btn-text primary gray-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-table">
            <div className="inner xh-575">
              <table>
                <colgroup>
                  <col width="48px" />
                  <col width="80px" />
                  <col width="180px" />
                  <col width="*" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th rowSpan={2}>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </th>
                    <th rowSpan={2}>코드</th>
                    <th rowSpan={2}>분류</th>
                    <th colSpan={2}>제목</th>
                  </tr>
                  <tr>
                    <th colSpan={2}>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </td>
                    <td>
                      <span>0021475</span>
                    </td>
                    <td className="text-left">
                      <span>여신 &gt; 신규 &gt; 위반</span>
                    </td>
                    <td colSpan={2} className="text-left expand">
                      <span>지도문제목</span>
                      <span>지도문내용</span>
                      <span>조치내용</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </td>
                    <td>
                      <span>0021475</span>
                    </td>
                    <td className="text-left">
                      <span>여신 &gt; 신규 &gt; 위반</span>
                    </td>
                    <td colSpan={2} className="text-left expand">
                      <span>지도문제목</span>
                      <span>지도문내용</span>
                      <span>조치내용</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </td>
                    <td>
                      <span>0021475</span>
                    </td>
                    <td className="text-left">
                      <span>여신 &gt; 신규 &gt; 위반</span>
                    </td>
                    <td colSpan={2} className="text-left expand">
                      <span>지도문제목</span>
                      <span>지도문내용</span>
                      <span>조치내용</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </td>
                    <td>
                      <span>0021475</span>
                    </td>
                    <td className="text-left">
                      <span>여신 &gt; 신규 &gt; 위반</span>
                    </td>
                    <td colSpan={2} className="text-left expand">
                      <span>지도문제목</span>
                      <span>지도문내용</span>
                      <span>조치내용</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="u-checkbox">
                        <CheckBox />
                      </div>
                    </td>
                    <td>
                      <span>0021475</span>
                    </td>
                    <td className="text-left">
                      <span>여신 &gt; 신규 &gt; 위반</span>
                    </td>
                    <td colSpan={2} className="text-left expand">
                      <span>지도문제목</span>
                      <span>지도문내용</span>
                      <span>조치내용</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="u-dragble xh-699">
            <h3>미리보기</h3>
            <div className="block">
              <h4>제목</h4>
              <div className="p-inputgroup">
                <SelectBox />
              </div>
            </div>
            <div className="block">
              <h4>내용</h4>
              <div className="xh-330 overflow-y">
                <div className="p-inputgroup drag-box">
                  <InputTextarea
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    placeholder="사유 내용이 들어갑니다."
                    rows={6}
                    cols={30}
                  />
                  <div className="drag-box-ctrl">
                    <Button icon="pi" className="btn-ico waste" />
                    <Button icon="pi" className="btn-ico drag" />
                  </div>
                </div>
                <div className="p-inputgroup drag-box">
                  <InputTextarea
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    placeholder="사유 내용이 들어갑니다."
                    rows={6}
                    cols={30}
                  />
                  <div className="drag-box-ctrl">
                    <Button icon="pi" className="btn-ico waste" />
                    <Button icon="pi" className="btn-ico drag" />
                  </div>
                </div>
                <div className="p-inputgroup drag-box">
                  <InputTextarea
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    placeholder="사유 내용이 들어갑니다."
                    rows={6}
                    cols={30}
                  />
                  <div className="drag-box-ctrl">
                    <Button icon="pi" className="btn-ico waste" />
                    <Button icon="pi" className="btn-ico drag" />
                  </div>
                </div>
                <div className="p-inputgroup drag-box">
                  <InputTextarea
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    placeholder="사유 내용이 들어갑니다."
                    rows={6}
                    cols={30}
                  />
                  <div className="drag-box-ctrl">
                    <Button icon="pi" className="btn-ico waste" />
                    <Button icon="pi" className="btn-ico drag" />
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <h4>조치내용</h4>
              <div className="p-inputgroup">
                <InputTextarea
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                  placeholder="사유 내용이 들어갑니다."
                  rows={6}
                  cols={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SUCM1010P31;
