/**
 * @description 재난·안전관리 > 기계경비당직관리 > 당직비정산
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

function STMGD0301M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '기계경비당직관리' }, { label: '당직비정산' }];

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
                <span className="label">당직비정산</span>

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
                <CommonButton label="직원별 당직비 산정결과" className="_solid-primary" />
                <CommonButton label="부점별 당직비 산정결과" className="_solid-primary" />
                <CommonButton label="저장" className="_solid-primary" />
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
                    <Label label={`당직연월`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date wdth-50 mode-required">
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
                  <h2 className="o-heading level2"><span className="label">당직비 내역</span></h2>


                  <div className="o-helper style-normal">
                    <em className="label"><strong className="c-color-text">최종저장일시</strong> : <span className="o-digit type-datetime">2025-12-25 09:10:59</span></em>
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
                      <CommonButton label="월당직비 생성" className="_normal" />
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
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직일자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직사유<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일직</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">숙직</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업시각(당직점검표)</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기계경비(당직점검표)</span></div></th>
                            <th colSpan={2} className="p-align-center">
                              <div className="p-column-header-content">
                                <span className="p-column-title">PC OFF 시각 및 세트시각(데이터 수신 및 업로드)
                                  <span className="binds type-tooltip">
                                    <Tooltip className="o-tooltip" target="#STMGD0301M-tooltip-10" position="top">
                                      <ul className="m-bullets type-disc">
                                        <li>평일
                                          <ul className="m-bullets type-hyphen">
                                            <li>PC OFF 시각 수신(근무시각관리 시스템)</li>
                                            <li>세트 시각 업로드(기계경비회사)</li>
                                          </ul>
                                        </li>
                                        <li>주말
                                          <ul className="m-bullets type-hyphen">
                                            <li>세트 해제 시각 업로드(기계경비회사)</li>
                                            <li>세트 시각 업로드(기계경비회사)</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </Tooltip>
                                    <ImageButton id="STMGD0301M-tooltip-10" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                                  </span>
                                </span>
                              </div>
                            </th>
                            <th colSpan={2} className="p-align-center">
                              <div className="p-column-header-content">
                                <span className="p-column-title">일직 숙직 구분
                                  <span className="binds type-tooltip">
                                    <Tooltip className="o-tooltip" target="#STMGD0301M-tooltip-20" position="top">
                                      <ul className="m-bullets type-disc">
                                        <li>평일
                                          <ul className="m-bullets type-hyphen">
                                            <li>변경사항 없음</li>
                                          </ul>
                                        </li>
                                        <li>주말
                                          <ul className="m-bullets type-hyphen">
                                            <li>일직만 한 경우 세트 시각 18시로 변경</li>
                                            <li>숙직만 한 경우 세트 해제 시각 18시로 변경</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </Tooltip>
                                    <ImageButton id="STMGD0301M-tooltip-20" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                                  </span>
                                </span>
                              </div>
                            </th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이격</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">1시간 이내</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">2시간 이내+당직1명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">삭제여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">예외</span></div></th>
                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">세부내용</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">해제</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">SET</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: PC OFF 시각<br />주말: 세트 해제 시각 </span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: 세트 시각<br />주말: 세트 시각 </span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: PC OFF 시각<br />주말: 세트 해제 시각 </span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: 세트 시각<br />주말: 세트 시각 </span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: PC OFF 시각<br />주말: 세트 해제 시각 </span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">평일: 세트 시각<br />주말: 세트 시각 </span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={25}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <>
                              {
                                (idx - 3) % 3 === 0 &&
                                <tr className="p-rowgroup-header">
                                  <td colSpan={25} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td>{idx + 1}</td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <span className="o-digit type-date">2025-12-25</span> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>0034</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span g-start">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>을지로</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>공사</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td className="p-x-cell-span g-start">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                                  {
                                    (idx) % 3 === 0 &&
                                    <>지점 리모델링 공사</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                                  }
                                </td>
                                <td>팀원1</td>
                                <td>[000081] 홍길동</td>
                                <td>팀원1</td>
                                <td>[000081] 홍길동</td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>

                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td><span className="o-digit type-time">00:00</span></td>
                                <td>N</td>
                                <td>N</td>
                                <td>N</td>
                                <td><InputCheck label="선택" labelHidden /></td>
                              </tr>
                              {
                                (idx - 2) % 3 === 0 &&
                                <tr className="p-rowgroup-footer">
                                  <td colSpan={25} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                                </tr>
                              }
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

        </div>
        {/* <!-- // Contents { @DEV } --> */}

      </div>
    </>
  );
}

export default STMGD0301M;
