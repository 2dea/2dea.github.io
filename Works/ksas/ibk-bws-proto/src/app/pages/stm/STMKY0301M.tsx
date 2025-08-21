/**
 * @description 재난·안전관리 > 열쇠관리 > 열쇠인수도관리
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

function STMKY0301M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '재난·안전관리' }, { label: '열쇠인수도관리' }, { label: '열쇠인수도관리' }];

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
                <span className="label">열쇠인수도관리</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="과거내역조회" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="인수도등록" className="_solid-primary" />
                <CommonButton label="인수도취소" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="비상계획팀" telNumber="7463, 3484" asideLabel="" />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              {/* <div className="o-board type-a style-fit">
                <ul className="m-bullets type-disc">
                  <li>문의 : <span className="o-consult"><strong className="head">비상계획팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">7463, 3484</span></span></span></li>
                </ul>
              </div> */}

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`부점`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`보관담당자`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`인도일자`} require={false} />
                    <div className="fields">
                      <div className="o-form _input type-date wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                      <span className="seps type-tilde">~</span>
                      <div className="o-form _input type-date wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`열쇠구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`주관부서`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
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

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">인수도등록</span></Tab>
                <Tab className="link"><span className="label">인수도내역</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">열쇠내역</span></h2>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>

                      <div className="o-field">
                        <Label label={`변경보관책임자`} require={false} />
                        <div className="fields">
                          <div className="o-form _input wdth-50">
                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                            <i aria-hidden="true"></i>
                          </div>
                          <div className="binds">
                            <CommonButton label="일괄적용" className="_normal" />
                          </div>
                        </div>
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
                              <col className="wdth-10" />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col className="wdth-0" />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col className="wdth-10" />
                              <col />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">열쇠구분</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">열쇠종류</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">변경전보관책임자</span></div></th>
                                <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">변경후보관책임자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">예외승인</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고(사유)</span></div></th>
                              </tr>
                              <tr>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">보관기간</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">모출납</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">외화출납</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납담당책임자</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={17}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td><InputCheck label="선택" labelHidden /></td>
                                <td>{idx + 1}</td>
                                <td>금고실</td>
                                <td></td>
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
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>~</td>
                                <td>현재</td>
                                <td>10000</td>
                                <td>홍길동</td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-50">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td></td>
                                <td>N</td>
                                <td>N</td>
                                <td>N</td>
                                <td><InputCheck label="선택" labelHidden /></td>
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
                    <div className="o-board type-a">
                      <div className="board-container">
                        <div className="m-header">
                          <strong className="o-heading"><span className="label">유의사항</span></strong>
                        </div>

                        <ul className="m-bullets type-disc">
                          <li>인수도는 인수도일자의 열쇠당 한번만 가능합니다.</li>
                          <li>기 인수도한 등록일자의 인수도를 변경하시려면 해당일의 인수도 취소 후 재등록 가능합니다.</li>
                          <li className="c-color-strong"><em>인수도 취소: 업무지원 &gt; 열쇠관리 &gt; (614120)열쇠인수도관리: 인수도내역 탭 선택 후 인수도취소 버튼을 클릭해주세요.</em></li>
                          <li>금고당번책임자는 모(외화)출납. (외화)출납담당책임자와 겸임하여 등록할 수 없습니다.<br />
                              (겸임 등록을 해야 하는 경우, 열쇠내역에서 '예외승인'체크박스를 클릭해주세요.)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">열쇠인수도내역</span></h2>

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

                    <div className="main _primary">
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
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">열쇠구분</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">열쇠종류</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단말번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">열쇠상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">변경전보관책임자</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">변경후보관책임자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고(사유)</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취소일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">취소사유</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={15}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td><InputCheck label="선택" labelHidden /></td>
                                <td>{idx + 1}</td>
                                <td>금고실</td>
                                <td className="g-start">겉문열쇠</td>
                                <td></td>
                                <td>정상</td>
                                <td>결재승인</td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td>대리</td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td>대리</td>
                                <td className="g-start">금고실 #1</td>
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

                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default STMKY0301M;
