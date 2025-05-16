/**
 * @description 영업지원 > 연수원 > 연수원품목재고조회
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Favorite from 'app/shared/layouts/Favorite';
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

function BSSTI0501M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '영업지원' }, { label: '연수원' }, { label: '연수원품목재고조회' }];

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
      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="main">
            <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">연수원품목재고조회</span>

                <Favorite />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group _assistive">
                <CommonButton label="도움말" icon="help" className="_normal" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field colspan-2">
                    <Label label={`거래일자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`연수원`} require={false} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputRadio name="RADIO:F_10" label="충주연수원" defaultChecked />
                        <InputRadio name="RADIO:F_10" label="기흥연수원" />
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`구분`} require={false} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputRadio name="RADIO:F_20" label="전체" defaultChecked />
                        <InputRadio name="RADIO:F_20" label="비품" />
                        <InputRadio name="RADIO:F_20" label="소모품" />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">품목별재고현황</span></h2>

                  <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <ImageButton label="엑셀​다운로드" icon="excel-download" />
                        <ImageButton label="목록필터" icon="column-toggle" />
                        <ImageButton label="목록출력" icon="print" />
                      </div>
                    </div>
                </div>

                <div className="main _primary">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col className="wdth-auto" />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">연수원</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">구분</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상태</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">규격</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목단위</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단위당개수</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재고수량</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={10}>등록된 데이터가 없습니다.</td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{ idx +1 }</td>
                            <td>충주연수원</td>
                            <td>소모품</td>
                            <td>0003</td>
                            <td className="g-start">린스(휴양동)</td>
                            <td>활동</td>
                            <td className="g-end">450ML</td>
                            <td>1</td>
                            <td className="g-end">1</td>
                            <td className="g-end">24</td>
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
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default BSSTI0501M;
