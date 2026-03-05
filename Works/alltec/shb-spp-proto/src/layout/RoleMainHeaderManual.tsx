import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppButton from "@/pages/spp/component/Button/SppButton";

import { QuestionCircleOutlined } from "@ant-design/icons";

export interface RoleMainHeaderManualProps {
  render?: boolean;
};

export const RoleMainHeaderManual = ({
  render=false
}: RoleMainHeaderManualProps) => {
  return (
    <>
      {
        (render) &&
          <div className="manual-util">
            <SppButton color="default" variant="filled" size="small" icon={<QuestionCircleOutlined />}>매뉴얼</SppButton>
          </div>
      }
    </>
  );
};

export default RoleMainHeaderManual;
