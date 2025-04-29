/**
 * @description TEST > 공통 로딩
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';

function LoadingBar() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);

  return (
    <>
      <div className="o-loading-layer js_show">{/* .o-loading-layer.js_show { @DEV } */}
        <hr className="g-overlay" />

        <div role="alert" className="layer-wrap" aria-live="assertive">
          <i className="g-abshidden" aria-hidden="true" tabIndex={0}></i>

          <div className="m-loading">
            <i className="o-loading style-spinner" aria-hidden="true"></i>
            <p className="caption">내용을 불러오는 중입니다..</p>
          </div>

          <i className="g-abshidden" aria-hidden="true" tabIndex={0}></i>
        </div>

        <div className="g-hidden" aria-live="assertive">
          <p className="caption">내용 출력이 완료되었습니다.</p>
        </div>

      </div>
    </>
  );
}

export default LoadingBar;
