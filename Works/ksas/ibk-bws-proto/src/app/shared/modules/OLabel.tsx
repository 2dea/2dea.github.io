// @ts-nocheck
/**
 * @description .o-label
 */

// dependency
import React, { useState } from 'react';

interface LabelProps {
  label: string;
  require?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function Label({ label, require, className, style }: LabelProps) {
  return (
    <>
      <div className={`o-label${className ? ` ${className}` : ''}`} style={style}>
        <span className="label">
          {label}

          { (require) && <em className="o-require-tag"><span className="tag">(필수입력)</span></em> }
        </span>
      </div>
    </>
  );
}

export default Label;
