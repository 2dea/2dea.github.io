/**
 * @description SYAD6010M01_06시스템관리_06공휴일관리
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

function SYAD6010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '시스템관리' }, { label: '공휴일관리' }];

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
                <PageTitle title={'공휴일관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* search */}
            <div className="u-search">
              <div className="inner">
                <div className="grid">
                  <div className="col-12">
                    <div className="formgroup-inline">
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">국가선택</span>
                        <div className="field">
                          <div className="p-inputgroup search w-160">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">검색년월</span>
                        <div className="field">
                          <div className="p-inputgroup search w-80">
                            <SelectBox />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup search w-80">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-57">요일구분</span>
                        <div className="field">
                          <div className="p-inputgroup search w-80">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-submit">
              <div className="inner">
                <Button label="조회" className="btn-text primary gray-fill" />
              </div>
            </div>

            <div className="grid">
              <div className="col-9">
                <div className="u-bunch">
                  <h3 className="u-sub-title mt-24">조회결과</h3>
                </div>
                <div className="u-table">
                  <div className="inner xh-561">
                    <PageCheckList />
                    <table>
                      <colgroup>
                        <col width="*" />
                        <col width="92px" />
                        <col width="92px" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>기준년원일</th>
                          <th>요일</th>
                          <th>휴일여부</th>
                          <th>휴일구분</th>
                          <th>2일전영업일</th>
                          <th>전영업년월일</th>
                          <th>익영업년월일</th>
                          <th>2일후영업일</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(20)].map((e, idx) => (
                          <tr key={idx}>
                            <td>
                              <span>2025-01-01</span>
                            </td>
                            <td>
                              <span>수</span>
                            </td>
                            <td>
                              <div className="u-checkbox">
                                <CheckBox />
                              </div>
                            </td>
                            <td className="text-left">
                              <span>법정공휴일</span>
                            </td>
                            <td>
                              <span>2025-01-01</span>
                            </td>
                            <td>
                              <span>2025-01-01</span>
                            </td>
                            <td>
                              <span>2025-01-01</span>
                            </td>
                            <td>
                              <span>2025-01-01</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-3 pl-16">
                <div className="u-window mt-32 border">
                  <div className="win-panel">
                    <div className="with-btns mb-12">
                      <h3 className="win-title">공휴일 수정</h3>
                      <div className="flex">
                        <Button label="수정" className="btn-text primary blue-line" />
                      </div>
                    </div>
                    <div className="">
                      <div className="u-dataview w-122">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>기준년월일</span>
                              </dt>
                              <dd>
                                <span>2025-10-23</span>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="u-dataview w-122 mt-r-1">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>요일</span>
                              </dt>
                              <dd>
                                <span>월</span>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="u-dataview w-122 mt-r-1">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>휴일여부</span>
                              </dt>
                              <dd>
                                <div className="u-checkbox flex-start">
                                  <CheckBox />
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="u-dataview expand w-122 mt-r-1">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>휴일선택</span>
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
                </div>
                <div className="u-window mt-32 border">
                  <div className="win-panel">
                    <h3 className="win-title mb-12">공휴일 정보</h3>
                    <div className="xh-335 overflow-y border-bottom">
                      <div className="u-dataview w-122">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>고정</span>
                              </dt>
                              <dd className="pf-0">
                                <ul className="listbox">
                                  <li>
                                    <span>신정연휴</span>
                                    <span>1.1</span>
                                  </li>
                                  <li>
                                    <span>삼일절</span>
                                    <span>3.1</span>
                                  </li>
                                  <li>
                                    <span>근로자의날</span>
                                    <span>5.1</span>
                                  </li>
                                  <li>
                                    <span>어린이날</span>
                                    <span>5.5</span>
                                  </li>
                                  <li>
                                    <span>현충일</span>
                                    <span>6.6</span>
                                  </li>
                                </ul>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="u-dataview w-122 mt-r-1 border-bottom-none">
                        <div className="inner">
                          <div className="column">
                            <dl className="u-dataview-list">
                              <dt>
                                <span>유동</span>
                              </dt>
                              <dd className="pf-0">
                                <ul className="listbox">
                                  <li>
                                    <span>설날</span>
                                    <span>음력 1.1</span>
                                  </li>
                                  <li>
                                    <span>석가탄신일</span>
                                    <span>음력 4.8</span>
                                  </li>
                                  <li>
                                    <span>석가탄신일</span>
                                    <span>음력 4.8</span>
                                  </li>
                                  <li>
                                    <span>석가탄신일</span>
                                    <span>음력 4.8</span>
                                  </li>
                                </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SYAD6010M01;
