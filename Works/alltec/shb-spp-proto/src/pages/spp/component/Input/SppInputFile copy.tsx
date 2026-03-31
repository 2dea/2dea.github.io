import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons"

import SppButton from "../Button/SppButton";

export interface SppInputFileProps {
  model?: string;
  modelType?: string;
  specName?: string;
  width?: "auto" | "justify" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100p" | "";
  className?: string;
  fileSizeRender?: boolean;
  removeButtonRender?: boolean;
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
    fileSizeRender=true,
    removeButtonRender=true,
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
  //   if (bytes <= 0) return "0KB";

  //   const KB = 1024;
  //   const MB = KB * 1024;
  //   const GB = MB * 1024;

  //   const format = (num: number, unit: string, useFixed: boolean) => {
  //     // useFixed가 true면 소수점 1자리, false면 정수 올림
  //     const val = useFixed
  //       ? Math.ceil(num * 10) / 10  // 소수점 둘째자리에서 올림하여 첫째자리까지 표시
  //       : Math.ceil(num);           // 정수 올림

  //     return `${val.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}${unit}`;
  //   };

  //   // 1. GB 단위 (100GB 미만은 소수점 1자리, 그 이상은 정수)
  //   if (bytes >= GB) {
  //     const gbVal = bytes / GB;
  //     return format(gbVal, "GB", gbVal < 100);
  //   }
  //   // 2. MB 단위 (100MB 미만은 소수점 1자리, 그 이상은 정수)
  //   if (bytes >= MB) {
  //     const mbVal = bytes / MB;
  //     return format(mbVal, "MB", mbVal < 100);
  //   }
  //   // 3. KB 단위 (무조건 정수 올림)
  //   return format(bytes / KB, "KB", false);
  // };

  const formatFileSize = (bytes: number): string => {
    if (bytes <= 0) return "0KB";

    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    // 1. GB 계산
    if (bytes >= GB || Math.ceil(bytes / MB) >= 1024) {
      const gbVal = bytes / GB;
      // 100GB 미만은 소수점 1자리 올림, 그 이상은 정수 올림
      const finalVal = gbVal < 100 ? Math.ceil(gbVal * 10) / 10 : Math.ceil(gbVal);
      return `${finalVal.toLocaleString()}GB`;
    }

    // 2. MB 계산 (1,024KB가 되면 MB로 전환)
    if (bytes >= MB || Math.ceil(bytes / KB) >= 1024) {
      const mbVal = bytes / MB;
      // 100MB 미만은 소수점 1자리 올림, 그 이상은 정수 올림
      const finalVal = mbVal < 100 ? Math.ceil(mbVal * 10) / 10 : Math.ceil(mbVal);
      return `${finalVal.toLocaleString()}MB`;
    }

    // 3. KB 계산 (무조건 정수 올림)
    const kbVal = Math.ceil(bytes / KB);
    return `${kbVal.toLocaleString()}KB`;
  };

  const hasFile = useMemo(() => !!value || !!displayFileName, [value, displayFileName]);
  const fileName = useMemo(() => value?.name ?? displayFileName ?? '', [value, displayFileName]);

  const fileSizeLabel = useMemo(() => {
    if (!value) return ""; // 파일이 없으면 표시 안함 (또는 "0KB")
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
            {fileSizeRender && hasFile && value &&
              <span className="string size">{fileSizeLabel}</span>
            }
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
