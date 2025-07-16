/**
 * @description 수수료관리 > 자금현수송수수료 > 월별금액검증
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

function FEMCT0201M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '수수료관리' }, { label: '자금현수송수수료' }, { label: '월별금액검증' }];

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
                <span className="label">월별금액검증</span>

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

              <div className="group _primary">
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="저장" className="_solid-primary" />
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

                  <div className="o-field colspan-2">
                    <Label label={`지급대상기간`} require={true} />
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
                    <Label label={`검증여부`} require={false} />
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

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">월별 지급금액 검증내역</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="월별 지급검증등록" className="_normal" />
                      <CommonButton label="월별 요약" className="_normal" />
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
                            <col />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급대상연월</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급명</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급수수료 합계</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">세금계산서 합계</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검증여부</span></div></th>
                              <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록정보</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td className="g-start">(수도권)물류운송대행계약서</td>
                              <td className="g-end">1,000</td>
                              <td className="g-end">1,000</td>
                              <td>
                                {(idx) % 3 === 0 ?
                                  <span className="o-status-text style-inherit type-20">불일치</span> : <>일치</>
                                }
                              </td>
                              <td>011465</td>
                              <td>홍길동</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세 내역</span></h3>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="지급 상세검증" className="_normal" />
                    </div>

                    <div className="group">
                      <CommonButton label="행추가" className="_normal" />
                      <CommonButton label="행복사" className="_normal" />
                      <CommonButton label="행삭제" className="_normal" />
                      <CommonButton label="취소" className="_normal" />
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
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산기준</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급대상연월</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급업체</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자등록번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지급수수료</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">세금계산서</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">국세청 승인번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상세 검증여부</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">세금계산서 검증여부</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={14}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(3)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>개뱔</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>(주)앤비앤코퍼레이션</td>
                              <td>(수도권)물류운송대행계약서</td>
                              <td>999-99-99999</td>
                              <td className="g-end">1,000,000,000</td>
                              <td className="g-end">1,000,000,000</td>
                              <td>999999999-99999999-99999999</td>
                              <td>지급완료</td>
                              <td>일치</td>
                              <td>일치</td>
                              <td className="g-start"></td>
                            </tr>
                          ))}
                          <tr>
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td><Icon icon="grid-added" /></td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-70">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>(수도권)물류운송대행계약서</td>
                            <td>999-99-99999</td>
                            <td className="g-end">1,000,000,000</td>
                            <td className="g-end">1,000,000,000</td>
                            <td>999999999-99999999-99999999</td>
                            <td>지급완료</td>
                            <td>일치</td>
                            <td>일치</td>
                            <td className="g-start"></td>
                          </tr>
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
                      <strong className="o-heading"><span className="label">월별 금액검증 순서</span></strong>
                    </div>

                    <ol className="m-bullets type-decimal level1">
                      <li>[월별 지급검증등록] 버튼을 눌러 지급 대상연월을 저장합니다.</li>
                      <li>월별 지급검증등록 검증내역에 추가된 행을 선택한 후 상세내역에 [행추가] 버튼을 눌러 정산기준 및 지급업체를 선택합니다.</li>
                      <li>행추가 완료 후 [저장] 버튼을 눌러 상세내역을 저장합니다.</li>
                      <li>저장한 상세 내역 중 검증할 행을 선택한 후 [지급 상세검증] 버튼을 눌러 지급상세 검증을 합니다.</li>
                      <li>지급 상세검증이 모두 완료(일치)된 월별 지급금액 검증내역 행을 선택한 후 [월별 요약] 버튼을 눌러 저장 및 C/C자료 다운을 받습니다.</li>
                    </ol>
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

export default FEMCT0201M;
