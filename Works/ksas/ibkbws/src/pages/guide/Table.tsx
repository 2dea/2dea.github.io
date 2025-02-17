// @ts-nocheck
/**
 * @description 퍼블리싱 가이드_테이블 컴포넌트
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
import PageCheckList from '@components/PageCheckList';
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
          <h2>table</h2>

          <div className="wrap">
            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  Defalut
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * colgroup width 입력하여 사용
                  </em>
                </h3>
                <div className="u-table">
                  <div className="inner">
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="125px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr className="bg-red">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr className="bg-light-red">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr className="bg-yellow">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  OverflowX
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * colgroup width px고정 사용
                  </em>
                </h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="300px" />
                        <col width="300px" />
                        <col width="300px" />
                        <col width="300px" />
                        <col width="300px" />
                        <col width="300px" />
                        <col width="300px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-right">
                            <span>문의</span>
                          </td>
                          <td className="text-right">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr className="bg-blue">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-right">
                            <span>문의</span>
                          </td>
                          <td className="text-right">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-right">
                            <span>문의</span>
                          </td>
                          <td className="text-right">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-right">
                            <span>문의</span>
                          </td>
                          <td className="text-right">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  OverflowY
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * height xh-&#123;높이값&#125; 클래스 입력하여 사용
                  </em>
                </h3>
                <div className="u-table">
                  <div className="inner xh-121">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td>
                            <span>문의</span>
                          </td>
                          <td>
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td>
                            <span>문의</span>
                          </td>
                          <td>
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  Accordion
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * accordion & accordion-open 클래스로 제어
                  </em>
                </h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-blue">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td>
                            <span>문의</span>
                          </td>
                          <td>
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span className="accordion accordion-open">
                              미배정
                              <Button icon="pi" className="btn-ico accordion" />
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-skyblue">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td>
                            <span>문의</span>
                          </td>
                          <td>
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>미배정</span>
                          </td>
                        </tr>
                        <tr className="bg-skyblue">
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td>
                            <span>문의</span>
                          </td>
                          <td>
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>미배정</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">RowSpan</h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th rowSpan={2}>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                        <tr>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">ColSpan</h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th colSpan={5}>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">RowSpan + ColSpan</h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th rowSpan={2}>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th colSpan={2}>샘플</th>
                          <th colSpan={2}>샘플</th>
                        </tr>
                        <tr>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </td>
                          <td>
                            <span>고객여신 신규취급</span>
                          </td>
                          <td>
                            <span className="warn">고</span>
                          </td>
                          <td>
                            <span>미점검</span>
                          </td>
                          <td className="text-left">
                            <span>문의</span>
                          </td>
                          <td className="text-left">
                            <span>화성병점(0468)</span>
                          </td>
                          <td>
                            <span>홍길동(012345)</span>
                          </td>
                          <td>
                            <span>이길동(021345)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">NoData</h3>
                <div className="u-table">
                  <div className="inner">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th rowSpan={2}>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th rowSpan={2}>샘플</th>
                          <th colSpan={2}>샘플</th>
                          <th colSpan={2}>샘플</th>
                        </tr>
                        <tr>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                          <th>샘플</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={8}>
                            <p className="u-table-nodata">
                              <i className="ico alert"></i>
                              <span>조회된 데이터가 없습니다.</span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  세로형
                  <em className="ml-12" style={{ fontSize: '10px' }}>
                    * column 클래스로 cell 제어
                  </em>
                </h3>
                <div className="u-window border">
                  <div className="grid">
                    <div className="col-12">
                      <div className="win-panel">
                        <div className="u-dataview w-125 expand">
                          <div className="inner">
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>
                                    필수<i className="require">*</i>
                                  </span>
                                </dt>
                                <dd>
                                  <div className="with-btns">
                                    <div className="p-inputgroup clear">
                                      <InputText />
                                      <Button className="btn-ico clear" icon="pi" />
                                    </div>
                                    <Button label="지도문 선택" className="btn-text secondary default" />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>지도조치이행</span>
                                </dt>
                                <dd className="flex align-center">
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                  <div className="p-inputgroup w-142 ml-6">
                                    <DatePicker />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>취급부점</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="동탄(0606)" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>지도등록일</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <DatePicker />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="u-dataview w-125 expand mt-24">
                          <div className="inner">
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>경평반영부점</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="동탄(0606)" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>지도등록일</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <DatePicker />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>감사자</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="홍길동" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>목록생성일</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <DatePicker />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="u-dataview w-125 expand mt-r-1">
                          <div className="inner">
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>경영평가점수</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <SelectBox />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="win-panel">
                        <div className="u-dataview w-125 expand mt-24">
                          <div className="inner">
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>취급부점</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="동탄(0606)" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>경평반영부점</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="동탄(0606)" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>기업성장여부</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <SelectBox />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>감사자</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="홍길동" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                            <div className="column">
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>기업성장여부</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup w-142">
                                    <SelectBox />
                                  </div>
                                </dd>
                              </dl>
                              <dl className="u-dataview-list">
                                <dt>
                                  <span>감사자</span>
                                </dt>
                                <dd>
                                  <div className="p-inputgroup search w-142">
                                    <InputText value="홍길동" />
                                    <Button className="btn-ico clear" />
                                    <Button className="btn-ico search" />
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
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
