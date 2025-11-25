/**
 * @description 공통 ~ (LP)공지사항
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

function CMP000701P() {
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
        className="layer-wrap case-notice wdth-auto" /* auto[Images Default] | 20% | 25% | 40%[Texts Default] | 50% | 60% | 70%  */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={false}
        // resizable={false}
        // draggable={false}
        // footer={<></>}
        header={
          <>
            <h3 className="o-heading"><span className="label">공지사항</span></h3>
            <div className="config m-checks">
              <InputCheck label="오늘 하루동안 열지 않기" />
              {/* <InputCheck label="일주일동안 열지 않기" /> */}
            </div>
          </>
        }
      >
        <div className="div-container _small">

          <div className="o-grid">
            <div className="column">

              <div className="m-noticeview">
                <div className="notice-caption o-board type-b">
                  <h4 className="subject"><span className="label">공지사항 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목</span></h4>
                  <ul className="copyright">
                    <li>
                      <strong className="head">등록부서</strong>
                      <span className="data">프로세스혁신</span>
                    </li>
                    <li>
                      <strong className="head">등록자</strong>
                      <span className="data">홍길동</span>
                    </li>
                    <li>
                      <strong className="head">등록일자</strong>
                      <span className="data">2025-04-08</span>
                    </li>
                    <li>
                      <strong className="head">조회수</strong>
                      <span className="data">9</span>
                    </li>
                  </ul>
                </div>

                <div className="notice-image o-view-image">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/%EC%A0%84%EC%9E%90%EB%AC%B8%EC%84%9C%EC%9C%A0%ED%86%B5%EC%A6%9D%EB%AA%85%EC%84%9C.jpg/640px-%EC%A0%84%EC%9E%90%EB%AC%B8%EC%84%9C%EC%9C%A0%ED%86%B5%EC%A6%9D%EB%AA%85%EC%84%9C.jpg" alt="" /> */}
                  {/* <img src={require("assets/images/media/STMKY0201P03_010.png")} alt="" /> */}
                  {/* <img src={require("assets/images/media/BEXPM0101P01_010.png")} alt="" /> */}
                  {/* <img src={require("assets/images/media/STMPR0101P02_010.png")} alt="" /> */}
                  {/* <img src={require("assets/images/temp/FMTCT0201P02_010.jpg")} alt="" /> */}
                  {/* <img src={require("assets/images/temp/BSSCR0301M_010.png")} alt="" /> */}
                  {/* <img src={require("assets/images/tutorial/CMM000301M_010.png")} alt="" /> */}
                  <img src={require("assets/images/common/img_empty-image.png")} alt="" />
                </div>

                <div className="notice-contents">
                  냉무
                </div>

                <div className="notice-link o-board type-c style-fit">
                  <div className="o-notice">
                    <span className="icons">
                      <Icon icon="globe-portal" />
                    </span>

                    <div className="main links">
                      <a href="javascript:" target="_blank" className="o-link _normal">http://test.ibk.co.kr/q=9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d&amp;seq=9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h5 className="o-heading level3"><span className="label">첨부파일</span></h5>
                </div>

                <div className="main">
                  <div className="m-file-list type-upload">
                    <ul>
                      {[...Array(2)].map((e, idx) => (
                      <li key={idx}>
                        <div className="card">
                          <div className="m-file">
                            <span className="o-file">
                              <span className="name">업무분장관리</span>
                              <span className="ext">.xlsx</span>
                            </span>
                            <span className="o-limit type-file">
                              <span className="head">파일크기</span>
                            </span>
                          </div>

                          <div className="binds">
                            <ImageButton label="다운로드" icon="download" />
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
      </Dialog>

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">(P)공지사항 [case-viewimage wdth-auto]</span>
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

export default CMP000701P;
