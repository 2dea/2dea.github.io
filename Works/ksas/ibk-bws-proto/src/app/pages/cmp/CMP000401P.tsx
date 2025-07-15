/**
 * @description 공통 ~ (LP)이미지업로드
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

function CMP000401P() {
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
        className="layer-wrap case-upload-image wdth-40p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">이미지업로드</span></h3>}
        resizable={false}/* resizable={false} { @DEV } */
      >
        <div className="div-container">
          <div className="o-grid">
            <div className="column">

              <form className="m-upload-file">
                <div className="o-attach js_dragovered">{/* [하드코딩] 드래그오버 시 'js_dragovered' 클래스네임 추가 { @DEV } */}
                  <div className="binds">
                    <CommonButton label="파일선택" size={70} className="_choose" />
                  </div>
                  <div className="summary">
                    <span className="wbr">첨부할 파일을 여기에 끌어다 놓거나, </span>
                    <span className="wbr">파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</span>
                  </div>
                </div>
              </form>

              <div className="o-section type-upload-image">
                <div className="m-header">
                  <div className="m-checks justify-start">
                    <InputCheck label="전체선택" />
                  </div>

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
                      <CommonButton label="파일삭제" className="_normal" />
                      <CommonButton label="파일다운" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="main">
                  <div className="m-image-list type-upload">
                    <ul>
                      <li>
                        <div className="card">
                          <InputCheck label="선택" labelHidden />

                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1743001025958-19eca24afd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          </div>

                          <div className="caption">
                            <span className="primary o-file">
                              <span className="name">image</span>
                              <span className="ext">.jpg</span>
                            </span>
                            <span className="secondary o-limit type-file">
                              <span className="head">파일크기</span>
                              <span className="data">
                                <em className="value">1023KB</em>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card">
                          <InputCheck label="선택" labelHidden />

                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1741606552241-fbd67e574f7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          </div>

                          <div className="caption">
                            <span className="primary o-file">
                              <span className="name">image_긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명긴파일명</span>
                              <span className="ext">.jpeg</span>
                            </span>
                            <span className="secondary o-limit type-file">
                              <span className="head">파일크기</span>
                              <span className="data">
                                <em className="value">9MB</em>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card">
                          <InputCheck label="선택" labelHidden />

                          <div className="image"></div>

                          <div className="caption">
                            <span className="primary o-file">
                              <span className="name">image</span>
                              <span className="ext">.jpg</span>
                            </span>
                            <span className="secondary o-limit type-file">
                              <span className="head">파일크기</span>
                              <span className="data">
                                <em className="value">1KB</em>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      {[...Array(4)].map((e, idx) => (
                      <li key={idx}>
                        <div className="card">
                          <InputCheck label="선택" labelHidden />

                          <div className="image">
                            <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                          </div>

                          <div className="caption">
                            <span className="primary o-file">
                              <span className="name">image</span>
                              <span className="ext">.png</span>
                            </span>
                            <span className="secondary o-limit type-file">
                              <span className="head">파일크기</span>
                              <span className="data">
                                <em className="value">1KB</em>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      ))}
                    </ul>
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
              <CommonButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)이미지업로드 [wdth-40p(w770)][resizable="false"]</span>
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

export default CMP000401P;
