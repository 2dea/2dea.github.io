import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Checkbox, type CheckboxProps } from "antd";

export interface SppCheckboxProps extends CheckboxProps {
  model?: string;
  modelType?: string;
  specName?: string;
}

const SppCheckbox = ({
  model="d-check",
  modelType="",
  specName="",
  className="",
  ...props
}: SppCheckboxProps) => {
  return (
    <Checkbox {...props}
      className={`
        ${model}
        ${modelType && ' type-' + modelType}
        ${specName && ' _' + specName}
        ${className}
      `
      .replace(/\s+/g, ' ')
      .trim()}
    />
  );
};

export default SppCheckbox;
