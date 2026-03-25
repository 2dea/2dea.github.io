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

export interface Help1010Props extends SppModalProps {};

export const Help1010 = (props: Help1010Props) => {
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
        title="도움말"
        cancelButtonRender={false}
        onOk={ (e) => alert('ok') }
        // wrapWidth="50"
        // open
      >
        <div className="div-center">
          <div className="m-grid">
            <div className="column">

              <div className="o-board _help-popup">
                <ul className="o-bullets type-disc">
                  <li>본 화면은 귀 부서에서 사용 가능한 개인(신용)정보 조회화면만 목록에 출력됩니다. <br />(문의 : 정보보호본부 개인(신용)정보 권한관리 담당자)</li>
                  <li><strong className="emph _user">김신한</strong>님의 통합단말에서 사용할 수 있는 개인(신용)정보 화면을 조회하는 화면입니다.</li>
                  <li>근무부서나 직위 등 중요한 정보가 변경될 경우 초기화되어 다시 설정해야 합니다.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default Help1010;
