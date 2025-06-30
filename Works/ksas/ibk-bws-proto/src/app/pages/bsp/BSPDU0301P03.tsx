/**
 * @description 중요용지·용도품(영업점) > 폐기 > 중요용지일괄폐기 ~ 온누리상품권스캔등록
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

function BSPDU0301P03() {
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
        header={<h3 className="o-heading"><span className="label">온누리상품권스캔등록</span></h3>}
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
                            <Label label={`등록일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-01-21</span>
                          </td>
                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0810] 홍길동
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`폐기수량`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-90">
                                  <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                  <span className="inner-binds">
                                    <ImageButton label="초기화" icon="remove" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <th colSpan={1}>
                            <Label label={`출근번호/품목명`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0810] 전통시장온누리상품권5천원권
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`일련번호`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-70">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <span className="seps type-tilde">~</span>
                                <div className="o-form _input mode-required wdth-70">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`스캔등록`} require={true} />
                          </th>
                          <td colSpan={3}>
                            <div className="m-binds">
                              <div className="group _start">
                                <CommonButton label="BPR조회" className="_normal" />
                                <CommonButton label="BPR스캔" className="_normal" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

              <div className="o-section">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">유의사항</span></strong>
                    </div>

                    <ol className="m-bullets type-decimal level1">
                      <li>입력한 폐기수량과 일련번호가 동일한 실물을 스캔해주세요. (동일하지 않은 경우 반송 사유)</li>
                      <li><strong className="strong">BPR스캔 실행 화면 내 전송 매수에 동일한 수량을 입력해주세요.</strong></li>
                      <li><strong className="strong">전송 전 삽입스캔을 통해 추가스캔이 가능하며 전송 후엔 추가 스캔이 되지 않습니다.</strong></li>
                      <li>BPR스캔 실행 화면 내 스캔 완료 후 반드시 전송하고 종료해주세요.</li>
                      <li>상품권 실물이 아닌 복사본, 출력물의 경우 앞&middot;뒷면을 분리 후 스캔해주세요.</li>
                    </ol>
                  </div>

                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">BPR 스캔 등록 순서</span></strong>
                    </div>

                    <ul className="m-bullets type-disc">
                      <li className="c-color-strong">주의: [저장] 버튼을 클릭하지 않는 경우 등록 누락
                        <ol className="m-bullets type-decimal level1 c-color-strong">
                          <li>[BPR스캔]으로 스캔등록</li>
                          <li>[BPR조회]으로 스캔정보 확인(생략 가능)</li>
                          <li>[저장]으로 BPR스캔등록 완료</li>
                        </ol>
                      </li>
                    </ul>
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
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>

      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)구양식/서손폐기등록(영업점) [wdth-40p(w770)]</span>
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

export default BSPDU0301P03;
