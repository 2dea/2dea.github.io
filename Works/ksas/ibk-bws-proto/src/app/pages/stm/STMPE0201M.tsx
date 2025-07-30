/**
 * @description 재난·안전관리 > 보안진단의날점검표 > 점검표등록현황
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

function STMPE0201M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '보안진단의날점검표' }, { label: '점검표등록현황' }];

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
                <span className="label">점검표등록현황</span>

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
              <div className="m-binds type-end">
                <div className="group _primary">
                  <CommonButton label="점검표생성" className="_solid-primary" />
                  <CommonButton label="등록제외" className="_solid-primary" />
                </div>
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
                      <div className="o-form _input wdth-auto">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`점검기간`} require={true} />
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
                    <Label label={`진행상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`구분`} require={false} />
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
                  <h2 className="o-heading level2"><span className="label">점검표등록현황</span></h2>
                </div>

                <div className="main">
                  <div className="m-board">
                    <div className="bodies">
                      <div className="card o-pair-board type-multi size-30">
                        <div className="header">
                          <div className="subject">
                            <strong className="label">본부</strong>
                          </div>

                          <div className="length o-length">
                            <span className="head">전체</span>
                            <em className="data">
                              <span className="value">3,000</span>
                              <span className="units">건</span>
                            </em>
                          </div>
                        </div>

                        <ul className="m-pairs">
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료(지연)</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">미완료</strong>
                              <span className="data"><a href="javascript:" className="c-color-strong">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">등록제외</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="card o-pair-board type-multi size-30">
                        <div className="header">
                          <div className="subject">
                            <strong className="label">지역본부</strong>
                          </div>

                          <div className="length o-length">
                            <span className="head">전체</span>
                            <em className="data">
                              <span className="value">3,000</span>
                              <span className="units">건</span>
                            </em>
                          </div>
                        </div>

                        <ul className="m-pairs">
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료(지연)</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">미완료</strong>
                              <span className="data"><a href="javascript:" className="c-color-strong">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">등록제외</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="card o-pair-board type-multi size-30">
                        <div className="header">
                          <div className="subject">
                            <strong className="label">영업점</strong>
                          </div>

                          <div className="length o-length">
                            <span className="head">전체</span>
                            <em className="data">
                              <span className="value">3,000</span>
                              <span className="units">건</span>
                            </em>
                          </div>
                        </div>

                        <ul className="m-pairs">
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">완료(지연)</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">미완료</strong>
                              <span className="data"><a href="javascript:" className="c-color-strong">9,999</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="o-pair">
                              <strong className="head">등록제외</strong>
                              <span className="data"><a href="javascript:">9,999</a></span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">점검내역</span></h2>

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

                <div className="main _primary rows-body-8i">
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">점검연월</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록기한</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재일자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={13}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td>{idx + 1}</td>
                            <td><span className="o-digit type-date">2025-12</span></td>
                            <td>영업점</td>
                            <td>0009</td>
                            <td className="g-start">영업부</td>
                            <td><span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span></td>
                            <td>미완료</td>
                            <td>결재요청</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
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

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">기본정보</span></h3>
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
                            <Label label={`부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0034] 을지로
                          </td>
                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0034] 을지로
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`결재상태`} require={false} />
                          </th>
                          <td colSpan={1}>
                            결재승인
                          </td>
                          <th colSpan={1}>
                            <Label label={`등록일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <div className="m-sections case-survey g-scroll scroll-y" style={{ maxHeight: 'calc(var(--rem) * 588)' }}>
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">등록기한 안내</span></strong>
                    </div>

                    <dl className="m-bullets type-disc">
                      <dt className="c-color-strong">등록기한 : 2025-04-01 ~ 2025-04-10</dt>
                      <dd>등록기한 내 점검표 등록을 완료해주세요.</dd>
                      <dd>기한 내 등록이 어려운 경우, 담당부서로 사전에 문의 부탁드립니다. (안전기획팀 0000)</dd>
                    </dl>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <div className="o-helper">
                      <em className="label">점검대상기간 : 전월 1일 ~ 말일</em>
                    </div>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">일반보안(인원, 문서, 시설 등) 문의전화 : 비상계획팀 7463, 3484</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">인사이동 등 보안담당자 변동이 있습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">부서장이 변동이 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      ...
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h5 className="o-heading level3">
                      <span className="label">기타사항</span>
                    </h5>
                  </div>

                  <div className="main">
                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _input">
                          <InputTextarea placeholder="불량사항이 경미하거나 즉시 조치한 경우 내용을 기재해주세요 &#13;점검결과 ‘해당없음’에 대한 내용 또는 별도 의견 필요 시 작성해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h5 className="o-heading level3">
                      <span className="label">첨부파일</span>
                    </h5>

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

export default STMPE0201M;
