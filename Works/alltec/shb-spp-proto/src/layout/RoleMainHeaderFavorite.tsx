import React, { useEffect, useMemo, useRef, useState } from "react";

import SppButton from "@/pages/spp/component/Button/SppButton";

import { StarFilled } from "@ant-design/icons";

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
            <SppButton color="default" variant="text" icon={<StarFilled />} title="즐겨찾기 추가/해제"></SppButton>
          </div>
      }
    </>
  );
};

export default RoleMainHeaderFavorite;
