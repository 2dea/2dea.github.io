/**
 * @description 마이메뉴등록 영역
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import InputCheck from 'app/shared/modules/OInputCheck';

function Favorite() {
  return (
    <>
      {/* <label className="o-check type-symbol style-favorite">
        <input type="checkbox" title="마이메뉴 등록" value="" className="bind" /><i aria-hidden="true"></i>
        <span className="label _hidden">마이메뉴 등록</span>
      </label> */}

      <InputCheck label="마이메뉴 등록" labelHidden variant="icon" className="style-favorite" icon="favorite" />
    </>
  );
}

export default Favorite;
