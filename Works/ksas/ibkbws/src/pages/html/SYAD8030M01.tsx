/**
 * @description SYAD8030M01_06시스템관리_08기타관리_03평가기준관리
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function SYAD8030M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '기타관리' }, { label: '평가기준관리' }];

  return (
    <div className="container">
      <div className="grid">
        <div className="col-12">
          <div className="panel">
            {/* snb */}
            <SubNavigation />

            {/* title */}
            <div className="u-title">
              <div className="inner">
                <PageTitle title={'평가기준관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* desc */}
            <div className="u-desc mt-16">
              <dl>
                <dt>계량평가</dt>
                <dd className="point">60점</dd>
              </dl>
              <dl>
                <dt>최종변경일시</dt>
                <dd>2024-11-25</dd>
              </dl>
            </div>

            {/* table */}
            <div className="grid">
              <div className="col-4">
                <div className="u-table type-input mt-12">
                  <div className="with-btns align-center mb-12">
                    <h3 className="u-sub-title">점검실적(점검비율)</h3>
                    <div className="flex">
                      <Button label="행추가" className="btn-text tertiary default" />
                      <Button label="행삭제" className="btn-text tertiary default" />
                    </div>
                  </div>
                  <div className="inner">
                    <table>
                      <colgroup>
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>배점</th>
                          <th className="bg-none">
                            <div className="cell-flex">
                              <div className="p-inputgroup w-68">
                                <InputText value="30" />
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="mt-12">
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>범위</th>
                          <th>점수</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="u-checkbox">
                                <CheckBox />
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="100%" />
                                </div>
                                <div className="p-inputgroup w-32 ml-6">
                                  <InputText value="=" />
                                </div>
                                <div className="p-inputgroup w-45 ml-6 align-center">
                                  <span>점검비율</span>
                                </div>
                                <div className="p-inputgroup w-32 ml-12">
                                  <InputText value="<" />
                                </div>
                                <div className="p-inputgroup w-68 ml-6">
                                  <InputText value="100%" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="30" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="u-dot size-3 mt-12">
                      <span>점검비율 = [점검한 건수/담당 점검대상 건수(RPA항목 제외)]*100</span>
                    </div>
                    <div className="u-dot size-3 mt-2">
                      <span>
                        점수 : 평가기간 중 개인별 점검실적이 평가대상 평균 점검실적의 50% 미만인 경우 득점의 50% 적용
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 pl-24">
                <div className="u-table type-input mt-12">
                  <div className="with-btns align-center mb-12">
                    <h3 className="u-sub-title">점검지도율(보완 요청비율)</h3>
                    <div className="flex">
                      <Button label="행추가" className="btn-text tertiary default" />
                      <Button label="행삭제" className="btn-text tertiary default" />
                    </div>
                  </div>
                  <div className="inner">
                    <table>
                      <colgroup>
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>배점</th>
                          <th className="bg-none">
                            <div className="cell-flex">
                              <div className="p-inputgroup w-68">
                                <InputText value="30" />
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="mt-12">
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>범위</th>
                          <th>점수</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="u-checkbox">
                                <CheckBox />
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="100%" />
                                </div>
                                <div className="p-inputgroup w-32 ml-6">
                                  <InputText value="=" />
                                </div>
                                <div className="p-inputgroup w-45 ml-6 align-center">
                                  <span>점검비율</span>
                                </div>
                                <div className="p-inputgroup w-32 ml-12">
                                  <InputText value="<" />
                                </div>
                                <div className="p-inputgroup w-68 ml-6">
                                  <InputText value="100%" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="30" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="u-dot size-3 mt-12">
                      <span>보완 요청비율 = [(보완 요청건수+즉시보완 건수)/점검대상 처리건수]*100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 pl-24">
                <div className="u-table type-input mt-12">
                  <div className="with-btns align-center mb-12">
                    <h3 className="u-sub-title">점검보완율(보완 완료비율)</h3>
                    <div className="flex">
                      <Button label="행추가" className="btn-text tertiary default" />
                      <Button label="행삭제" className="btn-text tertiary default" />
                    </div>
                  </div>
                  <div className="inner">
                    <table>
                      <colgroup>
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>배점</th>
                          <th className="bg-none">
                            <div className="cell-flex">
                              <div className="p-inputgroup w-68">
                                <InputText value="30" />
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="mt-12">
                      <colgroup>
                        <col width="48px" />
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div className="u-checkbox">
                              <CheckBox />
                            </div>
                          </th>
                          <th>범위</th>
                          <th>점수</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="u-checkbox">
                                <CheckBox />
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="100%" />
                                </div>
                                <div className="p-inputgroup w-32 ml-6">
                                  <InputText value="=" />
                                </div>
                                <div className="p-inputgroup w-45 ml-6 align-center">
                                  <span>점검비율</span>
                                </div>
                                <div className="p-inputgroup w-32 ml-12">
                                  <InputText value="<" />
                                </div>
                                <div className="p-inputgroup w-68 ml-6">
                                  <InputText value="100%" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="30" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="u-dot size-3 mt-12">
                      <span>보완 완료비율 = [보완 요청건수+보완 요청건수]*100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-bottom w-full">
                <Button label="수정" className="btn-text primary blue-fill" />
              </div>
            </div>

            {/* table */}
            <div className="grid">
              <div className="col-4">
                <div className="u-table type-input mt-32">
                  <h3 className="u-sub-title">보완요청 감점 관리</h3>
                  <div className="u-desc mt-16">
                    <dl>
                      <dt>최대감점</dt>
                      <dd className="point">1.0점</dd>
                    </dl>
                    <dl>
                      <dt>최종변경일시</dt>
                      <dd>2024-11-25</dd>
                    </dl>
                  </div>
                  <div className="flex flex-end mt-16">
                    <Button label="행추가" className="btn-text tertiary default" />
                    <Button label="행삭제" className="btn-text tertiary default ml-6" />
                  </div>
                  <div className="inner">
                    <table className="mt-12">
                      <colgroup>
                        <col width="*" />
                        <col width="118px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>경과일(+)</th>
                          <th>감점</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(6)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-109">
                                  <InputText value="10일" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="cell-flex">
                                <div className="p-inputgroup w-68">
                                  <InputText value="30" />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="u-bottom w-full">
                <Button label="수정" className="btn-text primary blue-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SYAD8030M01;
