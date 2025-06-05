/**
 * @description ProtoRoutes
 */

// dependency
import React from 'react';
import { useRoutes } from 'react-router';

// components
import Decorator from     'app/shared/layouts/Decorator';

// test
import SUBTMPL from       'app/pages/test/SUBTMPL';     // SUBTMPL
import POPTMPL from       'app/pages/test/POPTMPL';     // POPTMPL
import TMPL from          'app/pages/test/TMPL';        // TMPL
import DEX from           'app/pages/test/DEX';         // DEX
import ING from           'app/pages/test/ING';         // ING

import DialogPopup from   'app/pages/test/DialogPopup'; // DialogPopup
import LoadingBar from    'app/pages/test/LoadingBar';  // LoadingBar
import FileUploads from   'app/pages/test/FileUploads'; // FileUploads

// proto 공통
import CMP000201P from    'app/pages/cmp/CMP000201P';   // 공통 ~ (LP)엑셀업로드
import CMP000301P from    'app/pages/cmp/CMP000301P';   // 공통 ~ (LP)파일업로드
import CMP000302P from    'app/pages/cmp/CMP000302P';   // 공통 ~ (LP)첨부파일
import CMP000401P from    'app/pages/cmp/CMP000401P';   // 공통 ~ (LP)이미지업로드
import CMP000501P from    'app/pages/cmp/CMP000501P';   // 공통 ~ (LP)직원조회
import CMP001101P from    'app/pages/cmp/CMP001101P';   // 공통 ~ (LP)이미지보기
import CMP001201P from    'app/pages/cmp/CMP001201P';   // 공통 ~ (LP)알림발송
import CMP001401P from    'app/pages/cmp/CMP001401P';   // 공통 ~ (LP)업체조회
import CMP001402P from    'app/pages/cmp/CMP001402P';   // 공통 ~ (LP)업체기본정보
import CMP001502P from    'app/pages/cmp/CMP001502P';   // 공통 ~ (LP)결재상세정보

// proto 중요용지·용도품(본부)
import BSPRQ0201M from    'app/pages/hsp/BSPRQ0201M';    // 중요용지·용도품(영업점) > 신청  > 중요용지신청내역
import BSPRQ0301M from    'app/pages/hsp/BSPRQ0301M';    // 중요용지·용도품(영업점) > 신청  > 중요용지자동배송설정
import BSPRQ0301P02 from   'app/pages/hsp/BSPRQ0301P02'; // 중요용지·용도품(영업점) > 신청  > 중요용지자동배송설정 > (LP)자동배송 신청 이력 조회

import BSPRQ0501M from    'app/pages/hsp/BSPRQ0501M';    // 중요용지·용도품(영업점) > 신청  > 용도품신청내역

import BSPFD0101M from    'app/pages/hsp/BSPFD0101M';    // 중요용지·용도품(영업점) > 조회  > 중요용지재고조회
import BSPFD0301M from    'app/pages/hsp/BSPFD0301M';    // 중요용지·용도품(영업점) > 조회  > 창구사용내역조회
import BSPFD0401M from    'app/pages/hsp/BSPFD0401M';    // 중요용지·용도품(영업점) > 조회  > 서무계수급내역조회
import BSPFD0501M from    'app/pages/hsp/BSPFD0501M';    // 중요용지·용도품(영업점) > 조회  > 서무계수급내역조회
import BSPFD0601M from    'app/pages/hsp/BSPFD0601M';    // 중요용지·용도품(영업점) > 조회  > 출급번호별사용량조회
import BSPFD0701M from    'app/pages/hsp/BSPFD0701M';    // 중요용지·용도품(영업점) > 조회  > 수표발급점포조회
import BSPFD0801M from    'app/pages/hsp/BSPFD0801M';    // 중요용지·용도품(영업점) > 조회  > 일련번호별거래내역조회
import BSPFD0901M from    'app/pages/hsp/BSPFD0901M';    // 중요용지·용도품(영업점) > 조회  > 일련번호원장수정

