import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { Breadcrumb, type BreadcrumbProps } from "antd"
import { HomeOutlined } from "@ant-design/icons"

type BreadcrumbItem =
  | ReactNode
  | {
      title: ReactNode
      href?: string
      onClick?: () => void
    }

export interface SppBreadcrumbProps
  extends Omit<BreadcrumbProps, "items"> {
    model?: string;
    modelType?: string;
    specName?: string;
    itemsArray?: BreadcrumbItem[];
}

export const SppBreadcrumb = ({
  model="m-breadcrumb",
  modelType="",
  specName="",
  className="",
  separator="›",
  itemsArray=[],
  ...rest
}: SppBreadcrumbProps) => {
  const items: BreadcrumbProps["items"] = [
    { title: <HomeOutlined /> },
    ...itemsArray.map((item) =>
      typeof item === "object" && item !== null && "title" in item
        ? item
        : { title: item }
    ),
  ]

  return (
    <>
      <Breadcrumb
        {...rest}
        className={`
            ${model}
            ${modelType && ' type-' + modelType}
            ${specName && ' _' + specName}
            ${className}
          `
          .replace(/\s+/g, ' ')
          .trim()}
        separator={separator}
        items={items}
      />
    </>
  )
}

export default SppBreadcrumb
