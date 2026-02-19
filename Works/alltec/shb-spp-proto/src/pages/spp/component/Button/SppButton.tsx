import React, { useEffect, useMemo, useRef, useState } from "react";

import { Button, type ButtonProps } from "antd";

export interface SppButtonProps extends ButtonProps {
  // label: string;
  label?: React.ReactNode;
  required?: boolean;
  style?: React.CSSProperties;
};

export const SppButton = ({
  label = <>버튼</>,
  type = "default",
  ...rest
}: SppButtonProps) => {
  return <Button type={type} {...rest} />
  // return (
  //   <>
  //     <Button type={type} {...rest}>
  //       {label}
  //     </Button>
  //   </>
  // );
};

export default SppButton;
