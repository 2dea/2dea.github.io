import React, { useEffect, useMemo, useRef, useState } from "react";

import { DatePicker, type DatePickerProps } from "antd";

// const dateFormat = 'YYYY.MM.DD';
// const monthFormat = 'YYYY.MM';
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

export interface SppDatePickerProps extends DatePickerProps {
  spec?: string;
  specType?: string;
  face?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
};

export const SppDatePicker = ({
  spec="d-form",
  specType="date",
  face="",
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
          ${spec}
          ${specType && ' type-' + specType}
          ${face && ' _' + face}
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
