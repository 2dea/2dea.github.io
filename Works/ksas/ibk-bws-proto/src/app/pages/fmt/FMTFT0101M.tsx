/**
 * @description 자금현수송 > 원화현수송 > 외화현수송신청
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

function FMTFT0101M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '원화현수송' }, { label: '외화현수송신청' }];

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
                <span className="label">외화현수송신청</span>

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

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">기본정보</span></h2>

                  <div className="o-field">
                    <Label label={`마감시간(프로세스혁신부)`} require={false} />
                    <span className="string">
                      23:00(청구) / 23:00(불입)
                    </span>
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
                            [0034] 을지로
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0081] 홍길동
                          </td>
                          <th colSpan={1}>
                            <Label label={`보유한도/총액`} require={false} />
                          </th>
                          <td colSpan={1} className="g-end">
                            670,000,000,000 / 644,000,000원
                          </td>

                          <th colSpan={1}>
                            <Label label={`보유기준일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`구분`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_10" label="청구" defaultChecked />
                              <InputRadio name="RADIO_10" label="불입" />
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`요청일자`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-date mode-required wdth-50">
                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`현송업체`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-70">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`관할업무센터`} require={true} />
                          </th>
                          <td colSpan={7}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-70">
                                  <XDropdown appendTo={document.body} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="m-checks">
                                  <InputCheck label="예외선택" />
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
                                <div className="o-form _input ">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li>협송업체 선택 시 전용노선 신청일 경우 [1. 관할자금모점]으로, 건별 신청일 경우 [2~5 해당업체]로 신청해주세요.</li>
                  </ul>
                </div>

              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세정보</span></h3>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="자동생성" className="_normal" />
                    </div>

                    <div className="group">
                      <CommonButton label="행추가" className="_normal" />
                      <CommonButton label="행복사" className="_normal" />
                      <CommonButton label="행삭제" className="_normal" />
                      <CommonButton label="취소" className="_normal" />
                    </div>
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
                          <col className="wdth-50" />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청액</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">통화</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권종</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td><Icon icon="grid-added" /></td>
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
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputText type="text" placeholder="" value="0" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                      <span className="inner-binds">
                                        <ImageButton label="증가" icon="sum-plus" />
                                      </span>
                                      <span className="inner-binds">
                                        <ImageButton label="감소" icon="sum-minus" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50 g-end">
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
                            <td colSpan={2} className="sumtotal-tcell">합계</td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell"></td>
                            <td className="sumtotal-tcell sumtotal-tcell-strong">신청금액(원)</td>
                            <td className="sumtotal-tcell sumtotal-tcell-strong g-end">999,999</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
              <div className="o-section">
                <div className="main">
                  <div className="o-board type-a">
                    <div className="board-container">
                      <div className="m-header">
                        <strong className="o-heading"><span className="label">유의사항</span></strong>
                      </div>

                      <ul className="m-bullets type-disc">
                        <li>고객의 예약요청으로 외화를 신청하는 경우 <em className="c-color-strong">통합단말 [54602] 외국통화 매도불가금액관리</em>에서 예약등록해주세요.</li>
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

export default FMTFT0101M;
