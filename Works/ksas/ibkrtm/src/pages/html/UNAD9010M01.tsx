/**
 * @description UNAD9010M01_04통합관리_08공지사항업무가이
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function UNAD9010M01() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '통합관리' }, { label: '공지사항/업무가이드' }];

  // 텍스트박스
  const [value, setValue] = useState<string>('');

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
                <PageTitle title={'게시판관리'}></PageTitle>
                <BreadCrumb model={paths} />
              </div>
            </div>

            {/* search */}
            <div className="u-search">
              <div className="inner">
                <div className="grid">
                  <div className="col-12">
                    <div className="formgroup-inline">
                      <div className="u-formgroup">
                        <span className="label">게시판분류</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <SelectBox />
                          </div>
                        </div>
                      </div>
                      <div className="u-formgroup">
                        <span className="label">등록기간</span>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <DatePicker />
                          </div>
                        </div>
                        <div className="field">
                          <div className="p-inputgroup w-120">
                            <DatePicker />
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

            {/* table */}
            <div className="u-bunch">
              <h3 className="u-sub-title">게시판 내역</h3>
              <div className="inner">
                <div className="num">
                  총<span>100</span>건
                </div>
              </div>
            </div>
            <div className="u-table">
              <div className="inner">
                <table>
                  <colgroup>
                    <col width="48px" />
                    <col width="174px" />
                    <col width="*" />
                    <col width="90px" />
                    <col width="90px" />
                    <col width="160px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>게시판 분류</th>
                      <th>제목</th>
                      <th>첨부파일</th>
                      <th>작성자</th>
                      <th>등록일시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(3)].map((e, idx) => (
                      <tr key={idx}>
                        <td>
                          <span>{idx + 1}</span>
                        </td>
                        <td>
                          <span>공지/업무</span>
                        </td>
                        <td className="text-left">
                          <span>전체 공지사항 입니다.</span>
                        </td>
                        <td>
                          <i className="ico file"></i>
                        </td>
                        <td>
                          <span>최기업</span>
                        </td>
                        <td>
                          <span>2024-08-19 15:56:55</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* window */}
            <div className="u-window border mt-40">
              <div className="win-panel">
                <div className="with-btns mb-12">
                  <h3 className="win-title">상세정보</h3>
                  <div className="flex">
                    <Button label="초기화" className="btn-text primary blue-line" />
                    <Button label="삭제" className="btn-text primary blue-line" />
                    <Button label="수정" className="btn-text primary blue-line" />
                    <Button label="등록" className="btn-text primary blue-fill" />
                  </div>
                </div>

                <div className="u-dataview expand w-138">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>제목</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear">
                            <InputText value="전체 공지사항 입니다" />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="u-dataview expand w-138 mt-r-1">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>게시판 분류</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup w-160">
                            <SelectBox />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>작성자</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-160">
                            <InputText value="최기업" disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>등록일시</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup clear w-160">
                            <InputText value="2024-08-19 15:56:55" disabled />
                            <Button className="btn-ico clear" />
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="u-dataview expand w-138 mt-r-1">
                  <div className="inner">
                    <div className="column">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>내용</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup">
                            <InputTextarea
                              value="「사고예방대책」 전문 (‘24.8.29 기준) 아래 첨부파일을 다운로드해서 숙지 요청드립니다."
                              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                              className="mt-6"
                              rows={6}
                              cols={30}
                            />
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="u-dataview expand w-138 mt-r-1">
                  <div className="inner">
                    <div className="column flex-none">
                      <dl className="u-dataview-list">
                        <dt>
                          <span>첨부파일</span>
                        </dt>
                        <dd>
                          <div className="p-inputgroup">
                            <div className="u-fileupload">
                              <div className="fileupload-btns">
                                <Button label="파일추가" className="btn-text tertiary default" />
                                <Button label="파일삭제" className="btn-text tertiary default" />
                                <Button label="파일다운" className="btn-text tertiary default" />
                              </div>
                              <div className="fileupload-list">
                                <table>
                                  <colgroup>
                                    <col width="33px" />
                                    <col width="33px" />
                                    <col width="*" />
                                    <col width="160px" />
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th>
                                        <div className="u-checkbox">
                                          <CheckBox />
                                        </div>
                                      </th>
                                      <th>NO</th>
                                      <th>첨부파일명</th>
                                      <th>파일크기(Byte)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {[...Array(5)].map((e, idx) => (
                                      <tr key={idx}>
                                        <td>
                                          <div className="u-checkbox">
                                            <CheckBox />
                                          </div>
                                        </td>
                                        <td>
                                          <span>{idx + 1}</span>
                                        </td>
                                        <td className="text-left">
                                          <span className="">
                                            (붙임3)2024년 국외점표 「사고예방대책」 전문_240615.hwp(붙임3)2024년
                                            국외점표 「사고예방대책」 전문_240615.hwp
                                          </span>
                                        </td>
                                        <td className="text-right">
                                          <span>424,464</span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
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
    </div>
  );
}

export default UNAD9010M01;
