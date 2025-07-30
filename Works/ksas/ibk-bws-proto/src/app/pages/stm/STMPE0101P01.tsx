/**
 * @description 재난·안전관리 > 보안진단의날점검표 > 점검표등록 ~ (LP)점검표등록
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

function STMPE0101P01() {
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

  return (
    <>
      <Dialog
        className="layer-wrap wdth-40p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">점검표등록</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              {/* 본부 외(영업점/지역본부) */}
              <div className="m-sections case-survey">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">등록기한 안내</span></strong>
                    </div>

                    <dl className="m-bullets type-disc">
                      <dt className="c-color-strong">등록기한 : 2025-04-01 ~ 2025-04-10</dt>
                      <dd>등록기한 내 점검표 등록을 완료해주세요.</dd>
                      <dd>기한 내 등록이 어려운 경우, 담당부서로 사전에 문의 부탁드립니다. (안전기획팀 0000)</dd>
                    </dl>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <div className="o-helper">
                      <em className="label">점검대상기간 : 전월 1일 ~ 말일</em>
                    </div>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">일반보안(인원, 문서, 시설 등) 문의전화 : 비상계획팀 7463, 3484</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">제한구역 관리</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">부점의 제한 구역 현황을 파악하고 이상 여부를 점검하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>영업점 : 금고, 대여금고(이 외 제한구역 없음)</li>
                                              <li>기타 : 업무지원센터 내 금고, 통신실, 방재센터 등</li>
                                              <li>출입 보안장비 정상작동 확인(CCTV 등)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">제한구역 표지판을 부착하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>미부착 부점 표지판 신청(업무지원시스템 &rarr; 중요용지 &rarr; 용도품신청 &rarr; 출급번호 : 00365)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">제한구역 출입인가 품의 후 비치·기록하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li><a href="javascript:" className="o-link _normal">양식 바로가기</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">금고 열쇠 관리(<a href="javascript:" className="o-link _normal">FAQ 바로가기</a>)</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">사용열쇠 보관담당자를 최산화하여 등록하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>현금금고 속문 : 모출납</li>
                                              <li>현금금고 겉문 : 출납담당책임자</li>
                                              <li>금고당번책임자 열쇠 인계인수(최대 2주 이내)</li>
                                            </ul>

                                            <ul className="m-bullets type-asterisk">
                                              <li>대상열쇠(5종) : 금고실 겉문/속문 열쇠, 비상문(맨홀) 겉문/속문 열쇠, 금고실 세팅카드</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">우리 부점 예비열쇠가 적절하게 보관되어있는지 확인하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="타지점 위탁" />
                                            <InputRadio name="RADIO:S_010" label="부점 내 보관" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-asterisk">
                                              <li>대상열쇠(6종) : 금고실 겉문/속문 열쇠, 비상문(맨홀) 겉문/속문 열쇠, 현금금고 겉문/속문 열쇠</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">타지점에 위탁한 예비열쇠 확인정보를 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <Label label={`예비열쇠 보관 부점`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <Label label={`정상 보관 확인날짜`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input type-date wdth-50">
                                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>예비열쇠 보관확인(업무지원시스템 &rarr; 열쇠관리 &rarr; 예비열쇠 보관확인증)(<a href="javascript:" className="o-link _normal">내용 바로가기</a>)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">기계경비관리</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비상벨이 적절하게 부착되어 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>부착장소 : 창구, 영업점장실, PB ROOM, 출납담당자석, 경비원석 등 (무선 비상벨 2개 포함)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비상벨 정상 작동 상태 점검을 하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                점검방법 : 점검 전 기계경비회사와 통화하여 점검 상황을 인지시키고, 비상벨을 눌러 신호가 정상적으로 작동하는지 점검

                                                <ul className="m-bullets type-hyphen">
                                                  <li>월 1회 이상 점검 실시, 고장 및 분실 시 안전관리팀 통지</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">기계경비 세트 정상 작동 여부를 점검하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>점검방법 : 사용카드 외 예비카드로 세트 후 기계경비회사에 유선 확인(출입문, 금고실, 365코너, 대여금고)</li>
                                              <li>분실 및 훼손 시 : 「출입문 및 금고 세팅카드 재발급 요청서」작성</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">경비원 적정 운용</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">경비원의 업무 수행범위는 적정합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>참고 : 경비원은 경비업무 외 업무를 수행할 수 없음. [영업점 경비원 운용 관련 FAQ 안내(’24.3.18)](<a href="javascript:" className="o-link _normal">바로가기</a>)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">「도급경비원 부당업무 요청 근절」 스티커를 부착하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>참고 : 「도급경비원 부당업무 요청 근절」 스티커 배부 안내(’20.12.11)(<a href="javascript:" className="o-link _normal">바로가기</a>)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">부서별 자율 보안활동</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비상연락망을 최신화하여 유지하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">월별 보안교육을 실시 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                <i aria-hidden="true"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>시행문 첨부파일 참고하여 작성</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">월별 중점 점검사항을 점검하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">보안점검결과 발견한 보안취약사항 및 개선사항을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                <i aria-hidden="true"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h5 className="o-heading level3">
                      <span className="label">IT보안</span>
                    </h5>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">IT보안 문의전화 : 정보보호총괄부 3889, 5475</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">PC(보조기억매체 포함) 보안 및 비밀번호 관리</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">PC(보조기억매체 포함) 보안 및 비밀번호 관리를 진행하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ol className="m-bullets type-decimal">
                                              <li>CMOS, SSO로그인 비밀번호의 별도 설정 여부

                                                <ul className="m-bullets type-hyphen">
                                                  <li>지정맥 인증 사용 시 CMOS 비밀번호 제외 가능</li>
                                                </ul>
                                              </li>
                                              <li>SSO로그인 비밀번호의 분기별 변경 여부</li>
                                              <li>유추하기 어려운 비밀번호 설정 여부(직원번호, 전화번호, 생년월일 불가)</li>
                                              <li>자리 이석 시 PC 화면보호기 실행 여부([윈도우키+L] 입력)</li>
                                              <li>PC내 보관중인 고객정보의 사용종료 후 즉시 삭제 여부</li>
                                              <li>USB 메모리 방치 여부</li>
                                            </ol>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">해킹 등 보안사고 예방</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">해킹 등 보안사고에 대한 예방을 진행하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ol className="m-bullets type-decimal">
                                              <li>IBK웹메일은 업무 외 사용금지 준수 여부(타사이트 가입 시 활용 등)</li>
                                              <li>출처가 불분명한 메일은 열람금지 준수 여부</li>
                                            </ol>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h5 className="o-heading level3">
                      <span className="label">첨부파일</span>
                    </h5>

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

                  <div className="main rows-body-2i">
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
              </div>

              {/* 본부 */}
              <div className="m-sections case-survey">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">등록기한 안내</span></strong>
                    </div>

                    <dl className="m-bullets type-disc">
                      <dt className="c-color-strong">등록기한 : 2025-04-01 ~ 2025-04-10</dt>
                      <dd>등록기한 내 점검표 등록을 완료해주세요.</dd>
                      <dd>기한 내 등록이 어려운 경우, 담당부서로 사전에 문의 부탁드립니다. (안전기획팀 0000)</dd>
                    </dl>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <div className="o-helper">
                      <em className="label">점검대상기간 : 전월 1일 ~ 말일</em>
                    </div>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">일반보안(인원, 문서, 시설 등) 문의전화 : 비상계획팀 7463, 3484</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">인사이동 등 보안담당자 변동이 있습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">부서장 변동이 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                부서장 변경 시 조치사항

                                                <ul className="m-bullets type-hyphen">
                                                  <li>분임보안담당관 인계인수서 작성</li>
                                                  <li>비밀·대외비관리기록부에 인계인수 내용기재 및 서명</li>
                                                  <li>(비밀보유 부서) 비밀열람기록전에 인수 서명</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">보안 팀원 변동이 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                보안팀원 변경 시 조치사항

                                                <ul className="m-bullets type-hyphen">
                                                  <li>보안관련 서류 인계인수</li>
                                                  <li>(비밀보유 부서) 비밀열람기록전에 인수 서명</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">비밀취급인가 부서입니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">부서의 비밀취급인가자는 몇 명입니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <Label label={`인원`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input wdth-50 g-end">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                                <span className="units">명</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>인사인동 등으로 비밀취급인가자가 바뀔 경우 비밀취급인가 신청 필요(조정필요시)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">인사이동에 따른 비밀취급인가자 변경이 있을 경우 변경 조치를 하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">비밀 또는 대외비를 보유하고 있습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비밀 또는 대외비의 개수를 입력해주세요.(점검일이 속한 월의 전월 말일 기준)</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <Label label={`2급`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input wdth-50 g-end">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                                <span className="units">개</span>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <Label label={`3급`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input wdth-50 g-end">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                                <span className="units">개</span>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <Label label={`대외비`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input wdth-50 g-end">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                                <span className="units">개</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>(예시) 비밀등급 2급 - 4개</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비밀 또는 대외비를 규정에 맞게 보관하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                비밀 : 비상계획팀 비밀합동보관소에 보관

                                                <ul className="m-bullets type-hyphen">
                                                  <li>단, 한남동고객센터, IT(데이터)센터에 사무실이 있는 비밀취급인가 부서의 경우 해당 부서 내 별도의 비밀보관용기에 보관</li>
                                                </ul>
                                              </li>
                                              <li>
                                                대외비 : 부서 내 별도의 비밀보관용기에 보관

                                                <ul className="m-bullets type-hyphen">
                                                  <li>대외비의 형태가 파일인 경우 업무용 PC(1대)에 독립된 폴더를 지정, 비밀번호를 설정·보관</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">재분류 비밀이 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                비밀·대외비 재분류 검토

                                                <ul className="m-bullets type-hyphen">
                                                  <li>접수 또는 생산된지 10년 이상 비밀/대외비의 재분류검토 실시 여부</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">외부직원을 관리하고 있습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">외부직원 현황을 알려주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <div className="fields">
                                                <div className="o-form _input is-file mode-required">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                  <span className="inner-binds">
                                                    <ImageButton label="초기화" icon="remove" />
                                                  </span>
                                                </div>
                                                <div className="binds">
                                                  <input type="file" className="overlay" />
                                                  <CommonButton label="파일선택" className="_normal" />
                                                </div>
                                                <div className="binds">
                                                  <CommonButton label="파일다운" className="_normal" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                외부직원 출입자 현황(<a href="javascript:" className="o-link _normal">바로가기</a>) 작성하여 본 점검표에 "붙임"으로 첨부

                                                <ul className="m-bullets type-hyphen">
                                                  <li>외부직원 : 당행 출입증을 발급받은 외부 인원(단, IBK시스템, IBK서비스 소속 직원은 작성 제외)</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">퇴직 외부직원의 출입증은 잘 회수하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">보호지역을 관리하고 있습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">보호지역 현황을 알려주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <div className="fields">
                                                <div className="o-form _input">
                                                  <InputTextarea placeholder="건물 / 층 / 이름" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <div className="fields">
                                                <div className="o-form _input is-file mode-required">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                  <span className="inner-binds">
                                                    <ImageButton label="초기화" icon="remove" />
                                                  </span>
                                                </div>
                                                <div className="binds">
                                                  <input type="file" className="overlay" />
                                                  <CommonButton label="파일선택" className="_normal" />
                                                </div>
                                                <div className="binds">
                                                  <CommonButton label="파일다운" className="_normal" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">보호지역을 규정에 따라 관리하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>통제/제한구역 표지판 부착</li>
                                              <li>출입인가 품의서 작성</li>
                                              <li>출입대장 작성 및 입구 비치 기록</li>
                                              <li>출입보안장비 정상작동 확인(CCTV 등)</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">부서별 자율 보안활동을 실시하였습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">일일보안점검을 실시하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>일일보안점검자명령부 사전 명령 및 서명, 실시결과 기재</li>
                                              <li><a href="javascript:" className="o-link _normal">양식 바로가기</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">비상연락망을 최신화하여 유지하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">외부인이 방문할 경우 당행 직원이 직접 안내데스크에 내려가 인솔하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">월별 보안교육을 실시하였습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-survey-field">
                                            <div className="o-field">
                                              <Label label={`일자`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input type-date wdth-50">
                                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <Label label={`직원명`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input wdth-50">
                                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="o-field">
                                              <Label label={`비고`} require={false} />
                                              <div className="fields">
                                                <div className="o-form _input">
                                                  <InputTextarea placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                  <i aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>시행문 첨부파일 참고하여 작성</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">월별 중점 점검사항을 점검하였습니까</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="예" />
                                  <InputRadio name="RADIO:S_010" label="아니오" />
                                </div>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">공통 중점 점검사항을 확인하고 점검한 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="점검내용" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                <i aria-hidden="true"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>시행문 첨부파일 참고하여 작성</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>

                                <li>
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">부점별 특성에 맞는 보안점검을 실시하고 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="(예시) &#13;1. 인사부 : 비밀취급인가 관련 서류철 정비 &#13;2. 정보보호총괄부 : 외주용역 보안정책 점검 &#13;3. 투자금융부 : 투자관련 내부검토자료 보관 정비 &#13;4. 기업고객부 : 중소기업 현장 간담회 참석자 고객정보 유출 방지를 위한 점검 &#13;5. 내부통제총괄부 : 책무구조도 시스템 사업 외주직원에 대한 출입증 관리 및 보안교육 강화" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={8} cols={80} />
                                                <i aria-hidden="true"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>부서별 보안업무세부추진계획 수립 시 작성한 중점추진사항 위주로 점검 및 작성</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h5 className="o-heading level3">
                      <span className="label">IT보안</span>
                    </h5>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">IT보안 문의전화 : 정보보호총괄부 3889, 5475</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">IT외주직원 보안통제</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">IT외주용역 보안통제 가이드를 준수하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ul className="m-bullets type-disc">
                                              <li>
                                                신규 투입 시

                                                <ol className="m-bullets type-decimal">
                                                  <li>서약서, 보안서약서, 개인정보수집이용동의서 징구</li>
                                                  <li>보안교육 실시 및 결과보고</li>
                                                </ol>
                                              </li>
                                              <li>
                                                철수 시

                                                <ul className="m-bullets type-hyphen">
                                                  <li>계정 등 권한 회수 신청</li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">PC(보조기억매체 포함) 보안 및 비밀번호 관리</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">PC(보조기억매체 포함) 보안 및 비밀번호 관리를 진행하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ol className="m-bullets type-decimal">
                                              <li>CMOS, SSO로그인 비밀번호의 별도 설정 여부

                                                <ul className="m-bullets type-hyphen">
                                                  <li>지정맥 인증 사용 시 CMOS 비밀번호 제외 가능</li>
                                                </ul>
                                              </li>
                                              <li>SSO로그인 비밀번호의 분기별 변경 여부</li>
                                              <li>유추하기 어려운 비밀번호 설정 여부(직원번호, 전화번호, 생년월일 불가)</li>
                                              <li>자리 이석 시 PC 화면보호기 실행 여부([윈도우키+L] 입력)</li>
                                              <li>PC내 보관중인 고객정보의 사용종료 후 즉시 삭제 여부</li>
                                              <li>USB 메모리 방치 여부</li>
                                            </ol>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">해킹 등 보안사고 예방</span>
                              </div>
                            </div>
                            <div className="bodies">
                              <ol>
                                <li>
                                  <fieldset className="o-survey">
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">해킹 등 보안사고에 대한 예방을 진행하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="desc">
                                        <div className="o-board type-b">
                                          <div className="board-container">
                                            <ol className="m-bullets type-decimal">
                                              <li>IBK웹메일은 업무 외 사용금지 준수 여부(타사이트 가입 시 활용 등)</li>
                                              <li>출처가 불분명한 메일은 열람금지 준수 여부</li>
                                            </ol>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="취소" className="_cancel" />
              <CommonButton label="결재요청" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)점검표등록 [wdth-40p(w770)]</span>
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

export default STMPE0101P01;
