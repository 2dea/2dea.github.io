/**
 * @description 자금현수송 > 외화현수송 > 외화시재금현황
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

function FMTFT0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '외화현수송' }, { label: '외화시재금현황' }];

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
            <BreadCrumb model={paths} home={{ icon: 'o-icon _breadcrumb-home' }} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">외화시재금현황</span>

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

              <div className="group _primary">
                <CommonButton label="결재요청" className="_solid-primary" />
              </div>
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
                <CommonButton label="확정" className="_solid-primary" />
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

                  <div className="o-field">
                    <Label label={`기준일자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`관할업무센터`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" disabled />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`통화`} require={false} />
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
            <div className="m-tab type2 type-step">
              <TabList className="lists">
                <Tab className="link"><span className="label">시재금현황</span></Tab>
                <Tab className="link"><span className="label">시재금상세</span></Tab>
                <Tab className="link"><span className="label">과부족현황</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-board type-b">
                    <div className="o-notice">
                      <div className="main">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">결재상태</dt>
                            <dd className="data">
                              <span className="o-status-text type-20">결재요청</span>
                              {/* 결재요청, 결재중(부점장), 결재반려, 결재승인, 결재요청 취소 */}
                            </dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">시재금현황</span></h2>

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

                    <div className="main _primary rows-body-5i">
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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">국가</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화폐명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">외화금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">적용환율</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">원화 환산금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={7}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>미국</td>
                                <td>달러</td>
                                <td>USD</td>
                                <td>kr</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                            ))}
                            </tbody>

                            <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                              <tr className="sumtotal-trow">
                                <td colSpan={4} className="sumtotal-tcell">합계</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell"></td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">원화환산금액</span></h2>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">{/* [하드코딩] */}
                        <div className="table-container">
                          <table>
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

                            <thead>
                              <tr>
                                <th>전일잔액</th>
                                <th>당일청구</th>
                                <th>수출</th>
                                <th>지급액 합계</th>
                                <th>당일불입</th>
                                <th>수입</th>
                                <th>수납액 합계</th>
                                <th>환차액</th>
                                <th>합계</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999,9999</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">평균수납/지급액현황</span></h2>

                      <div className="o-legend type-helper style-normal">
                        <em className="label">최근 5영업일 기준</em>
                      </div>

                      <div className="o-field">
                        <div className="fields">
                          <div className="o-form _select wdth-50">
                            <XDropdown appendTo={document.body} className="bind" />
                            <i aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">{/* [하드코딩] */}
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>평균수납액</th>
                                <th>평균지급액</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>
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

                  <div className="o-board type-b">
                    <div className="o-notice">
                      <div className="main">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">상태</dt>
                            <dd className="data">
                              <span className="o-status-text type-20">미확정</span>
                              {/* <span className="o-status-text type-80">확정</span> */}
                            </dd>
                          </div>
                        </dl>
                      </div>


                      <div className="binds">
                        <div className="m-mixed-field">
                          <div className="o-field">
                            <Label label={`시재업데이트일시`} require={false} />
                            <div className="fields">
                              <div className="string o-digit type-datetime">2025-12-25 04:36:12</div>
                            </div>
                          </div>

                          <div className="m-inline-binds">
                            <CommonButton label="시재업데이트" className="_normal" />
                            <CommonButton label="검증" className="_solid-secondary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">시재금상세</span></h2>

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
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전일시재</span></div></th>
                                <th colSpan={6} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신권 및 정사권</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">미정사권</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수출권</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">합계</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통합단말합계</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검증여부</span></div></th>
                                <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당일 변동액</span></div></th>
                              </tr>
                              <tr>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">청구</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수입</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">불입</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수출</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사</span></div></th>

                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={21}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <>
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                    <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                      {
                                        (idx) % 3 === 0 &&
                                        <>USD</>/* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                      }
                                    </td>
                                    <td>50</td>
                                    <td className="g-end">400,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">400,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">400,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">400,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">400,000</td>
                                    <td className="g-end">20,000</td>
                                    <td className="g-end">20,000,000</td>
                                    <td className="g-end">20,000</td>
                                    <td></td>
                                    <td className="g-end">-5,000</td>
                                    <td className="g-end">20,000,000</td>
                                  </tr>
                                  {
                                    (idx - 2) % 3 === 0 &&
                                    <tr className="p-rowgroup-footer subtotal-trow">
                                      <td className="subtotal-tcell"></td>
                                      <td className="subtotal-tcell g-start">합계</td>
                                      <td className="subtotal-tcell g-end">400,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">400,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">400,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">400,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">400,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell g-end">20,000,000</td>
                                      <td className="subtotal-tcell g-end">20,000</td>
                                      <td className="subtotal-tcell"><span className="o-status-text style-inherit type-20">불일치</span>{/* <>일치</> { @DEV } */}</td>
                                      <td className="subtotal-tcell g-end">-5,000</td>
                                      <td className="subtotal-tcell g-end">20,000,000</td>
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

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">과부족현황</span></h2>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>

                      <div className="m-binds">
                        <div className="group">
                          <CommonButton label="행추가" className="_normal" />
                          <CommonButton label="행삭제" className="_normal" />
                          <CommonButton label="취소" className="_normal" />
                        </div>

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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기준일자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생구분<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생금액<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사유<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={12}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <>
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>{idx + 1}</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-50">
                                            <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                            <span className="inner-binds">
                                              <ImageButton label="초기화" icon="remove" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="g-start">을지로</td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-50 g-end">
                                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>012345</td>
                                    <td>홍길동</td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-50">
                                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              ))}
                            </tbody>

                            <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                              <tr className="sumtotal-trow">
                                <td colSpan={8} className="sumtotal-tcell">합계</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell"></td>
                                <td className="sumtotal-tcell"></td>
                                <td className="sumtotal-tcell"></td>
                              </tr>
                            </tfoot>
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

export default FMTFT0301M;
