import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import RoleMainHeaderTitle from "@/layout/RoleMainHeaderTitle";
import RoleMainHeaderFavorite from "@/layout/RoleMainHeaderFavorite";
import RoleMainHeaderManual from "@/layout/RoleMainHeaderManual";
import SppBreadcrumb from "@/pages/spp/component/Breadcrumb/SppBreadcrumb";

import { Badge, Tabs } from "antd";
import type { ColumnsType, TableRowSelection } from "antd/es/table/interface";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppButton from "@/pages/spp/component/Button/SppButton";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";
import SppInputText from "@/pages/spp/component/Input/SppInputText";
import SppMultiSelect from "@/pages/spp/component/Select/SppMultiSelect";
import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";
import SppSelect from "@/pages/spp/component/Select/SppSelect";
import SppTable from "@/pages/spp/component/Table/SppTable";
import SppTextArea from "@/pages/spp/component/TextArea/SppTextArea";

import PopupSample from "./popup/PopupSample";


function TmpTsProg() {
  const [isOpenPopupSample, setIsOpenPopupSample] = useState(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // interface table9010 {}
  const table9010Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:58:46` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: 219, ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '조회용도', render: (v, r, i) => { return (
      <SppMultiSelect placeholder="조회용도 선택" width="60"
        options={[
          { value: '0', label: '수신업무(펀드,방카,신탁 등)' },
          { value: '1', label: '여신업무' },
          { value: '2', label: '외환업무' },
          { value: '3', label: '부수대행/전자금융' },
          { value: '4', label: '담당고객 기일관리' },
          { value: '5', label: '마케팅' },
          { value: '6', label: '내부통제(감사부,준법감시부,여신감리부 등)' },
          { value: '7', label: '기타(단순업무문의 등)' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '조회목적', render: (v, r, i) => { return (
      <SppSelect placeholder="조회목적 선택" width="60"
        options={[
          { value: '0', label: '상담' },
          { value: '1', label: '고객요청' },
          { value: '2', label: '기타' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '조회사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '반려사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} className="mode-string" value={`이러이러한 이유와 저러저러한 사유로 반려하고 싶으나 뭔가 이유가 있었을 거라 나는 생각하긴 하지만 그래도 이러이러한 이유와 저러저러한 사유로 반려`} readOnly />
    ) }, },

    // { dataIndex: 'data9998', width: '', ellipsis: false, align: 'start', title: <SppObjLabel label={`커스텀레이블`} required={true} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, },
    // { dataIndex: 'data9999', width: 99, ellipsis: true, align: 'start', title: '테스트', },
    // { dataIndex: 'data9999', width: '', ellipsis: false, align: 'start', title: '비고', },
  ];
  const table9010DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({
    // key: i,
    // data1000: `${i + 1}`,
    // data9998: `가느다란 몸 부수어 쥔 총칼, 터, 평화`,
    // data9999: `다람쥐 헌 쳇바퀴에 타고파.`,
  }));

  const columns: ColumnsType<any> = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address', className: 'g-start' },

    { title: <SppObjLabel label="Column 8" required={false} />, dataIndex: 'address', key: '8' },
    { title: <SppObjLabel label="Column 9" required={true} />, dataIndex: 'address', key: '9' },
    { title: <SppObjLabel label="Column 10" required={false} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, dataIndex: 'address', key: '10' },
    { title: <SppObjLabel label="Column 11" required={true} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, dataIndex: 'address', key: '11' },
    { title: '인풋', dataIndex: 'testTableInput', key: 'testTableInput',
      render: (value, row) => {
        return <SppDatePicker placeholder="" picker="month" />
      },
    },
    { title: 'Column 12', dataIndex: 'address', key: '12' },
    { title: 'Column 13', dataIndex: 'address', key: '13' },
    { title: 'Column 14', dataIndex: 'address', key: '14' },
    { title: 'Column 15', dataIndex: 'address', key: '15' },
    { title: 'Column 16', dataIndex: 'address', key: '16' },
    { title: 'Column 17', dataIndex: 'address', key: '17' },
    { title: 'Column 18', dataIndex: 'address', key: '18' },
    { title: 'Column 19', dataIndex: 'address', key: '19' },
    { title: 'Column 20', dataIndex: 'address', key: '20' },
  ];
  const dataSource = Array.from<any>({ length: 128 }).map<any>((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }));

  const table2010Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자(또는 휴가/연수/기타 종료일자)', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'end', title: '내 미처리 건수', render: (v, r, i) => { return ( <strong className="g-bold c-color-point">9,999</strong> ) }, },
  ];
  const table2010DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2020Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:58:46` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: 219, ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: <SppObjLabel label="조회용도" required={true} />, render: (v, r, i) => { return (
      <SppMultiSelect placeholder="조회용도 선택" width="60"
        options={[
          { value: '0', label: '수신업무(펀드,방카,신탁 등)' },
          { value: '1', label: '여신업무' },
          { value: '2', label: '외환업무' },
          { value: '3', label: '부수대행/전자금융' },
          { value: '4', label: '담당고객 기일관리' },
          { value: '5', label: '마케팅' },
          { value: '6', label: '내부통제(감사부,준법감시부,여신감리부 등)' },
          { value: '7', label: '기타(단순업무문의 등)' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: <SppObjLabel label="조회목적" required={true} />, render: (v, r, i) => { return (
      <SppSelect placeholder="조회목적 선택" width="60"
        options={[
          { value: '0', label: '상담' },
          { value: '1', label: '고객요청' },
          { value: '2', label: '기타' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: <SppObjLabel label="조회사유" required={true} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '반려사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} className="mode-string" value={`이러이러한 이유와 저러저러한 사유로 반려하고 싶으나 뭔가 이유가 있었을 거라 나는 생각하긴 하지만 그래도 이러이러한 이유와 저러저러한 사유로 반려`} readOnly />
    ) }, },
  ];
  const table2020DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  return (
    <>
              <div className="nodes" data-node-no="0">
                <div className="div-header">
                  <div className="prime">
                    <SppBreadcrumb itemsArray={['개인(신용)​정보보호', '주민번호, 민감정보 관리', '주민등록번호, 민감정보 처리현황 목록']} />

                    <div className="m-title">
                      <RoleMainHeaderTitle label={`전일조회사유등록`} render={false} />

                      <RoleMainHeaderFavorite render={true} />

                      <RoleMainHeaderManual render={true} />
                    </div>
                  </div>

                  <div className="extra">
                    <div className="m-binds type-end">
                      <div className="group _primary">
                        <SppButton variant="outlined" color="purple" specName="lined-1">미처리현황조회</SppButton>
                        <SppButton variant="solid" color="purple" specName="solid-1">최종반려</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="div-center">

                  <div className="m-grid">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel label={`조회기간`} required={true} wrapper="header" />

                            <div className="main">
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                              <span className="seps type-string _tilde"><span className="string">~</span></span>
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={false} wrapper="header" />

                            <div className="main">
                              <SppSelect width="90"
                                // options={[
                                //   { value: '0', label: '전체' },
                                //   { value: '1', label: '예' },
                                //   { value: '2', label: '아니오' },
                                // ]}
                                defaultValue={['0']}
                              />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton variant="solid" color="default" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">총 건수</dt>
                            <dd className="data">
                              9,999
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">결재요청중</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">결재완료</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">미등록</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">등록중</dt>
                            <dd className="data">
                              0
                            </dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>

                  <Tabs
                    type="card"
                    className="m-tabs type-1 _primary"
                    defaultActiveKey="1"
                    items={[
                      {
                        key: '1',
                        label: <><span className="label">미결재내역</span></>,
                        children: (
                          <>

                            <div className="m-grid _primary">
                              <div className="column">

                                <div className="m-section g-wd-5">
                                  <div className="m-header">
                                    <div className="prime">
                                      <h2 className="o-heading level2"><span className="label">조회일자별 미처리 건수</span></h2>
                                    </div>
                                  </div>

                                  <div className="main">
                                    <SppTable<any>
                                      // rowSelection={rowSelection}
                                      columns={table2010Columns}
                                      dataSource={table2010DataSource}
                                      pagination={false}
                                      heightSectionBasis={ 1 * 35 + 3 * 35 }
                                      // scroll={{ x: 4096 }}
                                      className="style-fit"
                                    />
                                  </div>
                                </div>

                                <div className="m-section">
                                  <div className="m-header">
                                    <div className="prime">
                                      <h3 className="o-heading level3"><span className="label">고객정보 조회내역</span></h3>

                                      <div className="o-helper style-strong"><em className="label">조회사유 일괄적용 및 결재요청은 조회일자가 동일한 경우만 가능합니다.</em></div>
                                    </div>

                                    <div className="extra">
                                      <div className="m-binds">
                                        <div className="group">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2">조회사유 일괄적용</SppButton>
                                        </div>
                                        <div className="group">
                                          <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="main _primary">
                                    <SppTable<any>
                                      rowSelection={rowSelection}
                                      columns={table2020Columns}
                                      dataSource={table2020DataSource}
                                      paginationFlag
                                      heightSectionBasis={ 1 * 41 + 3 * 81 }
                                      // scroll={{ x: 4096 }}
                                    />
                                  </div>
                                </div>

                              </div>
                            </div>

                          </>
                        ),
                      },
                      {
                        key: '2',
                        // label: <>반려내역</>,
                        label: <><span className="label">반려내역</span> <Badge showZero={true} count={1000} /></>,
                        children: (
                          <>
                            <div>탭패널 2</div>
                          </>
                        ),
                      },
                    ]}
                  />

                </div>
              </div>

              {/* {isOpenPopupSample && ( */}
                <PopupSample
                  open={isOpenPopupSample}
                  onCancel={(e) => setIsOpenPopupSample(false)}
                />
              {/* )} */}
    </>
  );
}

export default TmpTsProg;
