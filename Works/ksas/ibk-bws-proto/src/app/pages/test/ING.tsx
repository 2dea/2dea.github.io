/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)사용자별 권한관리
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

function ADMAU0204M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '권한관리' }, { label: '매핑관리' }];

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
          <div className="main">
            <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">매핑관리</span>

                <Favorite />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group _assistive">
                <CommonButton label="도움말" icon="help" className="_normal" />
              </div>
            </div>

            {/* <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div> */}
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field colspan-2">
                    <Label label={`InputCheck`} />
                    <div className="fields">
                      <div className="m-checks">
                        {/* <label className="o-check type-swoosh">
                          <input type="checkbox" title="" value="" className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Default</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="checkbox" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Checked</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Disabled</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="checkbox" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Disabled+Checked</span>
                        </label> */}
                        {/*
                        <label className="o-check">
                          <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                          <span className="label">체크박스 Disabled+Indeterminate</span>
                        </label>

                        <label className="o-check">
                          <input type="checkbox" title="" value="" className="bind" onBlur={(e) => e.target.indeterminate = 'true'} /><i aria-hidden="true"></i>
                          <span className="label">체크박스 Indeterminate</span>
                        </label>
                         */}

                        <InputCheck label="Default" />
                        <InputCheck label="Checked" defaultChecked />
                        <InputCheck label="Disabled" disabled />
                        <InputCheck label="Disabled+Checked" disabled defaultChecked />
                        <InputCheck label="선택" labelHidden />
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`InputRadio`} />
                    <div className="fields">
                      <div className="m-checks">
                        {/* <label className="o-check type-swoosh">
                          <input type="radio" name="RADIO:10" title="" value="" className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Default</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="radio" name="RADIO:10" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Checked</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="radio" name="RADIO:20" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Disabled</span>
                        </label>

                        <label className="o-check type-swoosh">
                          <input type="radio" name="RADIO:20" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                          <span className="label">Disabled+Checked</span>
                        </label> */}

                        <InputRadio name="RADIO:10" label="Default" />
                        <InputRadio name="RADIO:10" label="Checked" defaultChecked />

                        <InputRadio name="RADIO:20" label="Disabled" disabled />
                        <InputRadio name="RADIO:20" label="Disabled+Checked" disabled defaultChecked />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">사용자내역</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>
                </div>

                <div className="main _primary">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={5}>등록된 데이터가 없습니다.</td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                            <td>{idx + 1}</td>
                            <td>000001</td>
                            <td>홍길동</td>
                            <td>부장</td>
                            <td className="g-start">중요용지용도품관리자, 행내등기관리</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li>권한요청문의 : IT금융개발부 / 031-1234-5678</li>
                  </ul>
                </div>
              </div>

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">사용자정보</span></h3>

                  {/*
                  <div className="m-chips">
                    <em className="o-chip">
                      <span className="label">[0031] 을지로 6가</span>
                    </em>
                  </div>
                   */}
                  <div className="o-legend type-branch style-normal">
                    <strong className="label">[0031] 을지로 6가</strong>
                  </div>
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
                          <th colSpan={1}>
                            <Label label={`직원번호/명`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [000001] 홍길동
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`직책`} require={false} />
                          </th>
                          <td colSpan={1}>
                            부장
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">권한설정</span></h3>
                </div>

                <div className="main _primary">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한설명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한여부</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}>허용된 권한이 없습니다.</td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>000000005</td>
                            <td className="g-start">중요용지용도품관리자</td>
                            <td className="g-start"></td>
                            <td>Y</td>
                            <td>
                              {
                                idx === 1 ?
                              <div className="m-checks">
                                <label className="o-check type-swoosh">
                                  <input type="checkbox" title="선택" value="" className="bind" /><i aria-hidden="true"></i>
                                  <span className="label _hidden">선택</span>
                                </label>
                              </div>
                                :
                              <label className="o-check type-swoosh">
                                <input type="checkbox" title="선택" value="" className="bind" /><i aria-hidden="true"></i>
                                <span className="label _hidden">선택</span>
                              </label>
                              }
                            </td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </SplitterPanel>
          </Splitter>

          <div className="div-footer">
            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADMAU0204M;
