/**
 * @description 공통_05부점조회_GBCM1000P01
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
      header="부점조회"
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
                  <span className="label w-79">부점코드</span>
                  <div className="field">
                    <div className="p-inputgroup clear w-184">
                      <InputText />
                      <Button className="btn-ico clear" />
                    </div>
                  </div>
                </div>
                <div className="u-formgroup w-auto">
                  <span className="label w-68">부점명</span>
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
                  <span className="label w-79">지역본부코드</span>
                  <div className="field">
                    <div className="p-inputgroup clear w-184">
                      <InputText placeholder="3242" />
                      <Button className="btn-ico clear" />
                    </div>
                  </div>
                </div>
                <div className="u-formgroup w-auto">
                  <span className="label w-68">지역본부명</span>
                  <div className="field">
                    <div className="p-inputgroup clear w-184">
                      <InputText placeholder="3242" />
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
                <th>지역본부코드</th>
                <th>지역본부명</th>
                <th>부점코드</th>
                <th>부점명</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((e, idx) => (
                <tr key={idx}>
                  <td>
                    <span>{idx + 1}</span>
                  </td>
                  <td>
                    <span>코드명</span>
                  </td>
                  <td>
                    <span>본부명</span>
                  </td>
                  <td>
                    <span>1004</span>
                  </td>
                  <td>
                    <span>이태원</span>
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
