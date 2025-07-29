/**
  * @description 재난·안전관리 > 도급사업관리 > 순회점검표 등록 ~ (LP)순회점검표 등록
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

function STMSC0401P01() {
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
        header={<h3 className="o-heading"><span className="label">순회점검표 등록</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2">
                    <span className="label">상세정보</span>
                  </h4>

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
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`건물명`} require={true} />
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
                            <Label label={`점검일자`} require={true} />
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
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`점검자`} require={true} />
                          </th>
                          <td colSpan={3}>

                            <div className="m-binds">
                              <div className="group _start">
                                <CommonButton label="전체삭제" className="_normal" disabled />
                                <CommonButton label="추가" className="_normal" />
                              </div>
                            </div>

                            <div className="m-flex-list">

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
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

              <div className="m-sections case-survey">
                <div className="o-section">
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
                                  <fieldset className="o-survey" disabled>
                                    <div className="fields">
                                      <div className="term">
                                        <div className="question">
                                          <span className="order"><span className="count"></span></span>
                                          <span className="label">작업장 조명확보는 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">바닥은 미끄러지거나 넘어질 위험이 없습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">작업자의 보호구 착용은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">중량물 취급작업은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">출입구, 비상구 주변에 .물건을 두고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">위험기계기구의 방호장치는 안전하게 사용되고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">동력전달부 덮개 및 울 설치상태는 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">이동전선의 접지 및 전선피복은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">사다리 작업 시 2인 1조 작업을 준수하고 있습니까? 사다리는 손상이 없습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 종류는 무엇입니까?(복수선택 가능)</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputCheck label="고소작업" />
                                            <InputCheck label="밀폐공간출입작업" />
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
                                                <InputTextarea placeholder="예시) 본점 지하-저수조 청소" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
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
                                <span className="label">식당</span>
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
                                          <span className="label">작업장 조명확보는 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">바닥은 미끄러지거나 넘어질 위험이 없습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">작업자의 보호구 착용은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">중량물 취급작업은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">출입구, 비상구 주변에 물건을 두고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">배관 및 호스는 가스가 누출되지 않도록 연결·관리 상태가 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">환기시설은 정상적으로 작동하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">조리설비를 고정하는 핸들잠금장치는 정상적으로 설치되어 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                <span className="label">미화</span>
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
                                          <span className="label">작업장 조명확보는 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">바닥은 미끄러지거나 넘어질 위험이 없습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">작업자의 보호구 착용은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">중량물 취급작업은 양호합니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">출입구, 비상구 주변에 물건을 두고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">청소작업 전 바닥에 물기, 장애물 등을 제거하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">물기가 많은 장소에서 작업 시 미끄럼 방지용 장화 등을 지급하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">계단을 통행할 때는 뛰지 않고, 난간을 잡고 이동하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                <span className="label">경비</span>
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
                                          <span className="label">어두운 장소를 순찰할 경우 충분한 밝기의 손전등을 사용하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">계단 등을 이용할 때는 난간을 잡고 이동하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">야간 순찰 구간에 넘어짐, 부딪힘 등 위험요인은 없습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">업무시간 중 적절한 순환근무가 이루어지고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                                          <span className="label">작업과 휴식을 적절하게 배분하고 있습니까?</span>
                                        </div>

                                        <div className="answer">
                                          <div className="m-checks">
                                            <InputRadio name="RADIO:S_010" label="양호" />
                                            <InputRadio name="RADIO:S_010" label="불량" />
                                            <InputRadio name="RADIO:S_010" label="해당사항 없음" />
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
                          <InputTextarea placeholder="불량사항이 경미하거나 즉시 조치한 경우 내용을 기재해주세요&#13;점검결과 ‘해당없음’에 대한 내용 또는 별도 의견 필요 시 작성해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                          <i aria-hidden="true"></i>
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
              <span className="label">(P)순회점검표 등록 [wdth-40p(w770)]</span>
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

export default STMSC0401P01;
