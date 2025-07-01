// @ts-nocheck
/**
 * @description .o-label
 */

// dependency
import React, { useRef, useState } from 'react';

interface LabelProps {
  // label: string;
  label: React.ReactNode;
  require?: boolean;
  className?: string;
  style?: React.CSSProperties;
  append?: React.ReactNode;
}

function Label({ label, require, className, style, append }: LabelProps) {
  return (
    <>
      <div className={`o-label${className ? ` ${className}` : ''}`} style={style}>
        <span className="label">
          {label}

          { (require) && <em className="o-require-tag"><span className="tag">(필수입력)</span></em> }
        </span>

        { append }
      </div>
    </>
  );
}

export default Label;
