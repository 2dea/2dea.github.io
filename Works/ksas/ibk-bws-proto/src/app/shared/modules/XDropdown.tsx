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
  className?: string;
  style?: object;
  hidden?: boolean;
  disabled?: boolean;
}

function XDropdown({ className, style, hidden, disabled }: XDropdownProps) {
  const [DropdownItems, setDropdownItems] = useState<XDropdownProps | null>(null);
  const items: XDropdownProps[] = [
    { name: '전체', code: '0' },
    { name: '항목 1', code: '1' },
    { name: '항목 2', code: '2' },
    { name: '항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3 항목 3', code: '3' },
    { name: '항목 4', code: '4' },
    { name: '항목 5', code: '5' },
    { name: '항목 6', code: '6' },
    { name: '항목 7', code: '7' },
    { name: '항목 8', code: '8' },
    { name: '항목 9', code: '9' },
  ];

  return (
    <Dropdown
      placeholder="선택"
      value={DropdownItems || ''}
      options={items}
      optionLabel="name"
      onChange={(e: DropdownChangeEvent) => setDropdownItems(e.value)}
      className={className}
      style={style}
      hidden={hidden}
      disabled={disabled}
    />
  );
}

export default XDropdown;
