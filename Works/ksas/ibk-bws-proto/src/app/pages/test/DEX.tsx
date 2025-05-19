/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
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

function DEX() {
  // 2025-05-21
  // ppt 79:
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품' }, { label: '본부부서조달관리(총무부 외)' }, { label: '(706520)(총무부 외) 중요용지 조달신청 접수' }];

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
      {
      /* 작업 메모: 2025-05-22 수 : 기획서 용도품계정관리	: HSPSA0101M 는 아직 컴펌 노노

      */

      }
      {
      /* 자주사용하는 텍스트 메모

        신세계백화점상품권10만원권

      */

      }

      {
      /* 자주사용하는 팝업 너비

       className="layer-wrap wdth-40

      */

      }

      <div className="roles" data-div-role="0">
        <div className="div-header">
          HI
        </div>
        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">
              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`구분`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`InputCheck`} require={false} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputCheck label="선택" labelHidden defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="o-field colspan-2">
                    <Label label={`기준일자 [결재요청전]`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`재고유무`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`재고구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`출급번호/품목명`} require={false} />
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
                    <Label label={`일련번호포함`} require={true} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputCheck label="선택" labelHidden defaultChecked />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>
            </div>
            <div className="o-section">
              <div className="m-header">
                <h2 className="o-heading level2"><span className="label">코드도메인</span></h2>

                <div className="m-binds">
                  <div className="group">
                    <CommonButton label="행추가" className="_normal" />
                    <CommonButton label="행삭제" className="_normal" />
                    <CommonButton label="취소" className="_normal" />
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
                        <col className="wdth-auto" />
                      </colgroup>

                      <thead className="p-datatable-thead">
                        <tr>
                          <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">한글명</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">설명</span></div></th>
                        </tr>
                      </thead>

                      <tbody className="p-datatable-tbody">
                        <tr className="p-datatable-emptymessage">
                          <td colSpan={7}>등록된 데이터가 없습니다.</td>
                        </tr>
                      </tbody>

                      <tbody className="p-datatable-tbody">
                      {[...Array(3)].map((e, idx) => (
                        <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                          <td><InputCheck label="선택" labelHidden /></td>
                          <td>{idx === 15 - 1 ? <Icon icon="grid-added" /> : idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 추가된 행 .o-icon._grid-added 순번 대체 | 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                          <td>
                            신세계백화점상품권10만원권
                          </td>
                          <td>
                            {idx === 15 - 1 ?
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-40">
                                  <InputText placeholder="" value="AM123" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                            : `AM123`}
                          </td>
                          <td>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-70">
                                  <InputText placeholder="" value="임차시설물폐쇠구분코드" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select wdth-30">
                                  <XDropdown appendTo={document.body} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-70">
                                  <InputText placeholder="내용을 입력해주세요" value="동산에 대한 요청의 상태를 동산에 대한 요청의 상태를 동산에 대한 요청의 상태를" className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
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
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default DEX;
