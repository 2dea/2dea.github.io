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
      스케줄
      2025-06/30 월 :
      "재난 안전관리"-
        - [제외] 당직비정산
        - [제외] 월세팅비정산
        자율보안체계
        도급사업관리

      [영업지원]
        - 서식장부관리

      2025-06/27 금 :
         "재난 안전관리" #18 이후에
         _theme.scss #STMDM0301M 배차관리 #32 재난안전
      2025-06/26 목 :
          1.행내등기 > 등기우편물~  #83 이후부터~ # BEXRM0201P09 부터~
      2025-06-25 수 :
        [Todo List]
          1. 채권양도통지(B2B팩토링) : [영업지원] #80 -> 완료 함
          2.행내등기 > 등기우편물~
            중간에 멈춤 : BEXRM0201P06 : #81

      2025-06-24 화 :
        [Todo List]
          1. 자금현수송 > 원화정사
          2.행내등기 > 등기우편물~

        [ 완료 ] [영업지원] #50 부터~ # BSSRM0101M 부터~ ->

      2025-06-23 월 :
            1. [영업지원] 시작~! , ' 서식장부관리 ' 외 모두 진행~
            3. 기획 스케줄 공유
              - 6/23 ' 외화정사 ' 기획 완료 예정
              - 기획 아직 노노: 출입증, 기계경비당직관리. set 시간ㄴ등록
            2. [용도품 ( 영업점 )]  완료

        23 key 자동배송 품목 등록 및 제외 확인 BSPRQ0301P01
          --- 6/20 : 레이아웃 확인: HSPDU0301P02 : 감시자를 확인해주세요 #161


      2025-06-20 금 :
        - ing:영업점 시작 했음:
            확인필요 후 , 월요일 06-23 완료 처리 예정:
              1. BSPDU0301P01  버튼 ' 온누리스캔내역 조회' 등..
              2. BSPDU0301P03: 유의사항 UI 체크확인 필요 및 버튼 ' 스캔등록 ' 의 버튼들

          메모: 열쇠등록관리( STMKY0201M ) 기획업데이트 적용 완료
        - done본부 #211 HSPDU0801P04 이후 부터~ 폐기취소(본부)

      2025-16-18 수 : 업데이트 내용: 모든 팝업에 modal={true} 기본: dim  처리 있음
        예외: '확인' 버튼만 있는 경우! -> modal={false}  -> 조회성 모달!
      ~ 6/17 행내등기

<td class="auth"><span class="name DEL">김진영</span></td>
<td class="done"><span class="date done">2025-06-27</span></td>

