import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

export interface SppObjRequiredTagProps {
  label?: ReactNode;
  model?: string;
  modelType?: string;
  specName?: string;
  className?: string;
  rootStyle?: CSSProperties;
};

export const SppObjRequiredTag = ({
  label=(<>필수입력</>),
  model="o-reqtag",
  modelType="",
  specName="",
  className="",
  rootStyle
}: SppObjRequiredTagProps) => {
  const content = (
    <em
      className={`
          ${model}
          ${modelType && ' type-' + modelType}
          ${specName && ' _' + specName}
          ${className}
        `
        .replace(/\s+/g, ' ')
        .trim()}
      style={rootStyle}
    >
      <span className="tag">({label})</span>
    </em>
  );

  return (content);
};

export default SppObjRequiredTag;
