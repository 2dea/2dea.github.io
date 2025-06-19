/**
 * @description 자금현수송 > 외화정사 > 일일실적관리 > 실적내역  ~ (LP)위조및변조화폐신고서등록
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

function FMTFC0201P01() {
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
        className="layer-wrap wdth-60p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">위조및변조화폐신고서등록</span></h3>}
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <div className="o-section">
                <div className="m-header">
                  <h4 className="o-heading level2"><span className="label">위조 및 변조화폐 신고</span></h4>
                </div>

                <div className="main">
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head auto" style={{ '--em': 2 } as React.CSSProperties} />
                        <col className="head" />
                        <col className="data" />
                        <col className="head" />
                        <col className="data" />
                        <col className="head" />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={2}>
                            <Label label={`수신기관`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="m-checks">
                              <InputCheck label="남대문 경찰서" defaultChecked />
                              <InputCheck label="한국은행 본부" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={2}>
                            <Label label={`신고직원`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <AutoComplete className="bind" placeholder="" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                  <span className="inner-binds">
                                    <ImageButton label="초기화" icon="remove" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`발견일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-form _input type-date wdth-50">
                              <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                              <i aria-hidden="true"></i>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`발견경위`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select wdth-40">
                                  <XDropdown appendTo={'self'} className="bind" />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="o-form _input">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={2}>
                            <Label label={`종류`} require={false} />
                          </th>
                          <td colSpan={1}>
                            CNY 100
                          </td>

                          <th colSpan={1}>
                            <Label label={`기번호`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-50">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="binds type-tooltip">
                                  <Tooltip className="o-tooltip" target="#FMTFC0101P01-tooltip-10" position="top">
                                    예 : 1234567가가가, AA123456A
                                  </Tooltip>
                                  <ImageButton id="FMTFC0101P01-tooltip-10" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`수량(장)`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input wdth-50 g-end">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th rowSpan={7} colSpan={1}>
                            <Label label={`위조​방식`} require={false} />
                          </th>
                          <th colSpan={1}>
                            <Label label={`위조방법`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="m-checks">
                              <InputCheck label="일반프린터" />
                              <InputCheck label="레이저프린터" />
                              <InputCheck label="복사기" />
                              <InputCheck label="인쇄기" />
                              <InputCheck label="그림" />
                              <InputCheck label="기타" />
                              <div className="o-field wdth-auto">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`숨은그림`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_10" label="없음" />
                              <InputRadio name="RADIO_10" label="있음" />
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`숨은그림 방법`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`숨은그림 이미지`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`은선`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_20" label="없음(이미지복사)" />
                              <InputRadio name="RADIO_20" label="있음" />
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`은선 방법`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select wdth-40">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="o-form _input">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`은선 재료`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select wdth-40">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                                <div className="o-form _input">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`홀로그램`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_30" label="없음(이미지복사)" />
                              <InputRadio name="RADIO_30" label="있음" />
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`홀로그램 방법`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`홀로그램 재질`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select">
                                  <XMultiSelect appendTo={'self'} className="bind" disabled />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`색변환잉크`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_40" label="앞면 하단 숫자의 색이 변함" />
                              <InputRadio name="RADIO_40" label="변하지 않음" />
                              <InputRadio name="RADIO_40" label="기타" />
                              <div className="o-field wdth-auto">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`형광물질`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="m-checks">
                              <InputRadio name="RADIO_50" label="자외선으로 비춰 보았을 때 형광이 나타남" />
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="위치를 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                              <InputRadio name="RADIO_50" label="나타나지 않음" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`합지여부`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="m-checks">
                              <InputCheck label="앞면위폐" />
                              <InputCheck label="앞면일부위폐" />
                              <InputCheck label="뒷면위폐" />
                              <InputCheck label="뒷면일부위폐" />
                              <InputCheck label="기타" />
                              <div className="o-field wdth-auto">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={2}>
                            <Label label={`특이사항`} require={false} />
                          </th>
                          <td colSpan={5}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
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

            </div>
          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <CommonButton label="취소" className="_cancel" />
              <CommonButton label="결재요청" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)위조및변조화폐신고서등록 [wdth-60p(w1150)]</span>
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

export default FMTFC0201P01;
