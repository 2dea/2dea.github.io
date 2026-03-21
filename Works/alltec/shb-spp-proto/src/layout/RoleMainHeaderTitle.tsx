import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface RoleMainHeaderTitleProps {
  label?: ReactNode;
  render?: boolean;
};

export const RoleMainHeaderTitle = ({
  label,
  render=false
}: RoleMainHeaderTitleProps) => {
  return (
    <>
      {
        (render && label) &&
          <h1 className="o-heading level1">
            <span className="label">{label}</span>
          </h1>
      }
    </>
  );
};

export default RoleMainHeaderTitle;
