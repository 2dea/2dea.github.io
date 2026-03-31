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

export interface PopupSampleProps extends SppModalProps {};

export const PopupSample = (props: PopupSampleProps) => {
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
        title="팝업샘플"
        headerAppendExtra={
          <>
            <SppButton variant="outlined" color="default" specName="normal">headerAppendExtra</SppButton>
          </>
        }
        footerAppendButton={
          <>
            <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={() => alert(2)}>footerAppendButton</SppButton>
            <SppButton variant="outlined" color="purple" specName="lined-1" onClick={() => alert(1)}>footerAppendButton</SppButton>
          </>
        }
        footerAppend1Button={
          <>
            <SppButton variant="outlined" color="purple" specName="lined-1" onClick={() => alert(1)}>footerAppend1Button</SppButton>
          </>
        }
        footerAppend2Button={
          <>
            <SppButton variant="outlined" color="purple" specName="lined-1" onClick={() => alert(1)}>footerAppend2Button</SppButton>
          </>
        }
        cancelText="취소"
        okText="저장"
        // cancelButtonRender={false}
        // okButtonRender={false}
        onOk={ (e) => alert('ok') }
        // width={1024}
        // wrapWidth="50"
        // open
      >
        <div className="div-center">
          {`{ `}Contents{` }`}
        </div>
      </SppModal>
    </>
  )
}

export default PopupSample;
