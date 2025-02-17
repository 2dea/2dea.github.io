// @ts-nocheck
/**
 * @description 퍼블리싱 가이드_폼 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import Navigation from '@pages/guide/Navigation';
import SubNavigation from '@components/SubNavigation';
import SelectBox from '@components/SelectBox';
import SelectBoxMultiChips from '@components/SelectBoxMultiChips';
import SelectBoxMultiSearch from '@components/SelectBoxMultiSearch';
import DatePicker from '@components/DatePicker';
import CheckBox from '@components/CheckBox';
import CheckBoxLabel from '@components/CheckBoxLabel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

interface SelectTypes {
  name: string;
  code: string;
}
interface SelectMultiChipsTypes {
  name: string;
  code: string;
}

function Forms() {
  // 텍스트박스
  const [value, setValue] = useState<string>('');

  // 셀렉트박스
  const [selectedBoxItems, setSelectedBoxItems] = useState<SelectTypes | null>(null);
  const items1: SelectTypes[] = [
    { name: '아이템 01', code: '1' },
    { name: '아이템 02', code: '2' },
    { name: '아이템 03', code: '3' },
    { name: '아이템 04', code: '4' },
    { name: '아이템 05', code: '5' },
    { name: '아이템 06', code: '6' },
    { name: '아이템 07', code: '7' },
    { name: '아이템 08', code: '8' },
    { name: '아이템 09', code: '9' },
    { name: '아이템 10', code: '10' },
  ];

  // 멀티셀렉트박스 칩스
  const [selectedMultiItems, setSelectedMultiItems] = useState<SelectMultiChipsTypes | null>(null);
  const items2: SelectMultiChipsTypes[] = [
    { name: '데이터1', code: '1' },
    { name: '데이터2', code: '2' },
    { name: '데이터3', code: '3' },
    { name: '데이터4', code: '4' },
    { name: '데이터5', code: '5' },
    { name: '데이터6', code: '6' },
    { name: '데이터7', code: '7' },
    { name: '데이터8', code: '8' },
    { name: '데이터9', code: '9' },
    { name: '데이터10', code: '10' },
  ];

  // 멀티셀렉트박스 검색폼
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

  // 데이트픽커
  const [Date, setDate] = useState<Nullable<Date>>(null);

  addLocale('ko', {
    firstDayOfWeek: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });

  // 체크박스
  const [checked, setChecked] = useState<boolean>(false);

  // 라디오
  const [ingredient, setIngredient] = useState<string>('');

  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>Forms</h2>

          <div className="wrap">
            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  InputText
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * width 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">Default</span>
                        </dt>
                        <dd>
                          <span className="flex">
                            <div className="p-inputgroup clear w-184">
                              <InputText placeholder="플레이스홀더" />
                              <Button className="btn-ico clear" />
                            </div>
                            <div className="p-inputgroup clear w-184 ml-12">
                              <InputText value="활성화" />
                              <Button className="btn-ico clear" />
                            </div>
                            <div className="p-inputgroup clear w-184 ml-12">
                              <InputText value="비활성화" disabled />
                              <Button className="btn-ico clear" />
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">Search</span>
                        </dt>
                        <dd>
                          <span className="flex">
                            <div className="p-inputgroup search w-184">
                              <InputText placeholder="플레이스홀더" />
                              <Button className="btn-ico clear" />
                              <Button className="btn-ico search" />
                            </div>
                            <div className="p-inputgroup search w-184 ml-12">
                              <InputText value="활성화" />
                              <Button className="btn-ico clear" />
                              <Button className="btn-ico search" />
                            </div>
                            <div className="p-inputgroup search w-184 ml-12">
                              <InputText value="비활성화" disabled />
                              <Button className="btn-ico clear" />
                              <Button className="btn-ico search" />
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  TextArea
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * height 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">Default</span>
                        </dt>
                        <dd style={{ height: 'auto' }} className="ptb-12">
                          <span className="flex w-full">
                            <div className="p-inputgroup">
                              <InputTextarea
                                placeholder="활성화"
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                                className=" h-108"
                                rows={28}
                                cols={30}
                              />
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">Disabled</span>
                        </dt>
                        <dd style={{ height: 'auto' }} className="ptb-12">
                          <span className="flex w-full">
                            <div className="p-inputgroup">
                              <InputTextarea
                                placeholder="비활성화"
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                                className=" h-108"
                                rows={28}
                                cols={30}
                                disabled
                              />
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  SelectBox
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * width 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">SelectBox</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-184">
                              <SelectBox />
                            </div>
                            <div className="p-inputgroup w-184 ml-12">
                              <Dropdown
                                value={selectedBoxItems || ''}
                                onChange={(e: DropdownChangeEvent) => setSelectedBoxItems(e.value)}
                                options={items1}
                                optionLabel="name"
                                className="w-full"
                                placeholder="비활성화"
                                disabled
                              />
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">SelectBoxMultiChips</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-184">
                              <SelectBoxMultiChips />
                            </div>
                            <div className="p-inputgroup w-184 ml-12">
                              <MultiSelect
                                value={selectedMultiItems || ''}
                                onChange={(e: MultiSelectChangeEvent) => setSelectedMultiItems(e.value)}
                                options={items2}
                                optionLabel="name"
                                placeholder="전체"
                                display="chip"
                                disabled
                              />
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            SelectBoxMultiSearch
                            <em className="ml-6 notice" style={{ fontSize: '10px' }}>
                              * Not PrimeReact Component
                            </em>
                          </span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-184">
                              <SelectBoxMultiSearch />
                            </div>
                            <div className="p-inputgroup w-184 ml-12">
                              <div className="u-multiselect-search disabled">
                                <div
                                  className={`selected-input${isSwitched ? ' selected-input-open' : ''}`}
                                  onClick={handlerChangeLayout}
                                >
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
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  DatePicker
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * width 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">DatePicker</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-184">
                              <DatePicker />
                            </div>
                            <div className="p-inputgroup w-184 ml-12">
                              <Calendar
                                value={Date}
                                onChange={(e) => setDate(e.value)}
                                dateFormat="yy-mm-dd"
                                locale="ko"
                                showIcon
                                disabled
                              />
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  Radio
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * width 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">Radio</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="u-formgroup w-auto mf-0">
                              <div className="u-radio expand w-124">
                                <RadioButton
                                  inputId="ingredient1"
                                  name="radioItems"
                                  value="데이터"
                                  onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                  checked={ingredient === '데이터'}
                                />
                                <label htmlFor="ingredient1">데이터</label>
                              </div>
                              <div className="u-radio expand w-124">
                                <RadioButton
                                  inputId="ingredient2"
                                  name="radioItems"
                                  value="데이터"
                                  onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                  checked={true}
                                />
                                <label htmlFor="ingredient2">데이터</label>
                              </div>
                              <div className="u-radio expand w-124">
                                <RadioButton
                                  inputId="ingredient3"
                                  name="radioItems"
                                  value="데이터"
                                  onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                  checked={ingredient === '데이터'}
                                  disabled
                                />
                                <label htmlFor="ingredient2">데이터</label>
                              </div>
                              <div className="u-radio expand w-124">
                                <RadioButton
                                  inputId="ingredient4"
                                  name="radioItems"
                                  value="데이터"
                                  onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                                  checked={true}
                                  disabled
                                />
                                <label htmlFor="ingredien4">데이터</label>
                              </div>
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  CheckBox
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * width 고정 사이즈 class를 입력하여 사용
                  </em>
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">CheckBox</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-32">
                              <CheckBox />
                            </div>
                            <div className="p-inputgroup w-32">
                              <Checkbox onChange={(e) => setChecked(e.checked)} checked={true}></Checkbox>
                            </div>
                            <div className="p-inputgroup w-32">
                              <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked} disabled></Checkbox>
                            </div>
                            <div className="p-inputgroup w-32">
                              <Checkbox onChange={(e) => setChecked(e.checked)} checked={true} disabled></Checkbox>
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">CheckBoxLabel</span>
                        </dt>
                        <dd>
                          <span className="flex w-full">
                            <div className="p-inputgroup w-124">
                              <CheckBoxLabel />
                            </div>
                            <div className="p-inputgroup w-124">
                              <div className="u-checkbox-with-label">
                                <Checkbox
                                  inputId="ingredient2"
                                  name="pizza"
                                  value="데이터"
                                  onChange={onIngredientsChange}
                                  checked={true}
                                />
                                <label htmlFor="ingredient2" className="ml-2">
                                  데이터
                                </label>
                              </div>
                            </div>
                            <div className="p-inputgroup w-124">
                              <div className="u-checkbox-with-label">
                                <Checkbox
                                  inputId="ingredient3"
                                  name="pizza"
                                  value="데이터"
                                  onChange={onIngredientsChange}
                                  checked={ingredients.includes('데이터')}
                                  disabled
                                />
                                <label htmlFor="ingredient3" className="ml-2">
                                  데이터
                                </label>
                              </div>
                            </div>
                            <div className="p-inputgroup w-124">
                              <div className="u-checkbox-with-label">
                                <Checkbox
                                  inputId="ingredient4"
                                  name="pizza"
                                  value="데이터"
                                  onChange={onIngredientsChange}
                                  checked={true}
                                  disabled
                                />
                                <label htmlFor="ingredient4" className="ml-2">
                                  데이터
                                </label>
                              </div>
                            </div>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
