import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons"

import SppButton from "../Button/SppButton";

export interface SppInputFileProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  className?: string;
  selectButtonRender?: boolean;
  selectButtonProps?: {};
  selectButtonText?: string;
  placeholder?: string;
  value?: File | null;
  displayFileName?: string;
  accept?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (file: File | null) => void;
  onDeleteOrigin?: () => void;
};

const SppInputFile = (props: SppInputFileProps) => {
  const {
    model="d-form",
    modelType="input",
    specName="file",
    width="",
    className="",
    selectButtonRender=true,
    selectButtonProps={ variant: 'outlined', color: 'default', specName: 'normal', },
    selectButtonText="파일선택",
    placeholder="선택된 파일 없음",
    value,
    displayFileName,
    accept,
    readOnly=true,
    disabled,
    onChange,
    onDeleteOrigin
  } = props;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const fileName = useMemo(() => value?.name ?? displayFileName ?? '', [value, displayFileName]);
  const hasFile = useMemo(() => !!value || !!displayFileName, [value, displayFileName]);

  const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const f = evt.target.files?.[0];
    if (!f) return;
    onChange?.(f);

    // evt.target.value = '';
  };

  const handleRemove = () => {
    if (value) {
      onChange?.(null);
    } else if (displayFileName) {
      onDeleteOrigin?.();
    }

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    if (!value && fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [value]);

  return (
    <>
      <Input
        className={`
            ${model}
            ${modelType && ' type-' + modelType}
            ${specName && ' _' + specName}
            ${width && ' wd-' + width}
            ${className}
          `
          .replace(/\s+/g, ' ')
          .trim()}
        placeholder={placeholder}
        // allowClear
        suffix={
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              disabled={disabled}
              hidden
              onChange={handleFileChange}
            />
            <button type="button" className="ant-input-clear-icon ant-input-clear-icon-has-suffix" title="파일제거" hidden={disabled || !hasFile} onClick={handleRemove}>
              <CloseCircleFilled />
            </button>
            {selectButtonRender &&
              <span className="inner-binds">
                <SppButton {...selectButtonProps} disabled={disabled} onClick={() => { fileInputRef.current?.click() }}>{selectButtonText}</SppButton>
                {/* <SppButton variant="outlined" color="default" specName="normal" disabled={disabled || !hasFile} onClick={handleRemove}>파일제거</SppButton> */}
              </span>
            }
          </>
        }
        title={fileName}
        value={fileName}
        readOnly={readOnly}
        disabled={disabled}
        // onClear={handleRemove}
        onClick={() => { fileInputRef.current?.click() }}
      />
    </>
  );
};

export default SppInputFile;
