import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

export interface SppObjRequiredTagProps {
  label?: ReactNode;
  model?: string;
  modelType?: string;
  specName?: string;
  className?: string;
};

export const SppObjRequiredTag = ({
  label=(<>필수입력</>),
  model="o-required-tag",
  modelType="",
  specName="",
  className=""
}: SppObjRequiredTagProps) => {
  const content = (
    <em
      className={`
        ${model}
        ${modelType && ' type-' + modelType}
        ${specName && ' _' + specName}
        ${className}
        `.replace(/\s+/g, ' ').trim()}
    >
      <span className="tag">({label})</span>
    </em>
  );

  return (content);
};

export default SppObjRequiredTag;
