/**
 * @description TEST > 로딩
 */

// dependency
import React, { useState } from 'react';

// components
import { Dialog } from 'primereact/dialog';

function LOADING() {
  // Dialog
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <Dialog className="o-loading-layer" baseZIndex={2000} visible={visible} onHide={() => {if (!visible) return; setVisible(false); }} content={({ hide }) => (
        <>
          <div className="m-loading">
            <i className="o-loading style-spinner" aria-hidden="true"></i>
            <p className="caption">
              <strong className="label">Loading...</strong>
            </p>
          </div>
        </>
      )}></Dialog>
    </>
  );
}

export default LOADING;
