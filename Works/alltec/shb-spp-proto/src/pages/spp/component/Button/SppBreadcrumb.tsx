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
  itemsArray?: BreadcrumbItem[]
}

export const SppBreadcrumb: React.FC<SppBreadcrumbProps> = ({
  className = "m-breadcrumb",
  separator = "›",
  itemsArray = [],
  ...rest
}) => {
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
      className={className}
      separator={separator}
      items={items}
      {...rest}
    />
  )
}

export default SppBreadcrumb
