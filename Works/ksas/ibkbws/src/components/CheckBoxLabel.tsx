// @ts-nocheck
/**
 * @description 공통 체크박스(lavel) 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

function CheckBoxLabel() {
  // 체크박스 + 라벨
  const [ingredients, setIngredients] = useState<string[]>([]);

  const onIngredientsChange = (e: CheckboxChangeEvent) => {
    let _ingredients = [...ingredients];
    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);
    setIngredients(_ingredients);
  };

  return (
    <div className="u-checkbox-with-label">
      <Checkbox
        inputId="ingredient1"
        name="pizza"
        value="데이터"
        onChange={onIngredientsChange}
        checked={ingredients.includes('데이터')}
      />
      <label htmlFor="ingredient1" className="ml-2">
        데이터
      </label>
    </div>
  );
}

export default CheckBoxLabel;
