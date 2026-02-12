/**
 * @description 공통 ~ (LP)결재요청
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

function CMP001501P() {
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
        className="layer-wrap wdth-70p"
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">결재요청</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">

            <div className="column _views">

              <form className="m-filter-form">
                <div className="fieldset">
                  <div className="o-field">
                    <Label label={`부점코드/명`} require={false} />
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
                    <Label label={`직원번호/명`} require={false} />
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

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">직원내역</span></h4>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                </div>

                <div className="main _primary rows-body-3i">
                  <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                  <div className="o-grid-table p-datatable">
                    <div className="table-container p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col className="wdth-10" />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소속</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직위</span></div></th>
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
                              <td>{idx + 1}</td>
                              <td className="g-start">프로세스혁신부</td>
                              <td>홍길동</td>
                              <td>부장</td>
                              <td>감리역</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="m-shuttle-binds">
              <div className="group">
                <CommonButton label="추가" icon="du-right" className="_normal" />
                <CommonButton label="취소" icon="du-left" className="_normal" />
              </div>
            </div>

            <div className="column">

              <div className="o-grid">

                <div className="column flex-auto">

                  <div className="o-section">
                    <div className="m-header">
                      <h4 className="o-heading level2"><span className="label">결재선</span></h4>

                      <div className="o-helper">
                        <em className="label c-color-strong">소속부점 팀장 → 안전관리팀 팀장 전결</em>
                      </div>

                      <div className="m-binds">
                        <div className="group gap-none">
                          <ImageButton label="상위 이동" icon="page-up" iconWidth={50} />
                          <ImageButton label="하위 이동" icon="page-down" iconWidth={50} />
                        </div>
                        <div className="group">
                          <CommonButton label="즐겨찾기 저장" className="_normal" />
                        </div>
                      </div>
                    </div>

                    <div className="main _primary rows-body-6i">
                      <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                      <div className="o-grid-table p-datatable">
                        <div className="table-container p-datatable-wrapper">
                          <table className="p-datatable-table p-datatable-scrollable-table">
                            <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                            </colgroup>

                            <thead className="p-datatable-thead">
                              <tr>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소속</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                                <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직위</span></div></th>
                              </tr>
                            </thead>

                            <tbody className="p-datatable-tbody">
                              <tr className="p-datatable-emptymessage">
                                <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                              </tr>
                            </tbody>

                            <tbody className="p-datatable-tbody">
                              {[...Array(8)].map((e, idx) => (
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td className="g-start">프로세스혁신부</td>
                                  <td>홍길동</td>
                                  <td>부장</td>
                                  <td>감리역</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">

                  <div className="o-section">
                    <div className="m-header">
                      <h5 className="o-heading level3"><span className="label">즐겨찾기</span></h5>

                      <div className="m-binds">
                        <div className="group gap-none">
                          <ImageButton label="상위 이동" icon="page-up" iconWidth={50} />
                          <ImageButton label="하위 이동" icon="page-down" iconWidth={50} />
                        </div>
                      </div>
                    </div>

                    <div className="main _primary rows-body-6i">
                      <ul className="m-editlist" role="listbox">
                        <li>
                          <div className="o-form _input">
                            <InputText placeholder="결재선 이름 입력" value="기본결재선" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                            <i aria-hidden="true"></i>
                            <span className="inner-binds">
                              <ImageButton label="결재선 이름변경" icon="edit" />
                              <ImageButton label="즐겨찾기 제외" icon="delete" />
                            </span>
                          </div>
                        </li>
                        <li className="is-selected">
                          <div className="o-form _input">
                            <InputText placeholder="결재선 이름 입력" value="중요결재선중요결재선중요결재선" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                            <i aria-hidden="true"></i>
                            <span className="inner-binds">
                              <ImageButton label="결재선 이름변경" icon="edit" />
                              <ImageButton label="즐겨찾기 제외" icon="delete" />
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-form _input">
                            <InputText placeholder="결재선 이름 입력" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                            <i aria-hidden="true"></i>
                            <span className="inner-binds">
                              <ImageButton label="결재선 이름변경" icon="edit" />
                              <ImageButton label="즐겨찾기 제외" icon="delete" />
                            </span>
                          </div>
                        </li>
                        <li className="is-selected">
                          <div className="o-form _input">
                            <InputText placeholder="결재선 이름 입력" value="결재선그룹1" className="bind" onChange={(e) => setValue(e.target.value)} onFocus={(e) => e.target.select()} />
                            <i aria-hidden="true"></i>
                            <span className="inner-binds">
                              <ImageButton label="결재선 이름변경" icon="edit" />
                              <ImageButton label="즐겨찾기 제외" icon="delete" />
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">접수</span></h4>
                </div>

                <div className="main _primary rows-auto">
                  <div className="o-grid-table type-table">{/* [하드코딩] */}
                    <div className="table-container">
                      <table>
                        <colgroup>
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead>
                          <tr>
                            <th>소속</th>
                            <th>직원명</th>
                            <th>직책</th>
                            <th>직위</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="c-point-row">
                            <td className="g-start">안전관리팀</td>
                            <td>안정원(대직 김준완)</td>
                            <td>팀장</td>
                            <td>부장</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="o-grid">

            <div className="column _views">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">결재의견</span></h4>
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
                            <Label label={`결재요청명`} require={false} />
                          </th>
                          <td colSpan={1}>
                            문서대량폐기
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`결재의견`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required">
                                  <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                                  <i aria-hidden="true"></i>

                                  <div className="o-limit type-length">
                                    <span className="head">글자수</span>
                                    <span className="data">
                                      <em className="value">0</em>
                                      <span className="sep">/</span>
                                      <span className="limits" aria-label="입력가능 글자수">100</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
                </div>

                <div className="m-footer">
                  <ul className="m-bullets type-disc">
                    <li>결재요청 완료 후 결재선 변경 : 업무지원시스템 &gt; 관리자 &gt; 결재관리 &gt; 결재선변경관리</li>
                  </ul>
                </div>


              </div>

            </div>

            <div className="m-shuttle-binds">
              <div className="group"></div>
            </div>

            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2">
                    <span className="label">부점장 부재 시 승인의견</span>
                    <InputCheck label="사용" labelHidden />
                  </h4>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="관련시행문" className="_normal" />
                    </div>
                  </div>
                </div>

                <fieldset className="main" disabled>
                  <div className="m-data-form">
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
                            <Label label={`구분`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select mode-required wdth-50">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                          <th colSpan={1}>
                            <Label label={`승인시각`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-time mode-required wdth-30">
                                  <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`내용`} require={true} />
                          </th>
                          <td colSpan={3}>
                           <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input mode-required">
                                  <InputTextarea placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} rows={3} cols={80} />
                                  <i aria-hidden="true"></i>

                                  <div className="o-limit type-length">
                                    <span className="head">글자수</span>
                                    <span className="data">
                                      <em className="value">0</em>
                                      <span className="sep">/</span>
                                      <span className="limits" aria-label="입력가능 글자수">100</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </fieldset>

                <div className="m-footer">
                  <div className="o-board type-a">
                    <div className="board-container">
                      <div className="m-header">
                        <strong className="o-heading"><span className="label">예외등록 처리대상</span></strong>
                      </div>

                      <ol className="m-bullets type-decimal level1">
                        <li>중요용지 출납책임자(팀장원칙) 사무분장이 미등록된 경우(중요용지관리세칙 제 6조 참조)</li>
                        <li>중요용지 출납책임자 및 지점장 부재중(단순 자리비움 제외)이거나 당일자 근태 등록된 경우</li>
                      </ol>
                    </div>
                  </div>

                  <ul className="m-bullets type-disc">
                    <li className="c-color-strong"><em>[자금현수송 신청] 부점장 부재 시 반드시 부점장과 연락 후 승인내용을 입력해주세요.</em></li>
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
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)결재요청 [wdth-70p]</span>
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

export default CMP001501P;
