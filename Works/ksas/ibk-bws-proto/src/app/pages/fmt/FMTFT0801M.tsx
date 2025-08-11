/**
 * @description 자금현수송 > 외화현수송 > 외국통화견양집
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

function FMTFT0801M() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '자금현수송' }, { label: '외화현수송' }, { label: '외국통화견양집' }];

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
          <div className="main">
            <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">외국통화견양집</span>

                <FavoriteDiv />
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
                <CommonButton label="수정" className="_solid-primary" />
                <CommonButton label="등록" className="_solid-primary" />
              </div>
            </div>

          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={false} heading="문의" divName="안전관리팀" telNumber="0000" asideLabel="반드시 조회 후 신청해주세요." />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`통화코드`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`권종명`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                  <h2 className="o-heading level2"><span className="label">화폐목록</span></h2>
                </div>

                <div className="card-list">
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name">매입 가능</span>
                        <Icon icon="status-range-80" />
                      </li>
                      <li>
                        <span className="name no">매도 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name alert">매입 자제</span>
                        <Icon icon="status-range-50" />
                      </li>
                      <li>
                        <span className="name no">매입 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name">매입 가능</span>
                        <Icon icon="status-range-80" />
                      </li>
                      <li>
                        <span className="name no">매도 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name alert">매입 자제</span>
                        <Icon icon="status-range-50" />
                      </li>
                      <li>
                        <span className="name no">매입 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name">매입 가능</span>
                        <Icon icon="status-range-80" />
                      </li>
                      <li>
                        <span className="name no">매도 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      {/* <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" /> */}
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name alert">매입 자제</span>
                        <Icon icon="status-range-50" />
                      </li>
                      <li>
                        <span className="name no">매입 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" />
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name">매입 가능</span>
                        <Icon icon="status-range-80" />
                      </li>
                      <li>
                        <span className="name no">매도 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
                  </div>
                  <div className="item">
                    <div className="o-object style-fit">
                      {/* <img src={require("assets/images/temp/FMTFT0801P02_010.png")} alt="" /> */}
                      <ImageButton label="화폐​이미지​보기" icon="maximize" size={50} />
                    </div>
                    <ul className="info-area">
                      <li>
                        <span className="name alert">매입 자제</span>
                        <Icon icon="status-range-50" />
                      </li>
                      <li>
                        <span className="name no">매입 금지</span>
                        <Icon icon="status-range-20" />
                      </li>
                    </ul>
                    <p className="text-area">
                      주의사항을 여기에 표시해줍니다. 주의사항은 외화통화등록/수정 팝업에서 작성할 수 있으며 개행을 위한 예시입니다.개행을 위한 예시입니다. 예시입니다
                    </p>
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

export default FMTFT0801M;
