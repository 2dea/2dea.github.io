/**
 * @description 자금현수송 > 원화현수송 > 타행현수송신청관리
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

function FMTCT1401M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '원화현수송' }, { label: '타행현수송신청관리' }];

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
                <span className="label">원화현수송 신청관리</span>

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
                  <CommonButton label="입금표출력" className="_texted" />
                  <CommonButton label="신청출력" className="_texted" />
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="재신청" className="_solid-primary" />
                <CommonButton label="수정" className="_solid-primary" />
                <CommonButton label="신청" className="_solid-primary" />
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
                    <Label label={`신청기간`} require={true} />
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
                    <Label label={`상대은행`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`신청구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`현송업체`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`처리상태`} require={false} />
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
                  <h2 className="o-heading level2"><span className="label">신청내역</span></h2>

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
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상대은행</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청합계</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시재한도</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시재금</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시재평잔</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송업체</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송인원수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송차량수</span></div></th>
                            <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납직원 직원번호</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납원1</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납원2</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납원3</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납원4</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출납원5</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={24}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                <td>{idx + 1}</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>0025</td>
                                <td className="g-start">프로세스혁신부</td>
                                <td>청구</td>
                                <td>한국은행</td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td className="g-end">1,500</td>
                                <td className="g-end">9,999</td>
                                <td className="g-end">1,500</td>
                                <td className="g-end">9,999</td>
                                <td>신청</td>
                                <td>결재요청</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>자체현송</td>
                                <td className="g-end">4</td>
                                <td className="g-end">2</td>
                                <td>012345</td>
                                <td>012345</td>
                                <td>012345</td>
                                <td>012345</td>
                                <td>012345</td>
                                <td className="g-start">별도승인 내용</td>
                              </tr>
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

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2 type-step">
              <TabList className="lists">
                <Tab className="link"><span className="label">Step 1. 신청내역</span></Tab>
                <Tab className="link"><span className="label">Step 2. 현송원 방문(자금현송명령부)</span></Tab>
                <Tab className="link" disabled><span className="label">비활성탭</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
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
                                <Label label={`비고`} require={false} />
                              </th>
                              <td colSpan={1}>
                                신청 시 작성하는 비고
                              </td>

                              <th colSpan={1}>
                                <Label label={`첨부파일`} require={false} />
                              </th>
                              <td colSpan={1}>
                                <div className="m-string-binds">
                                  <span className="string o-file">
                                    <span className="name">업무분장관리</span>
                                    <span className="ext">.xlsx</span>
                                  </span>
                                  <span className="binds justify-end"><CommonButton label="파일다운" className="_normal" /></span>
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
                      <h3 className="o-heading level3"><span className="label">신청내역</span></h3>

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
                              <col />
                              <col />
                              <col className="wdth-50" />
                              <col />
                              <col className="wdth-50" />
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종단위</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조권</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용권</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">총액</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">비고</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <>
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                                    <td className="g-end">15만원권</td>
                                    <td>대속</td>
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
                                    <td className="g-end">50,000,000</td>
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
                                    <td className="g-end">50,000,000</td>
                                    <td className="g-end">50,000,000</td>
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
                                  </tr>
                                </>
                              ))}
                            </tbody>

                            <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                              <tr className="sumtotal-trow">
                                <td colSpan={3} className="sumtotal-tcell">합계</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell"></td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell g-end">999,999</td>
                                <td className="sumtotal-tcell"></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">

              <Tabs className="m-tabs react-tabs" defaultIndex={2}>
                <div className="o-board">
                  <div className="m-step">
                    <div className="steps">
                      <TabList className="o-steps axis-rows type-straight" aria-label="진행 상태">
                        <Tab aria-label="진행 완료">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">1</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <a href="javascript:" className="label">
                            <em className="main">현송직원확인</em>
                          </a>
                        </Tab>
                        <Tab aria-label="진행 완료">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">2</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <a href="javascript:" className="label">
                            <em className="main">내국환정리</em>
                          </a>
                        </Tab>
                        {/* <Tab aria-label="진행 예정" disabled> */} {/* 진행 예정 [disabled] { @DEV } */}
                        <Tab aria-label="진행 단계">
                          <span className="order" aria-hidden="true">
                            <span className="prefix"></span>
                            <span className="count">3</span>
                            <span className="suffix">단계. </span>
                          </span>
                          <a href="javascript:" className="label">
                            <em className="main">자금현송명령부등록</em>
                          </a>
                        </Tab>
                      </TabList>
                    </div>
                  </div>
                </div>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  {/* 01.현송직원확인 { @DEV } */}
                  <div className="o-grid">
                    <div className="column">

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">현송직원확인</span></h4>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="현송직원확인" className="_solid-primary" />
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
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                              </colgroup>

                              <tbody>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`현송직원 확인여부`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    Y
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`현송직원 관리번호`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    0511
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송확인직원`} require={false} />
                                  </th>
                                  <td colSpan={1}>

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
                                    <Label label={`현송업체`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    (주)앤비앤코퍼레이션
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`현송원 1`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동1
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송원 2`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동2
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송원 3`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동3
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`장애사유구분`} require={false} />
                                  </th>
                                  <td colSpan={7}>

                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`장애내용`} require={false} />
                                  </th>
                                  <td colSpan={7}>

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </form>
                        </div>

                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">현송대행지시서 스캔</span></h4>
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
                                    <Label label={`스캔등록`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="m-binds">
                                      <div className="group _start">
                                        <CommonButton label="BPR 조회" className="_normal" />
                                        <CommonButton label="BPR 스캔" className="_normal" />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </form>
                        </div>
                      </div>


                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  {/* 02.내국환정리 { @DEV } */}
                  <div className="o-grid">
                    <div className="column">
                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">내국환정리</span></h4>

                          {/* <div className="m-binds">
                            <div className="group">
                              <CommonButton label="웹단말 내국환정리" className="_solid-primary" />
                            </div>
                          </div> */}
                        </div>

                        <div className="main">
                          <div className="o-board type-c style-fit">
                            <div className="o-notice">
                              <span className="icons">
                                <Icon icon="alert-octagram" />
                              </span>

                              <div className="main">
                                취결된 금액을 정리해주세요.
                                <span className="inline-binds"><a href="javascript:" className="o-link texted-button _primary">내국환정리 바로가기<Icon icon="link" /></a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">내국환취결</span></h4>
                        </div>

                        <div className="main">
                          <div className="o-board type-c style-fit">
                            <div className="o-notice">
                              <span className="icons">
                                <Icon icon="alert-octagram" />
                              </span>

                              <div className="main">
                                내국환 취결해주세요.
                                <span className="inline-binds"><a href="javascript:" className="o-link texted-button _primary">내국환취결 바로가기<Icon icon="link" /></a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                  {/* 03.자금현송명령부등록 { @DEV } */}
                  <div className="o-grid">
                    <div className="column">
                      <div className="o-section">
                        <div className="m-header">
                          <h4 className="o-heading level4"><span className="label">자금현송명령부등록</span></h4>

                          <div className="m-binds">
                            <div className="group">
                              <CommonButton label="수정결재요청" className="_solid-primary" />
                              <CommonButton label="결재요청" className="_solid-primary" />
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
                                <col className="head" />
                                <col className="data" />
                                <col className="head" />
                                <col className="data" />
                              </colgroup>

                              <tbody>
                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`진행상태`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    작성대기
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`등록자`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    홍길동1
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`등록일자`} require={false} />
                                  </th>
                                  <td colSpan={3}>
                                    <span className="o-digit type-date">2025-12-25</span>
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`현송업체`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    (주)앤비앤코퍼레이션
                                  </td>

                                  <th colSpan={1}>
                                    <Label label={`현송원 1`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동1
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송원 2`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동2
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송원 3`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    [0081] 홍길동3
                                  </td>
                                </tr>

                                <tr>
                                  <th colSpan={1}>
                                    <Label label={`금액`} require={false} />
                                  </th>
                                  <td colSpan={1} className="g-end">
                                    30,000,000
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`현송일자`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    <span className="o-digit type-date">2025-12-25</span>
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`출발시각`} require={false} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-time mode-required wdth-30">
                                          <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                          <i aria-hidden="true"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <th colSpan={1}>
                                    <Label label={`도착시각`} require={true} />
                                  </th>
                                  <td colSpan={1}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input type-time mode-required wdth-30">
                                          <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
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
                                  <td colSpan={7}>
                                    <div className="o-field">
                                      <div className="fields">
                                        <div className="o-form _input">
                                          <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
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
                    </div>
                  </div>
                </TabPanel>
              </Tabs>

            </TabPanel>
          </Tabs>

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTCT1401M;
