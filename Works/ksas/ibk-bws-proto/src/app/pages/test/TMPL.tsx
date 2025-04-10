/**
 * @description 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
 */

// dependency
import React, { useState } from 'react';

// components
// import '@modules/Index';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import XDropdown from 'app/shared/modules/XDropdown';
import { Dialog } from 'primereact/dialog';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TMPL() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품' }, { label: '본부부서조달관리(총무부 외)' }, { label: '(706520)(총무부 외) 중요용지 조달신청 접수' }];

  // InputText
  const [value, setValue] = useState<string>('');

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
      {/* <Dialog className="o-loading-layer" baseZIndex={2000} visible={visible} onHide={() => {if (!visible) return; setVisible(false); }} content={({ hide }) => (
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
            <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

            <div className="m-title">
              <h1 className="o-heading level1">
                <span className="label">(총무부 외) 중요용지 조달신청 접수</span>

                <label className="o-check type-symbol style-favorite">
                  <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
                  <span className="label _hidden">마이메뉴 등록</span>
                </label>
              </h1>
            </div>
          </div>

          {/* <div className="m-binds type-start">
            <div className="group">
              <CommonButton label="화면잠금" icon="lock" className="_normal" />
              <CommonButton label="도움말" icon="help" className="_normal" />
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
                <CommonButton label="도움말" icon="help" className="_normal" />
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

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`부점코드`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점상태`} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점구분`} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`지역본부`} />
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={18}>등록된 데이터가 없습니다.</td>
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
                              <td><span className="o-digit type-number">123-45-67890</span></td>
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
                            <th colSpan={3}>
                              <Label label={`부점정보`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`영문부점명`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="BANKING DEPARTMENT" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`사업자등록번호`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-number">
                                    <InputText placeholder="" value="202-81-00978" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점약칭명`} require={false} />
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
                            <th colSpan={3}>
                              <Label label={`부점약칭명2`} require={false} />
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

                            <th colSpan={3}>
                              <Label label={`부점구분코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점소재지코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점전화번호`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="02" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="sep type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="sep type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0000" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`주소`} require={false} />
                            </th>
                            <td colSpan={9}>
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

                            <th colSpan={3}>
                              <Label label={`팩스`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="729" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <span className="sep type-hyphen">-</span>
                                  <div className="o-form _input wdth-20">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`온라인번호`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                            <th colSpan={3}>
                              <Label label={`지도코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`소유구분코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`외환부점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0484" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`재활모점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                            <th colSpan={3}>
                              <Label label={`모점코드`} require={false} />
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

                            <th colSpan={3}>
                              <Label label={`교환모점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`국고결제모점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`한국은행관할​통합부점코드`} require={false} />
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
                            <th colSpan={3}>
                              <Label label={`관할사업본부코드`} require={false} />
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

                            <th colSpan={3}>
                              <Label label={`관할본부코드`} require={false} />
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

                            <th colSpan={3}>
                              <Label label={`지역본부코드`} require={false} />
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

                            <th colSpan={3}>
                              <Label label={`사무지원센터코드`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                            <th colSpan={3}>
                              <Label label={`부점장코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[021189] 이범건" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점장부임일`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점상태코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`개점일`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`폐점일`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`EDW​실제근무​부점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0810" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`계리부점코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="0001" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`조직속성코드`} require={false} />
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
                      <Label label={`소속직원`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`근무여부`} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`실근무부점`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`소속부점`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`부점변경 여부`} />
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={16}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              {/* <td><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /></td> */}
                              <td>{idx === 2 ? <Icon icon="grid-edited" /> : idx + 1}</td>{/* 수정된 행 .o-icon._grid-edited 순번 대체 { @DEV } */}
                              <td>0000001</td>
                              <td>홍길동</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">영업부</td>
                              <td>0001</td>
                              <td className="g-start">동대문個</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                              <td>팀장</td>
                              <td className="g-start">BPR지원_일반</td>
                              <td>부점장급</td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                            <th colSpan={3}>
                              <Label label={`직원`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0000001] 홍길동" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`소속부점`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`소속팀`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`실근무점`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                            <th colSpan={3}>
                              <Label label={`EDW 실근무부점`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input">
                                    <InputText placeholder="" value="[0001] 영업부" className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`직책코드`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-50">
                                    <XDropdown appendTo={'self'} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`근부여부`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="m-checks">
                                <label className="o-check"><RadioButton inputId="" name="RADIO_01" value="RADIO_01-1" onChange={(e) => setIngredient(e.value)} checked={true || ingredient === 'RADIO_01-1'} /><span className="label">근무</span></label>
                                <label className="o-check"><RadioButton inputId="" name="RADIO_01" value="RADIO_01-2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'RADIO_01-2'} /><span className="label">퇴직</span></label>
                              </div>
                            </td>

                            <th colSpan={3}>
                              <Label label={`부점변경예정 (종료일)`} require={false} />
                            </th>
                            <td colSpan={3}>
                              <div className="o-field">
                                <div className="fields">
                                  <label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label>
                                  <div className="o-form _input type-date wdth-50">
                                    <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon disabled />
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={3}>등록된 데이터가 없습니다.</td>
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

              </div>

              <div className="column">

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
                      <div className="p-datatable-wrapper">
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
                              <th className="p-align-center"><div className="p-column-header-content"><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">전체&#x200B;선택</span></label></div></th>
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
                              <td colSpan={11}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(1)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
                              <td>{idx + 1}</td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                              <td><span className="o-digit type-date">2024-09-16</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td><span className="o-digit type-time">00:00</span></td>
                              <td>[0000001] 홍길동</td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                            <tr>
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
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
                                      <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon />
                                      <i aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="o-field">
                                  <div className="fields">
                                    <div className="o-form _input type-date wdth-50">
                                      <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon />
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

              </div>
            </div>

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`코드도메인`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`사용여부`} />
                      <div className="fields">
                        <div className="o-form _select">
                          <XDropdown appendTo={'self'} className="bind" />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`도메인명`} />
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
                        <CommonButton label="취소" className="_cancel" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
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
                              <th className="p-align-center"><div className="p-column-header-content"><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">전체&#x200B;선택</span></label></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">코드도메인</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">한글명</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">사용여부</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">설명</span></div></th>
                            </tr>
                          </thead>

                          <tbody className="p-datatable-tbody">
                            <tr className="p-datatable-emptymessage">
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(15)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 2 ? 'p-x-mode-edited' : idx === 0 ? 'p-highlight' : ''}`}>{/* 수정된 행 tr.p-x-mode-edited | 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
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

              <div className="column">

                <div className="o-section">
                  <div className="m-header">
                    <h3 className="o-heading level3"><span className="label">코드도메인 상세내용</span></h3>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="행추가" className="_normal" />
                        <CommonButton label="행삭제" className="_normal" />
                        <CommonButton label="취소" className="_cancel" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
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
                              <th className="p-align-center"><div className="p-column-header-content"><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">전체&#x200B;선택</span></label></div></th>
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
                              <td colSpan={8}>등록된 데이터가 없습니다.</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(10)].map((e, idx) => (
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
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

              </div>
            </div>

            <div className="o-grid">
              <div className="column">

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
                          <span className="inner-binds type-spin">
                            <ImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                            <ImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="m-binds">
                      <div className="group">
                        <CommonButton label="모두펼침" className="_normal" />
                      </div>
                    </div>
                  </div>

                  <div className="main _primary">
                    <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                    <div className="o-grid-table p-datatable">
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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
                              <td><span className="o-digit type-date">2024-09-16</span></td>
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

              </div>

              <div className="column views">

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
                            <th colSpan={3}>
                              <Label label={`상위메뉴`} require={false} />
                            </th>
                            <td colSpan={3}>
                              원화현수송
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`메뉴ID`} require={false} />
                            </th>
                            <td colSpan={3}>
                              AABB00003
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`메뉴명`} require={false} />
                            </th>
                            <td colSpan={3}>
                              원화현수송신청
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`정렬순서`} require={false} />
                            </th>
                            <td colSpan={3}>
                              000
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`노출여부`} require={false} />
                            </th>
                            <td colSpan={3}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`사용여부`} require={false} />
                            </th>
                            <td colSpan={3}>
                              Y
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`등록자`} require={false} />
                            </th>
                            <td colSpan={3}>
                              홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`등록일자`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={3}>No available options</td>
                            </tr>
                          </tbody>

                          <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                            // <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                              <td>{idx + 1}</td>
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
                </div>

              </div>
            </div>

            <div className="o-grid">
              <div className="column">

                <form className="m-filter-form">
                  <div className="fieldset">

                    <div className="o-field">
                      <Label label={`직원번호/명`} />
                      <div className="fields">
                        <div className="o-form _input">
                          <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                          <i aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div className="o-field">
                      <Label label={`권한명`} />
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={5}>등록된 데이터가 없습니다.</td>
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
                    </ul>
                  </div>
                </div>

              </div>

              <div className="column">

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
                            <th colSpan={3}>
                              <Label label={`직원번호/명`} require={false} />
                            </th>
                            <td colSpan={3}>
                              [000001] 홍길동
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3}>
                              <Label label={`직책`} require={false} />
                            </th>
                            <td colSpan={3}>
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
                      <div className="p-datatable-wrapper">
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
                              <td colSpan={6}>등록된 데이터가 없습니다.</td>
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
                              <td><label className="o-check"><Checkbox checked={checked} onChange={e => setChecked(e.checked)} /><span className="label _hidden">선택</span></label></td>
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

            {/* <div className="div-footer">
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
                  <CommonButton label="결재요청" className="_solid-primary" />
                  </div>
              </div>
            </div> */}
          </TabPanel>
        </Tabs>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default TMPL;
