// @ts-nocheck
/**
 * @description .o-image-button
 */

// dependency
import React, { useState } from 'react';

interface ImageButtonProps {
  label: string;
  icon?: string;
  iconWidth?: 50 | 70 | 30;
  size?: 50 | 70 | 30;
  className?: string;
  style?: object;
  hidden?: boolean;
  disabled?: boolean;
}

function ImageButton({ label, icon, iconWidth, size, className, style, hidden, disabled }: ImageButtonProps) {
  return (
    <>
      <button type="button" title={label} className={`o-image-button${icon ? ` o-icon _${icon}` : ''}${iconWidth === 50 ? ' wdth-50' : iconWidth === 70 ? ' wdth-70' : iconWidth === 30 ? ' wdth-30' : ''}${className ? ` ${className}` : ''}${size === 50 ? ' size-50' : size === 70 ? ' size-70' : size === 30 ? ' size-30' : ''}`} style={style} hidden={hidden} disabled={disabled}>
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default ImageButton;
