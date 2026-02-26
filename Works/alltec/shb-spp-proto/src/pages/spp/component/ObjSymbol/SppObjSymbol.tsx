import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

export const resLabel = {
  closeMdi: 'close_small',
  closePopup: 'close',
  helpManual: 'help',
};

export interface SppObjSymbolProps {
  label?: ReactNode;
  model?: string;
  modelType?: "font" | "icon" | "image" | "";
  specName?: string;
  size?: "30" | "50" | "70" | "";
  className?: string;
  ariaHidden?: boolean | "false" | "true" | undefined;
};

export const SppObjSymbol = ({
  ariaHidden=true,
  label,
  model="o-sym",
  modelType="font",
  specName="",
  size="",
  className=""
}: SppObjSymbolProps) => {
  const content = (
    <i
      aria-hidden={ariaHidden}
      className={`
        ${model}
        ${modelType && ' type-' + modelType}
        ${specName ?? ' _' + specName}
        ${size && ' size-' + size}
        ${className}
        `.replace(/\s+/g, ' ').trim()}
    >
      {label}
    </i>
  );

  return (content);
};

export default SppObjSymbol;
