/**
  * @description 재난·안전관리 > 도급사업관리 > 도급계약 현황 등록 ~ (LP)참고
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

function STMSC0101P02() {
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
        header={<h3 className="o-heading"><span className="label">참고</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">

                <div className="main">
                  <div className="o-data-table">
                    <div className="table-container">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '15%' }} />
                          <col style={{ width: 'auto' }} />
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>일시적</th>
                            <td colSpan={1} className="g-start">
                              <dl className="m-bullets type-disc gap-50">
                                <dt>당행 사업장(영업점 포함)에서 수급인의 근로자가 연속적으로 업무를 수행하나, <em className="g-bold">1개월</em>을 초과하지 않고 종료되는 <em className="g-bold">일시적 작업</em>의 계약</dt>

                                <dd>사업장 내 소득 작업을 위해 <strong>15일간 작업</strong> <em className="o-chip var-lined-00 size-30"><span className="label">제출 비대상</span></em></dd>
                                <dd>사업장 내 소득 작업을 위해 <strong>40일간 작업</strong> <em className="o-chip var-lined-01 size-30"><span className="label">제출 대상</span></em></dd>
                              </dl>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>간헐적</th>
                            <td colSpan={1} className="g-start">
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
              <span className="label">(P)참고 [wdth-40p(w770)]</span>
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

export default STMSC0101P02;
