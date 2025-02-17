/**
 * @description ELCM3010P01_05전자결재_03결재선관리_팝업
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function ELCM3010P01() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} autoFocus />
      <Button label="적용" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <Dialog
      className="u-type-modal"
      header="결재선 선택"
      visible={visible}
      style={{ width: '1400px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="grid">
        <div className="col-fixed cw-18">
          {/* search */}
          <div className="u-search">
            <div className="inner">
              <div className="grid">
                <div className="col-12">
                  <div className="formgroup-inline">
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
                          <InputText />
                          <Button className="btn-ico clear" />
                        </div>
                      </div>
                    </div>
                  </div>
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
                          <InputText />
                          <Button className="btn-ico clear" />
                        </div>
                      </div>
                    </div>
                    <div className="u-formsubmit">
                      <div className="mb-12">
                        <Button label="조회" className="btn-text primary gray-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* table */}
          <div className="u-table mt-12">
            <h3 className="u-sub-title mb-12">소속부점 직원 목록</h3>
            <div className="inner xh-441">
              <table>
                <colgroup>
                  <col width="48px" />
                  <col width="*" />
                  <col width="120px" />
                  <col width="120px" />
                  <col width="120px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>부서</th>
                    <th>직원번호</th>
                    <th colSpan={2}>직원정보</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(14)].map((e, idx) => (
                    <tr key={idx}>
                      <td>
                        <span>{idx + 1}</span>
                      </td>
                      <td className="text-left">
                        <span>부서명</span>
                      </td>
                      <td>
                        <span>123456</span>
                      </td>
                      <td>
                        <span>이기업</span>
                      </td>
                      <td>
                        <span>일반</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-fixed w-36 with-swap">
          <div className="swap-btns pt-186">
            <Button className="btn-swap rt" icon="pi" />
            <Button className="btn-swap lt" icon="pi" />
          </div>
        </div>
        <div className="col-fixed cw-18">
          {/* search */}
          <div className="u-search">
            <div className="inner expand h-108">
              <div className="grid">
                <div className="col-12">
                  <div className="formgroup-inline">
                    <div className="u-formgroup">
                      <span className="label w-79">결재선 선택</span>
                      <div className="field">
                        <div className="p-inputgroup w-120">
                          <SelectBox />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* table */}
          <div className="u-table mt-12">
            <h3 className="u-sub-title mb-12">선택 결재선</h3>
            <div className="inner xh-441">
              <table>
                <colgroup>
                  <col width="48px" />
                  <col width="120px" />
                  <col width="120px" />
                  <col width="120px" />
                  <col width="120px" />
                  <col width="*" />
                </colgroup>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>결재구분</th>
                    <th>직원번호</th>
                    <th colSpan={2}>직원정보</th>
                    <th>참조여부</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(14)].map((e, idx) => (
                    <tr key={idx}>
                      <td>
                        <span>{idx + 1}</span>
                      </td>
                      <td>
                        <span>1차 결재자</span>
                      </td>
                      <td>
                        <span>123456</span>
                      </td>
                      <td>
                        <span>이기업</span>
                      </td>
                      <td>
                        <span>일반</span>
                      </td>
                      <td>
                        <span className="text-wrap">
                          <div className="u-checkbox">
                            <CheckBox />
                          </div>
                          <Button className="btn-ico drag" icon="pi" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ELCM3010P01;
