// @ts-nocheck
/**
 * @description .o-image-button
 */

// dependency
import React, { useState } from 'react';

interface ImageButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  label: string;
  icon?: string;
  iconWidth?: 50 | 70 | 30;
  size?: 50 | 70 | 30;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  disabled?: boolean;
}

function ImageButton({ type='button', label, icon, iconWidth, size, className, style, hidden, disabled }: ImageButtonProps) {
  return (
    <>
      <button type={type} title={label} className={`o-image-button${icon ? ` o-icon _${icon}` : ''}${iconWidth ? ` wdth-${iconWidth}` : ''}${className ? ` ${className}` : ''}${size ? ` size-${size}` : ''}`} style={style} hidden={hidden} disabled={disabled}>
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default ImageButton;
