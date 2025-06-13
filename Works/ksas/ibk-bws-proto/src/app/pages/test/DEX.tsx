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
    2025-06-13 금
    소화기

        [수정 했음]
        STMDM0301M : Name="m-filter-form">

    행내등기 후~


    2025-06-12 목
      재난안전관리  업무용차량관리 부터 시작~

    STMKY0501P02  #260 완료
    BSSCR0101P03 키페이지

    행내등기?

    2025-06-11 수 : 영업지원-  BSSCR0401T PPT 113 부터~
    2025-06-10 화
    BSSCR0101P02  기준연도 너비 확인 필요

      2025-06-09 월
      배차관리 ~  가스분사기대장관리

    #66   #96ksff

      */}
{/*

<td><InputCheck label="선택" labelHidden /></td>
<td>{idx + 1}</td>

<td>012345</td>
<td>Y</td>

<td>금고실</td>
<td>열쇠</td>
<td>정상</td>
<td>현재</td>
<td>서무팀장</td>
<td>결제승인</td>

<td>012345</td>
<td>홍길동</td>
<td>신규</td>

<td>~</td>
<td></td>
<td>현재</td>

<td className="g-start">겉문열쇠</td>
<td className="g-start">금고실 #1</td>
<td className="g-start">프로세스혁신부</td>
<td className="g-start">[00070] 프로세스혁신부</td>
<td className="g-start">을지로</td>
영업무
<td><span className="o-digit type-date">2025-12-25</span></td>

<td className="g-start"></td>

<td className="g-end"></td>
<td className="g-end">1</td>

<td><span className="o-digit type-tel">010-1234-5678</span></td>

<td>분말소화기</td>

<td>
  <div className="o-field">
    <div className="fields">
      <div className="o-form _input type-date wdth-50">
        <Calendar placeholder="" value={Date} locale="ko" dateFormat="yy-mm-dd" mask="9999-99-99" appendTo={document.body} className="bind" onChange={(e) => setDate(e.value)} showIcon icon={<Icon icon="calendar" />} />
        <i aria-hidden="true"></i>
      </div>
    </div>
  </div>
</td>


                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _select wdth-30">
                                    <XDropdown appendTo={document.body} className="bind" />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </td>



<td>
  <ImageButton label="이미지​보기" icon="image" onClick={(e) => viewimageOverlay0.current.toggle(e)} />
  <OverlayPanel className="o-overlaypanel case-viewimage wdth-25p" ref={viewimageOverlay0} closeIcon={<Icon icon="popup-close" />} showCloseIcon closeOnEscape dismissable={false}>
    <div className="layer-head">
      <h3 className="o-heading"><span className="label">이미지보기</span></h3>
    </div>
    <div className="layer-body">
      <div className="o-view-image">
        <img src={require("assets/images/common/img_empty-image.png")} alt="" />
      </div>
    </div>
  </OverlayPanel>
</td>


<col className="wdth-10" />
<col className="wdth-0" />
<col className="wdth-auto" />

<td>AJ렌트카</td>


                                  <tr>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                                    <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                                  </tr>



*/}
    {/*
      업무지원시스템 재구축 프로젝트에 사용할 템플릿 파일입니다.
      * 마크업 및 스타일시트 등 포함
     */}

     {/* https://figma.com/ @ ego2dea@gmail.com : 2dea.com */}

    {/* Order list
      1(1)

      * dddd
        - ddddd

    */}

    {/*

      2025-06-04 수 #265 - STMKY0601M

      -- -// before

        #243: 열쇠폐기 취소(관리자..) ???
        #245: 열쇠관리 > 열쇠등록관리 _ 공지사항.. ?

        #246 ~ : STMKY0301M : 문의: 안전관리실~

        기획서 확인 필요[ #250 ] 열쇠인수도관리 사용열쇠 (보관담당자) 예외승인 안내
        STMKY0201M

        #253: 위탁열쇠위탁요청 -> 제목 - 기획서 - 인덱스 확인 필요


        [ 디자인 ]
        자위소방대편성표 #293


        JY
        - ing
        # 93

        [레이아웃 팝업 확인] #84 : BSPDU0401P02 : 사고보고 버튼 하단에 유의사항 BSPDU0401P02

        #BSPDU0401P01 사고보고확인요청 : 기획 미 확정

        [유의사항 레이아웃 - 확인필요] -BSPDU0301M #93 블릿 참고


        온누리상품권일련번호확인 -> 보류?? HSPDU0201P02 본부..-> 유의사항 레이아웃 확인필요


      2025-05-30 금
        툴팁: BSPDU0101M

        BSPDU0601P02 - 작업 예정 - 오손중요용지행내등기신청 #76

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

        조회- 타이틀 옆 문구 : HSPHS0601M렝

        본부중요용지일괄폐기 - 기획서 - 탭 화면..? 	HSPDU0801M ppt #179 -> 기획 확인필요


          2025-06-02 월 팝업
            textarea 2줄: '서류내용', '비고' : BSPDU0601P02
            input 1줄: 취소 사유 : HSPBT0301P01

        [기획 업데이트 예정 2025-05-27]
        HSPDU0801M ->
        2025-05-22 수 : 기획서 용도품계정관리	: HSPSA0101M 는 아직 컴펌 노노

        화살표
          &rarr;


      */

      }
      {
      /* 자주사용하는 텍스트 메모

        신세계백화점상품권10만원권

        [정렬]
          왼쪽
            : 지점:

          왼쪽:
                                        <td>업체명 (주)앤비앤코퍼레이션</td>

            td


      */

      }
      {/*
          자주사용 하는 레이아웃

          [반반: HSPHS0201M]
              HSPHS0901M
              HSPHS1901P02

          싱글 왼쪽 반: HSPDU0701M , HSPHS2001M


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

            엄청 긴 테이블 : BSPDU0201M

            이미지 : STMKY0201M

            td 텍스트 링크
            <td className="g-start"><a href="javascript:" className="o-link _normal">링크</a></td>


      */}

      {/* 정규식: <li className="c-color-strong">(.*)</li>
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

      {/*

      2025-06-11 수
 ### 완료
HSPHS0501M 중요용지본부입고
HSPHS1601M 용도품본부입고
 HSPHP0401M (총무부외)중요용지본부입고

# 외

HSPBT0301M
HSPBT0201M
HSPBT0501M
HSPBT0701M
HSPBT0801M

HSPBT1401M 송장출력
HSPBT1001M
HSPBT1101M
HSPBT1101P01
HSPBT0901M
HSPBT1501M
HSPBT1601M
HSPBT1701M
HSPHS0201M
HSPHS0201P01

HSPHS0301M
HSPHS0401M
HSPHS0601M
HSPHS2001M
HSPDU0701M
HSPHS0701M
HSPHS1001M
HSPHS1201M

HSPHS0201M
HSPHS1301M

2025-06-12 에는 본부
ppt114 부터~


&lt;  &gt;

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

                  <div className="o-field colspan-2">
                    <Label label={`부점`} require={true} />
                    <div className="fields">
                      <div className="o-form _input mode-required wdth-auto">
                        <AutoComplete className="bind" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} disabled />
                        <i aria-hidden="true"></i>
                        <span className="inner-binds">
                          <ImageButton label="초기화" icon="remove" />
                        </span>
                      </div>

                      <div className="o-form _select mode-required wdth-30">
                        <XDropdown appendTo={'self'} className="bind" disabled />
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

              <div className="o-section">
                <div className="o-board type-a">
                  <div className="board-container">
                    <div className="m-header">
                      <strong className="o-heading"><span className="label">유의사항</span></strong>
                    </div>

                    <ul className="m-bullets type-disc">
                      <li>cccc</li>
                      <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                    </ul>
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
