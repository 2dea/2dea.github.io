/**
 * @description 중요용지·용도품(영업점) > 폐기 > 오손처리진행상태조회 > (LP)오손등록취소
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

function BSPDU0201P04() {
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
        header={<h3 className="o-heading"><span className="label">오손등록취소</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">

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
                            <Label label={`부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0092] 부산/일반
                          </td>
                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00009] 홍길동
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`발생일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12</span>
                          </td>
                          <th colSpan={1}>
                            <Label label={`오서손구분`} require={false} />
                          </th>
                          <td colSpan={1}>
                            오서손
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`출급번호/품목명`} require={false} />
                          </th>
                          <td colSpan={3}>
                            [0092] 신세계백화점상품권10만원권
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`오손진행상태`} require={false} />
                          </th>
                          <td colSpan={1}>
                            영업점결재완료
                          </td>
                          <th colSpan={1}>
                            <Label label={`수량`} require={false} />
                          </th>
                          <td colSpan={1} className="g-end">
                            1
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`일련번호`} require={false} />
                          </th>
                          <td colSpan={3}>
                            15051 ~ 16051
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`폐기장소`} require={false} />
                          </th>
                          <td colSpan={3}>
                            영업점
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`오손사유`} require={false} />
                          </th>
                          <td colSpan={3}>
                            계좌 일괄폐기
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`스캔내역`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <div className="m-string-binds">
                              <span className="binds"><CommonButton label="BPR 조회" className="_normal" /></span>
                              <span className="string justify-end">(온누리 상품권 폐기발송 시 등록한 스캔내역이 조회됩니다.)</span>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>원장수정 - 폐기일련번호, 폐기사유</em></li>
                    <li className="c-color-strong"><em>센터 폐기분은 팀장결재 후 센터로 발송하시기 바랍니다.</em></li>
                  </ul>
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
              <span className="label">(P)오손등록취소 [wdth-40p(w770)]</span>
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

export default BSPDU0201P04;
