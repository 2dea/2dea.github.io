// @ts-nocheck
/**
 * @description .o-icon
 */

// dependency
import React, { useState } from 'react';

interface OIconProps {
  icon: string;
  width?: 50 | 70 | 30;
  className?: string;
  style?: object;
}

function OIcon({ icon, width, className, style }: OIconProps) {
  return (
    <>
      <i aria-hidden="true" className={`o-icon _${icon}${className ? ` ${className}` : ''}${width === 50 ? ' wdth-50' : width === 70 ? ' wdth-70' : width === 30 ? ' wdth-30' : ''}`} style={style}></i>
    </>
  );
}

export default OIcon;
