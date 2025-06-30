/**
 * @description 공통·결재 > 권한관리 > 생성관리 > (T)권한관리
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

function ADMAU0104M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '공통·결재' }, { label: '권한관리' }, { label: '생성관리' }];

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
                <span className="label">생성관리</span>

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

            {/* <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="저장" className="_solid-primary" />
              </div>
            </div> */}
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents" defaultIndex={3}>
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴관리</span></Tab>
              <Tab className="link"><span className="label">화면관리</span></Tab>
              <Tab className="link"><span className="label">팝업관리</span></Tab>
              <Tab className="link"><span className="label">권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel>
            <Splitter gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`권한코드`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`권한명`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`사용여부`} require={false} />
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
                      <div className="table-container p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col className="wdth-10" />
                            <col />
                            <col className="wdth-auto" />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={4}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr
                              key={idx}
                              className={
                                `${idx === 0 ?
                                'p-highlight' // 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV }
                                :
                                ''
                                }`
                              }
                            >
                              <td>{ idx + 1 }</td>
                              <td>00000001</td>
                              <td className="g-start">행내등기관리자</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">상세정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="신규" className="_create" />
                      </div>
                    </div>
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
                            <th colSpan={1}>
                              <Label label={`권한코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-70">
                                    <InputText placeholder="" value="00000002" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`권한명`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="서비스관리자" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`권한설명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록자`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value="홍길동" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록일자`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} disabled showIcon icon={<Icon icon="calendar" />} />
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

              </SplitterPanel>
            </Splitter>

            <div className="div-footer">
              <div className="m-binds type-end">
                <div className="group _primary">
                  <CommonButton label="삭제" className="_delete" />
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

export default ADMAU0104M;
