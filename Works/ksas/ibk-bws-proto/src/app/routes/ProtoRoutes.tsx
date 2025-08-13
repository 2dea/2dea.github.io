/**
 * @description ProtoRoutes
 */

// dependency
import React from 'react';
import { useRoutes } from 'react-router';

// components
import Decorator from 'app/shared/layouts/Decorator';

// test
import SUBTMPL from 'app/pages/test/SUBTMPL';     // SUBTMPL
import POPTMPL from 'app/pages/test/POPTMPL';     // POPTMPL
import TMPL from 'app/pages/test/TMPL';        // TMPL
import DEX from 'app/pages/test/DEX';         // DEX
import ING from 'app/pages/test/ING';         // ING

import DialogPopup from 'app/pages/test/DialogPopup'; // DialogPopup
import LoadingBar from 'app/pages/test/LoadingBar';  // LoadingBar
import FileUploads from 'app/pages/test/FileUploads'; // FileUploads
import SurveyForms from 'app/pages/test/SurveyForms'; // SurveyForms

// proto 공통
import CMM000301M from 'app/pages/cmm/CMM000301M';   // 공통 ~ 메인

import CMP000101P from 'app/pages/cmp/CMP000101P';   // 공통 ~ (LP)미처리업무등록관리
import CMP000102P from 'app/pages/cmp/CMP000102P';   // 공통 ~ (LP)미처리업무관리
import CMP000201P from 'app/pages/cmp/CMP000201P';   // 공통 ~ (LP)엑셀업로드
import CMP000301P from 'app/pages/cmp/CMP000301P';   // 공통 ~ (LP)파일업로드
import CMP000302P from 'app/pages/cmp/CMP000302P';   // 공통 ~ (LP)첨부파일
import CMP000401P from 'app/pages/cmp/CMP000401P';   // 공통 ~ (LP)이미지업로드
import CMP000501P from 'app/pages/cmp/CMP000501P';   // 공통 ~ (LP)직원조회
import CMP000601P from 'app/pages/cmp/CMP000601P';   // 공통 ~ (LP)주소검색
import CMP000801P from 'app/pages/cmp/CMP000801P';   // 공통 ~ (LP)도움말
import CMP000901P from 'app/pages/cmp/CMP000901P';   // 공통 ~ (LP)메모(업무별)
import CMP001001P from 'app/pages/cmp/CMP001001P';   // 공통 ~ (LP)메모(마이메뉴)
import CMP001101P from 'app/pages/cmp/CMP001101P';   // 공통 ~ (LP)이미지보기
import CMP001201P from 'app/pages/cmp/CMP001201P';   // 공통 ~ (LP)알림발송
import CMP001301P from 'app/pages/cmp/CMP001301P';   // 공통 ~ (LP)알림발송
import CMP001401P from 'app/pages/cmp/CMP001401P';   // 공통 ~ (LP)업체조회
import CMP001402P from 'app/pages/cmp/CMP001402P';   // 공통 ~ (LP)업체기본정보
import CMP001501P from 'app/pages/cmp/CMP001501P';   // 공통 ~ (LP)결재요청
import CMP001502P from 'app/pages/cmp/CMP001502P';   // 공통 ~ (LP)결재상세정보
import CMP001601P from 'app/pages/cmp/CMP001601P';   // 공통 ~ (LP)반려

// proto 자금현수송
import FMTCT0101M from 'app/pages/fmt/FMTCT0101M';      // 자금현수송 > 원화현수송    > 원화현수송신청
import FMTCT0101P01 from 'app/pages/fmt/FMTCT0101P01';  // 자금현수송 > 원화현수송    > 원화현수송신청 ~ (LP)손상권내역조회
import FMTCT0201M from 'app/pages/fmt/FMTCT0201M';      // 자금현수송 > 원화현수송    > 원화현수송신청관리
import FMTCT0201P01 from 'app/pages/fmt/FMTCT0201P01';  // 자금현수송 > 원화현수송    > 원화현수송신청관리 ~ (LP)현송직원확인
import FMTCT0201P02 from 'app/pages/fmt/FMTCT0201P02';  // 자금현수송 > 원화현수송    > 원화현수송신청관리 ~ (LP)영업점불입결정
import FMTCT0201P03 from 'app/pages/fmt/FMTCT0201P03';  // 자금현수송 > 원화현수송    > 원화현수송신청관리 ~ (LP)일괄송부서출력
import FMTCT1601M from 'app/pages/fmt/FMTCT1601M';      // 자금현수송 > 원화현수송    > 원화현수송신청관리(업무센터)
import FMTCT1601P01 from 'app/pages/fmt/FMTCT1601P01';  // 자금현수송 > 원화현수송    > 원화현수송신청관리(업무센터) ~ (LP)업무센터결정
import FMTCT0301M from 'app/pages/fmt/FMTCT0301M';      // 자금현수송 > 원화현수송    > 원화시재 및 보유현황
import FMTCT0401M from 'app/pages/fmt/FMTCT0401M';      // 자금현수송 > 원화현수송    > 원화마감시간관리
import FMTCT0701M from 'app/pages/fmt/FMTCT0701M';      // 자금현수송 > 원화현수송    > 자금현송명령부관리(업무센터)
import FMTCT0801M from 'app/pages/fmt/FMTCT0801M';      // 자금현수송 > 원화현수송    > 지점간 원화현수송신청관리
import FMTCT0801P01 from 'app/pages/fmt/FMTCT0801P01';  // 자금현수송 > 원화현수송    > 지점간 원화현수송신청관리 ~ (LP)신청
import FMTCT0801P02 from 'app/pages/fmt/FMTCT0801P02';  // 자금현수송 > 원화현수송    > 지점간 원화현수송신청관리 ~ (LP)불입결정

import FMTCT0901M from 'app/pages/fmt/FMTCT0901M';      // 자금현수송 > 원화현수송     > 원화시재금현황
import FMTCT1501M from 'app/pages/fmt/FMTCT1501M';      // 자금현수송 > 원화현수송     > 자금현수송노선업로드
import FMTCT1501P02 from 'app/pages/fmt/FMTCT1501P02';  // 자금현수송 > 원화현수송     > 자금현수송노선업로드 ~ (LP)현송원관리
import FMTCT1001M from 'app/pages/fmt/FMTCT1001M';      // 자금현수송 > 원화현수송     > 자금현수송노선관리
import FMTCT1001P01 from 'app/pages/fmt/FMTCT1001P01';  // 자금현수송 > 원화현수송     > 자금현수송노선관리 ~ (LP)자금현수송노선등록
import FMTCT1001P02 from 'app/pages/fmt/FMTCT1001P02';  // 자금현수송 > 원화현수송     > 자금현수송노선관리 ~ (LP)자금현수송노선조회
import FMTCT1101M from 'app/pages/fmt/FMTCT1101M';      // 자금현수송 > 원화현수송     > 자금현수송노선출력
import FMTCT1301M from 'app/pages/fmt/FMTCT1301M';      // 자금현수송 > 원화현수송     > 원화미취결내역알림

import FMTCT1401M from 'app/pages/fmt/FMTCT1401M';      // 자금현수송 > 원화현수송     > 타행현수송신청관리
import FMTCT1401P01 from 'app/pages/fmt/FMTCT1401P01';  // 자금현수송 > 원화현수송     > 타행현수송신청관리 ~ (LP)타행현수송신청

import FMTFT0101M from 'app/pages/fmt/FMTFT0101M';      // 자금현수송 > 외화현수송     > 외화현수송신청
import FMTFT0201M from 'app/pages/fmt/FMTFT0201M';      // 자금현수송 > 외화현수송     > 외화현수송신청관리
import FMTFT0201P01 from 'app/pages/fmt/FMTFT0201P01';  // 자금현수송 > 외화현수송     > 외화현수송신청관리 ~ (LP)영업점불입결정
import FMTFT0201P03 from 'app/pages/fmt/FMTFT0201P03';  // 자금현수송 > 외화현수송     > 외화현수송신청관리 ~ (LP)일괄송부서출력

import FMTFT1201M from 'app/pages/fmt/FMTFT1201M';      // 자금현수송 > 외화현수송     > 외화현수송신청관리(업무센터)
import FMTFT1201P01 from 'app/pages/fmt/FMTFT1201P01';  // 자금현수송 > 외화현수송     > 외화현수송신청관리(업무센터) ~ (LP)업무센터결정

import FMTFT0301M from 'app/pages/fmt/FMTFT0301M';      // 자금현수송 > 외화현수송     > 외화시재금현황
import FMTFT1301M from 'app/pages/fmt/FMTFT1301M';      // 자금현수송 > 외화현수송     > 외화시재 및 보유현황
import FMTFT0401M from 'app/pages/fmt/FMTFT0401M';      // 자금현수송 > 외화현수송     > 외화마감시간관리
import FMTFT0601M from 'app/pages/fmt/FMTFT0601M';      // 자금현수송 > 외화현수송     > 자금현송명령부관리(업무센터)

import FMTFT0701M from 'app/pages/fmt/FMTFT0701M';      // 자금현수송 > 외화현수송     > 외화통화정보

import FMTFT0801M from 'app/pages/fmt/FMTFT0801M';      // 자금현수송 > 외화현수송     > 외국통화견양집
import FMTFT0801P01 from 'app/pages/fmt/FMTFT0801P01';  // 자금현수송 > 외화현수송     > 외국통화견양집 ~ (LP)외화통화등록/수정
import FMTFT0801P02 from 'app/pages/fmt/FMTFT0801P02';  // 자금현수송 > 외화현수송     > 외국통화견양집 ~ (LP)화폐이미지보기

import FMTFT0901M from 'app/pages/fmt/FMTFT0901M';      // 자금현수송 > 외화현수송     > 지점간외화현수송신청관리
import FMTFT0901P01 from 'app/pages/fmt/FMTFT0901P01';  // 자금현수송 > 외화현수송     > 지점간외화현수송신청관리 ~ (LP)자금신청
import FMTFT0901P02 from 'app/pages/fmt/FMTFT0901P02';  // 자금현수송 > 외화현수송     > 지점간외화현수송신청관리 ~ (LP)불입결정
import FMTFT1001M from 'app/pages/fmt/FMTFT1001M';      // 자금현수송 > 외화현수송     > 외화미취결내역알림
import FMTFT1101M from 'app/pages/fmt/FMTFT1101M';      // 자금현수송 > 외화현수송     > 타행수출입신청관리
import FMTFT1101P01 from 'app/pages/fmt/FMTFT1101P01';  // 자금현수송 > 외화현수송     > 타행수출입신청관리 ~ (LP)신청


import FMTCC0301M from 'app/pages/fmt/FMTCC0301M';      // 자금현수송 > 원화정사      > 관련조회 및 출력
import FMTFC0101M   from 'app/pages/fmt/FMTFC0101M';    // 자금현수송 > 외화정사      > 일일실적관리 > 실적내역
import FMTFC0101P01 from 'app/pages/fmt/FMTFC0101P01';  // 자금현수송 > 외화정사      > 일일실적관리 > 실적내역 ~ (LP)위조및변조화폐신고서등록
import FMTFC0101P02 from 'app/pages/fmt/FMTFC0101P02';  // 자금현수송 > 외화정사      > 일일실적관리 > 실적내역 ~ (LP)외화정사등록


import FMTCC0101M from 'app/pages/fmt/FMTCC0101M';      // 자금현수송 > 원화정사      > 신청(인도)
import FMTCC0101P01 from 'app/pages/fmt/FMTCC0101P01';  // 자금현수송 > 원화정사      > 신청(인도) ~ (LP)호송금인수증등록
import FMTCC0201M from 'app/pages/fmt/FMTCC0201M';      // 자금현수송 > 원화정사      > 결과(인수)

import FMTFC0201M from 'app/pages/fmt/FMTFC0201M';      // 자금현수송 > 외화정사      > 인수도관리
import FMTFC0201P01 from 'app/pages/fmt/FMTFC0201P01';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)외화정사인수도(정사)
import FMTFC0201P02 from 'app/pages/fmt/FMTFC0201P02';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)외화정사인수도(반납)
import FMTFC0201P03 from 'app/pages/fmt/FMTFC0201P03';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)인수(정사분)
import FMTFC0201P04 from 'app/pages/fmt/FMTFC0201P04';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)인수(반납분)
import FMTFC0201P05 from 'app/pages/fmt/FMTFC0201P05';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)반송(정사분)
import FMTFC0201P06 from 'app/pages/fmt/FMTFC0201P06';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)반송(반납분)
import FMTFC0201P07 from 'app/pages/fmt/FMTFC0201P07';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)인도취소(정사분)
import FMTFC0201P08 from 'app/pages/fmt/FMTFC0201P08';  // 자금현수송 > 외화정사      > 인수도관리 ~ (LP)인도취소(반납분)

import FMTFC0301M from 'app/pages/fmt/FMTFC0301M';      // 자금현수송 > 외화정사      > 일일업무현황조회

import FMTFF0101M from 'app/pages/fmt/FMTFF0101M';      // 자금현수송 > 외화정사수수료 > 수수료절감표조회
import FMTFF0201M from 'app/pages/fmt/FMTFF0201M';      // 자금현수송 > 외화정사수수료 > 수수료율관리
import FMTFF0301M from 'app/pages/fmt/FMTFF0301M';      // 자금현수송 > 외화정사수수료 > 환율관리

import FMTDP0101M from 'app/pages/fmt/FMTDP0101M';      // 자금현수송 > 파출수납      > 계약현황
import FMTDP0201M from 'app/pages/fmt/FMTDP0201M';      // 자금현수송 > 파출수납      > 창구를거치지않은예금의입출금대장
import FMTCD0101M from 'app/pages/fmt/FMTCD0101M';      // 자금현수송 > 외화위폐감별


