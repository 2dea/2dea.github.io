/**
 * @description 자금현수송 > 외화정사 > 관련조회 및 출력 > 실적내역
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
import { InputMask } from 'primereact/inputmask';
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

function FMTCC0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '자금현수송' }, { label: '외화정사' }, { label: '관련조회 및 출력' }];

  // InputText
  const [value, setValue] = useState<string>('');

  // InputMask
  const [Mask, setMask] = useState(null);

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
                <span className="label">관련조회 및 출력</span>

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
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field colspan-2">
                    <Label label={`정사일자`} require={true} />
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
                    <Label label={`업무지원센터`} require={false} />
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


            </div>
          </div>

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">원화정사내역(권종별)</span></Tab>
                <Tab className="link"><span className="label">과부족금내역(영업점별)</span></Tab>
                <Tab className="link"><span className="label">과부족금내역(과부족금별)</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">원화정사내역(권종별)</span></h2>

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
                          <ImageButton label="목록필터" icon="column-toggle" />
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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청(인도)</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결과(인수)</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사상태</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과부족금</span></div></th>
                                <th rowSpan={2}  className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용권</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">손상권</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">극손상권</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">자투리</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부족금</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과여금</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위폐</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={14}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(4)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>5만원권</td>
                                  <td className="g-end">3000</td>
                                  <td className="g-end">30,000</td>
                                  <td className="g-end">3000</td>
                                  <td className="g-end">30,000</td>
                                  <td className="g-end">3000</td>
                                  <td className="g-end">00</td>
                                  <td className="g-end">00</td>
                                  <td className="g-end">00</td>
                                  <td className="g-end">100</td>
                                  <td className="g-end">100</td>
                                  <td className="g-end">100</td>
                                  <td className="g-end">400</td>
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

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">과부족금내역(영업점별)</span></h2>

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
                          <ImageButton label="목록필터" icon="column-toggle" />
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
                              <col />
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
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">헌송부점</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">불입일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사유</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(4)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>10000</td>
                                  <td className="g-start">부산</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>부족</td>
                                  <td>5만원권</td>
                                  <td className="g-end">3000</td>
                                  <td className="g-start">사유를 여기에 표시해줍니다.</td>
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

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">과부족금내역(과부족금별)</span></h2>

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
                          <ImageButton label="목록필터" icon="column-toggle" />
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
                              <col />
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
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">불입일자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">헌송부점</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사원</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사유</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(4)].map((e, idx) => (
                                <>
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10000</td>
                                    <td className="g-start">부산</td>
                                    <td>부족</td>
                                    <td>5만원권</td>
                                    <td className="g-end">3000</td>
                                    <td>홍길동</td>
                                    <td className="g-start">사유를 여기에 표시해줍니다.</td>
                                  </tr>
                                  {
                                    (idx - 2) % 3 === 0 &&
                                    <tr className="p-rowgroup-footer subtotal-trow">
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell g-start">소계</td>
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell g-end">99,999</td>
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell"></td>
                                      {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                                    </tr>
                                  }
                                </>
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
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTCC0301M;
