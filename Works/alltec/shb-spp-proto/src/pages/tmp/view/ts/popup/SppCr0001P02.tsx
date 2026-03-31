import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

import { Badge, Tabs, Tag } from "antd";
import type { ColumnsType, TableRowSelection } from "antd/es/table/interface";

import SppAutoComplete from "@/pages/spp/component/AutoComplete/SppAutoComplete";
import SppButton from "@/pages/spp/component/Button/SppButton";
import SppCheckbox from "@/pages/spp/component/Checkbox/SppCheckbox";
import SppDatePicker from "@/pages/spp/component/DatePicker/SppDatePicker";
import SppInputFile from "@/pages/spp/component/Input/SppInputFile";
import SppInputText from "@/pages/spp/component/Input/SppInputText";
import SppMultiSelect from "@/pages/spp/component/Select/SppMultiSelect";
import SppObjLabel from "@/pages/spp/component/ObjLabel/SppObjLabel";
import SppObjSymbol, { resLabel } from "@/pages/spp/component/ObjSymbol/SppObjSymbol";
import SppRadio from "@/pages/spp/component/Radio/SppRadio";
import SppSelect from "@/pages/spp/component/Select/SppSelect";
import SppTable from "@/pages/spp/component/Table/SppTable";
import SppTextArea from "@/pages/spp/component/TextArea/SppTextArea";

export interface SppCr0001P02Props extends SppModalProps {};