// proto 중요용지·용도품(본부)
import BSPRQ0101M from 'app/pages/bsp/BSPRQ0101M';      // 중요용지·용도품(영업점) > 신청  > 중요용지신청
import BSPRQ0101P01 from 'app/pages/bsp/BSPRQ0101P01';  // 중요용지·용도품(영업점) > 신청  > 중요용지신청 > (LP)중요용지신청안내
import BSPRQ0201M from 'app/pages/bsp/BSPRQ0201M';      // 중요용지·용도품(영업점) > 신청  > 중요용지신청내역
import BSPRQ0301M from 'app/pages/bsp/BSPRQ0301M';      // 중요용지·용도품(영업점) > 신청  > 중요용지자동배송설정
import BSPRQ0301P01 from 'app/pages/bsp/BSPRQ0301P01';  // 중요용지·용도품(영업점) > 신청  > 중요용지자동배송설정 > (LP)자동배송 품목 등록 및 제외 확인
import BSPRQ0301P02 from 'app/pages/bsp/BSPRQ0301P02';  // 중요용지·용도품(영업점) > 신청  > 중요용지자동배송설정 > (LP)자동배송 신청 이력 조회
import BSPRQ0401M from 'app/pages/bsp/BSPRQ0401M';      // 중요용지·용도품(영업점) > 신청  > 용도품신청
import BSPRQ0501M from 'app/pages/bsp/BSPRQ0501M';      // 중요용지·용도품(영업점) > 신청  > 용도품신청내역

import BSPFD0101M from 'app/pages/bsp/BSPFD0101M';      // 중요용지·용도품(영업점) > 조회  > 중요용지재고조회
import BSPFD0301M from 'app/pages/bsp/BSPFD0301M';      // 중요용지·용도품(영업점) > 조회  > 창구사용내역조회
import BSPFD0401M from 'app/pages/bsp/BSPFD0401M';      // 중요용지·용도품(영업점) > 조회  > 서무계수급내역조회
import BSPFD0501M from 'app/pages/bsp/BSPFD0501M';      // 중요용지·용도품(영업점) > 조회  > 서무계수급내역조회
import BSPFD0601M from 'app/pages/bsp/BSPFD0601M';      // 중요용지·용도품(영업점) > 조회  > 출급번호별사용량조회
import BSPFD0701M from 'app/pages/bsp/BSPFD0701M';      // 중요용지·용도품(영업점) > 조회  > 수표발급점포조회
import BSPFD0801M from 'app/pages/bsp/BSPFD0801M';      // 중요용지·용도품(영업점) > 조회  > 일련번호별거래내역조회
import BSPFD0901M from 'app/pages/bsp/BSPFD0901M';      // 중요용지·용도품(영업점) > 조회  > 일련번호원장수정
import BSPFD0901P01 from 'app/pages/bsp/BSPFD0901P01';  // 중요용지·용도품(영업점) > 조회  > 일련번호원장수정 > (LP)이력조회

import BSPAQ0101M from 'app/pages/bsp/BSPAQ0101M';      // 중요용지·용도품(영업점) > 인수도 > 중요용지인수
import BSPAQ0101P01 from 'app/pages/bsp/BSPAQ0101P01';  // 중요용지·용도품(영업점) > 인수도 > 중요용지인수 > (LP)대량폐기결정
import BSPAQ0201M from 'app/pages/bsp/BSPAQ0201M';      // 중요용지·용도품(영업점) > 인수도 > 용도품인수
import BSPAQ0301M from 'app/pages/bsp/BSPAQ0301M';      // 중요용지·용도품(영업점) > 인수도 > 중요용지서무계 → 창구
import BSPAQ0401M from 'app/pages/bsp/BSPAQ0401M';      // 중요용지·용도품(영업점) > 인수도 > 중요용지창구 → 서무계
import BSPAQ0501M from 'app/pages/bsp/BSPAQ0501M';      // 중요용지·용도품(영업점) > 인수도 > 중요용지타지점인도

import BSPDU0101M from 'app/pages/bsp/BSPDU0101M';      // 중요용지·용도품(영업점) > 폐기    > 오손등록
import BSPDU0601M from 'app/pages/bsp/BSPDU0601M';      // 중요용지·용도품(영업점) > 폐기    > 폐기중요용지발송등록
import BSPDU0601P02 from 'app/pages/bsp/BSPDU0601P02';  // 중요용지·용도품(영업점) > 폐기    > 폐기중요용지발송등록 ~ (LP)오손발송(행내등기신청)
import BSPDU0201M from 'app/pages/bsp/BSPDU0201M';      // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회
import BSPDU0201P02 from 'app/pages/bsp/BSPDU0201P02';  // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회 ~ (LP)오손이력조회
import BSPDU0201P03 from 'app/pages/bsp/BSPDU0201P03';  // 중요용지·용도품(영업점) > 폐기    > 오손처리진행상태조회 ~ (LP)오손사유변경
import BSPDU0301M from 'app/pages/bsp/BSPDU0301M';      // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기
import BSPDU0301P01 from 'app/pages/bsp/BSPDU0301P01';  // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기 ~ (LP)구양식/서손폐기등록(영업점)


import BSPDU0401M from 'app/pages/bsp/BSPDU0401M';      // 중요용지·용도품(영업점) > 폐기    > 중요용지사고보고(영업점)
import BSPDU0401P02 from 'app/pages/bsp/BSPDU0401P02';  // 중요용지·용도품(영업점) > 폐기    > 중요용지사고보고(영업점) ~ (LP)사고보고등록
import BSPDU0501M from 'app/pages/bsp/BSPDU0501M';      // 중요용지·용도품(영업점) > 폐기    > 중요용지사고보고(본부)




import BSPDU0301P02 from 'app/pages/bsp/BSPDU0301P02';  // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기 ~ 품목폐지폐기등록
import BSPDU0301P03 from 'app/pages/bsp/BSPDU0301P03';  // 중요용지·용도품(영업점) > 폐기    > 중요용지일괄폐기 ~ 온누리상품권스캔등록


// proto 중요용지·용도품(본부)
import HSPBT0101M from 'app/pages/hsp/HSPBT0101M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역
import HSPBT0101P01 from 'app/pages/hsp/HSPBT0101P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지인도내역조회 > 인도내역 ~ (LP)인도취소
import HSPBT0301M from 'app/pages/hsp/HSPBT0301M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역
import HSPBT0301P01 from 'app/pages/hsp/HSPBT0301P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지신청분인도   > 신청내역 ~ (LP)본부반송
import HSPBT0201M from 'app/pages/hsp/HSPBT0201M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지자동배송인도
import HSPBT0401M from 'app/pages/hsp/HSPBT0401M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지일반인도
import HSPBT0501M from 'app/pages/hsp/HSPBT0501M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지일괄인도
import HSPBT0601M from 'app/pages/hsp/HSPBT0601M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지임시저장분인도
import HSPBT0701M from 'app/pages/hsp/HSPBT0701M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송대상조회
import HSPBT0801M from 'app/pages/hsp/HSPBT0801M';      // 중요용지·용도품(본부) > 영업점배송관리 > 중요용지배송명령
import HSPBT1401M from 'app/pages/hsp/HSPBT1401M';      // 중요용지·용도품(본부) > 영업점배송관리 > 송장출력
import HSPBT1001M from 'app/pages/hsp/HSPBT1001M';      // 중요용지·용도품(본부) > 영업점배송관리 > 용도품인도내역조회
import HSPBT1101M from 'app/pages/hsp/HSPBT1101M';      // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도
import HSPBT1101P01 from 'app/pages/hsp/HSPBT1101P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 용도품신청분인도 > 신청내역 ~ (LP)본부반송
import HSPBT1201M from 'app/pages/hsp/HSPBT1201M';      // 중요용지·용도품(본부) > 영업점배송관리 > 용도품일반인도
import HSPBT1301M from 'app/pages/hsp/HSPBT1301M';      // 중요용지·용도품(본부) > 영업점배송관리 > 용도품일괄인도
import HSPBT0901M from 'app/pages/hsp/HSPBT0901M';      // 중요용지·용도품(본부) > 영업점배송관리 > 용도품배송명령
import HSPBT1501M from 'app/pages/hsp/HSPBT1501M';      // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회
// import HSPBT1501P01 from  'app/pages/hsp/HSPBT1501P01';  // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림발송
import HSPBT1501P02 from 'app/pages/hsp/HSPBT1501P02';  // 중요용지·용도품(본부) > 영업점배송관리 > 영업점미인수내역조회 ~ (LP)알림설정
import HSPBT1601M from 'app/pages/hsp/HSPBT1601M';      // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목관리
import HSPBT1701M from 'app/pages/hsp/HSPBT1701M';      // 중요용지·용도품(본부) > 영업점배송관리 > 업체직배송품목정산확정
import HSPHS0101M from 'app/pages/hsp/HSPHS0101M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지발주명세표
import HSPHS0201M from 'app/pages/hsp/HSPHS0201M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청
import HSPHS0201P01 from 'app/pages/hsp/HSPHS0201P01';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청 ~ (LP)물품신청결재창
import HSPHS0301M from 'app/pages/hsp/HSPHS0301M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지조달신청현황
import HSPHS0401M from 'app/pages/hsp/HSPHS0401M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지검수승인등록
import HSPHS0401P03 from 'app/pages/hsp/HSPHS0401P03';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지검수승인등록 ~ (LP)물품검수조서
import HSPHS0501M from 'app/pages/hsp/HSPHS0501M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부입고 > 입고대상
import HSPHS0501P01 from 'app/pages/hsp/HSPHS0501P01';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부입고 > 입고대상 ~ (LP)검수내역조회
import HSPHS0501P02 from 'app/pages/hsp/HSPHS0501P02';  // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부입고 > 입고대상 ~ (LP)0원입고등록
import HSPHS0601M from 'app/pages/hsp/HSPHS0601M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부재고조회
import HSPHS2001M from 'app/pages/hsp/HSPHS2001M';      // 중요용지·용도품(본부) > 본부재고관리   > 센터별영업점재고조회
import HSPHS0701M from 'app/pages/hsp/HSPHS0701M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지본부인도월별누계
import HSPHS0801M from 'app/pages/hsp/HSPHS0801M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지업체반납
import HSPHS0901M from 'app/pages/hsp/HSPHS0901M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지·용도품제한등록
import HSPHS1001M from 'app/pages/hsp/HSPHS1001M';      // 중요용지·용도품(본부) > 본부재고관리   > 중요용지·용도품제한승인
import HSPHS1201M from 'app/pages/hsp/HSPHS1201M';      // 중요용지·용도품(본부) > 본부재고관리   > 용도품발주명세표
import HSPHS1301M from 'app/pages/hsp/HSPHS1301M';      // 중요용지·용도품(본부) > 본부재고관리   > 용도품조달신청
import HSPHS1301P01 from 'app/pages/hsp/HSPHS1301P01';  // 중요용지·용도품(본부) > 본부재고관리   > 용도품조달신청 ~ (LP)물품신청결재창
import HSPHS1601M from 'app/pages/hsp/HSPHS1601M';      // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부입고 > 입고대상
import HSPHS1601P02 from 'app/pages/hsp/HSPHS1601P02';  // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부입고 > 입고대상 ~ (LP)0원입고등록
import HSPHS1701M from 'app/pages/hsp/HSPHS1701M';      // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부재고조회
import HSPHS1701P01 from 'app/pages/hsp/HSPHS1701P01';  // 중요용지·용도품(본부) > 본부재고관리   > 용도품본부재고조회 ~ (LP)고가용도품본부재고조회
import HSPHS1901M from 'app/pages/hsp/HSPHS1901M';      // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리
import HSPHS1901P01 from 'app/pages/hsp/HSPHS1901P01';  // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리 ~ (LP)일람부등록
import HSPHS1901P02 from 'app/pages/hsp/HSPHS1901P02';  // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리 ~ (LP)일람부수정이력
import HSPHS1901P03 from 'app/pages/hsp/HSPHS1901P03';  // 중요용지·용도품(본부) > 본부재고관리   > 일람부관리 ~ (LP)일람부수정

import HSPDU0101M from 'app/pages/hsp/HSPDU0101M';      // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지총괄현황
import HSPDU0101P01 from 'app/pages/hsp/HSPDU0101P01';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지총괄현황 ~ (LP)오손이력조회
import HSPDU0201M from 'app/pages/hsp/HSPDU0201M';      // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지센터인수(오배송)

import HSPDU0201P02 from 'app/pages/hsp/HSPDU0201P02';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지센터인수(오배송) ~ (LP)온누리상품권일련번호확인
import HSPDU0201P03 from 'app/pages/hsp/HSPDU0201P03';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지센터인수(오배송) ~ (LP)오손중요용지행내등기신청

import HSPDU0301M from 'app/pages/hsp/HSPDU0301M';      // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지목록(감사자등록)
import HSPDU0301P01 from 'app/pages/hsp/HSPDU0301P01';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지목록(감사자등록) ~ (LP)폐기통계내역
import HSPDU0301P02 from 'app/pages/hsp/HSPDU0301P02';  // 중요용지·용도품(본부) > 폐기          > 폐기대상중요용지목록(감사자등록) ~ (LP)감사자등록

import HSPDU0401M from 'app/pages/hsp/HSPDU0401M';      // 중요용지·용도품(본부) > 폐기          > (폐기감사)소각확인서관리
import HSPDU0401P01 from 'app/pages/hsp/HSPDU0401P01';  // 중요용지·용도품(본부) > 폐기          > (폐기감사)소각확인서관리 ~ (LP)오손처리진행상태조회

import HSPDU0501M from 'app/pages/hsp/HSPDU0501M';      // 중요용지·용도품(본부) > 폐기          > (폐기감사)감사/소각등록
import HSPDU0701M from 'app/pages/hsp/HSPDU0701M';      // 중요용지·용도품(본부) > 폐기          > 일괄폐기미처리부점조회
import HSPDU0801M from 'app/pages/hsp/HSPDU0801M';      // 중요용지·용도품(본부) > 폐기          > 본부중요용지일괄폐기
import HSPDU0801P01 from 'app/pages/hsp/HSPDU0801P01';  // 중요용지·용도품(본부) > 폐기          > 본부중요용지일괄폐기 ~ (LP)품목폐지폐기등록
import HSPDU0801P02 from 'app/pages/hsp/HSPDU0801P02';  // 중요용지·용도품(본부) > 폐기          > 본부중요용지일괄폐기 ~ (LP)구양식폐기등록
import HSPDU0801P04 from 'app/pages/hsp/HSPDU0801P04';  // 중요용지·용도품(본부) > 폐기          > 본부중요용지일괄폐기 ~ (LP)폐기취소(본부)

