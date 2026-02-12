/**
 * @description 공통 ~ (LP)도움말
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
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCreative, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function CMP000802P() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

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

  // Swiper
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const userManualCarouselRef = useRef(null);

  return (
    <>
      <div className="dom-popup type-help">
        <div className="o-layer type-popup">
          <div className="pop-wrap">
            <div className="pop-body">
              <div className="div-center">
                <Swiper
                  className="m-carousel"
                  modules={[A11y, Autoplay, EffectCreative, Keyboard, Navigation, Pagination, Scrollbar]}
                  direction="horizontal"
                  autoHeight={true}
                  loop={false}
                  autoplay={false}
                  pagination={{
                    el: '.carousel-pagination',
                    type: 'custom',
                    renderCustom: (swiper, current, total) => {
                      return `
                        <strong class="current">
                          <span class="value">${current}</span>
                        </strong>
                        <span class="total">
                          <span class="seps">
                            <span class="label">of</span>
                          </span>
                          <span class="value">${total}</span>
                        </span>
                      `;
                    },
                  }}
                  grabCursor={true}
                  speed={0}
                  // effect="creative"
                  effect="fade"
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-120%", 0, -500],
                    },
                    next: {
                      shadow: true,
                      translate: ["120%", 0, -500],
                    },
                  }}
                  onBeforeInit={(swiper) => {
                    userManualCarouselRef.current = swiper;
                  }}
                  onSlideChange={(e) => {
                    setIsBeginning(e.isBeginning);
                    setIsEnd(e.isEnd);

                    e.el.closest('.div-center').scrollTo({ top: 0, behavior: "instant" });
                  }}
                  onSwiper={(e) => {
                    setSwiper(e);
                  }}
                  keyboard={{
                    enabled: true,
                  }}
                >
                  <SwiperSlide>
                    <div className="d-figure">
                      <div className="contain">
                        <img src={require("assets/images/temp/CMP000802P_010.png")} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="d-figure">
                      <div className="contain">
                        <img src={require("assets/images/temp/CMP000802P_020.png")} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="d-figure">
                      <div className="contain">
                        <img src={require("assets/images/temp/CMP000802P_030.png")} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="d-figure">
                      <div className="contain">
                        <img src={require("assets/images/media/BEXPM0101P01_010.png")} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="d-figure">
                      <div className="contain">
                        <img src={require("assets/images/media/STMKY0201P03_010.png")} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <div className="carousel-footer">
                    <div className="carousel-pagination"></div>

                    <div className="carousel-navigation">
                      <CommonButton label="이전" className="_normal" disabled={isBeginning} onClick={() => userManualCarouselRef.current?.slidePrev()} />
                      <CommonButton label="다음" className="_solid-secondary" disabled={isEnd} onClick={() => userManualCarouselRef.current?.slideNext()} />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CMP000802P;
