import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { Input, type InputProps } from "antd";

export interface SppInputTextProps extends InputProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
};

export const SppInputText = ({
  model="d-form",
  modelType="input",
  specName="text",
  width="",
  className="",
  allowClear,
  suffix=<></>,
  ...rest
}: SppInputTextProps) => {
  return (
    <>
      <Input
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
        suffix={suffix}
        {...rest}
      />
    </>
  );
};

export default SppInputText;
