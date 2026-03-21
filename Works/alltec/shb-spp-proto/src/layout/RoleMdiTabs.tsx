import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

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
                      <div className="node">
                        <a href="javascript:" className="tab symbol" title="홈" aria-label="홈 화면 탭"><SppObjSymbol label={resLabel.homeMdi} /></a>
                      </div>
                    </div>

                    <div className="lists">
                      <div className="node">
                        <a href="javascript:" className="tab normal">일일 확인 업무</a>
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.closeMdi} />} modelType="symbol" title="닫기" aria-label="화면 닫기"></SppButton>
                      </div>

                      <div className="node">
                        <a href="javascript:" className="tab normal -selected">신청하기</a>
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.closeMdi} />} modelType="symbol" title="닫기" aria-label="화면 닫기"></SppButton>
                      </div>

                      <div className="node">
                        <a href="javascript:" className="tab normal">개인정보관리시스템(PIMS) 출력물 승인장 관리 현황</a>
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.closeMdi} />} modelType="symbol" title="닫기" aria-label="화면 닫기"></SppButton>
                      </div>

                      <div className="node">
                        <a href="javascript:" className="tab normal">주민등록번호, 민감정보 처리현황 목록</a>
                        <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.closeMdi} />} modelType="symbol" title="닫기" aria-label="화면 닫기"></SppButton>
                      </div>
                    </div>

                    <div className="controls">
                      <div className="node">
                        <span className="tab group">
                          <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.arrowMdiBackward} />} modelType="symbol" title="앞으로 스크롤" aria-label="앞으로 스크롤"></SppButton>
                          <SppButton color="default" variant="text" size="small" icon={<SppObjSymbol label={resLabel.arrowMdiForward} />} modelType="symbol" title="뒤로 스크롤" aria-label="뒤로 스크롤"></SppButton>
                        </span>
                      </div>

                      <div className="node">
                        <button type="button" className="tab symbol" title="전체닫기" aria-label="전체화면 닫기"><SppObjSymbol label={resLabel.closeMdiTab} /></button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
    </>
  );
}

export default RoleMdiTabs;