import BSPAQ0101M from    'app/pages/hsp/BSPAQ0101M';    // 중요용지·용도품(영업점) > 인수도 > 중요용지인수
import BSPAQ0101P01 from  'app/pages/hsp/BSPAQ0101P01';  // 중요용지·용도품(영업점) > 인수도 > 중요용지인수 > (LP)대량폐기결정
import BSPAQ0201M from    'app/pages/hsp/BSPAQ0201M';    // 중요용지·용도품(영업점) > 인수도 > 용도품인수
import BSPAQ0301M from    'app/pages/hsp/BSPAQ0301M';    // 중요용지·용도품(영업점) > 인수도 > 중요용지서무계 → 창구
import BSPAQ0401M from    'app/pages/hsp/BSPAQ0401M';    // 중요용지·용도품(영업점) > 인수도 > 중요용지창구 → 서무계
import BSPAQ0501M from    'app/pages/hsp/BSPAQ0501M';    // 중요용지·용도품(영업점) > 인수도 > 중요용지타지점인도

import BSPDU0101M from    'app/pages/hsp/BSPDU0101M';    // 중요용지·용도품(영업점) > 폐기    > 오손등록
import BSPDU0601M from    'app/pages/hsp/BSPDU0601M';    // 중요용지·용도품(영업점) > 폐기    > 폐기중요용지발송등록
import BSPDU0601P02 from  'app/pages/hsp/BSPDU0601P02';  // 중요용지·용도품(영업점) > 폐기    > 폐기중요용지발송등록 ~ (LP)오손발송(행내등기신청)
import BSPDU0201M from    'app/pages/hsp/BSPDU0201M';    // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회
import BSPDU0201P02 from  'app/pages/hsp/BSPDU0201P02';  // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회 ~ (LP)오손이력조회
import BSPDU0601P01 from  'app/pages/hsp/BSPDU0601P01';  // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회 ~ (LP)오손사유변경
import BSPDU0301M from    'app/pages/hsp/BSPDU0301M';    // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기
import BSPDU0301P01 from  'app/pages/hsp/BSPDU0301P01';  // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기 ~ (LP)구양식/서손폐기등록(영업점)

import BSPDU0401P02 from  'app/pages/hsp/BSPDU0401P02';  // 중요용지·용도품(영업점) > 폐기    > 중요용지사고보고(영업점) ~ (LP)사고보고등록


