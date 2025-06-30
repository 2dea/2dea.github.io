/**
 * @description 자금현수송 > 외화정사 > 인수도관리
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import FavoriteDiv from 'app/shared/layouts/Favorite';
import ConsultsDiv from 'app/shared/layouts/Consults';
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

function FMTFC0201M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '자금현수송' }, { label: '외화정사' }, { label: '인수도관리' }];

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
                <span className="label">인수도관리</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">

            <div className="m-binds type-start">
              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="인수도명세출력" className="_texted" />
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="인수취소" className="_lined-primary" />
                <CommonButton label="인도취소" className="_lined-primary" />
                <CommonButton label="재인도" className="_solid-primary" />
                <CommonButton label="인도" className="_solid-primary" />
              </div>
            </div>

          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`인도구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`인도직원`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`인수직원`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`인도기간`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                      <span className="seps type-tilde">~</span>
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`진행상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`통화코드`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
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
                  <h2 className="o-heading level2"><span className="label">인수도 내역</span></h2>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="일일실적등록" className="_solid-primary" />
                    </div>

                  </div>
                </div>

                <div className="main _primary rows-body-5i">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도직원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도매수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도금액</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수직원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취소일시</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={16}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(10)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td className="g-start">출납담당 정사원[정사]</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>홍길동</td>
                              <td>인수</td>
                              <td className="g-start">USD(미국 달러)</td>
                              <td className="g-end">10</td>
                              <td className="g-end">10,000</td>
                              <td className="g-end">20,000</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>홍길동</td>
                              <td></td>
                              <td className="g-start">6/17 정사분 인수</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="o-grid">
            <div className="column">

            </div>
          </div>

          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">정사원 미인수 내역(정사분)</span></h3>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="인수" className="_normal" />
                      <CommonButton label="반송" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-body-3i">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도직원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도매수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도금액</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수직원</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(1)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>홍길동</td>
                              <td className="g-start">USD(미국 달러)</td>
                              <td className="g-end">10</td>
                              <td className="g-end">10,000</td>
                              <td className="g-end">20,000</td>
                              <td>홍길동</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">정사원 미인수 내역(반납분)</span></h3>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="인수" className="_normal" />
                      <CommonButton label="반송" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-body-3i">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도직원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도매수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도금액</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수직원</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(1)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>홍길동</td>
                              <td className="g-start">USD(미국 달러)</td>
                              <td className="g-end">10</td>
                              <td className="g-end">10,000</td>
                              <td className="g-end">20,000</td>
                              <td>홍길동</td>
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

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTFC0201M;
