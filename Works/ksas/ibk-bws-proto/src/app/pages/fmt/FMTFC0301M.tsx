/**
 * @description 자금현수송 > 외화정사 > 일일업무현황조회
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

function FMTFC0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '자금현수송' }, { label: '외화정사' }, { label: '일일업무현황조회' }];

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
                <span className="label">일일업무현황조회</span>

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

                  <div className="o-field colspan-4">
                    <Label label={`조회기간`} require={true} />
                    <div className="fields basis-pass">
                      <div className="o-form _select mode-required wdth-50">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-4">
                    <Label label={`조회기간`} require={true} />
                    <div className="fields basis-pass">
                      <div className="o-form _select mode-required wdth-50">
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

                  <div className="o-field colspan-4">
                    <Label label={`조회기간`} require={true} />
                    <div className="fields basis-pass">
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

                  <div className="o-field colspan-4">
                    <Label label={`조회기간`} require={true} />
                    <div className="fields basis-pass">
                      <div className="o-form _select mode-required wdth-50">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
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

                  <div className="o-field">
                    <Label label={`통화코드`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`위폐여부`} require={false} />
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

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">일일 업무현황 내역</span></h2>
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
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
                            <td colSpan={19}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer subtotal-trow">
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell g-start">소계</td>
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          {
                            (idx - 5) % 6 === 0 &&
                            <tr className="p-rowgroup-footer daytotal-trow">
                              <td className="daytotal-tcell"></td>
                              <td className="daytotal-tcell g-start">일계</td>
                              <td className="daytotal-tcell g-start"></td>
                              <td className="daytotal-tcell"></td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              {/* rowGroupFooterTemplate={totalDayCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          </>
                          ))}
                        </tbody>

                        <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                          <tr className="sumtotal-trow">
                            <td colSpan={4} className="sumtotal-tcell">합계</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">외화정사 및 비용절감 누계</span></h3>

                  <div className="o-legend type-helper style-normal">
                    <em className="label">2000.02 기준</em>
                  </div>
                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '25%' }} />
                          <col style={{ width: '25%' }} />
                          <col style={{ width: '25%' }} />
                          <col style={{ width: '25%' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={2}>외화정사매수</th>
                            <th colSpan={2}>비용절감액</th>
                          </tr>
                          <tr>
                            <th colSpan={1}>월간누계</th>
                            <th colSpan={1}>연간누계</th>
                            <th colSpan={1}>월간누계</th>
                            <th colSpan={1}>연간누계</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={1} className="g-end">
                              0
                            </td>
                            <td colSpan={1} className="g-end">
                              0
                            </td>
                            <td colSpan={1} className="g-end">
                              0
                            </td>
                            <td colSpan={1} className="g-end">
                              9,999
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

export default FMTFC0301M;
