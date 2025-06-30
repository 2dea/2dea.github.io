/**
 * @description 중요용지·용도품(본부) > 본부재고관리 > 일람부관리
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

function HSPHS1901M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품(본부)' }, { label: '본부재고관리' }, { label: '일람부관리' }];

  // InputText
  const [value, setValue] = useState<string>('');

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
                <span className="label">일람부관리</span>

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
              <div className="group _utility">
                <div className="m-print-binds">
                  <CommonButton label="출력" className="_texted" />
                </div>
              </div>

              <div className="group _primary">
                <CommonButton label="거래정지" className="_lined-primary" />
                <CommonButton label="정상" className="_lined-primary" />
                <CommonButton label="수정" className="_lined-primary" />
                <CommonButton label="일람부등록" className="_solid-primary" />
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
                    <Label label={`출급번호/품목명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`품명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`구분`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`상태`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`중분류`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">재고내역</span></h2>

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
                          <col />
                          <col />
                          <col />
                        </colgroup>

                        <thead className="p-datatable-thead">
                          <tr>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">순번</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호분류</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">진행상태</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">접수자</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">확인자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">확인일자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">반려사유</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">품목상태</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">단위당매수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최저인도량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최고인도량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">배송단위량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급단위</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규연월일</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">폐지연월일</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출급번호구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수입인지납부대상</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">수입인지단가</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">자동배송대상</span></div></th>

                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">자동배송기준</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">소관부점</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">의뢰부점</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신규출급번호</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대금정산</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">대금정산비목</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">업체직접배송</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">신청제한일수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">PB품목여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">카드품목구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">홍보물유형</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">홍보물상품구분</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">담당팀명</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">담당연락처</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">기호유무</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호자리수</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">체크디지트</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">창구일련번호관려여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일반영업점기준량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">출장소기준량</span></div></th>


                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">본부영업점기준량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">종류구분여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">일련번호중복인도불가여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">RM지점여부</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">본부자동배송량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">지역자동배송량</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이미지여부1</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이미지여부2</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">이미지여부3</span></div></th>
                            <th colSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종수정자</span></div></th>
                            <th rowSpan={2} className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">최종수정일시</span></div></th>

                          </tr>
                          <tr>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                            <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                          </tr>
                        </thead>

                        <tbody className="p-datatable-tbody">
                          <tr className="p-datatable-emptymessage">
                            <td colSpan={55}><div className="gridtable-empty">등록된 데이터가 없습니다.</div></td>
                          </tr>
                        </tbody>

                        <tbody className="p-datatable-tbody">
                        {[...Array(24)].map((e, idx) => (
                          <tr key={idx} className={`${idx === 0 ? 'p-highlight' : ''}`}>{/* 그리드 최초 진입시 첫번째 행 tr.p-highlight <$tr.trigger('click')> { @DEV } */}
                            <td>{idx + 1}</td>
                            <td>PD011</td>
                            <td className="g-start">국민관광상품권1만원권</td>
                            <td className="g-start">소모품(소모품비품목)</td>
                            <td>접수</td>
                            <td>000000</td>
                            <td>홍길동</td>
                            <td>000000</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td className="g-start"></td>
                            <td>폐지(재고사용불가)</td>
                            <td className="g-end">10,300</td>
                            <td className="g-end">100</td>
                            <td className="g-end">200</td>
                            <td className="g-end">1</td>
                            <td>BOX</td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td><span className="o-digit type-date">2025-12-25</span></td>
                            <td>홍보물</td>
                            <td>N</td>
                            <td className="g-end">0</td>
                            <td>N</td>

                            <td></td>
                            <td>총무부</td>
                            <td>스마트금융</td>
                            <td></td>
                            <td>N</td>
                            <td>소모품비</td>
                            <td>N</td>
                            <td className="g-end">1</td>
                            <td></td>
                            <td></td>
                            <td>리풀렛</td>
                            <td>리풀렛</td>
                            <td></td>
                            <td>8-733</td>
                            <td>N</td>
                            <td className="g-end">1</td>
                            <td className="g-end">1</td>
                            <td>N</td>
                            <td className="g-end">1</td>
                            <td className="g-end">1</td>

                            <td className="g-end">1</td>
                            <td>N</td>
                            <td>N</td>
                            <td>N</td>
                            <td></td>
                            <td></td>
                            <td>Y</td>
                            <td>N</td>
                            <td>N</td>
                            <td>DBDB733</td>
                            <td>홍길동</td>
                            <td><span className="o-digit type-datetime">2025-12-25 09:10:59</span></td>
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
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default HSPHS1901M;
