/**
 * @description 중요용지·용도품(영업점) > 폐기 > 중요용지발송등록
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

function BSPDU0601M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(영업점)' }, { label: '폐기' }, { label: '중요용지발송등록' }];

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
                <span className="label">중요용지발송등록</span>

                <Favorite />
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
                  <CommonButton label="폐기중요용지 발송명세서 출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="오손발송" className="_lined-primary" />
                <CommonButton label="발송취소" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} disabled />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`오손등록기간`} require={true} />
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

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>


              <Tabs className="m-tabs react-tabs" defaultIndex={0}>
                <div className="m-tab type2">
                  <TabList className="lists">
                    <Tab className="link"><span className="label">발송대상</span></Tab>
                    <Tab className="link"><span className="label">발송완료내역</span></Tab>
                  </TabList>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">발송대상</span></h2>

                          <div className="m-binds">
                            <div className="group">
                              <ImageButton label="엑셀​다운로드" icon="excel-download" />
                              <ImageButton label="목록출력" icon="print" />
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
                                  <col className="wdth-0" />
                                  <col />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생일자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오손등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                    <th rowSpan={2} colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사유</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={16}>등록된 데이터가 없습니다.</td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(24)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>{idx + 1}</td>
                                    <td>0465</td>
                                    <td className="g-start">종로6가</td>
                                    <td>0022</td>
                                    <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10000</td>
                                    <td>홍길동</td>
                                    <td>0022</td>
                                    <td>다가</td>
                                    <td>221868620</td>
                                    <td>~</td>
                                    <td>221868620</td>
                                    <td className="g-start">일괄폐기</td>
                                  </tr>
                                ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="m-footer">
                          <ul className="m-bullets type-disc">
                            <li className="c-color-strong">오손등록 후 결재완료된 경우 발송대상 내역에서 조회가 능합니다.</li>
                          </ul>
                        </div>

                      </div>

                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">발송완료</span></h2>

                          <div className="m-binds">
                            <div className="group">
                              <ImageButton label="엑셀​다운로드" icon="excel-download" />
                              <ImageButton label="목록출력" icon="print" />
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
                                  <col className="wdth-0" />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th rowSpan={2} colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={15}>등록된 데이터가 없습니다.</td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(24)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>{idx + 1}</td>
                                    <td>046000005</td>
                                    <td>0022</td>
                                    <td className="g-start">종로6가</td>
                                    <td>0022</td>
                                    <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                                    <td>다가</td>
                                    <td>221868620</td>
                                    <td>~</td>
                                    <td>221868620</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10000</td>
                                    <td>홍길동</td>
                                    <td>최종인수</td>
                                  </tr>
                                ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h3 className="o-heading level3"><span className="label">발송완료 상세</span></h3>

                          <div className="m-binds">
                            <div className="group">
                              <ImageButton label="엑셀​다운로드" icon="excel-download" />
                              <ImageButton label="목록출력" icon="print" />
                            </div>
                          </div>
                        </div>

                        <div className="main _primary rows-body-3i">
                          <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                          <div className="o-grid-table p-datatable">
                            <div className="table-container p-datatable-wrapper">
                              <table className="p-datatable-table p-datatable-scrollable-table">
                                <colgroup>
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col className="wdth-0" />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생일자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                    <th rowSpan={2} colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={11}>등록된 데이터가 없습니다.</td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(24)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td>046000005</td>
                                    <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10000</td>
                                    <td>홍길동</td>
                                    <td className="g-end">11</td>
                                    <td>다가</td>
                                    <td>221868620</td>
                                    <td>~</td>
                                    <td>221868620</td>
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
                </TabPanel>
              </Tabs>

            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default BSPDU0601M;
