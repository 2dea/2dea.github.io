// @ts-nocheck
/**
 * @description 공통 체크박스 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Checkbox } from 'primereact/checkbox';

function CheckBox() {
  // 체크박스
  const [checked, setChecked] = useState<boolean>(false);

  return <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>;
}

export default CheckBox;
