/**
 * @description 공통·결재 > 권한관리 > 생성관리 > (T)화면관리
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

function ADMAU0102M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '공통·결재' }, { label: '권한관리' }, { label: '생성관리' }];

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
                <span className="label">생성관리</span>

                <FavoriteDiv />
              </h1>

              <div className="asides">
                <div className="consults">

                  <div className="m-consult">
                    <span className="header">
                      <strong className="heading">안전문의</strong>
                    </span>
                    <span className="bodies">
                      <span className="o-consult"><strong className="head">안전관리팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000, 1234</span></span></span>
                    </span>
                  </div>

                  <div className="m-consult">
                    <span className="header">
                      <strong className="heading">권한문의</strong>
                    </span>
                    <span className="bodies">
                      <span className="o-consult"><strong className="head">프로세스혁신부</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">1234</span></span></span>
                      <span className="o-consult"><strong className="head">IT정보부</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000</span></span></span>
                    </span>
                  </div>

                </div>

                <div className="comments">
                  <span className="o-icon-text">
                    <Icon icon="consult-alert" />
                    <em className="label">반드시 조회 후 신청해주세요.</em>
                  </span>
                </div>
              </div>
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
        <ConsultsDiv visible={true} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents" defaultIndex={1}>
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴관리</span></Tab>
              <Tab className="link"><span className="label">화면관리</span></Tab>
              <Tab className="link"><span className="label">팝업관리</span></Tab>
              <Tab className="link"><span className="label">권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel></TabPanel>

          <TabPanel>
            <Splitter gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`화면ID`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`화면명`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`문의사용여부`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">화면내역</span></h2>

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
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={5}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
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
                              <td>AAABB0000C00</td>
                              <td className="g-start">원화현수송신청</td>
                              <td>화면</td>
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
                              <Label label={`화면ID`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="AAABB0000C00" className="bind" onChange={(e) => setValue(e.target.value)} />
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
                              <Label label={`화면명`} require={true} />
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
                              <Label label={`화면파일명`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="AAABB0000C00" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`화면경로명`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="fmt/ct" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`화면URL`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="fmt/ct/0101" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`정렬순서`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-30">
                                    <InputText placeholder="" value="1" className="bind" onChange={(e) => setValue(e.target.value)} />
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

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3">
                      <span className="label">문의 전화번호</span>
                      <InputCheck label="사용" labelHidden defaultChecked />
                    </h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="추가" className="_normal" disabled />
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
                              <Label label={`문의`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputText placeholder="" value="문의" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="helper"><em>예시) 당직관련 문의, 명령부 문의, 장애 문의 등</em></span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`담당부서명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="원화현수송신청" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds justify-end">
                                    <CommonButton label="업무담당자문의처" className="_normal" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`전화/내선번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="02-3355-3292" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`한줄내용`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="내용을 입력해주세요" className="bind" onChange={(e) => setValue(e.target.value)} />
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
                      <li>각 업무화면 상단에 입력하신 문의 내용이 노출됩니다. 예시를 참고해주세요.</li>
                      <li>예시) <em className="c-color-strong">OO문의/OO문의 : 안전관리팀(7483, 1234) | 안전관리팀(783) [등록하신 한줄내용이 노출됩니다.]</em></li>
                    </ul>
                  </div>

                </div>

                <div className="o-section">
                  <div className="m-header">

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="삭제" className="_normal" />
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
                              <Label label={`담당부서명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="원화현수송신청" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds justify-end">
                                    <CommonButton label="업무담당자문의처" className="_normal" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`전화/내선번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="02-3355-3292" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
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

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="삭제" className="_normal" />
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
                              <Label label={`담당부서명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="원화현수송신청" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds justify-end">
                                    <CommonButton label="업무담당자문의처" className="_normal" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`전화/내선번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-90">
                                    <InputText placeholder="" value="02-3355-3292" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
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
                    <h3 className="o-heading level3">
                      <span className="label">도움말</span>
                      <InputCheck label="사용" labelHidden defaultChecked />
                    </h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="미리보기" className="_normal" />
                        <CommonButton label="탬플릿다운로드" className="_normal" />
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
                              <Label label={<>이미지첨부{/*  <span className="g-nowrap">(000 * 000px)</span> */}</>} require={true} />
                            </th>
                            <td colSpan={1}>

                              <div className="o-section">
                                <div className="m-header">
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

                                <div className="main rows-body-5i">
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
        </Tabs>
      </div>
    </>
  );
}

export default ADMAU0102M;
