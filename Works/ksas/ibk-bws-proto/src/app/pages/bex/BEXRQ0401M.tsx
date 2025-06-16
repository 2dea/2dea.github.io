/**
 * @description 행내등기·우편물 > 행내등기 > 행내등기인수
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

function BEXRQ0401M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '행내등기·우편물' }, { label: '행내등기' }, { label: '행내등기인수' }];

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
                <span className="label">행내등기인수</span>

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
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="인수취소" className="_lined-primary" />
                <CommonButton label="서무일괄대리인수" className="_solid-primary" />
                <CommonButton label="인수" className="_solid-primary" />

              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <div className="o-board type-a style-fit">
                <dl className="m-defines">
                  <div className="group">
                    <dt className="head">
                      <strong className="o-heading">
                        <span className="label">미인수 건수</span>
                      </strong>
                    </dt>
                    <dd className="data">
                      <div className="o-length">
                        <span className="head">부점</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </dd>
                    <dd className="data">
                      <div className="o-length">
                        <span className="head">개인</span>
                        <em className="data">
                          <span className="value">8</span>
                          <span className="units">건</span>
                        </em>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field colspan-4">
                    <Label label={`기간`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>

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
                    <Label label={`인수부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required wdth-auto">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`인수자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`신청자`} require={false} />
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
                    <Label label={`진행상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`신청번호`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                  <h2 className="o-heading level2"><span className="label">행내등기내역</span></h2>

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
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>

                </div>

                <div className="main _primary rows-body-5i">
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
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수부점</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수자</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실제인수자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수방법</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">검수일자</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청번호</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수일자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">문서종류</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">서류내용</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수량</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={22}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>011465</td>
                              <td className="g-start">부산역</td>
                              <td>0009</td>
                              <td>홍길동</td>
                              <td>0009</td>
                              <td>홍길동</td>
                              <td>바코드</td>
                              <td>배송</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>0009</td>
                              <td className="g-start">프로세스</td>
                              <td>0009</td>
                              <td>홍길동</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>011465</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>일반서류</td>
                              <td>투표용지</td>
                              <td className="g-end">1</td>
                              <td className="g-start">부산역</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">상세정보</span></h3>
                </div>

                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                        <col className="head" />
                        <col className="data" />
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
                            <Label label={`신청부점`} require={false} />
                          </th>
                          <td colSpan={3}>
                            [00070] 프로세스혁신부
                          </td>

                          <th colSpan={1}>
                            <Label label={`신청자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00070] 홍길동
                          </td>

                          <th colSpan={1}>
                            <Label label={`서류구분`} require={false} />
                          </th>
                          <td colSpan={1}>
                            일반서류
                          </td>

                          <th colSpan={1}>
                            <Label label={`수량`} require={false} />
                          </th>
                          <td colSpan={1} className="g-end">
                            30
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`서류내용`} require={false} />
                          </th>
                          <td colSpan={9}>
                            NET점에 고객 방문 예정으로 세팅 위한 서류 3건 송부탁드립니다.
                          </td>
                        </tr>

                        <tr>
                          <th colSpan={1}>
                            <Label label={`인수부점`} require={false} />
                          </th>
                          <td colSpan={3}>
                            [00070] 프로세스혁신부
                          </td>

                          <th colSpan={1}>
                            <Label label={`인수자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00070] 홍길동
                          </td>

                          <th colSpan={1}>
                            <Label label={`실근무지`} require={false} />
                          </th>
                          <td colSpan={1}>
                            수지IT센터
                          </td>

                          <th colSpan={1}>
                            <Label label={`인수방법`} require={false} />
                          </th>
                          <td colSpan={1}>
                            바코드
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>격지는 익익영업일 도착예정으로 하루 한 번 배송됩니다. 천재지변 시 도착 예정일보다 지연될 수 있습니다.</em></li>
                  </ul>
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

export default BEXRQ0401M;
