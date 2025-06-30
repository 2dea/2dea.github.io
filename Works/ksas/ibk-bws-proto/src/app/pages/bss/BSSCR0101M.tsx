/**
 * @description 영업지원 > 캘린더신청 > 신청기간관리
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

function BSSCR0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '영업지원' }, { label: '캘린더신청' }, { label: '신청기간관리' }];

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
                <span className="label">신청기간관리</span>

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
                <CommonButton label="삭제" className="_delete" />
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
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">신청정보(기간) 내역</span></h2>

                  <div className="o-field">
                    <Label label={`신청연도`} require={false} />
                    <div className="fields">
                      <div className="o-form _select wdth-40">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청연도</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">추가여부</span></div></th>
                            <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청기간</span></div></th>
                            <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배송기간</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종등록자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종거래일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">마감여부</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={16}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>2025</td>
                            <td>1</td>
                            <td>인수완료</td>
                            <td>N</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>Y</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>00000</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
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
                  <h3 className="o-heading level3"><span className="label">차수별 진행단계</span></h3>

                  <div className="m-checks">
                    <InputRadio name="RADIO_10" label="신청" />
                    <InputRadio name="RADIO_10" label="배송·인수" defaultChecked />
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="차수생성" className="_create" />
                    </div>
                  </div>
                </div>

                <div className="main">
                  <div className="o-board type-b">
                    <dl className="m-defines">
                      <div className="group">
                        <dt className="head">신청연도</dt>
                        <dd className="data">
                          <em className="o-chip var-lined-01"><span className="label">2025년</span></em>
                        </dd>
                      </div>

                      <div className="group">
                        <dt className="head">신청상태</dt>
                        <dd className="data">
                          <em className="o-chip var-lined-01"><span className="label">신청마감</span></em>
                        </dd>
                      </div>

                      <div className="group">
                        <dt className="head">고객정보입력</dt>
                        <dd className="data">
                          <div className="m-checks">
                            <InputRadio name="RADIO_20" label="신청" defaultChecked />
                            <InputRadio name="RADIO_20" label="미신청" />
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="m-step-form">
                    <div className="steps">
                      <ol className="o-steps axis-cols type-normal">
                        <li aria-label="진행 완료">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">1</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <span className="label">
                            <em className="main">신청등록</em>
                          </span>
                        </li>
                        <li aria-label="진행 단계">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">2</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <span className="label">
                            <em className="main">신청마감</em>
                          </span>
                        </li>
                        <li aria-label="진행 예정">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">3</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <span className="label">
                            <em className="main">배송등록</em>
                          </span>
                        </li>
                        <li aria-label="진행 예정">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">4</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <span className="label">
                            <em className="main">인수완료</em>
                          </span>
                        </li>
                      </ol>
                    </div>

                    <div className="fieldset size-3">

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">신청등록</span></h4>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="신청마감취소" className="_lined-primary" />
                              <CommonButton label="마감" className="_solid-primary" disabled />
                              <CommonButton label="저장" className="_solid-primary" disabled />
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <div className="m-data-form">
                            <table className="table">
                              <colgroup>
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                              </colgroup>

                              <tbody>
                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`신청시작일자`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date mode-required wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`신청종료일자`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date mode-required wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`등록일자`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">배송등록</span></h4>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="배송등록취소" className="_lined-primary" disabled />
                              <CommonButton label="저장" className="_solid-primary" />
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <div className="m-data-form">
                            <table className="table">
                              <colgroup>
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                              </colgroup>

                              <tbody>
                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`배송시작일자`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date mode-required wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`배송종료일자`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date mode-required wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`등록일자`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">인수등록</span></h4>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="인수등록취소" className="_lined-primary" disabled />
                              <CommonButton label="저장" className="_solid-primary" disabled />
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <div className="m-data-form">
                            <table className="table">
                              <colgroup>
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                              </colgroup>

                              <tbody>
                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`등록일자`} require={true} />
                                  </th>
                                  <td colSpan={5}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-date wdth-50">
                                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
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

            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default BSSCR0101M;
