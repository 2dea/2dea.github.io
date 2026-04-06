import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

import { Badge, Tabs } from "antd";
import type { ColumnsType, TableRowSelection } from "antd/es/table/interface";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppButton from "@/pages/spp/component/Button/SppButton";
import SppCheckbox from "@/pages/spp/component/Checkbox/SppCheckbox";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";
import SppInputFile from "@/pages/spp/component/Input/SppInputFile";
import SppInputText from "@/pages/spp/component/Input/SppInputText";
import SppMultiSelect from "@/pages/spp/component/Select/SppMultiSelect";
import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";
import SppRadio from "@/pages/spp/component/Radio/SppRadio";
import SppSelect from "@/pages/spp/component/Select/SppSelect";
import SppTable from "@/pages/spp/component/Table/SppTable";
import SppTextArea from "@/pages/spp/component/TextArea/SppTextArea";

export interface SppAp0002P01Props extends SppModalProps {};

export const SppAp0002P01 = (props: SppAp0002P01Props) => {
  const [testValueFile1010, setTestValueFile1010] = useState<File | null>(null);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const tableSppAp0002M1010Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 230, ellipsis: false, align: 'center', title: <SppObjLabel label="권한 신청부서" required={true} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="90" />
    ) }, },
    { dataIndex: 'data1010', width: 200, ellipsis: false, align: 'center', title: <SppObjLabel label="권한 신청자" required={false} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="80" />
    ) }, },
    { title: <SppObjLabel label="권한 적용기간" required={true} />, children: [
      { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: '시작일자', render: (v, r, i) => { return (
        <SppDatePicker placeholder="" />
      ) }, },
      { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: '종료일자', render: (v, r, i) => { return (
        <SppDatePicker placeholder="" />
      ) }, },
    ], },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="요청사유" required={true} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="요청사유를 구체적으로 작성하지 않을 경우 반려될 수 있습니다&#13;(요청기간은 정보보호본부 개인(신용)정보권한관리 담당자와 협의 후 신청해주세요)" rows={3} />
    ) }, },
  ];
  const tableSppAp0002M1010DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  const tableSppAp0002M1020Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: <SppObjLabel label="부서 총 인원" required={false} />, render: (v, r, i) => { return (
      <SppInputText placeholder="" width="50" align="end" />
    ) }, },
    { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: <SppObjLabel label="변경 전" required={false} />, render: (v, r, i) => { return (
      <SppInputText placeholder="" width="50" align="end" />
    ) }, },
    { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: <SppObjLabel label="변경 후" required={false} />, render: (v, r, i) => { return (
      <SppInputText placeholder="" width="50" align="end" />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="요청사유" required={false} />, render: (v, r, i) => { return (
      <SppInputText placeholder="" width="100p" />
    ) }, },
  ];
  const tableSppAp0002M1020DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  const tableSppAp0002M1030Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 230, ellipsis: false, align: 'center', title: <SppObjLabel label="통합단말 화면" required={false} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="90" />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="요청사유" required={false} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="요청사유를 구체적으로 작성하지 않을 경우 반려될 수 있습니다&#13;(요청기간은 정보보호본부 개인(신용)정보권한관리 담당자와 협의 후 신청해주세요)" rows={3} />
    ) }, },
  ];
  const tableSppAp0002M1030DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  const tableSppAp0002M1040Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 230, ellipsis: false, align: 'center', title: <SppObjLabel label="캔버스 메뉴" required={false} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="90" />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="요청사유" required={false} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="요청사유를 구체적으로 작성하지 않을 경우 반려될 수 있습니다&#13;(요청기간은 정보보호본부 개인(신용)정보권한관리 담당자와 협의 후 신청해주세요)" rows={3} />
    ) }, },
  ];
  const tableSppAp0002M1040DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  const tableSppAp0002M1050Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 230, ellipsis: false, align: 'center', title: <SppObjLabel label="부서" required={false} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="90" />
    ) }, },
    { dataIndex: 'data1010', width: 200, ellipsis: false, align: 'center', title: <SppObjLabel label="직원" required={false} />, render: (v, r, i) => { return (
      <SppAutoComplete placeholder="" width="80" />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="요청사유" required={false} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="요청사유를 구체적으로 작성하지 않을 경우 반려될 수 있습니다&#13;(요청기간은 정보보호본부 개인(신용)정보권한관리 담당자와 협의 후 신청해주세요)" rows={3} />
    ) }, },
  ];
  const tableSppAp0002M1050DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  return (
    <>
      <SppModal
        {...props}
        title="신청서"
        okText="결재요청"
        onOk={ (e) => alert('ok') }
        wrapWidth="70"
        // open
      >
        <div className="div-center page-application">
          <div className="x-app-header">
            <em className="secondary">개인(신용)정보 조회권한신청</em>
            <h3 className="primary"><span className="label">타직원가족 조회用</span></h3>

            <div className="approve">
              <div className="column">
                <div className="o-datatable">
                  <div className="table-wrapper">
                    <table className="table type-approve g-fixed-table">
                      <colgroup span={6}></colgroup>

                      <thead>
                        <tr>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}>팀원/요청자</th>
                          <th colSpan={1} rowSpan={1}>팀장</th>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="approve-trow name">
                          <th colSpan={1} rowSpan={2}>기안​결재</th>
                          <td colSpan={1} rowSpan={1}>
                            {/* <div className="o-approve" aria-label="결재 대기">
                              <div className="main">
                                <span className="approval">
                                  <span className="name">김준완</span>
                                  <span className="position">팀원</span>
                                </span>
                              </div>
                              <div className="aside">
                                <em className="substitute">대직 홍길동</em>
                              </div>
                            </div> */}

                            <div className="o-approve">
                              <div className="main">
                                <span className="approval">
                                  <span className="name">김준완</span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td colSpan={1} rowSpan={1}>
                            <div className="o-approve">
                              <div className="main">
                                <span className="approval">
                                  <span className="name">송상우</span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                        </tr>
                        <tr className="approve-trow date">
                          <td colSpan={1} rowSpan={1}>2026-04-19</td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="o-datatable">
                  <div className="table-wrapper">
                    <table className="table type-approve g-fixed-table">
                      <colgroup span={6}></colgroup>

                      <thead>
                        <tr>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}>팀장</th>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}></th>
                          <th colSpan={1} rowSpan={1}></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="approve-trow name">
                          <th colSpan={1} rowSpan={2}>수신​결재</th>
                          <td colSpan={1} rowSpan={1}>
                            <div className="o-approve">
                              <div className="main">
                                <span className="approval">
                                  <span className="name">김명규</span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                        </tr>
                        <tr className="approve-trow date">
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                          <td colSpan={1} rowSpan={1}></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-grid _primary">
            <div className="column">

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">신청자정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="o-dataform">
                    <div className="table-wrapper">
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
                              <SppObjLabel label={`부서`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [0000] Tech기획부
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`직원`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [00000000] 홍길동
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`등록일자`} required={false} />
                            </th>
                            <td colSpan={1}>
                              2026-04-19
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">신청자정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="o-dataform">
                    <div className="table-wrapper">
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
                              <SppObjLabel label={`문서번호`} required={false} />
                            </th>
                            <td colSpan={5}>
                              FORM_0008_2026_DOCU_001
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`부서`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [0000] Tech기획부
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`직원`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [00000000] 홍길동
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`직위`} required={false} />
                            </th>
                            <td colSpan={1}>
                              팀장
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`등록일자`} required={false} />
                            </th>
                            <td colSpan={1}>
                              2026-04-19
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`결재상태`} required={false} />
                            </th>
                            <td colSpan={3}>
                              결재요청
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">신청 기본정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="o-dataform">
                    <div className="table-wrapper">
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
                              <SppObjLabel label={`신청단위`} required={true} />
                            </th>
                            <td colSpan={5}>
                              <SppRadio
                                options={[
                                  { value: '0', label: '개인별' },
                                  { value: '1', label: '부서별' },
                                ]}
                              />
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`화면/메뉴구분`} required={true} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-checks">
                                <div className="item"><SppCheckbox>통합단말</SppCheckbox></div>
                                <div className="item"><SppCheckbox>개인CRM</SppCheckbox></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">신청서 첨부</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="o-dataform">
                    <div className="table-wrapper">
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
                              <SppObjLabel label={`파일첨부`} required={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-field">
                                <div className="main">
                                  <SppInputFile placeholder="허용확장자 : xls, xlsx" value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`파일첨부`} required={false} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-string-binds type-file">
                                <span className="string m-file">
                                  <span className="o-file" title="##업무분장관리.xlsx (99.9MB)##">
                                    <span className="name">업무분장관리</span>
                                    <span className="ext">.xlsx</span>
                                  </span>
                                  <span className="o-limit type-file">
                                    <span className="head">파일크기</span>
                                    <span className="data">
                                      <em className="value">(1,023MB)</em>
                                    </span>
                                  </span>
                                </span>
                                <span className="binds justify-end">
                                  <SppButton>다운로드</SppButton>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h5 className="o-heading level3"><span className="label">권한 신청정보</span></h5>

                    <div className="o-helper"><strong className="label">[비여신用][공통필수] 개인(신용)정보 수집·이용 동의 징구불가 등록권한</strong></div>
                  </div>

                  <div className="extra">
                    <div className="m-binds">
                      <div className="group">
                        <SppButton variant="outlined" color="default" specName="normal">행추가</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">행삭제</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">취소</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    rowSelection={rowSelection}
                    columns={tableSppAp0002M1010Columns}
                    dataSource={tableSppAp0002M1010DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 2 * 41 + 1 * 81 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 244 }}
                  />
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h5 className="o-heading level3"><span className="label">고객정보 조회권한 허용인원수 변경</span></h5>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    // rowSelection={rowSelection}
                    columns={tableSppAp0002M1020Columns}
                    dataSource={tableSppAp0002M1020DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 41 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 124 }}
                  />
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h5 className="o-heading level3"><span className="label">통합단말 시스템 화면 접근권한 신청(부서 접근권한)</span></h5>
                  </div>

                  <div className="extra">
                    <div className="m-binds">
                      <div className="group">
                        <SppButton variant="outlined" color="default" specName="normal">행추가</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">행삭제</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">취소</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    rowSelection={rowSelection}
                    columns={tableSppAp0002M1030Columns}
                    dataSource={tableSppAp0002M1030DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 81 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 244 }}
                  />
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h5 className="o-heading level3"><span className="label">캔버스 메뉴 접근권한 신청(부서 접근권한)</span></h5>
                  </div>

                  <div className="extra">
                    <div className="m-binds">
                      <div className="group">
                        <SppButton variant="outlined" color="default" specName="normal">행추가</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">행삭제</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">취소</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    rowSelection={rowSelection}
                    columns={tableSppAp0002M1040Columns}
                    dataSource={tableSppAp0002M1040DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 81 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 244 }}
                  />
                </div>
              </div>

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h5 className="o-heading level3"><span className="label">고객정보 조회권한 및 화면 조회권한 신청 (1인부서 및 부서장 부재 시)</span></h5>
                  </div>

                  <div className="extra">
                    <div className="m-binds">
                      <div className="group">
                        <SppButton variant="outlined" color="default" specName="normal">행추가</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">행삭제</SppButton>
                        <SppButton variant="outlined" color="default" specName="normal">취소</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    rowSelection={rowSelection}
                    columns={tableSppAp0002M1050Columns}
                    dataSource={tableSppAp0002M1050DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 81 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 244 }}
                  />
                </div>
              </div>

              <div className="m-section">
                <div className="main">
                  <div className="o-board type-1 -has-board-container">
                    <div className="board-container">
                      <div className="m-header">
                        <div className="prime">
                          <strong className="o-heading"><span className="label">유의사항</span></strong>
                        </div>
                      </div>

                      <ol className="o-bullets type-decimal level1">
                        <li className="c-color-strong">
                          <strong>[비여신用 ][공통필수] 개인(신용)정보 수집&middot;이용 동의 징구불가 등록 신청은 법령에 의하여 개인(신용)정보주체의 동의없이 개인(신용)정보를 수집할 수 있는 경우에 신청 할 수 있습니다.</strong>

                          <ul className="o-bullets type-hyphen">
                            <li>요청사유에 근거 법률을 명시해주세요.</li>
                            <li>EX) 근로자퇴직급여 보장법 시행령 제43조(고유식별정보의 처리)</li>
                          </ul>
                        </li>
                        <li>
                          전결권자

                          <ul className="o-bullets type-hyphen">
                            <li>법률에 근거가 있는 경우 책임자</li>
                            <li>기타 사유로 정보보호본부에서 인정한 경우 부서장</li>
                          </ul>
                        </li>
                        <li>정보보호본부의 권한 등록 승인 후 통합단말 7057화면에서 [비여신 금융거래] 필수 개인정보 동의여부 항목을 “동의서 징구불가” 로 변경 후 거래해주세요.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default SppAp0002P01;
