/**
 * @description TEST > (M)공통 파일업로드
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
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

function FileUploads() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

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
      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(M)공통 파일업로드</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              컬럼

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">파일업로드 예시</span></h3>
                </div>

                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={3}>
                            <Label label={`HEAD`} require={false} />
                          </th>
                          <td colSpan={3}>
                            DATA
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={3}>
                            <Label label={`...`} require={false} />
                          </th>
                          <td colSpan={3}>
                            ...
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={3}>
                            <Label label={`파일첨부 예`} require={true} />
                          </th>
                          <td colSpan={3}>

                            <div className="o-section">
                              <div className="m-header">
                                <div className="o-limit type-file">
                                  <span className="head">파일용량</span>
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

                              <div className="main rows-body-auto">
                                <div className="o-grid-table p-datatable">
                                  <div className="table-container p-datatable-wrapper">
                                    <table className="p-datatable-table p-datatable-scrollable-table">
                                      <colgroup>
                                        <col style={{ width: 'calc(var(--rem) * 50)' }} />
                                        <col style={{ width: '20%', minWidth: 'calc(var(--rem) * 121)' }} />
                                        <col />
                                      </colgroup>

                                      <thead className="p-datatable-thead">
                                        <tr>
                                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전체선택</span></div></th>
                                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">파일명</span></div></th>
                                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">파일크기</span></div></th>
                                        </tr>
                                      </thead>

                                      <tbody className="p-datatable-tbody">
                                        <tr className="p-datatable-emptymessage">
                                          <td colSpan={3}>매핑된 관련화면이 없습니다.</td>
                                        </tr>
                                      </tbody>

                                      <tbody className="p-datatable-tbody">
                                      {[...Array(24)].map((e, idx) => (
                                        // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                                        <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                          <td><ImageButton label="순서 재정렬" icon="move" className={'g-cursor-grab'} /></td>
                                          <td>AABB00001M00</td>
                                          <td className="g-start">
                                            <div className="m-with-bind">
                                              <span className="main">원화현수송신청_관련화면 01</span>
                                              <span className="binds">
                                                <ImageButton label="삭제" icon="delete" />
                                              </span>
                                            </div>
                                          </td>
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

            </SplitterPanel>
          </Splitter>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FileUploads;
