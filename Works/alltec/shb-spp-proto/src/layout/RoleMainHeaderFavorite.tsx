import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppButton from "@/pages/spp/component/Button/SppButton";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

export interface RoleMainHeaderFavoriteProps {
  render?: boolean;
};

export const RoleMainHeaderFavorite = ({
  render=true
}: RoleMainHeaderFavoriteProps) => {
  return (
    <>
      {
        (render) &&
          <div className="favorite">
            <SppButton color="default" variant="text" icon={<SppObjSymbol label={`kid_star`} className="style-fill" />} modelType="image" title="즐겨찾기 추가/해제"></SppButton>
          </div>
      }
    </>
  );
};

export default RoleMainHeaderFavorite;
