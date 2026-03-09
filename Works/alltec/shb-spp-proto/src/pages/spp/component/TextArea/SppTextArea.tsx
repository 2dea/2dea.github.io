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
};

export const SppTextArea = ({
  model="d-form",
  modelType="textarea",
  specName="",
  width="100p",
  className="",
  allowClear,
  // suffix=<></>,
  ...rest
}: SppTextAreaProps) => {
  return (
    <>
      <TextArea
        className={`
            ${model}
            ${modelType && ' type-' + modelType}
            ${specName && ' _' + specName}
            ${width && ' wd-' + width}
            ${className}
          `
          .replace(/\s+/g, ' ')
          .trim()}
        allowClear={allowClear}
        // suffix={suffix}
        {...rest}
      />
    </>
  );
};

export default SppTextArea;
