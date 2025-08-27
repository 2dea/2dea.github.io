/**
 * @description 중요용지·용도품(영업점) > 신청 > 용도품신청
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function BSPRQ0401M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '중요용지·용도품(영업점)' }, { label: '신청' }, { label: '용도품신청' }];

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
                <span className="label">용도품신청</span>

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
          <div className="m-shop">
            <div className="lists">
              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`출급번호/품목명`} require={false} />
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

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-tab type-c">
                <ul className="lists">
                  <li><a href="javascript:" className="link" aria-selected="true"><span className="label">전체</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">소모품(소모품비품목)</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">전산소모품(전산품목)</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">장부류</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">전표류</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">예산·신용카드대리점</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">대출·관리</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">계산·환·출납</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">서무관련서식류</span></a></li>
                  <li><a href="javascript:" className="link"><span className="label">외국환장부류</span></a></li>
                </ul>
              </div>

              <Tabs className="o-section" defaultIndex={0}>
                <div className="m-header">
                  <div className="m-checks justify-start">
                    <InputCheck label="우리부점 BEST" />
                    <InputCheck label="전체 BEST" />
                  </div>

                  <TabList className="o-toggles type-tab">
                    <Tab className="o-button"><Icon icon="image" /><span className="label">이미지보기</span></Tab>
                    <Tab className="o-button"><Icon icon="menu-alt" /><span className="label">리스트보기</span></Tab>
                  </TabList>
                </div>

                <div className="main _primary rows-1fr">
                  <TabPanel className="m-shop-list">
                    <div className="container">
                      {/*
                      <div className="o-empty-data">
                        <p>조회결과가 없습니다.</p>
                      </div>
                       */}{/* EMPTY_DATA { @DEV } */}

                      <ul>
                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/common/img_empty-image.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"><span className="label">2025-12-25 신청완료</span></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/common/img_empty-image.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"><span className="label">2025-12-25 신청완료</span></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 팩스토너CRG328(캐논 MF4550, MF4553D, MF4870D, MF4776N)</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="is-selected">
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/media/STMKY0201P03_010.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/media/BEXPM0101P01_010.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/media/STMPR0101P02_010.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/temp/FMTCT0201P02_010.jpg")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-product">
                            <div className="figures">
                              <a href="javascript:" className="o-view-image"><img src={require("assets/images/temp/BSSCR0301M_010.png")} alt="" /></a>
                            </div>

                            <div className="captions">
                              <div className="header">
                                <div className="primary">
                                  <em className="status"></em>
                                  <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                                </div>
                              </div>

                              <div className="o-product">
                                <div className="main">
                                  <a href="javascript:" className="subject">[00626] 전표꽂이</a>
                                </div>
                              </div>

                              <div className="footer">
                                <ul className="summary">
                                  <li>
                                    <strong className="head">한도</strong>
                                    <span className="data">1,000~10,000,000</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="actions">
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units type-legend">단위: BOX</span>
                                  <span className="binds justify-end">
                                    <CommonButton label="담기" className="_solid-secondary" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel className="m-shop-table">
                    <div className="container">
                      {/*
                      <div className="o-empty-data">
                        <p>조회결과가 없습니다.</p>
                      </div>
                       */}{/* EMPTY_DATA { @DEV } */}

                      <table className="table">
                        <colgroup>
                          <col style={{ width: 'calc(var(--rem) * 150)' }} />
                          <col style={{ width: 'auto' }} />
                          <col style={{ width: 'calc(var(--rem) * 140)' }} />
                          <col style={{ width: 'calc(var(--rem) * 260)' }} />
                        </colgroup>

                        <tbody>
                          <tr>
                            <td>
                              <div className="caption-primary">
                                <em className="status"><span className="label">2025-12-25 신청완료</span></em>
                                <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                              </div>
                            </td>
                            <td className="g-start">
                                <a href="javascript:" className="product">
                                  <span className="subject">[00626] 전표꽂이</span>
                                </a>
                            </td>
                            <td className="g-start">
                              <ul className="summary">
                                <li>
                                  <strong className="head">한도</strong>
                                  <span className="data">1,000~10,000,000</span>
                                </li>
                              </ul>
                            </td>
                            <td className="g-end">
                              <div className="actions">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <span className="units type-legend">단위: BOX</span>
                                    <span className="binds justify-end">
                                      <CommonButton label="담기" className="_solid-secondary" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="caption-primary">
                                <em className="status"><span className="label">2025-12-25 신청완료</span></em>
                                <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                              </div>
                            </td>
                            <td className="g-start">
                                <a href="javascript:" className="product">
                                  <span className="subject">[00626] 팩스토너CRG328(캐논 MF4550, MF4553D, MF4870D, MF4776N), 팩스토너CRG328(캐논 MF4550, MF4553D, MF4870D, MF4776N)</span>
                                </a>
                            </td>
                            <td className="g-start">
                              <ul className="summary">
                                <li>
                                  <strong className="head">한도</strong>
                                  <span className="data">1,000~10,000,000</span>
                                </li>
                              </ul>
                            </td>
                            <td className="g-end">
                              <div className="actions">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <span className="units type-legend">단위: BOX</span>
                                    <span className="binds justify-end">
                                      <CommonButton label="담기" className="_solid-secondary" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="is-selected">{/* tr.is-selected { @DEV } */}
                            <td>
                              <div className="caption-primary">
                                <em className="status"></em>
                                <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                              </div>
                            </td>
                            <td className="g-start">
                                <a href="javascript:" className="product">
                                  <span className="subject">[00626] 전표꽂이</span>
                                </a>
                            </td>
                            <td className="g-start">
                              <ul className="summary">
                                <li>
                                  <strong className="head">한도</strong>
                                  <span className="data">1,000~10,000,000</span>
                                </li>
                              </ul>
                            </td>
                            <td className="g-end">
                              <div className="actions">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <span className="units type-legend">단위: BOX</span>
                                    <span className="binds justify-end">
                                      <CommonButton label="담기" className="_solid-secondary" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="caption-primary">
                                <em className="status"></em>
                                <em className="o-chip var-lined-00 size-30"><span className="label">소모품(소모품비품목)</span></em>
                              </div>
                            </td>
                            <td className="g-start">
                                <a href="javascript:" className="product">
                                  <span className="subject">[00626] 전표꽂이</span>
                                </a>
                            </td>
                            <td className="g-start">
                              <ul className="summary">
                                <li>
                                  <strong className="head">한도</strong>
                                  <span className="data">1,000~10,000,000</span>
                                </li>
                              </ul>
                            </td>
                            <td className="g-end">
                              <div className="actions">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <span className="units type-legend">단위: BOX</span>
                                    <span className="binds justify-end">
                                      <CommonButton label="담기" className="_solid-secondary" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>

            <div className="results">
              <div className="details">
                <div className="m-shop-detail">
                  <div className="header">
                    <div className="primary">
                      <strong className="heading"><span className="label">품목 상세</span></strong>
                    </div>
                  </div>

                  <div className="bodies">
                    <div className="figure">
                      <Swiper
                        modules={[A11y, Navigation, Pagination, Scrollbar]}
                        navigation
                      >
                        <SwiperSlide><div className="o-view-image"><img src={require("assets/images/media/STMKY0201P03_010.png")} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="o-view-image"><img src={require("assets/images/media/BEXPM0101P01_010.png")} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="o-view-image"><img src={require("assets/images/media/STMPR0101P02_010.png")} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="o-view-image"><img src={require("assets/images/temp/FMTCT0201P02_010.jpg")} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="o-view-image"><img src={require("assets/images/temp/BSSCR0301M_010.png")} alt="" /></div></SwiperSlide>
                      </Swiper>
                    </div>

                    <div className="detail">
                      <div className="o-product">
                        <div className="main">
                          <em className="caption">
                            <span className="category">소모품(소모품비품목)</span>
                            <span className="product">00626</span>
                          </em>
                          <strong className="subject">전표꽂이</strong>
                        </div>
                      </div>


                      <ul className="summary">
                        <li>
                          <strong className="head">단위/매수</strong>
                          <span className="data">개(개 당 1매)</span>
                        </li>
                        <li>
                          <strong className="head">단가</strong>
                          <span className="data">18,200</span>
                        </li>
                        <li>
                          <strong className="head">한도</strong>
                          <span className="data">1~3</span>
                        </li>
                        <li>
                          <strong className="head">최종인도량</strong>
                          <span className="data">100</span>
                        </li>
                        <li>
                          <strong className="head">최종인도일자</strong>
                          <span className="data">2025-10-10</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Tabs className="m-shop-ranking" defaultIndex={0}>
                  <div className="header">
                    {/* <div className="o-toggles type-tab">
                      <CommonButton label="우리부점 BEST" className="is-selected" />
                      <CommonButton label="전체 BEST" className="" />
                    </div> */}
                    <TabList className="o-toggles type-tab">
                      <Tab className="o-button"><span className="label">우리부점 BEST</span></Tab>
                      <Tab className="o-button"><span className="label">전체 BEST</span></Tab>
                    </TabList>
                  </div>

                  <TabPanel className="bodies">
                    <ol className="ranking">
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">1</span>
                            {/* <span className="status">
                              <Icon icon="rank-up" />
                              <span className="tag">순위​상승</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">입출금식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">2</span>
                            {/* <span className="status">
                              <Icon icon="rank-down" />
                              <span className="tag">순위​하락</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">입출금식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">3</span>
                            {/* <span className="status">
                              <Icon icon="rank-hold" />
                              <span className="tag">순위​변동​없음</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">입출금식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">4</span>
                            {/* <span className="status">
                              <Icon icon="rank-up" />
                              <span className="tag">순위​상승</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">입출금식통장입출금식통장입출금식통장입출금식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">5</span>
                            {/* <span className="status">
                              <Icon icon="new" />
                              <span className="tag">순위권​진입</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">입출금식통장</span>
                          </span>
                        </div>
                      </li>
                    </ol>
                  </TabPanel>

                  <TabPanel className="bodies">
                    <ol className="ranking">
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">1</span>
                            {/* <span className="status">
                              <Icon icon="rank-up" />
                              <span className="tag">순위​상승</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">거치식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">2</span>
                            {/* <span className="status">
                              <Icon icon="rank-down" />
                              <span className="tag">순위​하락</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">거치식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">3</span>
                            {/* <span className="status">
                              <Icon icon="rank-hold" />
                              <span className="tag">순위​변동​없음</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">거치식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">4</span>
                            {/* <span className="status">
                              <Icon icon="rank-up" />
                              <span className="tag">순위​상승</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">거치식통장거치식통장거치식통장거치식통장</span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="o-rank">
                          <span className="order">
                            <span className="rank">5</span>
                            {/* <span className="status">
                              <Icon icon="new" />
                              <span className="tag">순위권​진입</span>
                            </span> */}
                          </span>
                          <span className="product">
                            <span className="id">22237</span>
                            <span className="name">거치식통장</span>
                          </span>
                        </div>
                      </li>
                    </ol>
                  </TabPanel>
                </Tabs>
              </div>

              <div className="requests">
                <div className="m-shop-cart">
                  <div className="header">
                    <div className="primary">
                      <strong className="heading"><span className="label">담은품목</span></strong>
                    </div>

                    <div className="secondary">
                      <div className="binds">
                        <CommonButton label="전체삭제" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="bodies">
                    <ul className="carts">
                      <li>
                        <div className="m-cart">
                          <div className="o-product">
                            <div className="main">
                              <em className="caption">
                                <span className="category">소모품(소모품비품목)</span>
                                <span className="product">00626</span>
                              </em>
                              <strong className="subject">전표꽂이</strong>
                            </div>

                            <div className="binds">
                              <ImageButton label="삭제" icon="delete" />
                            </div>
                          </div>

                          <div className="amount">
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-spin wdth-50">
                                  <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                    decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="m-cart">
                          <div className="o-product">
                            <div className="main">
                              <em className="caption">
                                <span className="category">소모품(소모품비품목)</span>
                                <span className="product">00626</span>
                              </em>
                              <strong className="subject">팩스토너CRG328(캐논 MF4550, MF4553D, MF4870D, MF4776N)</strong>
                            </div>

                            <div className="binds">
                              <ImageButton label="삭제" icon="delete" />
                            </div>
                          </div>

                          <div className="amount">
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-spin wdth-50">
                                  <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                    decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="footer">
                    <div className="binds">
                      <span className="item">
                        <CommonButton label="신청" className="_solid-primary" />
                      </span>
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

export default BSPRQ0401M;
