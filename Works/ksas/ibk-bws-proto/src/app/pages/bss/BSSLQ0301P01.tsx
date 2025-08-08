/**
 * @description 영업지원 > 대량신규 > 대량신규현황 ~ (LP)대량신규현황
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

function BSSLQ0301P01() {
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
        className="layer-wrap wdth-25p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={false}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">3월 11일 대량신규현황</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="main">
                  <div className="m-schedule">
                    <ul className="o-schedule type-normal">
                      <li>
                        <div className="main">
                          <div className="tags">
                            <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                            <span className="category">
                              <em className="chip"><span className="label">승인좌수 : <span className="value">100</span>건</span></em>
                            </span>
                          </div>
                          <div className="subject">
                            <span className="label">[부산] 대량신규신청</span>
                          </div>
                        </div>

                        <div className="summary o-details">
                          <ul className="o-tabular">
                            {/* <li className="colgroup">
                              <span className="col head"></span>
                              <span className="col data"></span>
                            </li> */}

                            <li>
                              <div className="head">
                                부점
                              </div>

                              <div className="data">
                                [00000] 부산
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                승인일자
                              </div>

                              <div className="data">
                                2025-03-11
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                작업기간(시작)
                              </div>

                              <div className="data">
                                2025-03-12
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                작업기간(종료)
                              </div>

                              <div className="data">
                                2025-03-13
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                영업점수령예정일자
                              </div>

                              <div className="data">
                                2025-03-14
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <div className="main">
                          <div className="tags">
                            <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(신청)</span></em>
                            <span className="category">
                              <em className="chip"><span className="label">신청좌수 : <span className="value">100</span>건</span></em>
                            </span>
                          </div>
                          <div className="subject">
                            <span className="label">Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat.</span>
                          </div>
                        </div>

                        <div className="summary o-details">
                          <ul className="o-tabular">
                            {/* <li className="colgroup">
                              <span className="col head"></span>
                              <span className="col data"></span>
                            </li> */}

                            {/* <li>
                              <div className="head">
                                부점
                              </div>

                              <div className="data">
                                [00000] 부산
                              </div>
                            </li> */}

                            <li>
                              <div className="head">
                                영업점서류발송일자
                              </div>

                              <div className="data">
                                2025-03-11
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                영업점수령희망일자
                              </div>

                              <div className="data">
                                2025-03-12
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <div className="main">
                          <div className="tags">
                            <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(승인)</span></em>
                            <span className="category">
                              <em className="chip"><span className="label">승인좌수 : <span className="value">100</span>건</span></em>
                            </span>
                          </div>
                          <div className="subject">
                            <span className="label">대량신규신청</span>
                          </div>
                        </div>

                        <div className="summary o-details">
                          <ul className="o-tabular">
                            {/* <li className="colgroup">
                              <span className="col head"></span>
                              <span className="col data"></span>
                            </li> */}

                            {/* <li>
                              <div className="head">
                                부점
                              </div>

                              <div className="data">
                                [00000] 부산
                              </div>
                            </li> */}

                            <li>
                              <div className="head">
                                승인일자
                              </div>

                              <div className="data">
                                2025-03-11
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                작업기간(시작)
                              </div>

                              <div className="data">
                                2025-03-12
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                작업기간(종료)
                              </div>

                              <div className="data">
                                2025-03-13
                              </div>
                            </li>

                            <li>
                              <div className="head">
                                영업점수령예정일자
                              </div>

                              <div className="data">
                                2025-03-14
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)대량신규현황 [wdth-25p(w480)]</span>
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

export default BSSLQ0301P01;
