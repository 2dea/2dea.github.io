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

export interface Table2060Props extends SppModalProps {};

export const Table2060 = (props: Table2060Props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const table2060Columns: ColumnsType<any> = [
    // { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    // { dataIndex: 'data1010', width: 120, ellipsis: false, align: 'center', title: '허용여부', render: (v, r, i) => { return `불가` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `1234567890` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'start', title: '화면명', render: (v, r, i) => { return ( `화면명 및 화면설명` ) }, },
  ];
  const table2060DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  return (
    <>
      <SppModal
        {...props}
        title="통합단말 화면권한관리"
        okText="저장"
        onOk={ (e) => alert('ok') }
        // wrapWidth="50"
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
                            <td colSpan={1}>
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
                    <h5 className="o-heading level3"><span className="label">화면권한설정</span></h5>
                  </div>

                  <div className="extra">
                    <div className="m-form">
                      <div className="m-field">
                        <div className="main">
                          <SppSelect placeholder="화면권한 동일설정 참조 직원" width="90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <SppTable<any>
                    rowSelection={rowSelection}
                    columns={table2060Columns}
                    dataSource={table2060DataSource}
                    pagination={false}
                    // paginationFlag
                    // heightSectionFixed
                    heightSectionBasis={ 1 * 41 + 1 * 10 }
                    // scroll={{ x: 4096 }}
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

export default Table2060;
