/**
 * @description 관리자 > 권한위임 > 사용자별 권한관리
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

function ADMAC0201M() {
  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '권한위임' }, { label: '사용자별 권한관리' }];

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
      <div className="roles" data-div-role="0">
        <div className="div-header">
          <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

          <div className="m-title">
            <h1 className="o-heading level1">
              <span className="label">사용자별 권한관리</span>

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
                    <OLabel label={`직원번호/명`} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <OLabel label={`권한명`} />
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
                      <OImageButton label="엑셀​다운로드" icon="_excel-download" />
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
                  <h2 className="o-heading level3"><span className="label">사용자정보</span></h2>

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
                            <OLabel label={`직원번호/명`} require={false} />
                          </th>
                          <td colSpan={3}>
                            [000001] 홍길동
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={3}>
                            <OLabel label={`직책`} require={false} />
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
                  <h2 className="o-heading level3"><span className="label">권한설정</span></h2>
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

          <div className="div-footer">
            <div className="m-binds type-end">
              <div className="group _primary">
                <OButton label="저장" className="_solid-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADMAC0201M;
