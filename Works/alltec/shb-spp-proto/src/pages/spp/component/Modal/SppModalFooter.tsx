import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppButtonGroup, { type SppButtonGroupProps } from "../Button/SppButtonGroup";

export interface SppModalFooterProps extends SppButtonGroupProps {};

export const SppModalFooter = (props: SppModalFooterProps) => {
  return <SppButtonGroup {...props} modelType="end" />;
};

export default SppModalFooter;
