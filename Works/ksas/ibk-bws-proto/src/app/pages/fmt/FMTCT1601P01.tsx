/**
 * @description 자금현수송 > 원화현수송 > 원화현수송신청관리(업무센터) ~ (LP)업무센터결정
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

function FMTCT1601P01() {
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
        className="layer-wrap wdth-60p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">업무센터결정</span></h3>}
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
                            <Label label={`신청부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0034] 을지로
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0081] 홍길동
                          </td>
                          <th colSpan={1}>
                            <Label label={`보유한도/총액`} require={false} />
                          </th>
                          <td colSpan={1} className="g-end">
                            670,000,000,000 / 644,000,000원
                          </td>

                          <th colSpan={1}>
                            <Label label={`보유기준일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`요청일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>

                          <th colSpan={1}>
                            <Label label={`현송업체`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-70">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                          <th colSpan={1}>
                            <Label label={`관할업무센터`} require={false} />
                          </th>
                          <td colSpan={3}>
                            [0081] 프로세스혁신부
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`비고(신청)`} require={false} />
                          </th>
                          <td colSpan={7}>
                            영업점 신청 시 비고
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`비고`} require={false} />
                          </th>
                          <td colSpan={7}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input ">
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
                  <h5 className="o-heading level3"><span className="label">업무센터 결정내역</span></h5>

                  <div className="m-binds">
                    <div className="group">
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-auto">

                  <div className="m-total">
                    <dl className="m-defines">
                      <div className="group">
                        <dt className="head">신청금액합계</dt>
                        <dd className="data">200,000,000</dd>
                      </div>

                      <div className="group">
                        <dt className="head">결정금액합계</dt>
                        <dd className="data">200,000,000</dd>
                      </div>
                    </dl>
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
                          <col className="wdth-50" />
                          <col />
                          <col />
                          <col />
                          <col className="wdth-50" />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          {/* <tr>
                            <th rowSpan={3} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용권</span></div></th>
                            <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">손상권</span></div></th>
                          </tr> */}
                          <tr>
                            <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th colSpan={2} className="p-align-center c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">(신청)사용권</span></div></th>
                            <th colSpan={2} className="p-align-center c-point-cell c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">(결정)사용권</span></div></th>
                            <th colSpan={2} className="p-align-center c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">(신청)손상권</span></div></th>
                            <th colSpan={2} className="p-align-center c-point-cell"><div className="p-column-header-content"><span className="p-column-title">(결정)손상권</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                            <th className="p-align-center c-point-cell"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center c-point-cell c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center c-divide-edge"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                            <th className="p-align-center c-point-cell"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center c-point-cell"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                          </tr>
                        </thead>

                        {/* <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody> */}

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td className="g-end">15만원권</td>
                                <td>대속</td>
                                <td className="g-end">2</td>
                                <td className="g-end c-divide-edge">100,000,000</td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input type-spin wdth-50">
                                        <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                          decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="c-divide-edge">
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-50 g-end">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="g-end">2</td>
                                <td className="g-end c-divide-edge">100,000,000</td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input type-spin wdth-50">
                                        <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                          decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-50 g-end">
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
                                  <td className="subtotal-tcell g-end">소계</td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell g-end c-divide-edge">99</td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell g-end c-divide-edge">99</td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell g-end c-divide-edge">99,999</td>
                                  <td className="subtotal-tcell"></td>
                                  <td className="subtotal-tcell g-end">99</td>
                                  {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
                            </>
                          ))}
                        </tbody>

                        {/* <tfoot className="p-datatable-tfoot sumtotal-tfoot">
                          <tr className="sumtotal-trow">
                            <td colSpan={2} className="sumtotal-tcell">합계</td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell">신청금액</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell sumtotal-tcell-strong">결정금액</td>
                            <td className="sumtotal-tcell sumtotal-tcell-strong g-end">999,999</td>
                          </tr>
                        </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
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
              <span className="label">(P)업무센터결정 [wdth-60p(w1150)]</span>
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

export default FMTCT1601P01;
