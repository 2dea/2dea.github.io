/**
 * @description SULM1010P01_01상시감시실시(준법감시역)_01감시항목조회(즉시)_02즉시점검항목상세
 */

// dependency
import React, { useState } from 'react';

// components
import { Button } from 'primereact/button';

function SULM1010P01() {
  return (
    <div className="ibk-sys-wrap mw-auto">
      <div className="ibk-sys-cover bg-white overflow-y">
        <div className="u-window mw-1368">
          <div className="grid">
            <div className="col-12">
              <div className="win-controls">
                <Button className="btn-ico arrow prev" disabled />
                <div className="state">
                  <span className="current">1</span>
                  <span className="slash">/</span>
                  <span className="total">6</span>
                </div>
                <Button className="btn-ico arrow next" />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col-fixed mr-16 w-240">
              <div className="win-panel mt-16">
                <h3 className="win-title mb-12">타시스템 링크</h3>
                <div className="win-links">
                  <ul>
                    <li>
                      <Button label="텔러밸거래내역(70001)" className="btn-text-link" />
                    </li>
                    <li>
                      <Button label="시재인수도/텔러거래내역시재인수도/텔러거래내역" className="btn-text-link" />
                    </li>
                    <li>
                      <Button label="시재인수도내역(70002)" className="btn-text-link" />
                    </li>
                    <li>
                      <Button label="출납일계표(70100)" className="btn-text-link" />
                    </li>
                    <li>
                      <Button label="BPR이미지" className="btn-text-link" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-fixed flex-auto">
              <div className="win-panel mt-16">
                <h3 className="win-title mb-12">공통사항</h3>
                <div className="u-dataview w-112">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>감사일자</span>
                        </dt>
                        <dd>
                          <span>2024-09-03</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>감시항목</span>
                        </dt>
                        <dd>
                          <Button label="고객여신 신규취급" className="btn-underline" />
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>중요도</span>
                        </dt>
                        <dd>
                          <span>고</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>계좌번호</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="218-12456201-126" className="btn-copy" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>계정과목</span>
                        </dt>
                        <dd>
                          <span>가계일반자금대출</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>관리부점</span>
                        </dt>
                        <dd>
                          <span>이태원</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>감리역</span>
                        </dt>
                        <dd className="with-icon">
                          <span>이길동(122111)</span>
                          <div className="status">
                            <span className="btn-status talk-user-1"></span>
                            <Button className="btn-call ml-8" icon="pi" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>고객번호</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="218-12456201-126" className="btn-copy" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>고객명</span>
                        </dt>
                        <dd>
                          <span>(주)삼성전자</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>상태</span>
                        </dt>
                        <dd>
                          <span>미점검</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>거래금액</span>
                        </dt>
                        <dd>
                          <span className="text-right">40,000.0</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>통화코드</span>
                        </dt>
                        <dd>
                          <span>KRW</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>취급자</span>
                        </dt>
                        <dd className="with-icon">
                          <span>이길동(122111)</span>
                          <div className="status">
                            <span className="btn-status talk-clock-1"></span>
                            <Button className="btn-call ml-8" icon="pi" />
                          </div>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>담당자</span>
                        </dt>
                        <dd>
                          <span>김감사</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>거래종류</span>
                        </dt>
                        <dd>
                          <span>출금</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>거래일자</span>
                        </dt>
                        <dd>
                          <span>2024-09-03</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>거래시각</span>
                        </dt>
                        <dd>
                          <span>10:53:11</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>취급부점명</span>
                        </dt>
                        <dd>
                          <span>화성병점(1323)</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>신규일자</span>
                        </dt>
                        <dd>
                          <span>2024-09-05</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>책임자</span>
                        </dt>
                        <dd className="with-icon">
                          <span>이길동(122111)</span>
                          <div className="status">
                            <span className="btn-status talk-minus-1"></span>
                            <Button className="btn-call ml-8" icon="pi" />
                          </div>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>취급일자</span>
                        </dt>
                        <dd>
                          <span>2024-10-31 12:20:11</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="win-panel mt-32">
                <h3 className="win-title mb-12">추가사항</h3>
                <div className="u-dataview w-112">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>구분</span>
                        </dt>
                        <dd>
                          <span>2024-09-03</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>담보번호</span>
                        </dt>
                        <dd>
                          <span>감시항목</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>설정금액</span>
                        </dt>
                        <dd>
                          <span className="text-right">3,000,000</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>여신신청</span>
                        </dt>
                        <dd>
                          <span>신규</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>담보종류</span>
                        </dt>
                        <dd>
                          <span>당행예금</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>예금계좌번호</span>
                        </dt>
                        <dd>
                          <span>218-98756201-100</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>여신계약</span>
                        </dt>
                        <dd>
                          <span>순수개별</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>만기일자</span>
                        </dt>
                        <dd>
                          <span>2027-10-10</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span>예금만기일자</span>
                        </dt>
                        <dd>
                          <span>9999-12-26</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="u-dataview w-112 mt-r-1">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>비고</span>
                        </dt>
                        <dd>
                          <span>-</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col-12">
              <div className="win-btns">
                <Button label="조치보류" className="btn-text primary blue-line notice" />
                <Button label="보완요청" className="btn-text primary blue-line" />
                <Button label="지도요청" className="btn-text primary blue-line" />
                <Button label="점검필" className="btn-text primary blue-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SULM1010P01;
