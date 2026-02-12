/**
 * @description 공통·결재 > 대사관리 > 수입인지정산모니터링
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

function ADMRC0501M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '공통·결재' }, { label: '대사관리' }, { label: '수입인지정산모니터링' }];

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
                <span className="label">수입인지정산모니터링</span>

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

          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <form className="m-filter-form">
            <div className="fieldset">

              <div className="o-field colspan-2">
                <Label label={`검색기준`} require={true} />
                <div className="fields">
                  <div className="o-form _select mode-required wdth-50">
                    <XDropdown appendTo={'self'} className="bind" />
                    <i aria-hidden="true"></i>
                  </div>

                  <div className="o-form _select mode-required wdth-50">
                    <XDropdown appendTo={'self'} className="bind" />
                    <i aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              {/* <div className="o-field">
                <Label label={`기준일자`} require={true} />
                <div className="fields">
                  <div className="o-form _input type-date mode-required wdth-50">
                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                    <i aria-hidden="true"></i>
                  </div>
                </div>
              </div> */}

            </div>

            <div className="binds">
              <CommonButton label="조회" className="_inquire" />
            </div>
          </form>

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">정산(전/후)금액 비교</span></Tab>
                <Tab className="link"><span className="label">프로시저(전/후)상세 비교</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">

                <div className="column">

                  <div className="o-section">
                    <div className="main">
                      <div className="m-data-creator">
                        <div className="header">
                          <strong className="heading">정산(전/후) 작업 검증 자료 생성</strong>
                        </div>

                        <div className="bodies">
                          <ul className="m-grid-list flow-cols">
                            <li className="colspan-2">
                              <div className="main">
                                <div className="order"><span className="count">1</span></div>
                                <div className="subject">수입인지정산 전 일별창구재고이력, 수입인지재고내역(선납분), 수입인지 선납잔여금액 테이블 백업</div>
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">2</span></div>
                                <div className="subject">수입인지정산 전 수입인지비교대사 검증 1, 2 쿼리 수행(JYCO140B 수행 전)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                                <CommonButton label="수입인지비교대사검증 (전)" className="_solid-primary" />
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">3</span></div>
                                <div className="subject">수입인지정산 후납 자료 생성(JYCO140B)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">4</span></div>
                                <div className="subject">수입인지정산 전 수입인지비교대사 검증 1, 2 쿼리 수행(JYCO140B 수행 후)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                                <CommonButton label="수입인지비교대사검증 (후)" className="_solid-primary" />
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">5</span></div>
                                <div className="subject">부점별 선납입 금액 차감 처리(JYCO141B 수행 전)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                                <CommonButton label="선납입 금액 차감 처리 (전)" className="_solid-primary" />
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">6</span></div>
                                <div className="subject">대금정산 자료 생성(JYCO141B)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                              </div>
                            </li>

                            <li>
                              <div className="main">
                                <div className="order"><span className="count">7</span></div>
                                <div className="subject">부점별 선납입 금액 차감 처리(JYCO141B 수행 후)</div>
                              </div>
                              <div className="binds">
                                {/* <CommonButton label="취소" className="_cancel" /> */}
                                <CommonButton label="선납입 금액 차감 처리 (후)" className="_solid-primary" />
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="footer">
                          <dl className="m-defines">
                            <div className="group">
                              <dt className="head">비교검증값</dt>
                              <dd className="data">0</dd>
                            </div>
                          </dl>
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
                      <h2 className="o-heading level2"><span className="label">수입인지 비교대사 검증 1,2(JYCO1408B 실행 전)</span></h2>

                      <div className="m-binds">
                        <div className="group">
                          <ImageButton label="엑셀​다운로드" icon="excel-download" />
                          <ImageButton label="목록출력" icon="print" />
                        </div>
                      </div>
                    </div>

                    <div className="main _primary rows-body-3i">
                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup span={6}></colgroup>

                            <thead>
                              <tr>
                                <th colSpan={1}>전월-현월 재고수량</th>
                                <th colSpan={1}>현월 재고수량</th>
                                <th colSpan={1}>전월 재고수량</th>
                                <th colSpan={1}>2개월전 재고수량</th>
                                <th colSpan={1}>3개월전 재고수량</th>
                                <th colSpan={1}>4개월전 재고수량</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                              </tr>
                              <tr>
                                <td colSpan={1} className="g-end"></td>
                                <td colSpan={1} className="g-end"></td>
                                <td colSpan={1} className="g-end"></td>
                                <td colSpan={1} className="g-end"></td>
                                <td colSpan={1} className="g-end"></td>
                                <td colSpan={1} className="g-end"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

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
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출금번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규취소</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이월</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이월취소</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납재고</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={6}>
                                  <div className="gridtable-empty">등록된 데이터가 없습니다.</div>
                                </td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(10)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>2107</td>
                                  <td className="g-start">중금채등록통장(거치식)</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">700</td>
                                  <td className="g-end">700</td>
                                </tr>
                              ))}
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
                      <h2 className="o-heading level2"><span className="label">수입인지 비교대사 검증 1,2(JYCO1408B 실행 후)</span></h2>

                      <div className="m-binds">
                        <div className="group">
                          <ImageButton label="엑셀​다운로드" icon="excel-download" />
                        </div>
                      </div>
                    </div>

                    <div className="main _primary rows-body-3i">
                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup span={6}></colgroup>

                            <thead>
                              <tr>
                                <th colSpan={1}>전월-현월 재고수량</th>
                                <th colSpan={1}>현월 재고수량</th>
                                <th colSpan={1}>전월 재고수량</th>
                                <th colSpan={1}>2개월전 재고수량</th>
                                <th colSpan={1}>3개월전 재고수량</th>
                                <th colSpan={1}>4개월전 재고수량</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                              </tr>
                              <tr>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                                <td colSpan={1} className="g-end">9,999</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

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
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출금번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규취소</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이월</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이월취소</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납재고</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={6}>
                                  <div className="gridtable-empty">등록된 데이터가 없습니다.</div>
                                </td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(10)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>2107</td>
                                  <td className="g-start">중금채등록통장(거치식)</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">7,000</td>
                                  <td className="g-end">700</td>
                                  <td className="g-end">700</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* <div className="main">
                      <form className="m-data-form">
                        <table className="table">
                          <colgroup>
                            <col className="head" />
                            <col className="data" />
                          </colgroup>

                          <tbody>
                            <tr>
                              <th colSpan={1}>
                                <Label label={`비교검증값`} require={false} />
                              </th>
                              <td colSpan={1}>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input g-end wdth-70">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </div> */}
                  </div>

                </div>

              </div>

            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">프로시저(전/후) 부점별 상세내역</span></h2>

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
                      <div className="m-total">
                        <dl className="m-defines">
                          {/* <div className="group">
                            <dt className="head">정산금액 합계</dt>
                            <dd className="data">200,000,000</dd>
                          </div> */}

                          <div className="group">
                            <dt className="head">전/후 비교 차액</dt>
                            <dd className="data">200,000,000</dd>
                          </div>
                        </dl>
                      </div>

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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계정부점</span></div></th>
                                <th colSpan={6} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실행 전</span></div></th>
                                <th colSpan={6} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실행 후</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업일시</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">집행금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">집행환수금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산대상금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납정산금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">후납정산금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업일시</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">집행금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">집행환수금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산대상금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납정산금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">후납정산금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={17}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td>{idx + 1}</td>
                                <td>0465</td>
                                <td className="g-start">회기역출장소</td>
                                <td>0465</td>
                                <td className="g-start">회기역출장소</td>
                                <td><span className="o-digit type-datetime">2025-12-25 09:10:59</span></td>
                                <td className="g-end">1,000,050</td>
                                <td className="g-end">0</td>
                                <td className="g-end">1,000,050</td>
                                <td className="g-end">0</td>
                                <td className="g-end">1,000</td>
                                <td><span className="o-digit type-datetime">2025-12-25 09:10:59</span></td>
                                <td className="g-end">1,000,050</td>
                                <td className="g-end">0</td>
                                <td className="g-end">1,000,050</td>
                                <td className="g-end">0</td>
                                <td className="g-end">1,000</td>
                              </tr>
                            ))}
                            </tbody>

                            <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                              <tr className="sumtotal-trow">
                                <td colSpan={6} className="sumtotal-tcell">합계</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">0</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">0</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">0</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">0</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">0</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                              </tr>
                            </tfoot>

                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="o-section">

                    <div className="main">
                      <form className="m-data-form">
                        <table className="table">
                          <colgroup>
                            <col className="head" />
                            <col className="data" />
                            <col className="head" />
                            <col className="data" />
                          </colgroup>

                          <tbody>
                            <tr>
                              <th colSpan={1}>
                                <Label label={`정산금액 합계`} require={false} />
                              </th>
                              <td colSpan={1} className="g-end">1,000,000,000</td>
                              <th colSpan={1}>
                                <Label label={`전/후 비교 차액`} require={false} />
                              </th>
                              <td colSpan={1} className="g-end">1,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </div>

                  </div> */}



                </div>
              </div>
            </TabPanel>

            {/* <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">용도품 출금 내역 vs 기타 정산자료 생성 확인 (기준년도 내 출금 후 미입금 내역)</span></h2>

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

                    <div className="main _primary rows-body-3i">
                      <DataTable className="o-grid-table g-hide" />
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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th colSpan={6} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">용도품 출금 내역(물품구매대금)</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기타정산 내역(부점별 정산자료 생성)</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">거래일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계정코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">항목코드(명)</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정정일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기타정산번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산구분</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산(입금)금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={11}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>{idx + 1}</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>20251111</td>
                                <td>피복비</td>
                                <td className="g-end">1,000</td>
                                <td>기타</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>20250010000</td>
                                <td>정산대기</td>
                                <td>업체직배송정산</td>
                                <td className="g-end">700</td>
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
                      <h2 className="o-heading level2"><span className="label">해당 기준분기 기타정산 내역</span></h2>

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

                    <div className="main _primary rows-body-3i">
                      <DataTable className="o-grid-table g-hide" />
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
                                <th colSpan={6} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">용도품 출금 내역(물품구매대금)</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기타정산 내역(부점별 정산자료 생성)</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">거래일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계정코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">항목코드(명)</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정정일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기타정산번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산구분</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산(입금)금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={12}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                  <td><InputCheck label="선택" labelHidden /></td>
                                  <td>{idx + 1}</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>20251111</td>
                                  <td>피복비</td>
                                  <td className="g-end">1,000</td>
                                  <td>기타</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>20250010000</td>
                                  <td>정산대기</td>
                                  <td>업체직배송정산</td>
                                  <td className="g-end">700</td>
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

              <div className="div-footer">
                <div className="m-binds type-end">

                  <div className="group _primary">
                    <CommonButton label="정산완료" className="_solid-primary" />
                  </div>

                </div>
              </div>
            </TabPanel> */}

            {/* <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">본부 영업점 정산합계(소모품비)</span></h2>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>인도수량합계</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                                <th>정산금액</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>본부</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>영업점</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>

                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h3 className="o-heading level3"><span className="label">상세정보</span></h3>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>인도정산</td>
                                <td className="g-end">999</td>
                                <td className="g-end">-</td>
                              </tr>
                              <tr>
                                <td>인도취소</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>기타정산</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
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
                      <h2 className="o-heading level2"><span className="label">본부 영업점 정산합계(인쇄비)</span></h2>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>인도수량합계</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                                <th>정산금액</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>본부</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>영업점</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>

                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h3 className="o-heading level3"><span className="label">상세정보</span></h3>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>인도정산</td>
                                <td className="g-end">999</td>
                                <td className="g-end">-</td>
                              </tr>
                              <tr>
                                <td>인도취소</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>폐기정산</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>폐기취소</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
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
                      <h2 className="o-heading level2"><span className="label">본부 영업점 정산합계(전산소모품비)</span></h2>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                              <col style={{ width: '15%' }} />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>인도수량합계</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                                <th>정산금액</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>본부</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>
                              <tr>
                                <td>영업점</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                                <td className="g-end">999</td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h3 className="o-heading level3"><span className="label">상세정보</span></h3>
                    </div>

                    <div className="main _primary rows-auto">
                      <div className="o-grid-table type-table">
                        <div className="table-container">
                          <table>
                            <colgroup>
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead>
                              <tr>
                                <th>구분</th>
                                <th>집행금액합계</th>
                                <th>환수금액합계</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>인도정산</td>
                                <td className="g-end">999</td>
                                <td className="g-end">-</td>
                              </tr>
                              <tr>
                                <td>인도취소</td>
                                <td className="g-end">-</td>
                                <td className="g-end">999</td>
                              </tr>
                            </tbody>

                            <tfoot className="sumtotal-tfoot">
                              <tr className="sumtotal-trow">
                                <td>총합계</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="div-footer">
                <div className="m-binds type-end">

                  <div className="group _primary">
                    <CommonButton label="피벗다운로드" className="_solid-primary" />
                    <CommonButton label="피벗생성" className="_solid-primary" />
                  </div>

                </div>
              </div>
            </TabPanel> */}

          </Tabs>
        </div>
      </div>
    </>
  );
}

export default ADMRC0501M;
