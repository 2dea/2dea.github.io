import React, { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

import SppBreadcrumb from "@/pages/spp/component/Breadcrumb/SppBreadcrumb";
import RoleMainHeaderTitle from "@/layout/RoleMainHeaderTitle";
import RoleMainHeaderFavorite from "@/layout/RoleMainHeaderFavorite";
import RoleMainHeaderManual from "@/layout/RoleMainHeaderManual";

import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";

import SppButton from "@/pages/spp/component/Button/SppButton";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";

import { AutoComplete, Badge, Tabs, type TableColumnsType, type TableProps } from "antd";
import SppSelect from "@/pages/spp/component/Select/SppSelect";
import SppMultiSelect from "@/pages/spp/component/Select/SppMultiSelect";
import SppInputText from "@/pages/spp/component/InputText/SppInputText";
import SppTextArea from "@/pages/spp/component/TextArea/SppTextArea";
import SppTable from "@/pages/spp/component/Table/SppTable";

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address', className: 'g-start' },

  { title: 'Column 8', dataIndex: 'address', key: '8' },
  { title: 'Column 9', dataIndex: 'address', key: '9' },
  { title: 'Column 10', dataIndex: 'address', key: '10' },
  { title: 'Column 11', dataIndex: 'address', key: '11' },
  { title: 'Column 12', dataIndex: 'address', key: '12' },
  { title: 'Column 13', dataIndex: 'address', key: '13' },
  { title: 'Column 14', dataIndex: 'address', key: '14' },
  { title: 'Column 15', dataIndex: 'address', key: '15' },
  { title: 'Column 16', dataIndex: 'address', key: '16' },
  { title: 'Column 17', dataIndex: 'address', key: '17' },
  { title: 'Column 18', dataIndex: 'address', key: '18' },
  { title: 'Column 19', dataIndex: 'address', key: '19' },
  { title: 'Column 20', dataIndex: 'address', key: '20' },];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));


