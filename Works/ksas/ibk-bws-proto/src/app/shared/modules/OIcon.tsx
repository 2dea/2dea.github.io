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
  style?: React.CSSProperties;
}

function Icon({ icon, width, className, style }: IconProps) {
  return (
    <>
      <i aria-hidden="true" className={`o-icon _${icon}${className ? ` ${className}` : ''}${width ? ` wdth-${width}` : ''}`} style={style}></i>
    </>
  );
}

export default Icon;
