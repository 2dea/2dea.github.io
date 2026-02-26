import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppButton from "@/pages/spp/component/Button/SppButton";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";

function RoleMdiTabs() {
  return (
    <>
            <div className="role-main-core">
              <div className="div-tablist">
                <div className="m-mdiist">
                  <div className="tab-wrapper">
                    <div className="defaults">
                      <div className="tab">
                        <a href="javascript:" className="label">Home</a>
                      </div>
                    </div>

                    <div className="lists">
                      <div className="tab">
                        <a href="javascript:" className="label">일일 확인 업무</a>
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.closeMdi} />} aria-label="화면 닫기" modelType="image" title="닫기"></SppButton>
                      </div>

                      <div className="tab">
                        <a href="javascript:" className="label">신청현황 조회</a>
                      </div>
                    </div>

                    <div className="controls"></div>
                  </div>
                </div>

              </div>
            </div>
    </>
  );
}

export default RoleMdiTabs;
