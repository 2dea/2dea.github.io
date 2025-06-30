/**
 * @description 영업지원 > 대량신규  > 대량신규승인 ~ (LP)대량신규승인취소
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

function BSSLQ0101P02() {
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
        header={<h3 className="o-heading"><span className="label">대량신규승인취소</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">승인 상세내역</span></h4>
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
                            <Label label={`구분`} require={false} />
                          </th>
                          <td colSpan={3}>
                            승인
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`승인자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00001] 홍길동
                          </td>
                          <th colSpan={1}>
                            <Label label={`승인(반송)일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`영엄점수령 예정일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                          <th colSpan={1}>
                            <Label label={`승인좌수`} require={false} />
                          </th>
                          <td colSpan={1}>
                            100
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`승인거절사유`} require={false} />
                          </th>
                          <td colSpan={3}></td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`특이사항`} require={false} />
                          </th>
                          <td colSpan={3}></td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`작업기간`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <span className="o-digit type-date">2025-12-25</span> ~ <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>


              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">신청 상세내역</span></h4>
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
                            <Label label={`신청제목`} require={false} />
                          </th>
                          <td colSpan={3}>
                            적립식통장 100건
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`신청부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0810] 서울역
                          </td>
                          <th colSpan={1}>
                            <Label label={`신청일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00001] 홍길동
                          </td>
                          <th colSpan={1}>
                            <Label label={`사전협의자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00001] 홍길동
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`영엄점서류 발송일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                          <th colSpan={1}>
                            <Label label={`영엄점수령 희망일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>


              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">통장</span></h5>
                </div>

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
                            <Label label={`적립식계좌`} require={false} />
                          </th>
                          <td colSpan={3}>
                            100
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">기타요청사항</span></h5>
                </div>

                <div className="main">
                  <div className="o-field">
                    <div className="fields">
                      <div className="o-form _input">
                        <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={2} cols={80} readOnly />
                        <i aria-hidden="true"></i>
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
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)대량신규승인취소 [wdth-40p(w770)]</span>
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

export default BSSLQ0101P02;
