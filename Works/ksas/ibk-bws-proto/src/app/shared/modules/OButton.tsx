// @ts-nocheck
/**
 * @description .o-button
 */

// dependency
import React, { useState } from 'react';

import Icon from 'app/shared/modules/OIcon';

interface CommonButtonProps {
  label: string;
  icon?: string;
  iconWidth?: number;
  size?: 30 | 70 | 50;
  className?: string;
  style?: object;
  hidden?: boolean;
  disabled?: boolean;
}

function CommonButton({ label, icon, iconWidth, size, className, style, hidden, disabled }: CommonButtonProps) {
  return (
    <>
      <button type="button" className={`o-button${className ? ` ${className}` : ''}${size === 30 ? ' size-30' : size === 70 ? ' size-70' : size === 50 ? ' size-50' : ''}`} style={style} hidden={hidden} disabled={disabled}>
        { (icon) && <Icon icon={icon} width={iconWidth} /> }
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default CommonButton;
