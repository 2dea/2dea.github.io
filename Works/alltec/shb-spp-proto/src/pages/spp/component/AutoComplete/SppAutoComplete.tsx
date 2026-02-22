import React, { useEffect, useMemo, useRef, useState } from "react";

import { AutoComplete, type AutoCompleteProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export interface SppAutoCompleteProps extends AutoCompleteProps {
  spec?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
};

export const SppAutoComplete = ({
  spec="d-form",
  width="",
  className="",
  allowClear=true,
  prefix=<SearchOutlined />,
  ...rest
}: SppAutoCompleteProps) => {
  return (
    <>
      <AutoComplete
        className={`${spec}${width && ' wd-' + width} ${className}`.trim()}
        allowClear={allowClear}
        prefix={prefix}
        {...rest}
      />
    </>
  );
};

export default SppAutoComplete;
