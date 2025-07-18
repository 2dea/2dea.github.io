/**
 * @description 수수료관리 > 자금현수송수수료 > 월별금액검증 ~ (LP)지급상세검증
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

function FEMCT0201P02() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

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
      <Dialog
        className="layer-wrap wdth-70p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">지급상세검증</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">기본정보</span></h4>
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
                            <Label label={`지급명`} require={false} />
                          </th>
                          <td colSpan={3}>
                            자금현수송 지급수수료(2025년 4월분)
                          </td>

                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0081] 홍길동
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
                            <Label label={`정산기준`} require={false} />
                          </th>
                          <td colSpan={1}>
                            개별
                          </td>

                          <th colSpan={1}>
                            <Label label={`지급대상연월`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12</span>
                          </td>

                          <th colSpan={1}>
                            <Label label={`지급업체`} require={false} />
                          </th>
                          <td colSpan={1}>
                            (주)앤비앤코퍼레이션
                          </td>

                          <th colSpan={1}>
                            <Label label={`사업자등록번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            999-99-99999
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`지급수수료`} require={false} />
                          </th>
                          <td colSpan={1}>
                            金 일천이백칠십이원 (￦100,000,000)
                          </td>
                          <th colSpan={1}>
                            <Label label={`세금계산서 합계`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-70">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                  <span className="inner-binds">
                                    <ImageButton label="검색" icon="search" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`국세청 승인번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <a href="javascript:" className="o-link _normal">999999999-99999999-99999999</a>
                          </td>
                          <th colSpan={1}>
                            <Label label={`세금계산서 검증여부`} require={true} />
                          </th>
                          <td>
                            <div className="m-string-binds">
                              <span className="string">
                                {/* <>일치</> */}
                                <span className="o-status-text style-inherit type-20">불일치</span>
                              </span>
                              <span className="binds justify-end"><CommonButton label="검증" className="_normal" /></span>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`비고`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`상세 검증여부`} require={true} />
                          </th>
                          <td>
                            <div className="m-string-binds">
                              <span className="string">
                                {/* <>일치</> */}
                                <span className="o-status-text style-inherit type-20">불일치</span>
                              </span>
                              <span className="binds justify-end"><CommonButton label="검증" className="_normal" /></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>상세정보 검증 일치 시 세금계산서 검증 가능합니다.</em></li>
                  </ul>
                </div>

              </div>

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">상세정보</span></h5>

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
                      <CommonButton label="상세검증" className="_normal" />
                    </div>

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
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청구분</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송업체</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료 부담부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현송부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현수부점</span></div></th>
                            <th colSpan={3} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">원화</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">외화</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정산기준</span></div></th>
                            <th colSpan={5} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검증전</span></div></th>
                            <th colSpan={4} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검증후</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검증여부</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지폐</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">주화</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">합계</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">운송내역(USD)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기타통화내역</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기본요금</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">추가요금</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료 합계(VAT포함)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">추가요금사유</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">예외</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기본요금</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">추가요금</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수수료 합계(VAT포함)</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">추가요금사유</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={29}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>외화</td>
                              <td>청구</td>
                              <td>001</td>
                              <td>1노선</td>
                              <td className="g-start">(주)앤비앤코퍼레이션</td>
                              <td>011465</td>
                              <td className="g-start">대구경북동부지역본부</td>
                              <td>011465</td>
                              <td className="g-start">대구경북동부지역본부</td>
                              <td>011465</td>
                              <td className="g-start">대구경북동부지역본부</td>
                              <td className="g-end">1,000</td>
                              <td className="g-end">1,000</td>
                              <td className="g-end">1,000</td>
                              <td className="g-end">6,000</td>
                              <td>
                                CNY: 50,000, JPY:37,777,000
                              </td>
                              <td>개별</td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50 g-end">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50 g-end">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="g-end">1,000,000</td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td className="g-end">1,000,000</td>
                              <td className="g-end">
                                  {(idx) % 3 === 0 ?
                                    <span className="o-status-text style-inherit type-20">-20,000</span> : <>-73,000</>
                                  }
                              </td>
                              <td className="g-end">
                                  {(idx) % 3 === 0 ?
                                    <span className="o-status-text style-inherit type-20">-20,000</span> : <>-73,000</>
                                  }
                              </td>
                              <td className="g-start">병행할인</td>
                              <td>
                                  {(idx) % 3 === 0 ?
                                    <span className="o-status-text style-inherit type-20">불일치</span> : <>일치</>
                                  }
                              </td>
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

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="취소" className="_cancel" />
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)지급상세검증 [wdth-70p(w1340)]</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="m-binds">
            <div className="group _start">
              <CommonButton label="팝업 열기" icon="link" size={70} onClick={() => setVisible(true)} />
            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FEMCT0201P02;
