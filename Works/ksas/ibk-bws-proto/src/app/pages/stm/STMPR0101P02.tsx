/**
 * @description 재난·안전관리 > 출입증/방문증 > 출입증신청 ~ (LP)하남IT센터신청안내
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

function STMPR0101P02() {
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
        header={<h3 className="o-heading"><span className="label">하남IT센터신청안내</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">출입구역</span></h4>
                </div>

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: 'calc(1em * 80 / 14)' }} />
                          <col style={{ width: 'calc(1em * 80 / 14)' }} />
                          <col style={{ width: 'calc(1em * 160 / 14)' }} />
                          <col style={{ width: 'calc(1em * 160 / 14)' }} />
                          <col style={{ width: 'auto' }} />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={2}>구분</th>
                            <th colSpan={1}>구역명</th>
                            <th colSpan={1}>대상자</th>
                            <th colSpan={1}>상세 출입구역 안내</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th colSpan={2}>LV.1</th>
                            <td colSpan={1}>일반구역</td>
                            <td colSpan={1}>개발실 근무직원</td>
                            <td colSpan={1} className="g-start">운영동 공용구역(개발실 포함)</td>
                          </tr>
                          <tr>
                            <th colSpan={2}>LV.2</th>
                            <td colSpan={1}>사무구역</td>
                            <td colSpan={1}>사무실 근무직원</td>
                            <td colSpan={1} className="g-start">운영동 사무구역</td>
                          </tr>
                          <tr>
                            <th colSpan={2}>LV.3</th>
                            <td colSpan={1}>전산동</td>
                            <td colSpan={1}>전산동 출입직원</td>
                            <td colSpan={1} className="g-start">전산동 (공용구역)</td>
                          </tr>
                          <tr>
                            <th colSpan={1} rowSpan={2}>LV.4</th>
                            <th colSpan={1}>-1</th>
                            <td colSpan={1} rowSpan={2}>관계자 외 제한구역</td>
                            <td colSpan={1}>시설물 관리직원</td>
                            <td colSpan={1} className="g-start">시설물</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>-2</th>
                            <td colSpan={1}>전자서명 인증팀</td>
                            <td colSpan={1} className="g-start">전자서명인증실</td>
                          </tr>
                          <tr>
                            <th colSpan={1} rowSpan={2}>LV.5</th>
                            <th colSpan={1}>-1</th>
                            <td colSpan={1} rowSpan={2}>제한구역</td>
                            <td colSpan={1} rowSpan={2}>제한구역 근무직원</td>
                            <td colSpan={1} className="g-start">전기실, 기계실, 소화가스실 등</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>-2</th>
                            <td colSpan={1} className="g-start">비밀문서 금고</td>
                          </tr>
                          <tr>
                            <th colSpan={1} rowSpan={4}>LV.6</th>
                            <th colSpan={1}>-1</th>
                            <td colSpan={1} rowSpan={4}>통제구역</td>
                            <td colSpan={1} rowSpan={4}>통제구역 근무직원</td>
                            <td colSpan={1} className="g-start">종합상황실</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>-2</th>
                            <td colSpan={1} className="g-start">중앙감시실</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>-3</th>
                            <td colSpan={1} className="g-start">특수경비관제상황실</td>
                          </tr>
                          <tr>
                            <th colSpan={1}>-4</th>
                            <td colSpan={1} className="g-start">사이버보안관제실</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="main">
                  <figure className="o-figure">
                    <div className="body">
                      <img src={require("assets/images/media/STMPR0101P02_010.png")} alt="" />
                    </div>
                  </figure>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="확인" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)하남IT센터신청안내 [wdth-40p(w770)]</span>
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

export default STMPR0101P02;
