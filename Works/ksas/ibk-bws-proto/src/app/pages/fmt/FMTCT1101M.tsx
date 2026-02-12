/**
 * @description 자금현수송 > 원화현수송 > 자금현수송노선출력
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

function FMTCT1101M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '원화현수송' }, { label: '자금현수송노선출력' }];

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
                <span className="label">자금현수송노선출력</span>

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

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`관할업무센터`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`지역본부`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`노선명`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`현송기간`} require={true} />
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


                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">노선 출력정보</span></h2>

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

                <div className="main _primary rows-body-8i">
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
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선경로</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={7}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                            {
                              (idx - 3) % 3 === 0 &&
                              <tr className="p-rowgroup-header">
                                <td colSpan={7} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                              </tr>
                            }
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>{idx + 1}</td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>1노선</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td>
                                  {
                                    idx === 0 ?
                                      <>청구</>
                                      :
                                    idx === 1 ?
                                      <>불입</>
                                      :
                                      <>청구/불입</>
                                  }
                                </td>
                                <td>원화</td>
                                <td className="g-start">
                                  검단오류역, 검바위역, 건대입구역, 건들바위역, 건천역, 검암역, 경기광주역, 경기도청북부청사역, 경대병원역, 경마공원역, 경복궁역, 경산역, 경성대·부경대역, 경인교대입구역, 경전철의정부역, 경주역
                                </td>
                                <td className="g-end">12</td>

                                <td className="p-x-cell-span g-start">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>
                                      1. 팀장: 홍길동 <br />
                                      2. 010-9999-99999
                                    </> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                              </tr>
                            {
                              (idx - 2) % 3 === 0 &&
                              <tr className="p-rowgroup-footer">
                                <td colSpan={7} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
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

          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">요약정보</span></h3>

                  <div className="o-legend type-unit style-normal">
                    <em className="label">(단위: 건)</em>
                  </div>
                </div>

                <div className="main">
                  {/* <form className="m-data-form">
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
                              <Label label={`원화청구`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화청구`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`청구 전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`원화불입`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화불입`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`불입 전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`원화`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              999,999
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form> */}

                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup span={4}></colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>구분</th>
                            <th colSpan={1}>원화</th>
                            <th colSpan={1}>외화</th>
                            <th colSpan={1}>합계(원화+외화)</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th colSpan={1}>청구</th>
                            <td colSpan={1} className="g-end">9,999</td>
                            <td colSpan={1} className="g-end">9,999</td>
                            <td colSpan={1} className="g-end">99,999</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>불입</th>
                            <td colSpan={1} className="g-end">9,999</td>
                            <td colSpan={1} className="g-end">9,999</td>
                            <td colSpan={1} className="g-end">99,999</td>
                          </tr>
                        </tbody>

                        <tfoot className="sumtotal-tfoot">
                          <tr className="sumtotal-trow">
                            <th colSpan={1} className="sumtotal-tcell">총계</th>
                            <td colSpan={1} className="sumtotal-tcell g-end">99,999</td>
                            <td colSpan={1} className="sumtotal-tcell g-end">99,999</td>
                            <td colSpan={1} className="sumtotal-tcell g-end">999,999</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="column"></div>
          </div>

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTCT1101M;
