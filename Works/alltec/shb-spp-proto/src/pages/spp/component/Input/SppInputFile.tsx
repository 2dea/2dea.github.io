import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";
import { formatFileSize } from "@/util/file.util";

import { Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons"

import SppButton from "../Button/SppButton";

export interface SppInputFileProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | string | number;
  align?: "justify" | "start" | "center" | "end" | "inherit" | "";
  className?: string;
  fileSizeRender?: boolean;
  removeButtonRender?: boolean;
  downloadButtonRender?: boolean;
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
    align="",
    className="",
    fileSizeRender=true,
    removeButtonRender=true,
    downloadButtonRender=false,
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

  // const formatFileSize = (bytes: number): string => {
  //   if (isNaN(bytes)) return "";

  //   if (bytes <= 0) return "0B";

  //   const KB = 1024;
  //   const MB = KB * 1024;
  //   const GB = MB * 1024;

  //   if (bytes >= GB || Math.ceil(bytes / MB) >= 1024) {
  //     const gbVal = bytes / GB;
  //     const destVal = gbVal < 100 ? Math.ceil(gbVal * 10) / 10 : Math.ceil(gbVal);
  //     return `${destVal.toLocaleString()}GB`;
  //   }

  //   if (bytes >= MB || Math.ceil(bytes / KB) >= 1024) {
  //     const mbVal = bytes / MB;
  //     const destVal = mbVal < 100 ? Math.ceil(mbVal * 10) / 10 : Math.ceil(mbVal);
  //     return `${destVal.toLocaleString()}MB`;
  //   }

  //   const kbVal = Math.ceil(bytes / KB);
  //   return `${kbVal.toLocaleString()}KB`;
  // };

  const hasFile = useMemo(() => !!value || !!displayFileName, [value, displayFileName]);
  const fileName = useMemo(() => value?.name ?? displayFileName ?? '', [value, displayFileName]);

  const fileSizeLabel = useMemo(() => {
    if (!value) return "";
    return formatFileSize(value.size);
  }, [value]);

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
            ${align && ' g-' + (!/start|center|end/g.test(align) ? 'ta-' : '') + align}
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
            {removeButtonRender &&
              <button type="button" className="ant-input-clear-icon ant-input-clear-icon-has-suffix" title="파일제거" hidden={disabled || !hasFile} onClick={handleRemove}>
                <CloseCircleFilled />
              </button>
            }
            {fileSizeRender && !!fileSizeLabel && !/^NaN/g.test(fileSizeLabel) && hasFile && value &&
              <span className="string size" title="파일크기">{fileSizeLabel}</span>
            }
            {(downloadButtonRender || selectButtonRender) &&
              <span className="inner-binds">
                {selectButtonRender &&
                  <SppButton {...selectButtonProps} disabled={disabled} onClick={() => { fileInputRef.current?.click() }}>{selectButtonText}</SppButton>
                }
                {downloadButtonRender &&
                  <SppButton {...selectButtonProps} onClick={() => { alert('DOWNLOADS') }}>다운로드</SppButton>
                }
              </span>
            }
          </>
        }
        title={fileName || "파일선택"}
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
