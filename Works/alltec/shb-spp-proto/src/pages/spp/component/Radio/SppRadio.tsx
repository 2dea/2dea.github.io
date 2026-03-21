import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Radio, type RadioGroupProps } from "antd";

export interface SppRadioProps extends RadioGroupProps {
  options?: { value: any; label: ReactNode }[];
}

const SppRadio = ({ options, ...props }: SppRadioProps) => {
  return (
    <Radio.Group {...props}>
      {options &&
        options.map((item) => {
          return (
            <Radio key={item.value} value={item.value}>
              {item.label}
            </Radio>
          );
        })}
    </Radio.Group>
  );
};

export default SppRadio;
