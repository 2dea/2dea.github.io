/**
 * @description 공통 ~ 메인
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
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

function CMM000301M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '행내등기·우편물' }, { label: '우편물' }, { label: '우편물신청' }];

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
  const mainNoticeCarouselRef = useRef(null);

  return (
    <>
      <div className="roles page-home" data-div-role="0">
        <div className="div-home">
          <div className="home-primary">

            <div className="home-header">
              <div className="primary">
                <div className="welcome">
                  <p>
                    안녕하세요, 홍길동님
                  </p>
                </div>

                <div className="controls">
                  <div className="tasks">
                    <strong className="head">미처리 업무</strong>
                    <span className="data">
                      <CommonButton label="새로고침" className="_texted-primary" icon="refresh" size={30} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="secondary">
                <div className="binds">
                  <button type="button" className="button">
                    <Icon icon="home-aside-qna" />
                    <span className="label">질문과 답변</span>
                  </button>

                  <button type="button" className="button">
                    <Icon icon="home-aside-contacts" />
                    <span className="label">담당자 전화번호</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="home-group _task">

              <div className="home-section _my">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">나의 미처리 업무</strong>
                    </div>
                    <div className="data">
                      <span className="value">4,444</span>
                      <span className="units">건</span>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-taskboard">
                      <table className="table">
                        <colgroup>
                          <col />
                          <col style={{ width: 'calc(var(--rem) * 50)' }} />
                        </colgroup>

                        <tbody>
                        {[...Array(3)].map((e, idx) => (
                        <>
                          <tr key={idx}>
                            <td>
                              <a href="javascript:" className="subject">
                                <span className="main">외화 자금현송명령부 미등록</span>
                                <em className="category">행내등기·우편물</em>
                              </a>
                            </td>
                            <td className="g-end">
                              <div className="data">
                                <span className="value">4</span>
                                <span className="units">건</span>
                              </div>
                            </td>
                          </tr>
                        </>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-section _branch">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">우리부점 미처리 업무</strong>
                    </div>
                    <div className="data">
                      <span className="value">4,444</span>
                      <span className="units">건</span>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-taskboard">

                      <table className="table">
                        <colgroup>
                          <col />
                          <col style={{ width: 'calc(var(--rem) * 80)' }} />
                          <col style={{ width: 'calc(var(--rem) * 50)' }} />
                        </colgroup>

                        <tbody>
                        {[...Array(24)].map((e, idx) => (
                        <>
                          <tr key={idx}>
                            <td>
                              <a href="javascript:" className="subject">
                                <span className="main">외화 자금현송명령부 미등록</span>
                                <em className="category">행내등기·우편물</em>
                              </a>
                            </td>
                            <td className="g-end">
                              <div className="auth">
                                <span className="main">홍길동</span>
                                <em className="position">대리</em>
                              </div>
                            </td>
                            <td className="g-end">
                              <div className="data">
                                <span className="value">4</span>
                                <span className="units">건</span>
                              </div>
                            </td>
                          </tr>
                        </>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="home-group _ship">

              <div className="home-section _bsp1 is-busy-true">{/* ._bsp1.is-busy-true */}
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">중요용지 배송정보</strong>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-shipboard">
                      <div className="main">
                        <p>
                          <span className="wbr">신청하신 <em className="emph">중요용지</em>가 </span>
                          <span className="wbr">오늘 배송 예정이에요.</span>
                        </p>
                      </div>
                      <div className="binds">
                        <CommonButton label="인수내역" className="_normal" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-section _bsp2 is-busy-false">{/* ._bsp2.is-busy-false */}
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">용도품 배송정보</strong>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-shipboard">
                      <div className="main">
                        <p>
                          <span className="wbr">배송중인 <em className="emph">용도품</em>이 </span>
                          <span className="wbr">없어요.</span>
                        </p>
                      </div>
                      <div className="binds">
                        <CommonButton label="인수내역" className="_normal" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-section _fmt1 is-busy-true">{/* ._fmt1.is-busy-true */}
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">원화/외화 청구자금 배송정보</strong>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-shipboard">
                      <div className="main">
                        <p>
                          <span className="wbr">신청하신 <em className="emph">원화/외화 청구자금</em>이 </span>
                          <span className="wbr">오늘 배송 예정이에요.</span>
                        </p>
                      </div>
                      <div className="binds">
                        <CommonButton label="원화현수송" className="_normal" size={30} />
                        <CommonButton label="외화현수송" className="_normal" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="home-group _notice">

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">공지사항</strong>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <Swiper
                      className="d-noticelist"
                      modules={[A11y, Autoplay, Navigation, Pagination, Scrollbar]}
                      direction="vertical"
                      autoHeight
                      loop
                      autoplay
                      onBeforeInit={(swiper) => {
                        mainNoticeCarouselRef.current = swiper;
                      }}
                    >
                      <SwiperSlide>{/* Empty Data  { @DEV } */}
                        <div className="d-notice">
                          <p className="main _empty">홈화면에 노출된 공지사항이 없습니다.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-notice">
                          <a href="javascript:" className="main o-link _normal">업무지원시스템 리뉴얼 오픈 이벤트</a>
                          <span className="date">2025-05-10</span>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-notice">
                          <a href="javascript:" className="main o-link _normal">업무지원시스템 리뉴얼 오픈 이벤트 업무지원시스템 리뉴얼 오픈 이벤트 업무지원시스템 리뉴얼 오픈 이벤트 업무지원시스템 리뉴얼 오픈 이벤트 업무지원시스템 리뉴얼 오픈 이벤트 업무지원시스템 리뉴얼 오픈 이벤트</a>
                          <span className="date">2025-05-10</span>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-notice">
                          <a href="javascript:" className="main o-link _normal">업무지원시스템 리뉴얼 오픈 이벤트 2</a>
                          <span className="date">2025-05-10</span>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <div className="binds">
                      <ImageButton label="이전" icon="arrow-up" onClick={() => mainNoticeCarouselRef.current?.slidePrev()} />
                      <ImageButton label="다음" icon="arrow-down" onClick={() => mainNoticeCarouselRef.current?.slideNext()} />
                    </div>
                  </div>
                </div>

                <div className="aside">
                  <div className="binds more">
                    <CommonButton label="더보기" className="_texted" icon="arrow-right" size={30} />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="home-secondary">

            <div className="home-group _setting">

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">마이페이지</strong>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-setboard">
                      <div className="m-binds">
                        <div className="binds group _around">
                          <CommonButton label="템플릿테마 설정하기" className="_lined-secondary" icon="home-set-theme" size={70} />
                          <CommonButton label="실근무지 설정하기" className="_lined-secondary" icon="home-set-branch" size={70} />
                          <CommonButton label="알림수신 설정하기" className="_lined-secondary" icon="home-set-notification" size={70} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="home-group _watch">

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">기계경비당직 점검자</strong>
                    </div>
                  </div>
                  <div className="secondary">
                    <div className="d-dates">
                      <strong className="head">Today</strong>
                      <span className="data">2025-05-13</span>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <div className="d-watchboard">
                      <div className="filters">
                        <div className="o-field">
                          <div className="fields">
                            <div className="o-form _input">
                              <InputText placeholder="점검대상을 선택해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                              <i aria-hidden="true"></i>
                              <span className="inner-binds">
                                <ImageButton label="검색" icon="search" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="main">
                        <div className="d-watches">
                          <div className="header">
                            <div className="primary">
                              <div className="heading">
                                <strong className="label">어제의 점검자</strong>
                              </div>
                            </div>

                            <div className="secondary">
                              <div className="binds">
                                <CommonButton label="점검표등록" className="_normal" size={30} />
                              </div>
                            </div>
                          </div>

                          <div className="center">
                            <ul className="lists">
                              <li>
                                <strong className="head">점검자 1</strong>
                                <span className="data">홍길동 대리</span>
                              </li>
                              <li>
                                <strong className="head">점검자 2</strong>
                                <span className="data">임꺽정 차장</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="d-watches">
                          <div className="header">
                            <div className="primary">
                              <div className="heading">
                                <strong className="label">오늘의 점검자</strong>
                              </div>
                            </div>

                            <div className="secondary">
                              <div className="binds">
                                <CommonButton label="대직자등록" className="_normal" size={30} />
                              </div>
                            </div>
                          </div>

                          <div className="center">
                            <ul className="lists">
                              <li>
                                <strong className="head">점검자 1</strong>
                                <span className="data">홍길동 대리</span>
                              </li>
                              <li>
                                <strong className="head">점검자 2</strong>
                                <span className="data">임꺽정 차장</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="home-group _quick">

              <Tabs className="home-section m-tabs react-tabs" defaultIndex={0}>
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">빠른발송신청</strong>
                    </div>
                  </div>

                  <div className="secondary">
                    <div className="binds more">
                      <CommonButton label="더보기" className="_texted" icon="arrow-right" size={30} />
                    </div>
                  </div>
                </div>

                <div className="nav">
                  <div className="m-tab type1">
                    <TabList className="lists">
                      <Tab className="link"><span className="label">행내등기발송</span></Tab>
                      <Tab className="link"><span className="label">우편물발송</span></Tab>
                    </TabList>
                  </div>
                </div>

                <div className="center">
                  <TabPanel className="contain m-tabs-panel react-tabs__tab-panel">
                    <form className="m-data-form style-rawer">
                      <table className="table">
                        <colgroup>
                          <col className="head aut" style={{ '--em': 5 } as React.CSSProperties} />
                          <col className="data" />
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`인수자`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-70">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`실근무지`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-70">
                                    <XDropdown appendTo={'self'} className="bind" disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds type-tooltip">
                                    <Tooltip className="o-tooltip" target="#CMM000301M-tooltip-10" position="top">
                                      인수자가 설정한 근무지입니다.
                                    </Tooltip>
                                    <ImageButton id="CMM000301M-tooltip-10" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`인수부점`} require={true} />
                            </th>
                            <td colSpan={1}>
                                <div className="m-mixed-field">
                                  <div className="o-field">
                                    <div className="fields">
                                      <div className="o-form _input wdth-90">
                                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                        <i aria-hidden="true"></i>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="m-checks">
                                    <InputRadio name="RADIO_10" label="서무대리" />
                                    <InputRadio name="RADIO_10" label="보관카드담당자" />
                                  </div>

                                  <div className="binds">
                                    <CommonButton label="즐겨찾기" className="_normal" />
                                  </div>
                                </div>

                                <div className="m-footer">
                                  <p className="o-helper"><strong className="emph">도착예정일자: <span className="g-bold c-color-point">YYYY-MM-DD</span></strong> 신청일자에 실물을 발송한 경우에 한함</p>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`서류구분`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-80">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`수량`} require={true} />
                            </th>
                            <td colSpan={1}>
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
                              <Label label={`서류내용`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input basis-100pc">
                                    <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="o-form _select">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <CommonButton label="서류내용관리" className="_normal" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="m-footer">
                        <div className="binds m-binds">
                          <div className="group _center">
                            <CommonButton label="신청" className="_solid-primary" size={70} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </TabPanel>

                  <TabPanel className="contain m-tabs-panel react-tabs__tab-panel">
                    <div className="o-section">
                      <div className="m-header">
                        <h2 className="o-heading level2"><span className="label">신청정보</span></h2>

                        <div className="m-binds">
                          <div className="group">
                            <CommonButton label="우편번호검색" className="_normal" />
                          </div>

                          <div className="group">
                            <CommonButton label="행추가" className="_normal" />
                            <CommonButton label="행삭제" className="_normal" />
                            <CommonButton label="취소" className="_normal" />
                          </div>
                        </div>
                      </div>

                      <div className="main _primary rows-body-2i">
                        <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                        <div className="o-grid-table p-datatable">
                          <div className="table-container p-datatable-wrapper">
                            <table className="p-datatable-table p-datatable-scrollable-table">
                              <colgroup>
                                <col className="wdth-10" />
                                <col />
                                <col />
                                <col />
                                <col className="wdth-10" />
                                <col className="wdth-10" />
                                <col />
                              </colgroup>

                              <thead className="p-datatable-thead">
                                <tr>
                                  <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편물종류<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편물내용<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수신처구분</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대외수신처</span></div></th>
                                  <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수신자명<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                                </tr>
                              </thead>

                              <tbody className="p-datatable-tbody">
                                <tr className="p-datatable-emptymessage">
                                  <td colSpan={7}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                </tr>
                              </tbody>

                              <tbody className="p-datatable-tbody">
                                {[...Array(24)].map((e, idx) => (
                                  <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                    <td><InputCheck label="선택" labelHidden /></td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-spin wdth-30">
                                            <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                              decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
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
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-50">
                                            <XDropdown appendTo={document.body} className="bind" />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _select wdth-60">
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
                                            <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

                      <div className="m-footer">
                        <ul className="m-bullets type-disc">
                          <li>우편번호검색은 업무 편의를 위해 제공하는 서비스입니다.</li>
                        </ul>

                        <div className="binds m-binds">
                          <div className="group _center">
                            <CommonButton label="신청" className="_solid-primary" size={70} />
                          </div>
                        </div>
                      </div>

                    </div>
                  </TabPanel>
                </div>
              </Tabs>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CMM000301M;