export const SppCr0001P02 = (props: SppCr0001P02Props) => {
  const [testValueFile1010, setTestValueFile1010] = useState<File | null>(null);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <SppModal
        {...props}
        title="동의서 신규등록"
        footerAppendButton={
          <>
            <SppButton variant="outlined" color="purple" specName="lined-1" onClick={() => alert(1)}>폐기요청</SppButton>
          </>
        }
        footerAppend1Button={
          <>
            <SppButton variant="outlined" color="purple" specName="lined-1" onClick={() => alert(1)}>임시저장</SppButton>
          </>
        }
        okText="검토요청"
        onOk={ (e) => alert('ok') }
        wrapWidth="70"
        // open
      >
        <div className="div-center page-appagreements">
          <div className="m-grid _primary">
            <div className="column">

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">담당자정보</span></h4>
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
                              <SppObjLabel label={`담당부서`} required={false} />
                            </th>
                            <td colSpan={1}>
                              [0000] Tech기획부
                            </td>

                            <th colSpan={1}>
                              <SppObjLabel label={`담당자`} required={false} />
                            </th>
                            <td colSpan={3}>
                              [00000000] 홍길동
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
                    <h4 className="o-heading level2"><span className="label">동의서 협의번호</span></h4>

                    <div className="o-helper style-strong"><strong className="label">아래 협의요청코드를 S-Basic 업무양식 등재 시 [협의요청코드] 필드에 반드시 입력되어야 하며, 미입력 시 반려됩니다.</strong></div>
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
                              <SppObjLabel label={`협의요청코드`} required={false} />
                            </th>
                            <td colSpan={5}>
                              20260225-000-0001
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
                    <h4 className="o-heading level2"><span className="label">동의서 신청정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="m-agreementform">
                    <ol className="counter">
                      <li>
                        <div className="m-agreement">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">동의서 기본정보</span>
                            </div>
                          </div>
                          <div className="main">
                            <ol className="counter">
                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">업무부문을 선택해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppSelect width="90" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">동의서 종류를 선택해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '수집·이용' },
                                                  { value: '1', label: '제3자제공' },
                                                  { value: '2', label: '수집·이용·제공' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>수집·이용 : 당행에서만 정보를 수집하고 이용하는 경우</li>
                                            <li>제3자제공 : 해당 업무 수행을 위해 제3자에게 당행에서 수집한 정보를 넘기는 경우</li>
                                            <li>※ 제휴와 위수탁 여부는 법률검토 또는 계약서를 통해 확인 가능(준법감사부)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="m-agreement">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">서비스 개요</span>
                            </div>
                          </div>
                          <div className="main">
                            <ol className="counter">
                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">상품 또는 서비스명을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputText placeholder="예시) 스토리뱅크 서비스 가입 신청" width="100p" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">상품/서비스 시행일자를 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppDatePicker placeholder="시행일자" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>시행일자 : 상품/서비스 시행 예정일자</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">고객에게 상품/서비스를 제공할 채널을 선택해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '대면' },
                                                  { value: '1', label: '비대면' },
                                                  { value: '2', label: '대면 + 비대면' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">해당 상품/서비스를 제공할 채널을 상세하게 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputText placeholder="채널명 입력" width="100p" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>대면, SOL, 슈퍼SOL, 헤이영캠퍼스, 땡겨요 등</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="m-agreement">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">개인(신용)정보 수집·이용</span>
                            </div>
                          </div>
                          <div className="main">
                            <ol className="counter">
                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 개인(신용)정보를 수집·이용하는 목적은 무엇인가요?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputText placeholder="예시) 스토리뱅크 서비스 가입 시 회원관리 및 금융거래 설정 이행 및 유지" width="100p" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 수집한 개인(신용)정보의 보유·이용기간은 언제까지인가요?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <div className="m-checks">
                                                <div className="item"><SppCheckbox>금융거래종료</SppCheckbox></div>
                                                <div className="item"><SppCheckbox>서비스종료</SppCheckbox></div>
                                                <div className="item">
                                                  <SppCheckbox>
                                                    <SppObjLabel label={`기타`} />
                                                    <SppInputText placeholder="" width="90" />
                                                  </SppCheckbox>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 수집·이용하려는 항목을 상세하게 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '항목조회' },
                                                  { value: '1', label: '엑셀업로드(항목 10개 이상)' },
                                                ]}
                                                defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`수집·이용 항목 조회`} wrapper="header" />
                                            <div className="main">
                                              <SppAutoComplete placeholder="항목명 입력" />
                                              <span className="binds">
                                                <SppButton>추가</SppButton>
                                              </span>
                                            </div>
                                          </div>

                                          <div className="m-result">
                                            <div className="m-inline-binds style-wrap">
                                              <Tag closeIcon variant="outlined">성명</Tag>
                                              <Tag closeIcon variant="outlined">휴대전화번호</Tag>
                                              <Tag closeIcon variant="outlined">계좌번호</Tag>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="o-board type-2">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`항목 엑셀업로드`} wrapper="header" append={
                                              <>
                                                <div className="o-helper style-strong"><strong className="label">항목이 많을 경우 엑셀파일로 업로드해주세요.</strong></div>
                                              </>
                                            } />
                                            <div className="main">
                                              <SppInputFile value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} />
                                            </div>
                                          </div>

                                          <div className="m-result">
                                            <a href="#" className="o-link _link-primary"><span className="label">성명, 휴대전화번호, 계좌번호 외 300건</span></a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">수집·이용하려는 항목에 주민등록번호가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="법령조항 기재" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>포함인 경우, 타 법령에서 주민등록번호를 처리할 수 있다는 법령조항 기재</li>
                                            <li>타 법령에서 처리할 수 있는 근거의 확인이 필요한 경우 준법감시부에 문의</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">수집·이용하려는 항목에 민감정보(생체인식정보 포함)가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="지문정보, 범죄경력, 안면인식정보" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>민감정보 : 유전정보, 정치적 견해, 건강 등에 대한 정보</li>
                                            <li>생체인식정보 : 지문정보, 홍채정보, 안면인식정보 등</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">수집·이용하려는 항목에 행태정보가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="IP정보, 로그정보" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>행태정보 : 웹사이트 및 앱 방문 사용이력 등의 온라인상의 활동 정보</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">연계정보 수집정보가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '포함' },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>연계정보(CI) : 온라인 상에서 동일인을 식별하기 위해 주민등록번호를 일방향 암호화한 88바이트 고유 식별자</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="m-agreement">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">개인(신용)정보 제공</span>
                            </div>
                          </div>
                          <div className="main">
                            <ol className="counter">
                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 개인(신용)정보를 제공하려는 목적은 무엇인가요?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputText placeholder="" width="100p" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 수집한 정보를 제공하는 대상(업체, 기관, 사람)은 누구인가요?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputText placeholder="" width="100p" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">당행에서 제공한 개인(신용)정보의 보유·이용기간은 언제까지인가요?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <div className="m-checks">
                                                <div className="item"><SppCheckbox>금융거래종료</SppCheckbox></div>
                                                <div className="item"><SppCheckbox>서비스종료</SppCheckbox></div>
                                                <div className="item">
                                                  <SppCheckbox>
                                                    <SppObjLabel label={`기타`} />
                                                    <SppInputText placeholder="" width="90" />
                                                  </SppCheckbox>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">제공하려는 항목을 상세하게 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '항목조회' },
                                                  { value: '1', label: '엑셀업로드(항목 10개 이상)' },
                                                ]}
                                                defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`제공 항목 조회`} wrapper="header" />
                                            <div className="main">
                                              <SppAutoComplete placeholder="항목명 입력" />
                                              <span className="binds">
                                                <SppButton>추가</SppButton>
                                              </span>
                                            </div>
                                          </div>

                                          <div className="m-result">
                                            <div className="m-inline-binds style-wrap">
                                              <Tag closeIcon variant="outlined">성명</Tag>
                                              <Tag closeIcon variant="outlined">휴대전화번호</Tag>
                                              <Tag closeIcon variant="outlined">계좌번호</Tag>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="o-board type-2">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`항목 엑셀업로드`} wrapper="header" append={
                                              <>
                                                <div className="o-helper style-strong"><strong className="label">항목이 많을 경우 엑셀파일로 업로드해주세요.</strong></div>
                                              </>
                                            } />
                                            <div className="main">
                                              <SppInputFile value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} />
                                            </div>
                                          </div>

                                          <div className="m-result">
                                            <a href="#" className="o-link _link-primary"><span className="label">성명, 휴대전화번호, 계좌번호 외 300건</span></a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">제공하려는 항목에 주민등록번호가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="법령조항 기재" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>포함인 경우, 타 법령에서 주민등록번호를 처리할 수 있다는 법령조항 기재</li>
                                            <li>타 법령에서 처리할 수 있는 근거의 확인이 필요한 경우 준법감시부에 문의</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">제공하려는 항목에 민감정보(생체인식정보 포함)가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="지문정보, 범죄경력, 안면인식정보" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>민감정보 : 유전정보, 정치적 견해, 건강 등에 대한 정보</li>
                                            <li>생체인식정보 : 지문정보, 홍채정보, 안면인식정보 등</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">제공하려는 항목에 행태정보가 포함되어 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="IP정보, 로그정보" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>행태정보 : 웹사이트 및 앱 방문 사용이력 등의 온라인상의 활동 정보</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">수신 금융거래관련 정보를 제공하고 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: <><SppObjLabel label={`포함`} /><SppInputText placeholder="계좌번호 거래금액" width="90" /></> },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>수신 금융거래 관련 정보를 제공하는 경우 금융거래 통지 대상 여부를 개인솔루션부에 문의</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">연계정보를 제공하고 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppRadio
                                                options={[
                                                  { value: '0', label: '포함' },
                                                  { value: '1', label: '미포함' },
                                                ]}
                                                // defaultValue={'0'}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>연계정보(CI) : 온라인 상에서 동일인을 식별하기 위해 주민등록번호를 일방향 암호화한 88바이트 고유 식별자</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">상품/서비스 관련 파일(스토리보드, 업무제휴계약서, 준법검토문서 등)을 업로드해주세요.</span>
                                      </div>

                                      <div className="answer">

                                        <div className="m-section">
                                          <div className="m-header">
                                            <div className="prime">
                                              <div className="o-helper style-normal"><strong className="label">허용확장자: doc, docx, ppt, pptx, xls, xlsx, csv, pdf, txt</strong></div>
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
                                                        <SppObjLabel label={`협의요청코드`} required={false} />
                                                      </th>
                                                      <td colSpan={5}>
                                                        20260225-000-0001
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default SppCr0001P02;