import HSPDU0901M from 'app/pages/hsp/HSPDU0901M';      // 중요용지·용도품(본부) > 폐기          > 본부용도품일괄폐기
import HSPDU0901P01 from 'app/pages/hsp/HSPDU0901P01';  // 중요용지·용도품(본부) > 폐기          > 본부용도품일괄폐기 ~ (LP)용도품폐기
import HSPDU0901P02 from 'app/pages/hsp/HSPDU0901P02';  // 중요용지·용도품(본부) > 폐기          > 본부용도품일괄폐기 ~ (LP)폐기취소(본부)


import HSPHP0101M from 'app/pages/hsp/HSPHP0101M';      // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청
import HSPHP0201M from 'app/pages/hsp/HSPHP0201M';      // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청접수
import HSPHP0301M from 'app/pages/hsp/HSPHP0301M';      // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지검수승인등록
import HSPHP0401M from 'app/pages/hsp/HSPHP0401M';      // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지본부입고
import HSPHP0401P01 from 'app/pages/hsp/HSPHP0401P01';  // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지본부입고 ~ (LP)검수내역조회(총무부외)
import HSPHP0501M from 'app/pages/hsp/HSPHP0501M';      // 중요용지·용도품(본부) > 본부조달관리(총무부외) > (총무부외)중요용지조달신청현황

import HSPSA0101M from 'app/pages/hsp/HSPSA0101M';      // 중요용지·용도품(본부) > 용도품계정관리        > 용도품계정출금내역조회
import HSPSA0201M from 'app/pages/hsp/HSPSA0201M';      // 중요용지·용도품(본부) > 용도품계정관리        > 용도품계정대사

import HSPPC0101M from 'app/pages/hsp/HSPPC0101M';      // 중요용지·용도품(본부) > 대금정산             > 업체직배송품목정산
import HSPPC0101P01 from 'app/pages/hsp/HSPPC0101P01';  // 중요용지·용도품(본부) > 대금정산             > 업체직배송품목정산 ~ (LP)용도품계정기타출금내역검색
import HSPPC0101P02 from 'app/pages/hsp/HSPPC0101P02';  // 중요용지·용도품(본부) > 대금정산             > 업체직배송품목정산 ~ (LP)업체직접배송정산자료생성
import HSPPC0201M from 'app/pages/hsp/HSPPC0201M';      // 중요용지·용도품(본부) > 대금정산             > 수입인지정산
import HSPPC0301M from 'app/pages/hsp/HSPPC0301M';      // 중요용지·용도품(본부) > 대금정산             > 정산내역조회
import HSPPC0401M from 'app/pages/hsp/HSPPC0401M';      // 중요용지·용도품(본부) > 대금정산             > 대금정산품의

import HSPPC0401P01 from 'app/pages/hsp/HSPPC0401P01';  // 중요용지·용도품(본부) > 대금정산             > 대금정산품의 ~ (LP)사업조회
import HSPPC0401P02 from 'app/pages/hsp/HSPPC0401P02';  // 중요용지·용도품(본부) > 대금정산             > 대금정산품의 ~ (LP)항목코드조회
import HSPPC0401P03 from 'app/pages/hsp/HSPPC0401P03';  // 중요용지·용도품(본부) > 대금정산             > 대금정산품의 ~ (LP)CC처리내역선택



// proto 행내등기·우편물
import BEXRQ0101M from 'app/pages/bex/BEXRQ0101M';      // 행내등기·우편물 > 행내등기  > 행내등기신청
import BEXRQ0101P01 from 'app/pages/bex/BEXRQ0101P01';  // 행내등기·우편물 > 행내등기  > 행내등기신청 ~ (LP)인수자즐겨찾기
import BEXRQ0101P02 from 'app/pages/bex/BEXRQ0101P02';  // 행내등기·우편물 > 행내등기  > 행내등기신청 ~ (LP)서류내용관리
import BEXRQ0101P03 from 'app/pages/bex/BEXRQ0101P03';  // 행내등기·우편물 > 행내등기  > 행내등기신청 ~ (LP)인수자일괄추가

import BEXRQ0401M from 'app/pages/bex/BEXRQ0401M';      // 행내등기·우편물 > 행내등기  > 행내등기인수

import BEXRQ0201M from 'app/pages/bex/BEXRQ0201M';      // 행내등기·우편물 > 행내등기  > 행내등기현황관리
import BEXRQ0201P01 from 'app/pages/bex/BEXRQ0201P01';  // 행내등기·우편물 > 행내등기  > 행내등기현황관리 ~ (LP)행내등기STP변경이력
import BEXRQ0201P02 from 'app/pages/bex/BEXRQ0201P02';  // 행내등기·우편물 > 행내등기  > 행내등기현황관리 ~ (LP)여신자필서류(STP)관리
import BEXRQ0201P03 from 'app/pages/bex/BEXRQ0201P03';  // 행내등기·우편물 > 행내등기  > 행내등기현황관리 ~ (LP)행내등기변경이력

import BEXRQ0301M from 'app/pages/bex/BEXRQ0301M';      // 행내등기·우편물 > 행내등기  > 행내등기검수

import BEXRQ0601M from 'app/pages/bex/BEXRQ0601M';      // 행내등기·우편물 > 행내등기  > 행내등기노선관리

import BEXRQ0601P01 from 'app/pages/bex/BEXRQ0601P01';  // 행내등기·우편물 > 행내등기  > 행내등기노선관리 ~ (LP)행내등기노선등록
import BEXRQ0601P02 from 'app/pages/bex/BEXRQ0601P02';  // 행내등기·우편물 > 행내등기  > 행내등기노선관리 ~ (LP)행내등기노선등록

import BEXPM0101M from 'app/pages/bex/BEXPM0101M';      // 행내등기·우편물 > 우편물    > 우편물신청

import BEXPM0201M from 'app/pages/bex/BEXPM0201M';      // 행내등기·우편물 > 우편물    > 우편물신청내역
import BEXPM0601M from 'app/pages/bex/BEXPM0601M';      // 행내등기·우편물 > 우편물    > 우편물대행신청내역
import BEXPM0701M from 'app/pages/bex/BEXPM0701M';      // 행내등기·우편물 > 우편물    > 부점별통신료/환부료관리
import BEXPM0301M from 'app/pages/bex/BEXPM0301M';      // 행내등기·우편물 > 우편물    > 우편물검수
import BEXPM0301P01 from 'app/pages/bex/BEXPM0301P01';  // 행내등기·우편물 > 우편물    > 우편물검수 ~ (LP)우편물일괄검수등록

import BEXPM0401M from 'app/pages/bex/BEXPM0401M';      // 행내등기·우편물 > 우편물    > 우편물처리결과
import BEXPM0501M from 'app/pages/bex/BEXPM0501M';      // 행내등기·우편물 > 우편물    > 등기번호조회

import BEXRM0201M from 'app/pages/bex/BEXRM0201M';      // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장
import BEXRM0201P01 from 'app/pages/bex/BEXRM0201P01';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)등기우편물접수
import BEXRM0201P02 from 'app/pages/bex/BEXRM0201P02';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)등기우편물통보결과
import BEXRM0201P03 from 'app/pages/bex/BEXRM0201P03';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)등기우편물인수정보등록
import BEXRM0201P04 from 'app/pages/bex/BEXRM0201P04';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)등기우편물인수
import BEXRM0201P05 from 'app/pages/bex/BEXRM0201P05';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)서명이미지보기
import BEXRM0201P06 from 'app/pages/bex/BEXRM0201P06';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)로봇배송등록
import BEXRM0201P07 from 'app/pages/bex/BEXRM0201P07';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)알림메시지
import BEXRM0201P08 from 'app/pages/bex/BEXRM0201P08';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)등기우편물거래이력
import BEXRM0201P09 from 'app/pages/bex/BEXRM0201P09';  // 행내등기·우편물 > 등기우편물 > 등기우편물관리대장 ~ (LP)로봇배송취소
import BEXRM0301M from 'app/pages/bex/BEXRM0301M';      // 행내등기·우편물 > 등기우편물 > 등기우편물조회/출력



// proto 재난·안전관리
import STMGD0101M from 'app/pages/stm/STMGD0101M';       // 재난·안전관리 > 기계경비당직관리          > 당직신청관리
import STMGD0101P01 from 'app/pages/stm/STMGD0101P01';   // 재난·안전관리 > 기계경비당직관리          > 당직신청관리 ~ (LP)대직자등록
import STMGD0101P02 from 'app/pages/stm/STMGD0101P02';   // 재난·안전관리 > 기계경비당직관리          > 당직신청관리 ~ (LP)대직자변경이력
import STMGD0101P03 from 'app/pages/stm/STMGD0101P03';   // 재난·안전관리 > 기계경비당직관리          > 당직신청관리 ~ (LP)당직점검표등록
import STMGD0101P04 from 'app/pages/stm/STMGD0101P04';   // 재난·안전관리 > 기계경비당직관리          > 당직신청관리 ~ (LP)당직신청
import STMGD0101P05 from 'app/pages/stm/STMGD0101P05';   // 재난·안전관리 > 기계경비당직관리          > 당직신청관리 ~ (LP)이력조회

import STMGD0201M from 'app/pages/stm/STMGD0201M';       // 재난·안전관리 > 기계경비당직관리          > 당직신청관리(관리자)
import STMGD0301M from 'app/pages/stm/STMGD0301M';       // 재난·안전관리 > 기계경비당직관리          > 당직비정산
import STMGD0301P01 from 'app/pages/stm/STMGD0301P01';   // 재난·안전관리 > 기계경비당직관리          > 당직비정산 ~ (LP)직원별당직비산정결과
import STMGD0301P02 from 'app/pages/stm/STMGD0301P02';   // 재난·안전관리 > 기계경비당직관리          > 당직비정산 ~ (LP)부점별당직비산정결과

import STMGD0401M from 'app/pages/stm/STMGD0401M';       // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리
import STMGD0401P01 from 'app/pages/stm/STMGD0401P01';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)대직자등록
import STMGD0401P02 from 'app/pages/stm/STMGD0401P02';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)대직자변경이력
import STMGD0401P03 from 'app/pages/stm/STMGD0401P03';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)당직점검표등록
import STMGD0401P04 from 'app/pages/stm/STMGD0401P04';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)명령부 초기화
import STMGD0401P05 from 'app/pages/stm/STMGD0401P05';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)이력조회
import STMGD0401P06 from 'app/pages/stm/STMGD0401P06';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리 ~ (LP)명령부등록

import STMGD0501M from 'app/pages/stm/STMGD0501M';       // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리(관리자)
import STMGD0501P01 from 'app/pages/stm/STMGD0501P01';   // 재난·안전관리 > 기계경비당직관리          > 기계경비보안관리(관리자) ~ (LP)명령부복수부점관리

import STMGD0601M from 'app/pages/stm/STMGD0601M';       // 재난·안전관리 > 기계경비당직관리          > 월세팅비정산
import STMGD0601P01 from 'app/pages/stm/STMGD0601P01';   // 재난·안전관리 > 기계경비당직관리          > 월세팅비정산 ~ (LP)부점별세팅비산정결과

import STMGD0701M from 'app/pages/stm/STMGD0701M';       // 재난·안전관리 > 기계경비당직관리          > SET시각등록

import STMVL0101M from 'app/pages/stm/STMVL0101M';       // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회
import STMVL0101P01 from 'app/pages/stm/STMVL0101P01';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)등록기간관리
import STMVL0101P02 from 'app/pages/stm/STMVL0101P02';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)차량별관리자지정
import STMVL0101P03 from 'app/pages/stm/STMVL0101P03';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)임대회사관리
import STMVL0101P04 from 'app/pages/stm/STMVL0101P04';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)임대회사정보등록
import STMVL0101P05 from 'app/pages/stm/STMVL0101P05';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)임대회사연락처

import STMVL0101P06 from 'app/pages/stm/STMVL0101P06';   // 재난·안전관리 > 업무용차량관리(운행일지등) > 운행일지등록/조회  ~ (LP)수정기간등록

import STMVL0201M from 'app/pages/stm/STMVL0201M';       // 재난·안전관리 > 업무용차량관리(운행일지등) > 미등록운행일지알람

import STMDM0101M from 'app/pages/stm/STMDM0101M';       // 재난·안전관리 > 배차관리                > 배차신청
import STMDM0101P01 from 'app/pages/stm/STMDM0101P01';   // 재난·안전관리 > 배차관리                > 배차신청 ~ (LP)배차신청유의사항
import STMDM0101P02 from 'app/pages/stm/STMDM0101P02';   // 재난·안전관리 > 배차관리                > 배차신청 ~ (LP)배차신청결재상태
import STMDM0201M from 'app/pages/stm/STMDM0201M';       // 재난·안전관리 > 배차관리                > 배차이력
import STMDM0301M from 'app/pages/stm/STMDM0301M';       // 재난·안전관리 > 배차관리                > 배차관리
import STMDM0301P01 from 'app/pages/stm/STMDM0301P01';   // 재난·안전관리 > 배차관리                > 배차관리 ~ (LP)배차등록
import STMDM0301P02 from 'app/pages/stm/STMDM0301P02';   // 재난·안전관리 > 배차관리                > 배차관리 ~ (LP)반납완료등록
import STMDM0401M from 'app/pages/stm/STMDM0401M';       // 재난·안전관리 > 배차관리                > 차량관리
import STMDM0401P02 from 'app/pages/stm/STMDM0401P02';   // 재난·안전관리 > 배차관리                > 차량관리 ~ (LP)차종조회
import STMDM0401P03 from 'app/pages/stm/STMDM0401P03';   // 재난·안전관리 > 배차관리                > 차량관리 ~ (LP)차종팝업

import STMGI0101M from 'app/pages/stm/STMGI0101M';       // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장
import STMGI0101P01 from 'app/pages/stm/STMGI0101P01';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장 ~ (LP)수정
import STMGI0101P02 from 'app/pages/stm/STMGI0101P02';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장 ~ (LP)반납요청
import STMGI0101P03 from 'app/pages/stm/STMGI0101P03';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장 ~ (LP)인수등록
import STMGI0101P04 from 'app/pages/stm/STMGI0101P04';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장 ~ (LP)사고신고

