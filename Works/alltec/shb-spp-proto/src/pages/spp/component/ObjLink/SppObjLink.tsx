import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface SppObjLinkProps {
  href?: string;
  target?: string;
  label?: ReactNode;
  model?: string;
  modelType?: string;
  specName?: string;
  className?: string;
  rootStyle?: CSSProperties;
  append?: ReactNode;
  onClick?: React.MouseEvent<HTMLAnchorElement>;
};

export const SppObjLink = ({
  href,
  target,
  label=(<>링크</>),
  model="o-link",
  modelType="",
  specName="normal",
  className="",
  rootStyle,
  append,
  onClick
}: SppObjLinkProps) => {
  const content = (
    <a
      href={href}
      target={target}
      className={`
          ${model}
          ${modelType && ' type-' + modelType}
          ${specName && ' _' + specName}
          ${className}
        `
        .replace(/\s+/g, ' ')
        .trim()}
      style={rootStyle}
      // onClick={onClick}
    >
      <span className="label">
        {label}
      </span>

      {append}
    </a>
  );

  return (content);
};

export default SppObjLink;
