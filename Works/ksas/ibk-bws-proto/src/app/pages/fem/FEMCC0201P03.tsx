/**
 * @description 수수료관리 > 원화정사수수료 > 지급결의 ~ (LP)세금계산서불러오기
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

function FEMCC0201P03() {
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
        className="layer-wrap wdth-60p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">세금계산서불러오기</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">세금계산서 불러오기</span></h4>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="국세청 승인번호 찾기" className="_normal" />
                    </div>
                  </div>
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
                            <Label label={`부점코드`} require={false} />
                          </th>
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

                          <th colSpan={1}>
                            <Label label={`부점명`} require={false} />
                          </th>
                          <td colSpan={1}>
                            프로세스명
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`사업자등록번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            999-99-99999
                          </td>
                          <th colSpan={1}>
                            <Label label={`국세청 승인번호`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required wdth-70">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="binds">
                                  <CommonButton label="조회" className="_normal" />
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

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">세금계산서</span></h5>

                  <div className="o-field">
                    <Label label={`승인번호`} require={false} />
                    <div className="fields">
                      <span className="string o-digit type-num">99999999-99999999-9999999</span>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <div className="o-data-table type-taxinvoice">
                    <div className="table-container" style={{ '--width--col': '(1em * 120 / 14)' } as React.CSSProperties}>
                      <table className="table g-fixed-table">
                        <colgroup>
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          {/* <col style={{ width: 'calc(100% / 4 - var(--width--col))' }} /> */}
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />
                        </colgroup>

                        <thead>
                          <tr>
                            <th colSpan={4}>공급자</th>
                            <th colSpan={4}>공급받는자</th>
                          </tr>
                        </thead>

                        <tbody className="g-start">
                          <tr>
                            <th colSpan={1}>
                              등록​번호
                            </th>
                            <td colSpan={1}>
                              999-99-99999
                            </td>

                            <th colSpan={1}>
                              종사업장​번호
                            </th>
                            <td colSpan={1}>

                            </td>

                            <th colSpan={1}>
                              등록​번호
                            </th>
                            <td colSpan={1}>
                              999-99-99999
                            </td>

                            <th colSpan={1}>
                              종사업장​번호
                            </th>
                            <td colSpan={1}>

                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              상호​(법인명)
                            </th>
                            <td colSpan={1}>
                              나이스씨엠에스(주)
                            </td>

                            <th colSpan={1}>
                              성명
                            </th>
                            <td colSpan={1}>
                              홍길동
                            </td>

                            <th colSpan={1}>
                              상호​(법인명)
                            </th>
                            <td colSpan={1}>
                              나이스씨엠에스(주)
                            </td>

                            <th colSpan={1}>
                              성명
                            </th>
                            <td colSpan={1}>
                              홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              사업장​주소
                            </th>
                            <td colSpan={3}>
                              서울특별시 마포구 마포대로 130(공덕동 동방빌딩) 7층
                            </td>

                            <th colSpan={1}>
                              사업장​주소
                            </th>
                            <td colSpan={3}>
                              서울특별시 마포구 마포대로 130(공덕동 동방빌딩) 7층
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              업태
                            </th>
                            <td colSpan={1}>
                              운수서비스
                            </td>

                            <th colSpan={1}>
                              종목
                            </th>
                            <td colSpan={1}>
                              화물운송
                            </td>

                            <th colSpan={1}>
                              업태
                            </th>
                            <td colSpan={1}>
                              운수서비스
                            </td>

                            <th colSpan={1}>
                              종목
                            </th>
                            <td colSpan={1}>
                              화물운송
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              이메일
                            </th>
                            <td colSpan={3}>
                              example@abc.def
                            </td>

                            <th colSpan={1}>
                              이메일
                            </th>
                            <td colSpan={3}>
                              example@abc.def
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>

                            </th>
                            <td colSpan={3}>

                            </td>

                            <th colSpan={1}>
                              이메일
                            </th>
                            <td colSpan={3}>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="table g-fixed-table">
                        <colgroup>
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />

                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col />
                        </colgroup>

                        <tbody className="g-start">
                          <tr>
                            <th colSpan={1}>
                              작성일자
                            </th>
                            <td colSpan={3}>
                              2024-12-31
                            </td>

                            <th colSpan={1}>
                              공급가액
                            </th>
                            <td colSpan={1} className="g-end">
                              8,008,000
                            </td>

                            <th colSpan={1}>
                              세액
                            </th>
                            <td colSpan={1} className="g-end">
                              800,800
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              수정사유
                            </th>
                            <td colSpan={3}>
                              해당없음
                            </td>

                            <th colSpan={1}>
                              비고
                            </th>
                            <td colSpan={3}>
                              해당없음
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="table g-fixed-table">
                        <colgroup>
                          <col style={{ width: 'calc(var(--width--col) / 2)' }} />
                          <col style={{ width: 'calc(var(--width--col) / 2)' }} />
                          <col />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                          <col style={{ width: 'calc(var(--width--col))' }} />
                        </colgroup>

                        <tbody className="g-end">
                          <tr className="g-center">
                            <th colSpan={1}>월</th>
                            <th colSpan={1}>일</th>
                            <th colSpan={1}>품목</th>
                            <th colSpan={1}>규격</th>
                            <th colSpan={1}>수량</th>
                            <th colSpan={1}>단가</th>
                            <th colSpan={1}>공급가액</th>
                            <th colSpan={1}>세액</th>
                            <th colSpan={1}>비고</th>
                          </tr>
                          <tr>
                            <td colSpan={1} className="g-center">12</td>
                            <td colSpan={1} className="g-center">31</td>
                            <td colSpan={1} className="g-start">2024년 12월 용역표 중소기업은행 물류대형 업무</td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}>8,808,800</td>
                            <td colSpan={1}>8,808,800</td>
                            <td colSpan={1} className="g-start"></td>
                          </tr>
                          <tr>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-start"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1} className="g-start"></td>
                          </tr>
                          <tr>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-start"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1} className="g-start"></td>
                          </tr>
                          <tr>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1} className="g-start"></td>
                            <td colSpan={1} className="g-center"></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1}></td>
                            <td colSpan={1} className="g-start"></td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="table g-fixed-table">
                        <colgroup span={5}></colgroup>

                        <thead>
                          <tr>
                            <th colSpan={1}>합계금액</th>
                            <th colSpan={1}>현금</th>
                            <th colSpan={1}>수표</th>
                            <th colSpan={1}>어음</th>
                            <th colSpan={1}>외상미수금</th>
                          </tr>
                        </thead>

                        <tbody className="g-end">
                          <tr>
                            <td colSpan={1}>8,808,800</td>
                            <td colSpan={1}>0</td>
                            <td colSpan={1}>0</td>
                            <td colSpan={1}>0</td>
                            <td colSpan={1}>8,808,800</td>
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
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)세금계산서불러오기 [wdth-60p(w1150)]</span>
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

export default FEMCC0201P03;