// proto 중요용지·용도품(본부)
import HSPBT0101M from    'app/pages/hsp/HSPBT0101M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역
import HSPBT0101P01 from  'app/pages/hsp/HSPBT0101P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역 ~ (LP)인도취소
import HSPBT0301M from    'app/pages/hsp/HSPBT0301M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역
import HSPBT0301P01 from  'app/pages/hsp/HSPBT0301P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역 ~ (LP)부분취소
import HSPBT0201M from    'app/pages/hsp/HSPBT0201M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지자동배송인도
import HSPBT0401M from    'app/pages/hsp/HSPBT0401M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지일반인도
import HSPBT0501M from    'app/pages/hsp/HSPBT0501M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지일괄인도
import HSPBT0601M from    'app/pages/hsp/HSPBT0601M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지임시저장분인도
import HSPBT0701M from    'app/pages/hsp/HSPBT0701M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송대상조회
import HSPBT0801M from    'app/pages/hsp/HSPBT0801M';    // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송명령
import HSPBT1401M from    'app/pages/hsp/HSPBT1401M';    // 중요용지·용도품(본부) > 영업점배송관리 > 송장출력
import HSPBT1001M from    'app/pages/hsp/HSPBT1001M';    // 중요용지·용도품(본부) > 영업점배송관리 > 용도품인도내역조회
import HSPBT1101M from    'app/pages/hsp/HSPBT1101M';    // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도
import HSPBT1101P01 from  'app/pages/hsp/HSPBT1101P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도 > 신청내역 ~ (LP)부분취소
import HSPBT1201M from    'app/pages/hsp/HSPBT1201M';    // 중요용지·용도품(본부) > 영업점배송관리 > 용도품일반인도
import HSPBT1301M from    'app/pages/hsp/HSPBT1301M';    // 중요용지·용도품(본부) > 영업점배송관리 > 용도품일괄인도
import HSPBT0901M from    'app/pages/hsp/HSPBT0901M';    // 중요용지·용도품(본부) > 영업점배송관리 > 용도품배송명령
import HSPBT1501M from    'app/pages/hsp/HSPBT1501M';    // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회
// import HSPBT1501P01 from  'app/pages/hsp/HSPBT1501P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림발송
import HSPBT1501P02 from  'app/pages/hsp/HSPBT1501P02';  // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림설정
import HSPBT1601M from    'app/pages/hsp/HSPBT1601M';    // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목관리
import HSPBT1701M from    'app/pages/hsp/HSPBT1701M';    // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목정산확정
import HSPHS0101M from    'app/pages/hsp/HSPHS0101M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지발주명세표
import HSPHS0201M from    'app/pages/hsp/HSPHS0201M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청
import HSPHS0201P01 from  'app/pages/hsp/HSPHS0201P01';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청 ~ (LP)물품신청결재창
import HSPHS0301M from    'app/pages/hsp/HSPHS0301M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청현황
import HSPHS0401M from    'app/pages/hsp/HSPHS0401M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지검수승인등록
import HSPHS0401P03 from  'app/pages/hsp/HSPHS0401P03';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지검수승인등록 ~ (LP)물품검수조서
import HSPHS0501M from    'app/pages/hsp/HSPHS0501M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부입고
import HSPHS0501P01 from  'app/pages/hsp/HSPHS0501P01';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부입고 ~ (LP)검수내역조회
import HSPHS0601M from    'app/pages/hsp/HSPHS0601M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부재고조회
import HSPHS2001M from    'app/pages/hsp/HSPHS2001M';    // 중요용지·용도품(본부) > 본부재고관리   > 센터별영업점재고조회
import HSPHS0701M from    'app/pages/hsp/HSPHS0701M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부인도월별누계
import HSPHS0801M from    'app/pages/hsp/HSPHS0801M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지업체반납
import HSPHS0901M from    'app/pages/hsp/HSPHS0901M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지제한등록
import HSPHS1001M from    'app/pages/hsp/HSPHS1001M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지제한승인
import HSPHS1201M from    'app/pages/hsp/HSPHS1201M';    // 중요용지·용도품(본부) > 본부재고관리   > 중요용지제한승인
import HSPHS1601M from    'app/pages/hsp/HSPHS1601M';    // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부입고
import HSPHS1701M from    'app/pages/hsp/HSPHS1701M';    // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부입고
import HSPHS1701P01 from  'app/pages/hsp/HSPHS1701P01';  // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부입고
import HSPHS1901M from    'app/pages/hsp/HSPHS1901M';    // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리
import HSPHS1901P02 from  'app/pages/hsp/HSPHS1901P02';  // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리 ~ (LP)일람부수정이력

import HSPDU0101M from    'app/pages/hsp/HSPDU0101M';    // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지총괄현황
import HSPDU0101P01 from  'app/pages/hsp/HSPDU0101P01';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지총괄현황 ~ (LP)오손이력조회
import HSPDU0201M from    'app/pages/hsp/HSPDU0201M';    // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지센터인수(오배송)

import HSPDU0301M from    'app/pages/hsp/HSPDU0301M';    // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지목록(감사자등록)

import HSPDU0501M from    'app/pages/hsp/HSPDU0501M';    // 중요용지·용도품(본부) > 폐기          > (폐기감사)감사/소각등록
import HSPDU0701M from    'app/pages/hsp/HSPDU0701M';    // 중요용지·용도품(본부) > 폐기          > 일괄폐기미처리부점조회
import HSPDU0801M from    'app/pages/hsp/HSPDU0801M';    // 중요용지·용도품(본부) > 폐기          > 본부중요용지일괄폐기
import HSPDU0901M from    'app/pages/hsp/HSPDU0901M';    // 중요용지·용도품(본부) > 폐기          > 본부용도품일괄폐기


