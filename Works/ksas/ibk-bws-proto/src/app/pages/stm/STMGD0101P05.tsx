/**
 * @description 재난·안전관리 > 기계경비당직관리 > 당직신청관리 ~ (LP)이력조회
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

function STMGD0101P05() {
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
        className="layer-wrap wdth-70p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">이력조회</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">
              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field colspan-4">
                    <Label label={`기간`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
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

                  <div className="o-field">
                    <Label label={`결재구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`점검구분`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} disabled />
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

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">당직신청 이력</span></h4>
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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일직</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">숙직</span></div></th>
                            <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록직원</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재관리번호</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">거래일시</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀장</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점장</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={14}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              {
                                (idx - 3) % 3 === 0 &&
                                <tr className="p-rowgroup-header">
                                  <td colSpan={14} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <span className="o-digit type-date">2025-12-25</span> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>[00081] 을지로</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td>팀원1</td>
                                <td>[20240065] 홍길동</td>
                                <td>팀원1</td>
                                <td>[20240065] 홍길동</td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>안전관리실결재</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>결재승인</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>[20240065] 김팀원</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>[20240065] 김팀장</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>[20240065] 김점장</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>[20240065] 홍길동</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>ABC20240065</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <span className="o-digit type-datetime">2025-12-25 09:10:59</span> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                              </tr>
                              {
                                (idx - 2) % 3 === 0 &&
                                <tr className="p-rowgroup-footer">
                                  <td colSpan={14} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
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
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="취소" className="_cancel" />
              <CommonButton label="결재요청" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)이력조회 [wdth-70p(w1340)]</span>
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

export default STMGD0101P05;
