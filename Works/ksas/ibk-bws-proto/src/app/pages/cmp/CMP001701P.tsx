/**
 * @description 공통 ~ (LP)마이페이지
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

function CMP001701P() {
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
        className="layer-wrap case-mypage wdth-40p" /* 40p: 770, 50p: 960, 60p: 1150, 70p: 1340, 80p: 1540, 90p: 1730 */
        headerClassName="layer-head"
        contentClassName="layer-body"
        visible={visible}
        style={{}}
        onHide={() => { if (!visible) return; setVisible(false); }}
        closeIcon={<Icon icon="popup-close" />}
        modal={true}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">마이페이지</span></h3>}
      >
        <div className="div-middle">
          <div className="mypage">
            <div className="primary">
              <div className="user">
                <div className="main">
                  <span className="name">홍길동</span>
                  <span className="position">대리</span>
                </div>
                <div className="sub">
                  <em className="id">999999</em>
                </div>
              </div>

            </div>

            <div className="secondary">
              <ul className="inform">
                <li>
                  <strong className="head">부점</strong>
                  <span className="data">[0810] 프로세스혁신부</span>
                </li>
                <li>
                  <strong className="head">실근무지</strong>
                  <span className="data"><em className="emph">수지IT센터</em></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="div-container">

          <Tabs className="m-tabs react-tabs" defaultIndex={0} style={{ minHeight: 'calc(var(--rem) * 355)' }}>
            <div className="m-tab type2">
              <TabList className="lists">
                <Tab className="link"><span className="label">템플릿테마 설정</span></Tab>
                <Tab className="link"><span className="label">실근무지 설정</span></Tab>
                <Tab className="link"><span className="label">알림수신 설정</span></Tab>
              </TabList>
            </div>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="m-mypage">
                <div className="header">
                  <div className="o-board type-b style-fit">
                    <div className="o-rich-text">
                      <p className="para">
                        업무지원시스템을 원하시는 컬러의 테마로 설정해보세요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="m-theme-select">
                    <ul>
                      <li>
                        <div className="card">
                          <InputRadio name="RADIO_THEME" label="화이트 테마" labelHidden defaultChecked />

                          <figure className="figure" aria-hidden="true">
                            <img src={require("assets/images/media/CMP001701P_010_000.png")} alt="" />

                            <figcaption className="caption">화이트 테마</figcaption>
                          </figure>
                        </div>
                      </li>
                      <li>
                        <div className="card">
                          <InputRadio name="RADIO_THEME" label="블루 테마" labelHidden />

                          <figure className="figure" aria-hidden="true">
                            <img src={require("assets/images/media/CMP001701P_010_001.png")} alt="" />

                            <figcaption className="caption">블루 테마</figcaption>
                          </figure>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="m-mypage">
                <div className="header">
                  <div className="o-board type-b style-fit">
                    <div className="o-rich-text">
                      <p className="para">
                        현재 출퇴근하고 계신 실제 근무지를 설정해주세요.<br />
                        설정된 실근무지는 행내등기 신청정보에 자동 세팅됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <form className="m-data-form style-rawer">
                    <table className="table">
                      <colgroup>
                        <col className="head aut" style={{ '--em': 5 } as React.CSSProperties} />
                        <col className="data" />
                      </colgroup>

                      <tbody>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`부점`} require={false} />
                          </th>
                          <td colSpan={1}>
                            [0810] 프로세스혁신부
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1}>
                            <Label label={`실근무지`} require={false} />
                          </th>
                          <td colSpan={1}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _select wdth-90">
                                  <XDropdown appendTo={'self'} className="bind" />
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
            </TabPanel>

            <TabPanel className="m-tabs-panel react-tabs__tab-panel">
              <div className="m-mypage">
                <div className="header">
                  <div className="o-board type-b style-fit">
                    <div className="o-rich-text">
                      <p className="para">
                        업무별 알림설정 및 수신 방법을 설정해주세요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="m-checksgroup">
                    <ul className="m-checkslist">
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck moduleId="CMP001701P-tooltip-10" label="행내등기 관련 모든 알림 수신거부" />
                              <Tooltip className="o-tooltip" target="#CMP001701P-tooltip-10" position="top">
                                아래 개별 수신여부와 상관없이 행내등기와 관련된 모든 알림이 수신거부 됩니다.
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="m-checkslist">
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck label="개인 미인수(신청제한)내역 안내 알림" defaultChecked />
                            </div>

                            <fieldset className="check-container">
                              <div className="m-checks">
                                <InputRadio name="RADIO_10" label="행내우편" defaultChecked />
                                <InputRadio name="RADIO_10" label="IBK톡(알림)" />
                                <InputRadio name="RADIO_10" label="IBK톡(쪽지)" />
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck label="프로세스혁신부 메일센터 검수(발송) 시 알림" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck label="부점 접수 시 인수자(본인) 알림" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck label="당일 부점 접수분 인수요청 알림(접수 후 미인수 시 1시간 주기)" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="checks">
                          <div className="check-container">
                            <div className="m-checks">
                              <InputCheck label="인수자(본인)인 경우 서무대리 인수 시 인수자(본인) 알림" />
                            </div>

                            <fieldset className="check-container" disabled>
                              <div className="m-checks">
                                <InputRadio name="RADIO_10" label="행내우편" />
                                <InputRadio name="RADIO_10" label="IBK톡(알림)" />
                                <InputRadio name="RADIO_10" label="IBK톡(쪽지)" />
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
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
              <span className="label">(P)마이페이지 [wdth-40p(w770)]</span>
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

export default CMP001701P;