about:blank

 */}
      {/*

<td><InputCheck label="선택" labelHidden /></td>
<td>{idx + 1}</td>

<td>012345</td>
<td>Y</td>

<td className="g-start">[00070] 프로세스혁신부</td>
<td className="g-start">을지로</td>
<td>0025</td>
<td className="g-start">부산</td>

<td>012345</td>
<td>홍길동</td>


<td>~</td>
<td></td>

<td>금고실</td>
<td>열쇠</td>
<td>정상</td>
<td>현재</td>
<td>서무팀장</td>
<td>결재승인</td>
<td>결재요청</td>
<td>신규</td>
<td>현재</td>
<td>다가</td>
<td>221868620</td>
<td>신청인도</td>
<td>정상</td>

<td className="g-start">겉문열쇠</td>
<td className="g-start">금고실 #1</td>
<td className="g-start">프로세스혁신부</td>
<td className="g-start">업체명 (주)앤비앤코퍼레이션</td>

<td> </td>
<td><span className="o-digit type-time">00:00</span></td>

<td><span className="o-digit type-date">2025-12</span></td>

<td><span className="o-digit type-date">2025-12-25</span></td>

<td><span className="o-digit type-datetime">2025-12-25 09:10:59</span></td>
<td><span className="o-digit type-num">123-45-67890</span></td>
<td><span className="o-digit type-tel">02-729-7610</span></td>
<td><span className="o-digit type-time">00:00</span></td>

<span className="o-digit type-date">2025-12-25</span>

<td className="g-start"></td>

<td className="g-end"></td>
<td className="g-end">30</td>

<td><span className="o-digit type-tel">010-1234-5678</span></td>

더하기 추가
<Icon icon="grid-added" />

<td>나가</td>
                              <td>10000</td>
                              <td>~</td>
                              <td>10000</td>


                            달력 하나
                            <div className="o-field">
                              <Label label={`직원번호/명`} require={false} />
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>

                            일반 문구 + 버튼
                            <td colSpan={1}>
                              <div className="m-string-binds">
                                <span className="o-digit type-datetime string">2025-12-25 09:10:59</span>
                                <span className="binds"><CommonButton label="현재시각" className="_normal" /></span>
                              </div>
                            </td>


                            <td colSpan={1}>
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


                        <tr>
                          <th colSpan={1}>
                            <Label label={`비고`} require={false} />
                          </th>
                          <td colSpan={3}>
                            <div className="o-field">
                              <div className="fields">
                                <div className="o-form _input">
                                  <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                  <i aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

화살표  &rarr;
&lt;  &gt;

<tr>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점코드</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">부점명</span></div></th>

                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원번호</span></div></th>
                              <th className="p-align-center"><div className="p-column-header-content"><span className="p-column-title">직원명</span></div></th>
                            </tr>


                  <div className="o-field">
                    <Label label={`비고`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                   <tr>
                      <th colSpan={1}>
                        <Label label={`비고`} require={false} />
                      </th>
                      <td colSpan={3}>
                        <div className="o-field">
                          <div className="fields">
                            <div className="o-form _input">
                              <InputText placeholder="내용을 입력해주세요" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                     문구 + 보통 버튼

                    <td colSpan={5}>
                        <div className="m-string-binds">
                          <span className="string">로봇배송</span>
                          <span className="binds"><CommonButton label="거래이력" className="_normal" /></span>
                        </div>
                      </td>

                      <td colSpan={5}>
                        <div className="m-string-binds">
                          <span className="string">로봇배송</span>
                          <span className="binds"><CommonButton label="거래이력" className="_normal" /></span>
                        </div>
                      </td>

*/}
      {/*
      업무지원시스템 재구축 프로젝트에 사용할 템플릿 파일입니다.
      * 마크업 및 스타일시트 등 포함
     */}

      {/* https://figma.com/ @ ego2dea@gmail.com : 2dea.com */}


      {/*

      2025-05/27 화
      1.특이사항: 레이블이 SelectBox [by.one]

        [table main ] 레드 문구 HSPHS0901M
       textarea 2줄: '서류내용', '비고' : BSPDU0601P02
        input 1줄: 취소 사유 : HSPBT0301P01
         툴팁: BSPDU0101M 일련번호: th 물은표
      {/*
          자주사용 하는 레이아웃

          [반반: HSPHS0201M] :
              HSPHS0901M
              BSSDM0101M: 조회 / 밑에는 반반
              ADMPA0301M: 위에는 조회 full  / 밑에는 반반 3개 테이블

          싱글 왼쪽 반: HSPDU0701M , HSPHS2001M

          팝업: row 3 : BEXRQ0201P03


          [팝업레이아웃 ]
            h3 : 표: input
            h4
            HSPBT0301P01

          [HSPHP0401P01]
            조회
            표

            [ HSPHS1701P01 , ]
            조회: 달력+ 툴팁 하단: 출력버튼

            [유의사항 레이아웃] -BSPDU0301M 블릿 참고
            [레이아웃 팝업] BSPDU0401P02 : 하단에 유의사항

            [요청사항 : BSSLQ0201M ]
            유의사항 단독  InputTextarea

            [ 일괄적용] 버튼 : BEXRQ0101M
            <CommonButton label="일괄적용" icon="du-down" className="_normal" />
            STMBR0101P01 팝업

            [ 테이블 ]
            // 소계 합계 : FMTFC0301M
            // th 타이틀: FMTFC0301M
            // m-data-form : 테이블 FMTFC0101P01 th,

            엄청 긴 테이블 : BSPDU0201M : 일련번호
            FMTFC0101P01
            일괄적용 및 유의사항 2개: BEXRQ0101M <col className="head aut" style={{ '--em': 2 } as React.CSSProperties} />

            BEXRQ0101M:

            메뉴 선택  BSSCR0101P03 BEXRQ0101P03
            좌:우 : 추가 취소 [BEXRQ0101P03]

            2025-06-19 버튼 group 메모: 'group' 'group: 행추가, 삭제~~ ' : BEXRQ0101M

            STMVL0101P01 버튼 여러개


                        <tr>
                          <th colSpan={1}>
                            <Label label={`부점`} require={true} />
                          </th>
                          <td colSpan={1}>

                            <div className="m-binds">
                              <div className="group _start">
                                <CommonButton label="전체삭제" className="_normal" disabled />
                                <CommonButton label="추가" className="_normal" />
                              </div>
                            </div>

                            <div className="m-flex-list">

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="파일보기" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="파일보기" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="파일보기" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="파일보기" icon="delete" /></div>
                                </div>
                              </div>

                              <div className="o-field">
                                <div className="fields">
                                  <div className="o-form _input mode-required wdth-50">
                                    <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                                    <i aria-hidden="true"></i>
                                  </div>
                                  <div className="binds"><ImageButton label="파일보기" icon="delete" /></div>
                                </div>
                              </div>

                            </div>

                          </td>
                        </tr>


            테이블 col 너비 주기 : HSPSA0201M
            <col className="head" style={{ width: 'calc(var(--rem) * 180)' }} />

      /* 자주사용하는 팝업 너비

        [ 자주 사용하는 팝업]
        className="layer-wrap wdth-40

      */
        {/* 정규식: <li className="c-color-strong">(.*)</li> */ }

      }
      {/*
        git status
      . git add .

        git commit -m "Ksa IBK-BWS-Proto (jin)"

        git push

      */}

      <div className="roles" data-div-role="0">
        {/* <!-- /* Contents { @DEV } --> */}
        <div className="div-contents">
          <div className="o-grid">
            <div className="column">

              <form className="m-filter-form">
                <div className="fieldset">

                  <div className="o-field">
                    <Label label={`직원번호/명`} require={false} />
                    <div className="fields">
                      <div className="o-form _input">
                        <InputText placeholder="" value={value} className="bind" onChange={(e) => setValue(e.target.value)} />
                        <i aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>

                  <div className="o-field">
                    <Label label={`권한명`} require={false} />
                    <div className="fields">
                      <div className="o-form _select">
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
                      <li className="c-color-strong"><em>바코드정보 입력 창에서 바코드 입력 시 접수내역 등록되며 연속 거래 가능</em></li>
                      <li className="c-color-strong">
                        사용방법
                        <ol className="m-bullets type-decimal level1 c-color-strong">
                          <li>등록구분 선택</li>
                          <li>바코드정보 입력창 선택</li>
                          <li>[바코드스캔]으로 바코드 읽고 엔터</li>
                          <li>등록 완료되면 닫기 후 접수내역 확인</li>
                        </ol>
                      </li>
                    </ul>
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
                      <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                      <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                      <li>
                        블라블라블라

                        <ul className="m-bullets type-hyphen">
                          <li>블라블라블라</li>
                          <li>
                            블라블라블라

                            <ul className="m-bullets type-asterisk">
                              <li>블라블라블라</li>
                              <li>블라블라블라</li>
                            </ul>
                          </li>
                          <li>블라블라블라</li>
                        </ul>
                      </li>
                      <li>블라블라블라</li>
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
