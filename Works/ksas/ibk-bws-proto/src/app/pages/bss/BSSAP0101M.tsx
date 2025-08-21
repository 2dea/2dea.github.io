/**
 * @description 영업지원 > A4용지관리 > A4용지신청
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

function BSSAP0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '영업지원' }, { label: 'A4용지관리' }, { label: 'A4용지신청' }];

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
                <span className="label">A4용지신청</span>

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
                <CommonButton label="신청" className="_solid-primary" />
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

              <div className="m-caption-figure">
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

                <div className="caption m-caption">
                  <div className="header">
                    <div className="category">
                      <small className="index">00626</small>
                    </div>
                    <div className="heading"><strong className="label">A4복사용지</strong></div>
                  </div>

                  <div className="bodies">
                    <ul className="o-tabular">
                      <li>
                        <div className="head">
                          단위
                        </div>

                        <div className="data">
                          BOX
                        </div>
                      </li>

                      <li>
                        <div className="head">
                          단위당매수
                        </div>

                        <div className="data">
                          BOX당 2,500매
                        </div>
                      </li>

                      <li>
                        <div className="head">
                          신청한도
                        </div>

                        <div className="data">
                          6~20
                        </div>
                      </li>

                      <li>
                        <div className="head">
                          물품단가
                        </div>

                        <div className="data">
                          -
                        </div>
                      </li>

                      <li>
                        <div className="head">
                          최종인도수량
                        </div>

                        <div className="data">
                          15
                        </div>
                      </li>

                      <li>
                        <div className="head">
                          최종인도일자
                        </div>

                        <div className="data">
                          2025-02-10
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="footer">
                    <div className="input-amount">
                      <div className="o-field type-strong-label-70">
                        <Label label={`신청수량`} require={false} />
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
                </div>
              </div>

            </div>
          </div>

          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">배송정보</span></h3>
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
                            <Label label={`부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0034] 을지로
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`수령인`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00001] 김민정
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`배송주소`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-40">
                                  <InputText placeholder="" value="00000" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                  <i aria-hidden="true"></i>
                                  <span className="inner-binds">
                                    <ImageButton label="검색" icon="search" />
                                  </span>
                                </div>
                                <div className="o-form _input mode-required wdth-90">
                                  <InputText placeholder="" value="서울특별시 중구 을지로 79" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="o-form _input mode-required wdth-90">
                                  <InputText placeholder="" value="기업은행 본점" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>

                                <div className="m-checks">
                                  <InputCheck label="실배송지입력" defaultChecked />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`전화번호​(내선)`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-50">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`신청일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
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

export default BSSAP0101M;
