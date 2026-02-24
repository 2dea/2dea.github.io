import React, { useEffect, useMemo, useRef, useState } from "react";

import { Button, type ButtonProps } from "antd";

export interface SppButtonProps extends ButtonProps {
  // label: string;
  label?: React.ReactNode;
  required?: boolean;
  style?: React.CSSProperties;

  spec?: string;
  specType?: string;
  // face?: string | "normal" | "solid-0" | "inquire" | "solid-1" | "solid-2" | "create" | "solid-3" | "lined-1" | "cancel" | "delete" | "lined-2" | "lined-3" | "filled-status-00" | "filled-status-20" | "filled-status-80" | "texted-0" | "linked-0";
  face?: "normal" | "inquire" | "solid-1" | "create" | "solid-3" | "lined-1" | "cancel" | "delete" | "lined-2" | "lined-3" | "filled-status-00" | "filled-status-20" | "filled-status-80" | "texted-0" | "linked-0";
};

export const SppButton = ({
  htmlType="button",
  spec="d-button",
  specType="",
  face="normal",
  className="",
  // label = <>버튼</>,
  type = "default",
  ...rest
}: SppButtonProps) => {
  // return <Button htmlType={htmlType} className={`d-button ${className}`} type={type} {...rest} />
  return (
    <>
      <Button
        htmlType={htmlType}
        className={`
          ${spec}
          ${specType && ' type-' + specType}
          ${face && ' _' + face}
          ${className}
          `.replace(/\s+/g, ' ').trim()}
        type={type}
        {...rest}
      />
    </>
  );
  // return (
  //   <>
  //     <Button type={type} {...rest}>
  //       {label}
  //     </Button>
  //   </>
  // );
};

export default SppButton;
