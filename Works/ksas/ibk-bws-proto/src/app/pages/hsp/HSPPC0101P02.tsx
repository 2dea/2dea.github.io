/**
 * @description 중요용지·용도품(본부) > 대금정산 > 업체직배송품목정산 ~ (LP)업체직접배송정산자료생성
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

function HSPPC0101P02() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

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
      <Dialog
        className="layer-wrap wdth-50p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">업체직접배송정산자료생성</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`기준연월`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`품목`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`본점구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`의뢰부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`정산금액합계`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                  <h4 className="o-heading level2"><span className="label">자료생성</span></h4>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="o-field">
                    <Label label={`단가`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required wdth-40">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                      <CommonButton label="일괄적용" className="_normal" />
                    </div>
                  </div>

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
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단가<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>1111605</td>
                            <td className="g-start">총무부</td>
                            <td>011465</td>
                            <td className="g-start">A4복사용지</td>
                            <td className="g-end">131</td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input g-end">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input g-end">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                        </tbody>

                        <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                          <tr className="sumtotal-trow">
                            <td colSpan={5} className="sumtotal-tcell">합계</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end"></td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                          </tr>
                        </tfoot>
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
              <CommonButton label="선택" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)업체직접배송정산자료생성 [wdth-50p(w1960)]</span>
            </h1>
          </div>
        </div>

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

export default HSPPC0101P02;
