/**
 * @description 공통·결재 > 운영관리 > 전문로그관리 ~ (LP)전문로그상세
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

function ADMOA0201P01() {
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
        className="layer-wrap wdth-90p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">전문로그상세</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">

                <div className="m-header">
                  <h3 className="o-heading level2"><span className="label">상세정보</span></h3>
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
                            <Label label={`표준전문작성년월일`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>

                          <th colSpan={1}>
                            <Label label={`표준전문인터페이스 UNIQUEID`} require={false} />
                          </th>
                          <td colSpan={1}>
                            20250813LBWS0001BWS113555677410000
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`요청응답구분코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            S
                          </td>
                          <th colSpan={1}>
                            <Label label={`요청시스템구분코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            BWS
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`표준전문인터페이스ID`} require={false} />
                          </th>
                          <td colSpan={1}>
                            BWS1135556774
                          </td>
                          <th colSpan={1}>
                            <Label label={`표준전문요청일시`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-datetime">2025-12-25 09:10:59</span>
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`응답처리결과구분코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            BWS
                          </td>
                          <th colSpan={1}>
                            <Label label={`표준전문오류코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            BWS1135556774
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`오류발생시스템구분코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            BWS1135556774
                          </td>
                          <th colSpan={1}>
                            <Label label={`거래채널구분코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            OLT
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`부점코드`} require={false} />
                          </th>
                          <td colSpan={1}>
                            0810
                          </td>
                          <th colSpan={1}>
                            <Label label={`조작자직원번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            0436666
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`전문내용`} require={false} />
                          </th>
                          <td colSpan={3}>
                            {/* <div className="o-rich-text"></div> */}
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={150} />
                                  <i aria-hidden="true"></i>
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

            </div>

            <div className="column">
              <div className="o-section">
                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`표준전문길이`} require={false} />
                          </th>
                          <td colSpan={1}>
                            2025-0511545871123840
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
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
              <span className="label">(P)전문로그상세 [wdth-90p(w770)]</span>
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

export default ADMOA0201P01;
