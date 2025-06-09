/**
 * @description 재난·안전관리 > 버스배차신청 > 배차일정표
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

function STMBR0201M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '버스배차신청' }, { label: '배차일정표' }];

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
                <span className="label">배차일정표</span>

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
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-calendar-header">

                </div>

                <div className="m-header">
                  <div className="o-length justify-start">
                    <span className="head">3월 총 접수좌수</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                    <span className="foot">(완료 0건 + 반려 0건)</span>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>

                </div>

                <div className="main _primary rows-auto">
                  <div className="o-calendar">
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
                                  <em className="fc-daygrid-day-memo type-holyday">부처님오신날(대체 휴일)</em>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대면상품집합교육 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대면상품집합교육 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key2" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key2 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">VM연수 / 1대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대면상품집합교육 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대면상품집합교육 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-daygrid-event theme-key2" style={{ '--lw': '2' } as React.CSSProperties}>{/* .fc-event-start.theme-key2 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">5일(금~화) 이어진 일정 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '1' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트긴제목테스트 / 3대</div>
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
                                    <a className="fc-event fc-event-end fc-daygrid-event theme-key2" style={{ '--lw': '3' } as React.CSSProperties}>{/* .fc-event-end.theme-key2 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">5일(금~화) 이어진 일정 / 3대</div>
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
                                    <a className="fc-event fc-event-start fc-event-end fc-daygrid-event theme-key1" style={{ '--lw': '1' } as React.CSSProperties}>{/* .fc-event-start.fc-event-end.theme-key1 { @DEV } */}
                                      <div className="fc-event-main">
                                        <div className="fc-event-main-frame">
                                          <div className="fc-event-time">09:30</div>
                                          <div className="fc-event-title-container">
                                            <div className="fc-event-title">대면상품집합교육 / 3대</div>
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
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default STMBR0201M;
