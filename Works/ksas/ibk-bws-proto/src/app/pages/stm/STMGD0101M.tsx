/**
 * @description 재난·안전관리 > 기계경비당직관리 > 당직신청관리
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

function STMGD0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '재난·안전관리' }, { label: '기계경비당직관리' }, { label: '당직신청관리' }];

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
                <span className="label">당직신청관리</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="점검표등록요청 알림발송" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="당직신청" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-board type-a style-fit">
            <ul className="m-bullets type-disc">
              <li>문의 : <span className="o-consult"><strong className="head">안전관리팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">7483</span></span></span> | 반드시 조회 후 신청해주세요.</li>
            </ul>
          </div>

          <form className="m-filter-form">
            <div className="fieldset">

              <div className="o-field">
                <Label label={`당직연월`} require={true} />
                <div className="fields">
                  <div className="o-form _select mode-required">
                    <XDropdown appendTo={'self'} className="bind" />
                    <i aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <div className="o-field">
                <Label label={`부점`} require={false} />
                <div className="fields">
                  <div className="o-form _input">
                    <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                    <i aria-hidden="true"></i>
                    <span className="inner-binds">
                      <ImageButton label="초기화" icon="remove" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="o-field">
                <Label label={`승인구분`} require={false} />
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
              <h2 className="o-heading level2"><span className="label">당직신청내역</span></h2>

              <div className="o-length">
                <span className="head">전체</span>
                <em className="data">
                  <span className="value">8</span>
                  <span className="units">건</span>
                </em>
              </div>

              <div className="m-binds">
                <div className="group">
                  <CommonButton label="이력조회" className="_normal" />
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
                    </colgroup>

                    <thead className="p-datatable-thead">
                      <tr>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직일자<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점</span></div></th>
                        <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">당직사유<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                        <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일직</span></div></th>
                        <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">숙직</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">영업점 결재상태</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">안전관리실 결재상태</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대직자 등록</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대직자 결재상태</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">점검표 등록</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">점검표 결재상태</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">점검사항</span></div></th>
                        <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업시간</span></div></th>
                        <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기계경비</span></div></th>
                        <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최초등록일자</span></div></th>
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
                      </tr>
                    </thead>

                    <tbody className="p-datatable-tbody">
                      <tr className="p-datatable-emptymessage">
                        <td colSpan={23}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                      </tr>
                    </tbody>

                    <tbody className="p-datatable-tbody">
                      {[...Array(24)].map((e, idx) => (
                        <>
                          {
                            (idx - 3) % 3 === 0 &&
                            <tr className="p-rowgroup-header">
                              <td colSpan={23} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <InputCheck label="선택" labelHidden />
                              }
                            </td>
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
                                <>20240065</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
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
                            <td><a href="javascript:" className="o-link _normal">[000081] 홍길동</a>&nbsp;<em className="o-chip var-lined-00 size-30"><span className="label">대직</span></em></td>
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <>결재승인</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                            </td>
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <>결재승인</> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                            </td>
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <CommonButton label="대직자 등록" className="_normal" /> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                            </td>
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <></> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                            </td>
                            <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <CommonButton label="점검표 등록" className="_normal" /> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                            </td>
                            <td>결재승인</td>
                            <td>이상무</td>
                            <td><span className="o-digit type-time">00:00</span></td>
                            <td><span className="o-digit type-time">00:00</span></td>
                            <td><span className="o-digit type-time">00:00</span></td>
                            <td><span className="o-digit type-time">00:00</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                          </tr>
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer">
                              <td colSpan={23} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
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

          <div className="o-section">
            <div className="o-board type-a">
              <div className="board-container">
                <div className="m-header">
                  <strong className="o-heading"><span className="label">유의사항</span></strong>
                </div>

                <ul className="m-bullets type-disc">
                  <li>당직가능업무: 공사, 청소 등 불가피한 경우만 해당됩니다.</li>
                  <li className="c-color-strong"><em>당직구분은 일직과 숙직이 있으며, 각 2인 1조로 당직근무 실시</em></li>
                  <li className="c-color-strong"><em>용역 경비원의 당직근무 수행불가</em></li>
                  <li className="c-color-strong"><em>당직근무 중 업무용 PC OFF 유지 필수(PC ON 시 당직근무 인정 불가)</em></li>
                  <li>당직실시의 경우 세팅비는 별도로 지급이 불가</li>
                  <li>일직: 09:00 ~ 18:00 / 숙직: 18:00 ~ 09:00(익일)</li>
                  <li className="c-color-strong"><em>익월 1영업일 오후 4시까지 결재완료된 건만 반영됩니다.</em></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default STMGD0101M;
