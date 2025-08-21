/**
 * @description 영업지원 > 캘린더신청 > 신청관리
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

function BSSCR0201M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '영업지원' }, { label: '캘린더신청' }, { label: '신청관리' }];

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
                <span className="label">신청관리</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="공지사항" className="_lined-secondary" />
                <CommonButton label="공지이미지관리" className="_lined-secondary" />
                <CommonButton label="달력카테고리관리" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="수정결재요청" className="_solid-primary" />
                <CommonButton label="결재요청" className="_solid-primary" disabled />
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

              <div className="o-board">
                <div className="m-step">
                  <div className="steps">
                    <ol className="o-steps axis-rows type-straight" aria-label="진행 상태">
                      <li aria-label="진행 완료">
                        <span className="order" aria-hidden="true">
                          <span className="prefix"></span>
                          <span className="count">1</span>
                          <span className="suffix">단계. </span>
                        </span>
                        <span className="label">
                          <em className="main">신청</em>
                        </span>
                      </li>
                      <li aria-label="진행 단계">
                        <span className="order" aria-hidden="true">
                          <span className="prefix"></span>
                          <span className="count">2</span>
                          <span className="suffix">단계. </span>
                        </span>
                        <span className="label">
                          <em className="main">결재중</em>
                        </span>
                      </li>
                      <li aria-label="진행 예정">
                        <span className="order" aria-hidden="true">
                          <span className="prefix"></span>
                          <span className="count">3</span>
                          <span className="suffix">단계. </span>
                        </span>
                        <span className="label">
                          <em className="main">신청완료</em>
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`신청연도`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" disabled />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`신청부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                      <div className="o-form _select mode-required wdth-auto">
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
                  <h2 className="o-heading level2"><span className="label">신청부점정보</span></h2>
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
                            <Label label={`신청부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0092] 부산
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [000001] 김영희
                          </td>

                          <th colSpan={1}>
                            <Label label={`진행상태`} require={false} />
                          </th>
                          <td colSpan={1}>
                            결재중
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`전화번호`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-90">
                                  <InputText placeholder="" value="02-1122-3456~9 [0000]" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <span className="helper"><em>우편물 수령 시 연락 가능한 전화번호</em></span>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청기간`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <span className="o-digit type-date">2025-12-25 ~ 2025-12-25</span>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`배송지정보`} require={false} />
                          </th>
                          <td colSpan={7}>
                            <div className="o-rich-text">
                              배송 직전월 기준 점포명세상의 주소지로 배송됩니다.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>전화번호, 배송지 정보는 신청 완료 후 자동 등록됩니다.</em></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="o-grid">
            <div className="column flex-auto">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">신청수량</span></h2>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="초기화" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-auto">
                  <div className="o-data-table style-fill">
                    <div className="table-container">
                      <table className="table" style={{ minWidth: 'calc(var(--rem) * 626)' }}>
                        <colgroup span={5}></colgroup>

                        {/* <thead>
                          <tr>
                            <th rowSpan={2} colSpan={1}>배부수량 (A+B+C) <em className="o-chip var-solid-02 size-70"><span className="label">1,200</span></em></th>
                            <th colSpan={1}>A</th>
                            <th colSpan={1}>B</th>
                            <th colSpan={1}>C</th>
                            <td rowSpan={2} colSpan={1} className="subtotal-tcell">합계 0</td>
                          </tr>
                        </thead> */}

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <div className="o-field axis-cols align-center">
                                <Label className="g-regular" label={<><span className="wbr">배부수량 </span><span className="wbr">(A+B+C)</span></>} require={false} />
                                <div className="fields">
                                  <span className="string">
                                    <em className="o-chip var-solid-02 size-70"><span className="label">1,200</span></em>
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td colSpan={1}>
                              <div className="o-field axis-cols align-center">
                                <Label label={<><span className="wbr">A </span><span className="wbr">벽걸이 (3단)</span></>} require={false} />
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}>
                              <div className="o-field axis-cols align-center">
                                <Label label={<><span className="wbr">B </span><span className="wbr">벽걸이 (일반)</span></>} require={false} />
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1}>
                              <div className="o-field axis-cols align-center">
                                <Label label={<><span className="wbr">C </span><span className="wbr">탁상달력</span></>} require={false} />
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td colSpan={1} className="subtotal-tcell">
                              <div className="o-field axis-cols align-center">
                                <Label label={`합계`} require={false} />
                                <div className="fields">
                                  <strong className="string">0</strong>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="column">

              <div className="o-section">
                <div className="m-header"></div>

                <div className="main _primary rows-auto">
                  <div className="o-view-image case-notice-calendar">
                    <img src={require("assets/images/temp/BSSCR0301M_010.png")} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2">
                    <span className="label">연도별 배부수량 참고</span>
                  </h2>

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
                        <colgroup></colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청연도</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배부수량</span></div></th>
                            <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">달력</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소속</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재상태</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종인수일자</span></div></th>
                            <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배송지정보</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">벽걸이(3단)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">벽걸이(일반)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">탁상</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">주소</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={16}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td><span className="o-digit type-date">2025</span></td>
                            <td className="g-end">9,999</td>
                            <td className="g-end">9,999</td>
                            <td className="g-end">9,999</td>
                            <td className="g-end">9,999</td>
                            <td>0034</td>
                            <td className="g-start">을지로</td>
                            <td></td>
                            <td>결재승인</td>
                            <td>A11111</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>02-123-1234</td>
                            <td>01012</td>
                            <td className="g-start">서울특별시 서울특별시 서울특별시 서울특별시</td>
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
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default BSSCR0201M;
