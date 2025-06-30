/**
 * @description 중요용지·용도품(본부) > 본부재고관리 > 용도품본부입고
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

function HSPHS1601M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(본부)' }, { label: '본부재고관리' }, { label: '용도품본부입고' }];

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
                <span className="label">용도품본부입고</span>

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

              <div className="group _primary">
                <CommonButton label="0원입고 등록" className="_solid-primary" />
                <CommonButton label="본부입고" className="_solid-primary" />
                <CommonButton label="취소결재요청" className="_solid-primary" />
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
                    <Label label={`부점`} require={true} />
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

                  <div className="o-field colspan-2">
                    <Label label={`조회기간`} require={true} />
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

                  <div className="o-field">
                      <Label label={`품목분류`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                  </div>

                  <div className="o-field">
                    <Label label={`출급번호/품목명`} require={false} />
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
                    <Label label={`업체명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input wdth-30">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="검색" icon="search" />
                        </span>
                      </div>

                      <div className="o-form _input wdth-auto">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <Tabs className="m-tabs react-tabs" defaultIndex={0}>
                <div className="m-tab type2">
                  <TabList className="lists">
                    <Tab className="link"><span className="label">입고대상</span></Tab>
                    <Tab className="link"><span className="label">입고거래내역</span></Tab>
                  </TabList>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">입고정보</span></h2>
                        </div>

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
                                    <Label label={`입고일자`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="fields">
                                      <div className="o-form _input type-date mode-required wdth-50">
                                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`입고부점`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0810] 프로세스혁신
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </form>
                        </div>
                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">입고대상 내역</span></h2>

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
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                  <col className="wdth-auto" />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">입고가능량</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">입고량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체코드</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수방법<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수직원<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품의번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발주번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발주일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발주수량</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발주단가</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">발주금액</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={20}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(6)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>{idx + 1}</td>
                                    <td>P0465</td>
                                    <td className="g-start">나의 알파체크카드(비교통_그린)</td>
                                    <td className="g-end">1000</td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-30 g-end">
                                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>IV2020000000078-1</td>
                                    <td className="g-start">(주)앤비앤코퍼레이션</td>
                                    <td>IV2020000000078-1</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-30 g-end">
                                            <InputText placeholder="" value="10,000" className="bind" onChange={(e) => setValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input wdth-30">
                                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>IV2020000000078-1</td>
                                    <td>IV2020000000078-1</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td className="g-end">100</td>
                                    <td className="g-end">100</td>
                                    <td className="g-end">100</td>
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

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h2 className="o-heading level2"><span className="label">입고거래내역</span></h2>
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
                                  <col />
                                  <col />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">입고일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정정일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">입고량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체코드</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">입고부점</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수방법</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수량</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수직원<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={17}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                {[...Array(6)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>{idx + 1}</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>P0465</td>
                                    <td className="g-start">나의 알파체크카드(비교통_그린)</td>
                                    <td>정상</td>
                                    <td>취소결재승인</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td className="g-end">10,000</td>
                                    <td>IV2020000000078-1</td>
                                    <td><span className="o-digit type-date">2025-12-25</span></td>
                                    <td>IV2021</td>
                                    <td className="g-start">제작업체명</td>
                                    <td className="g-start">프로세스혁신부</td>
                                    <td>전수</td>
                                    <td className="g-end">10,000</td>
                                    <td>[0810] 홍길동</td>
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
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default HSPHS1601M;
