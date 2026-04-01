import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { AutoComplete, type AutoCompleteProps } from "antd";

export interface SppAutoCompleteProps extends AutoCompleteProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  align?: "justify" | "start" | "center" | "end" | "inherit" | "";
};

export const SppAutoComplete = ({
  model="d-form",
  modelType="autocomp",
  specName="",
  width="",
  align="",
  className="",
  allowClear=true,
  prefix=<><SppObjSymbol label={`search`} specName="pre-autocomp" /></>,
  ...rest
}: SppAutoCompleteProps) => {
  return (
    <>
      <AutoComplete
        {...rest}
        className={`
            ${model}
            ${modelType && ' type-' + modelType}
            ${specName && ' _' + specName}
            ${width && ' wd-' + width}
            ${align && ' g-' + (!/start|center|end/g.test(align) ? 'ta-' : '') + align}
            ${className}
          `
          .replace(/\s+/g, ' ')
          .trim()}
        allowClear={allowClear}
        prefix={prefix}
      />
    </>
  );
};

export default SppAutoComplete;
