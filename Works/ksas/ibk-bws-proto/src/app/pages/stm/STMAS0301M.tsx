/**
 * @description 재난·안전관리 > 자율보안체계 > 보안업무심사분석
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

function STMAS0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '자율보안체계' }, { label: '보안업무심사분석' }];

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
                <span className="label">보안업무심사분석</span>

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
          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

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
                    <Label label={`대상연도`} require={true} />
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
                          <col className="wdth-auto" />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대상연도</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록기한</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재일자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={11}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>0034</td>
                            <td className="g-start">을지로</td>
                            <td><span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span></td>
                            <td>완료</td>
                            <td>결재승인</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>0034</td>
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

            <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세정보</span></h3>
                </div>

                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">등록기한 안내</span></strong>
                    </div>

                    <ul className="m-bullets type-disc">
                      <li className="c-color-strong"><em>등록기한: 2025-01-01 ~ 2025-05-28</em></li>
                      <li>등록기한 내 세부추진계획 등록을 완료해주세요.</li>
                      <li>기한 내 등록이 어려운 경우, 담당부서로 사전에 문의 부탁드립니다. <span className="o-consult brackets-round">(<strong className="head">비상계획팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000</span></span>)</span></li>
                    </ul>
                  </div>
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
                            <Label label={`대상연도`} require={false} />
                          </th>
                          <td colSpan={1}>2025</td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`내용`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required">
                                  <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                                  <i aria-hidden="true"></i>

                                  <div className="o-limit type-length">
                                    <span className="head">글자수</span>
                                    <span className="data">
                                      <em className="value">0</em>
                                      <span className="sep">/</span>
                                      <span className="limits" aria-label="입력가능 글자수">100</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`첨부파일`} require={false} />
                          </th>
                          <td colSpan={1}>

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
                                    <CommonButton label="양식다운" className="_normal" />
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
                            </div>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

            </SplitterPanel>
          </Splitter>
        </div>
        {/* <!-- // Contents { @DEV } --> */}

      </div>
    </>
  );
}

export default STMAS0301M;
