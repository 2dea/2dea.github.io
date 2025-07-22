/**
  * @description 재난·안전관리 > 도급사업관리 > 도급계약 현황 등록 ~ (LP)도급사업체크리스트
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

function STMSC0101P01() {
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
        modal={false}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">도급사업체크리스트</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">제출 비대상 도급계약 체크리스트</span></h4>

                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '5%' }} />
                          <col style={{ width: 'auto' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>구분</th>
                            <th colSpan={2}>체크 항목</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th colSpan={1}>1</th>
                            <td colSpan={2} className="g-start">
                              문서 시행일을 기준으로 사업이 종료된 계약
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>2</th>
                            <td rowSpan={5} colSpan={1}>
                              발주계약
                            </td>
                            <td colSpan={1} className="g-start">
                              「건설산업기본법」에 따른 건설공사
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>3</th>
                            <td colSpan={1} className="g-start">
                              「전기공사업법」에 따른 전기공사
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>4</th>
                            <td colSpan={1} className="g-start">
                              「정보통신공사업법」에 따른 정보통신공사
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>5</th>
                            <td colSpan={1}  className="g-start">
                              「소방시설공사사업법」에 따른 소방시설공사
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>6</th>
                            <td colSpan={1}  className="g-start">
                              「국가유산수리 등에 관한 법률」에 따른 국가유산 수리공사
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>7</th>
                            <td colSpan={2} className="g-start">
                              물품구매, 납품 계약
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>8</th>
                            <td colSpan={2} className="g-start">
                              컨설팅, 행사, 교육, 공연, 안전검사, 안전진단 계약
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>9</th>
                            <td colSpan={2} className="g-start">
                              {/* 당행 사업장(영업점 포함)에서 수급인의 근로자가 업무를 수행하지 않는 계약

                              <ul className="m-bullets type-disc">
                                <li>프로그램 개발 용역 시
                                  <ul className="m-bullets type-hyphen">
                                    <li>수급인 사업장에서 근로자가 작업 <strong className="string">▶ 제출 비대상</strong></li>
                                    <li>도급인(당행)의 사업장에서 작업 <strong className="string">▶ 제출 대상</strong></li>
                                  </ul>
                                </li>
                              </ul> */}

                              <dl className="m-bullets type-disc gap-50">
                                <dt>당행 사업장(영업점 포함)에서 수급인의 근로자가 업무를 수행하지 않는 계약</dt>

                                <dd>프로그램 개발 용역 시 <strong>수급인 사업장에서 근로자가 작업</strong> <em className="o-chip var-lined-00 size-30"><span className="label">제출 비대상</span></em></dd>
                                <dd>프로그램 개발 용역 시 <strong>도급인(당행)의 사업장에서 작업</strong> <em className="o-chip var-lined-01 size-30"><span className="label">제출 대상</span></em></dd>
                              </dl>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>10</th>
                            <td colSpan={2} className="g-start">
                              {/* 당행 사업장(영업점 포함)에서 수급인의 근로자가 연속적으로 업무를 수행하나, <em className="g-bold">1개월</em>을 초과하지 않고 종료되는 <em className="g-bold">일시적 작업</em>의 계약
                              <ul className="m-bullets type-disc">
                                <li>사업장 내 소득 작업을 위해
                                  <ul className="m-bullets type-hyphen">
                                    <li>15일간 작업 <strong className="string">▶ 제출 비대상</strong></li>
                                    <li>40일간 작업 <strong className="string">▶ 제출 대상</strong></li>
                                  </ul>
                                </li>
                              </ul> */}

                              <dl className="m-bullets type-disc gap-50">
                                <dt>당행 사업장(영업점 포함)에서 수급인의 근로자가 연속적으로 업무를 수행하나, <em className="g-bold">1개월</em>을 초과하지 않고 종료되는 <em className="g-bold">일시적 작업</em>의 계약</dt>

                                <dd>사업장 내 소득 작업을 위해 <strong>15일간 작업</strong> <em className="o-chip var-lined-00 size-30"><span className="label">제출 비대상</span></em></dd>
                                <dd>사업장 내 소득 작업을 위해 <strong>40일간 작업</strong> <em className="o-chip var-lined-01 size-30"><span className="label">제출 대상</span></em></dd>
                              </dl>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>11</th>
                            <td colSpan={2} className="g-start">
                              {/* 당행 사업장(영업점 포함)에서 수급인의 근로자가 비연속적으로 업무를 수행하나,<br /><em className="g-bold">연간 60일</em>을 초과하지 않는 <em className="g-bold">간헐적 작업</em>의 계약
                              <ul className="m-bullets type-disc">
                                <li>승강기 유지보수 작업을 위해 연간 (1) A영업점 2일 + (2) B영업점 4일 + (3) C영업점 3일 + …… (26) Z영업점 1일 = 총 작업일수((1) ~ (26) 총합)</li>
                                <li>총 작업일수가 연간
                                  <ul className="m-bullets type-hyphen">
                                    <li>47일 <strong className="string">▶ 제출 비대상</strong></li>
                                    <li>80일 <strong className="string">▶ 제출 대상</strong></li>
                                  </ul>
                                </li>
                              </ul> */}

                              <dl className="m-bullets type-disc gap-50">
                                <dt>당행 사업장(영업점 포함)에서 수급인의 근로자가 비연속적으로 업무를 수행하나, <em className="g-bold">연간 60일</em>을 초과하지 않는 <em className="g-bold">간헐적 작업</em>의 계약</dt>

                                <dd>승강기 유지보수 작업을 위해 연간 (1) A영업점 2일 + (2) B영업점 4일 + (3) C영업점 3일 + …… (26) Z영업점 1일 = 총 작업일수((1) ~ (26) 총합)</dd>
                                <dd>총 작업일수가 연간 <strong>47일</strong> <em className="o-chip var-lined-00 size-30"><span className="label">제출 비대상</span></em></dd>
                                <dd>총 작업일수가 연간 <strong>80일</strong> <em className="o-chip var-lined-01 size-30"><span className="label">제출 대상</span></em></dd>
                              </dl>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li>위 (1) ~ (11) 항목 中 어느 하나에 해당하는 경우 제출 불필요하나, 판단이 어려운 경우 제출을 기본으로 함</li>
                  </ul>
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
              <span className="label">(P)도급사업체크리스트 [wdth-40p(w770)]</span>
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

export default STMSC0101P01;
