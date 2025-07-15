/**
 * @description 공통·결재 > 권한관리 > 생성관리 > (T)메뉴관리
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

function ADMAU0201M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '공통·결재' }, { label: '권한관리' }, { label: '생성관리' }];

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
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents" defaultIndex={0}>
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴관리</span></Tab>
              <Tab className="link"><span className="label">화면관리</span></Tab>
              <Tab className="link"><span className="label">팝업관리</span></Tab>
              <Tab className="link"><span className="label">권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel>
            <Splitter gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

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
                          <span className="inner-binds type-find">
                            <ImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                            <ImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="모두닫힘" className="_normal" />
                        <CommonButton label="모두펼침" className="_normal" />
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
                            <col className="wdth-auto" />
                            <col />
                            <col />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노출여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={7}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
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
                              <td></td>
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
                              <td>폴더</td>
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
                              <td></td>
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
                              <td></td>
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
                              <td></td>
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
                              <td></td>
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
                              <td>화면</td>
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
                              <td>화면</td>
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
                              <td>화면</td>
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
                              <td></td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="m-footer">
                    <ul className="m-bullets type-disc">
                      <li>메뉴 검색결과로 위치 이동 시 <span className="o-example type-button"><Icon icon="page-up" /><em className="g-abshidden">[이전 탐색]</em> <Icon icon="page-down" /><em className="g-abshidden">[다음 탐색]</em></span> 버튼을 클릭해주세요.</li>
                    </ul>
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
                              <Label label={`상위메뉴`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="원화현수송" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴구분`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-checks">
                                <InputRadio name="RADIO_10" label="폴더" />
                                <InputRadio name="RADIO_10" label="화면" defaultChecked />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴ID`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="AABB00003" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds">
                                    <CommonButton label="중복확인" className="_normal" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴명`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="원화현수송신청" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴설명`} require={false} />
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
                              <Label label={`정렬순서`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-30">
                                    <InputText placeholder="" value="2" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`노출여부`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-checks">
                                <InputRadio name="RADIO_20" label="Y" defaultChecked />
                                <InputRadio name="RADIO_20" label="N" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`사용여부`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-checks">
                                <InputRadio name="RADIO_30" label="Y" defaultChecked />
                                <InputRadio name="RADIO_30" label="N" />
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

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ADMAU0201M;
