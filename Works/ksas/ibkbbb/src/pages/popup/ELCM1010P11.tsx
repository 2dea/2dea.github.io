/**
 * @description ELCM1010P11_05전자결재_01미결재함_03결재진행내역
 */

// dependency
import React, { useState } from 'react';

// components
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function ELCM1010P11() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="확인" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <Dialog
      className="u-type-modal"
      header="결재진행내역"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-table">
        <div className="inner">
          <table>
            <colgroup>
              <col width="138px" />
              <col width="152px" />
              <col width="152px" />
              <col width="102px" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>신청일자</th>
                <th>신청서 종류</th>
                <th>신청부점</th>
                <th>기안자</th>
                <th>결재자</th>
                <th>결재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>2024-12-12</span>
                </td>
                <td>
                  <span>보완요청보고서</span>
                </td>
                <td>
                  <span>서부지역본부</span>
                </td>
                <td>
                  <span>김기업</span>
                </td>
                <td>
                  <span>이기업</span>
                </td>
                <td>
                  <span>결재중</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="u-table mt-16">
        <div className="inner">
          <table>
            <colgroup>
              <col width="48px" />
              <col width="90px" />
              <col width="152px" />
              <col width="152px" />
              <col width="102px" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2}>NO</th>
                <th rowSpan={2}>결재구분</th>
                <th colSpan={2}>결재상세</th>
                <th rowSpan={2}>결재진행상태</th>
                <th rowSpan={2}>결재일시</th>
              </tr>
              <tr>
                <th>직원번호</th>
                <th>직원정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>1</span>
                </td>
                <td>
                  <span>기안자</span>
                </td>
                <td>
                  <span>134565</span>
                </td>
                <td>
                  <span>김기업 차장</span>
                </td>
                <td>
                  <span>결재완료</span>
                </td>
                <td>
                  <span>2024-09-30 11:38:44</span>
                </td>
              </tr>
              <tr className="bg-blue">
                <td>
                  <span>2</span>
                </td>
                <td>
                  <span>1차 결재자</span>
                </td>
                <td>
                  <span>134565</span>
                </td>
                <td>
                  <span>김기업 차장</span>
                </td>
                <td>
                  <span>결재완료</span>
                </td>
                <td>
                  <span>2024-09-30 11:38:44</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>3</span>
                </td>
                <td>
                  <span>2차 결재자</span>
                </td>
                <td>
                  <span>134565</span>
                </td>
                <td>
                  <span>김기업 차장</span>
                </td>
                <td>
                  <span>결재완료</span>
                </td>
                <td>
                  <span>2024-09-30 11:38:44</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="u-save">
        <div className="grid">
          <div className="col-12">
            <div className="formgroup-inline">
              <div className="u-formgroup">
                <span className="label">직원정보</span>
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
                <Button label="결재자 변경" className="btn-text primary blue-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ELCM1010P11;
