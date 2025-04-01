// @ts-nocheck
/**
 * @description .o-icon
 */

// dependency
import React, { useState } from 'react';

interface IconProps {
  icon: string;
  width?: 50 | 70 | 30;
  className?: string;
  style?: object;
}

function Icon({ icon, width, className, style }: IconProps) {
  return (
    <>
      <i aria-hidden="true" className={`o-icon _${icon}${className ? ` ${className}` : ''}${width === 50 ? ' wdth-50' : width === 70 ? ' wdth-70' : width === 30 ? ' wdth-30' : ''}`} style={style}></i>
    </>
  );
}

export default Icon;
