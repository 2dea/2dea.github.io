/**
 * @description UNAD1010M01_04통합관리_01경영평가
 */

// dependency
import React, { useState } from 'react';

// components
import SelectBox from '@components/SelectBox';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

function UNAD1010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '통합관리' }, { label: '경영평가' }];

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
                <PageTitle title={'경영평가'}></PageTitle>
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
                        <span className="label w-79">기준년</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-79">반기구분</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-79">지역본부</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-79">대상부점</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup w-auto">
                        <span className="label w-79">기업성장여부</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
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
                <Button label="엑셀다운로드" className="btn-download" icon="pi" />
                <Button label="조회" className="btn-text primary gray-fill" />
              </div>
            </div>

            {/* desc */}
            <div className="u-block">
              <p className="u-dot size-3 mt-16">
                <span>「상시감시 지도사항」 평가점수는 지도사항이 발생한 경우 위반 건당 0.1~0.5점이 감점됩니다.</span>
              </p>
              <p className="u-dot size-3 mt-1">
                <span>
                  「상시감시 보완의무 위반」 평가점수는 최초보완요청일 다음 영업일로부터 5영업일 초과 정리시 0.1점이
                  감점됩니다.
                </span>
              </p>
            </div>

            {/* graph */}
            <div className="u-graph">
              <div className="flex flex-end">
                <Button label="이미지로 출력하기" className="btn-img-print" icon="pi" />
              </div>
              <div className="graph-wrap">그래프 영역</div>
            </div>

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">경영평가 내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <PageCheckList />
                <table>
                  <colgroup>
                    <col width="48px" />
                    <col width="200px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="200px" />
                    <col width="*" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>지역본부</th>
                      <th>1월</th>
                      <th>2월</th>
                      <th>3월</th>
                      <th>4월</th>
                      <th>5월</th>
                      <th>합산</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue">
                      <td>
                        <span>1</span>
                      </td>
                      <td className="text-left">
                        <span>강남지역</span>
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td className="total">
                        <span className="accordion accordion-open">
                          1.6
                          <Button icon="pi" className="btn-ico accordion" />
                        </span>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="bg-skyblue">
                      <td>
                        <span></span>
                      </td>
                      <td className="text-left">
                        <span>강남지역</span>
                      </td>
                      <td>
                        <span>0.8</span>
                      </td>
                      <td>
                        <span>0.8</span>
                      </td>
                      <td>
                        <span>0.8</span>
                      </td>
                      <td>
                        <span>0.8</span>
                      </td>
                      <td>
                        <span>0.8</span>
                      </td>
                      <td>
                        <span>1.6</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <span>2</span>
                      </td>
                      <td className="text-left">
                        <span>강남지역</span>
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td>
                        <Button label="0.8" className="btn-underline" />
                      </td>
                      <td className="total">
                        <span className="accordion">
                          1.6
                          <Button icon="pi" className="btn-ico accordion" />
                        </span>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="u-bunch">
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <PageCheckList />
                <table>
                  <colgroup>
                    <col width="48px" />
                    <col width="200px" />
                    <col width="100px" />
                    <col width="200px" />
                    <col width="100px" />
                    <col width="100px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="50px" />
                    <col width="100px" />
                    <col width="*" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th rowSpan={2}>NO</th>
                      <th rowSpan={2}>지역본부</th>
                      <th rowSpan={2}>지역본부코드</th>
                      <th rowSpan={2}>부점명</th>
                      <th rowSpan={2}>부점코드</th>
                      <th rowSpan={2}>경평그룹</th>
                      <th colSpan={2}>1월</th>
                      <th colSpan={2}>2월</th>
                      <th colSpan={2}>3월</th>
                      <th colSpan={2}>4월</th>
                      <th colSpan={2}>5월</th>
                      <th rowSpan={2}>합산</th>
                      <th rowSpan={2}></th>
                    </tr>
                    <tr>
                      <th>지도</th>
                      <th>보완</th>
                      <th>지도</th>
                      <th>보완</th>
                      <th>지도</th>
                      <th>보완</th>
                      <th>지도</th>
                      <th>보완</th>
                      <th>지도</th>
                      <th>보완</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(4)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td className="text-left">
                          <span>강남지역본부</span>
                        </td>
                        <td>
                          <span>0059</span>
                        </td>
                        <td className="text-left">
                          <span>강남기업금융센터</span>
                        </td>
                        <td>
                          <span>0059</span>
                        </td>
                        <td>
                          <span>주상01</span>
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td>
                          <Button label="0.8" className="btn-underline" />
                        </td>
                        <td className="total">
                          <span>2.5</span>
                        </td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UNAD1010M01;
