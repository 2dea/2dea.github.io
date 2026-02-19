import React, { useEffect, useMemo, useRef, useState } from "react";

import DomHeader from "@/layout/DomHeader";
import DomFooter from "@/layout/DomFooter";
import RoleMdiTabs from "@/layout/RoleMdiTabs";

import TmpTsProg from "@/pages/tmp/view/ts/TmpTsProg";

function AppDefaultLayout() {
  return (
    <>
      <div id="Document" className="dom-wrapper type-proto">

        <DomHeader />

        <div id="Container" className="dom-container">
          <div className="roles">

            <RoleMdiTabs />

            <div role="main" id="Main" className="role-main">
              <TmpTsProg />
            </div>

          </div>
        </div>

        <DomFooter />

      </div>
    </>
  );
}

export default AppDefaultLayout;
