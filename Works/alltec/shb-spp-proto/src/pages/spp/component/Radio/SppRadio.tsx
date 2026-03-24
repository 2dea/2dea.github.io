import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Radio, type RadioGroupProps } from "antd";

export interface SppRadioProps extends RadioGroupProps {
  model?: string;
  modelType?: string;
  specName?: string;
  groupModel?: string;
  groupModelType?: string;
  groupSpecName?: string;
  groupClassName?: string;
  options?: { value: any; label: ReactNode; }[];
}

const SppRadio = ({
  model="d-check",
  modelType="",
  specName="",
  className="",
  groupModel="m-checks",
  groupModelType="",
  groupSpecName="",
  groupClassName="",
  options=[
    { value: '0', label: 'Y' },
    { value: '1', label: 'N' },
  ],
  ...props
}: SppRadioProps) => {
  return (
    <Radio.Group
      {...props}
      className={`
          ${groupModel}
          ${groupModelType && ' type-' + groupModelType}
          ${groupSpecName && ' _' + groupSpecName}
          ${groupClassName}
        `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {options &&
        options.map((item) => {
          return (
            <div className="item">
              <Radio
                className={`
                    ${model}
                    ${modelType && ' type-' + modelType}
                    ${specName && ' _' + specName}
                    ${className}
                  `
                  .replace(/\s+/g, ' ')
                  .trim()}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </Radio>
            </div>
          );
        })}
    </Radio.Group>
  );
};

export default SppRadio;
