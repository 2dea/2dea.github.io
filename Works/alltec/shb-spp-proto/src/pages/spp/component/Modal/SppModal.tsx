import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppModalHeader from "./SppModalHeader";
import SppModalFooter from "./SppModalFooter";

import { Modal, type ModalProps } from "antd"

export interface SppModalProps extends ModalProps {
  // headerTitle?: ReactNode;
  model?: string;
  modelType?: string;
  specName?: string;
  // wrapWidth?: string;
  wrapWidth?: "auto" | "20" | "25" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  headerAppendPrime?: ReactNode;
  headerAppendPrimeTitle?: ReactNode;
  headerAppendExtra?: ReactNode;
  footerAppendButton?: ReactNode;
  cancelButtonRender?: boolean;
  okButtonRender?: boolean;
};

export const SppModal = ({
  // headerTitle=<>팝업 타이틀</>,
  model="d-layer layer-popup",
  modelType="univ",
  specName="",
  rootClassName="",
  wrapWidth="40",
  headerAppendPrime,
  headerAppendPrimeTitle,
  headerAppendExtra,
  footer=(_, { OkBtn, CancelBtn }) => (
    <SppModalFooter
      children={
        <>
          {cancelButtonRender && <CancelBtn />}
          {footerAppendButton}
          {okButtonRender && <OkBtn />}
        </>
      }
    />
  ),
  footerAppendButton,
  maskClosable=false,
  keyboard=true,
  cancelButtonRender=true,
  cancelButtonProps={ variant: 'outlined', color: 'purple', className: 'd-button _cancel', },
  cancelText="닫기",
  okButtonRender=true,
  okButtonProps={ variant: 'solid', color: 'purple', className: 'd-button _solid-1', },
  okText="확인",
  // open,
  ...props
}: SppModalProps) => {
  return (
    <>
      <Modal
        {...props}
        rootClassName={`
            ${model}
            ${modelType && ' type-' + modelType}
            ${specName && ' _' + specName}
            ${wrapWidth && !props.width ? ' wd-' + wrapWidth : ''}
            ${props.width ? ' -def-width' : ''}
            ${rootClassName}
          `
          .replace(/\s+/g, ' ')
          .trim()}
        width={(props.width !== undefined) ? props.width : !wrapWidth ? 520 : ''}
        title={
          <SppModalHeader
            title={props.title ?? '팝업 타이틀'}
            appendPrime={headerAppendPrime}
            appendPrimeTitle={headerAppendPrimeTitle}
            appendExtra={headerAppendExtra}
          />
        }
        footer={footer}
        mask={{ ...(props.mask as any), blur: false, }}
        maskClosable={maskClosable}
        keyboard={keyboard}
        cancelButtonProps={cancelButtonProps}
        cancelText={cancelText}
        okButtonProps={okButtonProps}
        okText={okText}
        // open={open}
      >
        {props.children}
      </Modal>
    </>
  )
}

export default SppModal
