/**
 * @description 수수료관리 > 자금현수송수수료 > 계약서관리
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

function FEMCT0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '수수료관리' }, { label: '자금현수송수수료' }, { label: '계약서관리' }];

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
                <span className="label">계약서관리</span>

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
                <CommonButton label="중도해지" className="_solid-primary" />
                <CommonButton label="계약등록" className="_solid-primary" />
              </div>

              <div className="group _primary">
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
                    <Label label={`계약기간`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                      <span className="seps type-tilde">~</span>
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`계약상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`계약명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`업체명`} require={false} />
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

            </div>
          </div>

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">계약등록내역</span></Tab>
                <Tab className="link"><span className="label">계약삭제내역</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">계약내역</span></h2>

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
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자등록번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약기간</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">건당 총 계약금액</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인정보</span></div></th>
                                <th rowSpan={2} colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록정보</span></div></th>
                                <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지정보</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">병행할인</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">왕복할인</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해지사유</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={19}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td>{idx + 1}</td>
                                  <td className="g-start">(수도권)물류운송대행계약서</td>
                                  <td className="g-start">(주)앤비앤코퍼레이션</td>
                                  <td>999-99-99999</td>
                                  <td>정상</td>
                                  <td><span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span></td>
                                  <td className="g-end">1,000,000,000</td>
                                  <td>25%</td>
                                  <td>25%</td>
                                  <td>정상</td>
                                  <td>결재반려</td>
                                  <td>10000</td>
                                  <td>홍길동</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>10000</td>
                                  <td>홍길동</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td className="g-start"></td>
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

              <Tabs className="m-tabs react-tabs" defaultIndex={0}>
                <div className="m-tab type1">
                  <TabList className="lists">
                    <Tab className="link"><span className="label">계약정보</span></Tab>
                    <Tab className="link"><span className="label">부점별수수료율</span></Tab>
                  </TabList>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">

                  <Splitter gutterSize={0} className="o-grid">

                    <SplitterPanel minSize={17.5} className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h3 className="o-heading level3"><span className="label">계약정보</span></h3>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="신규" className="_create" />
                            </div>
                          </div>
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
                                    <Label label={`등록자`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [00081] 홍길동
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
                                    <Label label={`계약명`} require={true} />
                                  </th>
                                  <td colSpan={3}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`업체명`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`사업자등록번호`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-num mode-required wdth-60">
                                          <InputMask placeholder="" mask="999-99-99999" value={Mask} className="bind" onChange={(e) => setMask(e.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`계약기간`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
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
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`입금은행명`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required wdth-50">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`입금계좌번호`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`예금주명`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`전담 총 계약금액`} require={true} />
                                  </th>
                                  <td colSpan={3}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required wdth-50 g-end">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
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

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`첨부파일`} require={true} />
                                  </th>
                                  <td colSpan={3}>

                                    <div className="o-section">
                                      <div className="m-header">
                                        <div className="o-limit type-file">
                                          <span className="head">파일크기</span>
                                          <span className="data">
                                            <em className="value">1MB</em>
                                            <span className="sep">/</span>
                                            <span className="limits" aria-label="전체 업로드 제한용량">10MB</span>
                                          </span>
                                        </div>

                                        <div className="m-binds">
                                          <div className="group">
                                            <CommonButton label="파일선택" className="_normal" />
                                            <CommonButton label="파일삭제" className="_normal" />
                                            <CommonButton label="파일다운" className="_normal" />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="main rows-body-3i">
                                        <div className="o-grid-table type-upload js_dragovered">{/* [하드코딩] 드래그오버 시 'js_dragovered' 클래스네임 추가 { @DEV } */}
                                          <div className="table-container">
                                            <table>
                                              <colgroup>
                                                <col className="wdth-10" />
                                                <col className="wdth-auto" style={{ minWidth: 'calc(var(--rem) * 180)' }} />
                                                <col style={{ minWidth: 'calc(var(--rem) * 72)' }} />
                                              </colgroup>

                                              <thead>
                                                <tr>
                                                  <th><InputCheck label="전체​선택" labelHidden /></th>
                                                  <th>파일명</th>
                                                  <th>파일크기</th>
                                                </tr>
                                              </thead>

                                              <tbody>
                                                <tr>
                                                  <td colSpan={3}>
                                                    <div className="o-attach">
                                                      <div className="summary">
                                                        <span className="wbr">첨부할 파일을 여기에 끌어다 놓거나, </span>
                                                        <span className="wbr">파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</span>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>

                                              <tbody>
                                                {[...Array(24)].map((e, idx) => (
                                                  <tr key={idx}>
                                                    <td><InputCheck label="선택" labelHidden /></td>
                                                    <td className="g-start">
                                                      <span className="o-file">
                                                        {
                                                          idx === 1 ?
                                                            <span className="name">긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명</span>
                                                            :
                                                            <span className="name">파일명</span>
                                                        }
                                                        <span className="ext">.xlsx</span>
                                                      </span>
                                                    </td>
                                                    <td className="g-end">1023KB</td>
                                                  </tr>
                                                ))}
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="m-footer">
                                        <ul className="m-bullets type-disc">
                                          <li className="c-color-strong"><em>계약서는 필수 첨부입니다.</em></li>
                                        </ul>
                                      </div>

                                    </div>

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
                          <h3 className="o-heading level3"><span className="label">종류별 할인금액</span></h3>
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
                                    <Label label={`병행할인율(%)`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`왕복할인율(%)`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input mode-required">
                                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                          <h3 className="o-heading level3"><span className="label">할인정보</span></h3>
                        </div>

                        <div className="main _primary">
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
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인종류<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인종류<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인종류<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인종류<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                  {[...Array(10)].map((e, idx) => (
                                    <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                      <td>원화청구</td>
                                      <td>
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _select wdth-30">
                                              <XDropdown appendTo={document.body} className="bind" />
                                              <i aria-hidden="true"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>원화불입</td>
                                      <td>
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _select wdth-30">
                                              <XDropdown appendTo={document.body} className="bind" />
                                              <i aria-hidden="true"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>외화청구</td>
                                      <td>
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _select wdth-30">
                                              <XDropdown appendTo={document.body} className="bind" />
                                              <i aria-hidden="true"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>외화불입</td>
                                      <td>
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _select wdth-30">
                                              <XDropdown appendTo={document.body} className="bind" />
                                              <i aria-hidden="true"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                      </div>

                    </SplitterPanel>
                  </Splitter>

                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h3 className="o-heading level3"><span className="label">부점별 수수료율</span></h3>

                          <div className="o-length">
                            <span className="head">전체</span>
                            <em className="data">
                              <span className="value">8</span>
                              <span className="units">건</span>
                            </em>
                          </div>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="일괄양식 다운로드" className="_normal" icon="excel-download-label" />
                              <CommonButton label="일괄양식 업로드" className="_normal" icon="excel-upload-label" />
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
                                  <col className="wdth-50" />
                                  <col />
                                  <col />
                                  <col />
                                  <col />
                                </colgroup>

                                <thead className="p-datatable-thead">
                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">관할센터코드</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">관할센터명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산기준<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료금액<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점상태</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">개점일자</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐점일자</span></div></th>
                                  </tr>
                                </thead>

                                <tbody className="p-datatable-tbody">
                                  <tr className="p-datatable-emptymessage">
                                    <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                  </tr>
                                </tbody>

                                <tbody className="p-datatable-tbody">
                                  {[...Array(24)].map((e, idx) => (
                                    <>
                                      {
                                        (idx - 3) % 3 === 0 &&
                                        <tr className="p-rowgroup-header">
                                          <td colSpan={10} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                                        </tr>
                                      }
                                      <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                        <td>{idx + 1}</td>
                                        <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                          {
                                            (idx) % 3 === 0 &&
                                            <>0810</>/* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                          }
                                        </td>
                                        <td className="p-x-cell-span g-start">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                          {
                                            (idx) % 3 === 0 &&
                                            <>프로세스혁신부</>/* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                          }
                                        </td>
                                        <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                          {
                                            (idx) % 3 === 0 &&
                                            <>0036</>/* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                          }
                                        </td>

                                        <td className="p-x-cell-span g-start">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                          {
                                            (idx) % 3 === 0 &&
                                            <>시화공단기업금융센터</>/* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                          }
                                        </td>
                                        <td>
                                          {(idx) % 3 === 2 ?
                                            <div className="o-field">
                                              <div className="fields">
                                                <div className="o-form _select wdth-30">
                                                  <XDropdown appendTo={'self'} className="bind" />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>
                                            : `전담`}
                                        </td>
                                        <td className="g-end">
                                          {(idx) % 3 === 2 ?
                                            <div className="o-field">
                                              <div className="fields">
                                                <div className="o-form _input wdth-50 g-end">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>
                                            : `60,000,000`}
                                        </td>
                                        <td>개점</td>
                                        <td><span className="o-digit type-date">2024-09-16</span></td>
                                        <td><span className="o-digit type-date">2024-09-16</span></td>
                                      </tr>
                                      {
                                        (idx - 2) % 3 === 0 &&
                                        <tr className="p-rowgroup-footer">
                                          <td colSpan={10} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
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
                </TabPanel>

              </Tabs>
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">계약삭제내역</span></h2>

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
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">삭제일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자등록번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계약기간</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">총 계약금액</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">할인금액</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록정보</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">병행할인</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">왕복할인</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
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
                                  <td>{idx + 1}</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td className="g-start">(수도권)물류운송대행계약서</td>
                                  <td className="g-start">(주)앤비앤코퍼레이션</td>
                                  <td>999-99-99999</td>
                                  <td>정상</td>
                                  <td><span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span></td>
                                  <td className="g-end">1,000,000,000</td>
                                  <td>25%</td>
                                  <td>25%</td>
                                  <td>정상</td>
                                  <td>10000</td>
                                  <td>홍길동</td>
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

export default FEMCT0101M;
