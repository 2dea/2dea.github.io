// @ts-nocheck
/**
 * @description .o-check:has(>[type="checkbox"])
 */

// dependency
import React, { useRef, useState } from 'react';

import Icon from 'app/shared/modules/OIcon';

interface InputCheckProps {
  name?: string;
  id?: string;
  label: string;
  labelHidden?: boolean;
  title?: string;
  value?: string;
  variant?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
  iconWidth?: number;
  bindClassName?: string;
  bindStyle?: React.CSSProperties;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  hidden?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

function InputCheck({ name, id, label, labelHidden, title, value, variant='swoosh', className, style, icon, iconWidth, bindClassName, bindStyle, onClick, onChange, hidden, disabled, checked }: InputCheckProps) {
  return (
    <>
      <label className={`o-check${variant ? ` type-${variant}` : ''}${className ? ` ${className}` : ''}`} style={style}>
        <input type="checkbox" name={name} id={id} title={title || labelHidden && label} value={value} className={`bind${bindClassName ? ` ${bindClassName}` : ''}`} style={bindStyle} onClick={onClick && onClick} onChange={onChange && onChange} hidden={hidden} disabled={disabled} checked={checked} />
        { (icon) ? <Icon icon={icon} width={iconWidth} /> : <i aria-hidden="true"></i> }
        <span className={`label${labelHidden ? ` _hidden` : ''}`}>{label}</span>
      </label>
    </>
  );
}

export default InputCheck;
