/**
 * @description 행내등기·우편물 > 행내등기 > 행내등기신청
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Favorite from 'app/shared/layouts/Favorite';
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

function BEXRQ0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '행내등기·우편물' }, { label: '행내등기' }, { label: '행내등기신청' }];

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
                <span className="label">행내등기신청</span>

                <Favorite />
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
                <CommonButton label="신청" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <div className="o-board type-c style-fit">
                <div className="o-notice">
                  <span className="icons">
                    <Icon icon="alert-octagram" />
                  </span>

                  <div className="main">
                    행내등기 개인용도의 물품 배송을 제한합니다. 시행문을 확인해주세요.
                    <span className="inline-binds"><a href="javascript:" className="o-link texted-button _primary">시행문 바로가기<Icon icon="link" /></a></span>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">신청 기본정보</span></h2>
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
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`신청부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00070] 프로세스혁신부
                          </td>
                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00070] 홍길동
                          </td>
                          <th colSpan={1}>
                            <Label label={`신청일자`} require={false} />
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

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">신청 상세정보</span></h2>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="초기화" className="_normal" />
                    </div>
                  </div>

                  <div className="o-toggles type-tab">
                    <CommonButton label="단건신청" className="" icon="task-single" />
                    <CommonButton label="일괄신청" className="is-selected" icon="task-multi" />
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
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`인수자`} require={true} />
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

                          <th colSpan={1}>
                            <Label label={`실근무지`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                                <span className="helper">인수자가 설정한 근무지입니다.</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`인수부점`} require={true} />
                          </th>
                          <td colSpan={5}>
                              <div className="m-mixed-field">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input mode-required wdth-90">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>

                                <div className="m-checks">
                                  <InputRadio name="RADIO_10" label="서무대리" defaultChecked />
                                  <InputRadio name="RADIO_10" label="보관카드담당자" />
                                </div>

                                <div className="binds">
                                  <CommonButton label="즐겨찾기" className="_normal" />
                                </div>
                              </div>

                              <div className="m-footer">
                                <p className="o-helper">도착예정일자: YYYY-MM-DD 신청일자에 실물 발송한 경우</p>
                              </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`서류구분`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                          <th colSpan={1}>
                            <Label label={`수량`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-spin mode-required wdth-50">
                                  <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                    decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`서류내용`} require={true} />
                          </th>
                          <td colSpan={5}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-90">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="o-form _select wdth-90">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                                <CommonButton label="서류내용관리" className="_normal" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <div className="m-divider">
                <div className="m-binds">
                  <div className="group">
                    <CommonButton label="일괄적용" icon="du-down" className="_normal" />
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">일괄신청내역</span></h5>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="o-field">
                    <div className="fields">
                      <div className="o-form _select wdth-80">
                        <XDropdown appendTo={document.body} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="인수자 일괄추가" className="_normal" />
                    </div>

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
                          <col />
                          <col className="wdth-10" />
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수부점<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실근무지</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">서무대리</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">보관카드담당자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">서류구분<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">서류내용<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          <tr>
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
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={document.body} className="bind" disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={document.body} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
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
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li>신청 상세정보 일괄적용 시 체크된 일괄신청내역만 상세정보가 적용됩니다.</li>
                  </ul>
                </div>

              </div>

              <div className="o-section">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">유의사항</span></strong>
                    </div>

                    <ul className="m-bullets type-disc">
                      <li>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 <em className="c-color-strong">인수직원의 부점정보를 확인해주세요.</em></li>
                      <li><em className="c-color-strong">행내등기 대상</em>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                    </ul>

                    <div className="board-container type-sub">
                      <div className="m-header">
                        <strong className="o-heading"><span className="label">여신자필서류(STP)</span></strong>

                        <div className="m-binds">
                          <div className="group">
                            <a href="javascript:" className="o-link texted-button _primary">안내문 상세보기<Icon icon="link" /></a>
                          </div>
                        </div>
                      </div>

                      <ul className="m-bullets type-disc">
                        <li><em className="c-color-strong">NET점 고객의 여신자필 서류를 대신 받아 전달</em>할 경우, <em className="c-color-strong">영업점 간 비용이 정산</em>됩니다.(발송지점 비용 1만원 ↓, 인수지점 비용 1만원 ↑)</li>
                        <li><em className="c-color-strong">자점 고객이 NET점 방문 시</em> 고객에게 받을 서류를 미리 세팅하여 NET점에 보내는 경우 <em className="c-color-strong">서류구분을 [일반서류]로 선택</em> 후 신청해주세요.</li>
                      </ul>
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

export default BEXRQ0101M;
