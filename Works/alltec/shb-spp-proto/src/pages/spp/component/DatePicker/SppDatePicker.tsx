import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { DatePicker, type DatePickerProps } from "antd";

// const dateFormat = 'YYYY.MM.DD';
// const monthFormat = 'YYYY.MM';
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

export interface SppDatePickerProps extends DatePickerProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  align?: "justify" | "start" | "center" | "end" | "inherit" | "";
};

export const SppDatePicker = ({
  model="d-form",
  modelType="date",
  specName="",
  width="50",
  align="",
  className="",
  picker,
  allowClear=true,
  ...rest
}: SppDatePickerProps) => {
  return (
    <>
      <DatePicker
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
        placeholder={rest.placeholder || ""}
        picker={picker}
        format={{
          format: (picker === 'month') ? monthFormat : dateFormat,
          type: 'mask',
        }}
        // showTime
        allowClear={allowClear}
      />
    </>
  );
};

export default SppDatePicker;
