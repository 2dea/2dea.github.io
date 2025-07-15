/**
 * @description 재난·안전관리 > 출입증/방문증 > 부서행사용방문증신청
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

function STMPR0401M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '출입증/방문증' }, { label: '부서행사용방문증신청' }];

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
                <span className="label">부서행사용방문증신청</span>

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
                <CommonButton label="결재요청" className="_solid-primary" />
              </div>

            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={true} heading="문의" divName="안전관리팀" telNumber="7184" asideLabel="사전 협의 후 신청하시기 바랍니다." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">기본정보</span></h2>
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
                            [0001] 프로세스혁신부
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0001] 홍길동
                          </td>

                          <th colSpan={1}>
                            <Label label={`직책`} require={false} />
                          </th>
                          <td colSpan={1}>
                            대리
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
                            <Label label={`행사명/방문목적`} require={true} />
                          </th>
                          <td colSpan={7}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-80">
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
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">방문신청정보</span></h2>

                  <div className="o-helper style-strong">
                    <em className="label">접수일로부터 2~3영업일 소유됨</em>
                  </div>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="반려내역 불러오기" className="_normal" />
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
                          <col />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">회사명<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">성명<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                             <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방문기간<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방문건물<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">층수<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">방문사유<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={9}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
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
                                    <div className="o-form _select wdth-60">
                                      <XDropdown appendTo={document.body} className="bind" />
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
                                    <div className="o-form _input wdth-80">
                                      <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
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

          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level4"><span className="label">부서행사증빙자료</span></h4>

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

            </div>

            <div className="column">
              <div className="o-section">

                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">필수확인사항</span></h3>
                </div>

                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">단체방문객출입기준</span></strong>
                      <div className="m-checks justify-start">
                        <InputCheck label="확인함" />
                      </div>
                    </div>

                    <ul className="m-bullets">
                      <li>
                        <p>
                          각 부서장은 각종 행사 등의 사유로 단체 방문객이 발생한 경우에는 방문 목적, 일시, 방문자 인적사항, 방문구역 등을 기재하여 안전관리실에 단체방문객 출입신청을 해야한다. <br />
                          단체방문을 신청한 각 부서장은 시설보안 유지를 위해 안전관리실의 보안조치에 따라 이를 준하여야 한다.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">방문자관리의무</span></strong>
                      <div className="m-checks justify-start">
                        <InputCheck label="확인함" />
                      </div>
                    </div>

                    <ul className="m-bullets">
                      <li>
                        <p>
                          관리자는 행사참석 방문객을 확인 후 인솔하여 방문자의 최종 퇴행시까지 확인하여야 하며, 방문객은 방문을 마치고 본점을 나갈 경우에는 방문증을 반납하야야 한다.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">유의사항</span></strong>
                    </div>

                    <ul className="m-bullets type-disc">
                      <li>지급된 방문증은 방문증 신청정보와 일치하도록 관리하여 주시고, 방문 종료 즉시 회수하여 안전관리팀으로 반납해주시기 바랍니다.</li>
                      <li>부서 행사전용 방문증입니다. 행사 목적 외 방문객은 로비 안내데스크에서 출입 절차에 따라 일일방문증을 발급받아 출입하시기 바랍니다.</li>
                    </ul>
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

export default STMPR0401M;