import HSPHP0101M from    'app/pages/hsp/HSPHP0101M';    // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청
import HSPHP0201M from    'app/pages/hsp/HSPHP0201M';    // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청접수
import HSPHP0301M from    'app/pages/hsp/HSPHP0301M';    // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지검수승인등록
import HSPHP0401M from    'app/pages/hsp/HSPHP0401M';    // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지본부입고
import HSPHP0401P01 from  'app/pages/hsp/HSPHP0401P01';  // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지본부입고 ~ (LP)검수내역조회(총무부외)
import HSPHP0501M from    'app/pages/hsp/HSPHP0501M';    // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청현황

import HSPSA0101M from    'app/pages/hsp/HSPSA0101M';    // 중요용지·용도품(본부) > 용도품계정관리        > 용도품계정출금내역조회

import HSPPC0201M from    'app/pages/hsp/HSPPC0201M';    // 중요용지·용도품(본부) > 대금정산 > 수입인지정산


// proto 재난·안전관리
import STMGD0101M from    'app/pages/stm/STMGD0101M';     // 재난·안전관리 > 기계경비당직관리 > 당직신청관리

import STMVL0101M from    'app/pages/stm/STMVL0101M';     // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회

import STMBR0101M from    'app/pages/stm/STMBR0101M';     // 재난·안전관리 > 버스배차신청 > 배차신청
import STMBR0101P01 from  'app/pages/stm/STMBR0101P01';   // 재난·안전관리 > 버스배차신청 > 배차신청 ~ (LP)일괄신청하기
import STMBR0101P03 from  'app/pages/stm/STMBR0101P03';   // 재난·안전관리 > 버스배차신청 > 배차신청 ~ (LP)배차정보등록
import STMBR0101P02 from  'app/pages/stm/STMBR0101P02';   // 재난·안전관리 > 버스배차신청 > 배차신청 ~ (LP)배차결과

import STMBR0201P02 from  'app/pages/stm/STMBR0201P02';   // 재난·안전관리 > 버스배차신청 > 배차일정표 ~ (LP)일정상세보기
import STMBR0301M from    'app/pages/stm/STMBR0301M';     // 재난·안전관리 > 버스배차신청 > 배차집계
import STMBR0301P01 from  'app/pages/stm/STMBR0301P01';   // 재난·안전관리 > 버스배차신청 > 배차집계  ~ (LP)단가표

import STMKY0101M from    'app/pages/stm/STMKY0101M';     // 재난·안전관리 > 열쇠관리 > 열쇠종류관리
import STMKY0201M from    'app/pages/stm/STMKY0201M';     // 재난·안전관리 > 열쇠관리 > 열쇠등록관리
import STMKY0201P02 from  'app/pages/stm/STMKY0201P02';   // 재난·안전관리 > 열쇠관리 > 열쇠등록관리 ~ (LP)열쇠폐기
import STMKY0201P03 from  'app/pages/stm/STMKY0201P03';   // 재난·안전관리 > 열쇠관리 > 열쇠등록관리 ~ (LP)열쇠별보관담당자
import STMKY0301M from    'app/pages/stm/STMKY0301M';     // 재난·안전관리 > 열쇠관리 > 열쇠인수도관리
import STMKY0301P01 from  'app/pages/stm/STMKY0301P01';   // 재난·안전관리 > 열쇠관리 > 열쇠인수도관리 ~ (LP)열쇠인수도취소


import STMKY0401P01 from  'app/pages/stm/STMKY0401P01';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)열쇠이미지보기
import STMKY0401P02 from  'app/pages/stm/STMKY0401P02';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)예비열쇠위탁요청
import STMKY0401P04 from  'app/pages/stm/STMKY0401P04';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)위탁열쇠반납요청
import STMKY0401P06 from  'app/pages/stm/STMKY0401P06';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)예비열쇠위탁승인
import STMKY0401P08 from  'app/pages/stm/STMKY0401P08';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)위탁열쇠반납승인
import STMKY0401P10 from  'app/pages/stm/STMKY0401P10';   // 재난·안전관리 > 열쇠관리 > 예비열쇠관리 ~ (LP)예비열쇠보관확인증관리
import STMKY0601M from    'app/pages/stm/STMKY0601M';     // 재난·안전관리 > 열쇠관리 > 관련조회 및 출력