function TmpTsProg() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

    return (
    <>
              <div className="nodes" data-node-no="0">
                <div className="div-header">
                  <div className="prime">
                    <SppBreadcrumb itemsArray={['개인(신용)​정보보호', '주민번호, 민감정보 관리', '주민등록번호, 민감정보 처리현황 목록']} />

                    <div className="m-title">
                      <RoleMainHeaderTitle label={`전일조회사유등록`} render={false} />

                      <RoleMainHeaderFavorite render={true} />

                      <RoleMainHeaderManual render={true} />
                    </div>
                  </div>

                  <div className="extra">
                    <div className="m-binds type-end">
                      <div className="group _primary">
                        <SppButton color="purple" variant="outlined" specName="lined-1">미처리현황조회</SppButton>
                        <SppButton color="purple" variant="solid" specName="solid-1">최종반려</SppButton>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="div-center">
                  {/* <Tabs className="m-tabs">
                    <Tabs.TabPane tab="Tab 1" key="item-1" children={<>Content 1</>} />
                    <Tabs.TabPane tab="Tab 2" key="item-2">
                      Content 2
                    </Tabs.TabPane>
                  </Tabs> */}

                  <Tabs
                    type="card"
                    className="m-tabs type-1"
                    defaultActiveKey="2"
                    items={[
                      {
                        key: '1',
                        label: <><span className="label">미결재내역</span></>,
                        children: (
                          <>
                            <div>탭패널 1</div>
                          </>
                        ),
                      },
                      {
                        key: '2',
                        // label: <>반려내역</>,
                        label: <><span className="label">반려내역</span> <Badge showZero={true} count={1000} /></>,
                        children: (
                          <>
                            <div>탭패널 2</div>

                            <Tabs
                              type="line"
                              className="m-tabs type-2"
                              defaultActiveKey="1"
                              items={[
                                {
                                  key: '1',
                                  label: <><span className="label">미결재내역</span></>,
                                  children: (
                                    <>
                                      <div>탭패널 2-1</div>
                                    </>
                                  ),
                                },
                                {
                                  key: '2',
                                  // label: <>반려내역</>,
                                  label: <><span className="label">반려내역</span> <Badge showZero={true} count={44} /></>,
                                  children: (
                                    <>
                                      <div>탭패널 2-2</div>
                                    </>
                                  ),
                                },
                              ]}
                            />
                          </>
                        ),
                      },
                    ]}
                  />

                  <SppAutoComplete placeholder="" width="50" className="mode-required" />

                  <AutoComplete className="      mode-required         aaaaaaaaa bbbbbbbbbbbbb           cccccccccccccc    ddddd    " />

                  <div className="m-grid">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel required={true} wrapper="header" />

                            <div className="main">
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                              <span className="seps type-string _tilde"><span className="string">~</span></span>
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`직원`} required={true} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" value={`[88888888] 제갈공명`} width="80" className="mode-required" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={true} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" value={`[4444] 디지털금융센터`} width="90" className="mode-required" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`싱글셀렉트`} required={true} wrapper="header" />

                            <div className="main">
                              <SppSelect width="50" className="mode-required"
                                // options={[
                                //   { value: '0', label: '전체' },
                                //   { value: '1', label: '예' },
                                //   { value: '2', label: '아니오' },
                                // ]}
                                // defaultValue={['0']}
                              />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`멀티셀렉트`} required={true} wrapper="header" />

                            <div className="main">
                              <SppMultiSelect width="90" className="mode-required"
                                // options={[
                                //   { value: '0', label: '전체' },
                                //   { value: '1', label: '예' },
                                //   { value: '2', label: '아니오' },
                                // ]}
                                // defaultValue={['0', '2']}
                              />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`인풋`} required={true} wrapper="header" />

                            <div className="main">
                              <SppInputText placeholder="" width="50" className="mode-required" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`텍스트에리어`} required={true} wrapper="header" />

                            <div className="main">
                              <SppTextArea placeholder="" className="mode-required" />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton color="default" variant="solid" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">신청부점</dt>
                            <dd className="data">
                              [0034] 을지로
                            </dd>
                            <dd className="data">
                              2025-01-21
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">신청자</dt>
                            <dd className="data">
                              [000000] 홍길동
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">신청연도</dt>
                            <dd className="data">
                              <em className="o-chip var-lined-01"><span className="label">2025년</span></em>
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">신청상태</dt>
                            <dd className="data">
                              <em className="o-chip var-lined-01"><span className="label">신청마감</span></em>
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">계약내역</span></h2>
                          </div>

                          <div className="extra">
                            <div className="o-length">
                              <span className="head">전체</span>
                              <em className="data">
                                <span className="value">8</span>
                                <span className="units">건</span>
                              </em>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <div className="o-dataform">
                            <div className="table-wrapper">
                              <table className="table">
                                <colgroup>
                                  <col className="head" />
                                  <col className="data" />
                                  <col className="head" />
                                  <col className="data" />
                                  <col className="head" />
                                  <col className="data" />
                                </colgroup>

                                <tbody>
                                  <tr>
                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      AutoComplete
                                    </th>
                                    <td colSpan={1}>
                                      <SppAutoComplete placeholder="" className="mode-required" />
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>

                                    <th colSpan={1}>
                                      head
                                    </th>
                                    <td colSpan={1}>
                                      data
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      SppButton
                                    </th>
                                    <td colSpan={5}>
                                      <div className="extra">
                                        <div className="m-binds type-start">
                                          <div className="group">
                                            {/* <CommonButton label="알림전송" className="_lined-secondary" />
                                            <CommonButton label="공지사항" className="_lined-secondary" />
                                            <CommonButton label="결재선변경관리" className="_lined-secondary" />
                                            <CommonButton label="결재바로가기" className="_lined-secondary" /> */}
                                            <SppButton color="green" variant="filled" specName="filled-status-80">적정</SppButton>
                                            <SppButton color="default" variant="outlined" specName="normal">저장</SppButton>
                                            <SppButton color="purple" variant="outlined" specName="lined-1">저장</SppButton>
                                            <SppButton color="geekblue" variant="outlined" specName="lined-2">저장</SppButton>
                                            <SppButton color="cyan" variant="outlined" specName="lined-3">저장</SppButton>
                                            <SppButton color="volcano" variant="outlined" specName="lined-4">저장</SppButton>
                                          </div>
                                        </div>

                                        <div className="m-binds type-end">
                                          <div className="group _primary">
                                            {/* <CommonButton label="업무지원반려" className="_lined-primary" />
                                            <CommonButton label="업무지원결정" className="_lined-primary" />
                                            <CommonButton label="삭제" className="_delete" />
                                            <CommonButton label="취소" className="_cancel" />
                                            <CommonButton label="결재요청" className="_solid-primary" /> */}
                                            <SppButton color="default" variant="filled" specName="filled-status-00">적정</SppButton>
                                            <SppButton color="red" variant="filled" specName="filled-status-20">부적정</SppButton>
                                            <SppButton color="default" variant="solid" specName="inquire">저장</SppButton>
                                            <SppButton color="purple" variant="solid" specName="solid-1">저장</SppButton>
                                            <SppButton color="geekblue" variant="solid" specName="create">저장</SppButton>
                                            <SppButton color="cyan" variant="solid" specName="solid-3">저장</SppButton>
                                            <SppButton color="volcano" variant="solid" specName="solid-4">저장</SppButton>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="m-binds">
                                        <div className="group">
                                          <SppButton color="default" variant="solid">저장</SppButton>
                                          <SppButton color="default" variant="text">저장</SppButton>
                                          <SppButton color="default" variant="link">저장</SppButton>
                                          <button type="button"><span className="label">저장</span></button>
                                          <SppButton color="danger" variant="text">저장</SppButton>
                                          <SppButton color="danger" variant="link">저장</SppButton>
                                          <SppButton color="primary" variant="solid">저장</SppButton>
                                          <SppButton color="danger" variant="solid">저장</SppButton>
                                          <SppButton color="blue" variant="solid">저장</SppButton>
                                          <SppButton color="purple" variant="solid">저장</SppButton>
                                          <SppButton color="cyan" variant="solid">저장</SppButton>
                                          <SppButton color="green" variant="solid">저장</SppButton>
                                          <SppButton color="magenta" variant="solid">저장</SppButton>
                                          <SppButton color="pink" variant="solid">저장</SppButton>
                                          <SppButton color="red" variant="solid">저장</SppButton>
                                          <SppButton color="orange" variant="solid">저장</SppButton>
                                          <SppButton color="yellow" variant="solid">저장</SppButton>
                                          <SppButton color="volcano" variant="solid">저장</SppButton>
                                          <SppButton color="geekblue" variant="solid">저장</SppButton>
                                          <SppButton color="lime" variant="solid">저장</SppButton>
                                          <SppButton color="gold" variant="solid">저장</SppButton>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">계약내역</span></h2>
                          </div>

                          <div className="extra">
                            <div className="o-length">
                              <span className="head">전체</span>
                              <em className="data">
                                <span className="value">8</span>
                                <span className="units">건</span>
                              </em>
                            </div>

                            <div className="m-binds">
                              <div className="group">
                                <SppButton specName="inquire" className="eeeeeeeeeeeeee">저장</SppButton>
                                <SppButton color="default" variant="text">저장</SppButton>
                                <SppButton color="default" variant="link">저장</SppButton>
                                <button type="button"><span className="label">저장</span></button>
                                <SppButton color="danger" variant="text">저장</SppButton>
                                <SppButton color="danger" variant="link">저장</SppButton>
                                <SppButton color="primary" variant="solid">저장</SppButton>
                                <SppButton color="danger" variant="solid">저장</SppButton>
                                <SppButton color="blue" variant="solid">저장</SppButton>
                                <SppButton color="purple" variant="solid">저장</SppButton>
                                <SppButton color="cyan" variant="solid">저장</SppButton>
                                <SppButton color="green" variant="solid">저장</SppButton>
                                <SppButton color="magenta" variant="solid">저장</SppButton>
                                <SppButton color="pink" variant="solid">장</SppButton>
                                <SppButton color="red" variant="solid">저장</SppButton>
                                <SppButton color="orange" variant="solid">저장</SppButton>
                                <SppButton color="yellow" variant="solid">저장</SppButton>
                                <SppButton color="volcano" variant="solid">저장</SppButton>
                                <SppButton color="geekblue" variant="solid" size="large">저장</SppButton>
                                <SppButton color="lime" variant="solid" size="small">저장</SppButton>
                                <SppButton color="gold" variant="solid" size="middle">저장</SppButton>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main _primary">
                          <SppTable<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} paginationFlag scroll={{ x: 'max-content' }} />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
    </>
  );
}

export default TmpTsProg;
