import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

import { Select, type SelectProps } from "antd";

const defaultTagPlaceholder = (omittedValues: any[]) => (
  `+ ${omittedValues.length}개 항목 선택`
);

export interface SppMultiSelectProps extends SelectProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | string | number;
  align?: "justify" | "start" | "center" | "end" | "inherit" | "";
};

export const SppMultiSelect = ({
  model="d-form",
  modelType="select",
  specName="multiple",
  width="",
  align="",
  className="",
  placeholder="선택",
  allowClear=true,
  showSearch=false,
  mode="multiple",
  maxTagCount="responsive",
  maxTagPlaceholder,
  options=[
    { value: '0', label: '전체' },
    { value: '1', label: '예' },
    { value: '2', label: '아니오' },
    { value: '3', label: '비활성옵션', disabled: true },
    { value: '4', label: '클래스리스트', className: 'c-color-strong' },
    { value: '5', label: <><SppObjSymbol label={resLabel.favoriteHeader} symbolStyle="fill" rootStyle={{ '--mgie': 'calc(var(--rem) * (4))', verticalAlign: '-0.15em' } as CSSProperties} /><span className="label" title="커스텀옵션">커스텀옵션</span></> },
    { value: '6', label: '아주긴옵션아주긴옵션아주긴옵션아주긴옵션아주긴옵션아주긴옵션아주긴옵션아주긴옵션아주긴옵션' },
    { value: '7', label: '일곱글자까지는' },
    { value: '8', label: <><span className="label" title="9항목&uarr;스크롤">9항목&uarr;스크롤</span></> },
    { value: '9', label: '`선택` 플레이스홀더 디폴트' },
  ],
  ...rest
}: SppMultiSelectProps) => {
  return (
    <>
      <Select
        {...rest}
        placeholder={placeholder}
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
        allowClear={allowClear}
        showSearch={showSearch}
        mode={mode}
        // maxTagCount={0}
        // maxTagPlaceholder={(omittedValues) =>
        //   omittedValues.map(item => item.label).join(', ')
        // }
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder ?? defaultTagPlaceholder}
        options={options}
      />
    </>
  );
};

export default SppMultiSelect;
