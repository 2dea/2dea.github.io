/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)권한별 메뉴/팝업관리
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import XDropdown from 'app/shared/modules/XDropdown';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function ADMAU0202M() {
  // OverlayPanel
  const overlayPan = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '권한관리' }, { label: '매핑관리' }];

  // InputText
  const [value, setValue] = useState<string>('');

  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
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
                <span className="label">매핑관리</span>

                <label className="o-check type-symbol style-favorite">
                  <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
                  <span className="label _hidden">마이메뉴 등록</span>
                </label>
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group _assistive">
                <CommonButton label="도움말" icon="help" className="_normal" />
              </div>
            </div>

            {/* <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div> */}
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents">
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴별 화면관리</span></Tab>
              <Tab className="link" aria-selected="true"><span className="label">권한별 메뉴/팝업관리</span></Tab>
              <Tab className="link"><span className="label">부점/부서별 권한관리</span></Tab>
              <Tab className="link"><span className="label">사용자별 권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`권한명`} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`사용여부`} />
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
                    <h2 className="o-heading level2"><span className="label">권한내역</span></h2>

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

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col className="wdth-10" />
                            <col />
                            <col className="wdth-50" />
                            <col className="wdth-auto" />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한설명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={5}>매핑된 관련화면이 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                              <td>00000001</td>
                              <td className="g-start">슈퍼관리자</td>
                              <td className="g-start"></td>
                              <td>Y</td>
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
                    <h3 className="o-heading level3"><span className="label">메뉴권한설정</span></h3>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _input wdth-90">
                          <InputText placeholder="메뉴ID, 메뉴명 입력" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                          <span className="inner-binds">
                            <ImageButton label="검색" icon="search" />
                          </span>
                          <span className="inner-binds type-spin">
                            <ImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                            <ImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-head-2i rows-body-5i">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col className="wdth-10" />
                            <col />
                            <col className="wdth-auto" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴ID</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전체</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">조회</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수정</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">삭제</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-highlight">
                              <td>1</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level0">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">자금<mark className="o-find-mark" tabIndex={0}>현</mark>송</span>
                                </div>
                              </td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송</span>
                                </div>
                              </td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송신청</span>
                                </div>
                              </td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                            </tr>
                          {[...Array(23)].map((e, idx) => (
                            <tr>
                              <td>{ idx + 4 }</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화마감시간관리</span>
                                </div>
                              </td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
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
                    <h3 className="o-heading level3"><span className="label">팝업권한설정</span></h3>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _input wdth-90">
                          <InputText placeholder="화면ID, 화면명 입력" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                          <span className="inner-binds">
                            <ImageButton label="검색" icon="search" />
                          </span>
                          <span className="inner-binds type-spin">
                            <ImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                            <ImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-head-2i rows-body-5i">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col className="wdth-10" />
                            <col />
                            <col className="wdth-auto" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                            <col className="wdth-10" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전체</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">조회</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수정</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">삭제</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title"></span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-highlight">
                              <td>1</td>
                              <td>AABB00001P01</td>
                              <td className="g-start">공통<mark className="o-find-mark" tabIndex={0}>팝</mark>업</td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={true} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>AABB00001P02</td>
                              <td className="g-start"><mark className="o-find-mark" tabIndex={0}>팝</mark>업</td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="div-footer">
              <div className="m-binds type-end">
                <div className="group _primary">
                  <CommonButton label="저장" className="_solid-primary" />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ADMAU0202M;