// proto 영업지원
import BSSTI0101M from    'app/pages/bss/BSSTI0101M';   // 영업지원 > 연수원 > 연수원품목정보관리
import BSSTI0201M from    'app/pages/bss/BSSTI0201M';   // 영업지원 > 연수원 > 연수원품목입출고등록
import BSSTI0301M from    'app/pages/bss/BSSTI0301M';   // 영업지원 > 연수원 > 연수원품목입출고취소
import BSSTI0401M from    'app/pages/bss/BSSTI0401M';   // 영업지원 > 연수원 > 연수원입출고내역조회
import BSSTI0501M from    'app/pages/bss/BSSTI0501M';   // 영업지원 > 연수원 > 연수원품목재고조회

// proto 관리자
import ADMCM0101M from    'app/pages/adm/ADMCM0101M';   // 관리자 > 코드관리 > 공통코드관리

import ADMPA0101M from    'app/pages/adm/ADMPA0101M';   // 관리자 > 인사정보 > 부점관리
import ADMPA0201M from    'app/pages/adm/ADMPA0201M';   // 관리자 > 인사정보 > 팀정보관리
import ADMPA0301M from    'app/pages/adm/ADMPA0301M';   // 관리자 > 인사정보 > 직원관리
import ADMPA0301P01 from  'app/pages/adm/ADMPA0301P01'; // 관리자 > 인사정보 > 직원관리 ~ (LP)직무분장관리
import ADMPA0301P02 from  'app/pages/adm/ADMPA0301P02'; // 관리자 > 인사정보 > 직원관리 ~ (LP)변경이력
import ADMPA0401M from    'app/pages/adm/ADMPA0401M';   // 관리자 > 인사정보 > 외주직원관리

import ADMAU0101M from    'app/pages/adm/ADMAU0101M';   // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리
import ADMAU0101P01 from  'app/pages/adm/ADMAU0101P01'; // 관리자 > 권한관리 > 생성관리 > (T)메뉴관리 ~ (LP)상위메뉴선택
import ADMAU0102M from    'app/pages/adm/ADMAU0102M';   // 관리자 > 권한관리 > 생성관리 > (T)화면관리
import ADMAU0103M from    'app/pages/adm/ADMAU0103M';   // 관리자 > 권한관리 > 생성관리 > (T)팝업관리
import ADMAU0104M from    'app/pages/adm/ADMAU0104M';   // 관리자 > 권한관리 > 생성관리 > (T)권한관리
import ADMAU0201M from    'app/pages/adm/ADMAU0201M';   // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리
import ADMAU0201P01 from  'app/pages/adm/ADMAU0201P01'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)화면매핑
import ADMAU0201P02 from  'app/pages/adm/ADMAU0201P02'; // 관리자 > 권한관리 > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)관련화면매핑
import ADMAU0202M from    'app/pages/adm/ADMAU0202M';   // 관리자 > 권한관리 > 매핑관리 > (T)권한별 메뉴/팝업관리
import ADMAU0203M from    'app/pages/adm/ADMAU0203M';   // 관리자 > 권한관리 > 매핑관리 > (T)부점/부서별 권한관리
import ADMAU0204M from    'app/pages/adm/ADMAU0204M';   // 관리자 > 권한관리 > 매핑관리 > (T)사용자별 권한관리

import ADMAC0101M from    'app/pages/adm/ADMAC0101M';   // 관리자 > 권한위임 > 부점별 권한위임
import ADMAC0201M from    'app/pages/adm/ADMAC0201M';   // 관리자 > 권한위임 > 사용자별 권한관리

