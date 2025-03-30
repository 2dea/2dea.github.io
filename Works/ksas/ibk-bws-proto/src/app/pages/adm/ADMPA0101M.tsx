/**
 * @description 관리자 > 인사정보 > 부점관리
 */

// dependency
import React, { useState } from 'react';

// components
// import '@modules/Index';
import OIcon from 'app/shared/modules/OIcon';
import OLabel from 'app/shared/modules/OLabel';
import OButton from 'app/shared/modules/OButton';
import OImageButton from 'app/shared/modules/OImageButton';
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

function ADMPA0101M() {
  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '인사정보' }, { label: '부점관리' }];

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
    <div className="roles" data-div-role="0">
      <div className="div-header">
        <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

        <div className="m-title">
          <h1 className="o-heading level1">
            <span className="label">부점관리</span>

            <label className="o-check type-symbol style-favorite">
              <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
              <span className="label _hidden">마이메뉴 등록</span>
            </label>
          </h1>
        </div>

        <div className="m-binds type-start">
          <div className="group">
            <OButton label="화면잠금" icon="lock" className="_normal" />
            <OButton label="도움말" icon="help" className="_normal" />
          </div>
        </div>
      </div>

      {/* <!-- /* Contents { @DEV } --> */}
      <div className="div-contents">
        <div className="o-grid">
          <div className="column">

            <form className="m-filter-form">
              <div className="fieldset">

                <div className="o-field">
                  <OLabel label={`부점코드`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`부점상태`} />
                  <div className="fields">
                    <div className="o-form _select">
                      <XDropdown appendTo={'self'} className="bind" />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`부점구분`} />
                  <div className="fields">
                    <div className="o-form _select">
                      <XDropdown appendTo={'self'} className="bind" />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`지역본부`} />
                  <div className="fields">
                    <div className="o-form _select">
                      <XDropdown appendTo={'self'} className="bind" />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

              </div>

              <div className="binds">
                <button type="button" className="o-button _inquire"><span className="label">조회</span></button>
              </div>
            </form>

            <div className="o-section">
              <div className="m-header">
                <h2 className="o-heading level2"><span className="label">부점내역</span></h2>
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
                <h2 className="o-heading level3"><span className="label">상세정보</span></h2>

                <div className="m-binds">
                  <div className="group">
                    <OButton label="신규" className="_create" />
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
                          <OLabel label={`부점정보`} require={false} />
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
                          <OLabel label={`영문부점명`} require={false} />
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
                          <OLabel label={`사업자등록번호`} require={false} />
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
                          <OLabel label={`부점약칭명`} require={false} />
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
                          <OLabel label={`부점약칭명2`} require={false} />
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
                          <OLabel label={`부점구분코드`} require={false} />
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
                          <OLabel label={`부점소재지코드`} require={false} />
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
                          <OLabel label={`부점전화번호`} require={false} />
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
                          <OLabel label={`주소`} require={false} />
                        </th>
                        <td colSpan={9}>
                          <div className="o-field">
                            <div className="fields">
                              <div className="o-form _input wdth-40">
                                <InputText placeholder="" value="00000" className="bind" onChange={(e) => setValue(e.target.value)} readOnly />
                                <i aria-hidden="true"></i>
                                <span className="inner-binds">
                                  <OImageButton label="검색" icon="search" />
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
                          <OLabel label={`팩스`} require={false} />
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
                          <OLabel label={`온라인번호`} require={false} />
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
                          <OLabel label={`지도코드`} require={false} />
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
                          <OLabel label={`소유구분코드`} require={false} />
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
                          <OLabel label={`외환부점코드`} require={false} />
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
                          <OLabel label={`재활모점코드`} require={false} />
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
                          <OLabel label={`모점코드`} require={false} />
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
                          <OLabel label={`교환모점코드`} require={false} />
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
                          <OLabel label={`국고결제모점코드`} require={false} />
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
                          <OLabel label={`한국은행관할​통합부점코드`} require={false} />
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
                          <OLabel label={`관할사업본부코드`} require={false} />
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
                          <OLabel label={`관할본부코드`} require={false} />
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
                          <OLabel label={`지역본부코드`} require={false} />
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
                          <OLabel label={`사무지원센터코드`} require={false} />
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
                          <OLabel label={`부점장코드`} require={false} />
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
                          <OLabel label={`부점장부임일`} require={false} />
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
                          <OLabel label={`부점상태코드`} require={false} />
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
                          <OLabel label={`개점일`} require={false} />
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
                          <OLabel label={`폐점일`} require={false} />
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
                          <OLabel label={`EDW​실제근무​부점코드`} require={false} />
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
                          <OLabel label={`계리부점코드`} require={false} />
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
                          <OLabel label={`조직속성코드`} require={false} />
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

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <OButton label="삭제" className="_delete" />
              <OButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- // Contents { @DEV } --> */}
    </div>
  );
}

export default ADMPA0101M;
