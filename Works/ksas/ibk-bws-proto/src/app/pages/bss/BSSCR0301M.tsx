/**
 * @description 영업지원 > 캘린더신청 > 배송·인수관리
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

function BSSCR0301M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '영업지원' }, { label: '캘린더신청' }, { label: '배송·인수관리' }];

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
                <span className="label">배송·인수관리</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="공지사항" className="_lined-secondary" />
                <CommonButton label="공지이미지관리" className="_lined-secondary" />
                <CommonButton label="배송업체정보" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="인수확인" className="_solid-primary" />
                <CommonButton label="수정결재요청" className="_solid-primary" disabled />
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
                          <em className="main">고객정보입력신청</em>
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
                          <em className="main">고객정보입력완료</em>
                        </span>
                      </li>
                      <li aria-label="진행 예정">
                        <span className="order" aria-hidden="true">
                          <span className="prefix"></span>
                          <span className="count">4</span>
                          <span className="suffix">단계. </span>
                        </span>
                        <span className="label">
                          <em className="main">배송중</em>
                        </span>
                      </li>
                      <li aria-label="진행 예정">
                        <span className="order" aria-hidden="true">
                          <span className="prefix"></span>
                          <span className="count">5</span>
                          <span className="suffix">단계. </span>
                        </span>
                        <span className="label">
                          <em className="main">인수완료</em>
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

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="연도별배송수량참고" className="_normal" />
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

                {/* <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>전화번호, 배송지 정보는 신청 완료 후 자동 등록됩니다.</em></li>
                  </ul>
                </div> */}
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
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-auto">
                  <div className="o-grid-table type-table case-notice-calendar">{/* [하드코딩] */}
                    <div className="table-container">
                      <table>
                        <colgroup>
                          <col />
                          <col />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '15%' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th>구분</th>
                            <th>종류</th>
                            <th>총신청수량</th>
                            <th>영업점배송수량</th>
                            <th>고객배송수량</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>A</td>
                            <td className="g-start">벽걸이달력(3단)</td>
                            <td className="g-end">999</td>
                            <td className="g-end">999</td>
                            <td className="tcell-strong g-end">999</td>
                          </tr>
                          <tr>
                            <td>B</td>
                            <td className="g-start">벽걸이달력(일반)</td>
                            <td className="g-end">999</td>
                            <td className="g-end">999</td>
                            <td className="tcell-strong g-end">999</td>
                          </tr>
                          <tr>
                            <td>C</td>
                            <td className="g-start">탁상달력</td>
                            <td className="g-end">999</td>
                            <td className="g-end">999</td>
                            <td className="tcell-strong g-end">999</td>
                          </tr>
                        </tbody>

                        <tfoot className="sumtotal-tfoot">
                          <tr className="sumtotal-trow">
                            <td colSpan={2}>합계</td>
                            <td className="g-end">9,999</td>
                            <td className="g-end">9,999</td>
                            <td className="sumtotal-tcell-strong g-end">9,999</td>
                          </tr>
                        </tfoot>
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
                    <span className="label">고객배송정보입력</span>
                    <InputCheck label="사용" labelHidden defaultChecked />
                  </h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="o-field">
                    <div className="fields">
                      <div className="o-form _select wdth-50">
                        <XDropdown appendTo={document.body} className="bind" />
                        <i aria-hidden="true"></i>
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
                          <col className="wdth-auto" />
                          <col />
                          <col className="wdth-50" />
                          <col className="wdth-50" />
                          <col className="wdth-50" />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수취인명<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편번호<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배송주소<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">벽걸이(3단)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">벽걸이(일반)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">탁상달력</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소계</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td><Icon icon="grid-added" /></td>{/* 추가된 행 .o-icon._grid-added 순번 대체 { @DEV } */}
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
                                  <div className="o-form _input wdth-30">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-80">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
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
                        ))}
                        </tbody>

                        <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                          <tr className="sumtotal-trow">
                            <td colSpan={6} className="sumtotal-tcell">합계</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                            <td className="sumtotal-tcell g-end">999,999</td>
                          </tr>
                        </tfoot>
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

export default BSSCR0301M;
