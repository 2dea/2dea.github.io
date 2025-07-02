/**
 * @description 재난·안전관리 > 기계경비당직관리 > 기계경비보안관리 ~ (LP)당직점검표등록
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

function STMGD0401P03() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // InputText
  const [value, setValue] = useState<string>('');

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
        header={<h3 className="o-heading"><span className="label">당직점검표등록</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="main">
                  <div className="m-data-form">
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
                            <Label label={`부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0001] 영업부
                          </td>

                          <th colSpan={1}>
                            <Label label={`점검일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">점검내용</span></h4>
                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '15%' }} />
                          <col style={{ width: 'auto' }} />
                          <col style={{ width: '25%' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`구분`} require={false} />
                            </th>
                            <th colSpan={1}>
                              <Label label={`점검사항`} require={false} />
                            </th>
                            <th colSpan={1}>
                              <Label label={`이상유무`} require={false} />
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`경비`} require={false} />
                            </th>
                            <td colSpan={1} className="g-start">
                              <ul className="m-bullets type-disc">
                                <li>각종 출입문 창문 시건상태</li>
                                <li>점내 IBK365코너 방범시설 세팅 이상유무</li>
                                <li>건물내 잔류직원 및 잠복자 유무</li>
                                <li>CCTV 점검</li>
                              </ul>
                            </td>
                            <td rowSpan={3} colSpan={1}>
                              <div className="m-checks flow-inline">
                                <InputRadio name="RADIO_10" label="이상무" defaultChecked />
                                <InputRadio name="RADIO_10" label="이상유" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`보안`} require={false} />
                            </th>
                            <td colSpan={1} className="g-start">
                              <ul className="m-bullets type-disc">
                                <li>책상, 서류함, 캐비닛, 금고, 서고 등 시건상태</li>
                                <li>중요서류, 문서 및 인장, 열쇠 등 방치여부</li>
                                <li>사무실 정리정돈 및 청소상태</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`소방`} require={false} />
                            </th>
                            <td colSpan={1} className="g-start">
                              <ul className="m-bullets type-disc">
                                <li>사무실, 금고, 서고 등 전등 소등상태</li>
                                <li>각종 사무기기 및 전열기 전원스위치 차단상태 점검</li>
                                <li>재떨이, 휴지통 등 화기 단속상태</li>
                                <li>식당 가스안전밸브 잠금상태 및 가스누출여부</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`특이사항`} require={false} />
                            </th>
                            <td colSpan={2} className="g-start">
                              <div className="o-form _input">
                                <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} />
                                <i aria-hidden="true"></i>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2">
                    <span className="label">카드 및 출입문 열쇠 인수도부</span>
                    <div className="m-inline-binds type-tooltip">
                      <Tooltip className="o-tooltip" target="#STMGD0401P03-tooltip-10" position="top">
                        [경비업무규경] 제38조(보안점검자의 임무) 보안점검자의 임무는 다음 각 호와 같다.<br /><br />
                        7. 다음 영업일에 세트카드 및 출입문 열쇠를 서무팀장(출장소의 경우 서무 최상급자)에게 반납하고, 기계경비보안점검표를 작성하여 전산 결재 한다.
                      </Tooltip>
                      <ImageButton id="STMGD0401P03-tooltip-10" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                    </div>
                  </h4>
                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: 'auto' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`구분`} require={false} />
                            </th>
                            <th colSpan={2}>
                              <Label label={`인계자`} require={false} />
                            </th>
                            <th colSpan={2}>
                              <Label label={`인수자`} require={false} />
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={1} rowSpan={2}>
                              점검일자
                            </td>
                            <td colSpan={1} rowSpan={2}>
                              서무팀장
                            </td>
                            <td colSpan={1} rowSpan={2}>
                              <div className="o-form _input wdth-70">
                                <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                <i aria-hidden="true"></i>
                              </div>
                            </td>
                            <td colSpan={1}>
                              점검자2
                            </td>
                            <td colSpan={1}>
                              [0000] 홍길동
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={1}>
                              점검자2
                            </td>
                            <td colSpan={1}>
                              [0000] 홍길동
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={1} rowSpan={2}>
                              점검일자 익일
                            </td>
                            <td colSpan={1}>
                              점검자1
                            </td>
                            <td colSpan={1}>
                              [0000] 홍길동
                            </td>
                            <td colSpan={1} rowSpan={2}>
                              서무팀장
                            </td>
                            <td colSpan={1} rowSpan={2}>
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
                            <td colSpan={1}>
                              점검자2
                            </td>
                            <td colSpan={1}>
                              [0000] 홍길동
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2">
                    <span className="label">세트현황</span>
                  </h4>
                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '10%' }} />
                          <col style={{ width: '10%' }} />
                          <col style={{ width: 'auto' }} />
                          <col style={{ width: 'auto' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`구분`} require={false} />
                            </th>
                            <th colSpan={1}>
                              <Label label={`세트시각`} require={true} />
                            </th>
                            <th colSpan={1}>
                              <Label label={`실시자`} require={false} />
                            </th>
                            <th colSpan={1}>
                              <Label label={`경비회사 수화자`} require={false} />
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={1} rowSpan={2}>
                              지점
                            </td>
                            <td colSpan={1} rowSpan={2}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-time mode-required wdth-30">
                                    <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
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
                            <td colSpan={1} rowSpan={2}>
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
                        </tbody>
                      </table>
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
              <span className="label">(P)당직점검표등록 [wdth-40p(w770)]</span>
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

export default STMGD0401P03;
