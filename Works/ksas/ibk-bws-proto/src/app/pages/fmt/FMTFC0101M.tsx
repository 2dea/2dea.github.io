/**
 * @description 자금현수송 > 외화정사 > 일일실적관리 > 실적내역
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

function FMTFC0101M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '외화정사' }, { label: '일일실적관리' }];

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
                <span className="label">일일실적관리</span>

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
                  <CommonButton label="상세출력" className="_texted" />
                </div>

                <div className="m-print-binds">
                  <CommonButton label="신고서출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="취소" className="_cancel" />
                <CommonButton label="재등록" className="_solid-primary" />
                <CommonButton label="등록" className="_solid-primary" />
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
                    <Label label={`등록기간`} require={true} />
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
                    <Label label={`결재상태`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`등록직원`} require={false} />
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
                    <Label label={`취소포함`} require={false} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputCheck label="선택" labelHidden />
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
                <Tab className="link"><span className="label">실적내역</span></Tab>
                <Tab className="link"><span className="label">위폐과부족내역</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">실적내역</span></h2>

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
                              <col className="wdth-auto" />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록직원</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">거래일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">거래시각</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취소일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실적내용</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={11}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>{idx + 1}</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>10000</td>
                                  <td>홍길동</td>
                                  <td>결재요청</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td><span className="o-digit type-time">00:00</span></td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td className="g-start">CNY, EUR, USD 실적등록</td>
                                  <td className="g-start"></td>
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
                      <h3 className="o-heading level3"><span className="label">실적상세내역</span></h3>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>

                      <div className="m-binds">
                        <div className="m-binds">
                          <div className="group">
                            <CommonButton label="위폐신고서 등록" className="_normal" />
                          </div>
                        </div>

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
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업대상</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사(매수)</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정사금액</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">미정사매수</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과부족(매수)</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과부족금액(혼입)</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재사용률 (%)</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료절감액</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">매수</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용권</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">손상권</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과여</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부족</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위폐</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">혼입</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">과여</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부족</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={18}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>{idx + 1}</td>
                                  <td className="g-start">EUR (유럽연합 유로)</td>
                                  <td>100</td>
                                  <td className="g-end">10,000</td>
                                  <td className="g-end">30,000</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
                                  <td className="g-end">10</td>
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
                      <h4 className="o-heading level4"><span className="label">위폐과부족 상세정보</span></h4>

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
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발견일자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종류</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기번호</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th colSpan={10} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위조방식</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수신기관</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">특이사항</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신고자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                              </tr>
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위조방법</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">숨은그림</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">은선</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">홀로그램</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">색변환잉크</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">형광물질</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">합지여부</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이미지</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재료</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재질</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={22}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>CNY 100</td>
                                  <td>HH17952124A</td>
                                  <td>1장</td>
                                  <td>인쇄기</td>
                                  <td>삽입</td>
                                  <td>진폐와 유사</td>
                                  <td>삽입</td>
                                  <td></td>
                                  <td>없음</td>
                                  <td>없음</td>
                                  <td>변하지 않음</td>
                                  <td>나타나지 않음</td>
                                  <td>앞면위폐, 뒷면위폐</td>
                                  <td>남대문경찰서, 한국은행 본부</td>
                                  <td className="g-start">수납지점: 동대문 지점</td>
                                  <td>000000</td>
                                  <td>홍길동</td>
                                  <td>000000</td>
                                  <td>홍길동</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>결재요청</td>
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
                      <h2 className="o-heading level2"><span className="label">위폐과부족내역</span></h2>

                      <div className="m-binds">
                        <div className="m-binds">
                          <div className="group">
                            <CommonButton label="우편물 발송신청" className="_normal" />
                          </div>
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
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발견일자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종류</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기번호</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th colSpan={10} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위조방식</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수신기관</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">특이사항</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신고자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                <th rowSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                              </tr>
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위조방법</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">숨은그림</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">은선</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">홀로그램</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">색변환잉크</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">형광물질</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">합지여부</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이미지</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재료</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방법</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재질</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={22}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>{idx + 1}</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>CNY 100</td>
                                  <td>HH17952124A</td>
                                  <td>1장</td>
                                  <td>인쇄기</td>
                                  <td>삽입</td>
                                  <td>진폐와 유사</td>
                                  <td>삽입</td>
                                  <td></td>
                                  <td>없음</td>
                                  <td>없음</td>
                                  <td>변하지 않음</td>
                                  <td>나타나지 않음</td>
                                  <td>앞면위폐, 뒷면위폐</td>
                                  <td>남대문경찰서, 한국은행 본부</td>
                                  <td className="g-start">수납지점: 동대문 지점</td>
                                  <td>000000</td>
                                  <td>홍길동</td>
                                  <td>000000</td>
                                  <td>홍길동</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>결재요청</td>
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
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTFC0101M;
