import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppButton from "@/pages/spp/component/Button/SppButton";

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
