import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppButtonGroup, { type SppButtonGroupProps } from "../Button/SppButtonGroup";

export interface SppModalFooterProps extends SppButtonGroupProps {};

export const SppModalFooter = (props: SppModalFooterProps) => {
  return <SppButtonGroup {...props} modelType="end" />;
};

export default SppModalFooter;
