/**
 * @description 공통·결재 > 거래정보관리 > 업무별거래정보관리
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

function ADMTI0101M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '공통·결재' }, { label: '거래정보관리' }, { label: '거래정보관리' }];

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
                <span className="label">업무별거래정보관리</span>

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

            {/* <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div> */}
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
                <Label label={`거래기간`} require={true} />
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
                <Label label={`업무구분코드`} require={false} />
                <div className="fields">
                  <div className="o-form _select">
                    <XDropdown appendTo={'self'} className="bind" />
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

            </div>

            <div className="binds">
              <CommonButton label="조회" className="_inquire" />
            </div>
          </form>

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">기간별업무현황</span></Tab>
                <Tab className="link"><span className="label">물류지원업무현황</span></Tab>
                <Tab className="link"><span className="label">자금현수송업무현황</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">업무별 거래 점검현황</span></h2>

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

                    <div className="main">
                      <div className="column">

                        <div className="o-data-table">
                          <div className="table-container">
                            <table className="table">
                              <colgroup>
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                              </colgroup>

                              <thead>
                                <tr>
                                  <th rowSpan={2}>항목</th>
                                  <th rowSpan={2}>전체</th>
                                  <th colSpan={3}>연도별</th>
                                  <th colSpan={3}>월별</th>
                                  <th colSpan={3}>일별</th>
                                </tr>
                                <tr>
                                  <th>전년도</th>
                                  <th>당해연도</th>
                                  <th>증감</th>
                                  <th>전월</th>
                                  <th>당월</th>
                                  <th>증감</th>
                                  <th>전일</th>
                                  <th>당일</th>
                                  <th>증감</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <th>결재건수</th>
                                  <td>69,965</td>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                                <tr>
                                  <th>중요용지인수도</th>
                                  <td>69,965</td>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                                <tr>
                                  <th>행내등기신청</th>
                                  <td>69,965</td>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                                <tr>
                                  <th>자금현송신청</th>
                                  <td>69,965</td>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                                <tr>
                                  <th>웹단말</th>
                                  <td>69,965</td>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">단말거래량</span></h2>
                    </div>

                    <div className="main">
                      <div className="column">

                        <div className="o-data-table">
                          <div className="table-container">
                            <table className="table">
                              <colgroup>
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                              </colgroup>

                              <thead>
                                <tr>
                                  <th colSpan={3}>연도별</th>
                                  <th colSpan={3}>월별</th>
                                  <th colSpan={3}>일별</th>
                                </tr>
                                <tr>
                                  <th>전년도</th>
                                  <th>당해연도</th>
                                  <th>전년동기</th>
                                  <th>전월</th>
                                  <th>당월</th>
                                  <th>전년동월</th>
                                  <th>전일</th>
                                  <th>당일</th>
                                  <th>전년동일</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">서버거래량</span></h2>
                    </div>

                    <div className="main">
                      <div className="column">

                        <div className="o-data-table">
                          <div className="table-container">
                            <table className="table">
                              <colgroup>
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                              </colgroup>

                              <thead>
                                <tr>
                                  <th colSpan={3}>연도별</th>
                                  <th colSpan={3}>월별</th>
                                  <th colSpan={3}>일별</th>
                                </tr>
                                <tr>
                                  <th>전년도</th>
                                  <th>당해연도</th>
                                  <th>전년동기</th>
                                  <th>전월</th>
                                  <th>당월</th>
                                  <th>전년동월</th>
                                  <th>전일</th>
                                  <th>당일</th>
                                  <th>전년동일</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td>38,965</td>
                                  <td>31,965</td>
                                  <td>-7,965</td>
                                  <td>88</td>
                                  <td>68</td>
                                  <td>-28</td>
                                  <td>8</td>
                                  <td>8</td>
                                  <td>-2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                      <h2 className="o-heading level2"><span className="label">물류지원업무현황</span></h2>
                    </div>

                    <div className="main">
                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup span={6}></colgroup>

                            <thead>
                              <tr>
                                <th>업무구분</th>
                                <th colSpan={5}>업무처리내용</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <th rowSpan={4}>중요용지</th>
                                <th rowSpan={2}>구분</th>
                                <th colSpan={3}>중요용지 배송</th>
                                <th rowSpan={2}>어음&middot;수표 인자</th>
                              </tr>
                              <tr>
                                <th colSpan={1}>서울</th>
                                <th colSpan={1}>지방</th>
                                <th colSpan={1}>계</th>
                              </tr>
                              <tr>
                                <th colSpan={1}>영업점(수)</th>
                                <td colSpan={1}>62</td>
                                <td colSpan={1}>88</td>
                                <td colSpan={1}>150</td>
                                <td colSpan={1}>22</td>
                              </tr>
                              <tr>
                                <th colSpan={1}>건</th>
                                <td colSpan={1}>62</td>
                                <td colSpan={1}>88</td>
                                <td colSpan={1}><strong>150</strong></td>
                                <td colSpan={1}><strong>7,410</strong></td>
                              </tr>
                            </tbody>

                            <tbody>
                              <tr>
                                <th rowSpan={3}>용도품</th>
                                <th colSpan={1}>구분</th>
                                <th colSpan={1}>서울</th>
                                <th colSpan={1}>지방</th>
                                <th colSpan={1}>계</th>
                                <th colSpan={1}>비고</th>
                              </tr>
                              <tr>
                                <th colSpan={1}>영업점(수)</th>
                                <td colSpan={1}>62</td>
                                <td colSpan={1}>88</td>
                                <td colSpan={1}>150</td>
                                <td colSpan={1} rowSpan={2}><strong>22 box</strong></td>
                              </tr>
                              <tr>
                                <th colSpan={1}>건</th>
                                <td colSpan={1}>62</td>
                                <td colSpan={1}>88</td>
                                <td colSpan={1}><strong>150</strong></td>
                              </tr>
                            </tbody>

                            <tbody>
                              <tr>
                                <th rowSpan={3}>폐기중요용지<br />(본부접수기준)</th>
                                <th>구분</th>
                                <th>전일미처리</th>
                                <th>접수</th>
                                <th>접수완료</th>
                                <th>미처리</th>
                              </tr>
                              <tr>
                                <th colSpan={1}>영업점(수)</th>
                                <td colSpan={1}></td>
                                <td colSpan={1}>88</td>
                                <td colSpan={1}>150</td>
                                <td colSpan={1}></td>
                              </tr>
                              <tr>
                                <th colSpan={1}>폐기수량(건)</th>
                                <td colSpan={1}></td>
                                <td colSpan={1}><strong>88</strong></td>
                                <td colSpan={1}><strong>150</strong></td>
                                <td colSpan={1}></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup span={6}></colgroup>

                            <thead>
                              <tr>
                                <th>업무구분</th>
                                <th colSpan={5}>업무처리내용</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <th rowSpan={2}>토지보상</th>
                                <th>전일미처리</th>
                                <th>접수</th>
                                <th>접수완료</th>
                                <th>미처리</th>
                                <th>영업점발송</th>
                              </tr>
                              <tr>
                                <td colSpan={1}></td>
                                <td colSpan={1}>8</td>
                                <td colSpan={1}><strong>7</strong></td>
                                <td colSpan={1}><strong>-</strong></td>
                                <td colSpan={1}></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup span={5}></colgroup>

                            <thead>
                              <tr>
                                <th>업무구분</th>
                                <th colSpan={4}>업무처리내용</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <th rowSpan={8}>메일센터<br />업무내역</th>
                                <th>우편발송</th>
                                <td colSpan={2}>1,276</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>우편접수</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>행내외문서</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>여성시대</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>중요용지 투입</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>행내등기 처리</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>대여반출 반송</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>메일센터 총건수</th>
                                <td colSpan={2}><strong>9,484</strong></td>
                                <td>건</td>
                              </tr>
                            </tbody>

                            <tbody>
                              <tr>
                                <th rowSpan={5}>서울 중앙 우체국<br />접수 내역</th>
                                <th>법원등기</th>
                                <td colSpan={2}>1,276</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>일반등기</th>
                                <td colSpan={2}>84</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>반송등기</th>
                                <td colSpan={2}>19</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>후납우편</th>
                                <td colSpan={2}>19</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>특급</th>
                                <td colSpan={2}>19</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th colSpan={2}>용산우체국</th>
                                <td colSpan={2}>26</td>
                                <td>건</td>
                              </tr>
                              <tr>
                                <th>기타</th>
                                <th>본점수령</th>
                                <td>-</td>
                                <td>건</td>
                                <th>압류</th>
                              </tr>
                              <tr>
                                <th colSpan={2}>등기총건수</th>
                                <td colSpan={2}>1,382</td>
                                <td ><strong>1,007</strong></td>
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

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">자금 현&middot;수송(자금중계) 내역</span></h2>

                      <div className="o-legend type-helper style-normal">
                        <em className="label">(단위: 원)</em>
                      </div>
                    </div>

                    <div className="main">
                      <div className="column">

                        <div className="o-data-table">
                          <div className="table-container">
                            <table className="table">
                              <colgroup>
                                {/* <col style={{ width: '25%' }} /> */}
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                                <col style={{ width: '' }} />
                              </colgroup>

                              <thead>
                                <tr>
                                  <th colSpan={3} rowSpan={2}>구분</th>
                                  <th colSpan={2}>내용</th>
                                </tr>
                                <tr>
                                  <th>영업점수</th>
                                  <th>금액</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <th rowSpan={6}>영업점</th>
                                  <td rowSpan={3}>청구</td>
                                  <td>원화</td>
                                  <td>18</td>
                                  <td>4,635,651,000</td>
                                </tr>
                                <tr>
                                  <td>외화</td>
                                  <td>18</td>
                                  <td>4,635,651,000</td>
                                </tr>
                                <tr className="subtotal-trow">
                                  <th className="subtotal-tcell">소계</th>
                                  <td className="subtotal-tcell">18</td>
                                  <td className="subtotal-tcell">4,635,651,000</td>
                                </tr>
                                <tr>
                                  <td rowSpan={3}>불입</td>
                                  <td>원화</td>
                                  <td>18</td>
                                  <td>4,635,651,000</td>
                                </tr>
                                <tr>
                                  <td>외화</td>
                                  <td>18</td>
                                  <td>4,635,651,000</td>
                                </tr>
                                <tr className="subtotal-trow">
                                  <th className="subtotal-tcell">소계</th>
                                  <td className="subtotal-tcell">18</td>
                                  <td className="subtotal-tcell">4,635,651,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
    </>
  );
}

export default ADMTI0101M;
