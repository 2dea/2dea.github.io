import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

function DomFooter() {
  return (
    <>
        <aside id="Aside" className="dom-aside">
          <button type="button"><span className="label">시스템링크</span></button>
        </aside>
    </>
  );
}

export default DomFooter;
