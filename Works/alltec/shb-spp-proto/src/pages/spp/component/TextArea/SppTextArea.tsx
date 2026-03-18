import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { Input, type InputProps } from "antd";
import type { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;

export interface SppTextAreaProps extends TextAreaProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  isCountVisible?: boolean;
};

export const SppTextArea = ({
  model="d-form",
  modelType="textarea",
  specName="",
  rows=2,
  width="100p",
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
            ${className}
          `
          .replace(/\s+/g, ' ')
          .trim()}
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
