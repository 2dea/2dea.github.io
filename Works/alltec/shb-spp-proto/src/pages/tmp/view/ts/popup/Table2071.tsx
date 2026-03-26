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

export interface Table2071Props extends SppModalProps {};

export const Table2071 = (props: Table2071Props) => {
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

  return (
    <>
      <SppModal
        {...props}
        title="권한설정 추가인증"
        footer={false}
        cancelButtonRender={false}
        onOk={ (e) => alert('ok') }
        wrapWidth="20"
        // open
      >
        <div className="div-center">
          <div className="m-grid">
            <div className="column">

              <div className="m-section">
                <div className="main">
                  <div className="o-board _form-popup">
                    <div className="m-form axis-cols">
                      <div className="m-field">
                        <SppObjLabel label={`직원번호`} required={false} wrapper="header" />

                        <div className="main">
                          <SppInputText placeholder="" width="100p" value={`00000001`} disabled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-footer">
                  <div className="m-binds">
                    <div className="group align-around">
                      <SppButton variant="solid" color="geekblue" specName="solid-1">몰리메이트</SppButton>
                      <SppButton variant="solid" color="geekblue" specName="solid-1">안면인증</SppButton>
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

export default Table2071;
