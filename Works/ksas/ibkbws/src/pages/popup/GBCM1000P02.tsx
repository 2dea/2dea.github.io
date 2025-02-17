/**
 * @description 공통_06직원조회_GBCM1000P02
 */

// dependency
import React, { useState } from 'react';

// components
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function GBCM1000P01() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="적용" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <Dialog
      className="u-type-modal"
      header="직원조회"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-search">
        <div className="inner">
          <div className="grid">
            <div className="col-12">
              <div className="formgroup-inline">
                <div className="u-formgroup w-auto">
                  <span className="label w-57">직원번호</span>
                  <div className="field">
                    <div className="p-inputgroup clear w-184">
                      <InputText />
                      <Button className="btn-ico clear" />
                    </div>
                  </div>
                </div>
                <div className="u-formgroup w-auto">
                  <span className="label  w-57">직원명</span>
                  <div className="field">
                    <div className="p-inputgroup clear w-184">
                      <InputText />
                      <Button className="btn-ico clear" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="formgroup-inline">
                <div className="u-formgroup w-auto">
                  <span className="label  w-57">소속부점</span>
                  <div className="field">
                    <div className="p-inputgroup search w-184">
                      <InputText placeholder="3242" />
                      <Button className="btn-ico clear" />
                      <Button className="btn-ico search" />
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

      <div className="u-table mt-4">
        <div className="inner xh-441">
          <table>
            <colgroup>
              <col width="48px" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>NO</th>
                <th>직원번호</th>
                <th>직원명</th>
                <th>직위</th>
                <th>소속부점</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((e, idx) => (
                <tr key={idx}>
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
                    <span>부장</span>
                  </td>
                  <td>
                    <span>내부통제총괄부</span>
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

export default GBCM1000P01;