import STMGI0201M from 'app/pages/stm/STMGI0201M';       // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장(관리자)
import STMGI0201P01 from 'app/pages/stm/STMGI0201P01';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장(관리자) ~ (LP)폐기등록
import STMGI0201P02 from 'app/pages/stm/STMGI0201P02';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장(관리자) ~ (LP)인도등록
import STMGI0201P03 from 'app/pages/stm/STMGI0201P03';   // 재난·안전관리 > 가스분사기대장관리        > 가스분사기관리대장(관리자) ~ (LP)사고접수

import STMGI0301M from 'app/pages/stm/STMGI0301M';       // 재난·안전관리 > 가스분사기대장관리        > 가스분사기이력조회


import STMBR0101M from 'app/pages/stm/STMBR0101M';       // 재난·안전관리 > 버스배차신청             > 배차신청
import STMBR0101P01 from 'app/pages/stm/STMBR0101P01';   // 재난·안전관리 > 버스배차신청             > 배차신청 ~ (LP)일괄신청하기
import STMBR0101P03 from 'app/pages/stm/STMBR0101P03';   // 재난·안전관리 > 버스배차신청             > 배차신청 ~ (LP)배차정보등록
import STMBR0101P02 from 'app/pages/stm/STMBR0101P02';   // 재난·안전관리 > 버스배차신청             > 배차신청 ~ (LP)배차결과
import STMBR0201M from 'app/pages/stm/STMBR0201M';       // 재난·안전관리 > 버스배차신청             > 배차일정표
import STMBR0201P01 from 'app/pages/stm/STMBR0201P01';   // 재난·안전관리 > 버스배차신청             > 배차일정표 ~ (LP)일정더보기
import STMBR0201P02 from 'app/pages/stm/STMBR0201P02';   // 재난·안전관리 > 버스배차신청             > 배차일정표 ~ (LP)일정상세보기
import STMBR0301M from 'app/pages/stm/STMBR0301M';       // 재난·안전관리 > 버스배차신청             > 배차집계
import STMBR0301P01 from 'app/pages/stm/STMBR0301P01';   // 재난·안전관리 > 버스배차신청             > 배차집계  ~ (LP)단가표

import STMPR0101M from 'app/pages/stm/STMPR0101M';       // 재난·안전관리 > 출입증/방문증            > 출입증신청
import STMPR0101P01 from 'app/pages/stm/STMPR0101P01';   // 재난·안전관리 > 출입증/방문증            > 출입증신청 ~ (LP)반려내역불러오기
import STMPR0101P02 from 'app/pages/stm/STMPR0101P02';   // 재난·안전관리 > 출입증/방문증            > 출입증신청 ~ (LP)하남IT센터신청안내
import STMPR0201M from 'app/pages/stm/STMPR0201M';       // 재난·안전관리 > 출입증/방문증            > 출입증신청내역
import STMPR0301M from 'app/pages/stm/STMPR0301M';       // 재난·안전관리 > 출입증/방문증            > 출입증현황관리
import STMPR0301P01 from 'app/pages/stm/STMPR0301P01';   // 재난·안전관리 > 출입증/방문증            > 출입증현황관리 ~ (LP)기간연장
import STMPR0301P02 from 'app/pages/stm/STMPR0301P02';   // 재난·안전관리 > 출입증/방문증            > 출입증현황관리 ~ (LP)출입구역변경
import STMPR0301P03 from 'app/pages/stm/STMPR0301P03';   // 재난·안전관리 > 출입증/방문증            > 출입증현황관리 ~ (LP)재발급
import STMPR0301P04 from 'app/pages/stm/STMPR0301P04';   // 재난·안전관리 > 출입증/방문증            > 출입증현황관리 ~ (LP)출입증반납
import STMPR0301P05 from 'app/pages/stm/STMPR0301P05';   // 재난·안전관리 > 출입증/방문증            > 출입증현황관리 ~ (LP)방문증분실(미반납)
import STMPR0401M from 'app/pages/stm/STMPR0401M';       // 재난·안전관리 > 출입증/방문증            > 부서행사용방문증신청
import STMPR0501M from 'app/pages/stm/STMPR0501M';       // 재난·안전관리 > 출입증/방문증            > 부서행사용방문증현황관리
import STMPR0501P01 from 'app/pages/stm/STMPR0501P01';   // 재난·안전관리 > 출입증/방문증            > 부서행사용방문증현황관리 ~ (LP)반납
import STMPR0501P02 from 'app/pages/stm/STMPR0501P02';   // 재난·안전관리 > 출입증/방문증            > 부서행사용방문증현황관리 ~ (LP)방문증분실(미반납)
import STMPR0501P03 from 'app/pages/stm/STMPR0501P03';   // 재난·안전관리 > 출입증/방문증            > 부서행사용방문증현황관리 ~ (LP)방문증번호관리

import STMSE0101M from 'app/pages/stm/STMSE0101M';       // 재난·안전관리 > 안전점검의날점검표        > 점검표등록
import STMSE0101P01 from 'app/pages/stm/STMSE0101P01';   // 재난·안전관리 > 안전점검의날점검표        > 점검표등록 ~ (LP)점검표등록
import STMSE0201M from 'app/pages/stm/STMSE0201M';       // 재난·안전관리 > 안전점검의날점검표        > 점검표등록현황
import STMSE0201P01 from 'app/pages/stm/STMSE0201P01';   // 재난·안전관리 > 안전점검의날점검표        > 점검표등록현황 ~ (LP)점검표생성

import STMPE0101M from 'app/pages/stm/STMPE0101M';       // 재난·안전관리 > 보안진단의날점검표        > 점검표등록
import STMPE0101P01 from 'app/pages/stm/STMPE0101P01';   // 재난·안전관리 > 보안진단의날점검표        > 점검표등록 ~ (LP)점검표등록
import STMPE0201M from 'app/pages/stm/STMPE0201M';       // 재난·안전관리 > 보안진단의날점검표        > 점검표등록현황

import STMAS0101M from 'app/pages/stm/STMAS0101M';       // 재난·안전관리 > 자율보안체계             > 보안업무세부추진계획
import STMAS0201P01 from 'app/pages/stm/STMAS0201P01';   // 재난·안전관리 > 자율보안체계             > 보안업무세부추진계획현황 ~ (LP)등록기한관리

import STMAS0201M from 'app/pages/stm/STMAS0201M';       // 재난·안전관리 > 자율보안체계             > 보안업무세부추진계획현황
import STMAS0301M from 'app/pages/stm/STMAS0301M';       // 재난·안전관리 > 자율보안체계             > 보안업무심사분석
import STMAS0401M from 'app/pages/stm/STMAS0401M';       // 재난·안전관리 > 자율보안체계             > 보안업무심사분석현황
import STMHA0101M from 'app/pages/stm/STMHA0101M';       // 재난·안전관리 > 자율보안체계             > 위기상황시대응조편성
import STMHA0201M from 'app/pages/stm/STMHA0201M';       // 재난·안전관리 > 자율보안체계             > 위기상황시대응조편성현황
import STMHA0301M from 'app/pages/stm/STMHA0301M';       // 재난·안전관리 > 자율보안체계             > 위기상황시대응조편성현황
import STMHA0401M from 'app/pages/stm/STMHA0401M';       // 재난·안전관리 > 자율보안체계             > 분임보안담당관인수인계서현황

import STMSC0101M from 'app/pages/stm/STMSC0101M';       // 재난·안전관리 > 도급사업관리             > 도급계약 현황 등록
import STMSC0101P01 from 'app/pages/stm/STMSC0101P01';   // 재난·안전관리 > 도급사업관리             > 도급계약 현황 등록 ~ (LP)도급사업체크리스트
import STMSC0101P02 from 'app/pages/stm/STMSC0101P02';   // 재난·안전관리 > 도급사업관리             > 도급계약 현황 등록 ~ (LP)참고
import STMSC0201M from 'app/pages/stm/STMSC0201M';       // 재난·안전관리 > 도급사업관리             > 도급계약 현황 확인
import STMSC0301M from 'app/pages/stm/STMSC0301M';       // 재난·안전관리 > 도급사업관리             > 안전보건협의체 회의록
import STMSC0401M from 'app/pages/stm/STMSC0401M';       // 재난·안전관리 > 도급사업관리             > 순회점검표 등록

import STMSC0601M from 'app/pages/stm/STMSC0601M';       // 재난·안전관리 > 도급사업관리             > 합동점검표 등록
import STMSC0401P01 from 'app/pages/stm/STMSC0401P01';   // 재난·안전관리 > 도급사업관리             > 순회점검표 등록 ~ (LP)순회점검표 등록
import STMSC0601P01 from 'app/pages/stm/STMSC0601P01';   // 재난·안전관리 > 도급사업관리             > 합동점검표 등록 ~ (LP)합동점검표 등록

import STMKY0101M from 'app/pages/stm/STMKY0101M';       // 재난·안전관리 > 열쇠관리                 > 열쇠종류관리
import STMKY0201M from 'app/pages/stm/STMKY0201M';       // 재난·안전관리 > 열쇠관리                 > 열쇠등록관리
import STMKY0201P01 from 'app/pages/stm/STMKY0201P01';   // 재난·안전관리 > 열쇠관리                 > 열쇠등록관리 ~ (LP)열쇠이미지확대
import STMKY0201P02 from 'app/pages/stm/STMKY0201P02';   // 재난·안전관리 > 열쇠관리                 > 열쇠등록관리 ~ (LP)열쇠폐기
import STMKY0201P03 from 'app/pages/stm/STMKY0201P03';   // 재난·안전관리 > 열쇠관리                 > 열쇠등록관리 ~ (LP)열쇠별보관담당자
import STMKY0301M from 'app/pages/stm/STMKY0301M';       // 재난·안전관리 > 열쇠관리                 > 열쇠인수도관리
import STMKY0301P03 from 'app/pages/stm/STMKY0301P03';   // 재난·안전관리 > 열쇠관리                 > 열쇠인수도관리 ~ (LP)과거내역조회
import STMKY0301P01 from 'app/pages/stm/STMKY0301P01';   // 재난·안전관리 > 열쇠관리                 > 열쇠인수도관리 ~ (LP)열쇠인수도취소
import STMKY0301P02 from 'app/pages/stm/STMKY0301P02';   // 재난·안전관리 > 열쇠관리                 > 열쇠인수도관리 ~ (LP)사용열쇠(보관담당자)예외승인안내
import STMKY0401M from 'app/pages/stm/STMKY0401M';       // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리
import STMKY0401P01 from 'app/pages/stm/STMKY0401P01';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)열쇠이미지보기
import STMKY0401P02 from 'app/pages/stm/STMKY0401P02';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)예비열쇠위탁요청
import STMKY0401P04 from 'app/pages/stm/STMKY0401P04';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)위탁열쇠반납요청
import STMKY0401P06 from 'app/pages/stm/STMKY0401P06';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)예비열쇠위탁승인
import STMKY0401P08 from 'app/pages/stm/STMKY0401P08';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)위탁열쇠반납승인
import STMKY0401P10 from 'app/pages/stm/STMKY0401P10';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)예비열쇠보관확인증관리
import STMKY0501P02 from 'app/pages/stm/STMKY0501P02';   // 재난·안전관리 > 열쇠관리                 > 예비열쇠관리 ~ (LP)위탁확인증
import STMKY0601M from 'app/pages/stm/STMKY0601M';       // 재난·안전관리 > 열쇠관리                 > 관련조회 및 출력

import STMFL0101M from 'app/pages/stm/STMFL0101M';       // 재난·안전관리 > 소방안전관리              > 소화기신청
import STMFL0201M from 'app/pages/stm/STMFL0201M';       // 재난·안전관리 > 소방안전관리              > 소화기관리대장
import STMFL0201P02 from 'app/pages/stm/STMFL0201P02';   // 재난·안전관리 > 소방안전관리              > 소화기관리대장 ~ (LP)소화기관리이력
import STMFL0201P03 from 'app/pages/stm/STMFL0201P03';   // 재난·안전관리 > 소방안전관리              > 소화기관리대장 ~ (LP)소화기폐기
import STMFL0401M from 'app/pages/stm/STMFL0401M';       // 재난·안전관리 > 소방안전관리              > 자위소방대편성표
import STMFL0501M from 'app/pages/stm/STMFL0501M';       // 재난·안전관리 > 소방안전관리              > 자위소방대편성표현황



// proto 영업지원
import BSSAP0101M from 'app/pages/bss/BSSAP0101M';     // 영업지원 > A4용지관리             > 용지신청
import BSSAP0201M from 'app/pages/bss/BSSAP0201M';     // 영업지원 > A4용지관리             > A4용지인수
import BSSAP0201P01 from 'app/pages/bss/BSSAP0201P01'; // 영업지원 > A4용지관리             > A4용지인수 ~ (LP)배송업체관리
import BSSAP0201P02 from 'app/pages/bss/BSSAP0201P02'; // 영업지원 > A4용지관리             > A4용지인수 ~ (LP)배송업체정보

import BSSDM0101M from 'app/pages/bss/BSSDM0101M';     // 영업지원 > 문서관리	              > 문서열람신청
import BSSDM0201M from 'app/pages/bss/BSSDM0201M';     // 영업지원 > 문서관리	              > 문서대량폐기
import BSSDM0201P01 from 'app/pages/bss/BSSDM0201P01'; // 영업지원 > 문서관리	              > 문서대량폐기 ~ (LP)대량폐기승인
import BSSDM0201P02 from 'app/pages/bss/BSSDM0201P02'; // 영업지원 > 문서관리	              > 문서대량폐기 ~ (LP)대량폐기정산
import BSSDM0201P03 from 'app/pages/bss/BSSDM0201P03'; // 영업지원 > 문서관리	              > 문서대량폐기 ~ (LP)대량폐기정보입력
import BSSDM0201P04 from 'app/pages/bss/BSSDM0201P04'; // 영업지원 > 문서관리	              > 문서대량폐기 ~ (LP)대량폐기반려

