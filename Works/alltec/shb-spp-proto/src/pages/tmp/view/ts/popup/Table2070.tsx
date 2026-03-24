import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

import { Badge, Tabs } from "antd";
import type { ColumnsType, TableRowSelection } from "antd/es/table/interface";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppButton from "@/pages/spp/component/Button/SppButton";
import SppCheckbox from "@/pages/spp/component/Checkbox/SppCheckbox";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";
import SppInputText from "@/pages/spp/component/Input/SppInputText";
import SppMultiSelect from "@/pages/spp/component/Select/SppMultiSelect";
import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";
import SppRadio from "@/pages/spp/component/Radio/SppRadio";
import SppSelect from "@/pages/spp/component/Select/SppSelect";
import SppTable from "@/pages/spp/component/Table/SppTable";
import SppTextArea from "@/pages/spp/component/TextArea/SppTextArea";

export interface Table2070Props extends SppModalProps {};

export const Table2070 = (props: Table2070Props) => {
  const table2070Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Banking System', render: (v, r, i) => { return (
      <>
        {/* <SppRadio
          groupClassName="axis-cols"
          options={[
            { value: '0', label: '사용' },
            { value: '1', label: '미사용' },
          ]}
          defaultValue={'0'}
        /> */}
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>NEXT통합단말(개발)</SppCheckbox></div>
          <div className="item"><SppCheckbox>NEXT통합단말(테스트/(구)연수겸용)</SppCheckbox></div>
          <div className="item"><SppCheckbox>방카슈랑스</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Business System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Management System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Credit System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'HR/컴플라이언스 System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'ICT System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
  ];
  const table2070DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  return (
    <>
      <SppModal
        {...props}
        title="캔버스 메뉴권한관리"
        okText="저장"
        onOk={ (e) => alert('ok') }
        wrapWidth="80"
        // open
      >
        <div className="div-center">
          <div className="m-grid _primary">
            <div className="column">

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">직원정보</span></h4>
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
                              <SppObjLabel label={`직원`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [00000001] 김신한
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`직위`} required={false} />
                            </th>
                            <td colSpan={3}>
                              본부장
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
                    <h5 className="o-heading level3"><span className="label">메뉴권한설정</span></h5>
                  </div>

                  <div className="extra">
                    <div className="m-form">
                      <div className="m-field">
                        <div className="main">
                          <SppSelect placeholder="메뉴권한 동일설정 참조 직원" width="90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    // rowSelection={rowSelection}
                    columns={table2070Columns}
                    dataSource={table2070DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 41 - 12 }
                    // scroll={{ x: 4096 }}
                    scroll={{ y: 208 }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default Table2070;
