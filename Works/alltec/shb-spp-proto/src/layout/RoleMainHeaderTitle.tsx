import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

export interface RoleMainHeaderTitleProps {
  label?: ReactNode;
};

export const RoleMainHeaderTitle = ({
  label
}: RoleMainHeaderTitleProps) => {
  return (
    <>
      {
        (label) &&
          <h1 className="o-heading level1">
            <span className="label">{label}</span>
          </h1>
      }
    </>
  );
};

export default RoleMainHeaderTitle;
