import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { AutoComplete, type AutoCompleteProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export interface SppAutoCompleteProps extends AutoCompleteProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
};

export const SppAutoComplete = ({
  model="d-form",
  modelType="autocomp",
  specName="",
  width="",
  className="",
  allowClear=true,
  prefix=<><SearchOutlined />{/* <SppObjSymbol label="pageview" /> */}<SppObjSymbol label={`search`} /></>,
  ...rest
}: SppAutoCompleteProps) => {
  return (
    <>
      <AutoComplete
        className={`
          ${model}
          ${modelType && ' type-' + modelType}
          ${specName && ' _' + specName}
          ${width && ' wd-' + width}
          ${className}
          `.replace(/\s+/g, ' ').trim()}
        allowClear={allowClear}
        prefix={prefix}
        {...rest}
      />
    </>
  );
};

export default SppAutoComplete;
