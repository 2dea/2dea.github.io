/**
 * @description ADMAU0101M
 */

// dependency
import React, { useState } from 'react';

// components
import '@modules/Index';
import OLabel from '@modules/OLabel';
import { BreadCrumb } from 'primereact/breadcrumb';
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function ADMAU0101M() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '권한관리' }, { label: '생성관리' }];

  // 텍스트박스
  // const [value, setValue] = useState<string>('');

  return (
    <div className="roles" data-div-role="0">
      <div className="div-header">
        <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

        <div className="m-title">
          <h1 className="o-heading level1">
            <span className="label">생성관리</span>

            <label className="o-check type-symbol style-favorite">
              <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
              <span className="label _hidden">마이메뉴 등록</span>
            </label>
          </h1>
        </div>

        <div className="m-binds type-start">
          <div className="group">
            <button type="button" className="o-button _normal"><i aria-hidden="true" className="o-icon _lock"></i><span className="label">화면잠금</span></button>
            <button type="button" className="o-button _normal"><i aria-hidden="true" className="o-icon _help"></i><span className="label">도움말</span></button>
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

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">메뉴내역</span></h2>

                  <div className="m-binds">
                    <div className="group">
                      <button type="button" className="o-button _normal"><span className="label">모두펼침</span></button>
                    </div>
                  </div>
                </div>

                <div className="main _primary">
                  <DataTable className="o-grid-table g-hidden" />
                  <div className="o-grid-table p-datatable">
                    <div className="p-datatable-wrapper">
                      <table className="p-datatable-table p-datatable-scrollable-table">
                        <colgroup>
                          <col style={{ width: 'calc(var(--rem) * 50)' }} />
                          <col style={{ width: '10%', minWidth: 'calc(var(--rem) * 92)' }} />
                          <col />
                          <col style={{ width: 'calc(var(--rem) * 64)' }} />
                          <col style={{ width: 'calc(var(--rem) * 64)' }} />
                          <col style={{ width: 'calc(var(--rem) * 96)' }} />
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
                            <td colSpan={6}>No available options</td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                          {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <td>{idx + 1}</td>
                            <td>AABB00001</td>
                            <td className="g-start">
                              <div className="o-depth level0">
                                <span className="icons">
                                  <i className="o-icon _folder-open" aria-hidden="true"></i>
                                </span>
                                <span className="main">홈</span>
                              </div>
                            </td>
                            <td>Y</td>
                            <td>Y</td>
                            <td><span className="o-date">2025-02-03</span></td>
                          </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="column views">

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level3"><span className="label">메뉴정보</span></h2>

                  {/* <div className="m-binds">
                    <div className="group">
                      <button type="button" className="o-button _create"><span className="label">신규</span></button>
                    </div>
                  </div> */}
                </div>

                <div className="main">
                  <div className="m-data-form">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>
                            <OLabel label={`상위​메뉴`} require={false} />
                          </th>
                          <td colSpan={3}>
                            원화현수송
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`메뉴​ID`} require={false} />
                          </th>
                          <td colSpan={3}>
                            AABB00003
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`메뉴명`} require={false} />
                          </th>
                          <td colSpan={3}>
                            원화현수송신청
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`정렬​순서`} require={false} />
                          </th>
                          <td colSpan={3}>
                            000
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`노출​여부`} require={false} />
                          </th>
                          <td colSpan={3}>
                            Y
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`사용​여부`} require={false} />
                          </th>
                          <td colSpan={3}>
                            Y
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`등록자`} require={false} />
                          </th>
                          <td colSpan={3}>
                            홍길동
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <OLabel label={`등록​일자`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <span className="o-date">2025-02-03</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level4"><span className="label">화면매핑정보</span></h2>

                  <div className="m-binds">
                    <div className="group">
                      <button type="button" className="o-button _normal"><span className="label">화면매핑</span></button>
                    </div>
                  </div>
                </div>

                <div className="main _primary rows-body-3i">
                  <DataTable className="o-grid-table g-hidden" />
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
                          <tr key={idx} className={ (idx === 0) && "p-highlight" }>
                            <td>{idx + 1}</td>
                            <td>AABB00001M00</td>
                            <td className="g-start">
                              <div className="o-with-bind">
                                <span className="main">원화현수송신청_관련화면 01</span>
                                <span className="binds">
                                  <button type="button" title="삭제" className="o-image-button o-icon _delete"><span className="label">삭제</span></button>
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

          <div className="div-footer">
            <div className="m-binds type-end">
              <div className="group">
                <button type="button" className="o-button _lined-secondary"><span className="label">알림전송</span></button>
                <button type="button" className="o-button _lined-secondary"><span className="label">결재선변경관리</span></button>
                <button type="button" className="o-button _lined-secondary"><span className="label">결재바로가기</span></button>
              </div>

              <div className="group _utility">
                <div className="m-print-binds">
                  <button type="button" className="o-button _texted"><span className="label">당일결정내역출력</span></button>
                  <button type="button" className="o-button _texted"><span className="label">결정출력</span></button>
                  <button type="button" className="o-button _texted"><span className="label">손상권출력</span></button>
                  <button type="button" className="o-button _texted"><span className="label">신청출력</span></button>
                  <button type="button" className="o-button _texted"><span className="label">출력</span></button>
                </div>
              </div>

              <div className="group _primary">
                <button type="button" className="o-button _lined-primary"><span className="label">업무지원반려</span></button>
                <button type="button" className="o-button _lined-primary"><span className="label">업무지원결정</span></button>
                <button type="button" className="o-button _delete"><span className="label">삭제</span></button>
                <button type="button" className="o-button _solid-primary"><span className="label">결재요청</span></button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      {/* <!-- // Contents { @DEV } --> */}
      {/* </div></div> */}
    </div>
  );
}

export default ADMAU0101M;
