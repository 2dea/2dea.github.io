/**
 * @description TEST > (M)공통 점검표
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

function SurveyForms() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

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
      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(M)공통 점검표</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              ...

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">점검표 예시</span></h3>
                </div>

                <div className="main">
                  <div className="m-survey-form">
                    <ol>
                      <li>
                        <div className="m-survey">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">시설관리</span>
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
                                <fieldset className="o-survey">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-checks">
                                          <InputRadio name="RADIO:S_010" label="양호" />
                                          <InputRadio name="RADIO:S_010" label="불량" />
                                          <InputRadio name="RADIO:S_010" label="해당사항 없음" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-b">
                                        <div className="board-container">
                                          <ul className="m-bullets type-disc">
                                            <li>설명설명설명</li>
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
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-checks">
                                          <InputRadio name="RADIO:S_010" label="양호" />
                                          <InputRadio name="RADIO:S_010" label="불량" />
                                          <InputRadio name="RADIO:S_010" label="해당사항 없음" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-b">
                                        <div className="board-container">
                                          <ul className="m-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="caption">
                                    <strong className="c-color-strong">안전작업허가제 대상작업(고소작업, 밀폐공간출입작업) 착수 여부 사전공유</strong>
                                  </div>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 안전작업허가제 대상작업 실시 예정이 있습니까?</span>
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
                                            <li>고소작업 : 외벽 청소, 외벽 현수막 설치, 선큰 조형물 청소 등</li>
                                            <li>밀폐공간출입작업 : 저수조 청소, 정화조 청소, 집수정 청소, 물탱크 청소 등</li>
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
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시장소 및 작업명을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _input">
                                              <InputTextarea placeholder="(예시) 본점 지하-저수조 청소" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
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
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시일정을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="o-field">
                                          <div className="fields">
                                            <div className="o-form _input type-date wdth-50">
                                              <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                              <i aria-hidden="true"></i>
                                            </div>
                                            <span className="seps type-tilde">~</span>
                                            <div className="o-form _input type-date wdth-50">
                                              <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
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

                      <li>
                        <div className="m-survey">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목</span>
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
                                <fieldset className="o-survey">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-checks">
                                          <InputRadio name="RADIO:S_010" label="양호" />
                                          <InputRadio name="RADIO:S_010" label="불량" />
                                          <InputRadio name="RADIO:S_010" label="해당사항 없음" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-b">
                                        <div className="board-container">
                                          <ul className="m-bullets type-disc">
                                            <li>설명설명설명</li>
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
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-checks">
                                          <InputRadio name="RADIO:S_010" label="양호" />
                                          <InputRadio name="RADIO:S_010" label="불량" />
                                          <InputRadio name="RADIO:S_010" label="해당사항 없음" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-b">
                                        <div className="board-container">
                                          <ul className="m-bullets type-disc">
                                            <li>설명설명설명</li>
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
                              <span className="label">기타유형</span>
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
                                        <span className="label">외부직원 현황을 알려주세요.</span>
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
                    <span className="label">기타사항</span>
                  </h5>
                </div>

                <div className="main">
                  <div className="o-field">
                    <div className="fields">
                      <div className="o-form _input">
                        <InputTextarea placeholder="불량사항이 경미하거나 즉시 조치한 경우 내용을 기재해주세요 &#13;점검결과 ‘해당없음’에 대한 내용 또는 별도 의견 필요 시 작성해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong">
                      즉시 조치가 어려운 불량사항이 있는 경우

                      <ul className="m-bullets type-hyphen">
                        <li className="c-color-strong">별도로 ‘도급사업 순회·합동점검 결과표’를 작성하여 부서장 보고</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="m-aside">
                  <div className="o-board type-c">
                    <div className="o-notice">
                      <div className="main">도급인 점검자와 수급인 점검자가 서명한 ‘합동점검 실시 기록부’를 스캔하고 첨부하여 결재 진행 바랍니다.</div>

                      <div className="binds">
                        <div className="m-checks">
                          <InputCheck label="확인함" />
                        </div>
                      </div>
                    </div>
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

            </SplitterPanel>
          </Splitter>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default SurveyForms;
