// @ts-nocheck
/**
 * @description MultiSelect Example
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import { MultiSelect } from 'primereact/multiselect';

interface XMultiSelectProps {
  name?: string;
  code?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  appendTo?: any;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  disabled?: boolean;
}

function XMultiSelect({ placeholder, onChange, appendTo, className, style, hidden, disabled }: XMultiSelectProps) {
  const [MultiSelectItems, setMultiSelectItems] = useState<XMultiSelectProps | null>(null);
  const items = [
    // { code: '0', name: '전체' },
    { code: '1', name: '항목 1' },
    { code: '2', name: '항목 2' },
    { code: '3', name: '항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3' },
    { code: '4', name: '항목 4' },
    { code: '5', name: '항목 5' },
    { code: '6', name: '항목 6' },
    { code: '7', name: '항목 7' },
    { code: '8', name: '예' },
    { code: '9', name: '아니오' },
  ];

  return (
    <>
      <MultiSelect
        placeholder={placeholder || '선택'}
        value={MultiSelectItems || ''}
        options={items}
        optionLabel="name"
        onChange={onChange ?? ((e) => setMultiSelectItems(e.value))}
        appendTo={appendTo || 'self'}
        maxSelectedLabels={undefined}
        className={className}
        style={style}
        hidden={hidden}
        disabled={disabled}
      />
    </>
  );
}

export default XMultiSelect;
