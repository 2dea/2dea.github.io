// @ts-nocheck
/**
 * @description .o-image-button
 */

// dependency
import React, { useState } from 'react';

interface OImageButtonProps {
  label: string;
  icon?: string;
  size?: 50 | 70 | 30;
  className?: string;
}

function OImageButton({ label, icon, size, className }: OImageButtonProps) {
  return (
    <>
      <button type="button" title={label} className={`o-image-button${icon ? ` o-icon _${icon}` : ''}${className ? ` ${className}` : ''}${size === 50 ? ' size-50' : size === 70 ? ' size-70' : size === 30 ? ' size-30' : ''}`}>
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default OImageButton;
