/**
* @description 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회 ~ (LP)임대회사연락처
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Favorite from 'app/shared/layouts/Favorite';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import InputCheck from 'app/shared/modules/OInputCheck';
import InputRadio from 'app/shared/modules/OInputRadio';
import XDropdown from 'app/shared/modules/XDropdown';
import XMultiSelect from 'app/shared/modules/XMultiSelect';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function STMVL0101P05() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // InputText
  const [value, setValue] = useState<string>('');

  // InputNumber
  const [InputNumberValue, setInputNumberValue] = useState(0);

  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
        <span className="p-autocomplete-cell">[0001] 홍길동</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">부장</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[0031] 을지6가</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">0031</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[1111] 을지6가</span>
      </>
    );
  };

  // Calendar
  addLocale('ko', {
    firstDayOfWeek: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });
  const [Date, setDate] = useState<Nullable<Date>>(null);
  const [Time, setTime] = useState(null);

  // RadioButton
  const [ingredient, setIngredient] = useState<string>('');

  // Checkbox
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Dialog
        className="layer-wrap wdth-40p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => {if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">임대회사연락처</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">임대회사정보</span></h4>

                </div>

                <div className="main rows-body-3i">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`임대회사명`} require={false} />
                          </th>
                          <td colSpan={1}>
                            현대캐피탈
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`콜센터전화번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            1899-6116
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`내용`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-rich-text">
                              신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                              신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                              신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                              신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`파일첨부`} require={false} />
                          </th>

                          <td colSpan={1}>
                            <div className="o-section">
                              <div className="m-header">
                                <div className="o-limit type-file">
                                  <span className="head">파일크기</span>
                                  <span className="data">
                                    <em className="value">1MB</em>
                                    <span className="sep">/</span>
                                    <span className="limits" aria-label="전체 업로드 제한용량">10MB</span>
                                  </span>
                                </div>

                                <div className="m-binds">
                                  <div className="group">
                                    <CommonButton label="파일선택" className="_normal" />
                                    <CommonButton label="파일삭제" className="_normal" />
                                    <CommonButton label="파일다운" className="_normal" />
                                  </div>
                                </div>
                              </div>

                              <div className="main rows-body-3i">
                                <div className="o-grid-table type-upload js_dragovered">{/* 드래그오버 시 'js_dragovered' 클래스네임 추가 { @DEV } */}
                                  <div className="table-container">
                                    <table>
                                      <colgroup>
                                        <col className="wdth-10" />
                                        <col className="wdth-auto" style={{ minWidth: 'calc(var(--rem) * 180)' }} />
                                        <col style={{ minWidth: 'calc(var(--rem) * 72)' }} />
                                      </colgroup>

                                      <thead>
                                        <tr>
                                          <th><InputCheck label="전체​선택" labelHidden /></th>
                                          <th>파일명</th>
                                          <th>파일크기</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr>
                                          <td colSpan={3}>
                                            <div className="o-attach">
                                              <div className="summary">
                                                <span className="wbr">첨부할 파일을 여기에 끌어다 놓거나, </span>
                                                <span className="wbr">파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</span>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>

                                      <tbody>
                                      {[...Array(24)].map((e, idx) => (
                                        <tr key={idx}>
                                          <td><InputCheck label="선택" labelHidden /></td>
                                          <td className="g-start">
                                            <span className="o-file">
                                            {
                                              idx === 1 ?
                                              <span className="name">긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명</span>
                                              :
                                              <span className="name">파일명</span>
                                            }
                                              <span className="ext">.xlsx</span>
                                            </span>
                                          </td>
                                          <td className="g-end">1023KB</td>
                                        </tr>
                                      ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="확인" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)임대회사연락처 [wdth-40p]</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="m-binds">
            <div className="group _start">
              <CommonButton label="팝업 열기" icon="link" size={70} onClick={() => setVisible(true)} />
            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default STMVL0101P05;