function ProtoRoutes() {
  return useRoutes([
    {
      path: '/test',
      children: [
        { path: 'LoadingBar',   element: <LoadingBar /> },
        { path: 'SUBTMPL',      element: <SUBTMPL /> },
      ],
    },
    {
      path: '/test',
      element: <Decorator />,
      children: [
        { path: 'FileUploads',  element: <FileUploads /> },
        { path: 'DialogPopup',  element: <DialogPopup /> },
        { path: 'POPTMPL',      element: <POPTMPL /> },
        { path: 'TMPL',         element: <TMPL /> },
        { path: 'DEX',          element: <DEX /> },
        { path: 'ING',          element: <ING /> },
      ],
    },
    { // 공통
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'CMP000201P',   element: <CMP000201P /> },
        { path: 'CMP000301P',   element: <CMP000301P /> },
        { path: 'CMP000302P',   element: <CMP000302P /> },
        { path: 'CMP000401P',   element: <CMP000401P /> },
        { path: 'CMP000501P',   element: <CMP000501P /> },
        { path: 'CMP001101P',   element: <CMP001101P /> },
        { path: 'CMP001201P',   element: <CMP001201P /> },
        { path: 'CMP001401P',   element: <CMP001401P /> },
        { path: 'CMP001402P',   element: <CMP001402P /> },
        { path: 'CMP001502P',   element: <CMP001502P /> },
      ],
    },
    { // 중요용지·용도품(본부)
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BSPRQ0201M',     element: <BSPRQ0201M /> },
        { path: 'BSPRQ0301M',     element: <BSPRQ0301M /> },
        { path: 'BSPRQ0301P02',   element: <BSPRQ0301P02 /> },
        { path: 'BSPRQ0501M',     element: <BSPRQ0501M /> },

        { path: 'BSPFD0101M',     element: <BSPFD0101M /> },
        { path: 'BSPFD0301M',     element: <BSPFD0301M /> },
        { path: 'BSPFD0401M',     element: <BSPFD0401M /> },
        { path: 'BSPFD0501M',     element: <BSPFD0501M /> },
        { path: 'BSPFD0601M',     element: <BSPFD0601M /> },
        { path: 'BSPFD0701M',     element: <BSPFD0701M /> },
        { path: 'BSPFD0801M',     element: <BSPFD0801M /> },
        { path: 'BSPFD0901M',     element: <BSPFD0901M /> },

        { path: 'BSPAQ0101M',     element: <BSPAQ0101M /> },
        { path: 'BSPAQ0101P01',   element: <BSPAQ0101P01 /> },
        { path: 'BSPAQ0201M',     element: <BSPAQ0201M /> },
        { path: 'BSPAQ0301M',     element: <BSPAQ0301M /> },
        { path: 'BSPAQ0401M',     element: <BSPAQ0401M /> },
        { path: 'BSPAQ0501M',     element: <BSPAQ0501M /> },

        { path: 'BSPDU0101M',     element: <BSPDU0101M /> },
        { path: 'BSPDU0601M',     element: <BSPDU0601M /> },
        { path: 'BSPDU0601P02',   element: <BSPDU0601P02 /> },
        { path: 'BSPDU0201M',     element: <BSPDU0201M /> },
        { path: 'BSPDU0201P02',   element: <BSPDU0201P02 /> },
        { path: 'BSPDU0601P01',   element: <BSPDU0601P01 /> },
        { path: 'BSPDU0301M',     element: <BSPDU0301M /> },
        { path: 'BSPDU0301P01',     element: <BSPDU0301P01 /> },

        { path: 'BSPDU0401P02',   element: <BSPDU0401P02 /> },

        { path: 'HSPBT0101M',     element: <HSPBT0101M /> },
        { path: 'HSPBT0101P01',   element: <HSPBT0101P01 /> },
        { path: 'HSPBT0301M',     element: <HSPBT0301M /> },
        { path: 'HSPBT0301P01',   element: <HSPBT0301P01 /> },
        { path: 'HSPBT0201M',     element: <HSPBT0201M /> },
        { path: 'HSPBT0401M',     element: <HSPBT0401M /> },
        { path: 'HSPBT0501M',     element: <HSPBT0501M /> },
        { path: 'HSPBT0601M',     element: <HSPBT0601M /> },
        { path: 'HSPBT0701M',     element: <HSPBT0701M /> },
        { path: 'HSPBT0801M',     element: <HSPBT0801M /> },
        { path: 'HSPBT1401M',     element: <HSPBT1401M /> },
        { path: 'HSPBT1001M',     element: <HSPBT1001M /> },
        { path: 'HSPBT1101M',     element: <HSPBT1101M /> },
        { path: 'HSPBT1101P01',   element: <HSPBT1101P01 /> },
        { path: 'HSPBT1201M',     element: <HSPBT1201M /> },
        { path: 'HSPBT1301M',     element: <HSPBT1301M /> },
        { path: 'HSPBT0901M',     element: <HSPBT0901M /> },
        { path: 'HSPBT1501M',     element: <HSPBT1501M /> },
        // { path: 'HSPBT1501P01',   element: <HSPBT1501P01 /> },
        { path: 'HSPBT1501P02',   element: <HSPBT1501P02 /> },
        { path: 'HSPBT1601M',     element: <HSPBT1601M /> },
        { path: 'HSPBT1701M',     element: <HSPBT1701M /> },
        { path: 'HSPHS0101M',     element: <HSPHS0101M /> },
        { path: 'HSPHS0201M',     element: <HSPHS0201M /> },
        { path: 'HSPHS0201P01',   element: <HSPHS0201P01 /> },
        { path: 'HSPHS0301M',     element: <HSPHS0301M /> },
        { path: 'HSPHS0401M',     element: <HSPHS0401M /> },
        { path: 'HSPHS0401P03',   element: <HSPHS0401P03 /> },
        { path: 'HSPHS0501M',     element: <HSPHS0501M /> },
        { path: 'HSPHS0501P01',   element: <HSPHS0501P01 /> },
        { path: 'HSPHS0601M',     element: <HSPHS0601M /> },
        { path: 'HSPHS2001M',     element: <HSPHS2001M /> },
        { path: 'HSPHS0701M',     element: <HSPHS0701M /> },
        { path: 'HSPHS0801M',     element: <HSPHS0801M /> },
        { path: 'HSPHS0901M',     element: <HSPHS0901M /> },
        { path: 'HSPHS1001M',     element: <HSPHS1001M /> },
        { path: 'HSPHS1201M',     element: <HSPHS1201M /> },
        { path: 'HSPHS1601M',     element: <HSPHS1601M /> },
        { path: 'HSPHS1701M',     element: <HSPHS1701M /> },
        { path: 'HSPHS1701P01',   element: <HSPHS1701P01 /> },
        { path: 'HSPHS1901M',     element: <HSPHS1901M /> },
        { path: 'HSPHS1901P02',   element: <HSPHS1901P02 /> },


        { path: 'HSPDU0101M',     element: <HSPDU0101M /> },
        { path: 'HSPDU0101P01',   element: <HSPDU0101P01 /> },
        { path: 'HSPDU0201M',     element: <HSPDU0201M /> },

        { path: 'HSPDU0301M',     element: <HSPDU0301M /> },

        { path: 'HSPDU0501M',     element: <HSPDU0501M /> },
        { path: 'HSPDU0701M',     element: <HSPDU0701M /> },
        { path: 'HSPDU0801M',     element: <HSPDU0801M /> },
        { path: 'HSPDU0901M',     element: <HSPDU0901M /> },

        { path: 'HSPHP0101M',     element: <HSPHP0101M /> },
        { path: 'HSPHP0201M',     element: <HSPHP0201M /> },
        { path: 'HSPHP0301M',     element: <HSPHP0301M /> },
        { path: 'HSPHP0401M',     element: <HSPHP0401M /> },
        { path: 'HSPHP0401P01',   element: <HSPHP0401P01 /> },
        { path: 'HSPHP0501M',     element: <HSPHP0501M /> },
        { path: 'HSPSA0101M',     element: <HSPSA0101M /> },

        { path: 'HSPPC0201M',     element: <HSPPC0201M /> },
      ],
    },
    { // 재난·안전관리
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'STMGD0101M',   element: <STMGD0101M /> },

        { path: 'STMVL0101M',   element: <STMVL0101M /> },

        { path: 'STMBR0101M',   element: <STMBR0101M /> },
        { path: 'STMBR0101P01', element: <STMBR0101P01 /> },
        { path: 'STMBR0101P02', element: <STMBR0101P02 /> },
        { path: 'STMBR0101P03', element: <STMBR0101P03 /> },

        { path: 'STMBR0201P02', element: <STMBR0201P02 /> },
        { path: 'STMBR0301M',   element: <STMBR0301M /> },
        { path: 'STMBR0301P01', element: <STMBR0301P01 /> },

        { path: 'STMKY0101M',   element: <STMKY0101M /> },
        { path: 'STMKY0201M',   element: <STMKY0201M /> },
        { path: 'STMKY0201P02', element: <STMKY0201P02 /> },
        { path: 'STMKY0201P03', element: <STMKY0201P03 /> },
        { path: 'STMKY0301M',   element: <STMKY0301M /> },
        { path: 'STMKY0301P01', element: <STMKY0301P01 /> },

        { path: 'STMKY0401P01', element: <STMKY0401P01 /> },
        { path: 'STMKY0401P02', element: <STMKY0401P02 /> },
        { path: 'STMKY0401P04', element: <STMKY0401P04 /> },
        { path: 'STMKY0401P06', element: <STMKY0401P06 /> },
        { path: 'STMKY0401P08', element: <STMKY0401P08 /> },
        { path: 'STMKY0401P10', element: <STMKY0401P10 /> },
        { path: 'STMKY0601M',   element: <STMKY0601M /> },

      ],
    },
    { // 영업지원
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BSSTI0101M',   element: <BSSTI0101M /> },
        { path: 'BSSTI0201M',   element: <BSSTI0201M /> },
        { path: 'BSSTI0301M',   element: <BSSTI0301M /> },
        { path: 'BSSTI0401M',   element: <BSSTI0401M /> },
        { path: 'BSSTI0501M',   element: <BSSTI0501M /> },
      ],
    },
    { // 관리자
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMCM0101M',   element: <ADMCM0101M /> },

        { path: 'ADMPA0101M',   element: <ADMPA0101M /> },
        { path: 'ADMPA0201M',   element: <ADMPA0201M /> },
        { path: 'ADMPA0301M',   element: <ADMPA0301M /> },
        { path: 'ADMPA0301P01', element: <ADMPA0301P01 /> },
        { path: 'ADMPA0301P02', element: <ADMPA0301P02 /> },
        { path: 'ADMPA0401M',   element: <ADMPA0401M /> },

        { path: 'ADMAU0101M',   element: <ADMAU0101M /> },
        { path: 'ADMAU0101P01', element: <ADMAU0101P01 /> },
        { path: 'ADMAU0102M',   element: <ADMAU0102M /> },
        { path: 'ADMAU0103M',   element: <ADMAU0103M /> },
        { path: 'ADMAU0104M',   element: <ADMAU0104M /> },
        { path: 'ADMAU0201M',   element: <ADMAU0201M /> },
        { path: 'ADMAU0201P01', element: <ADMAU0201P01 /> },
        { path: 'ADMAU0201P02', element: <ADMAU0201P02 /> },
        { path: 'ADMAU0202M',   element: <ADMAU0202M /> },
        { path: 'ADMAU0203M',   element: <ADMAU0203M /> },
        { path: 'ADMAU0204M',   element: <ADMAU0204M /> },

        { path: 'ADMAC0101M',   element: <ADMAC0101M /> },
        { path: 'ADMAC0201M',   element: <ADMAC0201M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
