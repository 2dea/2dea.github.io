// @ts-nocheck
/**
 * @description 공통 페이지 체크리스트 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

function PageCheckList() {
  // 테이블 항목명 선택 버튼
  const [isSwitched, setIsSwitced] = useState(false);
  const handlerMoreCategory = () => {
    setIsSwitced(!isSwitched);
  };

  // 체크박스
  const [checked, setChecked] = useState<boolean>(false);

  // 체크박스 + 라벨
  const [ingredients, setIngredients] = useState<string[]>([]);
  const onIngredientsChange = (e: CheckboxChangeEvent) => {
    let _ingredients = [...ingredients];
    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);
    setIngredients(_ingredients);
  };

  return (
    <div className={`u-vertical${isSwitched ? ' active' : ''}`}>
      <Button className="btn-ico more" icon="pi" onClick={handlerMoreCategory} />
      <ul className="u-vertical-list">
        <li>
          <div className="u-checkbox with-label">
            <Checkbox
              inputId="ingredient1"
              name="checkItem"
              value="item"
              onChange={onIngredientsChange}
              checked={ingredients.includes('item')}
            />
            <label htmlFor="ingredient1">항목명 01</label>
          </div>
        </li>
        <li>
          <div className="u-checkbox with-label">
            <Checkbox
              inputId="ingredient2"
              name="checkItem"
              value="item"
              onChange={onIngredientsChange}
              checked={ingredients.includes('item')}
            />
            <label htmlFor="ingredient2">항목명 02</label>
          </div>
        </li>
        <li>
          <div className="u-checkbox with-label">
            <Checkbox
              inputId="ingredient3"
              name="checkItem"
              value="item"
              onChange={onIngredientsChange}
              checked={ingredients.includes('item')}
            />
            <label htmlFor="ingredient3">항목명 03</label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PageCheckList;
