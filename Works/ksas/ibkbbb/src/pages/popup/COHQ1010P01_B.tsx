/**
 * @description COHQ1010P01_03상시감시현황(본부영업점)_01보완요청현황_02상세_02감시역(재보완시)
 */

// dependency
import React, { useState } from 'react';

// components
import CheckBox from '@components/CheckBox';
import DatePicker from '@components/DatePicker';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Tag } from 'primereact/tag';

function COHQ1010P01_B() {
  // 모달
  const [visible, setVisible] = useState<boolean>(true);
  const footerContent = (
    <div className="u-modal-footer divide">
      <div className="flex">
        <Button label="저장" className="btn-text primary blue-line" disabled onClick={() => setVisible(false)} />
      </div>
      <div className="flex">
        <Button
          label="점검필(관리자)"
          className="btn-text primary blue-fill"
          onClick={() => setVisible(false)}
          autoFocus
        />
        <Button
          label="재보완등록"
          className="btn-text primary blue-fill"
          disabled
          onClick={() => setVisible(false)}
          autoFocus
        />
      </div>
    </div>
  );

  // 텍스트박스
  const [value, setValue] = useState<string>('');

  return (
    <Dialog
      className="u-type-modal"
      header="보완요청 상세"
      visible={visible}
      style={{ width: '800px' }}
      onHide={() => setVisible(false)}
      footer={footerContent}
    >
      <div className="u-tag absolute t-28 l-138">
        <Tag severity="warning" value="중요도 중"></Tag>
      </div>
      <div className="u-window border">
        <div className="grid">
          <div className="col-12">
            <div className="win-panel">
              <h3 className="win-title mb-12">보완요청 내용</h3>
              <div className="u-dataview w-92">
                <div className="inner">
                  <div className="column f-14">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>취급점</span>
                      </dt>
                      <dd>
                        <span>동탄(5465125)</span>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>지표명</span>
                      </dt>
                      <dd>
                        <span>지표명</span>
                      </dd>
                    </dl>
                  </div>
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>담당자</span>
                      </dt>
                      <dd>
                        <span>이길동(준법감시역)</span>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>취급자</span>
                      </dt>
                      <dd>
                        <span>취급자</span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-92 mt-r-1 expand">
                <div className="inner">
                  <div className="column f-14">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>참고사항</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="감시역만 보입니다" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-92 mt-r-1 expand">
                <div className="inner">
                  <div className="column f-14">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>보완제목</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup clear">
                          <InputText value="결재를 추가해 보완해주세요" />
                          <Button className="btn-ico clear" />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          기한일자/
                          <br />
                          요청내용
                        </span>
                      </dt>
                      <dd className="f-col">
                        <div className="flex">
                          <div className="p-inputgroup flex-shrink w-126">
                            <DatePicker />
                          </div>
                          <div className="p-inputgroup">
                            <Button label="기한일자 수정" className="btn-text secondary default ml-6" />
                          </div>
                          <div className="p-inputgroup flex-end">
                            <Button label="내용 수정" className="btn-text secondary default ml-6" />
                          </div>
                        </div>
                        <div className="p-inputgroup">
                          <InputTextarea
                            value={
                              '준법감시시스템(감사사후관리·부점보완요청목록)에서 보완기일 내 감리역(또는 담당 팀장) 및 부저장의 결재를 거쳐 보완완료'
                            }
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                            placeholder="placeholder"
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
            </div>

            <div className="win-panel mt-32">
              <h3 className="win-title mb-12">보완 보고사항</h3>
              <div className="u-dataview w-92">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>보고일자</span>
                      </dt>
                      <dd>
                        <span>2024-11-07</span>
                      </dd>
                    </dl>
                  </div>
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>보고직원명</span>
                      </dt>
                      <dd>
                        <span>이길동</span>
                      </dd>
                    </dl>
                  </div>
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>감리역</span>
                      </dt>
                      <dd>
                        <span>정감리</span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-92 mt-r-1 expand">
                <div className="inner">
                  <div className="column f-14">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>보완내용</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup">
                          <InputTextarea
                            value={'2024년 12월 까지 미 상환시 채권관리부에 이전하여 토지 매각 진행키로 함'}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                            disabled
                            rows={6}
                            cols={30}
                          />
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="u-dataview w-92 mt-r-1 expand">
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
                                  <col width="444px" />
                                  <col width="*" />
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
                                        <span>1</span>
                                      </td>
                                      <td className="text-left">
                                        <span className="xw-444">
                                          (붙임3)2024년 국외점표 「사고예방대책」 전문_240615.hwp(붙임3)2024년 국외점표
                                          「사고예방대책」 전문_240615.hwp
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

            <div className="win-panel mt-32">
              <h3 className="win-title mb-12">재보완 보고사항</h3>

              <div className="u-dataview w-92 mt-r-1 expand">
                <div className="inner">
                  <div className="column">
                    <dl className="u-dataview-list">
                      <dt>
                        <span>
                          기한일자/
                          <br />
                          재보완
                          <br />
                          요청내용
                        </span>
                      </dt>
                      <dd className="f-col">
                        <div className="flex">
                          <div className="p-inputgroup flex-shrink w-126">
                            <DatePicker />
                          </div>
                          <div className="p-inputgroup">
                            <Button label="기한일자 수정" className="btn-text secondary default ml-6" />
                          </div>
                          <div className="p-inputgroup flex-end">
                            <Button label="내용 수정" className="btn-text secondary default ml-6" />
                          </div>
                        </div>
                        <div className="p-inputgroup">
                          <InputTextarea
                            value="여신승인조건 미이행"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                            placeholder="placeholder"
                            className="mt-6"
                            rows={6}
                            cols={30}
                          />
                        </div>
                      </dd>
                    </dl>
                    <dl className="u-dataview-list">
                      <dt>
                        <span>재보완내용</span>
                      </dt>
                      <dd>
                        <div className="p-inputgroup">
                          <InputTextarea
                            value="내용이 들어갑니다"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                            placeholder="placeholder"
                            rows={6}
                            cols={30}
                            disabled
                          />
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
    </Dialog>
  );
}

export default COHQ1010P01_B;
