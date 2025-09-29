/**
 * @description 공통·결재 > 결재관리 > 결재내역관리
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

function ADMSM0101M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '공통·결재' }, { label: '결재관리' }, { label: '결재내역관리' }];

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
                <span className="label">결재내역관리</span>

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
                <CommonButton label="반려" className="_lined-primary" />
                <CommonButton label="일괄승인" className="_solid-primary" />
                <CommonButton label="승인" className="_solid-primary" />
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
                    <Label label={`신청부점`} require={false} />
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
                    <Label label={`결재요청자`} require={false} />
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
                    <Label label={`문서번호`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`결재상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

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

                  <div className="o-field colspan-2">
                    <Label label={`제목`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`업무구분`} require={false} />
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
                  <h2 className="o-heading level2"><span className="label">등록내역</span></h2>

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

                <div className="main _primary rows-body-5i">
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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재요청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제목</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">요청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재완료일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재중</span></div></th>
                            <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재선</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">1단계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">2단계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">3단계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">4단계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">5단계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={17}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            {/* <td><Checkbox defaultChecked={checked} onChange={e => setChecked(e.checked)} /></td> */}
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td>{idx + 1}</td>
                            <td>결재요청</td>
                            <td>
                              <CommonButton label="회수" className="_normal" />
                            </td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td className="g-start">중요용지인수취소</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>홍길동</td>
                            <td>홍길동01</td>
                            <td>홍길동02</td>
                            <td>홍길동03</td>
                            <td>홍길동04</td>
                            <td>홍길동05</td>
                            <td>0810</td>
                            <td className="g-start">프로세스혁신부</td>
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

          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세내역</span></h3>
                </div>

                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`문서번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            AR2025000811
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`제목`} require={false} />
                          </th>
                          <td colSpan={1}>
                            중요용지인수 취소
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`내용`} require={false} />
                          </th>
                          <td colSpan={1}>
                            중요용지인수 취소 결재요청드립니다.
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`반려사유`} require={false} />
                          </th>
                          <td colSpan={1}>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">결재선</span></h3>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="변경이력" className="_normal" />
                      <CommonButton label="결재선재지정" className="_normal" />
                      <CommonButton label="대직자변경" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="main">
                  <div className="o-data-table type-approve">
                    <div className="table-container">
                      <table className="table">
                        <colgroup span={6}></colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>요청자</th>
                            <th colSpan={1}>1단계</th>
                            <th colSpan={1}>2단계</th>
                            <th colSpan={1}>3단계</th>
                            <th colSpan={1}>4단계</th>
                            <th colSpan={1}>5단계</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={1}>
                              <div className="o-approve" aria-label="결재 요청">
                                <div className="main">
                                  <span className="approval">
                                    <span className="name">김준완</span>
                                    <span className="position">대리</span>
                                  </span>
                                </div>
                                <div className="aside">
                                  <em className="substitute"></em>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}>
                              <div className="o-approve" aria-label="결재 완료">
                                <div className="main">
                                  <span className="approval">
                                    <span className="name">안정원</span>
                                    <span className="position">팀장</span>
                                  </span>
                                </div>
                                <div className="aside">
                                  <em className="substitute"></em>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}>
                              <div className="o-approve" aria-label="결재 대기">
                                <div className="main">
                                  <span className="approval">
                                    <span className="name">안정원</span>
                                    <span className="position">팀장</span>
                                  </span>
                                </div>
                                <div className="aside">
                                  <em className="substitute">대직 홍길동</em>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}>
                              <div className="o-approve" aria-label="결재 예정">
                                <div className="main">
                                  <span className="approval">
                                    <span className="name">이익준</span>
                                    <span className="position">부장</span>
                                  </span>
                                </div>
                                <div className="aside">
                                  <em className="substitute"></em>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                          </tr>
                        </tbody>

                        <tfoot className="approve-tfoot">
                          <tr className="approve-trow">
                            <td colSpan={1} className="approve-tcell"><span className="o-digit type-date">2025-12-25</span> <span className="o-digit type-time">13:28</span></td>
                            <td colSpan={1} className="approve-tcell"><span className="o-digit type-date">2025-12-25</span> <span className="o-digit type-time">13:28</span></td>
                            <td colSpan={1} className="approve-tcell"></td>
                            <td colSpan={1} className="approve-tcell"></td>
                            <td colSpan={1} className="approve-tcell"></td>
                            <td colSpan={1} className="approve-tcell"></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </SplitterPanel>
          </Splitter>

          <div className="div-footer">
            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default ADMSM0101M;
