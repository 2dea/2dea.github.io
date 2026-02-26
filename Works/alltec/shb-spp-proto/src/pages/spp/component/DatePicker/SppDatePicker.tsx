import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { DatePicker, type DatePickerProps } from "antd";

// const dateFormat = 'YYYY.MM.DD';
// const monthFormat = 'YYYY.MM';
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

export interface SppDatePickerProps extends DatePickerProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
};

export const SppDatePicker = ({
  model="d-form",
  modelType="date",
  specName="",
  width="",
  className="",
  picker,
  allowClear=true,
  ...rest
}: SppDatePickerProps) => {
  return (
    <>
      <DatePicker
        className={`
          ${model}
          ${modelType && ' type-' + modelType}
          ${specName && ' _' + specName}
          ${width && ' wd-' + width}
          ${className}
          `.replace(/\s+/g, ' ').trim()}
        picker={picker}
        format={{
          format: (picker === 'month') ? monthFormat : dateFormat,
          type: 'mask',
        }}
        // showTime
        allowClear={allowClear}
        {...rest}
      />
    </>
  );
};

export default SppDatePicker;
