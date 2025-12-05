/**
 * @description TEST > (P)공통 튜토리얼
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
import { A11y, Autoplay, EffectCreative, EffectFade, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function TutorialPage() {
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
  const userTurorialCarouselRef = useRef(null);


  return (
    <>
      <Dialog
        className="layer-wrap case-tutorial wdth-80p" /* auto[Images Default] | 20% | 25% | 40%[Texts Default] | 50% | 60% | 70%  */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        baseZIndex={2100}
        resizable={false}
        draggable={false}
        // footer={<></>}
        header={
          <>
            <h3 className="o-heading"><span className="label">튜토리얼</span></h3>
            <div className="config m-checks">
              <InputRadio name="RADIO_TUTOR_SCHEDULE" label="일주일 동안 열지 않기" bindClassName="mode-checkbox" />
              <InputRadio name="RADIO_TUTOR_SCHEDULE" label="오늘 하루동안 열지 않기" bindClassName="mode-checkbox" />
            </div>
          </>
        }
      >
        <div className="div-container _small">

          <div className="m-tutorial">
            <Swiper
              className="m-carousel"
              modules={[A11y, Autoplay, EffectCreative, EffectFade, Keyboard, Navigation, Pagination, Scrollbar]}
              direction="horizontal"
              autoHeight={true}
              loop={false}
              autoplay={false}
              pagination={{
                el: '.carousel-pagination',
                clickable: true,
              }}
              grabCursor={true}
              speed={300}
              effect="fade"
              onBeforeInit={(swiper) => {
                userTurorialCarouselRef.current = swiper;
              }}
              onSlideChange={(e) => {
                setIsBeginning(e.isBeginning);
                setIsEnd(e.isEnd);

                e.el.closest('.p-dialog-content').scrollTo({ top: 0, behavior: "instant" });
              }}
              onSwiper={(e) => {
                setSwiper(e);
              }}
              keyboard={{
                enabled: true,
              }}
              autoFocus
            >
              {[...Array(6)].map((e, idx) => (
                <>
                  <SwiperSlide key={idx}>
                    <div className="d-figure">
                      <div className="contain">
                        {/* <img src={require(`assets/images/tutorial/CMM000301M_T01.png`)} alt="" /> */}
                        <img src={require(`assets/images/tutorial/CMM0003_T${String(idx + 1).padStart(2, '0')}.png`)} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}

              <div className="carousel-footer">
                <div className="carousel-pagination"></div>

                <div className="carousel-navigation">
                  <ImageButton label="이전" icon="arrow-left" iconWidth={50} disabled={isBeginning} onClick={() => userTurorialCarouselRef.current?.slidePrev()} />
                  <ImageButton label="다음" icon="arrow-right" iconWidth={50} disabled={isEnd} onClick={() => userTurorialCarouselRef.current?.slideNext()} />
                </div>
              </div>
            </Swiper>
          </div>

        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)튜토리얼 [case-viewimage wdth-auto]</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="m-binds">
            <div className="group _start">
              <CommonButton label="팝업 열기" icon="link" size={70} onClick={() => setVisible(true)} />
            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default TutorialPage;
