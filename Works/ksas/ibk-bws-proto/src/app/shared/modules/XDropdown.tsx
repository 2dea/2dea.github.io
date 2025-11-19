// @ts-nocheck
/**
 * @description Dropdown Example
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import Icon from 'app/shared/modules/OIcon';
import Select, { components, DropdownIndicatorProps } from 'react-select';

interface XDropdownProps {
  name?: string;
  code?: string;
  placeholder?: string;
  appendTo?: any;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  disabled?: boolean;
  menuWidth?: number;
}

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

function XDropdown({ placeholder, appendTo, className, style, hidden, disabled, menuWidth=120 }: XDropdownProps) {
  const [selectedOption, setSelectedOption] = useState(null);
  const items: XDropdownProps[] = [
    { value: '0', label: '전체' },
    { value: '1', label: '한' },
    { value: '2', label: '두글' },
    { value: '3', label: '세글자' },
    { value: '4', label: '네네글자' },
    { value: '5', label: '다섯섯글자' },
    { value: '6', label: '아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자아주긴글자' },
    { value: '7', label: '' },
    { value: '8', label: '예' },
    { value: '9', label: '아니오' },
  ];
  const DropdownIndicator = (
    props: DropdownIndicatorProps<ColourOption, true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon icon="arrow-down" />
      </components.DropdownIndicator>
    );
  };

  return (
    <>
      <Select
        options={items}
        defaultValue={selectedOption}
        isSearchable={false}
        onChange={setSelectedOption}

        components={{ DropdownIndicator }}
        closeMenuOnScroll={
          e => {
            // if (e.target !== document) {
            //   console.log(1, e.currentTarget, e.target, components)
            //   return true
            // } else {
            //   console.log(0, e.target, components)
            //   return false
            // }
          }
        }
        menuPortalTarget={document.body}
        menuPosition="absolute"
        menuPlacement="auto"
        menuShouldScrollIntoView={false}
        classNamePrefix="react-select"
        classNames={{  }}
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
            // margin: '0 calc(-1 * var(--e10))',
          }),
          menu: (base) => ({
            ...base,
            zIndex: 9999,
            // minWidth: `calc(var(--rem) * (${menuWidth} - 2))`,
            minWidth: `calc(100% + (var(--e10) * 2))`,
            width: 'max-content',
            // margin: 'calc(var(--rem) * 2) 0',
            margin: 'calc(var(--e10) + 2px) calc(-1 * var(--e10))',
            border: 'var(--e10) solid var(--color-edge-40)',
            background: 'var(--color-ground)',
            borderRadius: 'calc(var(--rem) * var(--radius-50))',
            boxShadow: 'var(--dropshadow-40)',
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: 'calc(var(--rem) * (30 * 8 + 6 * 2))',
            padding: 'calc(var(--rem) * 6) calc(var(--rem) * 4)',
          }),
          option: (base) => ({
            ...base,
            minHeight: 'calc(var(--rem) * 30)',
            overflow: 'hidden',
            padding: 'calc(var(--rem) * 6) calc(var(--rem) * 8)',
            // paddingInlineEnd: 0,
            borderRadius: 'calc(var(--rem) * var(--radius-50))',
            whiteSpace: 'nowrap',

            '&:hover': {
              backgroundColor: 'var(--tp, Transparent)',
              backgroundImage: 'linear-gradient(var(--color-dimmed-hover))',
            },
            '&.react-select__option--is-focused': {
              backgroundColor: 'var(--tp, Transparent)',
              backgroundImage: 'linear-gradient(var(--color-dimmed-hover))',
            },
            '&.react-select__option--is-selected': {
              color: 'var(--color-key1-40)',
              backgroundColor: 'var(--tp, Transparent)',
            },
          }),
          control: (base) => ({
            ...base,
            flex: 1,
            background: 'inherit',
          }),
          placeholder: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
          }),
          valueContainer: (base) => ({
            ...base,
            margin: 0,
            padding: 'var(--margin-block, 8px) var(--margin-inline, 8px)',
            paddingInlineEnd: 0,
          }),
          singleValue: (base) => ({
            ...base,
            margin: 0,
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: 'none',
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: 'calc((var(--height-form) - var(--height-icon)) / 2 - var(--e10))',

            '& .o-icon:before': {
              fontSize: 'var(--height-icon)',
            },
          }),
        }}

        placeholder={placeholder || '선택'}
        className={className}
        style={style}
        hidden={hidden}
        isDisabled={disabled}
      />
    </>
  );
}

export default XDropdown;
