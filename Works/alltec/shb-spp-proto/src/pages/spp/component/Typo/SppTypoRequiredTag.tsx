import React, { useEffect, useMemo, useRef, useState } from "react";

export interface SppTypoRequiredTagProps {
  label?: React.ReactNode;
  spec?: string;
  className?: string;
};

export const SppTypoRequiredTag = ({
  label="필수입력",
  spec="o-required-tag",
  className="",
}: SppTypoRequiredTagProps) => {
  const content = (
    <em
      className={`${spec} ${className}`.trim()}
    >
      <span className="tag">({label})</span>
    </em>
  );

  return (content);
};

export default SppTypoRequiredTag;
