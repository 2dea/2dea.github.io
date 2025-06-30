/**
 * @description 영업지원 > 문서관리	 > 문서대량폐기 ~ (LP)대량폐기정보입력
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

function BSSDM0201P03() {
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
        className="layer-wrap wdth-60p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">대량폐기정보입력</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">폐기정보</span></h4>
                </div>

                <div className="main rows-body-5i">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`페기일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-date wdth-50">
                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="binds">
                                  <CommonButton label="일괄적용" className="_normal" />
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
                  <h5 className="o-heading level3"><span className="label">문서대량폐기 신청정보</span></h5>

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
                      <ImageButton label="목록필터" icon="column-toggle" />
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
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                            <th colSpan={2} className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청단위</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인계자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기종류</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수거예정일</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기일자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={14}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>1234</td>
                            <td className="g-start">마포중앙</td>
                            <td>10079</td>
                            <td className="p-x-frozen-last">홍길동</td>
                            <td><span className="o-digit type-tel">02-729-7610</span></td>
                            <td><span className="o-digit type-date">2025-05-05</span></td>
                            <td>마대자루</td>
                            <td className="g-end">100</td>
                            <td>홍길동</td>
                            <td>기타</td>
                            <td><span className="o-digit type-date">2025-05-05</span></td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-spin wdth-50">
                                  <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                    decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
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
              <span className="label">(P)대량폐기정보입력 [wdth-60p(w1150)]</span>
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

export default BSSDM0201P03;
