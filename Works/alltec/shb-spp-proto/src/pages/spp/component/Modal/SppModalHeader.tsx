import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface SppModalHeaderProps {
  title?: ReactNode;
  rootStyle?: CSSProperties;
  appendPrime?: ReactNode;
  appendPrimeTitle?: ReactNode;
  appendExtra?: ReactNode;
};

export const SppModalHeader = ({
  title=<>타이틀</>,
  rootStyle,
  appendPrime,
  appendPrimeTitle,
  appendExtra
}: SppModalHeaderProps) => {
  const content = (
    <>
      <div className="prime" style={rootStyle}>
        <h3 className="o-heading level1">
          <span className="label">{title}</span>

          {appendPrimeTitle}
        </h3>

        {appendPrime}
      </div>

      {appendExtra && (
        <div className="extra">
          {appendExtra}
        </div>
      )}
    </>
  );

  return (content);
};

export default SppModalHeader;
