import React, { useEffect, useMemo, useRef, useState } from "react";

import SppTypoRequiredTag from "@/pages/spp/component/TypoRequiredTag/SppTypoRequiredTag";

export interface SppTypoLabelProps {
  label?: React.ReactNode;
  required?: boolean;
  spec?: string;
  className?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  append?: React.ReactNode;
  wrapper?: "header" | "none";
};

export const SppTypoLabel = ({
  label="레이블",
  required=false,
  spec="o-label",
  className="",
  rootStyle,
  labelStyle,
  append,
  wrapper="none"
}: SppTypoLabelProps) => {
  const wrapperMap = {
    header: (children: React.ReactNode) => (
      <div className="header">{children}</div>
    ),
    none: (children: React.ReactNode) => <>{children}</>,
  }

  const content = (
    <div
      className={`
        ${spec}
        ${className}
        `.replace(/\s+/g, ' ').trim()}
      style={rootStyle}
    >
      <span className="label" style={labelStyle}>
        {label}

        { (required) && <SppTypoRequiredTag /> }
      </span>

      { append }
    </div>
  );

  return wrapperMap[wrapper](content);
};

export default SppTypoLabel;
