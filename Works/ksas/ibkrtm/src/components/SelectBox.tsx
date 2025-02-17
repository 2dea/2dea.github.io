/**
 * @description 공통 셀렉트 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface SelectTypes {
  name: string;
  code: string;
}

function SelectBox() {
  // 셀렉트박스
  const [selectedBoxItems, setSelectedBoxItems] = useState<SelectTypes | null>(null);
  const items: SelectTypes[] = [
    { name: '아이템 01', code: '1' },
    { name: '아이템 02', code: '2' },
    { name: '아이템 03', code: '3' },
    { name: '아이템 04', code: '4' },
    { name: '아이템 05', code: '5' },
    { name: '아이템 06', code: '6' },
    { name: '아이템 07', code: '7' },
    { name: '아이템 08', code: '8' },
    { name: '아이템 09', code: '9' },
    { name: '아이템 10', code: '10' },
  ];

  return (
    <Dropdown
      value={selectedBoxItems || ''}
      onChange={(e: DropdownChangeEvent) => setSelectedBoxItems(e.value)}
      options={items}
      optionLabel="name"
      className="w-full"
      placeholder="전체"
    />
  );
}

export default SelectBox;
