/**
 * @description TEST > (M)공통 파일업로드
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

function FileUploads() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

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
      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(M)공통 파일업로드</span>
            </h1>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <Splitter gutterSize={0} className="o-grid">
            <SplitterPanel minSize={17.5} className="column">

              ...

            </SplitterPanel>

            <SplitterPanel minSize={17.5} className="column">

              <div className="o-section">
                <div className="m-header">
                  <h3 className="o-heading level3"><span className="label">파일업로드 예시</span></h3>
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
                            <Label label={`HEAD`} require={false} />
                          </th>
                          <td colSpan={1}>
                            DATA
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`...`} require={false} />
                          </th>
                          <td colSpan={1}>
                            ...
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`첨부파일 (단일)`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input is-file mode-required">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                  <span className="inner-binds">
                                    <ImageButton label="초기화" icon="remove" />
                                  </span>
                                </div>
                                <div className="binds">
                                  <input type="file" className="overlay" />
                                  <CommonButton label="파일선택" className="_normal" />
                                </div>
                                <div className="binds">
                                  <CommonButton label="파일다운" className="_normal" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`첨부파일 (단일)(다운로드)`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-string-binds">
                              <span className="string o-file">
                                <span className="name">업무분장관리</span>
                                <span className="ext">.xlsx</span>
                              </span>
                              <span className="binds justify-end"><CommonButton label="파일다운" className="_normal" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`첨부파일 예`} require={true} />
                          </th>
                          <td colSpan={1}>

                            <div className="o-section">
                              <div className="m-header">
                                <div className="o-limit type-file">
                                  <span className="head">파일크기</span>
                                  <span className="data">
                                    <em className="value">1MB</em>
                                    <span className="sep">/</span>
                                    <span className="limits" aria-label="전체 업로드 제한용량">10MB</span>
                                  </span>
                                </div>

                                <div className="m-binds">
                                  <div className="group">
                                    <CommonButton label="파일선택" className="_normal" />
                                    <CommonButton label="파일삭제" className="_normal" />
                                    <CommonButton label="파일다운" className="_normal" />
                                  </div>
                                </div>
                              </div>

                              <div className="main rows-body-2i">
                                <div className="o-grid-table type-upload js_dragovered">{/* [하드코딩] 드래그오버 시 'js_dragovered' 클래스네임 추가 { @DEV } */}
                                  <div className="table-container">
                                    <table>
                                      <colgroup>
                                        <col className="wdth-10" />
                                        <col className="wdth-auto" style={{ minWidth: 'calc(var(--rem) * 180)' }} />
                                        <col style={{ minWidth: 'calc(var(--rem) * 72)' }} />
                                      </colgroup>

                                      <thead>
                                        <tr>
                                          <th><InputCheck label="전체​선택" labelHidden /></th>
                                          <th>파일명</th>
                                          <th>파일크기</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr>
                                          <td colSpan={3}>
                                            <div className="o-attach">
                                              <div className="summary">
                                                <span className="wbr">첨부할 파일을 여기에 끌어다 놓거나, </span>
                                                <span className="wbr">파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</span>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>

                                      <tbody>
                                      {[...Array(24)].map((e, idx) => (
                                        <tr key={idx}>
                                          <td><InputCheck label="선택" labelHidden /></td>
                                          <td className="g-start">
                                            <span className="o-file">
                                            {
                                              idx === 1 ?
                                              <span className="name">긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명</span>
                                              :
                                              <span className="name">파일명</span>
                                            }
                                              <span className="ext">.xlsx</span>
                                            </span>
                                          </td>
                                          <td className="g-end">1023KB</td>
                                        </tr>
                                      ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`첨부파일 예`} require={true} />
                          </th>
                          <td colSpan={1}>

                            <div className="o-section">
                              <div className="m-header">
                                <div className="o-limit type-file">
                                  <span className="head">파일크기</span>
                                  <span className="data">
                                    <em className="value">1MB</em>
                                    <span className="sep">/</span>
                                    <span className="limits" aria-label="전체 업로드 제한용량">10MB</span>
                                  </span>
                                </div>

                                <div className="m-binds">
                                  <div className="group">
                                    <CommonButton label="파일선택" className="_normal" />
                                    <CommonButton label="파일삭제" className="_normal" />
                                    <CommonButton label="파일다운" className="_normal" />
                                  </div>
                                </div>
                              </div>

                              <div className="main rows-body-3i">
                                <div className="o-grid-table type-upload js_dragovered">{/* [하드코딩] 드래그오버 시 'js_dragovered' 클래스네임 추가 { @DEV } */}
                                  <div className="table-container">
                                    <table>
                                      <colgroup>
                                        <col className="wdth-10" />
                                        <col className="wdth-auto" style={{ minWidth: 'calc(var(--rem) * 180)' }} />
                                        <col style={{ minWidth: 'calc(var(--rem) * 72)' }} />
                                      </colgroup>

                                      <thead>
                                        <tr>
                                          <th><InputCheck label="전체​선택" labelHidden /></th>
                                          <th>파일명</th>
                                          <th>파일크기</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr>
                                          <td colSpan={3}>
                                            <div className="o-attach">
                                              <div className="summary">
                                                <span className="wbr">첨부할 파일을 여기에 끌어다 놓거나, </span>
                                                <span className="wbr">파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</span>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>

                                      <tbody>
                                      {[...Array(24)].map((e, idx) => (
                                        <tr key={idx}>
                                          <td><InputCheck label="선택" labelHidden /></td>
                                          <td className="g-start">
                                            <span className="o-file">
                                            {
                                              idx === 1 ?
                                              <span className="name">긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명</span>
                                              :
                                              <span className="name">파일명</span>
                                            }
                                              <span className="ext">.xlsx</span>
                                            </span>
                                          </td>
                                          <td className="g-end">1023KB</td>
                                        </tr>
                                      ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`이미지​첨부 예`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-flex-list">
                              <div className="m-upload-image type-choose">{/* .m-upload-image.type-choose { @DEV } */}
                                <div className="main">
                                  <div className="header">
                                    <strong className="label">앞면</strong>
                                  </div>
                                  <div className="o-object style-fit"><img src={require("assets/images/common/img_empty-image.png")} alt="" /></div>
                                </div>
                                <div className="binds">
                                  <CommonButton label="파일삭제" className="_normal" />
                                  <CommonButton label="파일선택" className="_normal" />
                                </div>
                              </div>

                              <div className="m-upload-image type-choose">{/* .m-upload-image.type-choose { @DEV } */}
                                <div className="main">
                                  <div className="header">
                                    <strong className="label">뒷면</strong>
                                  </div>
                                  <div className="o-object style-fit"></div>
                                </div>
                                <div className="binds">
                                  <CommonButton label="파일삭제" className="_normal" />
                                  <CommonButton label="파일선택" className="_normal" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`이미지​첨부 예`} require={true} />
                          </th>
                          <td colSpan={1}>
                            <div className="m-flex-list">
                              <div className="m-upload-image">
                                <div className="main">
                                  <div className="header">
                                    <strong className="label">앞면</strong>
                                  </div>
                                  <div className="o-object style-fit">
                                    <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                    <ImageButton label="열쇠​이미지​보기" icon="maximize" size={50} />
                                  </div>
                                </div>
                                <div className="binds">
                                  <CommonButton label="파일선택" className="_normal" />
                                  <CommonButton label="파일다운" className="_normal" />
                                </div>
                              </div>

                              <div className="m-upload-image">
                                <div className="main">
                                  <div className="header">
                                    <strong className="label">뒷면</strong>
                                  </div>
                                  <div className="o-object style-fit">
                                    <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                                    <ImageButton label="열쇠​이미지​보기" icon="maximize" size={50} />
                                  </div>
                                </div>
                                <div className="binds">
                                  <CommonButton label="파일선택" className="_normal" />
                                  <CommonButton label="파일다운" className="_normal" />
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

            </SplitterPanel>
          </Splitter>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default FileUploads;
