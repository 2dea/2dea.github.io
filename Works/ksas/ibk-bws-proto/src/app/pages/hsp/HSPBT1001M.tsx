/**
 * @description 중요용지·용도품(본부) > 영업점배송관리 > 용도품인도내역조회
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

function HSPBT1001M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(본부)' }, { label: '영업점배송관리' }, { label: '용도품인도내역조회' }];

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
                <span className="label">용도품인도내역조회</span>

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

            <div className="m-binds type-end">
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="인도취소" className="_solid-primary" />
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

                  <div className="o-field">
                    <Label label={`인도부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        {/* <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} /> */}
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`출급번호/품목명`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`조회기간`} require={true} />
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
                    <Label label={`인수부점`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`인도구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
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

          <Tabs className="m-tabs react-tabs" defaultIndex={0}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">인도내역</span></Tab>
                <Tab className="link"><span className="label">인도취소내역</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">인도내역</span></h2>

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
                              <col className="wdth-0" />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col className="wdth-0" />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도부점</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                <th className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일시</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도구분</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노선</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center" colSpan={4}><div className="p-column-header-content"><span className="p-column-title">일련번호</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수부점</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수상태</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수취소/정정일자</span></div></th>
                                <th className="p-align-center" colSpan={2}><div className="p-column-header-content"><span className="p-column-title">일반인도 신청 및 수량 변경 사유</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={21}>등록된 데이터가 없습니다.</td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td><InputCheck label="선택" labelHidden /></td>
                                <td>{idx + 1}</td>
                                <td>프로세스혁신</td>
                                <td>BC016</td>
                                <td className="g-start p-x-frozen-last">나의 알파체크카드(비교통_그린)</td>
                                <td><span className="o-digit type-datetime">2024-09-16 09:10:62</span></td>
                                <td>신청인도</td>
                                <td>정상</td>
                                <td className="g-start">부산</td>
                                <td className="g-end">50</td>
                                <td className="g-end">0</td>
                                <td></td>
                                <td>3344785</td>
                                <td>~</td>
                                <td>33447900</td>
                                <td>부산역</td>
                                <td><span className="o-digit type-datetime">2024-09-16</span></td>
                                <td>미인수</td>
                                <td><span className="o-digit type-datetime">2024-09-16</span></td>
                                <td className="g-start">마감 후 000긴급신청</td>
                                <td>
                                    <ImageButton label="이미지​보기" icon="image" onClick={(e) => viewimageOverlay0.current.toggle(e)} />
                                    <OverlayPanel className="o-overlaypanel case-viewimage wdth-25p" ref={viewimageOverlay0} closeIcon={<Icon icon="popup-close" />} showCloseIcon closeOnEscape dismissable={false}>
                                      <div className="layer-head">
                                        <h3 className="o-heading"><span className="label">이미지보기</span></h3>
                                      </div>
                                      <div className="layer-body">
                                        <div className="o-view-image">
                                          <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                        </div>
                                      </div>
                                    </OverlayPanel>
                                  </td>
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
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="o-grid">
                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h2 className="o-heading level2"><span className="label">인도취소내역</span></h2>

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
                              <col className="wdth-10" />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col className="wdth-0" />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col className="wdth-0" />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도부점</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                                <th className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">도착예정일자</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도일시</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도구분</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수취소일자</span></div></th>
                                <th className="p-align-center" colSpan={2}><div className="p-column-header-content"><span className="p-column-title">인도취소 사유</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도량</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">금액</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인수부점</span></div></th>
                                <th className="p-align-center" colSpan={2}><div className="p-column-header-content"><span className="p-column-title">일반인도 신청 및 수량 변경 사유</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={16}>등록된 데이터가 없습니다.</td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                            {[...Array(24)].map((e, idx) => (
                              <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <td><InputCheck label="선택" labelHidden /></td>
                                <td>{idx + 1}</td>
                                <td>프로세스혁신</td>
                                <td>BC016</td>
                                <td className="g-start p-x-frozen-last">나의 알파체크카드(비교통_그린)</td>
                                <td><span className="o-digit type-date">2024-09-16</span></td>
                                <td><span className="o-digit type-datetime">2024-09-16 09:10:62</span></td>
                                <td>신청인도</td>
                                <td><span className="o-digit type-datetime">2024-09-16</span></td>
                                <td className="g-start">신청자 요청으로 인한 삭제</td>
                                <td>
                                  <ImageButton label="이미지​보기" icon="image" onClick={(e) => viewimageOverlay1.current.toggle(e)} />
                                  <OverlayPanel className="o-overlaypanel case-viewimage wdth-25p" ref={viewimageOverlay1} closeIcon={<Icon icon="popup-close" />} showCloseIcon closeOnEscape dismissable={false}>
                                    <div className="layer-head">
                                      <h3 className="o-heading"><span className="label">이미지보기</span></h3>
                                    </div>
                                    <div className="layer-body">
                                      <div className="o-view-image">
                                        <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                      </div>
                                    </div>
                                  </OverlayPanel>
                                </td>
                                <td className="g-end">50</td>
                                <td className="g-end">0</td>
                                <td>부산역</td>
                                <td className="g-start"></td>
                                <td>
                                  <ImageButton label="이미지​보기" icon="image" onClick={(e) => viewimageOverlay2.current.toggle(e)} />
                                  <OverlayPanel className="o-overlaypanel case-viewimage wdth-25p" ref={viewimageOverlay2} closeIcon={<Icon icon="popup-close" />} showCloseIcon closeOnEscape dismissable={false}>
                                    <div className="layer-head">
                                      <h3 className="o-heading"><span className="label">이미지보기</span></h3>
                                    </div>
                                    <div className="layer-body">
                                      <div className="o-view-image">
                                        <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                      </div>
                                    </div>
                                  </OverlayPanel>
                                </td>
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
            </TabPanel>
          </Tabs>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default HSPBT1001M;
