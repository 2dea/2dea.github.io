/**
 * @description 공통 ~ (LP)업무문의처
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

function CMP001301P() {
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
        className="layer-wrap wdth-50p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={false}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">업무문의처</span></h3>}
      >
        <div className="div-container">
          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type1">
              <TabList className="lists">
                <Tab className="link"><span className="label">자금현수송</span></Tab>
                <Tab className="link"><span className="label">중요용지&middot;용도품</span></Tab>
                <Tab className="link"><span className="label">행내등기&middot;우편물</span></Tab>
                <Tab className="link"><span className="label">재난&middot;안전관리</span></Tab>
                <Tab className="link"><span className="label">영업지원</span></Tab>
                <Tab className="link"><span className="label">수수료관리</span></Tab>
                <Tab className="link"><span className="label">공통&middot;결재</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h3 className="o-heading level2"><span className="label">업무문의</span></h3>
                    </div>

                    <div className="main">
                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup>
                              <col style={{ width: '25%' }} />
                              <col style={{ width: 'auto' }} />
                              <col style={{ width: '10%' }} />
                              <col style={{ width: '20%' }} />
                              <col style={{ width: '0' }} />
                              <col style={{ width: '0' }} />
                            </colgroup>

                            <thead>
                              <tr>
                                <th colSpan={1}>부서명</th>
                                <th colSpan={1}>담당업무</th>
                                <th colSpan={1}>담당자</th>
                                <th colSpan={3}>내선번호/IBK톡</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td colSpan={1} rowSpan={6}>프로세스혁신부</td>
                                <td colSpan={1} rowSpan={3}>원화신청</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4306</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4303</td>
                                <td colSpan={1}></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4304</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}></td>
                              </tr>
                              <tr>
                                <td colSpan={1} rowSpan={2}>외화신청</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4301</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4305</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>위폐감별</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4304</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h3 className="o-heading level2"><span className="label">업무문의</span></h3>
                    </div>

                    <div className="main">
                      <div className="o-data-table">
                        <div className="table-container">
                          <table className="table">
                            <colgroup>
                              <col style={{ width: '25%' }} />
                              <col style={{ width: 'auto' }} />
                              <col style={{ width: '10%' }} />
                              <col style={{ width: '20%' }} />
                              <col style={{ width: '0' }} />
                              <col style={{ width: '0' }} />
                            </colgroup>

                            <thead>
                              <tr>
                                <th colSpan={1}>부서명</th>
                                <th colSpan={1}>담당업무</th>
                                <th colSpan={1}>담당자</th>
                                <th colSpan={3}>내선번호/IBK톡</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td colSpan={1} rowSpan={3}>프로세스혁신부</td>
                                <td colSpan={1}>용도품신청</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4328</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>용도품신청(서울)</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4364, 4251</td>
                                <td colSpan={1}></td>
                                <td colSpan={1}><CommonButton label="IBK톡" className="_normal" /></td>
                              </tr>
                              <tr>
                                <td colSpan={1}>용도품신청(지방)</td>
                                <td colSpan={1}>홍길동</td>
                                <td colSpan={1}>8-4311, 4314</td>
                                <td colSpan={1}><CommonButton label="전화" className="_normal" /></td>
                                <td colSpan={1}></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </TabPanel>

            <TabPanel></TabPanel>

            <TabPanel></TabPanel>

            <TabPanel></TabPanel>

            <TabPanel></TabPanel>

            <TabPanel></TabPanel>
          </Tabs>
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
              <span className="label">(P)업무문의처 [wdth-50p(w960)]</span>
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

export default CMP001301P;
