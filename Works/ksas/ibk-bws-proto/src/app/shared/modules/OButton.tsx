// @ts-nocheck
/**
 * @description .o-button
 */

// dependency
import React, { useRef, useState } from 'react';

import Icon from 'app/shared/modules/OIcon';

interface CommonButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  id?: string;
  label: string;
  title?: string;
  tooltip?: string;
  tooltipPos?: string;
  icon?: string;
  iconWidth?: number;
  size?: 30 | 70 | 50;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
  hidden?: boolean;
  disabled?: boolean;
}

function CommonButton({ type='button', id, label, title, tooltip, tooltipPos='top', icon, iconWidth, size, className, style, onClick, hidden, disabled }: CommonButtonProps) {
  return (
    <>
      <button type={type} id={id} title={title} data-pr-tooltip={tooltip} data-pr-position={tooltipPos} className={`o-button ${className ?? ''}${size ? ` size-${size}` : ''}`} style={style} onClick={onClick && onClick} hidden={hidden} disabled={disabled}>
        { (icon) && <Icon icon={icon} width={iconWidth} /> }
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default CommonButton;
