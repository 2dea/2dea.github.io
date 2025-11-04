/**
 * @description 공통·결재 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
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

function TMPL() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '중요용지·용도품' }, { label: '본부부서조달관리(총무부 외)' }, { label: '(706520)(총무부 외) 중요용지 조달신청 접수' }];

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
      {/* <Dialog className="o-loading-layer" baseZIndex={2000} visible={visible} onHide={() => { if (!visible) return; setVisible(false); }} content={({ hide }) => (
        <>
          <div className="m-loading">
            <i className="o-loading style-spinner" aria-hidden="true"></i>
            <p className="caption">
              <strong className="label">Loading...</strong>
            </p>
          </div>
        </>
      )}></Dialog> */}

      <div className="roles" data-div-role="0">
        <div className="div-header">
          <div className="main">
            <BreadCrumb model={paths} home={{ icon: 'o-icon _breadcrumb-home' }} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">(총무부 외) 중요용지 조달신청 접수</span>

                <FavoriteDiv />
              </h1>

              <div className="asides">
                <div className="consults">

                  <div className="m-consult">
                    <span className="header">
                      <strong className="heading">안전문의</strong>
                    </span>
                    <span className="bodies">
                      <span className="o-consult"><strong className="head">안전관리팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000, 1234</span></span></span>
                    </span>
                  </div>

                  <div className="m-consult">
                    <span className="header">
                      <strong className="heading">권한문의</strong>
                    </span>
                    <span className="bodies">
                      <span className="o-consult"><strong className="head">프로세스혁신부</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">1234</span></span></span>
                      <span className="o-consult"><strong className="head">IT정보부</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000</span></span></span>
                    </span>
                  </div>

                </div>

                <div className="comments">
                  <span className="o-icon-text">
                    <Icon icon="consult-alert" />
                    <em className="label">반드시 조회 후 신청해주세요.</em>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="m-binds type-start">
            <div className="group">
              <CommonButton label="화면잠금" icon="lock" className="_normal" />
              <CommonButton label="도움말" className="_normal" icon="help" />
            </div>
          </div> */}

          <div className="binds">
            <div className="m-binds type-start">
              <div className="group">
                <CommonButton label="알림전송" className="_lined-secondary" />
                <CommonButton label="공지사항" className="_lined-secondary" />
                <CommonButton label="결재선변경관리" className="_lined-secondary" />
                <CommonButton label="결재바로가기" className="_lined-secondary" />
              </div>

              <div className="group _assistive">
                <CommonButton label="도움말" className="_normal" icon="help" />
              </div>
            </div>

            <div className="m-binds type-end">
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="당일결정내역출력" className="_texted" />
                  <CommonButton label="결정출력" className="_texted" />
                  <CommonButton label="손상권출력" className="_texted" />
                  <CommonButton label="신청출력" className="_texted" />
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="업무지원반려" className="_lined-primary" />
                <CommonButton label="업무지원결정" className="_lined-primary" />
                <CommonButton label="삭제" className="_delete" />
                <CommonButton label="취소" className="_cancel" />
                <CommonButton label="결재요청" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* Consults { @DEV } --> */}
        <ConsultsDiv visible={true} heading="문의" divName="안전관리팀" telNumber="7463, 0000" asideLabel="반드시 조회 후 신청해주세요." /* asideIcon="consult-alert" */ />
        {/* <!-- // Consults { @DEV } --> */}

        {/* <!-- /* Contents { @DEV } --> */}
        <Tabs className="div-contents">
          <div className="m-tab type1">
            <TabList className="lists">
              <Tab className="link"><span className="label">메뉴관리</span></Tab>
              <Tab className="link" aria-selected="true"><span className="label">화면관리</span></Tab>
              <Tab className="link"><span className="label">팝업관리</span></Tab>
              <Tab className="link"><span className="label">권한관리</span></Tab>
            </TabList>
          </div>

          <TabPanel>
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

                <div className="o-board type-b style-fit">
                  .o-board.type-b.style-fit
                </div>

                <div className="o-board type-c style-fit">
                  <div className="o-notice">
                    <span className="icons">
                      <Icon icon="alert-octagram" />
                    </span>

                    <div className="main">
                      <strong className="r-strong">[관리자공지]</strong> 처리완료를 통해 대금정산기본의 처리상태를 완료상태로 변경
                      <span className="inline-binds"><a href="javascript:" className="o-link texted-button _primary">바로가기<Icon icon="link" /></a></span>
                    </div>

                    {/* <div className="binds">
                      <a href="javascript:" className="o-link texted-button _primary">바로가기<Icon icon="link" /></a>
                    </div> */}
                  </div>
                </div>

                <div className="o-board type-a style-fit">
                  <ul className="m-bullets type-disc">
                    {/* <li>문의 : <span className="o-consult"><strong className="head">안전관리팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">7463, 0000</span></span></span></li>
                    <li className="c-color-strong"><em>품목별 자동배송 기준의 월평균 사용량은 최근 3개월 월평균 사용량을 의미</em></li> */}
                    <li className="c-color-strong"><em>자동배송 품목 등록 및 제외는 부점장 결재 완료 후 반영되므로 결재요청 필수</em></li>
                    <li>기한 내 등록이 어려운 경우, 담당부서로 사전에 문의 부탁드립니다. <span className="o-consult brackets-round">(<strong className="head">비상계획팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">0000</span></span>)</span></li>
                  </ul>
                </div>

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field colspan-5">
                      <Label label={`InputCheck`} require={false} />
                      <div className="fields">
                        <div className="m-checks">
                          {/* <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Default</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Checked</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="checkbox" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled+Checked</span>
                          </label> */}
                          {/*
                          <label className="o-check">
                            <input type="checkbox" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">체크박스 Disabled+Indeterminate</span>
                          </label>

                          <label className="o-check">
                            <input type="checkbox" title="" value="" className="bind" onBlur={(e) => e.target.indeterminate = 'true'} /><i aria-hidden="true"></i>
                            <span className="label">체크박스 Indeterminate</span>
                          </label>
                          */}

                          <InputCheck label="Default" />
                          <InputCheck label="Checked" defaultChecked />
                          <InputCheck label="Disabled" disabled />
                          <InputCheck label="Disabled+Checked" disabled defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-5">
                      <Label label={`InputRadio`} require={false} />
                      <div className="fields">
                        <div className="m-checks">
                          {/* <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:10" title="" value="" className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Default</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:10" title="" value="" defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Checked</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:20" title="" value="" disabled className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled</span>
                          </label>

                          <label className="o-check type-swoosh">
                            <input type="radio" name="RADIO:20" title="" value="" disabled defaultChecked className="bind" /><i aria-hidden="true"></i>
                            <span className="label">Disabled+Checked</span>
                          </label> */}

                          <InputRadio name="RADIO:10" label="Default" />
                          <InputRadio name="RADIO:10" label="Checked" defaultChecked />

                          <InputRadio name="RADIO:20" label="Disabled" disabled />
                          <InputRadio name="RADIO:20" label="Disabled+Checked" disabled defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`인도부점`} require={true} append={
                        <>
                          <div className="binds type-tooltip">
                            <Tooltip className="o-tooltip" target="#HSPHS1701P01-tooltip-10" position="top">
                              해당날짜 결재요청 가능
                            </Tooltip>
                            <ImageButton id="HSPHS1701P01-tooltip-10" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                          </div>
                        </>
                      } />
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
                      <Label label={`툴팁​도움말`} require={false} append={
                        <>
                          <div className="binds type-tooltip">
                            <Tooltip className="o-tooltip" target="#HSPHS1701P01-tooltip-20" position="left">
                              해당날짜 결재요청 가능 <br /> 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용 긴 내용
                            </Tooltip>
                            <ImageButton id="HSPHS1701P01-tooltip-20" label="툴팁​도움말" title="" icon="tooltip-help" className="g-cursor-help" />
                          </div>
                        </>
                      } />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)}  tooltip={'영대문자 6자 내로 입력해주세요' as any} tooltipOptions={{ position: 'bottom', event: 'both', className: 'o-tooltip style-alert' }} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`인도구분`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown placeholder="선택선택 선택" appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-4">
                      <Label label={`기간`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>

                        <div className="o-form _input type-date wdth-50">
                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                          <i aria-hidden="true"></i>
                        </div>
                        <span className="seps type-tilde">~</span>
                        <div className="o-form _input type-date wdth-50">
                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-2">
                      <Label label={`.wdth-auto ~ .wdth-n`} require={false} />
                      <div className="fields">
                        <div className="o-form _select wdth-auto">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                        <div className="o-form _input type-date wdth-50">
                          <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field colspan-4">
                      <Label label={`.basis-pass`} require={true} />
                      <div className="fields basis-pass">
                        <div className="o-form _select mode-required wdth-50">
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

                  </div>

                  <div className="binds">
                    <CommonButton label="조회" className="_inquire" />
                  </div>
                </form>

                <div className="o-board type-a style-fit">
                  <div className="o-field">
                    <Label label={`감사자알림`} require={false} />
                    <div className="fields">
                      <div className="o-form _input mode-disabled-placeholder">
                        <InputText placeholder="감사자지정 구분을 '지정'으로 한 후 조회 시 활성화됩니다" value="중요용지 폐기 감사자로 등록되었습니다. [감사/소각완료] 등록 부탁드립니다." className="bind" onChange={(e) => setValue(e.target.value)} disabled />
                        <i aria-hidden="true"></i>
                      </div>
                      <div className="binds">
                        <CommonButton label="발송" className="_solid-secondary" disabled />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-board type-b">
                  <dl className="m-defines">
                    <div className="group">
                      <dt className="head">신청부점</dt>
                      <dd className="data">
                        [0034] 을지로
                      </dd>
                      <dd className="data">
                        2025-01-21
                      </dd>
                    </div>

                    <div className="group">
                      <dt className="head">신청자</dt>
                      <dd className="data">
                        [000000] 홍길동
                      </dd>
                    </div>

                    <div className="group">
                      <dt className="head">신청연도</dt>
                      <dd className="data">
                        <em className="o-chip var-lined-01"><span className="label">2025년</span></em>
                      </dd>
                    </div>

                    <div className="group">
                      <dt className="head">신청상태</dt>
                      <dd className="data">
                        <em className="o-chip var-lined-01"><span className="label">신청마감</span></em>
                      </dd>
                    </div>

                    <div className="group">
                      <dt className="head">고객정보입력</dt>
                      <dd className="data">
                        <div className="m-checks">
                          <InputRadio name="RADIO_20" label="신청" defaultChecked />
                          <InputRadio name="RADIO_20" label="미신청" />
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h2 className="o-heading level2">
                      <span className="label">양식샘플</span>
                      <InputCheck label="사용" labelHidden />
                    </h2>

                    {/* <div className="m-checks">
                      <InputCheck label="사용" labelHidden />
                    </div> */}

                    <div className="o-helper style-strong">
                      <em className="label">헬퍼텍스트</em>
                    </div>

                    <div className="m-legend" aria-label="범례">
                      <span className="o-legend type-legend">
                        <em className="o-legend-tag type-bullet theme-key-01"><span className="tag">(당행)</span></em>
                        <span className="label">당행</span>
                      </span>

                      <span className="o-legend type-legend">
                        <em className="o-legend-tag type-bullet theme-key-00"><span className="tag">(외부)</span></em>
                        <span className="label">외부</span>
                      </span>
                    </div>

                    <div className="o-legend type-helper style-normal">
                      <em className="label"><strong className="emph">도착예정일자: <span className="g-bold c-color-point">YYYY-MM-DD</span></strong> 신청일자에 실물을 발송한 경우에 한함</em>
                    </div>

                    <div className="o-legend type-helper style-strong">
                      <em className="label">우측 헬퍼텍스트(강조)</em>
                    </div>

                    <div className="o-legend type-unit style-normal">
                      <em className="label">(단위: 원)</em>
                    </div>

                    <div className="o-toggles type-tab">
                      <CommonButton label="달력" className="is-selected" icon="calendar" />
                      <CommonButton label="목록" className="" icon="menu-alt" />
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="신규" className="_create" />
                      </div>
                    </div>
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
                        </colgroup>

                        <tbody>
                          {/* <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <input placeholder="" value="대결대결대결대결대결대결대결대결대결대결대결대결대결대결" className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <select className="bind">
                                      <option>대결대결대결대결대결대결대결대결대결대결대결대결대결대결</option>
                                    </select>
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr> */}
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputText`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="helper style-strong"><em>우편물 수령 시 연락 가능한 전화번호</em></span>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Icon(search) + InputText + string`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <Icon icon="search" />
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="string">(자동화기기)</span>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputText + Units`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50 g-end">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="units">%</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                          <th colSpan={1}>
                              <Label label={`InputText + Search-ImageButton`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputText​:read-only + Search-ImageButton`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-30">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputText + CommonButton`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-70">
                                    <InputText placeholder="" value="Value" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds">
                                    <CommonButton label="중복확인" className="_normal" />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`AutoComplete`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
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
                            </td>

                            <th colSpan={1}>
                              <Label label={`Icon(search) + AutoComplete`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <Icon icon="search" />
                                    <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="초기화" icon="remove" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputNumber`} require={false} />
                            </th>
                            <td colSpan={1}>
                              {/* <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-40">
                                    <InputText type="number" placeholder="" value="0" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="증가" icon="sum-plus" />
                                    </span>
                                    <span className="inner-binds">
                                      <ImageButton label="감소" icon="sum-minus" />
                                    </span>
                                  </div>
                                </div>
                              </div> */}
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                      decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Dropdown`} require={true} />
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
                              <Label label={`MultiSelect`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select">
                                    <XMultiSelect appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputMask(사업자등록번호)`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-num mode-required wdth-60">
                                    <InputMask placeholder="" mask="999-99-99999" value={Mask} className="bind" onChange={(e) => setMask(e.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Calendar`} require={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date mode-required wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
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
                              <Label label={`Calendar​:disabled`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date mode-required wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} disabled showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`Calendar + Time`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <span className="seps type-slash">/</span>

                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" view="month" dateFormat="yy-mm" mask="9999-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>

                                  <div className="o-form _input type-time wdth-30">
                                    <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`FAKE Calendar`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date is-proto mode-required wdth-50">{/* .type-date.is-proto { @DEV } */}
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="" icon="calendar" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`FAKE Dropdown`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-listbox is-proto mode-required wdth-50">{/* .type-listbox.is-proto { @DEV } */}
                                    <InputText placeholder="선택" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="" icon="arrow-down" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`InputNumber2`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-spin wdth-50">
                                    <InputText type="text" placeholder="" value="0" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="증가" icon="sum-plus" />
                                    </span>
                                    <span className="inner-binds">
                                      <ImageButton label="감소" icon="sum-minus" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`InputTextarea`} require={true} />
                            </th>
                            <td colSpan={5}>
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

                              <div className="m-footer">
                                <ul className="m-bullets type-disc">
                                  <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                                  <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`전체삭제/추가`} require={true} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-binds">
                                <div className="group _start">
                                  <CommonButton label="전체삭제" className="_normal" disabled />
                                  <CommonButton label="추가" className="_normal" />
                                </div>
                              </div>

                              <div className="m-flex-list">

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input mode-required wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" disabled /></div>
                                  </div>
                                </div>

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                  </div>
                                </div>

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                  </div>
                                </div>

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                  </div>
                                </div>

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                  </div>
                                </div>

                              </div>

                              <div className="m-flex-list">

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input mode-required wdth-50">
                                      <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                      <span className="inner-binds">
                                        <ImageButton label="초기화" icon="remove" />
                                      </span>
                                    </div>

                                    <div className="o-form _input mode-required wdth-10 g-end">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>

                                    <span className="units">명</span>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" disabled/></div>
                                  </div>
                                </div>

                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                      <span className="inner-binds">
                                        <ImageButton label="초기화" icon="remove" />
                                      </span>
                                    </div>

                                    <div className="o-form _input wdth-10 g-end">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                    <span className="units">명</span>
                                    <div className="binds"><ImageButton label="삭제" icon="delete" /></div>
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`인수부점`} require={true} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-mixed-field">
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input mode-required wdth-90">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>

                                <div className="m-checks">
                                  <InputRadio name="RADIO:T_10" label="서무대리" defaultChecked />
                                  <InputRadio name="RADIO:T_10" label="보관카드담당자" />
                                </div>

                                <div className="binds">
                                  <CommonButton label="즐겨찾기" className="_normal" />
                                </div>
                              </div>

                              <div className="m-footer">
                                <p className="o-helper style-strong"><em>도착예정일자: YYYY-MM-DD 신청일자에 실물 발송한 경우</em></p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`.o-chip`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-flex-list">
                                <em className="o-chip var-lined-00 size-30"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-00 size-30"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-01 size-30"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-01 size-30"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-02 size-30"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-02 size-30"><span className="label">레이블</span></em>
                              </div>
                              <div className="m-flex-list">
                                <em className="o-chip var-lined-00 size-50"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-00 size-50"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-01 size-50"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-01 size-50"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-02 size-50"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-02 size-50"><span className="label">레이블</span></em>
                              </div>
                              <div className="m-flex-list">
                                <em className="o-chip var-lined-00 size-70"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-00 size-70"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-01 size-70"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-01 size-70"><span className="label">레이블</span></em>
                                <em className="o-chip var-lined-02 size-70"><span className="label">레이블</span></em>
                                <em className="o-chip var-solid-02 size-70"><span className="label">레이블</span></em>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`.o-rich-text`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="o-rich-text">
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                                신세계백화점상품권 10만원권 신청 시 봉투가 불필요한 경우 연락 부탁드립니다.<br />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`.o-link`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <ul>
                                <li><a href="javascript:" className="o-link texted-button _primary">바로가기<Icon icon="link" /></a></li>
                                <li><a href="javascript:" className="o-link _normal">Links (._normal)</a></li>
                                <li><a href="javascript:" className="o-link texted-button _normal">Links (a.texted-button._normal)(미사용)</a></li>
                                <li><a href="javascript:" className="o-link texted-button _primary">Links (a.texted-button._primary)</a></li>
                                <li><button type="button" className="o-link texted-button _normal">Links (button.texted-button._normal)(미사용)</button></li>
                                <li><button type="button" className="o-link texted-button _primary">Links (button.texted-button._primary)(미사용)</button></li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`.m-string-binds`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-string-binds">
                                <span className="string">[00000] 홍길동</span>
                                <span className="binds justify-end"><CommonButton label="스캔이미지" className="_normal" /></span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`Button:where(.o-section >.m-header *)`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-header">

                                <div className="m-binds">
                                  <div className="group">
                                    <CommonButton label="결재선변경관리" className="_texted-primary" icon="link" />
                                  </div>

                                  <div className="group">
                                    <CommonButton label="행추가" className="_normal" />
                                    <CommonButton label="행복사" className="_normal" />
                                    <div className="o-form _input wdth-70 g-end">
                                      <InputText placeholder="" value="1" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                      <span className="inner-binds">
                                        <CommonButton label="행추가" className="_normal" />
                                        <CommonButton label="행복사" className="_normal" />
                                      </span>
                                    </div>
                                    <CommonButton label="행삭제" className="_normal" />
                                    <CommonButton label="취소" className="_normal" />
                                    <CommonButton label="일괄양식 다운로드" className="_normal" icon="excel-download-label" />
                                    <CommonButton label="일괄양식 업로드" className="_normal" icon="excel-upload-label" />
                                  </div>

                                  <div className="group">
                                    {/* <ImageButton label="엑셀​업로드" icon="excel-upload" /> */}
                                    <ImageButton label="엑셀​다운로드" icon="excel-download" />
                                    <ImageButton label="목록필터" icon="column-toggle" />
                                    <ImageButton label="목록출력" icon="print" />
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`예제`} require={false} />
                            </th>
                            <td colSpan={5}>
                              <ol className="m-bullets type-decimal level1">
                                <li>
                                  <div className="m-flex-list">
                                    <strong>.o-section .m-tabs</strong>
                                    <a href="/proto/STMPR0201M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMPR0201M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>.m-board</strong>
                                    <a href="/proto/STMPR0301M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMPR0301M<Icon icon="link" />
                                    </a>
                                    <a href="/proto/STMDM0301M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMDM0301M<Icon icon="link" />
                                    </a>
                                    <a href="/proto/STMPE0201M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMPE0201M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>.m-data-form.style-fill</strong>
                                    <a href="/proto/FMTFC0101P01" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FMTFC0101P01<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>.o-grid-table.type-table.case-data</strong>
                                    <a href="/proto/ADMRC0401M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      ADMRC0401M<Icon icon="link" />
                                    </a>
                                    <a href="/proto/FMTCT0901M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FMTCT0901M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>[rowspan]:where(.m-data-form *)</strong>
                                    <a href="/proto/FMTFC0101P01" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FMTFC0101P01<Icon icon="link" />
                                    </a>
                                    <a href="/proto/HSPDU0401M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      HSPDU0401M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>.m-flex-list:has(&gt;.o-field):where(.m-binds +*)</strong>
                                    <a href="/proto/STMVL0101P01" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMVL0101P01<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                {/* <li>
                                  <div className="m-flex-list">
                                    <strong>폼 전체삭제/추가</strong>
                                    <a href="/proto/STMVL0101P01" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMVL0101P01<Icon icon="link" />
                                    </a>
                                  </div>
                                </li> */}
                                <li>
                                  <div className="m-flex-list">
                                    <strong>관련규정</strong>
                                    <a href="/proto/STMKY0301P02" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMKY0301P02<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>세금계산서</strong>
                                    <a href="/proto/FEMDA0201P02" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FEMDA0201P02<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>이미지보기(다단)</strong>
                                    <a href="/proto/STMKY0401P01" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMKY0401P01<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>캐러셀</strong>
                                    <a href="/proto/BSSAP0101M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      BSSAP0101M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>상태 데이터</strong>
                                    <a href="/proto/STMKY0401M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMKY0401M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>시재업데이트</strong>
                                    <a href="/proto/FMTCT0901M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FMTCT0901M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>결재선</strong>
                                    <a href="/proto/STMDM0101P02" target="ibkbws_exam" className="o-link texted-button _primary">
                                      STMDM0101P02<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="m-flex-list">
                                    <strong>소계 / 일계 / 합계</strong>
                                    <a href="/proto/FMTFC0301M" target="ibkbws_exam" className="o-link texted-button _primary">
                                      FMTFC0301M<Icon icon="link" />
                                    </a>
                                  </div>
                                </li>
                             </ol>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">외화정사 및 비용절감 누계</span></h3>

                    <div className="o-legend type-helper style-normal">
                      <em className="label">2000.02 기준</em>
                    </div>
                  </div>

                  <div className="main">
                    <div className="o-data-table">
                      <div className="table-container">
                        <table className="table">
                          <colgroup>
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '25%' }} />
                          </colgroup>

                          <thead>
                            <tr>
                              <th colSpan={2}>외화정사매수</th>
                              <th colSpan={2}>비용절감액</th>
                            </tr>
                            <tr>
                              <th colSpan={1}>월간누계</th>
                              <th colSpan={1}>연간누계</th>
                              <th colSpan={1}>월간누계</th>
                              <th colSpan={1}>연간누계</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td colSpan={1} className="g-end">
                                0
                              </td>
                              <td colSpan={1} className="g-end">
                                0
                              </td>
                              <td colSpan={1} className="g-end">
                                0
                              </td>
                              <td colSpan={1} className="g-end">
                                9,999
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="main">
                    <div className="o-board type-a">
                      <div className="board-container">
                        <div className="m-header">
                          <strong className="o-heading"><span className="label">유의사항</span></strong>
                        </div>

                        <ul className="m-bullets type-disc">
                          <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                          <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                          <li>
                            블라블라블라

                            <ul className="m-bullets type-hyphen">
                              <li>블라블라블라</li>
                              <li>
                                블라블라블라

                                <ul className="m-bullets type-asterisk">
                                  <li>블라블라블라</li>
                                  <li>블라블라블라</li>
                                </ul>
                              </li>
                              <li>블라블라블라</li>
                            </ul>
                          </li>
                          <li>블라블라블라</li>
                        </ul>
                      </div>

                      <div className="board-container">
                        <div className="m-header">
                          <strong className="o-heading"><span className="label">Order Lists</span></strong>
                        </div>

                        <ol className="m-bullets type-decimal level1">
                          <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                          <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                          <li>블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라</li>
                          <li>
                            블라블라블라

                            <ol className="m-bullets type-decimal level2">
                              <li>블라블라블라</li>
                              <li>블라블라블라</li>
                            </ol>
                          </li>
                          <li className="g-abshidden"></li>
                          <li className="g-abshidden"></li>
                          <li className="g-abshidden"></li>
                          <li className="g-abshidden"></li>
                          <li>블라블라블라</li>
                          <li>블라블라블라</li>
                          <li>블라블라블라</li>
                          <li>블라블라블라</li>
                        </ol>
                      </div>

                      <div className="board-container">
                        <div className="m-header">
                          <strong className="o-heading"><span className="label">유의사항</span></strong>
                        </div>

                        <ul className="m-bullets type-disc">
                          <li>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 <em className="c-color-strong">인수직원의 부점정보를 확인해주세요.</em></li>
                          <li><em className="c-color-strong">행내등기 대상</em>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                        </ul>

                        <div className="board-container type-sub">
                          <div className="m-header">
                            <strong className="o-heading"><span className="label">여신자필서류(STP)</span></strong>

                            <div className="m-binds">
                              <div className="group">
                                {/* <CommonButton label="안내문 상세보기" className="_texted-primary" icon="link" /> */}
                                <a href="javascript:" className="o-link texted-button _primary">안내문 상세보기<Icon icon="link" /></a>
                              </div>
                            </div>
                          </div>

                          <ul className="m-bullets type-disc">
                            <li><em className="c-color-strong">NET점 고객의 여신자필 서류를 대신 받아 전달</em>할 경우, <em className="c-color-strong">영업점 간 비용이 정산</em>됩니다.(발송지점 비용 1만원 ↓, 인수지점 비용 1만원 ↑)</li>
                            <li><em className="c-color-strong">자점 고객이 NET점 방문 시</em> 고객에게 받을 서류를 미리 세팅하여 NET점에 보내는 경우 <em className="c-color-strong">서류구분을 [일반서류]로 선택</em> 후 신청해주세요.</li>
                          </ul>
                        </div>

                        <div className="board-container type-sub">
                          <div className="m-header">
                            <strong className="o-heading"><span className="label">유의사항</span></strong>
                          </div>

                          <ul className="m-bullets type-disc">
                            <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                            <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">스텝</span></h3>

                    <div className="m-checks">
                      <InputRadio name="RADIO_10" label="신청" />
                      <InputRadio name="RADIO_10" label="배송·인수" defaultChecked />
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="차수생성" className="_create" />
                      </div>
                    </div>
                  </div>

                  <div className="main">
                    <div className="o-board">
                      <div className="m-step">
                        <div className="steps">
                          <ol className="o-steps axis-rows type-straight" aria-label="진행 상태">
                            <li aria-label="진행 완료">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">1</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">고객정보입력신청</em>
                              </span>
                            </li>
                            <li aria-label="진행 단계">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">2</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">결재중</em>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">3</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">고객정보입력완료</em>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">4</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">배송중</em>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">5</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">인수완료</em>
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="o-board">
                      <div className="m-step">
                        <div className="steps">
                          <ol className="o-steps axis-rows type-straight" aria-label="진행 상태">
                            <li aria-label="진행 완료">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">1</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <a href="javascript:" aria-current="false" className="label">
                                <em className="main">현송직원확인</em>
                              </a>
                            </li>
                            <li aria-label="진행 완료">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">2</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <a href="javascript:" aria-current="step" className="label">
                                <em className="main">내국환취결</em>
                              </a>
                            </li>
                            <li aria-label="진행 단계">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">3</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <a href="javascript:" aria-current="false" className="label">
                                <em className="main">출발시각 등록</em>
                              </a>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">4</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <a href="javascript:" aria-disabled="true" aria-current="false" className="label">
                                <em className="main">도착시각(업무센터)</em>
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="o-board">
                      <div className="m-step">
                        <div className="steps">
                          <ol className="o-steps axis-rows type-normal basis-type-addition" aria-label="진행 상태">
                            <li aria-label="진행 완료">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">1</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">신청</em>

                                <span className="addition">
                                  <span className="item name">최유나</span>
                                  <span className="item date">2025-02-01</span>
                                </span>
                              </span>
                            </li>
                            <li aria-label="진행 단계">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">2</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">검수</em>

                                <span className="addition">
                                  <span className="item name">제갈공명</span>
                                  <span className="item date">2025-03-10 23:59:59</span>
                                </span>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">3</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">배송</em>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">4</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main">인수</em>
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  <form className="m-data-form">
                    <table className="table">
                      <colgroup>
                        <col className="head" />
                        <col className="data" />
                        <col className="head" />
                        <col className="data" />
                        <col className="data man" style={{ width: 'calc(100% * 384 / var(--width-layout-container, 1536))', minWidth: 'calc(var(--rem) * 280)' }} />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`등록일자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <span className="o-digit type-date">2025-12-25</span>
                          </td>

                          <th colSpan={1}>
                            <Label label={`등록자`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [00000] 홍길동
                          </td>

                          <td rowSpan={5} className="surface g-center">
                            <div className="m-step">
                              <div className="header">
                                <Label label={`BPR스캔등록`} require={false} />
                              </div>

                              <div className="steps">
                                <ol className="o-steps axis-rows type-normal" aria-label="진행 상태">
                                  <li aria-label="진행 완료">
                                    <span className="order" aria-hidden="true">
                                      <span className="prefix"></span>
                                      <span className="count">1</span>
                                      <span className="suffix">단계. </span>
                                    </span>
                                    <span className="label">
                                      <em className="main"><CommonButton label="스캔등록" className="_solid-secondary" /></em>
                                    </span>
                                  </li>
                                  <li aria-label="진행 단계">
                                    <span className="order" aria-hidden="true">
                                      <span className="prefix"></span>
                                      <span className="count">2</span>
                                      <span className="suffix">단계. </span>
                                    </span>
                                    <span className="label">
                                      <em className="main"><CommonButton label="스캔확인" className="_solid-secondary" /></em>
                                    </span>
                                  </li>
                                  <li aria-label="진행 예정">
                                    <span className="order" aria-hidden="true">
                                      <span className="prefix"></span>
                                      <span className="count">3</span>
                                      <span className="suffix">단계. </span>
                                    </span>
                                    <span className="label">
                                      <em className="main"><CommonButton label="스캔완료" className="_solid-secondary" disabled /></em>
                                    </span>
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`의뢰제목`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`대상기간​(From~To)`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-date wdth-50">
                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                                <span className="seps type-tilde">~</span>
                                <div className="o-form _input type-date wdth-50">
                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`대상건수`} require={false} />
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
                          <th colSpan={1}>
                            <Label label={`소각연월일`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input type-date wdth-50">
                                  <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th colSpan={1}>
                            <Label label={`사고보고여부`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="m-checks">
                                  <InputCheck label="선택" labelHidden />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`비고`} require={false} />
                          </th>
                          <td colSpan={3}>
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

                    <div className="o-board">
                      <div className="m-step">
                        <div className="header">
                          <Label label={`BPR스캔등록`} require={false} />
                        </div>

                        <div className="steps">
                          <ol className="o-steps axis-rows type-normal" aria-label="진행 상태">
                            <li aria-label="진행 완료">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">1</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main"><CommonButton label="스캔등록" className="_solid-secondary" /></em>
                              </span>
                            </li>
                            <li aria-label="진행 단계">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">2</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main"><CommonButton label="스캔확인" className="_solid-secondary" /></em>
                              </span>
                            </li>
                            <li aria-label="진행 예정">
                              <span className="order" aria-hidden="true">
                                <span className="prefix"></span>
                                <span className="count">3</span>
                                <span className="suffix">단계. </span>
                              </span>
                              <span className="label">
                                <em className="main"><CommonButton label="스캔완료" className="_solid-secondary" disabled /></em>
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="m-step-form">
                      <div className="steps">
                        <ol className="o-steps axis-cols type-normal" aria-label="진행 상태">
                          <li aria-label="진행 완료">
                            <span className="order" aria-hidden="true">
                              <span className="prefix"></span>
                              <span className="count">1</span>
                              <span className="suffix">단계. </span>
                            </span>
                            <span className="label">
                              <em className="main">신청등록</em>
                            </span>
                          </li>
                          <li aria-label="진행 단계">
                            <span className="order" aria-hidden="true">
                              <span className="prefix"></span>
                              <span className="count">2</span>
                              <span className="suffix">단계. </span>
                            </span>
                            <span className="label">
                              <em className="main">신청마감</em>
                            </span>
                          </li>
                          <li aria-label="진행 예정">
                            <span className="order" aria-hidden="true">
                              <span className="prefix"></span>
                              <span className="count">3</span>
                              <span className="suffix">단계. </span>
                            </span>
                            <span className="label">
                              <em className="main">배송등록</em>
                            </span>
                          </li>
                          <li aria-label="진행 예정">
                            <span className="order" aria-hidden="true">
                              <span className="prefix"></span>
                              <span className="count">4</span>
                              <span className="suffix">단계. </span>
                            </span>
                            <span className="label">
                              <em className="main">인수완료</em>
                            </span>
                          </li>
                        </ol>
                      </div>

                      <div className="fieldset size-3">

                        <div className="o-section">
                          <div className="m-header">
                            <h4 className="o-heading level4"><span className="label">신청등록</span></h4>

                            <div className="m-binds">
                              <div className="group">
                                <CommonButton label="신청마감취소" className="_lined-primary" />
                                <CommonButton label="마감" className="_solid-primary" disabled />
                                <CommonButton label="저장" className="_solid-primary" disabled />
                              </div>
                            </div>
                          </div>

                          <div className="main">
                            <div className="m-data-form">
                              <table className="table">
                                <colgroup>
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
                                      <Label label={`신청시작일자`} require={true} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date mode-required wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <Label label={`신청종료일자`} require={true} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date mode-required wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <Label label={`등록일자`} require={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="o-section">
                          <div className="m-header">
                            <h4 className="o-heading level4"><span className="label">배송등록</span></h4>

                            <div className="m-binds">
                              <div className="group">
                                <CommonButton label="배송등록취소" className="_lined-primary" disabled />
                                <CommonButton label="저장" className="_solid-primary" />
                              </div>
                            </div>
                          </div>

                          <div className="main">
                            <div className="m-data-form">
                              <table className="table">
                                <colgroup>
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
                                      <Label label={`배송시작일자`} require={true} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date mode-required wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <Label label={`배송종료일자`} require={true} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date mode-required wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <Label label={`등록일자`} require={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="o-section">
                          <div className="m-header">
                            <h4 className="o-heading level4"><span className="label">인수등록</span></h4>

                            <div className="m-binds">
                              <div className="group">
                                <CommonButton label="인수등록취소" className="_lined-primary" disabled />
                                <CommonButton label="저장" className="_solid-primary" disabled />
                              </div>
                            </div>
                          </div>

                          <div className="main">
                            <div className="m-data-form">
                              <table className="table">
                                <colgroup>
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
                                      <Label label={`등록일자`} require={true} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="o-field">
                                        <div className="fields">
                                          <div className="o-form _input type-date wdth-50">
                                            <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                            <i aria-hidden="true"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h2 className="o-heading level2"><span className="label">그리드 로우그룹/rowspan</span></h2>

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
                            <col className="wdth-50" />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청일자</span></div></th>
                              <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청부점</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">재고량</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종인도일자</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도한도</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청량</span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인도량<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span></div></th>
                              <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단위</span></div></th>
                            </tr>
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={13}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <>
                          {
                            (idx - 3) % 3 === 0 &&
                            <tr className="p-rowgroup-header">
                              <td colSpan={13} className="p-x-cell-blank"></td>{/* rowGroupHeaderTemplate={blankCellHeaderTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td className="p-x-cell-span">{/* 그리드 로우그룹/rowspan 'p-x-cell-span' 클래스네임 추가 필요(border 숨김) { @DEV } */}
                              {
                                (idx) % 3 === 0 &&
                                <span className="o-digit type-date">2025-12-25</span> /* 그리드 로우그룹/rowspan 최상위 셀만 데이터 출력 { @DEV } */
                              }
                              </td>
                              <td>0465</td>
                              <td className="g-start">독산하이테크</td>
                              <td>10100</td>
                              <td className="g-start">비정액 자기앞수표(1억원 이하)</td>
                              <td className="g-end">349</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>20-100</td>
                              <td className="g-end">50</td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-spin wdth-50">
                                      <InputNumber className="bind" inputId="horizontal-buttons" value={InputNumberValue} onValueChange={(e) => setInputNumberValue(e.value)} showButtons buttonLayout="horizontal" step={1} min={0} max={9999}
                                        decrementButtonClassName="o-image-button" incrementButtonClassName="o-image-button" decrementButtonIcon={<Icon icon="sum-minus" />} incrementButtonIcon={<Icon icon="sum-plus" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>장</td>
                            </tr>
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer">
                              <td colSpan={13} className="p-x-cell-blank"></td>{/* rowGroupFooterTemplate={blankCellFooterTemplate} :: 그리드 로우그룹/rowspan 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          </>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">소계 / 일계 / 합계(합계 강조)</span></h3>

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

                  <div className="main _primary">
                    <div className="m-total">
                      <dl className="m-defines">
                        <div className="group">
                          <dt className="head">신청금액합계</dt>
                          <dd className="data">200,000,000</dd>
                        </div>

                        <div className="group">
                          <dt className="head">결정금액합계</dt>
                          <dd className="data">200,000,000</dd>
                        </div>
                      </dl>
                    </div>

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
                            <col />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용수량</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">선납수량</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">납부수량</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>21077</td>
                              <td className="g-start">중금채등록통장(거치식)</td>
                              <td className="g-end">9,999</td>
                              <td className="g-end">9,999</td>
                              <td className="g-end">9,999</td>
                            </tr>
                          {
                            (idx - 2) % 3 === 0 &&
                            <tr className="p-rowgroup-footer subtotal-trow">
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell">0001</td>
                              <td className="subtotal-tcell g-start">영업부 소계</td>
                              <td className="subtotal-tcell"></td>
                              <td className="subtotal-tcell g-start"></td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              <td className="subtotal-tcell g-end">99,999</td>
                              {/* rowGroupFooterTemplate={totalSubCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          {
                            (idx - 5) % 6 === 0 &&
                            <tr className="p-rowgroup-footer daytotal-trow">
                              <td className="daytotal-tcell"></td>
                              <td className="daytotal-tcell g-start">일계</td>
                              <td className="daytotal-tcell"></td>
                              <td className="daytotal-tcell"></td>
                              <td className="daytotal-tcell g-start"></td>
                              <td className="daytotal-tcell g-end">99,999</td>
                              <td className="daytotal-tcell g-end">99,999</td>
                              <td className="daytotal-tcell g-end">99,999</td>
                              {/* rowGroupFooterTemplate={totalDayCellFooterTemplate} :: 그리드 소계 로우그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            </tr>
                          }
                          </>
                          ))}
                          </tbody>

                          <tfoot className="p-datatable-tfoot sumtotal-tfoot">{/* footerColumnGroup={totalSumFooterGroupTemplate} :: 그리드 합계 테이블푸터그룹 커스텀 템플릿 추가 필요 { @DEV } */}
                            <tr className="sumtotal-trow">
                              <td colSpan={5} className="sumtotal-tcell">합계</td>
                              <td className="sumtotal-tcell g-end">999,999</td>
                              <td className="sumtotal-tcell sumtotal-tcell-strong">정산대상금액</td>
                              <td className="sumtotal-tcell sumtotal-tcell-strong g-end">999,999</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="o-grid">
              <div className="column flex-auto">

                <div className="o-section">
                  <div className="m-header">
                    <h2 className="o-heading level2"><span className="label">.o-grid &gt;.column.flex-auto / 하드코딩 그리드테이블(합계) </span></h2>

                    <div className="m-binds">
                      <div className="group">
                        <ImageButton label="엑셀​다운로드" icon="excel-download" />
                        <ImageButton label="목록출력" icon="print" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-auto">
                    <div className="o-grid-table type-table case-notice-calendar">{/* [하드코딩] */}
                      <div className="table-container">
                        <table>
                          <colgroup>
                            <col />
                            <col />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                          </colgroup>

                          <thead>
                            <tr>
                              <th>구분</th>
                              <th>종류</th>
                              <th>총신청수량</th>
                              <th>영업점배송수량</th>
                              <th>고객배송수량</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>A</td>
                              <td className="g-start">벽걸이달력(3단)</td>
                              <td className="g-end">999</td>
                              <td className="g-end">999</td>
                              <td className="tcell-strong g-end">999</td>
                            </tr>
                            <tr>
                              <td>B</td>
                              <td className="g-start">벽걸이달력(일반)</td>
                              <td className="g-end">999</td>
                              <td className="g-end">999</td>
                              <td className="tcell-strong g-end">999</td>
                            </tr>
                            <tr>
                              <td>C</td>
                              <td className="g-start">탁상달력</td>
                              <td className="g-end">999</td>
                              <td className="g-end">999</td>
                              <td className="tcell-strong g-end">999</td>
                            </tr>
                          </tbody>

                          <tfoot className="sumtotal-tfoot">
                            <tr className="sumtotal-trow">
                              <td colSpan={2}>합계</td>
                              <td className="g-end">9,999</td>
                              <td className="g-end">9,999</td>
                              <td className="sumtotal-tcell-strong g-end">9,999</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="column">

                <div className="o-section">
                  <div className="m-header"></div>

                  <div className="main _primary rows-auto">
                    <div className="o-view-image case-notice-calendar">
                      <img src={require("assets/images/temp/BSSCR0301M_010.png")} alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Tabs className="m-tabs react-tabs" defaultIndex={0}>
              <div className="m-tab type2">
                <TabList className="lists">
                  {/* <Tab className="link"><span className="label">.m-tab.type2 .link:tab10</span></Tab>
                  <Tab className="link"><span className="label">.m-tab.type2 .link:tab20</span></Tab> */}
                  <Tab className="link"><span className="label">레이블</span></Tab>
                  <Tab className="link"><span className="label">LABEL</span></Tab>
                </TabList>
              </div>

              <TabPanel className="m-tabs-panel react-tabs__tab-panel">
                <div className="o-grid">
                  <div className="column">

                    <div className="o-section">
                      <div className="m-header">
                        <h2 className="o-heading level2"><span className="label">틀고정(.p-x-frozen-last) / 오더바이(오름차순, 내림차순, 디폴트)(.p-sortable-column) / 필수입력 컬럼(.o-require-tag)</span></h2>

                        <div className="o-length">
                          <span className="head">전체</span>
                          <em className="data">
                            <span className="value">8</span>
                            <span className="units">건</span>
                          </em>
                        </div>

                        <div className="m-binds">
                          <div className="group">
                            <CommonButton label="표준템플릿" className="_normal" icon="excel-download-label" />
                          </div>

                          <div className="group">
                            <ImageButton label="엑셀​업로드" icon="excel-upload" />
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
                                  <th className="p-align-center p-sortable-column p-highlight" aria-sort="ascending"><div className="p-column-header-content"><span className="p-column-title">출급번호</span><span data-pc-section="sort"></span></div></th>
                                  <th className="p-align-center p-x-frozen-last"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                                  <th className="p-align-center p-sortable-column" aria-sort="none"><div className="p-column-header-content"><span className="p-column-title">인도일시</span><span data-pc-section="sort"></span></div></th>
                                  <th className="p-align-center p-sortable-column" aria-sort="descending"><div className="p-column-header-content"><span className="p-column-title">인도구분<em className="o-require-tag"><span className="tag">(필수입력)</span></em></span><span data-pc-section="sort"></span></div></th>
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
                                  <td colSpan={21}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                                </tr>
                              </tbody>

                              <tbody className="p-datatable-tbody">
                              {[...Array(24)].map((e, idx) => (
                                // <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                <tr key={idx} className={`${idx === 0 ? 'p-highlight' : idx === 1 ? 'p-x-status-20' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                                  <td><InputCheck label="선택" labelHidden /></td>
                                  <td>{idx + 1}</td>
                                  <td>프로세스혁신</td>
                                  <td>BC016</td>
                                  <td className="g-start p-x-frozen-last">나의 알파체크카드(비교통_그린)</td>
                                  <td><span className="o-digit type-datetime">2025-12-25 09:10:59</span></td>
                                  <td>신청인도</td>
                                  <td>정상</td>
                                  <td>부산</td>
                                  <td className="g-end">50</td>
                                  <td className="g-end">0</td>
                                  <td></td>
                                  <td>3344785</td>
                                  <td>~</td>
                                  <td>33447900</td>
                                  <td>부산역</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
                                  <td>미인수</td>
                                  <td><span className="o-digit type-date">2025-12-25</span></td>
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

              <TabPanel className="m-tabs-panel react-tabs__tab-panel"></TabPanel>
            </Tabs>

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`부점코드`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점상태`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점구분`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`지역본부`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">부점내역</span></h2>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _select wdth-50">
                          <XDropdown appendTo={document.body} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                        <div className="o-form _select wdth-50">
                          <XDropdown appendTo={document.body} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <ImageButton label="엑셀​다운로드" icon="excel-download" />
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
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점상태</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지역본부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사업자번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팩스</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">우편번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">주소</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">상세주소</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">개점일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐점일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지역구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">관할본부코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">계리부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">조직속성코드</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={18}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>0001</td>
                              <td className="g-start">Box연계시스템</td>
                              <td>개점</td>
                              <td className="g-start">본부영업점</td>
                              <td className="g-start">중부지역본부</td>
                              <td><span className="o-digit type-num">123-45-67890</span></td>
                              <td><span className="o-digit type-tel">02-729-7610</span></td>
                              <td><span className="o-digit type-tel">123-134</span></td>
                              <td>12345</td>
                              <td className="g-start">서울특별시 서초구 서초대로 77길 17</td>
                              <td className="g-start">659-29 삼성쉐르빌퍼스티1층</td>
                              <td><span className="o-digit type-date">1961-08-01</span></td>
                              <td><span className="o-digit type-date">9999-12-31</span></td>
                              <td>서울</td>
                              <td>1234567</td>
                              <td>1234567</td>
                              <td>1234567</td>
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

            <div className="o-grid">
              <div className="column">

                <div className="m-divider">
                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="취소" icon="du-up" className="_normal" />
                      <CommonButton label="선택" icon="du-down" className="_normal" />
                    </div>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">상세정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="신규" className="_create" />
                      </div>
                    </div>
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
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`부점정보`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`영문부점명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="BANKING DEPARTMENT" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`사업자등록번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-num">
                                    <InputText placeholder="" value="202-81-00978" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점약칭명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`부점약칭명2`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점구분코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점소재지코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점전화번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="02" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0000" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`주소`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-40">
                                    <InputText placeholder="" value="00000" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                    <span className="inner-binds">
                                      <ImageButton label="검색" icon="search" />
                                    </span>
                                  </div>
                                  <div className="o-form _input wdth-90">
                                    <InputText placeholder="" value="서울특별시 중구 을지로 79" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="기업은행 본점" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`팩스`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="seps type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`온라인번호`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0714" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`지도코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소유구분코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`외환부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0484" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`재활모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0714" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`교환모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`국고결제모점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`한국은행관할​통합부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`관할사업본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`관할본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`지역본부코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`사무지원센터코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`부점장코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[021189] 이범건" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점장부임일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점상태코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`개점일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`폐점일`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`EDW​실제근무​부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`계리부점코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`조직속성코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`소속직원`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`근무여부`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`실근무부점`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`소속부점`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점변경 여부`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">직원내역</span></h2>
                  </div>

                  <div className="main _primary">
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
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="wdth-50" />
                            <col />
                            <col />
                            <col />
                            <col className="wdth-50" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실근무점</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">실근무점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">팀명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">현소속일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직무</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">보임</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">퇴직일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">전화번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단말IP</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={16}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              {/* <td><Checkbox defaultChecked={checked} onChange={e => setChecked(e.checked)} /></td> */}
                              <td>{idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                              <td>0000001</td>
                              <td>홍길동</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">동대문個</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td>팀장</td>
                              <td className="g-start">BPR지원_일반</td>
                              <td>부점장급</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-tel">02-729-7610</span></td>
                              <td></td>
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

            <div className="o-grid">
              <div className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">상세정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="변경이력" className="_normal" />
                      </div>
                    </div>
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
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`직원`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0000001] 홍길동" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소속부점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`소속팀`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`실근무점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`EDW 실근무부점`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`직책코드`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`근부여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-checks">
                                <InputRadio name="RADIO_10" label="근무" defaultChecked />
                                <InputRadio name="RADIO_10" label="퇴직" />
                              </div>
                            </td>

                            <th colSpan={1}>
                              <Label label={`부점변경예정 (종료일)`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} disabled />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="m-checks">
                                    <InputCheck label="선택" labelHidden />
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

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">직무분장</span></h3>


                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="직무분장 관리" className="_normal" />
                      </div>
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
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사무분장코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사무분장명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={3}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>10080</td>
                              <td className="g-start">경영정보</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">근태정보</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="행추가" className="_normal" />
                        <CommonButton label="행삭제" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-body-3i">
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
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">결재직원</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">근태구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료일자</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">시작시각</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종료시각</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대직직원</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">반차구분</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">휴가일수</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={11}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(1)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                            <tr>
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td><Icon icon="grid-added" /></td>{/* 추가된 행 .o-icon._grid-added 순번 대체 { @DEV } */}
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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
                                    <div className="o-form _input type-date wdth-50">
                                      <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-date wdth-50">
                                      <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-time wdth-30">
                                      <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-time wdth-30">
                                      <Calendar placeholder="" value={Time} locale="ko" mask="99:99" appendTo={document.body} className="bind" onChange={(e) => setTime(e.value)} timeOnly />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`코드도메인`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`사용여부`} require={false} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`도메인명`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
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
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">한글명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">설명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(15)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx === 15 - 1 ? <Icon icon="grid-added" /> : idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 추가된 행 .o-icon._grid-added 순번 대체 | 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
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
                                      <InputText placeholder="" value="임차시설물폐쇠구분코드" className="bind" onChange={(e) => setValue(e.target.value)} tooltip={'수표류: 수표번호 8자리(앞, 두 문자 기호란에 입력) \n예) 가마 7564 3210' as any} tooltipOptions={{ position: 'bottom', event: 'focus', className: 'o-tooltip style-notice' }} />
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

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">코드도메인 상세내용</span></h3>

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
                            <col />
                            <col />
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인스턴스</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">인스턴스명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">정렬순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드항목설명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={8}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(10)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx === 10 - 1 ? <Icon icon="grid-added" /> : idx + 1}</td>{/* 추가된 행 .o-icon._grid-added 순번 대체 { @DEV } */}
                              <td>
                                {idx === 10 - 1 ?
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
                                {idx === 10 - 1 ?
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-30">
                                      <InputText placeholder="" value="101" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                                : `101`}
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-50">
                                      <InputText placeholder="" value="내부결재" className="bind" onChange={(e) => setValue(e.target.value)} />
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
                                    <div className="o-form _input wdth-20">
                                      <InputText placeholder="" value="101" className="bind" onChange={(e) => setValue(e.target.value)} />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input wdth-70">
                                      <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
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

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h2 className="o-heading level2"><span className="label">메뉴내역</span></h2>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _input wdth-90">
                          <InputText placeholder="메뉴ID, 메뉴명 입력" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                          <span className="inner-binds">
                            <ImageButton label="검색" icon="search" />
                          </span>
                          <span className="inner-binds type-find">
                            <ImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                            <ImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="모두닫힘" className="_normal" />
                        <CommonButton label="모두펼침" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="table-container p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col style={{ width: 'calc(var(--rem) * 50)' }} />
                            <col style={{ width: '10%', minWidth: 'calc(var(--rem) * 92)' }} />
                            <col />
                            <col style={{ width: 'calc(var(--rem) * 64)' }} />
                            <col style={{ width: 'calc(var(--rem) * 64)' }} />
                            <col style={{ width: 'calc(var(--rem) * 100)' }} />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">메뉴명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">노출여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">등록일자</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-highlight">
                              <td>1</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level0">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">홈</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송신청</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder" />
                                  </span>
                                  <span className="main">비상계획안전기획</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">자금<mark className="o-find-mark" tabIndex={0}>현</mark>송</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">대시보드</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level2">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">원화<mark className="o-find-mark" tabIndex={0}>현</mark>수송</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">원화마감시간관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">시재과부족<mark className="o-find-mark" tabIndex={0}>현</mark>황관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level3">
                                  <span className="icons">
                                    <Icon icon="file" />
                                  </span>
                                  <span className="main">자금<mark className="o-find-mark" tabIndex={0}>현</mark>송명령부관리</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                          {[...Array(23)].map((e, idx) => (
                            <tr>
                              <td>{ idx + 10 }</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level1">
                                  <span className="icons">
                                    <Icon icon="folder" />
                                  </span>
                                  <span className="main">외화보유<mark className="o-find-mark" tabIndex={0}>현</mark>황</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                          ))}
                          {/* {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>AABB00001</td>
                              <td className="g-start">
                                <div className="o-depth level0">
                                  <span className="icons">
                                    <Icon icon="folder-open" />
                                  </span>
                                  <span className="main">홈</span>
                                </div>
                              </td>
                              <td>Y</td>
                              <td>Y</td>
                              <td><span className="o-digit type-date">2025-12-25</span></td>
                            </tr>
                          ))} */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="m-footer">
                    <ul className="m-bullets type-disc">
                      <li>메뉴 검색결과로 위치 이동 시 <span className="o-example type-button"><Icon icon="page-up" /><em className="g-abshidden">[이전 탐색]</em> <Icon icon="page-down" /><em className="g-abshidden">[다음 탐색]</em></span> 버튼을 클릭해주세요.</li>
                    </ul>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} size={100 * 5 / 12} className="column _views">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">메뉴정보</span></h3>

                    {/* <div className="m-binds">
                      <div className="group">
                        <CommonButton label="신규" className="_create" />
                      </div>
                    </div> */}
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
                              <Label label={`상위메뉴`} require={false} />
                            </th>
                            <td colSpan={1}>
                              원화현수송
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴ID`} require={false} />
                            </th>
                            <td colSpan={1}>
                              AABB00003
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`메뉴명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              원화현수송신청
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`정렬순서`} require={false} />
                            </th>
                            <td colSpan={1}>
                              000
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`노출여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`사용여부`} require={false} />
                            </th>
                            <td colSpan={1}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록자`} require={false} />
                            </th>
                            <td colSpan={1}>
                              홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`등록일자`} require={false} />
                            </th>
                            <td colSpan={1}>
                              <span className="o-digit type-date">2024-09-16</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h4 className="o-heading level4"><span className="label">화면매핑정보</span></h4>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="화면매핑" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary rows-body-3i">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="table-container p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col style={{ width: 'calc(var(--rem) * 50)' }} />
                            <col style={{ width: '20%', minWidth: 'calc(var(--rem) * 121)' }} />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순서</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면ID</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">화면명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={3}><div className="gridtable-empty">No available options</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>AABB00001M00</td>
                              <td className="g-start">
                                <div className="m-with-bind">
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
                </div>

              </SplitterPanel>
            </Splitter>

            <Splitter  gutterSize={0} className="o-grid">
              <SplitterPanel minSize={17.5} className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`직원번호/명`} require={false} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`권한명`} require={false} />
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
                    <h2 className="o-heading level2"><span className="label">사용자내역</span></h2>

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
                            <col />
                            <col />
                            <col />
                            <col className="wdth-auto" />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={5}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>
                              <td>{idx + 1}</td>
                              <td>000001</td>
                              <td>홍길동</td>
                              <td>부장</td>
                              <td className="g-start">중요용지용도품관리자, 행내등기관리</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="m-footer">
                    <ul className="m-bullets type-disc">
                      <li>권한요청문의 : IT금융개발부 / 031-1234-5678</li>
                      <li className="c-color-strong"><em>비정액자기앞수표(1억이하)</em></li>
                    </ul>
                  </div>
                </div>

              </SplitterPanel>

              <SplitterPanel minSize={17.5} className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">사용자정보</span></h3>

                    <div className="m-chips">
                      <em className="o-chip">
                        <span className="label">[0031] 을지로 6가</span>
                      </em>
                    </div>
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
                              <Label label={`직원번호/명`} require={false} />
                            </th>
                            <td colSpan={1}>
                              [000001] 홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={1}>
                              <Label label={`직책`} require={false} />
                            </th>
                            <td colSpan={1}>
                              부장
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">권한설정</span></h3>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="table-container p-datatable-wrapper">
                        <table className="p-datatable-table p-datatable-scrollable-table">
                          <colgroup>
                            <col className="wdth-10" />
                            <col />
                            <col />
                            <col className="wdth-auto" />
                            <col />
                            <col />
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한설명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">권한여부</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
                              <td>000000005</td>
                              <td className="g-start">중요용지용도품관리자</td>
                              <td className="g-start"></td>
                              <td>Y</td>
                              <td><InputCheck label="선택" labelHidden /></td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </SplitterPanel>
            </Splitter>

            <div className="m-filter-select">
              <div className="fieldset">

                <dl className="defines">
                  <div className="define-group">
                    <dt className="head">부점선택</dt>
                    <dd className="data">
                      <div className="group m-radio-menu">
                        <button type="button" className="bind"><span className="label">본부</span></button>
                        <button type="button" className="bind"><span className="label">지역본부</span></button>
                        <button type="button" className="bind is-checked"><span className="label">영업점</span></button>
                        <button type="button" className="bind"><span className="label">기타</span></button>
                      </div>

                      <div className="group m-radio-menu">
                        <button type="button" className="bind"><span className="label">WM센터</span></button>
                        <button type="button" className="bind is-checked"><span className="label">출장소</span></button>
                        <button type="button" className="bind"><span className="label">긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름긴센터이름</span></button>
                        <button type="button" className="bind"><span className="label">기업금융센터</span></button>
                        <button type="button" className="bind"><span className="label">대기업금융센터</span></button>
                        <button type="button" className="bind"><span className="label">WM센터</span></button>
                        <button type="button" className="bind"><span className="label">출장소</span></button>
                        <button type="button" className="bind"><span className="label">기업금융센터</span></button>
                        <button type="button" className="bind"><span className="label">대기업금융센터</span></button>
                      </div>

                      <div className="group checks size-2">
                        <div className="item"><InputCheck label="전체" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명안산외국인금융센터긴지점명" defaultChecked /></div>
                        <div className="item"><InputCheck label="대구경북동부지역본부 기관영업팀" defaultChecked /></div>
                        <div className="item"><InputCheck label="하남데이터센터이전추진단" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                        <div className="item"><InputCheck label="강남WM센터" defaultChecked /></div>
                      </div>
                    </dd>
                  </div>

                  <div className="define-group">
                    <dt className="head">직책선택</dt>
                    <dd className="data">
                      <div className="group checks">
                        <div className="item"><InputCheck label="전체" /></div>
                        <div className="item"><InputCheck label="그룹장/본부장" /></div>
                        <div className="item"><InputCheck label="지점장" /></div>
                        <div className="item"><InputCheck label="서무대리" /></div>
                        <div className="item"><InputCheck label="서무책임" /></div>
                        <div className="item"><InputCheck label="서무팀장" /></div>
                        <div className="item"><InputCheck label="보안카드담당자" /></div>
                      </div>
                    </dd>
                  </div>
                </dl>

              </div>

              <div className="binds">
                <CommonButton label="조회" className="_inquire" />
              </div>
            </div>

            <div className="o-grid">
              <div className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h4 className="o-heading level2"><span className="label">검색결과</span></h4>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="초기화" className="_normal" />
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
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td className="g-start">사회공헌부</td>
                              <td>팀원</td>
                              <td>21215</td>
                              <td>김한별</td>
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

                <div className="o-section">
                  <div className="m-header">
                    <h4 className="o-heading level2"><span className="label">인수자목록</span></h4>

                    <div className="o-length">
                      <span className="head">전체</span>
                      <em className="data">
                        <span className="value">8</span>
                        <span className="units">건</span>
                      </em>
                    </div>

                    <div className="o-field">
                      <div className="fields">
                        <div className="o-form _input wdth-90">
                          <Icon icon="search" />
                          <AutoComplete className="bind" placeholder="직원번호/명을 입력해주세요" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                          <span className="inner-binds">
                            <ImageButton label="초기화" icon="remove" />
                          </span>
                        </div>
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
                          </colgroup>

                          <thead className="p-datatable-thead">
                            <tr>
                              <th className="p-align-center"><div className="p-column-header-content"><InputCheck label="전체​선택" labelHidden /></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직책</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><InputCheck label="선택" labelHidden /></td>
                              <td>{idx + 1}</td>
                              <td className="g-start">사회공헌부</td>
                              <td>팀원</td>
                              <td>21215</td>
                              <td>김한별</td>
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

            <div className="div-footer">
              <div className="m-binds type-end">
                <div className="group">
                  <CommonButton label="알림전송" className="_lined-secondary" />
                  <CommonButton label="결재선변경관리" className="_lined-secondary" />
                  <CommonButton label="결재바로가기" className="_lined-secondary" />
                </div>

                <div className="group _utility">
                  <div className="m-print-binds">
                    <CommonButton label="당일결정내역출력" className="_texted" />
                    <CommonButton label="결정출력" className="_texted" />
                    <CommonButton label="손상권출력" className="_texted" />
                    <CommonButton label="신청출력" className="_texted" />
                    <CommonButton label="출력" className="_texted" />
                  </div>
                </div>

                <div className="group _primary">
                  <CommonButton label="업무지원반려" className="_lined-primary" />
                  <CommonButton label="업무지원결정" className="_lined-primary" />
                  <CommonButton label="삭제" className="_delete" />
                  <CommonButton label="취소" className="_cancel" />
                  <CommonButton label="저장" className="_solid-primary" />
                  <CommonButton label="결재요청" className="_solid-primary _approve" />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default TMPL;
