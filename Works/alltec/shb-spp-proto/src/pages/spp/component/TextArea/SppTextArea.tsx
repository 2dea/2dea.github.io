import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { Input, type InputProps } from "antd";
import type { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;

export interface SppTextAreaProps extends TextAreaProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  align?: "justify" | "start" | "center" | "end" | "inherit" | "";
  isCountVisible?: boolean;
};

export const SppTextArea = ({
  model="d-form",
  modelType="textarea",
  specName="",
  rows=2,
  width="",
  align="",
  className="",
  // suffix=<></>,
  showCount=true,
  isCountVisible=false,
  ...rest
}: SppTextAreaProps) => {
  return (
    <>
      <TextArea
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
        spellCheck={rest.spellCheck || "false"}
        rows={rows}
        // suffix={suffix}
        showCount={showCount}
        styles={{
          ...rest.styles,
          count: {
            ...(rest.styles as any)?.count,
            display: !isCountVisible ? 'none' : '',
          },
        }}
      />
    </>
  );
};

export default SppTextArea;
