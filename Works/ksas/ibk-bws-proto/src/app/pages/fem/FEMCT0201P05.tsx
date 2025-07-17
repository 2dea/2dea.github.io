/**
 * @description 수수료관리 > 자금현수송수수료 > 월별금액검증 ~ (LP)월별요약
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

function FEMCT0201P05() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

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
      <Dialog
        className="layer-wrap wdth-70p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">월별요약</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">기본정보</span></h4>
                </div>

                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
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
                            <Label label={`지급명`} require={false} />
                          </th>
                          <td colSpan={3}>
                            자금현수송 지급수수료(2025년 4월분)
                          </td>

                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0081] 홍길동
                          </td>

                          <th colSpan={1}>
                            <Label label={`등록일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`정산기준`} require={false} />
                          </th>
                          <td colSpan={1}>
                            개별
                          </td>

                          <th colSpan={1}>
                            <Label label={`지급대상연월`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12</span>
                          </td>

                          <th colSpan={1}>
                            <Label label={`비고`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">상세정보</span></h5>

                  <div className="m-binds">
                    <div className="group">
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-body-5i">
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업무센터</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송회사</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">공급가액</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부가세</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">청구 금액(부가세 포함)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>수도권</td>
                                <td>(주)앤비앤코퍼레이션</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">9,999</td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-80">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {
                                (idx - 2) % 3 === 0 &&
                                <tr className="p-rowgroup-footer subtotal-trow">
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell">전담 계(수도권, 경수, 인천, 충청, 호남)</td>
                                  <td className="subtotal-tcell g-end">99,999</td>
                                  <td className="subtotal-tcell g-end">99,999</td>
                                  <td className="subtotal-tcell g-end">99,999</td>
                                    <td className="subtotal-tcell"></td>
                                  {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
                              {
                                (idx - 5) % 6 === 0 &&
                                <tr className="p-rowgroup-footer daytotal-trow">
                                  <td className="daytotal-tcell"></td>
                                  <td className="daytotal-tcell">전담 노선 청구 합계금액</td>
                                  <td className="daytotal-tcell g-end">99,999</td>
                                  <td className="daytotal-tcell g-end">99,999</td>
                                  <td className="daytotal-tcell g-end">99,999</td>
                                    <td className="daytotal-tcell"></td>
                                  {/* rowGroupFooterTemplate={totalDayCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
                            </>
                          ))}
                        </tbody>

                        <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                          <tr className="sumtotal-trow">
                            <td colSpan={2} className="sumtotal-tcell">자금현수송대행수수료 청구 총합계</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">전담 건당 수수료 계산(수도권, 강원, 경수, 인천, 충청, 호남)</span></h5>
                </div>

                <div className="main _primary rows-auto">
                  <div className="o-grid-table type-table">{/* [하드코딩] */}
                    <div className="table-container">
                      <table>
                        <colgroup>
                          <col />
                          <col style={{ width: '15%' }} />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={2}>구분</th>
                            <th>건수</th>
                            <th>적용</th>
                            <th>적용 건수</th>
                            <th>건당 금액</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td rowSpan={2}>단독운송</td>
                            <td>원화</td>
                            <td className="g-end">999</td>
                            <td rowSpan={2} className="g-end">-</td>
                            <td className="g-end">999</td>
                            <td className="g-end">1,999</td>
                          </tr>
                          <tr>
                            <td>외화</td>
                            <td className="g-end">999</td>
                            <td className="g-end">999</td>
                            <td className="g-end">1,999</td>
                          </tr>
                          <tr>
                            <td rowSpan={2}>병행운송</td>
                            <td>원화</td>
                            <td rowSpan={2} className="g-end">999</td>
                            <td rowSpan={2} className="g-end">30%</td>
                            <td className="g-end">999</td>
                            <td className="g-end">1,999</td>
                          </tr>
                          <tr>
                            <td>외화</td>
                            <td className="g-end">999</td>
                            <td className="g-end">1,999</td>
                          </tr>

                          <tr>
                            <td colSpan={2} className="tcell-strong"></td>
                            <td className="g-end tcell-strong">999</td>
                            <td className="g-end tcell-strong"></td>
                            <td className="g-end tcell-strong">999</td>
                            <td className="g-end tcell-strong"></td>
                          </tr>

                        </tbody>

                        <tfoot className="sumtotal-tfoot">
                          <tr className="sumtotal-trow">
                            <td colSpan={4}>합계</td>
                            <td className="g-end">9,999</td>
                            <td className="g-end">9,999</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/*
              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">전담 건당 수수료 계산(수도권, 강원, 경수, 인천, 충청, 호남)</span></h5>
                </div>

                <div className="main _primary rows-body-5i">
                  <DataTable className="o-grid-table g-hide" />
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">적용</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">적용 건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">건당 금액</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>단독운송</td>
                                <td>원화</td>
                                <td className="g-end">999</td>
                                <td className="g-end">30%</td>
                                <td className="g-end">999</td>
                                <td className="g-end">9,999</td>
                              </tr>
                              {
                                (idx - 2) % 3 === 0 &&
                                <tr className="p-rowgroup-footer subtotal-trow">
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell g-end">999</td>
                                  <td className="subtotal-tcell g-end"></td>
                                  <td className="subtotal-tcell g-end">99,999</td>
                                  <td className="subtotal-tcell g-end">99,999</td>
                                </tr>
                              }
                            </>
                          ))}
                        </tbody>

                        <tfoot className="p-datatable-tfoot sumtotal-tfoot">
                          <tr className="sumtotal-trow">
                            <td colSpan={4} className="sumtotal-tcell">실건수</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group">
              <CommonButton label="C/C자료 다운" className="_lined-secondary" />
            </div>

            <div className="group _primary">
              <CommonButton label="취소" className="_cancel" />
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)월별요약 [wdth-70p(w1340)]</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="m-binds">
            <div className="group _start">
              <CommonButton label="팝업 열기" icon="link" size={70} onClick={() => setVisible(true)} />
            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FEMCT0201P05;
