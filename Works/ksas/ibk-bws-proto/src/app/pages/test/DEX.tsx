/**
 * @description 진영메모장
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import Favorite from 'app/shared/layouts/Favorite';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import InputCheck from 'app/shared/modules/OInputCheck';
import InputRadio from 'app/shared/modules/OInputRadio';
import XDropdown from 'app/shared/modules/XDropdown';
import XMultiSelect from 'app/shared/modules/XMultiSelect';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function DEX() {
  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '홈' }, { label: '중요용지·용도품' }, { label: '본부부서조달관리(총무부 외)' }, { label: '(706520)(총무부 외) 중요용지 조달신청 접수' }];

  // InputText
  const [value, setValue] = useState<string>('');

  // InputNumber
  const [InputNumberValue, setInputNumberValue] = useState(0);

  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
        <span className="p-autocomplete-cell">[0001] 홍길동</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">부장</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[0031] 을지6가</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">0031</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[1111] 을지6가</span>
      </>
    );
  };

  // Calendar
  addLocale('ko', {
    firstDayOfWeek: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });
  const [Date, setDate] = useState<Nullable<Date>>(null);
  const [Time, setTime] = useState(null);

  // RadioButton
  const [ingredient, setIngredient] = useState<string>('');

  // Checkbox
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
    {/*
      [ 하나 차장님 - 작업 공유 - 메모 ]
       2025-05-27 화
       1.특이사항: 레이블이 SelectBox [by.one]
       (폐기감사)감사/소각등록 ppt 170 :  HSPDU0501M


      2. 품목폐지폐기등록 키페이지로 변경  HSPDU0801P01 PPT#180 key [by.one]
            진영작업예정: (유사  키) 구양식폐기등록 품목폐지폐기등록
            진영작업예정: (유사  키) 팝업 - 본부용도품일괄폐기- 용도품폐기 - HSPDU0901P01- PPT# 187

    */}
      {
      /*
        [ 작업 메모 ]
        2025-05-28 수 작업 중
        (영업부)
        63
        ---///

        HSPHS2001M : 기획서 없음 : 본부재고관리 >  센터별영업점재고조회 ( 5/23화면 추가)

        본부중요용지일괄폐기 - 기획서 - 탭 화면..? 	HSPDU0801M ppt #179 -> 기획 확인필요

        [key] 품목폐지폐기등록 키페이지로 변경  HSPDU0801P01 PPT#180 key
          (유사 key) 구양식폐기등록 품목폐지폐기등록
          (유사  키) 팝업 - 본부용도품일괄폐기- 용도품폐기 - HSPDU0901P01- PPT# 187


        [나중에 업데이트 필요]
        (폐기감사)감사/소각등록 ppt 170 :  HSPDU0501M // 특이사항: 레이블이 SelectBox
        //   HSPBT0501M 참고해서 누락 페이지 작업 하기

        [기획 업데이트 예정 2025-05-27]
        HSPDU0801M ->
        2025-05-22 수 : 기획서 용도품계정관리	: HSPSA0101M 는 아직 컴펌 노노

      */

      }
      {
      /* 자주사용하는 텍스트 메모

        신세계백화점상품권10만원권

        [정렬]
          왼쪽
            : 지점:

          왼쪽:
            업체명 (주)앤비앤코퍼레이션

      */

      }
      {/*
          자주사용 하는 레이아웃

          [반반: HSPHS0201M]
              HSPHS0901M
              HSPHS1901P02

          싱글 왼쪽 반: HSPDU0701M

          [팝업레이아웃 ]
            h3 : 표: input
            h4
            HSPBT0301P01

            [ HSPHS1701P01 ]
            조회: 달력+ 툴팁
            하단: 출력버튼

            HSPHP0401P01
            조회
            표



      */}

      {
      /* 자주사용하는 팝업 너비

       className="layer-wrap wdth-40

        [자주사용하는 문구]

        신세계백화점상품권10만원권
        IT금융개발부

        [ 자주 사용하는 팝업]
        className="layer-wrap wdth-40


        HSPHS0601M:  련번호포함
        <div className="o-form _input wdth-30 g-end">
        o-form _input mode-required wdth-50

        o-form _input wdth-

        [작업 메모: 기획서 아직 컴펌 노노]
        용도품계정관리	: HSPSA0101M

        <div className="o-form _input mode-required wdth-50 g-end">


      */

      }
      {/*
        git status
      . git add .

        git commit -m "Ksa IBK-BWS-Proto (jin)"

        git push

      */}

      <div className="roles" data-div-role="0">
        <div className="div-header">
          HI
        </div>
        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`XDropdown`} require={true} />
                    <div className="fields">
                      <div className="o-form _select mode-required">
                        <XDropdown appendTo={'self'} className="bind" />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`기준일자`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`출급번호/품목명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`발주기준`} require={true} />
                    <div className="fields">
                      <div className="o-form _input type-date mode-required wdth-50">
                        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`체크박스단독`} require={false} />
                    <div className="fields">
                      <div className="m-checks">
                        <InputCheck label="선택" labelHidden defaultChecked />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="binds">
                  <CommonButton label="조회" className="_inquire" />
                </div>
              </form>

              <div className="o-section">
                <div className="m-header">
                  <h2 className="o-heading level2"><span className="label">노션별 배송내역</span></h2>

                  <div className="o-length">
                    <span className="head">전체</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </div>

                  <div className="m-binds">
                    <div className="group">
                      <CommonButton label="노션별배송부점" className="_normal" icon="excel-download-label" />
                    </div>

                    <div className="group">
                      <ImageButton label="엑셀​다운로드" icon="excel-download" />
                      <ImageButton label="목록필터" icon="column-toggle" />
                      <ImageButton label="목록출력" icon="print" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* <!-- // Contents { @DEV } --> */}
      </div>
    </>
  );
}

export default DEX;
