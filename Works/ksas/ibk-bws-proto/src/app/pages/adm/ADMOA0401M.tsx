/**
 * @description 공통·결재 > 운영관리 > 배치모니터링관리
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

function ADMOA0401M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '공통·결재' }, { label: '운영관리' }, { label: '배치모니터링관리' }];

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
                <span className="label">배치모니터링관리</span>

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
                    <Label label={`기준일자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`업무구분코드`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
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
                  <h2 className="o-heading level2"><span className="label">주요 작업 현황</span></h2>

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

                <div className="main _primary rows-body-3i">
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업무</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업ID</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대상건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">처리건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오류건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">처리내용</span></div></th>
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
                              <td>{idx + 1}</td>
                              <td>BBS</td>
                              <td>JYC0180B</td>
                              <td>0</td>
                              <td className="g-start">자기앞수표일자 전화 미적용 조정작업 배치</td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>종료</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
                              <td className="g-start">배치 적재수행 중 오류 발생</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">처리현황(주간)</span></h3>
                </div>

                <div className="main _primary rows-body-3i">
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업ID</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대상건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">처리건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오류건수</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={12}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>JYC0180B</td>
                              <td>0</td>
                              <td className="g-start">자기앞수표일자 전화 미적용 조정작업 배치</td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>종료</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">처리현황(당일)</span></h3>
                </div>

                <div className="main _primary rows-body-3i">
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
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업일자</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업ID</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">작업명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료시각</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대상건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">처리건수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">오류건수</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={12}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>JYC0180B</td>
                              <td>0</td>
                              <td className="g-start">자기앞수표일자 전화 미적용 조정작업 배치</td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td><span className="o-digit type-time">00:00:00</span></td>
                              <td>종료</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
                              <td className="g-end">30,000</td>
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
      </div>
    </>
  );
}

export default ADMOA0401M;
