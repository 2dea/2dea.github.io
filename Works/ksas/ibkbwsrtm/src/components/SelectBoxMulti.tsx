/**
 * @description 공통 멀티셀렉트 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface SelectMultiTypes {
  name: string;
  code: string;
}

function SelectBoxMulti() {
  const [selectedMultiItems, setSelectedMultiItems] = useState<SelectMultiTypes | null>(null);
  const items: SelectMultiTypes[] = [
    { name: '데이터1', code: '1' },
    { name: '데이터2', code: '2' },
    { name: '데이터3', code: '3' },
    { name: '데이터4', code: '4' },
    { name: '데이터5', code: '5' },
    { name: '데이터6', code: '6' },
    { name: '데이터7', code: '7' },
    { name: '데이터8', code: '8' },
    { name: '데이터9', code: '9' },
    { name: '데이터10', code: '10' },
  ];

  return (
    <MultiSelect
      value={selectedMultiItems || ''}
      onChange={(e: MultiSelectChangeEvent) => setSelectedMultiItems(e.value)}
      options={items}
      optionLabel="name"
      placeholder="전체"
    />
  );
}

export default SelectBoxMulti;
