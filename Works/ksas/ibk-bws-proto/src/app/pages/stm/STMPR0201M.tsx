/**
 * @description 재난·안전관리 > 출입증/방문증 > 출입증신청내역
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

function STMPR0201M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '재난·안전관리' }, { label: '출입증/방문증' }, { label: '출입증신청내역' }];

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
                <span className="label">출입증신청내역</span>

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

              {/* 안전관리팀 { @DEV } */}
              <div className="group _primary">
                <CommonButton label="반려" className="_lined-primary" />
                <CommonButton label="승인" className="_solid-primary" />
              </div>

            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={true} heading="문의" divName="안전관리팀" telNumber="7184" asideLabel="" />
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
                      <div className="o-form _input wdth-auto">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`프로젝트명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`출입건물`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`신청자`} require={false} />
                    <div className="fields">
                      <div className="o-form _input wdth-auto">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
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

            </div>
          </div>

          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">출입증신청내역</span></h2>

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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">프로젝트명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출입건물</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청량</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우리부점결재</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">IT센터결재</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">안전관리팀결재</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
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
                              <td>012345</td>
                              <td className="g-start">을지로</td>
                              <td className="g-start"></td>
                              <td>본점</td>
                              <td className="g-end">10</td>
                              <td>결재승인</td>
                              <td>홍길동</td>
                              <td>결재승인</td>
                              <td>홍길동</td>
                              <td><a href="javascript:" className="o-link _normal">결재반려</a></td>
                              <td>홍길동</td>
                              <td>012345</td>
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

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세내역</span></h3>

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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출입증번호(사원번호)<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">회사명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">성명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">휴대전화번호</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출입기간</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계속사용</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">층수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출입사유</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
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
                              <td>자회사(상주)</td>
                              <td>
                                {idx === 3 - 1 ?
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-50">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                  : `AM123`}
                              </td>
                              <td className="g-start">(주)회사명</td>
                              <td>홍길동</td>
                              <td><span className="o-digit type-tel">010-7329-7610</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>Y</td>
                              <td>11</td>
                              <td className="g-start"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <Tabs className="m-tabs react-tabs" defaultIndex={0}>
                <div className="m-tab type2 type-step">
                  <TabList className="lists">
                    <Tab className="link"><span className="label">01. 반명함사진</span></Tab>
                    <Tab className="link"><span className="label">02. 신분증사본</span></Tab>
                    <Tab className="link"><span className="label">03. 개인정보동의서</span></Tab>
                    <Tab className="link"><span className="label">04. 보안서약서</span></Tab>
                  </TabList>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-section">
                    <div className="m-header">
                      <h4 className="o-heading level4"><span className="label">반명함사진</span></h4>

                      <div className="o-helper">
                        <em className="label">(허용 확장자 : JPG)</em>
                      </div>

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

                    <div className="main rows-body-2i">
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
                      <div className="o-board type-c style-fit">
                        <div className="o-notice">
                          <span className="icons">
                            <Icon icon="alert-octagram" />
                          </span>
                          <div className="main">반명함 사진 규격은 3cm × 4cm, JPG 파일형식만 첨부 가능하며, 암호화된 파일은 반드시 암호화 해제 후 첨부하시기 바랍니다.</div>

                          <div className="binds">
                            <div className="m-checks">
                              <InputCheck label="확인함" disabled defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-section">
                    <div className="m-header">
                      <h4 className="o-heading level4"><span className="label">신분증사본</span></h4>

                      <div className="o-helper">
                        <em className="label">(허용 확장자 : PDF, JPG)</em>
                      </div>

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

                    <div className="main rows-body-2i">
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
                      <div className="o-board type-c style-fit">
                        <div className="o-notice">
                          <span className="icons">
                            <Icon icon="alert-octagram" />
                          </span>
                          <div className="main">신분증 앞면 주민등록번호 뒷자리, 운전면허번호, 여권번호 전체 마스킹 처리된 PDF, JPG 파일만 첨부 가능하며, 얼굴 식별 및 생년월일 식별이 가능해야 합니다.</div>

                          <div className="binds">
                            <div className="m-checks">
                              <InputCheck label="확인함" disabled defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-section">
                    <div className="m-header">
                      <h4 className="o-heading level4"><span className="label">개인정보동의서</span></h4>

                      <div className="o-helper">
                        <em className="label">(허용 확장자 : PDF, JPG)</em>
                      </div>

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
                          <CommonButton label="양식다운" className="_normal" />
                        </div>
                      </div>
                    </div>

                    <div className="main rows-body-2i">
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
                      <div className="o-board type-c style-fit">
                        <div className="o-notice">
                          <span className="icons">
                            <Icon icon="alert-octagram" />
                          </span>
                          <div className="main">개인정보 수집·이용 동의서는 반드시 양식을 다운받아 서면 작성한 파일로 PDF, JPG 파일형식만 첨부 가능합니다. (동의함 체크, 날짜, 성명, 서명날인)</div>

                          <div className="binds">
                            <div className="m-checks">
                              <InputCheck label="확인함" disabled defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  <div className="o-section">
                    <div className="m-header">
                      <h4 className="o-heading level4"><span className="label">보안서약서</span></h4>

                      <div className="o-helper">
                        <em className="label">(허용 확장자 : PDF, JPG)</em>
                      </div>

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
                          <CommonButton label="양식다운" className="_normal" />
                        </div>
                      </div>
                    </div>

                    <div className="main rows-body-2i">
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
                      <div className="o-board type-c style-fit">
                        <div className="o-notice">
                          <span className="icons">
                            <Icon icon="alert-octagram" />
                          </span>
                          <div className="main">IT(데이터)센터는 보안교육 및 보안서약서 첨부 필수로 PDF, JPG 파일형식만 첨부 가능합니다.</div>

                          <div className="binds">
                            <div className="m-checks">
                              <InputCheck label="확인함" disabled defaultChecked />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>

            </SplitterPanel>
          </Splitter>

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default STMPR0201M;
