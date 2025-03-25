/**
 * @description 관리자 > 인사정보 > 직원관리
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
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function ING() {
  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '관리자' }, { label: '인사정보' }, { label: '직원관리' }];

  // InputText
  const [value, setValue] = useState<string>('');

  return (
    <div className="roles" data-div-role="0">
      <div className="div-header">
        <BreadCrumb model={paths} className="o-breadcrumb" aria-label="Breadcurmb trail" />

        <div className="m-title">
          <h1 className="o-heading level1">
            <span className="label">직원관리</span>

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
                  <OLabel label={`소속직원`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`근무여부`} />
                  <div className="fields">
                    <div className="o-form _select">
                      <XDropdown appendTo={'self'} className="bind" />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`실근무부점`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`소속부점`} />
                  <div className="fields">
                    <div className="o-form _input">
                      <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                      <i aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="o-field">
                  <OLabel label={`부점변경 여부`} />
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
                <h2 className="o-heading level2"><span className="label">직원내역</span></h2>
              </div>

              <div className="main _primary">
                <DataTable className="o-grid-table g-hide" />{/* Unused { @DEV } */}
                <div className="o-grid-table p-datatable">
                  <div className="p-datatable-wrapper">
                    <table className="p-datatable-table p-datatable-scrollable-table">
                      <colgroup>
                        {/* <col style={{ width: 'calc(var(--rem) * 50)' }} />
                        <col style={{ width: '10%', minWidth: 'calc(var(--rem) * 92)' }} />
                        <col style={{ width: 'calc(var(--rem) * 64)' }} />
                        <col style={{ width: 'calc(var(--rem) * 64)' }} />
                        <col style={{ width: 'calc(var(--rem) * 100)' }} /> */}
                        <col style={{ minWidth: 'calc(var(--rem) * 50)' }} />
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
                        <col style={{ minWidth: 'calc(var(--rem) * 120)' }} />
                        <col />
                        <col />
                        <col />
                        <col style={{ minWidth: 'calc(var(--rem) * 120)' }} />
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
                        <tr key={idx} className={`${idx === 0 && 'p-highlight'}`}>
                          <td>{idx === 1 ? <OIcon icon="grid-edited" /> : idx + 1}</td>
                          <td>0000001</td>
                          <td>홍길동</td>
                          <td>0001</td>
                          <td className="g-start">영업부</td>
                          <td>0001</td>
                          <td className="g-start">영업부</td>
                          <td>0001</td>
                          <td className="g-start">동대문個</td>
                          <td><span className="o-figure type-date">2024-09-16</span></td>
                          <td>팀장</td>
                          <td className="g-start">BPR지원_일반</td>
                          <td>부점장급</td>
                          <td><span className="o-figure type-date">2024-09-16</span></td>
                          <td><span className="o-figure tel">02-729-7610</span></td>
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
                        <OImageButton label="검색" icon="search" />
                      </span>
                      <span className="inner-binds type-spin">
                        <OImageButton label="이전 탐색" icon="page-up" iconWidth={50} />
                        <OImageButton label="다음 탐색" icon="page-down" iconWidth={50} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="m-binds">
                  <div className="group">
                    <OButton label="모두펼침" className="_normal" />
                  </div>
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
                        <th>
                          <OLabel label={`상위​메뉴`} require={false} />
                        </th>
                        <td colSpan={3}>
                          <div className="o-field">
                            <div className="fields">
                              <div className="o-form _select">
                                <XDropdown appendTo={'self'} className="bind" />
                                <i aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
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
                          <span className="o-figure type-date">2024-09-16</span>
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

            직무분장
            <XDropdown />
            {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full md:w-14rem" checkmark={true}  highlightOnSelect={false} /> */}

          </div>

          <div className="column">

            근태정보

          </div>
        </div>

        <div className="div-footer">
          <div className="m-binds type-end">
            <div className="group _primary">
              <OButton label="취소" className="_cancel" />
              <OButton label="저장" className="_solid-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- // Contents { @DEV } --> */}
    </div>
  );
}

export default ING;
