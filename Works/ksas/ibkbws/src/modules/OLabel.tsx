// @ts-nocheck
/**
 * @description .o-label
 */

// dependency
import React, { useState } from 'react';

interface OLabelProps {
  label: string;
  require: boolean;
  className?: string;
}

function OLabel({ label, require, className }: OLabelProps) {
  return (
    <>
      <div className={`o-label${className ? ` ${className}` : ''}`}>
        <span className="label">
          {label}

          { (require) && <em className="o-require-tag"><span className="tag">(필수입력)</span></em> }
        </span>
      </div>
    </>
  );
}

export default OLabel;
