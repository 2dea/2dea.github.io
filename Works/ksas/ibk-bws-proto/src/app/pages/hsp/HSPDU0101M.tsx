/**
 * @description 중요용지·용도품(본부) > 폐기 > 폐기대상중요용지총괄현황
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

function HSPDU0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(본부)' }, { label: '폐기' }, { label: '폐기대상중요용지총괄현황' }];

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
                <span className="label">폐기대상중요용지총괄현황</span>

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
                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">오손중요용지 총괄현황</span></h2>
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발송등록</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">센터접수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">미처리</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진척률(%)</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(2)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>영업점</td>
                            <td className="g-end">100</td>
                            <td className="g-end">100</td>
                            <td className="g-end">100</td>
                            <td className="g-end">90.7</td>
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
          <Splitter  gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">부점별 처리현황</span></h3>

                  <div className="m-binds">
                    <div className="group">
                      <div className="o-field">
                        <div className="fields">
                          <div className="o-form _select wdth-60">
                            <XDropdown appendTo={document.body} className="bind" />
                            <i aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>

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
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발송등록</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">센터접수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">미처리</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진척률(%)</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={3}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(3)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>0001</td>
                            <td className="g-start">영업점</td>
                            <td className="g-end">1</td>
                            <td className="g-end">0</td>
                            <td className="g-end">10</td>
                            <td className="g-end">100</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">오손발송 상세내역</span></h3>

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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수시각</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">행내등기신청번호</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={7}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(1)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>0000001</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-time">00:00:00</span></td>
                            <td>0000001</td>
                            <td>홍길동</td>
                            <td>0000001</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
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
                            <Label label={`부점`} require={true} />
                          </th>
                          <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="[006]미아동" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <div className="o-form _select mode-required wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <div className="binds">
                                    <CommonButton label="업무이력조회" className="_normal" />
                                  </div>

                                </div>
                              </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`발생일자`} require={true} />
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
                            <Label label={`오손구분`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`출급번호(증서명)`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">

                                <div className="o-form _input mode-required wdth-50">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="o-form _input mode-required">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>

                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`오손진행상태`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`오손수량`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-50 g-end">
                                  <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`오손일련번호`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-50">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="o-form _input mode-required wdth-80">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <span className="seps type-hyphen">~</span>
                                <div className="o-form _input mode-required wdth-80">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`폐기장소`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">

                                <div className="o-form _select wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="o-form _select wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>

                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-50">
                                  <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`오서손사유`} require={true} />
                          </th>
                          <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="오류발급" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
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

export default HSPDU0101M;
