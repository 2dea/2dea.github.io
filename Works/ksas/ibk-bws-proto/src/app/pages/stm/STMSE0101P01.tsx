/**
 * @description 재난·안전관리 > 안전점검의날점검표 > 점검표등록 ~ (LP)점검표등록
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

function STMSE0101P01() {
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
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">넘어짐</span>
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
                                          <span className="label">바닥의 각종 장애물·이물질 등에 의해 걸려 넘어지거나 미끄러질 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 전선, 울퉁불퉁한 표면, 턱, 건물 주변 지반 침하·균열, 물, 청소용 왁스, 눈 등</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">의자에서 앉거나 일어날 때 넘어질 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 의자 나사 불량, 불안정한 자세, 의자 주변의 미끄러운 바닥 등</li>
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
                                          <span className="label">시야 미확보로 인해 넘어지지 않도록 건물 내·외부 조명이 충분히 밝은 편입니까?</span>
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
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">건물 내·외부 계단의 넘어질 위험요소를 제거하였습니까?</span>
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
                                                (예시) 계단 논슬립 탈락, 계단 파손·손상 등

                                                <ul className="m-bullets type-hyphen">
                                                  <li>(참고) 계단 미끄럼 방지 안전 조치 : 계단 논슬립, 계단 끝단의 미끄럼 방지 홈, 미끄럽지 않은 계단 재질 등</li>
                                                </ul>
                                              </li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                <span className="label">맞음</span>
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
                                          <span className="label">건물 내·외부 벽체 및 기둥의 균열, 천장의 손상, 부착물의 고정 불량에 따른 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 균열, 콘크리트 조각·벽돌·타일 등이 떨어질 위험, 액자·TV·냉방 설비·조명 등의 불안전한 부착 상태</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">간판이 안전하고 튼튼하게 고정되어 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
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
                                          <span className="label">캐비닛 또는 책상 상단에 불안전하게 물건을 쌓아두지 않고, 적재된 물건을 뺄 때는 위에서부터 빼고 있습니까?</span>
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
                                <span className="label">떨어짐</span>
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
                                          <span className="label">옥상·베란다 등 건물 내 각종 난간이 추락 위험이 없도록 충분히 높습니까?</span>
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
                                              <li>(참고) 난간의 높이는 최소 90cm 이상이 안전</li>
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
                                          <span className="label">건물 내 창문에 설치되어 있는 추락방지용 보호 장치(안전봉, 안전봉 고리 등)가 튼튼하게 고정되어 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
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
                                          <span className="label">건물 내·외부 계단 측면의 안전 난간이 튼튼하게 고정되어 있습니까?</span>
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
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                <span className="label">절단·베임·찔림</span>
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
                                          <span className="label">유리로 인해 다칠 수 있는 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 출입문, 창문, 사무실 책상 유리 등 유리에 가해진 금 또는 파손</li>
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
                                          <span className="label">사무기기 또는 사무용품 사용 시 손이 다치지 않도록 안전하게 사용 및 보관하고 있습니까?</span>
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
                                              <li>(예시) 이동식 철제 금고, ATM 기기, 문서세단기, 칼, 가위 등</li>
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
                                <span className="label">감전</span>
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
                                          <span className="label">콘센트 및 멀티탭 주변에 화재 발생 위험 물질(물, 먼지)이 제거되어 있습니까?</span>
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
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">안전하지 않은 전선과 플러그, 콘센트는 교체하여 사용하고 있습니까?</span>
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
                                              <li>업무용 차량(전기자동차) 충전선 및 커넥터 점검 포함 (전선의 피복 손상, 심하게 구부러짐, 미접지 플러그 등)</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                <span className="label">화재</span>
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
                                          <span className="label">소화기 관리상태가 양호합니까?</span>
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
                                              <li>(예시) 분말소화기 내용연수 10년 이내, 외관 손상 여부 등</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">직원들이 화재 예방법, 화재 발생 시 행동요령을 숙지하고 있습니까?</span>
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
                                              <li>(예시) 비상대피로(비상문 근처, 복도, 계단 등)에 물건 적재 금지, 소화기 사용법 등</li>
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
                                          <span className="label">업무용 차량(전기자동차) 배터리량 충전 목표를 90% 이하로 설정하였습니까?</span>
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
                                              <li>차량 내 화면 : EV → 환경설정 → 충전 목표 배터리량 설정</li>
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
                                          <span className="label">각종 가스설비(가스밸브, 가스관 등)가 부식·손상 없이 안전하게 관리되고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="예" />
                                            <InputRadio name="RADIO:S_010" label="아니오" />
                                            <InputRadio name="RADIO:S_010" label="해당없음" />
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
                                <span className="label">불균형 및 무리한 동작</span>
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
                                          <span className="label">무거운 물건 운반 시 카트, 손수레 등 운반대차를 사용하고 있습니까?</span>
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
                                          <span className="label">반복적인 작업과 부자연스러운 자세 등에 의한 근골격계질환 예방을 위해 노력하고 있습니까?</span>
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
                                              <li>(예시) 올바른 자세로 업무, 업무 틈틈이 스트레칭 등</li>
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
                                <span className="label">끼임</span>
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
                                          <span className="label">문·창문·캐비닛·서랍장을 열고 닫을 때 손이 끼이지 않도록 주의하고 있습니까?</span>
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
                                          <span className="label">사무기계 이용 시 머리카락, 옷자락, 스카프 등이 말려들어가지 않도록 주의하고 있습니까?</span>
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
                                              <li>(예시) 지폐계수기, 문서세단기, 수표압인자기 등</li>
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
                                          <span className="label">각종 기계에 안전장치 또는 덮개가 제대로 설치 및 작동되고 있습니까?</span>
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
                                              <li>(예시) 문서세단기 작동 중 파지함을 열면 작동 정지하는지 확인, 발전기 회전체·손이 닿는 환풍기 덮개 설치 여부 확인 등</li>
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
                      <span className="label">기타점검사항</span>
                    </h5>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">최근 한 달 간 부점 내 다음과 같은 경우가 있었습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="재해 발생" />
                                  <InputRadio name="RADIO:S_010" label="아차사고 발생" />
                                  <InputRadio name="RADIO:S_010" label="새로운 장비 도입" />
                                  <InputRadio name="RADIO:S_010" label="해당없음" />
                                </div>
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
                                          <span className="label">‘재해’ 또는 ‘아차사고’는 사고일시, 사고장소, 사고개요 등 내용을 입력해주세요. <br />‘새로운 장비 도입’ 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="‘재해’ 또는 ‘아차사고’는 사고일시, 사고장소, 사고개요 등 내용을 입력해주세요 &#13;‘새로운 장비 도입’ 내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                <i aria-hidden="true"></i>
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
                                          <span className="label">(한 달 내 ‘재해발생’이 있었다면) 동종 재해가 발생하지 않도록 재해 발생 원인이 되는 위험요인을 제거하였습니까?</span>
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
                                          <span className="label">(한 달 내 ‘아차사고 발생’이 있었다면) 동종 사고가 발생하지 않도록 사고 발생 원인이 되는 위험요인을 제거하였습니까?</span>
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
                                          <span className="label">(한 달 내 ‘새로운 장비 도입’이 있었다면) 새로운 장비 도입에 따른 사고 발생이 우려되는 경우 위험 요인을 사전에 인지하고 이를 제거하였습니까?</span>
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
                                <span className="label">부점 내 안전교육을 실시하고 있습니까?</span>
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
                                          <span className="label">부점별 안전교육 실시 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="(예시) 2025.2.7 (금) 직원 회의 시 IBK안전리포트를 통해 근골격계질환 예방법 숙지" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
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
                                              <li>참고자료 : IBK안전리포트, 안전보건영상 등</li>
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
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">넘어짐</span>
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
                                          <span className="label">바닥의 각종 장애물·이물질 등에 의해 걸려 넘어지거나 미끄러질 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 전선, 울퉁불퉁한 표면, 턱, 건물 주변 지반 침하·균열, 물, 청소용 왁스, 눈 등</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">의자에서 앉거나 일어날 때 넘어질 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 의자 나사 불량, 불안정한 자세, 의자 주변의 미끄러운 바닥 등</li>
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
                                          <span className="label">시야 미확보로 인해 넘어지지 않도록 건물 내·외부 조명이 충분히 밝은 편입니까?</span>
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
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                <span className="label">맞음</span>
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
                                          <span className="label">건물 내·외부 벽체 및 기둥의 균열, 천장의 손상, 부착물의 고정 불량에 따른 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 균열, 콘크리트 조각·벽돌·타일 등이 떨어질 위험, 액자·TV·냉방 설비·조명 등의 불안전한 부착 상태</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">캐비닛 또는 책상 상단에 불안전하게 물건을 쌓아두지 않고, 적재된 물건을 뺄 때는 위에서부터 빼고 있습니까?</span>
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
                                <span className="label">절단·베임·찔림</span>
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
                                          <span className="label">유리로 인해 다칠 수 있는 위험요소를 제거하였습니까?</span>
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
                                              <li>(예시) 출입문, 창문, 사무실 책상 유리 등 유리에 가해진 금 또는 파손</li>
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
                                          <span className="label">사무기기 또는 사무용품 사용 시 손이 다치지 않도록 안전하게 사용 및 보관하고 있습니까?</span>
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
                                              <li>(예시) 이동식 철제 금고, ATM 기기, 문서세단기, 칼, 가위 등</li>
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
                                <span className="label">감전</span>
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
                                          <span className="label">콘센트 및 멀티탭 주변에 화재 발생 위험 물질(물, 먼지)이 제거되어 있습니까?</span>
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
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                          <span className="label">안전하지 않은 전선과 플러그, 콘센트는 교체하여 사용하고 있습니까?</span>
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
                                              <li>업무용 차량(전기자동차) 충전선 및 커넥터 점검 포함 (전선의 피복 손상, 심하게 구부러짐, 미접지 플러그 등)</li>
                                              <li>단독 자가건물은 사무실 및 건물 전체 점검</li>
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
                                <span className="label">화재</span>
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
                                          <span className="label">직원들이 화재 예방법, 화재 발생 시 행동요령을 숙지하고 있습니까?</span>
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
                                              <li>(예시) 비상대피로(비상문 근처, 복도, 계단 등)에 물건 적재 금지, 소화기 사용법 등</li>
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
                                          <span className="label">업무용 차량(전기자동차) 배터리량 충전 목표를 90% 이하로 설정하였습니까?</span>
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
                                              <li>차량 내 화면 : EV → 환경설정 → 충전 목표 배터리량 설정</li>
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
                                <span className="label">불균형 및 무리한 동작</span>
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
                                          <span className="label">무거운 물건 운반 시 카트, 손수레 등 운반대차를 사용하고 있습니까?</span>
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
                                          <span className="label">반복적인 작업과 부자연스러운 자세 등에 의한 근골격계질환 예방을 위해 노력하고 있습니까?</span>
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
                                              <li>(예시) 올바른 자세로 업무, 업무 틈틈이 스트레칭 등</li>
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
                                <span className="label">끼임</span>
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
                                          <span className="label">문·창문·캐비닛·서랍장을 열고 닫을 때 손이 끼이지 않도록 주의하고 있습니까?</span>
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
                                          <span className="label">사무기계 이용 시 머리카락, 옷자락, 스카프 등이 말려들어가지 않도록 주의하고 있습니까?</span>
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
                                              <li>(예시) 지폐계수기, 문서세단기, 수표압인자기 등</li>
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
                                          <span className="label">각종 기계에 안전장치 또는 덮개가 제대로 설치 및 작동되고 있습니까?</span>
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
                                              <li>(예시) 문서세단기 작동 중 파지함을 열면 작동 정지하는지 확인, 발전기 회전체·손이 닿는 환풍기 덮개 설치 여부 확인 등</li>
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
                      <span className="label">기타점검사항</span>
                    </h5>
                  </div>

                  <div className="main">
                    <div className="m-survey-form">
                      <ol>
                        <li>
                          <div className="m-survey">
                            <div className="header">
                              <div className="subject">
                                <span className="order"><span className="count"></span></span>
                                <span className="label">최근 한 달 간 부점 내 다음과 같은 경우가 있었습니까?</span>
                              </div>
                              <div className="binds">
                                <div className="m-checks">
                                  <InputRadio name="RADIO:S_010" label="재해 발생" />
                                  <InputRadio name="RADIO:S_010" label="아차사고 발생" />
                                  <InputRadio name="RADIO:S_010" label="새로운 장비 도입" />
                                  <InputRadio name="RADIO:S_010" label="해당없음" />
                                </div>
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
                                          <span className="label">‘재해’ 또는 ‘아차사고’는 사고일시, 사고장소, 사고개요 등 내용을 입력해주세요. <br />‘새로운 장비 도입’ 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="‘재해’ 또는 ‘아차사고’는 사고일시, 사고장소, 사고개요 등 내용을 입력해주세요 &#13;‘새로운 장비 도입’ 내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                                <i aria-hidden="true"></i>
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
                                          <span className="label">(한 달 내 ‘재해발생’이 있었다면) 동종 재해가 발생하지 않도록 재해 발생 원인이 되는 위험요인을 제거하였습니까?</span>
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
                                          <span className="label">(한 달 내 ‘아차사고 발생’이 있었다면) 동종 사고가 발생하지 않도록 사고 발생 원인이 되는 위험요인을 제거하였습니까?</span>
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
                                          <span className="label">(한 달 내 ‘새로운 장비 도입’이 있었다면) 새로운 장비 도입에 따른 사고 발생이 우려되는 경우 위험 요인을 사전에 인지하고 이를 제거하였습니까?</span>
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
                                <span className="label">부점 내 안전교육을 실시하고 있습니까?</span>
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
                                          <span className="label">부점별 안전교육 실시 내용을 입력해주세요.</span>
                                        </div>

                                        <div className="answer">
                                          <div className="o-field">
                                            <div className="fields">
                                              <div className="o-form _input">
                                                <InputTextarea placeholder="(예시) 2025.2.7 (금) 직원 회의 시 IBK안전리포트를 통해 근골격계질환 예방법 숙지" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
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
                                              <li>참고자료 : IBK안전리포트, 안전보건영상 등</li>
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

export default STMSE0101P01;