import BSSLQ0201M from 'app/pages/bss/BSSLQ0201M';     // 영업지원 > 대량신규               > 대량신규신청
import BSSLQ0101M from 'app/pages/bss/BSSLQ0101M';     // 영업지원 > 대량신규               > 대량신규승인
import BSSLQ0101P01 from 'app/pages/bss/BSSLQ0101P01'; // 영업지원 > 대량신규               > 대량신규승인 ~ (LP)대량신규승인
import BSSLQ0101P02 from 'app/pages/bss/BSSLQ0101P02'; // 영업지원 > 대량신규               > 대량신규승인 ~ (LP)대량신규승인취소
import BSSLQ0101P03 from 'app/pages/bss/BSSLQ0101P03'; // 영업지원 > 대량신규               > 대량신규승인 ~ (LP)업무완료
import BSSLQ0101P04 from 'app/pages/bss/BSSLQ0101P04'; // 영업지원 > 대량신규               > 대량신규승인 ~ (LP)반려좌수상세보기
import BSSLQ0301M from 'app/pages/bss/BSSLQ0301M';     // 영업지원 > 대량신규               > 대량신규현황
import BSSLQ0301P01 from 'app/pages/bss/BSSLQ0301P01'; // 영업지원 > 대량신규               > 대량신규현황 ~ (LP)대량신규현황


import BSSRM0101M from 'app/pages/bss/BSSRM0101M';     // 영업지원 > 토지보상우편물         > 토지보상우편물
import BSSRM0101P01 from 'app/pages/bss/BSSRM0101P01'; // 영업지원 > 토지보상우편물         > 토지보상우편물 ~ (LP)공지(메모/알림)관리
import BSSRM0101P02 from 'app/pages/bss/BSSRM0101P02'; // 영업지원 > 토지보상우편물         > 토지보상우편물 ~ (LP)이관등록
import BSSRM0101P03 from 'app/pages/bss/BSSRM0101P03'; // 영업지원 > 토지보상우편물         > 토지보상우편물 ~ (LP)이관취소
import BSSRM0101P04 from 'app/pages/bss/BSSRM0101P04'; // 영업지원 > 토지보상우편물         > 토지보상우편물 ~ (LP)인수등록
import BSSRM0101P05 from 'app/pages/bss/BSSRM0101P05'; // 영업지원 > 토지보상우편물         > 토지보상우편물 ~ (LP)인수취소

import BSSRM0201M from 'app/pages/bss/BSSRM0201M';     // 영업지원 > 토지보상우편물         > 토지보상우편물(본부)
import BSSRM0201P01 from 'app/pages/bss/BSSRM0201P01'; // 영업지원 > 토지보상우편물         > 토지보상우편물(본부) ~ (LP)스캔이미지등록
import BSSRM0201P02 from 'app/pages/bss/BSSRM0201P02'; // 영업지원 > 토지보상우편물         > 토지보상우편물(본부) ~ (LP)BPR스캔내역조회

import BSSTN0101M from 'app/pages/bss/BSSTN0101M';     // 영업지원 > 채권양도통지(B2B팩토링) > 채권양도통지(B2B팩토링)
import BSSTN0101P01 from 'app/pages/bss/BSSTN0101P01'; // 영업지원 > 채권양도통지(B2B팩토링) > 채권양도통지(B2B팩토링) ~ (LP)등기번호등록
import BSSTN0101P04 from 'app/pages/bss/BSSTN0101P04'; // 영업지원 > 채권양도통지(B2B팩토링) > 채권양도통지(B2B팩토링) ~ (LP)등기번호수정
import BSSTN0101P02 from 'app/pages/bss/BSSTN0101P02'; // 영업지원 > 채권양도통지(B2B팩토링) > 채권양도통지(B2B팩토링) ~ (LP)채권양도일괄검수등록
import BSSTN0101P03 from 'app/pages/bss/BSSTN0101P03'; // 영업지원 > 채권양도통지(B2B팩토링) > 채권양도통지(B2B팩토링) ~ (LP)채권양도행내등기신청

import BSSCR0101M from 'app/pages/bss/BSSCR0101M';     // 영업지원 > 캘린더신청             > 신청기간관리
import BSSCR0101P01 from 'app/pages/bss/BSSCR0101P01'; // 영업지원 > 캘린더신청             > 신청기간관리 ~ (LP)공지이미지관리
import BSSCR0101P02 from 'app/pages/bss/BSSCR0101P02'; // 영업지원 > 캘린더신청             > 신청기간관리 ~ (LP)달력카테고리관리
import BSSCR0101P03 from 'app/pages/bss/BSSCR0101P03'; // 영업지원 > 캘린더신청             > 신청기간관리 ~ (LP)부점선택
import BSSCR0201M from 'app/pages/bss/BSSCR0201M';     // 영업지원 > 캘린더신청             > 신청관리
import BSSCR0301M from 'app/pages/bss/BSSCR0301M';     // 영업지원 > 캘린더신청             > 배송·인수관리
import BSSCR0301P01 from 'app/pages/bss/BSSCR0301P01'; // 영업지원 > 캘린더신청             > 배송·인수관리 ~ (LP)배송업체정보
import BSSCR0301P02 from 'app/pages/bss/BSSCR0301P02'; // 영업지원 > 캘린더신청             > 배송·인수관리 ~ (LP)연도별배송수량참고
import BSSCR0301P03 from 'app/pages/bss/BSSCR0301P03'; // 영업지원 > 캘린더신청             > 배송·인수관리 ~ (LP)인수증확인
import BSSCR0301P04 from 'app/pages/bss/BSSCR0301P04'; // 영업지원 > 캘린더신청             > 배송·인수관리 ~ (LP)고객배송정보
import BSSCR0401M from 'app/pages/bss/BSSCR0401M';     // 영업지원 > 캘린더신청             > 신청내역조회
import BSSCR0501M from 'app/pages/bss/BSSCR0501M';     // 영업지원 > 캘린더신청             > 배부수량관리

import BSSFM0101M from 'app/pages/bss/BSSFM0101M';     // 영업지원 > 서식장부관리           > 출급번호관리
import BSSFM0101P01 from 'app/pages/bss/BSSFM0101P01'; // 영업지원 > 서식장부관리           > 출급번호관리 ~ (LP)변경이력
import BSSFM0101P02 from 'app/pages/bss/BSSFM0101P02'; // 영업지원 > 서식장부관리           > 출급번호관리 ~ (LP)출급번호분류관리
import BSSFM0201M from 'app/pages/bss/BSSFM0201M';     // 영업지원 > 서식장부관리           > 서식코드관리
import BSSFM0201P01 from 'app/pages/bss/BSSFM0201P01'; // 영업지원 > 서식장부관리           > 서식코드관리 ~ (LP)변경이력

import BSSTI0101M from 'app/pages/bss/BSSTI0101M';     // 영업지원 > 연수원                > 연수원품목정보관리
import BSSTI0201M from 'app/pages/bss/BSSTI0201M';     // 영업지원 > 연수원                > 연수원품목입출고등록
import BSSTI0301M from 'app/pages/bss/BSSTI0301M';     // 영업지원 > 연수원                > 연수원품목입출고취소
import BSSTI0401M from 'app/pages/bss/BSSTI0401M';     // 영업지원 > 연수원                > 연수원입출고내역조회
import BSSTI0501M from 'app/pages/bss/BSSTI0501M';     // 영업지원 > 연수원                > 연수원품목재고조회
import BSSPE0101M from 'app/pages/bss/BSSPE0101M';     // 영업지원 > 제안서평가위원선정      > 제안서평가위원회생성
import BSSPE0201M from 'app/pages/bss/BSSPE0201M';     // 영업지원 > 제안서평가위원선정      > 제안서평가위원위촉


// proto 수수료관리
import FEMDA0101M from 'app/pages/fem/FEMDA0101M';      // 수수료관리 > 물류대행수수료 > 계약서관리
import FEMDA0101P01 from 'app/pages/fem/FEMDA0101P01';  // 수수료관리 > 물류대행수수료 > 계약서관리       ~ (LP)중도해지
import FEMDA0201M from 'app/pages/fem/FEMDA0201M';      // 수수료관리 > 물류대행수수료 > 지급결의
import FEMDA0201P01 from 'app/pages/fem/FEMDA0201P01';  // 수수료관리 > 물류대행수수료 > 지급결의         ~ (LP)계약정보불러오기
import FEMDA0201P02 from 'app/pages/fem/FEMDA0201P02';  // 수수료관리 > 물류대행수수료 > 지급결의         ~ (LP)세금계산서불러오기
import FEMDA0201P03 from 'app/pages/fem/FEMDA0201P03';  // 수수료관리 > 물류대행수수료 > 지급결의         ~ (LP)세금계산서보기
import FEMDA0201P04 from 'app/pages/fem/FEMDA0201P04';  // 수수료관리 > 물류대행수수료 > 지급결의         ~ (LP)지급결의취소

import FEMCT0101M from 'app/pages/fem/FEMCT0101M';      // 수수료관리 > 자금현수송수수료 > 계약서관리
import FEMCT0101P01 from 'app/pages/fem/FEMCT0101P01';  // 수수료관리 > 자금현수송수수료 > 계약서관리       ~ (LP)중도해지
import FEMCT0201M from 'app/pages/fem/FEMCT0201M';      // 수수료관리 > 자금현수송수수료 > 월별금액검증
import FEMCT0201P01 from 'app/pages/fem/FEMCT0201P01';  // 수수료관리 > 자금현수송수수료 > 월별금액검증     ~ (LP)월별지급검증등록
import FEMCT0201P02 from 'app/pages/fem/FEMCT0201P02';  // 수수료관리 > 자금현수송수수료 > 월별금액검증     ~ (LP)지급상세검증
import FEMCT0201P03 from 'app/pages/fem/FEMCT0201P03';  // 수수료관리 > 자금현수송수수료 > 월별금액검증     ~ (LP)세금계산서불러오기
import FEMCT0201P04 from 'app/pages/fem/FEMCT0201P04';  // 수수료관리 > 자금현수송수수료 > 월별금액검증     ~ (LP)세금계산서보기
import FEMCT0201P05 from 'app/pages/fem/FEMCT0201P05';  // 수수료관리 > 자금현수송수수료 > 월별금액검증     ~ (LP)월별요약

import FEMCT0301P01 from 'app/pages/fem/FEMCT0301P01';  // 수수료관리 > 자금현수송수수료 > 지급결의     ~ (LP)지급결의취소

import FEMCT0301M from 'app/pages/fem/FEMCT0301M';      // 수수료관리 > 자금현수송수수료 > 지급결의
import FEMCT0401M from 'app/pages/fem/FEMCT0401M';      // 수수료관리 > 자금현수송수수료 > 현송금송부서관리
import FEMCT0401P01 from 'app/pages/fem/FEMCT0401P01';  // 수수료관리 > 자금현수송수수료 > 현송금송부서관리 ~ (LP)과거내역조회

import FEMCC0101M from 'app/pages/fem/FEMCC0101M';      // 수수료관리 > 원화정사수수료 > 계약서관리
import FEMCC0101P01 from 'app/pages/fem/FEMCC0101P01';  // 수수료관리 > 원화정사수수료 > 계약서관리       ~ (LP)중도해지
import FEMCC0201M from 'app/pages/fem/FEMCC0201M';      // 수수료관리 > 원화정사수수료 > 지급결의
import FEMCC0201P01 from 'app/pages/fem/FEMCC0201P01';  // 수수료관리 > 원화정사수수료 > 지급결의         ~ (LP)계약정보불러오기
import FEMCC0201P02 from 'app/pages/fem/FEMCC0201P02';  // 수수료관리 > 원화정사수수료 > 지급결의         ~ (LP)지급수수료상세등록
import FEMCC0201P03 from 'app/pages/fem/FEMCC0201P03';  // 수수료관리 > 원화정사수수료 > 지급결의         ~ (LP)세금계산서불러오기
import FEMCC0201P04 from 'app/pages/fem/FEMCC0201P04';  // 수수료관리 > 원화정사수수료 > 지급결의         ~ (LP)세금계산서보기

import FEMCC0201P05 from 'app/pages/fem/FEMCC0201P05';  // 수수료관리 > 원화정사수수료 > 지급결의     ~ (LP)지급결의취소

// proto 공통·결재
import ADMCM0101M from 'app/pages/adm/ADMCM0101M';      // 공통·결재 > 코드관리    > 공통코드관리

import ADMSM0101M from 'app/pages/adm/ADMSM0101M';      // 공통·결재 > 결재관리    > 결재내역관리
import ADMSM0101P01 from 'app/pages/adm/ADMSM0101P01';  // 공통·결재 > 결재관리    > 결재내역관리 ~ (LP)변경이력

import ADMPA0101M from 'app/pages/adm/ADMPA0101M';      // 공통·결재 > 인사정보    > 부점관리
import ADMPA0201M from 'app/pages/adm/ADMPA0201M';      // 공통·결재 > 인사정보    > 팀정보관리
import ADMPA0301M from 'app/pages/adm/ADMPA0301M';      // 공통·결재 > 인사정보    > 직원관리
import ADMPA0301P01 from 'app/pages/adm/ADMPA0301P01';  // 공통·결재 > 인사정보    > 직원관리 ~ (LP)직무분장관리
import ADMPA0301P02 from 'app/pages/adm/ADMPA0301P02';  // 공통·결재 > 인사정보    > 직원관리 ~ (LP)변경이력
import ADMPA0401M from 'app/pages/adm/ADMPA0401M';      // 공통·결재 > 인사정보    > 외주직원관리
import ADMPA0501M from 'app/pages/adm/ADMPA0501M';      // 공통·결재 > 인사정보    > 업무담당자문의처관리
import ADMPA0601M from 'app/pages/adm/ADMPA0601M';      // 공통·결재 > 인사정보    > 실근무지관리
import ADMPA0601P01 from 'app/pages/adm/ADMPA0601P01';  // 공통·결재 > 인사정보    > 직원관리 ~ (LP)실근무지조회

