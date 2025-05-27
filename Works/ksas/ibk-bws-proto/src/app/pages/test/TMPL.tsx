/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Favorite from 'app/shared/layouts/Favorite';
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

function TMPL() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품' }, { label: '본부부서조달관리(총무부 외)' }, { label: '(706520)(총무부 외) 중요용지 조달신청 접수' }];

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
      {/* <Dialog className="o-loading-layer" baseZIndex={2000} visible={visible} onHide={() => {if (!visible) return; setVisible(false); }} content={({ hide }) => (
        <>
          <div className="m-loading">
            <i className="o-loading style-spinner" aria-hidden="true"></i>
            <p className="caption">
              <strong className="label">Loading...</strong>
            </p>
          </div>
        </>
      )}></Dialog> */}

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="main">
            <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">(총무부 외) 중요용지 조달신청 접수</span>

                <Favorite />
              </h1>
            </div>
          </div>

          {/* <div className="m-binds type-start">
            <div className="group">
              <CommonButton label="화면잠금" icon="lock" className="_normal" />
              <CommonButton label="도움말" icon="help" className="_normal" />
            </div>
          </div> */}

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="알림전송" className="_lined-secondary" />
                <CommonButton label="공지사항" className="_lined-secondary" />
                <CommonButton label="결재선변경관리" className="_lined-secondary" />
                <CommonButton label="결재바로가기" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" icon="help" className="_normal" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="당일결정내역출력" className="_texted" />
                  <CommonButton label="결정출력" className="_texted" />
                  <CommonButton label="손상권출력" className="_texted" />
                  <CommonButton label="신청출력" className="_texted" />
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="업무지원반려" className="_lined-primary" />
                <CommonButton label="업무지원결정" className="_lined-primary" />
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="취소" className="_cancel" />
                <CommonButton label="결재요청" className="_solid-primary" />
                </div>
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

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field colspan-5">
                      <Label label={`InputCheck`} require={false} />
                      <div className="fields">
                        <div className="m-checks">
                          {/* <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Default</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Checked</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled+Checked</span>
                          </label> */}
                          {/*
                          <label className="o-check">
                            <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">체크박스 Disabled+Indeterminate</span>
                          </label>

                          <label className="o-check">
                            <input type="checkbox" title="" value="" className="bind" onBlur={(e) => e.target.indeterminate = 'true'} /><i aria-hidden="true"></i>
                            <span className="label">체크박스 Indeterminate</span>
                          </label>
                          */}

                          <InputCheck label="Default" />
                          <InputCheck label="Checked" defaultChecked />
                          <InputCheck label="Disabled" disabled />
                          <InputCheck label="Disabled+Checked" disabled defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-5">
                      <Label label={`InputRadio`} require={false} />
                      <div className="fields">
                        <div className="m-checks">
                          {/* <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:10" title="" value="" className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Default</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:10" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Checked</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:20" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:20" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled+Checked</span>
                          </label> */}

                          <InputRadio name="RADIO:10" label="Default" />
                          <InputRadio name="RADIO:10" label="Checked" defaultChecked />

                          <InputRadio name="RADIO:20" label="Disabled" disabled />
                          <InputRadio name="RADIO:20" label="Disabled+Checked" disabled defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`인도부점`} require={true} />
                      <div className="fields">
                        <div className="o-form _input mode-required">
                          {/* <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} /> */}
                          <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                          <span className="inner-binds">
                            <ImageButton label="초기화" icon="remove" />
                          </span>
                        </div>

                        <Tooltip target="#HSPHS1701P01-tooltip-10">
                          해당날짜 결재요청 가능
                        </Tooltip>
                        <ImageButton id="HSPHS1701P01-tooltip-10" label="안내툴팁" title="" icon="alert-circle" className="g-cursor-help" />
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`출급번호/품목명`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-2">
                      <Label label={`조회기간`} require={true} />
                      <div className="fields">
                        <div className="o-form _input type-date mode-required wdth-50">
                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                          <i aria-hidden="true"></i>
                        </div>
                        <span className="seps type-tilde">~</span>
                        <div className="o-form _input type-date mode-required wdth-50">
                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`인수부점`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} tooltip="영대문자 6자 내로 입력해주세요" tooltipOptions={{ position: 'bottom', event: 'both' }} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`인도구분`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-2">
                      <Label label={`.wdth-auto ~ .wdth-n`} require={false} />
                      <div className="fields">
                        <div className="o-form _select wdth-auto">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                        <div className="o-form _input type-date wdth-50">
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
                    <h2 className="o-heading level2"><span className="label">양식샘플</span></h2>

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
                          <col className="head" />
                          <col className="data" />
                          <col className="head" />
                          <col className="data" />
                        </colgroup>

                        <tbody>
                          {/* <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <input placeholder="" value="대결대결대결대결대결대결대결대결대결대결대결대결대결대결" className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <select className="bind">
                                      <option>대결대결대결대결대결대결대결대결대결대결대결대결대결대결</option>
                                    </select>
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr> */}
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Icon(search) + InputText`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <Icon icon="search" />
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputText + Units`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50 g-end">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units">%</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                          <th colSpan={1}>
                              <Label label={`InputText + Search-ImageButton`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
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
                              <Label label={`InputText​[readonly] + Search-ImageButton`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-30">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputText + CommonButton`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
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
                              <Label label={`AutoComplete`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="초기화" icon="remove" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Icon(search) + AutoComplete`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <Icon icon="search" />
                                    <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="초기화" icon="remove" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputNumber`} require={false} />
                            </th>
                            <td colSpan={1}>
                              {/* <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-40">
                                    <InputText type="number" placeholder="" value="0" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="증가" icon="sum-plus" />
                                    </span>
                                    <span className="inner-binds">
                                      <ImageButton label="감소" icon="sum-minus" />
                                    </span>
                                  </div>
                                </div>
                              </div> */}
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Dropdown`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select mode-required wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`MultiSelect`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select">
                                    <XMultiSelect appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`...`} require={false} />
                            </th>
                            <td colSpan={1}></td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Calendar`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date mode-required wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Calendar​[disabled]`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date mode-required wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} disabled showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Calendar + Time`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" view="month" dateFormat="yy-mm" mask="9999-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <div className="o-form _input type-time wdth-30">
                                    <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputTextarea`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required">
                                    <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`.o-rich-text`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="o-rich-text">
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Button:where(.o-section >.m-header *)`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-header">

                                <div className="m-binds">
                                  <div className="group">
                                    <CommonButton label="행추가" className="_normal" />
                                    <CommonButton label="행복사" className="_normal" />
                                    <CommonButton label="행삭제" className="_normal" />
                                    <CommonButton label="취소" className="_normal" />
                                    <CommonButton label="표준템플릿" className="_normal" icon="excel-download-label" />
                                  </div>

                                  <div className="group">
                                    <ImageButton label="엑셀​업로드" icon="excel-upload" />
                                    <ImageButton label="엑셀​다운로드" icon="excel-download" />
                                    <ImageButton label="목록필터" icon="column-toggle" />
                                    <ImageButton label="목록출력" icon="print" />
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
                    <h2 className="o-heading level2"><span className="label">그리드 로우그룹/rowspan</span></h2>

                    <div className="m-binds">
                      <div className="group">
                        <ImageButton label="엑셀​다운로드" icon="excel-download" />
                        <ImageButton label="목록필터" icon="column-toggle" />
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
                            <col className="wdth-50" />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재고량</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종인도일자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도한도</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청량</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단위</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={13}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <>
                          {
                            (idx - 3) % 3 === 0 &&
                            <tr className="p-rowgroup-header">
                              <td colSpan={13} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <span className="o-digit type-date">2025-12-25</span> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                              </td>
                              <td>0465</td>
                              <td className="g-start">독산하이테크</td>
                              <td>10100</td>
                              <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                              <td className="g-end">349</td>
                              <td><span className="o-digit type-datetime">2025-12-25</span></td>
                              <td>20-100</td>
                              <td className="g-end">50</td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>장</td>
                            </tr>
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer">
                              <td colSpan={13} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
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
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">소계 / 합계(합계 강조)</span></h3>

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
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용수량</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납수량</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">납부수량</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>21077</td>
                              <td className="g-start">중금채등록통장(거치식)</td>
                              <td className="g-end">9,999</td>
                              <td className="g-end">9,999</td>
                              <td className="g-end">9,999</td>
                            </tr>
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer subtotal-trow">
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell">0001</td>
                              <td className="subtotal-tcell g-start">영업부 소계</td>
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell g-start"></td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          </>
                          ))}
                          </tbody>

                          <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            <tr className="sumtotal-trow">
                              <td colSpan={5} className="sumtotal-tcell">합계</td>
                              <td className="sumtotal-tcell g-end">999,999</td>
                              <td className="sumtotal-tcell sumtotal-tcell-strong">정산대상금액</td>
                              <td className="sumtotal-tcell sumtotal-tcell-strong g-end">999,999</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Tabs className="m-tabs react-tabs" defaultIndex={0}>
              <div className="m-tab type2">
                <TabList className="lists">
                  {/* <Tab className="link"><span className="label">.m-tab.type2 .link:tab10</span></Tab>
                  <Tab className="link"><span className="label">.m-tab.type2 .link:tab20</span></Tab> */}
                  <Tab className="link"><span className="label">레이블</span></Tab>
                  <Tab className="link"><span className="label">LABEL</span></Tab>
                </TabList>
              </div>

              <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                <div className="o-grid">
                  <div className="column">

                    <div className="o-section">
                      <div className="m-header">
                        <h2 className="o-heading level2"><span className="label">틀고정(.p-x-frozen-last) / 오더바이(오름차순, 내림차순, 디폴트)(.p-sortable-column) / 필수입력 컬럼(.o-require-tag)</span></h2>

                        <div className="o-length">
                          <span className="head">전체</span>
                          <em className="data">
                            <span className="value">8</span>
                            <span className="units">건</span>
                          </em>
                        </div>

                        <div className="m-binds">
                          <div className="group">
                            <CommonButton label="표준템플릿" className="_normal" icon="excel-download-label" />
                          </div>

                          <div className="group">
                            <ImageButton label="엑셀​업로드" icon="excel-upload" />
                            <ImageButton label="엑셀​다운로드" icon="excel-download" />
                            <ImageButton label="목록필터" icon="column-toggle" />
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
                                <col className="wdth-0" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="wdth-0" />
                              </colgroup>

                              <thead className="p-datatable-thead">
                                <tr>
                                  <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도부점</span></div></th>
                                  <th className="p-align-center p-sortable-column p-highlight" aria-sort="ascending"><div className="p-column-header-content"><span className="p-column-title">출급번호</span><span data-pc-section="sort"></span></div></th>
                                  <th className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                  <th className="p-align-center p-sortable-column" aria-sort="none"><div className="p-column-header-content"><span className="p-column-title">인도일시</span><span data-pc-section="sort"></span></div></th>
                                  <th className="p-align-center p-sortable-column" aria-sort="descending"><div className="p-column-header-content"><span className="p-column-title">인도구분<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span><span data-pc-section="sort"></span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도상태</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도량</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                  <th className="p-align-center" colSpan={4}><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수부점</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수일자</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수상태</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수취소/정정일자</span></div></th>
                                  <th className="p-align-center" colSpan={2}><div className="p-column-header-content"><span className="p-column-title">일반인도 신청 및 수량 변경 사유</span></div></th>
                                </tr>
                              </thead>

                              <tbody className="p-datatable-tbody">
                                <tr className="p-datatable-emptymessage">
                                  <td colSpan={21}>등록된 데이터가 없습니다.</td>
                                </tr>
                              </tbody>

                              <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td><InputCheck label="선택" labelHidden /></td>
                                  <td>{idx + 1}</td>
                                  <td>프로세스혁신</td>
                                  <td>BC016</td>
                                  <td className="g-start p-x-frozen-last">나의 알파체크카드(비교통_그린)</td>
                                  <td><span className="o-digit type-datetime">2025-12-25 09:10:62</span></td>
                                  <td>신청인도</td>
                                  <td>정상</td>
                                  <td>부산</td>
                                  <td className="g-end">50</td>
                                  <td className="g-end">0</td>
                                  <td></td>
                                  <td>3344785</td>
                                  <td>~</td>
                                  <td>33447900</td>
                                  <td>부산역</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>미인수</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td className="g-start">마감 후 000긴급신청</td>
                                  <td>
                                      <ImageButton label="이미지​보기" icon="image" onClick={(e) => viewimageOverlay0.current.toggle(e)} />
                                      <OverlayPanel className="o-overlaypanel case-viewimage wdth-25p" ref={viewimageOverlay0} closeIcon={<Icon icon="popup-close" />} showCloseIcon closeOnEscape dismissable={false}>
                                        <div className="layer-head">
                                          <h3 className="o-heading"><span className="label">이미지보기</span></h3>
                                        </div>
                                        <div className="layer-body">
                                          <div className="o-view-image">
                                            <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                          </div>
                                        </div>
                                      </OverlayPanel>
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
              </TabPanel>

              <TabPanel className="m-tabs-panel react-tabs__tab-panel"></TabPanel>
            </Tabs>

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`부점코드`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점상태`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점구분`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`지역본부`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">부점내역</span></h2>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _select wdth-50">
                          <XDropdown appendTo={document.body} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                        <div className="o-form _select wdth-50">
                          <XDropdown appendTo={document.body} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
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
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점상태</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지역본부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팩스</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">주소</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상세주소</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">개점일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐점일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지역구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">관할본부코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계리부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">조직속성코드</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={18}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>0001</td>
                              <td className="g-start">Box연계시스템</td>
                              <td>개점</td>
                              <td className="g-start">본부영업점</td>
                              <td className="g-start">중부지역본부</td>
                              <td><span className="o-digit type-num">123-45-67890</span></td>
                              <td><span className="o-digit type-tel">02-729-7610</span></td>
                              <td><span className="o-digit type-tel">123-134</span></td>
                              <td>12345</td>
                              <td className="g-start">서울특별시 서초구 서초대로 77길 17</td>
                              <td className="g-start">659-29 삼성쉐르빌퍼스티1층</td>
                              <td><span className="o-digit type-date">1961-08-01</span></td>
                              <td><span className="o-digit type-date">9999-12-31</span></td>
                              <td>서울</td>
                              <td>1234567</td>
                              <td>1234567</td>
                              <td>1234567</td>
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

                <div className="m-divider">
                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="취소" icon="du-up" className="_normal" />
                      <CommonButton label="선택" icon="du-down" className="_normal" />
                    </div>
                  </div>
                </div>

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
                              <Label label={`부점정보`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`영문부점명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="BANKING DEPARTMENT" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`사업자등록번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-num">
                                    <InputText placeholder="" value="202-81-00978" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점약칭명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`부점약칭명2`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점구분코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점소재지코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점전화번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="02" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0000" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`주소`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-40">
                                    <InputText placeholder="" value="00000" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="서울특별시 중구 을지로 79" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="기업은행 본점" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`팩스`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`온라인번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0714" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`지도코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소유구분코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`외환부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0484" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`재활모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0714" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`교환모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`국고결제모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`한국은행관할​통합부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`관할사업본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`관할본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`지역본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`사무지원센터코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`부점장코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[021189] 이범건" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점장부임일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점상태코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`개점일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`폐점일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`EDW​실제근무​부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`계리부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`조직속성코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

              </div>
            </div>

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`소속직원`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`근무여부`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`실근무부점`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`소속부점`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점변경 여부`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">직원내역</span></h2>
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
                            <col className="wdth-50" />
                            <col />
                            <col />
                            <col />
                            <col className="wdth-50" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실근무점</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실근무점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현소속일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직무</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">보임</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">퇴직일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단말IP</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={16}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              {/* <td><Checkbox defaultChecked={checked} onChange={e => setChecked(e.checked)} /></td> */}
                              <td>{idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                              <td>0000001</td>
                              <td>홍길동</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">동대문個</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>팀장</td>
                              <td className="g-start">BPR지원_일반</td>
                              <td>부점장급</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-tel">02-729-7610</span></td>
                              <td></td>
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
                    <h3 className="o-heading level3"><span className="label">상세정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="변경이력" className="_normal" />
                      </div>
                    </div>
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
                              <Label label={`직원`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0000001] 홍길동" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소속부점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소속팀`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`실근무점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`EDW 실근무부점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`직책코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`근부여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-checks">
                                <InputRadio name="RADIO_10" label="근무" defaultChecked />
                                <InputRadio name="RADIO_10" label="퇴직" />
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점변경예정 (종료일)`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="m-checks">
                                    <InputCheck label="선택" labelHidden />
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

              </div>
            </div>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">직무분장</span></h3>


                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="직무분장 관리" className="_normal" />
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
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사무분장코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사무분장명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={3}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>10080</td>
                              <td className="g-start">경영정보</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">근태정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="행추가" className="_normal" />
                        <CommonButton label="행삭제" className="_normal" />
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
                            <col />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재직원</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">근태구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작시각</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료시각</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대직직원</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">반차구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">휴가일수</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={11}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(1)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                            <tr>
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td><Icon icon="grid-added" /></td>{/* 추가된 행 .o-icon._grid-added 순번 대체 { @DEV } */}
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
                                    <div className="o-form _select wdth-30">
                                      <XDropdown appendTo={document.body} className="bind" />
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
                                    <div className="o-form _input type-time wdth-30">
                                      <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-time wdth-30">
                                      <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
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
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`코드도메인`} require={false} />
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

                    <div className="o-field">
                      <Label label={`도메인명`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                    <h2 className="o-heading level2"><span className="label">코드도메인</span></h2>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="행추가" className="_normal" />
                        <CommonButton label="행삭제" className="_normal" />
                        <CommonButton label="취소" className="_normal" />
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
                            <col className="wdth-10" />
                            <col />
                            <col />
                            <col />
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">한글명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">설명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(15)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx === 15 - 1 ? <Icon icon="grid-added" /> : idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 추가된 행 .o-icon._grid-added 순번 대체 | 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                              <td>
                                {idx === 15 - 1 ?
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-40">
                                      <InputText placeholder="" value="AM123" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                                : `AM123`}
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-70">
                                      <InputText placeholder="" value="임차시설물폐쇠구분코드" className="bind" onChange={(e) => setValue(e.target.value)} tooltip="한글 20자 내로 입력해주세요" tooltipOptions={{ position: 'bottom', event: 'focus' }} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _select wdth-30">
                                      <XDropdown appendTo={document.body} className="bind" />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-70">
                                      <InputText placeholder="내용을 입력해주세요" value="동산에 대한 요청의 상태를 동산에 대한 요청의 상태를 동산에 대한 요청의 상태를" className="bind" onChange={(e) => setValue(e.target.value)} />
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

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">코드도메인 상세내용</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="행추가" className="_normal" />
                        <CommonButton label="행삭제" className="_normal" />
                        <CommonButton label="취소" className="_normal" />
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
                            <col className="wdth-10" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인스턴스</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인스턴스명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정렬순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드항목설명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(10)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx === 10 - 1 ? <Icon icon="grid-added" /> : idx + 1}</td>{/* 추가된 행 .o-icon._grid-added 순번 대체 { @DEV } */}
                              <td>
                                {idx === 10 - 1 ?
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-40">
                                      <InputText placeholder="" value="AM123" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                                : `AM123`}
                              </td>
                              <td>
                                {idx === 10 - 1 ?
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-30">
                                      <InputText placeholder="" value="101" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                                : `101`}
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value="내부결재" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _select wdth-30">
                                      <XDropdown appendTo={document.body} className="bind" />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-20">
                                      <InputText placeholder="" value="101" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-70">
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

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
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
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="table-container p-datatable-wrapper">
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
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
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
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                          ))} */}
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
                            <th colSpan={1}>
                              <Label label={`상위메뉴`} require={false} />
                            </th>
                            <td colSpan={1}>
                              원화현수송
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴ID`} require={false} />
                            </th>
                            <td colSpan={1}>
                              AABB00003
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              원화현수송신청
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`정렬순서`} require={false} />
                            </th>
                            <td colSpan={1}>
                              000
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`노출여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`사용여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록자`} require={false} />
                            </th>
                            <td colSpan={1}>
                              홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록일자`} require={false} />
                            </th>
                            <td colSpan={1}>
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
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="table-container p-datatable-wrapper">
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
                                <div className="m-with-bind">
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

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`직원번호/명`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">사용자내역</span></h2>

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
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={5}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>000001</td>
                              <td>홍길동</td>
                              <td>부장</td>
                              <td className="g-start">중요용지용도품관리자, 행내등기관리</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="m-footer">
                    <ul className="m-bullets type-disc">
                      <li>권한요청문의 : IT금융개발부 / 031-1234-5678</li>
                    </ul>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">사용자정보</span></h3>

                    <div className="m-chips">
                      <em className="o-chip">
                        <span className="label">[0031] 을지로 6가</span>
                      </em>
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
                              <Label label={`직원번호/명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              [000001] 홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`직책`} require={false} />
                            </th>
                            <td colSpan={1}>
                              부장
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">권한설정</span></h3>
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
                            <col className="wdth-auto" />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한설명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한여부</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>000000005</td>
                              <td className="g-start">중요용지용도품관리자</td>
                              <td className="g-start"></td>
                              <td>Y</td>
                              <td><InputCheck label="선택" labelHidden /></td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>
            </Splitter>

            <div className="div-footer">
              <div className="m-binds type-end">
                <div className="group">
                  <CommonButton label="알림전송" className="_lined-secondary" />
                  <CommonButton label="결재선변경관리" className="_lined-secondary" />
                  <CommonButton label="결재바로가기" className="_lined-secondary" />
                </div>

                <div className="group _utility">
                  <div className="m-print-binds">
                    <CommonButton label="당일결정내역출력" className="_texted" />
                    <CommonButton label="결정출력" className="_texted" />
                    <CommonButton label="손상권출력" className="_texted" />
                    <CommonButton label="신청출력" className="_texted" />
                    <CommonButton label="출력" className="_texted" />
                  </div>
                </div>

                <div className="group _primary">
                  <CommonButton label="업무지원반려" className="_lined-primary" />
                  <CommonButton label="업무지원결정" className="_lined-primary" />
                  <CommonButton label="삭제" className="_delete" />
                  <CommonButton label="취소" className="_cancel" />
                  <CommonButton label="결재요청" className="_solid-primary" />
                  </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default TMPL;
