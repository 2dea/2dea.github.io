import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SppModal, { type SppModalProps } from "@/pages/spp/component/Modal/SppModal";

import { Badge, Tabs } from "antd";
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
                    <h4 className="o-heading level2"><span className="label">동의서 신청정보</span></h4>
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
                              <SppObjLabel label={`신청단위`} required={true} />
                            </th>
                            <td colSpan={5}>
                              <SppRadio
                                options={[
                                  { value: '0', label: '개인별' },
                                  { value: '1', label: '부서별' },
                                ]}
                              />
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`화면/메뉴구분`} required={true} />
                            </th>
                            <td colSpan={5}>
                              <div className="m-checks">
                                <div className="item"><SppCheckbox>통합단말</SppCheckbox></div>
                                <div className="item"><SppCheckbox>개인CRM</SppCheckbox></div>
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
                    <h4 className="o-heading level2"><span className="label">동의서 신청정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="m-survey-form">
                    <ol>
                      <li>
                        <div className="m-survey">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">시설관리</span>
                            </div>
                            <div className="binds">
                              <SppRadio
                                options={[
                                  { value: '0', label: '예' },
                                  { value: '1', label: '아니오' },
                                ]}
                                // defaultValue={'0'}
                              />
                            </div>
                          </div>
                          <div className="main">
                            <ol>
                              <li>
                                <fieldset className="o-survey">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="caption">
                                    <strong className="c-color-strong">안전작업허가제 대상작업(고소작업, 밀폐공간출입작업) 착수 여부 사전공유</strong>
                                  </div>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 안전작업허가제 대상작업 실시 예정이 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '예' },
                                            { value: '1', label: '아니오' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>고소작업 : 외벽 청소, 외벽 현수막 설치, 선큰 조형물 청소 등</li>
                                            <li>밀폐공간출입작업 : 저수조 청소, 정화조 청소, 집수정 청소, 물탱크 청소 등</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시장소 및 작업명을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppTextArea placeholder="(예시) 본점 지하-저수조 청소" rows={3} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시일정을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppDatePicker placeholder="" />
                                            <span className="seps type-string _tilde"><span className="string">~</span></span>
                                            <SppDatePicker placeholder="" />
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

                      <li>
                        <div className="m-survey">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목</span>
                            </div>
                            <div className="binds">
                              <SppRadio
                                options={[
                                  { value: '0', label: '예' },
                                  { value: '1', label: '아니오' },
                                ]}
                                // defaultValue={'0'}
                              />
                            </div>
                          </div>
                          <div className="main">
                            <ol>
                              <li>
                                <fieldset className="o-survey">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
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
                        <div className="m-survey">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">기타유형</span>
                            </div>
                          </div>
                          <div className="main">
                            <ol>
                              <li>
                                <fieldset className="o-survey">
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">타지점에 위탁한 예비열쇠 확인정보를 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-survey-field">
                                          <div className="m-field">
                                            <SppObjLabel label={`예비열쇠 보관 부점`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`정상 보관 확인날짜`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppDatePicker placeholder="" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>예비열쇠 보관확인(업무지원시스템 &rarr; 열쇠관리 &rarr; 예비열쇠 보관확인증)(<a href="javascript:" className="o-link _normal">내용 바로가기</a>)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">비밀 또는 대외비의 개수를 입력해주세요.(점검일이 속한 월의 전월 말일 기준)</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-survey-field">
                                          <div className="m-field">
                                            <SppObjLabel label={`2급`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`3급`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`대외비`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>(예시) 비밀등급 2급 - 4개</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">외부직원 현황을 알려주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-survey-field">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppTextArea placeholder="건물 / 층 / 이름" rows={3} />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputFile value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>
                                              외부직원 출입자 현황(<a href="javascript:" className="o-link _normal">바로가기</a>) 작성하여 본 점검표에 "붙임"으로 첨부

                                              <ul className="o-bullets type-hyphen">
                                                <li>외부직원 : 당행 출입증을 발급받은 외부 인원(단, IBK시스템, IBK서비스 소속 직원은 작성 제외)</li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">월별 보안교육을 실시하였습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-survey-field">
                                          <div className="m-field">
                                            <SppObjLabel label={`일자`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppDatePicker placeholder="" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`직원명`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText width="50" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`비고`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppTextArea placeholder="" rows={3} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>시행문 첨부파일 참고하여 작성</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-survey" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">부점별 특성에 맞는 보안점검을 실시하고 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppTextArea placeholder="(예시) &#13;1. 인사부 : 비밀취급인가 관련 서류철 정비 &#13;2. 정보보호총괄부 : 외주용역 보안정책 점검 &#13;3. 투자금융부 : 투자관련 내부검토자료 보관 정비 &#13;4. 기업고객부 : 중소기업 현장 간담회 참석자 고객정보 유출 방지를 위한 점검 &#13;5. 내부통제총괄부 : 책무구조도 시스템 사업 외주직원에 대한 출입증 관리 및 보안교육 강화" rows={6} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>부서별 보안업무세부추진계획 수립 시 작성한 중점추진사항 위주로 점검 및 작성</li>
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
                    </ol>
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
                              <span className="label">시설관리</span>
                            </div>
                            <div className="binds">
                              <SppRadio
                                options={[
                                  { value: '0', label: '예' },
                                  { value: '1', label: '아니오' },
                                ]}
                                // defaultValue={'0'}
                              />
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
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="caption">
                                    <strong className="c-color-strong">안전작업허가제 대상작업(고소작업, 밀폐공간출입작업) 착수 여부 사전공유</strong>
                                  </div>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 안전작업허가제 대상작업 실시 예정이 있습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '예' },
                                            { value: '1', label: '아니오' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>고소작업 : 외벽 청소, 외벽 현수막 설치, 선큰 조형물 청소 등</li>
                                            <li>밀폐공간출입작업 : 저수조 청소, 정화조 청소, 집수정 청소, 물탱크 청소 등</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시장소 및 작업명을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppTextArea placeholder="(예시) 본점 지하-저수조 청소" rows={3} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">차주 예정되어 있는 안전작업허가제 대상작업의 실시일정을 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppDatePicker placeholder="" />
                                            <span className="seps type-string _tilde"><span className="string">~</span></span>
                                            <SppDatePicker placeholder="" />
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

                      <li>
                        <div className="m-agreement">
                          <div className="header">
                            <div className="subject">
                              <span className="order"><span className="count"></span></span>
                              <span className="label">긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목</span>
                            </div>
                            <div className="binds">
                              <SppRadio
                                options={[
                                  { value: '0', label: '예' },
                                  { value: '1', label: '아니오' },
                                ]}
                                // defaultValue={'0'}
                              />
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
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">문항문항문항?</span>
                                      </div>

                                      <div className="answer">
                                        <SppRadio
                                          options={[
                                            { value: '0', label: '양호' },
                                            { value: '1', label: '불량' },
                                            { value: '2', label: '해당사항 없음' },
                                          ]}
                                          // defaultValue={'0'}
                                        />
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>설명설명설명</li>
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
                              <span className="label">기타유형</span>
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
                                        <span className="label">타지점에 위탁한 예비열쇠 확인정보를 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`예비열쇠 보관 부점`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`정상 보관 확인날짜`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppDatePicker placeholder="" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>예비열쇠 보관확인(업무지원시스템 &rarr; 열쇠관리 &rarr; 예비열쇠 보관확인증)(<a href="javascript:" className="o-link _normal">내용 바로가기</a>)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">비밀 또는 대외비의 개수를 입력해주세요.(점검일이 속한 월의 전월 말일 기준)</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`2급`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`3급`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`대외비`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText placeholder="" width="50" className="g-end" />
                                              <span className="units">개</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>(예시) 비밀등급 2급 - 4개</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">외부직원 현황을 알려주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <div className="main">
                                              <SppTextArea placeholder="건물 / 층 / 이름" rows={3} />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <div className="main">
                                              <SppInputFile value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>
                                              외부직원 출입자 현황(<a href="javascript:" className="o-link _normal">바로가기</a>) 작성하여 본 점검표에 "붙임"으로 첨부

                                              <ul className="o-bullets type-hyphen">
                                                <li>외부직원 : 당행 출입증을 발급받은 외부 인원(단, IBK시스템, IBK서비스 소속 직원은 작성 제외)</li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">월별 보안교육을 실시하였습니까?</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-agreementfield">
                                          <div className="m-field">
                                            <SppObjLabel label={`일자`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppDatePicker placeholder="" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`직원명`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppInputText width="50" />
                                            </div>
                                          </div>

                                          <div className="m-field">
                                            <SppObjLabel label={`비고`} required={false} wrapper="header" />
                                            <div className="main">
                                              <SppTextArea placeholder="" rows={3} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>시행문 첨부파일 참고하여 작성</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </li>

                              <li>
                                <fieldset className="o-agreement" disabled>
                                  <div className="fields">
                                    <div className="term">
                                      <div className="question">
                                        <span className="order"><span className="count"></span></span>
                                        <span className="label">부점별 특성에 맞는 보안점검을 실시하고 입력해주세요.</span>
                                      </div>

                                      <div className="answer">
                                        <div className="m-field">
                                          <div className="main">
                                            <SppTextArea placeholder="(예시) &#13;1. 인사부 : 비밀취급인가 관련 서류철 정비 &#13;2. 정보보호총괄부 : 외주용역 보안정책 점검 &#13;3. 투자금융부 : 투자관련 내부검토자료 보관 정비 &#13;4. 기업고객부 : 중소기업 현장 간담회 참석자 고객정보 유출 방지를 위한 점검 &#13;5. 내부통제총괄부 : 책무구조도 시스템 사업 외주직원에 대한 출입증 관리 및 보안교육 강화" rows={6} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="desc">
                                      <div className="o-board type-2 -has-board-container">
                                        <div className="board-container">
                                          <ul className="o-bullets type-disc">
                                            <li>부서별 보안업무세부추진계획 수립 시 작성한 중점추진사항 위주로 점검 및 작성</li>
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
