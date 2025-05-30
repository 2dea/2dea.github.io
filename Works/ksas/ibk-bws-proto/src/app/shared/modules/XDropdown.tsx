// @ts-nocheck
/**
 * @description Dropdown Example
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import Icon from 'app/shared/modules/OIcon';
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
    { code: '1', name: '한' },
    { code: '2', name: '두글' },
    { code: '3', name: '세글자' },
    { code: '4', name: '네네글자' },
    { code: '5', name: '다섯섯글자' },
    { code: '6', name: '아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자' },
    { code: '7', name: '' },
    { code: '8', name: '예' },
    { code: '9', name: '아니오' },
  ];

  return (
    <>
      <Dropdown
        placeholder={placeholder || '선택'}
        dropdownIcon={<Icon icon="arrow-down" />}
        collapseIcon={<Icon icon="arrow-up" />}
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
