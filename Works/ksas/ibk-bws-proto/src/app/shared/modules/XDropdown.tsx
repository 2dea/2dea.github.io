// @ts-nocheck
/**
 * @description Dropdown Example
 */

// dependency
import React, { useState } from 'react';

// components
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface XDropdownProps {
  name?: string;
  code?: string;
  placeholder?: string;
  appendTo?: any;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  disabled?: boolean;
}

function XDropdown({ placeholder, appendTo, className, style, hidden, disabled }: XDropdownProps) {
  const [DropdownItems, setDropdownItems] = useState<XDropdownProps | null>(null);
  const items: XDropdownProps[] = [
    { code: '0', name: '전체' },
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
      <Dropdown
        placeholder={placeholder || '선택'}
        value={DropdownItems || ''}
        options={items}
        optionLabel="name"
        onChange={(e: DropdownChangeEvent) => setDropdownItems(e.value)}
        appendTo={appendTo || 'self'}
        className={className}
        style={style}
        hidden={hidden}
        disabled={disabled}
      />
    </>
  );
}

export default XDropdown;
