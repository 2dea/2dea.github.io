/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)관련화면매핑
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import XDropdown from 'app/shared/modules/XDropdown';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function ADMAU0201P02() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const overlayPan = useRef(null);

  // InputText
  const [value, setValue] = useState<string>('');

  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
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
        className="layer-wrap wdth-40p"
        visible={visible}
        style={{}}
        onHide={() => {if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">관련화면매핑</span></h3>}
      >
        <div className="o-grid">
          <div className="column">

            <form className="m-filter-form">
              <div className="fieldset">

                <div className="o-field">
                  <Label label={`화면ID`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <Label label={`화면명`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <Label label={`매핑여부`} />
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

            <div className="o-section">
              <div className="m-header">
                <h4 className="o-heading level2"><span className="label">메뉴정보</span></h4>
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
                        <th colSpan={3}>
                          <Label label={`메뉴ID`} require={false} />
                        </th>
                        <td colSpan={3}>
                          AABB00003
                        </td>

                        <th colSpan={3}>
                          <Label label={`메뉴명`} require={false} />
                        </th>
                        <td colSpan={3}>
                          원화현수송신청
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>

          </div>
        </div>

        <div className="o-grid">
          <div className="column">

            <div className="o-section">
              <div className="m-header">
                <h4 className="o-heading level2"><span className="label">화면내역</span></h4>

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
                  <div className="p-datatable-wrapper">
                    <table className="p-datatable-table p-datatable-scrollable-table">
                      <colgroup>
                        <col className="wdth-10" />
                        <col className="wdth-10" />
                        <col />
                        <col className="wdth-auto" />
                        <col />
                        <col />
                      </colgroup>

                      <thead className="p-datatable-thead">
                        <tr>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선택</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">매핑여부</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                        </tr>
                      </thead>

                      <tbody className="p-datatable-tbody">
                        <tr className="p-datatable-emptymessage">
                          <td colSpan={6}>등록된 데이터가 없습니다.</td>
                        </tr>
                      </tbody>

                      <tbody className="p-datatable-tbody">
                      {[...Array(24)].map((e, idx) => (
                        <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                          <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                          <td>{idx + 1}</td>
                          <td>AABB00001M00</td>
                          <td className="g-start">원화현수송신청</td>
                          <td>N</td>
                          <td><span className="o-digit type-date">2024-09-16</span></td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-divider">
              <div className="m-binds">
                <div className="group">
                  <CommonButton label="관련화면매핑" icon="du-down" className="_normal" />
                </div>
              </div>
            </div>

            <div className="o-section">
              <div className="m-header">
                <h5 className="o-heading level3"><span className="label">관련화면 매핑정보</span></h5>
              </div>

              <div className="main _primary rows-body-3i">
                <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                <div className="o-grid-table p-datatable">
                  <div className="p-datatable-wrapper">
                    <table className="p-datatable-table p-datatable-scrollable-table">
                      <colgroup>
                        <col />
                        <col className="wdth-auto" />
                      </colgroup>

                      <thead className="p-datatable-thead">
                        <tr>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                          <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                        </tr>
                      </thead>

                      <tbody className="p-datatable-tbody">
                        <tr className="p-datatable-emptymessage">
                          <td colSpan={2}>매핑된 화면이 없습니다.</td>
                        </tr>
                      </tbody>

                      <tbody className="p-datatable-tbody">
                      {[...Array(24)].map((e, idx) => (
                        // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                        <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                          <td>AABB00001M00</td>
                          <td className="g-start">
                            <div className="o-with-bind">
                              <span className="main">원화현수송신청_관련화면 01</span>
                              <span className="binds">
                                <ImageButton label="삭제" icon="delete" />
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="m-footer">
                <ul className="m-bullets type-disc">
                  <li>메뉴에 매핑할 관련화면을 선택해주세요.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds">
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
              <span className="label">(P)관련화면매핑 [wdth-40p(w770)]</span>
            </h1>
          </div>
        </div>

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

export default ADMAU0201P02;
