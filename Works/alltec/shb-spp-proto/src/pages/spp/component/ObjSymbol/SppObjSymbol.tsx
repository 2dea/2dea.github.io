import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

export const resLabel = {
  arrowMdiBackward: 'keyboard_arrow_left',
  arrowMdiForward: 'keyboard_arrow_right',
  closeMdi: 'close_small',
  closeMdiTab: 'tab_close',
  closePopup: 'close',
  excelDownloadLabel: '',
  excelDownloadSection: '',
  excelUploadLabel: '',
  excelUploadSection: '',
  favoriteHeader: 'kid_star',
  helpManual: 'help',
  homeMdi: 'home_app_logo',
  signoutHeader: 'exit_to_app',
  toggleNavMenu: '',
};

export interface SppObjSymbolProps {
  label?: ReactNode;
  model?: string;
  modelType?: "font" | "icon" | "image" | "";
  specName?: string;
  symbolStyle?: "line" | "fill" | "";
  height?: "30" | "50" | "70" | "";
  className?: string;
  rootStyle?: CSSProperties;
  ariaHidden?: boolean | "false" | "true" | undefined;
};

export const SppObjSymbol = ({
  ariaHidden=true,
  label,
  model="o-sym",
  modelType="font",
  specName="",
  symbolStyle="",
  height="",
  className="",
  rootStyle
}: SppObjSymbolProps) => {
  const content = (
    <i
      aria-hidden={ariaHidden}
      className={`
          ${model}
          ${modelType && ' type-' + modelType}
          ${specName && ' _' + specName}
          ${symbolStyle && ' style-' + symbolStyle}
          ${height && ' size-' + height}
          ${className}
        `
        .replace(/\s+/g, ' ')
        .trim()}
      style={rootStyle}
    >
      {label}
    </i>
  );

  return (content);
};

export default SppObjSymbol;
