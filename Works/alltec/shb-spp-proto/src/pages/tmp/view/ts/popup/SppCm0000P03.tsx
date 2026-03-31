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

export interface SppCm0000P03Props extends SppModalProps {};

export const SppCm0000P03 = (props: SppCm0000P03Props) => {
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
        title="{{적재요청}} 알림발송"
        okText="발송"
        onOk={ (e) => alert('ok') }
        // wrapWidth="50"
        // open
      >
        <div className="div-center page-infosending">
          <div className="m-grid _primary">
            <div className="column">

              <div className="m-section">
                <div className="m-header">
                  <div className="prime">
                    <h4 className="o-heading level2"><span className="label">알림발송 기본정보</span></h4>
                  </div>
                </div>

                <div className="main">
                  <div className="o-dataform">
                    <div className="table-wrapper">
                      <table className="table">
                        <colgroup>
                          <col className="head" />
                          <col className="data" />
                        </colgroup>

                        <tbody>
                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`알림방식`} required={false} />
                            </th>
                            <td colSpan={1}>
                              쪽지
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`알림수신자`} required={false} />
                            </th>
                            <td colSpan={1}>
                              미적재 담당자
                            </td>
                          </tr>

                          <tr>
                            <th colSpan={1}>
                              <SppObjLabel label={`알림내용`} required={true} />
                            </th>
                            <td colSpan={1}>
                              <div className="m-field">
                                <div className="main">
                                  <SppTextArea placeholder="내용을 입력해주세요" rows={10} className="mode-required" value={`※ 본 쪽지는 동의이력 미적재 동의서를 운영중인 담당자께 발송되었습니다.

현재 운영중인 동의서에 대한 동의이력 적재가 이루어지고 있지 않습니다.

동의서징구화면 개발 담당자(IT담당자)에게 NEXT팀 담당자를 통해 개발 공통모듈 요청 후 개발 부탁드리겠습니다.

문의사항이 있으신 경우 정보보호본부로 연락 바랍니다.`} />
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

            </div>
          </div>
        </div>
      </SppModal>
    </>
  )
}

export default SppCm0000P03;
