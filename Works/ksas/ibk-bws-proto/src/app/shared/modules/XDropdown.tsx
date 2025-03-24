/**
 * @description Dropdown Example
 */

// dependency
import React, { useState } from 'react';

// components
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface XDropdownProp {
  name: string;
  code: string;
}

function XDropdown() {
  // 셀렉트박스
  const [DropdownItems, setDropdownItems] = useState<XDropdownProp | null>(null);
  const items: XDropdownProp[] = [
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
      value={DropdownItems || ''}
      onChange={(e: DropdownChangeEvent) => setDropdownItems(e.value)}
      options={items}
      optionLabel="name"
      className="bind"
      placeholder="선택"
    />
  );
}

export default XDropdown;
