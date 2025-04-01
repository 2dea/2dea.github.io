// @ts-nocheck
/**
 * @description .o-button
 */

// dependency
import React, { useState } from 'react';

import Icon from 'app/shared/modules/OIcon';

interface CommonButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  label: string;
  icon?: string;
  iconWidth?: number;
  size?: 30 | 70 | 50;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  disabled?: boolean;
}

function CommonButton({ type='button', label, icon, iconWidth, size, className, style, hidden, disabled }: CommonButtonProps) {
  return (
    <>
      <button type={type} className={`o-button ${className ?? ''}${size ? ` size-${size}` : ''}`} style={style} hidden={hidden} disabled={disabled}>
        { (icon) && <Icon icon={icon} width={iconWidth} /> }
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default CommonButton;
