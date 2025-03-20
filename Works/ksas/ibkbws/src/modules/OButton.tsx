// @ts-nocheck
/**
 * @description .o-button
 */

// dependency
import React, { useState } from 'react';

import OIcon from './OIcon';

interface OButtonProps {
  label: string;
  icon?: string;
  iconWidth?: number;
  size?: 30 | 70 | 50;
  className?: string;
}

function OButton({ label, icon, iconWidth, size, className }: OButtonProps) {
  return (
    <>
      <button type="button" className={`o-button${className ? ` ${className}` : ''}${size === 30 ? ' size-30' : size === 70 ? ' size-70' : size === 50 ? ' size-50' : ''}`}>
        { (icon) && <OIcon icon={icon} width={iconWidth} /> }
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default OButton;
