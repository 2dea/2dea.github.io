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

export interface Help1020Props extends SppModalProps {};

export const Help1020 = (props: Help1020Props) => {
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
        title="조회권한관리 안내"
        headerAppendExtra={
          <>
            <div className="m-checks">
              <div className="item"><SppCheckbox>오늘 하루 보지 않기</SppCheckbox></div>
            </div>
          </>
        }
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
                  <li>본부부서 및 해외점포 직원들의 고객정보 조회권한은 기본적으로 제한됩니다.</li>
                  <li>제한업무는 통합단말업무(7042) / 개인CRM / SPURT 등 중요 시스템입니다.</li>
                  {/* <li className="c-color-strong"><strong>본 화면에서는 <em className="emph">정보보호담당자가 허용요청을 하고 요청한 직원은 정보보호관리자가 승인해야 실행권한이 부여</em>됩니다.</strong></li>
                  <li className="c-color-strong"><strong>본 화면에서는 <em className="emph">요청/만료일자는 수정이 안되며 정보보호관리자가 승인한 시점부터 1년간 자동으로 부여</em>됩니다.</strong></li>
                  <li className="c-color-strong"><strong>만료 예정자 일괄연장은 <em className="emph">만료예정 15일 이내의 직원만 가능하며 정보보호관리자의 승인 후</em> 만료일자가 변경됩니다.</strong></li> */}
                  <li className="c-color-strong"><strong>본 화면에서는 <em className="emph">요청/허용 상태의 직원만 조회</em>가 되며, <em className="emph">관리담당자가 요청을 해야</em> 목록에 나타납니다.</strong></li>
                  <li className="c-color-strong"><strong>만료일자는 수정이 안되며 <em className="emph">허용한 시점부터 1년간 자동으로 부여</em>됩니다.</strong></li>
                  <li className="c-color-strong"><strong>본 화면에서는 <em className="emph">요청상태의 직원을 허용상태로 변경 후 승인하시면 됩니다.</em></strong></li>
                </ul>

                <ul className="o-bullets type-disc">
                  <li>※ 단위 및 통합단말 화면권한은 정보보호담당자/관리자가 부여해주시면 됩니다.</li>
                  <li>※ 화면 조회권한을 부여받은 직원은 해당 시스템에 다시 접속해야 반영됩니다.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default Help1020;
