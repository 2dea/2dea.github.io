/**
 * @description 재난·안전관리 > 소방안전관리 > 소화기관리대장
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

function STMFL0201M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '소방안전관리' }, { label: '소화기관리대장' }];

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
                <span className="label">소화기관리대장</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="공지사항" className="_lined-secondary" />
                <CommonButton label="소화기등록알림발송" className="_lined-secondary" />
                <CommonButton label="점검/교체알림발송" className="_lined-secondary" />
              </div>

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
                <CommonButton label="폐기" className="_solid-primary" />
                <CommonButton label="결재요청" className="_solid-primary" />
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
                    <Label label={`부점`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} readOnly />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`제조연월`} require={false} />
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
                    <Label label={`상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown placeholder="선택선택 선택" appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`폐기대상여부`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown placeholder="선택선택 선택" appendTo={'self'} className="bind" />
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
                <Tab className="link"><span className="label">소화기관리대장</span></Tab>
                <Tab className="link"><span className="label">폐기내역</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">소화기관리대장</span></h2>

                      <div className="o-length">
                        <span className="head">전체</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>

                      <div className="o-field">
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
                          <CommonButton label="행추가" className="_normal" />
                          <CommonButton label="행복사" className="_normal" />
                          <CommonButton label="행삭제" className="_normal" />
                          <CommonButton label="취소" className="_normal" />
                          <CommonButton label="일괄양식 다운로드" className="_normal" icon="excel-download-label" />
                          <CommonButton label="일괄양식 업로드" className="_normal" icon="excel-upload-label" />
                        </div>

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
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기관리번호</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기종류</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구입일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기용량</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조업체명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">충약일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배치장소</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">책임자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기대상여부</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={22}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td><InputCheck label="선택" labelHidden /></td>
                                <td>{idx + 1}</td>
                                <td><a href="javascript:" className="o-link _normal">202500001</a></td>
                                <td>2300</td>
                                <td className="g-start">을지로</td>
                                <td>분말소화기</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>정상</td>
                                <td>결재승인</td>
                                <td>
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-50 g-end">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>
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
                                <td>홍길동</td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>Y</td>
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
                      <h2 className="o-heading level2"><span className="label">소화기폐기내역</span></h2>

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
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기관리번호</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기일자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기결재자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐기사유</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기종류</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소화기용량</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조업체명</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">제조번호</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">충약일자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배치장소</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구매일자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">책임자</span></div></th>
                                <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                                <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                              </tr>
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={25}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td>{idx + 1}</td>
                                <td><a href="javascript:" className="o-link _normal">202500001</a></td>
                                <td>2300</td>
                                <td className="g-start">을지로</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td>012345</td>
                                <td>홍길동</td>
                                <td className="g-start">분말소화기 내용연수경과로 폐기</td>
                                <td>내용연수경과</td>
                                <td>결재승인</td>
                                <td>분말소화기</td>
                                <td className="g-end">33</td>
                                <td className="g-start">업체명 (주)앤비앤코퍼레이션</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>012345</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td className="g-start">출구 앞</td>
                                <td><span className="o-digit type-date">2025-12-25</span></td>
                                <td>012345</td>
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

                  <div className="o-section">
                    <div className="o-board type-a">
                      <div className="board-container">
                        <div className="m-header">
                          <strong className="o-heading"><span className="label">유의사항</span></strong>
                        </div>

                        <ul className="m-bullets type-disc">
                          <li>폐기 신청 후에는 원복 및 재신청이 불가하므로, 신청 전에 반드시 내용을 재확인하시기 바랍니다.</li>
                        </ul>
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

export default STMFL0201M;
