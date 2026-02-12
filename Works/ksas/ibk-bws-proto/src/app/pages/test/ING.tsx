/**
 * @description 자금현수송 > 원화현수송 > 자금현수송노선출력
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

function FMTCT1101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '자금현수송' }, { label: '신청' }, { label: '자금현수송노선출력' }];

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
          <div className="main">
            <BreadCrumb model={paths} home={{ icon: 'o-icon _breadcrumb-home' }} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">자금현수송노선출력</span>

                <FavoriteDiv />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">

          ...

            <div className="o-grid">
              <div className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">요약정보</span></h3>

                    <div className="o-legend type-unit style-normal">
                      <em className="label">(단위: 건)</em>
                    </div>
                  </div>

                  <div className="main">
                    {/* <form className="m-data-form">
                      <table className="table">
                        <colgroup>
                          <col className="head" />
                          <col className="data" />
                          <col className="head" />
                          <col className="data" />
                          <col className="head" />
                          <col className="data" />
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`원화청구`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화청구`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`청구 전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`원화불입`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화불입`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              9,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`불입 전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`원화`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`외화`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              99,999
                            </td>

                            <th colSpan={1}>
                              <Label label={`전체`} require={false} />
                            </th>
                            <td colSpan={1} className="g-end">
                              999,999
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form> */}

                    <div className="o-data-table">
                      <div className="table-container">
                        <table className="table">
                          <colgroup span={4}></colgroup>

                          <thead>
                            <tr>
                              <th colSpan={1}>구분</th>
                              <th colSpan={1}>원화</th>
                              <th colSpan={1}>외화</th>
                              <th colSpan={1}>합계(원화+외화)</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <th colSpan={1}>청구</th>
                              <td colSpan={1} className="g-end">9,999</td>
                              <td colSpan={1} className="g-end">9,999</td>
                              <td colSpan={1} className="g-end">99,999</td>
                            </tr>
                            <tr>
                              <th colSpan={1}>불입</th>
                              <td colSpan={1} className="g-end">9,999</td>
                              <td colSpan={1} className="g-end">9,999</td>
                              <td colSpan={1} className="g-end">99,999</td>
                            </tr>
                          </tbody>

                          <tfoot className="sumtotal-tfoot">
                            <tr className="sumtotal-trow">
                              <th colSpan={1} className="sumtotal-tcell">총계</th>
                              <td colSpan={1} className="sumtotal-tcell g-end">99,999</td>
                              <td colSpan={1} className="sumtotal-tcell g-end">99,999</td>
                              <td colSpan={1} className="sumtotal-tcell g-end">999,999</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="column"></div>
            </div>

          ...

        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FMTCT1101M;
