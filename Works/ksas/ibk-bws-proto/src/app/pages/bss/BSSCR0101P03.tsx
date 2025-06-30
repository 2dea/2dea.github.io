/**
 * @description 영업지원 > 캘린더신청 > 신청기간관리 ~ (LP)부점선택
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

function BSSCR0101P03() {
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
        header={<h3 className="o-heading"><span className="label">부점선택</span></h3>}
      >
        <div className="div-container">
          <div className="m-filter-select">
            <div className="fieldset">

              <dl className="defines">
                <div className="define-group">
                  <dt className="head">부점선택</dt>
                  <dd className="data">
                    <div className="group m-radio-menu">
                      <button type="button" className="bind"><span className="label">WM센터</span></button>
                      <button type="button" className="bind is-checked"><span className="label">출장소</span></button>
                      <button type="button" className="bind"><span className="label">긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름</span></button>
                      <button type="button" className="bind"><span className="label">기업금융센터</span></button>
                      <button type="button" className="bind"><span className="label">대기업금융센터</span></button>
                      <button type="button" className="bind"><span className="label">WM센터</span></button>
                      <button type="button" className="bind"><span className="label">출장소</span></button>
                      <button type="button" className="bind"><span className="label">기업금융센터</span></button>
                      <button type="button" className="bind"><span className="label">대기업금융센터</span></button>
                    </div>

                    <div className="group checks size-2">
                      <div className="item"><InputCheck label="전체" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명" defaultChecked /></div>
                      <div className="item"><InputCheck label="대구경북동부지역본부 기관영업팀" defaultChecked /></div>
                      <div className="item"><InputCheck label="하남데이터센터이전추진단" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                    </div>
                  </dd>
                </div>
              </dl>

            </div>
          </div>

          <div className="o-grid">
            <div className="column">

              <div className="m-divider">
                <div className="m-binds">
                  <div className="group">
                    <CommonButton label="추가" icon="du-down" className="_normal" />
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">선택내역</span></h4>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="o-field">
                    <div className="fields">
                      <div className="o-form _input wdth-90">
                        <Icon icon="search" />
                        <AutoComplete className="bind" placeholder="부점명을 입력해주세요" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-body-8i">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={5}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td>{idx + 1}</td>
                            <td>영업점</td>
                            <td>0000</td>
                            <td className="g-start">사회공헌부</td>
                          </tr>
                        ))}
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
              <CommonButton label="선택" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)부점선택 [wdth-40p(w770)]</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} />
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

export default BSSCR0101P03;