import ADMAU0101M from 'app/pages/adm/ADMAU0101M';      // 공통·결재 > 권한관리    > 생성관리 > (T)메뉴관리
import ADMAU0101P01 from 'app/pages/adm/ADMAU0101P01';  // 공통·결재 > 권한관리    > 생성관리 > (T)메뉴관리 ~ (LP)상위메뉴선택
import ADMAU0102M from 'app/pages/adm/ADMAU0102M';      // 공통·결재 > 권한관리    > 생성관리 > (T)화면관리
// import ADMAU0102P01 from 'app/pages/adm/ADMAU0102P01';  // 공통·결재 > 권한관리 > 생성관리 > (T)화면관리 ~ (LP)미리보기
import ADMAU0103M from 'app/pages/adm/ADMAU0103M';      // 공통·결재 > 권한관리    > 생성관리 > (T)팝업관리
import ADMAU0104M from 'app/pages/adm/ADMAU0104M';      // 공통·결재 > 권한관리    > 생성관리 > (T)권한관리
import ADMAU0201M from 'app/pages/adm/ADMAU0201M';      // 공통·결재 > 권한관리    > 매핑관리 > (T)메뉴별 화면관리
import ADMAU0201P01 from 'app/pages/adm/ADMAU0201P01';  // 공통·결재 > 권한관리    > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)화면매핑
import ADMAU0201P02 from 'app/pages/adm/ADMAU0201P02';  // 공통·결재 > 권한관리    > 매핑관리 > (T)메뉴별 화면관리 ~ (LP)관련화면매핑
import ADMAU0202M from 'app/pages/adm/ADMAU0202M';      // 공통·결재 > 권한관리    > 매핑관리 > (T)권한별 메뉴/팝업관리
import ADMAU0203M from 'app/pages/adm/ADMAU0203M';      // 공통·결재 > 권한관리    > 매핑관리 > (T)부점/부서별 권한관리
import ADMAU0204M from 'app/pages/adm/ADMAU0204M';      // 공통·결재 > 권한관리    > 매핑관리 > (T)사용자별 권한관리

import ADMAU0301M from 'app/pages/adm/ADMAU0301M';      // 공통·결재 > 권한관리    > 비밀번호변경

import ADMAC0101M from 'app/pages/adm/ADMAC0101M';      // 공통·결재 > 권한위임    > 부점별 권한위임
import ADMAC0201M from 'app/pages/adm/ADMAC0201M';      // 공통·결재 > 권한위임    > 사용자별 권한관리

import ADMAM0101M from 'app/pages/adm/ADMAM0101M';      // 공통·결재 > 알림관리    > 알림메시지관리
import ADMAM0101P01 from 'app/pages/adm/ADMAM0101P01';  // 공통·결재 > 알림관리    > 알림메시지관리 ~ (LP)알림수신제외직원등록

import ADMTI0101M from 'app/pages/adm/ADMTI0101M';      // 공통·결재 > 거래정보관리 > 거래정보관리

import ADMPH0101M from 'app/pages/adm/ADMPH0101M';      // 공통·결재 > 휴일관리     > 영업일/휴일등록

import ADMOA0101M from 'app/pages/adm/ADMOA0101M';      // 공통·결재 > 운영관리     > 거래로그관리
import ADMOA0201M from 'app/pages/adm/ADMOA0201M';      // 공통·결재 > 운영관리     > 전문로그관리
import ADMOA0301M from 'app/pages/adm/ADMOA0301M';      // 공통·결재 > 운영관리     > 원장수정관리
import ADMOA0401M from 'app/pages/adm/ADMOA0401M';      // 공통·결재 > 운영관리     > 배치모니터링관리

import ADMRC0101M from 'app/pages/adm/ADMRC0101M';      // 공통·결재 > 대사관리	     > 중요용지사용내역대사
import ADMRC0201M from 'app/pages/adm/ADMRC0201M';      // 공통·결재 > 대사관리	     > 중요용지잔량대사
import ADMRC0301M from 'app/pages/adm/ADMRC0301M';      // 공통·결재 > 대사관리	     > 창구로인도(비호스트)
import ADMRC0401M from 'app/pages/adm/ADMRC0401M';      // 공통·결재 > 대사관리	     > 대금정산모니터링
import ADMRC0401P01 from 'app/pages/adm/ADMRC0401P01';  // 공통·결재 > 대사관리      > 대금정산모니터링 ~ (LP)대금정산상세

import ADMRC0501M from 'app/pages/adm/ADMRC0501M';      // 공통·결재 > 대사관리	     > 수입인지정산모니터링
import ADMNT0101M from 'app/pages/adm/ADMNT0101M';      // 공통·결재 > 공지사항
import ADMQA0101M from 'app/pages/adm/ADMQA0101M';      // 공통·결재 > Q/A

