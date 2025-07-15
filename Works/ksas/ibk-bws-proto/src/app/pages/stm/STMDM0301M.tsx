/**
 * @description 재난·안전관리 > 배차관리 > 배차관리
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

function STMDM0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '배차관리' }, { label: '배차관리' }];

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
                <span className="label">배차관리</span>

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

              <div className="o-section">
                <div className="o-board-list">
                  <div className="item">
                    <div className="info">
                      <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      {/* <ImageButton label="이미지" icon="attach" /> */}
                      <span className="name">배차가능차량</span>
                    </div>
                    <div className="data">
                      <strong>100</strong>
                    </div>
                  </div>

                  <div className="item">
                    <div className="info">
                      <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      {/* <ImageButton label="이미지" icon="attach" /> */}
                      <span className="name">배차가능차량</span>
                    </div>
                    <div className="data">
                      <strong>100</strong>
                    </div>
                  </div>

                  <div className="item">
                    <div className="info">
                      <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      {/* <ImageButton label="이미지" icon="attach" /> */}
                      <span className="name">배차가능차량</span>
                    </div>
                    <div className="data">
                      <strong>100</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="o-board-list o-board-data">
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list">
                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>

                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list">
                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>

                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list">
                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>

                        <li className="item-level-01">
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                          <div className="data-list">
                            <span className="name">완료</span>
                            <strong className="data">000</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              <div className="o-section">
                <div className="o-board-list o-board-data">
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list-grid">
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list-grid">
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="head">
                      <div className="title">본부</div>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </div>

                    <div className="body">
                      <ul className="data-list-grid">
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                        <li className="item">
                          <span className="name">완료</span>
                          <strong className="data">000</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              <div className="o-section">
                <div className="o-board-list o-board-data">

                  <div className="item">
                    <div className="head">
                      <div className="title-area">
                        <div className="title">배차가능차량</div>
                        <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      </div>
                      <div className="data">
                        <strong>100</strong>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="head">
                      <div className="title-area">
                        <div className="title">배차가능차량</div>
                        <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      </div>
                      <div className="data">
                        <strong>100</strong>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="head">
                      <div className="title-area">
                        <div className="title">배차가능차량</div>
                        <i className="o-icon _test wdth-70" aria-hidden="true"></i>
                      </div>
                      <div className="data">
                        <strong>100</strong>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`차량번호`} require={false} />
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

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

            </div>
          </div>

          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">배차 가능 차량</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="긴급재정비" className="_solid-primary" />
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
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위치</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차종색상</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(5)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>IT센터</td>
                              <td>12가1234</td>
                              <td>다이너스티3.0</td>
                              <td>검정</td>
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
                  <h2 className="o-heading level2"><span className="label">배차 대기 차량</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="배차취소" className="_lined-primary" />
                      <CommonButton label="배차" className="_solid-primary" />
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위치</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청차량</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출발일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">도착예정일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">목적지</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">내용</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시각</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={13}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(5)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>IT센터</td>
                              <td>PD011</td>
                              <td className="g-start">프로세스혁신부</td>
                              <td>012345</td>
                              <td>홍길동</td>
                              <td>12가1234</td>
                              <td>다이너스티3.0</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>부산</td>
                              <td>출장</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </SplitterPanel>

            <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">배차 이용 중 차량</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="반납완료" className="_solid-primary" />
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">위치</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">도착예정일자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청차량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">목적지</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">내용</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차종</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={11}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(5)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td>PD011</td>
                              <td className="g-start">프로세스혁신부</td>
                              <td>012345</td>
                              <td>홍길동</td>
                              <td>12가1234</td>
                              <td>다이너스티3.0</td>
                              <td>부산</td>
                              <td>출장</td>
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
                  <h2 className="o-heading level2"><span className="label">재정비 중 차량</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="재정비완료" className="_solid-primary" />
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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량정보</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량 반납일</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정비 완료일</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고 (시일이 오래걸릴 경우)</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차량번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">날짜</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">날짜</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시각</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={9}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(5)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>12가1234</td>
                              <td>다이너스티3.0</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td className="g-start"></td>
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

export default STMDM0301M;
