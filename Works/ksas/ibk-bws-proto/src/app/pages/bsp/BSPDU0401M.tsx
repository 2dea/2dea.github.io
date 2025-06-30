/**
 * @description 중요용지·용도품(영업점) > 폐기 > 중요용지사고보고(영업점)
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

function BSPDU0401M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(영업점)' }, { label: '폐기' }, { label: '중요용지사고보고(영업점)' }];

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
                <span className="label">중요용지사고보고(영업점)</span>

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
              <div className="group _primary">
                <CommonButton label="사고보고등록" className="_lined-primary" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="사고보고서출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="사고보고서취소" className="_solid-primary" />
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

                  <div className="o-field colspan-4">
                    <Label label={`기간`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
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

                  <div className="o-field colspan-2">
                    <Label label={`부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} disabled />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" disabled />
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
                    <Tab className="link"><span className="label">사고보고등록대상</span></Tab>
                    <Tab className="link"><span className="label">사고보고등록완료</span></Tab>
                  </TabList>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">사고보고등록대상</span></h2>

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
                                  <col className="wdth-0" />
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
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소속팀</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생일자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오손등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오손등록자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                    <th rowSpan={2} colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사고보고등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">운용책임자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취급자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사건개요</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">영업점결재상태</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">프로세스혁신부결재상태</span></div></th>
                                    <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검사부결재상태</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={26}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(24)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td>{idx + 1}</td>
                                    <td>0465</td>
                                    <td className="g-start">종로6가</td>
                                    <td>일반</td>
                                    <td>BC0022</td>
                                    <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                                    <td>센터접수완료</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10012</td>
                                    <td>홍길동</td>
                                    <td className="g-end">30</td>
                                    <td>다가</td>
                                    <td>221868620</td>
                                    <td>~</td>
                                    <td>221868620</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>10012</td>
                                    <td>홍길동</td>
                                    <td>10012</td>
                                    <td>홍길동</td>
                                    <td className="g-start">김손님 고객(19001) 오전에 내점하여 체크카드 재발급 거래</td>
                                    <td>결재승인</td>
                                    <td>결재승인</td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="m-footer">
                          <ul className="m-bullets type-disc">
                            <li className="c-color-strong"><em>오손등록 후 결재완료된 경우 사고보고등록대상 내역에서 조회가 가능합니다.</em></li>
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
                          <h2 className="o-heading level2"><span className="label">사고보고등록완료</span></h2>

                          <div className="o-length">
                            <span className="head">전체</span>
                            <em className="data">
                              <span className="value">8</span>
                              <span className="units">건</span>
                            </em>
                          </div>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="결재선변경관리" className="_texted-primary" icon="link" />
                            </div>
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
                                  <col className="wdth-0" />
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
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소속팀</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발생일자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오손등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오손등록자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                    <th rowSpan={2} colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사고보고등록일자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">운용책임자</span></div></th>
                                    <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취급자</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사건개요</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">영업점결재상태</span></div></th>
                                    <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">프로세스혁신부결재상태</span></div></th>
                                    <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검사부결재상태</span></div></th>
                                  </tr>
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={26}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                  {[...Array(24)].map((e, idx) => (
                                    <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                      <td>{idx + 1}</td>
                                      <td>0465</td>
                                      <td className="g-start">종로6가</td>
                                      <td>일반</td>
                                      <td>BC0022</td>
                                      <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                                      <td>센터접수완료</td>
                                      <td><span className="o-digit type-date">2025-12-25</span></td>
                                      <td><span className="o-digit type-date">2025-12-25</span></td>
                                      <td>10012</td>
                                      <td>홍길동</td>
                                      <td className="g-end">30</td>
                                      <td>다가</td>
                                      <td>221868620</td>
                                      <td>~</td>
                                      <td>221868620</td>
                                      <td><span className="o-digit type-date">2025-12-25</span></td>
                                      <td>10012</td>
                                      <td>홍길동</td>
                                      <td>10012</td>
                                      <td>홍길동</td>
                                      <td className="g-start">김손님 고객(19001) 오전에 내점하여 체크카드 재발급 거래</td>
                                      <td>결재승인</td>
                                      <td>결재승인</td>
                                      <td></td>
                                      <td></td>
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

export default BSPDU0401M;
