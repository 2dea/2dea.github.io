import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

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

export interface PopupSampleProps extends SppModalProps {};

export const PopupSample = (props: PopupSampleProps) => {
  return (
    <>
      <SppModal
        {...props}
        headerTitle="팝업샘플"
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
        cancelText="취소"
        okText="저장"
        onOk={ (e) => alert('ok') }
        // width={1024}
        // wrapWidth="50"
        // open
      >
        {`{`}Contents{`}`}
      </SppModal>
    </>
  )
}

export default PopupSample;