function ProtoRoutes() {
  return useRoutes([
    {
      path: '/test',
      children: [
        { path: 'LoadingBar', element: <LoadingBar /> },
        { path: 'SUBTMPL', element: <SUBTMPL /> },
      ],
    },
    {
      path: '/test',
      element: <Decorator />,
      children: [
        { path: 'SurveyForms', element: <SurveyForms /> },
        { path: 'FileUploads', element: <FileUploads /> },
        { path: 'DialogPopup', element: <DialogPopup /> },
        { path: 'POPTMPL',     element: <POPTMPL /> },
        { path: 'TMPL',        element: <TMPL /> },
        { path: 'DEX',         element: <DEX /> },
        { path: 'ING',         element: <ING /> },
      ],
    },
    { // 공통
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'CMM000301M', element: <CMM000301M /> },

        { path: 'CMP000101P', element: <CMP000101P /> },
        { path: 'CMP000102P', element: <CMP000102P /> },
        { path: 'CMP000201P', element: <CMP000201P /> },
        { path: 'CMP000301P', element: <CMP000301P /> },
        { path: 'CMP000302P', element: <CMP000302P /> },
        { path: 'CMP000401P', element: <CMP000401P /> },
        { path: 'CMP000501P', element: <CMP000501P /> },
        { path: 'CMP000601P', element: <CMP000601P /> },
        { path: 'CMP000801P', element: <CMP000801P /> },
        { path: 'CMP000901P', element: <CMP000901P /> },
        { path: 'CMP001001P', element: <CMP001001P /> },
        { path: 'CMP001101P', element: <CMP001101P /> },
        { path: 'CMP001201P', element: <CMP001201P /> },
        { path: 'CMP001301P', element: <CMP001301P /> },
        { path: 'CMP001401P', element: <CMP001401P /> },
        { path: 'CMP001402P', element: <CMP001402P /> },
        { path: 'CMP001501P', element: <CMP001501P /> },
        { path: 'CMP001502P', element: <CMP001502P /> },
        { path: 'CMP001601P', element: <CMP001601P /> },
      ],
    },
    { // 자금현수송
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'FMTCT0101M',   element: <FMTCT0101M /> },
        { path: 'FMTCT0101P01', element: <FMTCT0101P01 /> },

        { path: 'FMTCT0201M',   element: <FMTCT0201M /> },
        { path: 'FMTCT0201P01', element: <FMTCT0201P01 /> },
        { path: 'FMTCT0201P02', element: <FMTCT0201P02 /> },
        { path: 'FMTCT0201P03', element: <FMTCT0201P03 /> },

        { path: 'FMTCT1601M',   element: <FMTCT1601M /> },
        { path: 'FMTCT1601P01', element: <FMTCT1601P01 /> },

        { path: 'FMTCT0301M',   element: <FMTCT0301M /> },
        { path: 'FMTCT0401M',   element: <FMTCT0401M /> },

        { path: 'FMTCT0701M',   element: <FMTCT0701M /> },
        { path: 'FMTCT0801M',   element: <FMTCT0801M /> },
        { path: 'FMTCT0801P01', element: <FMTCT0801P01 /> },
        { path: 'FMTCT0801P02', element: <FMTCT0801P02 /> },

        { path: 'FMTCT0901M',   element: <FMTCT0901M /> },
        { path: 'FMTCT1501M',   element: <FMTCT1501M /> },
        { path: 'FMTCT1501P02', element: <FMTCT1501P02 /> },
        { path: 'FMTCT1001M',   element: <FMTCT1001M /> },
        { path: 'FMTCT1001P01', element: <FMTCT1001P01 /> },
        { path: 'FMTCT1001P02', element: <FMTCT1001P02 /> },

        { path: 'FMTCC0101M',   element: <FMTCC0101M /> },

        { path: 'FMTCT1101M',   element: <FMTCT1101M /> },
        { path: 'FMTCT1301M',   element: <FMTCT1301M /> },
        { path: 'FMTCT1401M',   element: <FMTCT1401M /> },
        { path: 'FMTCT1401P01', element: <FMTCT1401P01 /> },

        { path: 'FMTFT0101M',   element: <FMTFT0101M /> },
        { path: 'FMTFT0201M',   element: <FMTFT0201M /> },
        { path: 'FMTFT0201P01', element: <FMTFT0201P01 /> },
        { path: 'FMTFT0201P03', element: <FMTFT0201P03 /> },

        { path: 'FMTFT1201M',   element: <FMTFT1201M /> },
        { path: 'FMTFT1201P01', element: <FMTFT1201P01 /> },

        { path: 'FMTFT0301M',   element: <FMTFT0301M /> },
        { path: 'FMTFT1301M',   element: <FMTFT1301M /> },
        { path: 'FMTFT0401M',   element: <FMTFT0401M /> },
        { path: 'FMTFT0601M',   element: <FMTFT0601M /> },
        { path: 'FMTFT0701M',   element: <FMTFT0701M /> },

        { path: 'FMTFT0801M',   element: <FMTFT0801M /> },
        { path: 'FMTFT0801P01', element: <FMTFT0801P01 /> },
        { path: 'FMTFT0801P02', element: <FMTFT0801P02 /> },

        { path: 'FMTFT0901M',   element: <FMTFT0901M /> },
        { path: 'FMTFT0901P01', element: <FMTFT0901P01 /> },
        { path: 'FMTFT0901P02', element: <FMTFT0901P02 /> },

        { path: 'FMTFT1001M',   element: <FMTFT1001M /> },
        { path: 'FMTFT1101M',   element: <FMTFT1101M /> },
        { path: 'FMTFT1101P01', element: <FMTFT1101P01 /> },

        { path: 'FMTCC0101P01', element: <FMTCC0101P01 /> },

        { path: 'FMTCC0201M',   element: <FMTCC0201M /> },
        { path: 'FMTCC0301M',   element: <FMTCC0301M /> },

        { path: 'FMTFC0101M',   element: <FMTFC0101M /> },
        { path: 'FMTFC0101P01', element: <FMTFC0101P01 /> },
        { path: 'FMTFC0101P02', element: <FMTFC0101P02 /> },
        { path: 'FMTFC0201M',   element: <FMTFC0201M /> },
        { path: 'FMTFC0201P01', element: <FMTFC0201P01 /> },
        { path: 'FMTFC0201P02', element: <FMTFC0201P02 /> },
        { path: 'FMTFC0201P03', element: <FMTFC0201P03 /> },
        { path: 'FMTFC0201P04', element: <FMTFC0201P04 /> },
        { path: 'FMTFC0201P05', element: <FMTFC0201P05 /> },
        { path: 'FMTFC0201P06', element: <FMTFC0201P06 /> },
        { path: 'FMTFC0201P07', element: <FMTFC0201P07 /> },
        { path: 'FMTFC0201P08', element: <FMTFC0201P08 /> },

        { path: 'FMTFC0301M',   element: <FMTFC0301M /> },

        { path: 'FMTFF0101M',   element: <FMTFF0101M /> },
        { path: 'FMTFF0201M',   element: <FMTFF0201M /> },
        { path: 'FMTFF0301M',   element: <FMTFF0301M /> },
        { path: 'FMTDP0101M',   element: <FMTDP0101M /> },
        { path: 'FMTDP0201M',   element: <FMTDP0201M /> },
        { path: 'FMTCD0101M',   element: <FMTCD0101M /> },

      ],
    },
    { // 중요용지·용도품(본부)
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BSPRQ0101M',   element: <BSPRQ0101M /> },
        { path: 'BSPRQ0101P01', element: <BSPRQ0101P01 /> },
        { path: 'BSPRQ0201M',   element: <BSPRQ0201M /> },
        { path: 'BSPRQ0301M',   element: <BSPRQ0301M /> },
        { path: 'BSPRQ0301P01', element: <BSPRQ0301P01 /> },
        { path: 'BSPRQ0301P02', element: <BSPRQ0301P02 /> },
        { path: 'BSPRQ0401M',   element: <BSPRQ0401M /> },
        { path: 'BSPRQ0501M',   element: <BSPRQ0501M /> },

        { path: 'BSPFD0101M',   element: <BSPFD0101M /> },
        { path: 'BSPFD0301M',   element: <BSPFD0301M /> },
        { path: 'BSPFD0401M',   element: <BSPFD0401M /> },
        { path: 'BSPFD0501M',   element: <BSPFD0501M /> },
        { path: 'BSPFD0601M',   element: <BSPFD0601M /> },
        { path: 'BSPFD0701M',   element: <BSPFD0701M /> },
        { path: 'BSPFD0801M',   element: <BSPFD0801M /> },
        { path: 'BSPFD0901M',   element: <BSPFD0901M /> },
        { path: 'BSPFD0901P01', element: <BSPFD0901P01 /> },

        { path: 'BSPAQ0101M',   element: <BSPAQ0101M /> },
        { path: 'BSPAQ0101P01', element: <BSPAQ0101P01 /> },
        { path: 'BSPAQ0201M',   element: <BSPAQ0201M /> },
        { path: 'BSPAQ0301M',   element: <BSPAQ0301M /> },
        { path: 'BSPAQ0401M',   element: <BSPAQ0401M /> },
        { path: 'BSPAQ0501M',   element: <BSPAQ0501M /> },

        { path: 'BSPDU0101M',   element: <BSPDU0101M /> },
        { path: 'BSPDU0601M',   element: <BSPDU0601M /> },
        { path: 'BSPDU0601P02', element: <BSPDU0601P02 /> },
        { path: 'BSPDU0201M',   element: <BSPDU0201M /> },
        { path: 'BSPDU0201P02', element: <BSPDU0201P02 /> },
        { path: 'BSPDU0201P03', element: <BSPDU0201P03 /> },
        { path: 'BSPDU0301M',   element: <BSPDU0301M /> },
        { path: 'BSPDU0301P01', element: <BSPDU0301P01 /> },
        { path: 'BSPDU0301P02', element: <BSPDU0301P02 /> },
        { path: 'BSPDU0301P03', element: <BSPDU0301P03 /> },

        { path: 'BSPDU0401M', element: <BSPDU0401M /> },
        { path: 'BSPDU0401P02', element: <BSPDU0401P02 /> },
        { path: 'BSPDU0501M', element: <BSPDU0501M /> },

        { path: 'HSPBT0101M',   element: <HSPBT0101M /> },
        { path: 'HSPBT0101P01', element: <HSPBT0101P01 /> },
        { path: 'HSPBT0301M',   element: <HSPBT0301M /> },
        { path: 'HSPBT0301P01', element: <HSPBT0301P01 /> },
        { path: 'HSPBT0201M',   element: <HSPBT0201M /> },
        { path: 'HSPBT0401M',   element: <HSPBT0401M /> },
        { path: 'HSPBT0501M',   element: <HSPBT0501M /> },
        { path: 'HSPBT0601M',   element: <HSPBT0601M /> },
        { path: 'HSPBT0701M',   element: <HSPBT0701M /> },
        { path: 'HSPBT0801M',   element: <HSPBT0801M /> },
        { path: 'HSPBT1401M',   element: <HSPBT1401M /> },
        { path: 'HSPBT1001M',   element: <HSPBT1001M /> },
        { path: 'HSPBT1101M',   element: <HSPBT1101M /> },
        { path: 'HSPBT1101P01', element: <HSPBT1101P01 /> },
        { path: 'HSPBT1201M',   element: <HSPBT1201M /> },
        { path: 'HSPBT1301M',   element: <HSPBT1301M /> },
        { path: 'HSPBT0901M',   element: <HSPBT0901M /> },
        { path: 'HSPBT1501M',   element: <HSPBT1501M /> },
        // { path: 'HSPBT1501P01',   element: <HSPBT1501P01 /> },
        { path: 'HSPBT1501P02', element: <HSPBT1501P02 /> },
        { path: 'HSPBT1601M',   element: <HSPBT1601M /> },
        { path: 'HSPBT1701M',   element: <HSPBT1701M /> },
        { path: 'HSPHS0101M',   element: <HSPHS0101M /> },
        { path: 'HSPHS0201M',   element: <HSPHS0201M /> },
        { path: 'HSPHS0201P01', element: <HSPHS0201P01 /> },
        { path: 'HSPHS0301M',   element: <HSPHS0301M /> },
        { path: 'HSPHS0401M',   element: <HSPHS0401M /> },
        { path: 'HSPHS0401P03', element: <HSPHS0401P03 /> },
        { path: 'HSPHS0501M',   element: <HSPHS0501M /> },
        { path: 'HSPHS0501P01', element: <HSPHS0501P01 /> },
        { path: 'HSPHS0501P02', element: <HSPHS0501P02 /> },
        { path: 'HSPHS0601M',   element: <HSPHS0601M /> },
        { path: 'HSPHS2001M',   element: <HSPHS2001M /> },
        { path: 'HSPHS0701M',   element: <HSPHS0701M /> },
        { path: 'HSPHS0801M',   element: <HSPHS0801M /> },
        { path: 'HSPHS0901M',   element: <HSPHS0901M /> },
        { path: 'HSPHS1001M',   element: <HSPHS1001M /> },
        { path: 'HSPHS1201M',   element: <HSPHS1201M /> },
        { path: 'HSPHS1301M',   element: <HSPHS1301M /> },
        { path: 'HSPHS1301P01', element: <HSPHS1301P01 /> },
        { path: 'HSPHS1601M',   element: <HSPHS1601M /> },
        { path: 'HSPHS1601P02', element: <HSPHS1601P02 /> },
        { path: 'HSPHS1701M',   element: <HSPHS1701M /> },
        { path: 'HSPHS1701P01', element: <HSPHS1701P01 /> },
        { path: 'HSPHS1901M',   element: <HSPHS1901M /> },
        { path: 'HSPHS1901P01', element: <HSPHS1901P01 /> },
        { path: 'HSPHS1901P02', element: <HSPHS1901P02 /> },
        { path: 'HSPHS1901P03', element: <HSPHS1901P03 /> },


        { path: 'HSPDU0101M',   element: <HSPDU0101M /> },
        { path: 'HSPDU0101P01', element: <HSPDU0101P01 /> },
        { path: 'HSPDU0201M',   element: <HSPDU0201M /> },

        { path: 'HSPDU0201P02', element: <HSPDU0201P02 /> },
        { path: 'HSPDU0201P03', element: <HSPDU0201P03 /> },

        { path: 'HSPDU0301M',   element: <HSPDU0301M /> },
        { path: 'HSPDU0301P01', element: <HSPDU0301P01 /> },
        { path: 'HSPDU0301P02', element: <HSPDU0301P02 /> },

        { path: 'HSPDU0401M',   element: <HSPDU0401M /> },
        { path: 'HSPDU0401P01', element: <HSPDU0401P01 /> },

        { path: 'HSPDU0501M',   element: <HSPDU0501M /> },
        { path: 'HSPDU0701M',   element: <HSPDU0701M /> },
        { path: 'HSPDU0801M',   element: <HSPDU0801M /> },
        { path: 'HSPDU0801P01', element: <HSPDU0801P01 /> },
        { path: 'HSPDU0801P02', element: <HSPDU0801P02 /> },
        { path: 'HSPDU0801P04', element: <HSPDU0801P04 /> },


        { path: 'HSPDU0901M',   element: <HSPDU0901M /> },
        { path: 'HSPDU0901P01', element: <HSPDU0901P01 /> },
        { path: 'HSPDU0901P02', element: <HSPDU0901P02 /> },

        { path: 'HSPHP0101M',   element: <HSPHP0101M /> },
        { path: 'HSPHP0201M',   element: <HSPHP0201M /> },
        { path: 'HSPHP0301M',   element: <HSPHP0301M /> },
        { path: 'HSPHP0401M',   element: <HSPHP0401M /> },
        { path: 'HSPHP0401P01', element: <HSPHP0401P01 /> },
        { path: 'HSPHP0501M',   element: <HSPHP0501M /> },
        { path: 'HSPSA0101M',   element: <HSPSA0101M /> },
        { path: 'HSPSA0201M',   element: <HSPSA0201M /> },

        { path: 'HSPPC0101M',   element: <HSPPC0101M /> },
        { path: 'HSPPC0101P01', element: <HSPPC0101P01 /> },
        { path: 'HSPPC0101P02', element: <HSPPC0101P02 /> },


        { path: 'HSPPC0201M',   element: <HSPPC0201M /> },
        { path: 'HSPPC0301M',   element: <HSPPC0301M /> },
        { path: 'HSPPC0401M',   element: <HSPPC0401M /> },

        { path: 'HSPPC0401P01', element: <HSPPC0401P01 /> },
        { path: 'HSPPC0401P02', element: <HSPPC0401P02 /> },
        { path: 'HSPPC0401P03', element: <HSPPC0401P03 /> },

      ],
    },
    { // 행내등기·우편물
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BEXRQ0101M',   element: <BEXRQ0101M /> },
        { path: 'BEXRQ0101P01', element: <BEXRQ0101P01 /> },
        { path: 'BEXRQ0101P02', element: <BEXRQ0101P02 /> },
        { path: 'BEXRQ0101P03', element: <BEXRQ0101P03 /> },

        { path: 'BEXRQ0401M',   element: <BEXRQ0401M /> },
        { path: 'BEXRQ0201M',   element: <BEXRQ0201M /> },

        { path: 'BEXRQ0201P01', element: <BEXRQ0201P01 /> },
        { path: 'BEXRQ0201P02', element: <BEXRQ0201P02 /> },
        { path: 'BEXRQ0201P03', element: <BEXRQ0201P03 /> },

        { path: 'BEXRQ0301M',   element: <BEXRQ0301M /> },
        { path: 'BEXRQ0601M',   element: <BEXRQ0601M /> },

        { path: 'BEXRQ0601P01', element: <BEXRQ0601P01 /> },
        { path: 'BEXRQ0601P02', element: <BEXRQ0601P02 /> },

        { path: 'BEXPM0101M',   element: <BEXPM0101M /> },

        { path: 'BEXPM0201M',   element: <BEXPM0201M /> },
        { path: 'BEXPM0601M',   element: <BEXPM0601M /> },
        { path: 'BEXPM0701M',   element: <BEXPM0701M /> },

        { path: 'BEXPM0301M',   element: <BEXPM0301M /> },
        { path: 'BEXPM0301P01', element: <BEXPM0301P01 /> },

        { path: 'BEXPM0401M',   element: <BEXPM0401M /> },
        { path: 'BEXPM0501M',   element: <BEXPM0501M /> },

        { path: 'BEXRM0201M',   element: <BEXRM0201M /> },
        { path: 'BEXRM0201P01', element: <BEXRM0201P01 /> },
        { path: 'BEXRM0201P02', element: <BEXRM0201P02 /> },
        { path: 'BEXRM0201P03', element: <BEXRM0201P03 /> },
        { path: 'BEXRM0201P04', element: <BEXRM0201P04 /> },
        { path: 'BEXRM0201P05', element: <BEXRM0201P05 /> },
        { path: 'BEXRM0201P06', element: <BEXRM0201P06 /> },
        { path: 'BEXRM0201P07', element: <BEXRM0201P07 /> },
        { path: 'BEXRM0201P08', element: <BEXRM0201P08 /> },
        { path: 'BEXRM0201P09', element: <BEXRM0201P09 /> },
        { path: 'BEXRM0301M',   element: <BEXRM0301M /> },
      ],
    },
    { // 재난·안전관리
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'STMGD0101M',   element: <STMGD0101M /> },
        { path: 'STMGD0101P01', element: <STMGD0101P01 /> },
        { path: 'STMGD0101P02', element: <STMGD0101P02 /> },
        { path: 'STMGD0101P03', element: <STMGD0101P03 /> },
        { path: 'STMGD0101P04', element: <STMGD0101P04 /> },
        { path: 'STMGD0101P05', element: <STMGD0101P05 /> },

        { path: 'STMGD0201M',   element: <STMGD0201M /> },
        { path: 'STMGD0301M',   element: <STMGD0301M /> },
        { path: 'STMGD0301P01', element: <STMGD0301P01 /> },
        { path: 'STMGD0301P02', element: <STMGD0301P02 /> },

        { path: 'STMGD0401M',   element: <STMGD0401M /> },
        { path: 'STMGD0401P01', element: <STMGD0401P01 /> },
        { path: 'STMGD0401P02', element: <STMGD0401P02 /> },
        { path: 'STMGD0401P03', element: <STMGD0401P03 /> },
        { path: 'STMGD0401P04', element: <STMGD0401P04 /> },
        { path: 'STMGD0401P05', element: <STMGD0401P05 /> },
        { path: 'STMGD0401P06', element: <STMGD0401P06 /> },

        { path: 'STMGD0501M',   element: <STMGD0501M /> },
        { path: 'STMGD0501P01', element: <STMGD0501P01 /> },

        { path: 'STMGD0601M',   element: <STMGD0601M /> },
        { path: 'STMGD0601P01', element: <STMGD0601P01 /> },

        { path: 'STMDM0101M',   element: <STMDM0101M /> },
        { path: 'STMDM0101P01', element: <STMDM0101P01 /> },
        { path: 'STMDM0101P02', element: <STMDM0101P02 /> },
        { path: 'STMDM0201M',   element: <STMDM0201M /> },
        { path: 'STMDM0301M',   element: <STMDM0301M /> },
        { path: 'STMDM0301P01', element: <STMDM0301P01 /> },
        { path: 'STMDM0301P02', element: <STMDM0301P02 /> },
        { path: 'STMDM0401M',   element: <STMDM0401M /> },
        { path: 'STMDM0401P02', element: <STMDM0401P02 /> },
        { path: 'STMGI0101M',   element: <STMGI0101M /> },
        { path: 'STMDM0401P03', element: <STMDM0401P03 /> },
        { path: 'STMGI0101P02', element: <STMGI0101P02 /> },
        { path: 'STMGI0101P03', element: <STMGI0101P03 /> },
        { path: 'STMGI0101P04', element: <STMGI0101P04 /> },
        { path: 'STMGI0201M',   element: <STMGI0201M /> },

        { path: 'STMGI0201P01', element: <STMGI0201P01 /> },
        { path: 'STMGI0201P02', element: <STMGI0201P02 /> },
        { path: 'STMGI0201P03', element: <STMGI0201P03 /> },

        { path: 'STMGI0301M',   element: <STMGI0301M /> },

        { path: 'STMGD0701M',   element: <STMGD0701M /> },

        { path: 'STMVL0101M',   element: <STMVL0101M /> },
        { path: 'STMVL0101P01', element: <STMVL0101P01 /> },
        { path: 'STMVL0101P02', element: <STMVL0101P02 /> },
        { path: 'STMVL0101P03', element: <STMVL0101P03 /> },
        { path: 'STMVL0101P04', element: <STMVL0101P04 /> },
        { path: 'STMVL0101P05', element: <STMVL0101P05 /> },
        { path: 'STMVL0101P06', element: <STMVL0101P06 /> },
        { path: 'STMVL0201M',   element: <STMVL0201M /> },
        { path: 'STMGI0101P01', element: <STMGI0101P01 /> },

        { path: 'STMBR0101M',   element: <STMBR0101M /> },
        { path: 'STMBR0101P01', element: <STMBR0101P01 /> },
        { path: 'STMBR0101P02', element: <STMBR0101P02 /> },
        { path: 'STMBR0101P03', element: <STMBR0101P03 /> },
        { path: 'STMBR0201M',   element: <STMBR0201M /> },
        { path: 'STMBR0201P01', element: <STMBR0201P01 /> },
        { path: 'STMBR0201P02', element: <STMBR0201P02 /> },
        { path: 'STMBR0301M',   element: <STMBR0301M /> },
        { path: 'STMBR0301P01', element: <STMBR0301P01 /> },

        { path: 'STMPR0101M',   element: <STMPR0101M /> },
        { path: 'STMPR0101P01', element: <STMPR0101P01 /> },
        { path: 'STMPR0101P02', element: <STMPR0101P02 /> },
        { path: 'STMPR0201M',   element: <STMPR0201M /> },
        { path: 'STMPR0301M',   element: <STMPR0301M /> },
        { path: 'STMPR0301P01', element: <STMPR0301P01 /> },
        { path: 'STMPR0301P02', element: <STMPR0301P02 /> },
        { path: 'STMPR0301P03', element: <STMPR0301P03 /> },
        { path: 'STMPR0301P04', element: <STMPR0301P04 /> },
        { path: 'STMPR0301P05', element: <STMPR0301P05 /> },

        { path: 'STMPR0401M',   element: <STMPR0401M /> },
        { path: 'STMPR0501M',   element: <STMPR0501M /> },
        { path: 'STMPR0501P01', element: <STMPR0501P01 /> },
        { path: 'STMPR0501P02', element: <STMPR0501P02 /> },
        { path: 'STMPR0501P03', element: <STMPR0501P03 /> },

        { path: 'STMSE0101M',   element: <STMSE0101M /> },
        { path: 'STMSE0101P01', element: <STMSE0101P01 /> },
        { path: 'STMSE0201M',   element: <STMSE0201M /> },
        { path: 'STMSE0201P01', element: <STMSE0201P01 /> },

        { path: 'STMPE0101M',   element: <STMPE0101M /> },
        { path: 'STMPE0101P01', element: <STMPE0101P01 /> },
        { path: 'STMPE0201M',   element: <STMPE0201M /> },

        { path: 'STMAS0101M',   element: <STMAS0101M /> },
        { path: 'STMAS0201P01', element: <STMAS0201P01 /> },

        { path: 'STMAS0201M',   element: <STMAS0201M /> },
        { path: 'STMAS0301M',   element: <STMAS0301M /> },
        { path: 'STMAS0401M',   element: <STMAS0401M /> },
        { path: 'STMHA0101M',   element: <STMHA0101M /> },
        { path: 'STMHA0201M',   element: <STMHA0201M /> },
        { path: 'STMHA0301M',   element: <STMHA0301M /> },
        { path: 'STMHA0401M',   element: <STMHA0401M /> },

        { path: 'STMSC0101M',   element: <STMSC0101M /> },
        { path: 'STMSC0101P01', element: <STMSC0101P01 /> },
        { path: 'STMSC0101P02', element: <STMSC0101P02 /> },
        { path: 'STMSC0201M',   element: <STMSC0201M /> },
        { path: 'STMSC0301M',   element: <STMSC0301M /> },
        { path: 'STMSC0401M',   element: <STMSC0401M /> },
        { path: 'STMSC0401P01', element: <STMSC0401P01 /> },

        { path: 'STMSC0601M',   element: <STMSC0601M /> },
        { path: 'STMSC0601P01', element: <STMSC0601P01 /> },

        { path: 'STMKY0101M',   element: <STMKY0101M /> },
        { path: 'STMKY0201M',   element: <STMKY0201M /> },
        { path: 'STMKY0201P01', element: <STMKY0201P01 /> },
        { path: 'STMKY0201P02', element: <STMKY0201P02 /> },
        { path: 'STMKY0201P03', element: <STMKY0201P03 /> },
        { path: 'STMKY0301M',   element: <STMKY0301M /> },
        { path: 'STMKY0301P03', element: <STMKY0301P03 /> },
        { path: 'STMKY0301P01', element: <STMKY0301P01 /> },
        { path: 'STMKY0301P02', element: <STMKY0301P02 /> },

        { path: 'STMKY0401M',   element: <STMKY0401M /> },
        { path: 'STMKY0401P01', element: <STMKY0401P01 /> },
        { path: 'STMKY0401P02', element: <STMKY0401P02 /> },
        { path: 'STMKY0401P04', element: <STMKY0401P04 /> },
        { path: 'STMKY0401P06', element: <STMKY0401P06 /> },
        { path: 'STMKY0401P08', element: <STMKY0401P08 /> },
        { path: 'STMKY0401P10', element: <STMKY0401P10 /> },
        { path: 'STMKY0501P02', element: <STMKY0501P02 /> },
        { path: 'STMKY0601M',   element: <STMKY0601M /> },

        { path: 'STMFL0101M',   element: <STMFL0101M /> },
        { path: 'STMFL0201M',   element: <STMFL0201M /> },
        { path: 'STMFL0201P02', element: <STMFL0201P02 /> },
        { path: 'STMFL0201P03', element: <STMFL0201P03 /> },
        { path: 'STMFL0401M',   element: <STMFL0401M /> },
        { path: 'STMFL0501M',   element: <STMFL0501M /> },


      ],
    },
    { // 영업지원
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'BSSAP0101M',   element: <BSSAP0101M /> },
        { path: 'BSSAP0201M',   element: <BSSAP0201M /> },
        { path: 'BSSAP0201P01', element: <BSSAP0201P01 /> },
        { path: 'BSSAP0201P02', element: <BSSAP0201P02 /> },

        { path: 'BSSDM0101M',   element: <BSSDM0101M /> },
        { path: 'BSSDM0201M',   element: <BSSDM0201M /> },

        { path: 'BSSDM0201P01', element: <BSSDM0201P01 /> },
        { path: 'BSSDM0201P02', element: <BSSDM0201P02 /> },
        { path: 'BSSDM0201P03', element: <BSSDM0201P03 /> },
        { path: 'BSSDM0201P04', element: <BSSDM0201P04 /> },



        { path: 'BSSLQ0201M',   element: <BSSLQ0201M /> },
        { path: 'BSSLQ0101M',   element: <BSSLQ0101M /> },

        { path: 'BSSDM0201P01', element: <BSSDM0201P01 /> },

        { path: 'BSSLQ0101P01', element: <BSSLQ0101P01 /> },
        { path: 'BSSLQ0101P02', element: <BSSLQ0101P02 /> },
        { path: 'BSSLQ0101P03', element: <BSSLQ0101P03 /> },
        { path: 'BSSLQ0101P04', element: <BSSLQ0101P04 /> },
        { path: 'BSSLQ0301M',   element: <BSSLQ0301M /> },
        { path: 'BSSLQ0301P01', element: <BSSLQ0301P01 /> },

        { path: 'BSSRM0101M',   element: <BSSRM0101M /> },
        { path: 'BSSRM0101P01', element: <BSSRM0101P01 /> },
        { path: 'BSSRM0101P02', element: <BSSRM0101P02 /> },
        { path: 'BSSRM0101P03', element: <BSSRM0101P03 /> },
        { path: 'BSSRM0101P04', element: <BSSRM0101P04 /> },
        { path: 'BSSRM0101P05', element: <BSSRM0101P05 /> },

        { path: 'BSSRM0201M',   element: <BSSRM0201M /> },
        { path: 'BSSRM0201P01', element: <BSSRM0201P01 /> },
        { path: 'BSSRM0201P02', element: <BSSRM0201P02 /> },

        { path: 'BSSTN0101M',   element: <BSSTN0101M /> },
        { path: 'BSSTN0101P01', element: <BSSTN0101P01 /> },
        { path: 'BSSTN0101P02', element: <BSSTN0101P02 /> },
        { path: 'BSSTN0101P03', element: <BSSTN0101P03 /> },
        { path: 'BSSTN0101P04', element: <BSSTN0101P04 /> },

        { path: 'BSSCR0101M',   element: <BSSCR0101M /> },
        { path: 'BSSCR0101P01', element: <BSSCR0101P01 /> },
        { path: 'BSSCR0101P02', element: <BSSCR0101P02 /> },
        { path: 'BSSCR0101P03', element: <BSSCR0101P03 /> },
        { path: 'BSSCR0201M',   element: <BSSCR0201M /> },
        { path: 'BSSCR0301M',   element: <BSSCR0301M /> },
        { path: 'BSSCR0301P01', element: <BSSCR0301P01 /> },
        { path: 'BSSCR0301P02', element: <BSSCR0301P02 /> },
        { path: 'BSSCR0301P03', element: <BSSCR0301P03 /> },
        { path: 'BSSCR0301P04', element: <BSSCR0301P04 /> },
        { path: 'BSSCR0401M',   element: <BSSCR0401M /> },
        { path: 'BSSCR0501M',   element: <BSSCR0501M /> },

        { path: 'BSSFM0101M',   element: <BSSFM0101M /> },
        { path: 'BSSFM0101P01', element: <BSSFM0101P01 /> },
        { path: 'BSSFM0101P02', element: <BSSFM0101P02 /> },
        { path: 'BSSFM0201M',   element: <BSSFM0201M /> },
        { path: 'BSSFM0201P01', element: <BSSFM0201P01 /> },

        { path: 'BSSTI0101M',   element: <BSSTI0101M /> },
        { path: 'BSSTI0201M',   element: <BSSTI0201M /> },
        { path: 'BSSTI0301M',   element: <BSSTI0301M /> },
        { path: 'BSSTI0401M',   element: <BSSTI0401M /> },
        { path: 'BSSTI0501M',   element: <BSSTI0501M /> },
        { path: 'BSSPE0101M',   element: <BSSPE0101M /> },
        { path: 'BSSPE0201M',   element: <BSSPE0201M /> },
      ],
    },
    { // 수수료관리
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'FEMDA0101M',   element: <FEMDA0101M /> },
        { path: 'FEMDA0101P01', element: <FEMDA0101P01 /> },
        { path: 'FEMDA0201M',   element: <FEMDA0201M /> },
        { path: 'FEMDA0201P01', element: <FEMDA0201P01 /> },
        { path: 'FEMDA0201P04', element: <FEMDA0201P04 /> },

        { path: 'FEMCT0101M',   element: <FEMCT0101M /> },
        { path: 'FEMCT0101P01', element: <FEMCT0101P01 /> },

        { path: 'FEMCT0201M',   element: <FEMCT0201M /> },
        { path: 'FEMCT0201P01', element: <FEMCT0201P01 /> },
        { path: 'FEMCT0201P02', element: <FEMCT0201P02 /> },
        { path: 'FEMCT0201P03', element: <FEMCT0201P03 /> },
        { path: 'FEMCT0201P04', element: <FEMCT0201P04 /> },
        { path: 'FEMCT0201P05', element: <FEMCT0201P05 /> },
        { path: 'FEMCT0301P01', element: <FEMCT0301P01 /> },

        { path: 'FEMCT0301M',   element: <FEMCT0301M /> },
        { path: 'FEMCT0401M',   element: <FEMCT0401M /> },
        { path: 'FEMCT0401P01', element: <FEMCT0401P01 /> },

        { path: 'FEMCC0101M',   element: <FEMCC0101M /> },
        { path: 'FEMCC0101P01', element: <FEMCC0101P01 /> },
        { path: 'FEMCC0201M',   element: <FEMCC0201M /> },
        { path: 'FEMCC0201P01', element: <FEMCC0201P01 /> },
        { path: 'FEMCC0201P02', element: <FEMCC0201P02 /> },
        { path: 'FEMCC0201P03', element: <FEMCC0201P03 /> },
        { path: 'FEMCC0201P04', element: <FEMCC0201P04 /> },
        { path: 'FEMCC0201P05', element: <FEMCC0201P05 /> },
      ]
    },
    { // 공통·결재
      path: '/proto',
      element: <Decorator />,
      children: [
        { path: 'ADMCM0101M',   element: <ADMCM0101M /> },
        { path: 'ADMSM0101M',   element: <ADMSM0101M /> },
        { path: 'ADMSM0101P01', element: <ADMSM0101P01 /> },
        { path: 'FEMDA0201P02', element: <FEMDA0201P02 /> },
        { path: 'FEMDA0201P03', element: <FEMDA0201P03 /> },

        { path: 'ADMPA0101M',   element: <ADMPA0101M /> },
        { path: 'ADMPA0201M',   element: <ADMPA0201M /> },
        { path: 'ADMPA0301M',   element: <ADMPA0301M /> },
        { path: 'ADMPA0301P01', element: <ADMPA0301P01 /> },
        { path: 'ADMPA0301P02', element: <ADMPA0301P02 /> },
        { path: 'ADMPA0401M',   element: <ADMPA0401M /> },
        { path: 'ADMPA0501M',   element: <ADMPA0501M /> },
        { path: 'ADMPA0601M',   element: <ADMPA0601M /> },
        { path: 'ADMPA0601P01', element: <ADMPA0601P01 /> },

        { path: 'ADMAU0101M',   element: <ADMAU0101M /> },
        { path: 'ADMAU0101P01', element: <ADMAU0101P01 /> },
        { path: 'ADMAU0102M',   element: <ADMAU0102M /> },
        // { path: 'ADMAU0102P01', element: <ADMAU0102P01 /> },
        { path: 'ADMAU0103M',   element: <ADMAU0103M /> },
        { path: 'ADMAU0104M',   element: <ADMAU0104M /> },
        { path: 'ADMAU0201M',   element: <ADMAU0201M /> },
        { path: 'ADMAU0201P01', element: <ADMAU0201P01 /> },
        { path: 'ADMAU0201P02', element: <ADMAU0201P02 /> },
        { path: 'ADMAU0202M',   element: <ADMAU0202M /> },
        { path: 'ADMAU0203M',   element: <ADMAU0203M /> },
        { path: 'ADMAU0204M',   element: <ADMAU0204M /> },
        { path: 'ADMAU0301M',   element: <ADMAU0301M /> },

        { path: 'ADMAC0101M',   element: <ADMAC0101M /> },
        { path: 'ADMTI0101M',   element: <ADMTI0101M /> },
        { path: 'ADMAC0201M',   element: <ADMAC0201M /> },
        { path: 'ADMAM0101M',   element: <ADMAM0101M /> },
        { path: 'ADMAM0101P01', element: <ADMAM0101P01 /> },
        { path: 'ADMPH0101M',   element: <ADMPH0101M /> },

        { path: 'ADMOA0101M',   element: <ADMOA0101M /> },
        { path: 'ADMOA0201M',   element: <ADMOA0201M /> },
        { path: 'ADMOA0301M',   element: <ADMOA0301M /> },
        { path: 'ADMOA0401M',   element: <ADMOA0401M /> },

        { path: 'ADMRC0101M',   element: <ADMRC0101M /> },
        { path: 'ADMRC0201M',   element: <ADMRC0201M /> },
        { path: 'ADMRC0301M',   element: <ADMRC0301M /> },
        { path: 'ADMRC0401M',   element: <ADMRC0401M /> },
        { path: 'ADMRC0401P01', element: <ADMRC0401P01 /> },

        { path: 'ADMRC0501M',   element: <ADMRC0501M /> },
        { path: 'ADMNT0101M',   element: <ADMNT0101M /> },

        { path: 'ADMQA0101M',   element: <ADMQA0101M /> },
      ],
    },
  ]);
}

export default ProtoRoutes;
