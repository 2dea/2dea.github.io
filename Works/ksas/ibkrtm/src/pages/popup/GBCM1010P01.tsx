/**
 * @description 공통_04엑셀다운로드_GBCM1010P01
 */

// dependency
import React, { useState } from 'react';

// components
import SelectBox from '@components/SelectBox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

function GBCM1010P01() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer">
      <Button label="취소" className="btn-text primary blue-line" onClick={() => setVisible(false)} />
      <Button label="확인" className="btn-text primary blue-fill" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  // 인풋 텍스트 박스
  const [value, setValue] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="다운로드 사유 작성"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-window border">
        <div className="win-panel">
          <div className="u-dataview expand w-112">
            <dl className="u-dataview-list">
              <dt>
                <span>
                  사유 유형<i className="require">*</i>
                </span>
              </dt>
              <dd>
                <div className="p-inputgroup w-200">
                  <SelectBox />
                </div>
              </dd>
            </dl>
            <dl className="u-dataview-list">
              <dt>
                <span>
                  결재자<i className="require">*</i>
                </span>
              </dt>
              <dd>
                <div className="p-inputgroup w-200">
                  <SelectBox />
                </div>
              </dd>
            </dl>
            <dl className="u-dataview-list">
              <dt>
                <span>
                  사유 내용<i className="require">*</i>
                </span>
              </dt>
              <dd className="pb-6">
                <InputTextarea
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                  placeholder="사유 내용이 들어갑니다."
                  rows={5}
                  cols={30}
                />
                <div className="with-count">
                  <span>
                    0<em>/1000</em>
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="mt-12">
          <p className="u-dot size-3">
            <span>
              <strong className="notice">개인정보</strong>가 포함된 유형 선택과 사유내용 입력이 필요합니다.
            </span>
          </p>
        </div>
      </div>
    </Dialog>
  );
}

export default GBCM1010P01;
