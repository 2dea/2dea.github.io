/**
 * @description 공통 멀티셀렉트(search) 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function SelectBoxMultiSearch() {
  // 셀렉트박스 버튼
  const [isSwitched, setIsSwitced] = useState(false);
  const handlerChangeLayout = () => {
    setIsSwitced(!isSwitched);
  };

  // 체크박스 + 라벨
  const [ingredients, setIngredients] = useState<string[]>([]);
  const onIngredientsChange = (e: CheckboxChangeEvent) => {
    let _ingredients = [...ingredients];
    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);
    setIngredients(_ingredients);
  };

  return (
    <div className="u-multiselect-search">
      <div className={`selected-input${isSwitched ? ' selected-input-open' : ''}`} onClick={handlerChangeLayout}>
        <div className="selected-value">
          <span className="item">데이터1, 데이터2, 데이터3, 데이터5, 데이터6</span>
        </div>
      </div>

      <div className="selected-items">
        <div className="p-inputgroup search">
          <InputText placeholder="플레이스홀더" />
          <Button className="btn-ico clear" />
          <Button className="btn-ico search" />
        </div>
        {[...Array(10)].map((e, idx) => (
          <div className="flex mt-12">
            <div className="u-checkbox-with-label">
              <Checkbox
                inputId="checkboxId"
                name="checkboxName"
                value="데이터"
                onChange={onIngredientsChange}
                checked={ingredients.includes('데이터')}
              />
              <label htmlFor="checkboxId" className="ml-6">
                데이터 {idx + 1}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectBoxMultiSearch;
