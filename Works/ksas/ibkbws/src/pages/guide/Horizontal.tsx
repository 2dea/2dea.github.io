/**
 * @description 퍼블리싱 가이드_스플릿터_화면분할_가로
 */

// dependency
import React from 'react';

// components
import Header from '@components/Header';
import Footer from '@components/Footer';
import CheckBox from '@components/CheckBox';
import SelectBox from '@components/SelectBox';
import DatePicker from '@components/DatePicker';
import PageTitle from '@components/PageTitle';
import PageCheckList from '@components/PageCheckList';
import SubNavigation from '@components/SubNavigation';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { Splitter, SplitterPanel } from 'primereact/splitter';

// 탭메뉴 타이틀, 건수
const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">즉시</span>
      <span className="result">99</span>
    </div>
  );
};
const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">익일</span>
      <span className="result">10</span>
    </div>
  );
};
const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
  return (
    <div className="table-tab-menu" style={{ cursor: 'pointer' }} onClick={options.onClick}>
      <span className="label">시스템점검</span>
      <span className="result">5</span>
    </div>
  );
};

function Horizontal() {
  // 브레드크럼
  const paths: MenuItem[] = [{ label: '상시감시실시(준법감시역)' }, { label: '감시항목조회' }];

  return (
    <div className="ibk-sys-wrap">
      <div className="ibk-sys-cover">
        {/* header */}
        <Header />

        {/* main */}
        <main className="ibk-sys-main">
          <Splitter style={{ height: '100%' }}>
            <SplitterPanel style={{ overflowX: 'auto' }} className="horizontal">
              <div className="splitter-container">
                {/* snb */}
                <SubNavigation />

                {/* title */}
                <div className="u-title">
                  <div className="inner">
                    <PageTitle title={'감시항목조회'}></PageTitle>
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
                            <span className="label">목록생성일</span>
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
                          <div className="u-formgroup">
                            <span className="label">담당자</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">지역본부</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">취급부점</span>
                            <div className="field">
                              <div className="p-inputgroup search w-120">
                                <InputText value="3242" />
                                <Button className="btn-ico clear" />
                                <Button className="btn-ico search" />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup clear w-120">
                                <InputText placeholder="3242" disabled />
                                <Button className="btn-ico clear" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">취급직원</span>
                            <div className="field">
                              <div className="p-inputgroup search w-120">
                                <InputText placeholder="3242" />
                                <Button className="btn-ico clear" />
                                <Button className="btn-ico search" />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup clear w-120">
                                <InputText placeholder="3242" />
                                <Button className="btn-ico clear" />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">점검상태</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">업무구분</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">지표명</span>
                            <div className="field">
                              <div className="p-inputgroup w-246">
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

                {/* tabs */}
                <TabView className="u-tabs">
                  <TabPanel headerTemplate={tab1HeaderTemplate}>
                    <div className="u-bunch">
                      <div className="inner">
                        <div className="num">
                          총<span>100</span>건
                        </div>
                        <div className="btns">
                          <Button label="신규 지도요청" className="btn-text primary blue-line" />
                          <Button label="신규 보완요청" className="btn-text primary blue-line" />
                          <Button label="조치보류" className="btn-text primary blue-line" />
                          <Button label="점검필" className="btn-text primary blue-line" />
                        </div>
                      </div>
                    </div>
                    <div className="u-table">
                      <div className="inner">
                        <PageCheckList />
                        <table>
                          <colgroup>
                            <col width="48px" />
                            <col width="125px" />
                            <col width="90px" />
                            <col width="97px" />
                            <col width="67px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="111px" />
                            <col width="111px" />
                            <col width="90px" />
                            <col width="111px" />
                            <col width="90px" />
                            <col width="111px" />
                            <col width="67px" />
                            <col width="111px" />
                            <col width="160px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </th>
                              <th>감시지표명</th>
                              <th>위험도</th>
                              <th>점검상태</th>
                              <th>저축</th>
                              <th>취급부점</th>
                              <th>취급직원</th>
                              <th>감리역</th>
                              <th>취급일</th>
                              <th>취급시간</th>
                              <th>고객번호</th>
                              <th>고객명</th>
                              <th>통화</th>
                              <th>거래금액</th>
                              <th>종류</th>
                              <th>구분</th>
                              <th>계좌번호</th>
                              <th>계정과목명</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(12)].map((e, idx) => (
                              <tr key={idx}>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <span>고객여신 신규취급</span>
                                </td>
                                <td>
                                  <span className="warn">고</span>
                                </td>
                                <td>
                                  <span>미점검</span>
                                </td>
                                <td>
                                  <span>문의</span>
                                </td>
                                <td>
                                  <span>화성병점(0468)</span>
                                </td>
                                <td>
                                  <span>홍길동(012345)</span>
                                </td>
                                <td>
                                  <span>이길동(021345)</span>
                                </td>
                                <td>
                                  <span>2024-10-31</span>
                                </td>
                                <td>
                                  <span>12:20:10</span>
                                </td>
                                <td>
                                  <span>01234</span>
                                </td>
                                <td>
                                  <span>(주)삼성전자</span>
                                </td>
                                <td>
                                  <span>KRW</span>
                                </td>
                                <td className="text-right">
                                  <span>40,000.0</span>
                                </td>
                                <td>
                                  <span>출금</span>
                                </td>
                                <td>
                                  <span>대체</span>
                                </td>
                                <td>
                                  <span>1002-110-123456</span>
                                </td>
                                <td>
                                  <span>계정과목명</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel headerTemplate={tab2HeaderTemplate}></TabPanel>
                  <TabPanel headerTemplate={tab3HeaderTemplate}></TabPanel>
                </TabView>
              </div>
            </SplitterPanel>
            <SplitterPanel style={{ overflowX: 'auto' }} className="horizontal">
              <div className="splitter-container">
                {/* snb */}
                <SubNavigation />

                {/* title */}
                <div className="u-title">
                  <div className="inner">
                    <PageTitle title={'감시항목조회'}></PageTitle>
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
                            <span className="label">목록생성일</span>
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
                          <div className="u-formgroup">
                            <span className="label">담당자</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">지역본부</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">취급부점</span>
                            <div className="field">
                              <div className="p-inputgroup search w-120">
                                <InputText value="3242" />
                                <Button className="btn-ico clear" />
                                <Button className="btn-ico search" />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup clear w-120">
                                <InputText placeholder="3242" disabled />
                                <Button className="btn-ico clear" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">취급직원</span>
                            <div className="field">
                              <div className="p-inputgroup search w-120">
                                <InputText placeholder="3242" />
                                <Button className="btn-ico clear" />
                                <Button className="btn-ico search" />
                              </div>
                            </div>
                            <div className="field">
                              <div className="p-inputgroup clear w-120">
                                <InputText placeholder="3242" />
                                <Button className="btn-ico clear" />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">점검상태</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formgroup-inline">
                          <div className="u-formgroup">
                            <span className="label">업무구분</span>
                            <div className="field">
                              <div className="p-inputgroup w-120">
                                <SelectBox />
                              </div>
                            </div>
                          </div>
                          <div className="u-formgroup">
                            <span className="label">지표명</span>
                            <div className="field">
                              <div className="p-inputgroup w-246">
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

                {/* tabs */}
                <TabView className="u-tabs">
                  <TabPanel headerTemplate={tab1HeaderTemplate}>
                    <div className="u-bunch">
                      <div className="inner">
                        <div className="num">
                          총<span>100</span>건
                        </div>
                        <div className="btns">
                          <Button label="신규 지도요청" className="btn-text primary blue-line" />
                          <Button label="신규 보완요청" className="btn-text primary blue-line" />
                          <Button label="조치보류" className="btn-text primary blue-line" />
                          <Button label="점검필" className="btn-text primary blue-line" />
                        </div>
                      </div>
                    </div>
                    <div className="u-table">
                      <div className="inner">
                        <PageCheckList />
                        <table>
                          <colgroup>
                            <col width="48px" />
                            <col width="125px" />
                            <col width="90px" />
                            <col width="97px" />
                            <col width="67px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="111px" />
                            <col width="111px" />
                            <col width="90px" />
                            <col width="111px" />
                            <col width="90px" />
                            <col width="111px" />
                            <col width="67px" />
                            <col width="111px" />
                            <col width="160px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                            <col width="125px" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>
                                <div className="u-checkbox">
                                  <CheckBox />
                                </div>
                              </th>
                              <th>감시지표명</th>
                              <th>위험도</th>
                              <th>점검상태</th>
                              <th>저축</th>
                              <th>취급부점</th>
                              <th>취급직원</th>
                              <th>감리역</th>
                              <th>취급일</th>
                              <th>취급시간</th>
                              <th>고객번호</th>
                              <th>고객명</th>
                              <th>통화</th>
                              <th>거래금액</th>
                              <th>종류</th>
                              <th>구분</th>
                              <th>계좌번호</th>
                              <th>계정과목명</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                              <th>타이틀</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(12)].map((e, idx) => (
                              <tr key={idx}>
                                <td>
                                  <div className="u-checkbox">
                                    <CheckBox />
                                  </div>
                                </td>
                                <td>
                                  <span>고객여신 신규취급</span>
                                </td>
                                <td>
                                  <span className="warn">고</span>
                                </td>
                                <td>
                                  <span>미점검</span>
                                </td>
                                <td>
                                  <span>문의</span>
                                </td>
                                <td>
                                  <span>화성병점(0468)</span>
                                </td>
                                <td>
                                  <span>홍길동(012345)</span>
                                </td>
                                <td>
                                  <span>이길동(021345)</span>
                                </td>
                                <td>
                                  <span>2024-10-31</span>
                                </td>
                                <td>
                                  <span>12:20:10</span>
                                </td>
                                <td>
                                  <span>01234</span>
                                </td>
                                <td>
                                  <span>(주)삼성전자</span>
                                </td>
                                <td>
                                  <span>KRW</span>
                                </td>
                                <td className="text-right">
                                  <span>40,000.0</span>
                                </td>
                                <td>
                                  <span>출금</span>
                                </td>
                                <td>
                                  <span>대체</span>
                                </td>
                                <td>
                                  <span>1002-110-123456</span>
                                </td>
                                <td>
                                  <span>계정과목명</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                                <td>
                                  <span>내용</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel headerTemplate={tab2HeaderTemplate}></TabPanel>
                  <TabPanel headerTemplate={tab3HeaderTemplate}></TabPanel>
                </TabView>
              </div>
            </SplitterPanel>
          </Splitter>
        </main>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Horizontal;
