import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface SppButtonGroupProps {
  model?: string;
  modelType?: string;
  specName?: string;
  className?: string;
  rootStyle?: CSSProperties;
  children?: ReactNode;
  childrenClassName?: string;
  children1?: ReactNode;
  children1ClassName?: string;
  children2?: ReactNode;
  children2ClassName?: string;
};

export const SppButtonGroup = ({
  model="m-binds",
  modelType="",
  specName="",
  className="",
  rootStyle,
  children,
  childrenClassName="primary",
  children1,
  children1ClassName="secondary",
  children2,
  children2ClassName="tertiary"
}: SppButtonGroupProps) => {
  const content = (
    <>
      <div
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
        {children2 && (
          <div className={`group ${children2ClassName && ' _' + children2ClassName}`.replace(/\s+/g, ' ').trim()}>
            {children2}
          </div>
        )}

        {children1 && (
          <div className={`group ${children1ClassName && ' _' + children1ClassName}`.replace(/\s+/g, ' ').trim()}>
            {children1}
          </div>
        )}

        {children && (
          <div className={`group ${childrenClassName && ' _' + childrenClassName}`.replace(/\s+/g, ' ').trim()}>
            {children}
          </div>
        )}
      </div>
    </>
  );

  return (content);
};

export default SppButtonGroup;
