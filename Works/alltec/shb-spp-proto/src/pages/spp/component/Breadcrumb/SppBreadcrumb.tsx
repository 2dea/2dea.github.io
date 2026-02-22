import React, { useEffect, useMemo, useRef, useState } from "react";

import { Breadcrumb, type BreadcrumbProps } from "antd"
import { HomeOutlined } from "@ant-design/icons"

type BreadcrumbItem =
  | React.ReactNode
  | {
      title: React.ReactNode
      href?: string
      onClick?: () => void
    }

export interface SppBreadcrumbProps
  extends Omit<BreadcrumbProps, "items"> {
    spec?: string;
    itemsArray?: BreadcrumbItem[];
}

export const SppBreadcrumb = ({
  spec = "m-breadcrumb",
  className = "",
  separator = "›",
  itemsArray = [],
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
    <Breadcrumb
      className={`${spec} ${className}`.trim()}
      separator={separator}
      items={items}
      {...rest}
    />
  )
}

export default SppBreadcrumb
