/**
 * @description SUBTMPL
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

function POPTMPL() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

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
      <Dialog
        className="layer-wrap"
        visible={visible}
        style={{ width: '520px' }}
        onHide={() => {if (!visible) return; setVisible(false); }}
        // footer={<></>}
        header={<h3 className="o-heading"><span className="label">관련화면매핑</span></h3>}
      >
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

        <div className="div-footer">
          <div className="m-binds">
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
              <span className="label">(P)관련화면매핑 [w765]</span>
            </h1>
          </div>
        </div>

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

export default POPTMPL;
