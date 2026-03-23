import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Checkbox, type CheckboxProps } from "antd";

export interface SppCheckboxProps extends CheckboxProps {}

const SppCheckbox = (props: SppCheckboxProps) => {
  return <Checkbox {...props} />;
};

export default SppCheckbox;
