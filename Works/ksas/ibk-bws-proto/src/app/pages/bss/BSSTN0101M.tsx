/**
 * @description 영업지원 > 채권양도통지(B2B팩토링)
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

function BSSTN0101M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '영업지원' }, { label: '채권양도통지(B2B팩토링)' }, { label: '채권양도통지(B2B팩토링)' }];

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
                <span className="label">채권양도통지(B2B팩토링)</span>

                <Favorite />
              </h1>
            </div>
          </div>

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _primary">
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="통지완료" className="_solid-primary" />
                <CommonButton label="등기번호수정" className="_solid-primary" />
                <CommonButton label="등기번호등록" className="_solid-primary" />
                <CommonButton label="검수취소" className="_lined-primary" />
                <CommonButton label="검수수정" className="_solid-primary" />
                <CommonButton label="검수등록" className="_solid-primary" />
                <CommonButton label="실물인도" className="_solid-primary" />
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
                    <Label label={`신청일자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                      <span className="seps type-tilde">~</span>
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`등기번호 등록여부`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`검수완료여부`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`인도여부`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`수신자명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`등기번호`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`통지완료여부`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

            </div>
          </div>

            <div className="o-section">
              <div className="m-header">
                <h2 className="o-heading level2"><span className="label">신청내역</span></h2>

                <div className="m-binds">
                  <div className="group">
                    <ImageButton label="엑셀​다운로드" icon="excel-download" />
                    <ImageButton label="목록필터" icon="column-toggle" />
                    <ImageButton label="목록출력" icon="print" />
                  </div>
                </div>
              </div>

              <div className="main _primary body-3i">
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
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>

                      <thead className="p-datatable-thead">
                        <tr>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일련번호</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수일자</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">BPR조회</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출력일자</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출력횟수</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등기번호</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등기번호등록일자</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">내부계약번호</span></div></th>
                          <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수신자</span></div></th>
                          <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">관리부점</span></div></th>
                          <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">차주</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">행내등기번호</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">채권통지완료여부</span></div></th>
                          <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">채권통지삭제여부</span></div></th>

                        </tr>
                        <tr>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">성명</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자번호</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">성명</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자번호</span></div></th>
                        </tr>
                      </thead>

                      <tbody className="p-datatable-tbody">
                        <tr className="p-datatable-emptymessage">
                          <td colSpan={20}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                        </tr>
                      </tbody>

                      <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td><InputCheck label="선택" labelHidden /></td>
                            <td>{idx + 1}</td>
                            <td>01234512340001</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>
                              <CommonButton label="조회" className="_normal" />
                            </td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>55</td>
                            <td>012345</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>01234512340001</td>
                            <td>홍길동</td>
                            <td>107-89-12345</td>
                            <td>012345</td>
                            <td className="g-start">을지로</td>
                            <td>홍길동</td>
                            <td>107-89-12345</td>
                            <td>01234512340001</td>
                            <td>통지대기</td>
                            <td>N</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default BSSTN0101M;
