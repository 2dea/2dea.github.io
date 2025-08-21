/**
 * @description 영업지원 > 대량신규 > 대량신규현황
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

function BSSLQ0301M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '영업지원' }, { label: '대량신규' }, { label: '대량신규현황' }];

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
                <span className="label">대량신규현황</span>

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
          <div className="o-grid">
            <div className="column">

              <Tabs className="o-section" defaultIndex={0}>
                <div className="m-calendar-header">
                  <div className="main">
                    <div className="year">
                      <span className="label" aria-label="선택 연도">2025</span>
                      <ImageButton label="이전 연도" icon="arrow-left" className="bind prev" />
                      <ImageButton label="다음 연도" icon="arrow-right" className="bind next" />
                    </div>

                    <div className="month">
                      <div className="o-radios type-tab">
                        <button type="button" className="bind"><span className="label">1월</span></button>
                        <button type="button" className="bind"><span className="label">2월</span></button>
                        <button type="button" className="bind"><span className="label">3월</span></button>
                        <button type="button" className="bind"><span className="label">4월</span></button>
                        <button type="button" className="bind"><span className="label">5월</span></button>
                        <button type="button" className="bind is-checked"><span className="label">6월</span></button>
                        <button type="button" className="bind"><span className="label">7월</span></button>
                        <button type="button" className="bind"><span className="label">8월</span></button>
                        <button type="button" className="bind"><span className="label">9월</span></button>
                        <button type="button" className="bind"><span className="label">10월</span></button>
                        <button type="button" className="bind"><span className="label">11월</span></button>
                        <button type="button" className="bind"><span className="label">12월</span></button>
                      </div>
                    </div>

                    <div className="today">
                      <CommonButton label="오늘" className="_normal" size={30} />
                    </div>
                  </div>

                  <div className="binds">
                    <div className="views">
                      <TabList className="o-toggles type-tab">
                        <Tab className="o-button"><Icon icon="calendar" /><span className="label">달력</span></Tab>
                        <Tab className="o-button"><Icon icon="menu-alt" /><span className="label">목록</span></Tab>
                      </TabList>
                    </div>
                  </div>
                </div>

                <div className="m-header">
                  <div className="o-length justify-start">
                    <span className="head">6월 총 접수좌수</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                    <span className="foot">(완료 0건 + 반려 0건)</span>
                  </div>

                  <div className="m-legend" aria-label="범례">
                    <span className="o-legend type-legend">
                      <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                      <span className="label">승인좌수</span>
                    </span>

                    <span className="o-legend type-legend">
                      <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                      <span className="label">신청좌수</span>
                    </span>
                  </div>
                </div>

                <div className="main _primary rows-auto">
                  <TabPanel className="o-calendar">
                    <div className="table-container">
                      <table>
                        <colgroup span={7}></colgroup>
                        <thead>
                          <tr>
                            <td className="fc-col-header-cell fc-day fc-day-sun"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">일</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-mon"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">월</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-tue"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">화</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-wed"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">수</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-thu"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">목</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-fri"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">금</span></div></td>
                            <td className="fc-col-header-cell fc-day fc-day-sat"><div className="fc-scrollgrid-sync-inner"><span className="fc-col-header-cell-cushion">토</span></div></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fc-day fc-day-sun fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">23</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">24</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">25</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">26</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">27</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-past fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">28</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">1</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="fc-day fc-day-sun fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">2</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">3</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">4</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">5</span>
                                  <em className="fc-daygrid-day-memo type-holiday">부처님오신날(대체 휴일)</em>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">6</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">7</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">8</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="fc-day fc-day-sun fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">9</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">10</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">11</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-00" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-00 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">[부산] 대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">12</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom">
                                    <CommonButton label="1건 더보기" className="_texted-primary" icon="sum-plus" />
                                  </div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">13</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">14</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-daygrid-event theme-key-00" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.theme-key-00 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">5일(금~화) 이어진 일정</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">15</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '1' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="fc-day fc-day-sun fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">16</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-end fc-daygrid-event theme-key-00" style={{ '--lw': '3' } as React.CSSProperties}>{/* .fc-event-end.theme-key-00 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">5일(금~화) 이어진 일정</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">17</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-event-harness">
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key-01" style={{ '--lw': '1' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key-01 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대량신규신청</div>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">18</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  <div className="fc-daygrid-event-harness"></div>

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">19</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">20</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">21</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">22</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="fc-day fc-day-sun fc-day-past fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">23</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-today fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">24</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">25</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">26</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">27</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">28</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">29</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="fc-day fc-day-sun fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">30</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-mon fc-day-future fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">31</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-tue fc-day-future fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">1</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-wed fc-day-future fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">2</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">3</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">4</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>

                            <td className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day">
                              <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                <div className="fc-daygrid-day-top">
                                  <span className="fc-daygrid-day-number">5</span>
                                </div>
                                <div className="fc-daygrid-day-events">
                                  {/* <div className="fc-daygrid-event-harness"></div> */}

                                  <div className="fc-daygrid-day-bottom"></div>
                                </div>
                                <div className="fc-daygrid-day-bg"></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>

                  <TabPanel className="m-schedule">
                    <div className="schedule-container">
                      <ul>
                        {/* <li className="colgroup">
                          <span className="col head"></span>
                          <span className="col data"></span>
                        </li> */}
                        <li>
                          <div className="head">
                            <div className="dates">
                              <span className="date month">06</span>
                              <span className="date day">01</span>
                              <span className="weekday day-sat">토요일</span>{/* span.weekday.day-sat { @DEV } */}
                            </div>
                          </div>

                          <div className="data">
                            <div className="header">
                              <div className="day-memo">
                                <span className="o-legend type-legend">
                                  <em className="o-legend-tag type-bullet theme-var-holiday"><span className="tag">(휴일)</span></em>
                                  <span className="label">부처님오신날(대체 휴일)</span>
                                </span>
                              </div>
                            </div>

                            <div className="bodies">
                              <ul className="o-schedule type-normal">
                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">승인좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">대량신규신청</a>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">신청좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat.</a>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">신청좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">대량신규신청</a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="head">
                            <div className="dates">
                              <span className="date month">04</span>
                              <span className="date day">04</span>
                              <span className="weekday day-sun">일요일</span>{/* span.weekday.day-sun { @DEV } */}
                            </div>
                          </div>

                          <div className="data"></div>
                        </li>

                        <li className="day-today">{/* li.day-today { @DEV } */}
                          <div className="head">
                            <div className="dates">
                              <span className="date month">06</span>
                              <span className="date day">03</span>
                              <span className="weekday">월요일</span>
                            </div>
                          </div>

                          <div className="data">
                            <div className="bodies">
                              <ul className="o-schedule type-normal">
                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">승인좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">대량신규신청</a>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">신청좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">대량신규신청</a>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">승인좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">[부산] 대량신규신청</a>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <div className="main">
                                    <div className="tags">
                                      <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                                      <span className="category">
                                        <em className="chip"><span className="label">신청좌수 : <span className="value">100</span>건</span></em>
                                      </span>
                                    </div>
                                    <div className="subject">
                                      <a href="javascript:" className="o-link _normal">[부산] 대량신규신청</a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="head">
                            <div className="dates">
                              <span className="date month">06</span>
                              <span className="date day">04</span>
                              <span className="weekday">화요일</span>
                            </div>
                          </div>

                          <div className="data">
                            <div className="header">
                              <div className="day-memo">
                                <span className="o-legend type-legend">
                                  <em className="o-legend-tag type-bullet theme-var-holiday"><span className="tag">(휴일)</span></em>
                                  <span className="label">임시 선거일</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="head">
                            <div className="dates">
                              <span className="date month">06</span>
                              <span className="date day">05</span>
                              <span className="weekday">수요일</span>
                            </div>
                          </div>

                          <div className="data"></div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>

            </div>

          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default BSSLQ0301M;
