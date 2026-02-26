import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppObjRequiredTag from "@/pages/spp/component/ObjRequiredTag/SppObjRequiredTag";

export interface SppObjLabelProps {
  label?: ReactNode;
  required?: boolean;
  model?: string;
  modelType?: string;
  specName?: string;
  className?: string;
  rootStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  append?: ReactNode;
  wrapper?: "header" | "none";
};

export const SppObjLabel = ({
  label=(<>레이블</>),
  required=false,
  model="o-label",
  modelType="",
  specName="",
  className="",
  rootStyle,
  labelStyle,
  append,
  wrapper="none"
}: SppObjLabelProps) => {
  const wrapperMap = {
    header: (children: ReactNode) => (
      <div className="header">{children}</div>
    ),
    none: (children: ReactNode) => <>{children}</>,
  }

  const content = (
    <div
      className={`
        ${model}
        ${modelType && ' type-' + modelType}
        ${specName && ' _' + specName}
        ${className}
        `.replace(/\s+/g, ' ').trim()}
      style={rootStyle}
    >
      <span className="label" style={labelStyle}>
        {label}

        { (required) && <SppObjRequiredTag /> }
      </span>

      {append}
    </div>
  );

  return wrapperMap[wrapper](content);
};

export default SppObjLabel;
