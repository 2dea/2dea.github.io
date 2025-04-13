/**
 * @description 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
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

function ADMAU0101M() {
  // OverlayPanel
  const overlayPan = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '권한관리' }, { label: '생성관리' }];

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
          <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">생성관리</span>

              <label className="o-check type-symbol style-favorite">
                <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
                <span className="label _hidden">마이메뉴 등록</span>
              </label>
            </h1>
          </div>

          <div className="m-binds type-start">
            <div className="group">
              <CommonButton label="화면잠금" icon="lock" className="_normal" />
              <CommonButton label="도움말" icon="help" className="_normal" />
            </div>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents">
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴관리</span></Tab>
              <Tab className="link" aria-selected="true"><span className="label">화면관리</span></Tab>
              <Tab className="link"><span className="label">팝업관리</span></Tab>
              <Tab className="link"><span className="label">권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="o-grid">
              <div className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h2 className="o-heading level2"><span className="label">메뉴내역</span></h2>

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

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="모두펼침" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hidden" />
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col style={{ width: 'calc(var(--rem) * 50)' }} />
                            <col style={{ width: '10%', minWidth: 'calc(var(--rem) * 92)' }} />
                            <col />
                            <col style={{ width: 'calc(var(--rem) * 64)' }} />
                            <col style={{ width: 'calc(var(--rem) * 64)' }} />
                            <col style={{ width: 'calc(var(--rem) * 100)' }} />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노출여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}>No available options</td>
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
                                  <span className="main">홈</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송신청</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder" />
                                  </span>
                                  <span className="main">비상계획안전기획</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">자금<mark className="o-find-mark" tabIndex={0}>현</mark>송</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">대시보드</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화마감시간관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">시재과부족<mark className="o-find-mark" tabIndex={0}>현</mark>황관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">자금<mark className="o-find-mark" tabIndex={0}>현</mark>송명령부관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                          {[...Array(23)].map((e, idx) => (
                            <tr>
                              <td>{ idx + 10 }</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder" />
                                  </span>
                                  <span className="main">외화보유<mark className="o-find-mark" tabIndex={0}>현</mark>황</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                          ))}
                          {/* {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level0">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">홈</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                          ))} */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="m-footer">
                    <ul className="m-bullets type-disc">
                      <li>메뉴 검색결과로 위치 이동 시 <span className="o-example type-button"><Icon icon="page-up" /><em className="g-hidden flow-inline">[이전 탐색]</em> <Icon icon="page-down" /><em className="g-hidden flow-inline">[다음 탐색]</em></span> 버튼을 클릭해주세요.</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="column views">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">메뉴정보</span></h3>

                    {/* <div className="m-binds">
                      <div className="group">
                        <CommonButton label="신규" className="_create" />
                      </div>
                    </div> */}
                  </div>

                  <div className="main">
                    <form className="m-data-form">
                      <table className="table">
                        <colgroup>
                          <col className="head" />
                          <col className="data" />
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`상위메뉴`} require={false} />
                            </th>
                            <td colSpan={3}>
                              원화현수송
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`메뉴ID`} require={false} />
                            </th>
                            <td colSpan={3}>
                              AABB00003
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`메뉴명`} require={false} />
                            </th>
                            <td colSpan={3}>
                              원화현수송신청
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`정렬순서`} require={false} />
                            </th>
                            <td colSpan={3}>
                              000
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`노출여부`} require={false} />
                            </th>
                            <td colSpan={3}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`사용여부`} require={false} />
                            </th>
                            <td colSpan={3}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`등록자`} require={false} />
                            </th>
                            <td colSpan={3}>
                              홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`등록일자`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <span className="o-digit type-date">2024-09-16</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h4 className="o-heading level4"><span className="label">화면매핑정보</span></h4>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="화면매핑" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-body-3i">
                    <DataTable className="o-grid-table g-hidden" />
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col style={{ width: 'calc(var(--rem) * 50)' }} />
                            <col style={{ width: '20%', minWidth: 'calc(var(--rem) * 121)' }} />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={3}>No available options</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>AABB00001M00</td>
                              <td className="g-start">
                                <div className="o-with-bind">
                                  <span className="main">원화현수송신청_관련화면 01</span>
                                  <span className="binds">
                                    <ImageButton label="삭제" icon="delete" />
                                  </span>
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

export default ADMAU0101M;
