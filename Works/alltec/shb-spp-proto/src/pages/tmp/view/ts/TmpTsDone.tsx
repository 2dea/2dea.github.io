import React, { useEffect, useMemo, useRef, useState, } from "react";
import type { CSSProperties, ReactNode } from "react";

import SYS_IMAGE_PARTIAL from "@/pages/spp/resource/images";

import RoleMainHeaderTitle from "@/layout/RoleMainHeaderTitle";
import RoleMainHeaderFavorite from "@/layout/RoleMainHeaderFavorite";
import RoleMainHeaderManual from "@/layout/RoleMainHeaderManual";
import SppBreadcrumb from "@/pages/spp/component/Breadcrumb/SppBreadcrumb";

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

import PopupSample from "./popup/PopupSample";
import SppCm0000P01 from "./popup/SppCm0000P01";
import SppCm0000P02 from "./popup/SppCm0000P02";
import SppCm0000P03 from "./popup/SppCm0000P03";
import SppAp0002P01 from "./popup/SppAp0002P01";
import SppCr0001P02 from "./popup/SppCr0001P02";
import Table2060 from "./popup/Table2060";
import Table2070 from "./popup/Table2070";
import Table2071 from "./popup/Table2071";
import Help1010 from "./popup/Help1010";
import Help1020 from "./popup/Help1020";


function TmpTsProg() {
  const [isOpenPopupSample, setIsOpenPopupSample] = useState(false);
  const [isOpenSppCm0000P01, setIsOpenSppCm0000P01] = useState(false);
  const [isOpenSppCm0000P02, setIsOpenSppCm0000P02] = useState(false);
  const [isOpenSppCm0000P03, setIsOpenSppCm0000P03] = useState(false);
  const [isOpenSppAp0002P01, setIsOpenSppAp0002P01] = useState(false);
  const [isOpenSppCr0001P02, setIsOpenSppCr0001P02] = useState(false);
  const [isOpenTable2060, setIsOpenTable2060] = useState(false);
  const [isOpenTable2070, setIsOpenTable2070] = useState(false);
  const [isOpenTable2071, setIsOpenTable2071] = useState(false);
  const [isOpenHelp1010, setIsOpenHelp1010] = useState(false);
  const [isOpenHelp1020, setIsOpenHelp1020] = useState(false);

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

  // interface table9010 {}
  const table9010Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:57:48` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: 219, ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '조회용도', render: (v, r, i) => { return (
      <SppMultiSelect placeholder="조회용도 선택" width="60"
        options={[
          { value: '0', label: '수신업무(펀드,방카,신탁 등)' },
          { value: '1', label: '여신업무' },
          { value: '2', label: '외환업무' },
          { value: '3', label: '부수대행/전자금융' },
          { value: '4', label: '담당고객 기일관리' },
          { value: '5', label: '마케팅' },
          { value: '6', label: '내부통제(감사부,준법감시부,여신감리부 등)' },
          { value: '7', label: '기타(단순업무문의 등)' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '조회목적', render: (v, r, i) => { return (
      <SppSelect placeholder="조회목적 선택" width="60"
        options={[
          { value: '0', label: '상담' },
          { value: '1', label: '고객요청' },
          { value: '2', label: '기타' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '조회사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '반려사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} className="mode-string" value={`이러이러한 이유와 저러저러한 사유로 반려하고 싶으나 뭔가 이유가 있었을 거라 나는 생각하긴 하지만 그래도 이러이러한 이유와 저러저러한 사유로 반려`} readOnly />
    ) }, },

    // { dataIndex: 'data9998', width: '', ellipsis: false, align: 'start', title: <SppObjLabel label={`커스텀레이블`} required={true} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, },
    // { dataIndex: 'data9999', width: 99, ellipsis: true, align: 'start', title: '테스트', },
    // { dataIndex: 'data9999', width: '', ellipsis: false, align: 'start', title: '비고', },
  ];
  const table9010DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({
    // key: i,
    // data1000: `${i + 1}`,
    // data9998: `가느다란 몸 부수어 쥔 총칼, 터, 평화`,
    // data9999: `다람쥐 헌 쳇바퀴에 타고파.`,
  }));

  const columns: ColumnsType<any> = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address', className: 'g-start' },

    { title: <SppObjLabel label={<><SppObjSymbol label={resLabel.footnoteTableHeader} className="va-middle c-color-footnote2" />Column 8</>} required={false} />, dataIndex: 'address', key: '8' },
    { title: <SppObjLabel label="Column 9" required={true} />, dataIndex: 'address', key: '9' },
    { title: <SppObjLabel label="Column 10" required={false} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, dataIndex: 'address', key: '10' },
    { title: <SppObjLabel label="Column 11" required={true} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>} />, dataIndex: 'address', key: '11' },
    { title: '인풋', dataIndex: 'testTableInput', key: 'testTableInput',
      render: (value, row) => {
        return <SppDatePicker placeholder="" picker="month" />
      },
    },
    { title: 'Column 12', dataIndex: 'address', key: '12' },
    { title: 'Column 13', dataIndex: 'address', key: '13' },
    { title: 'Column 14', dataIndex: 'address', key: '14' },
    { title: 'Column 15', dataIndex: 'address', key: '15' },
    { title: 'Column 16', dataIndex: 'address', key: '16' },
    { title: 'Column 17', dataIndex: 'address', key: '17' },
    { title: 'Column 18', dataIndex: 'address', key: '18' },
    { title: 'Column 19', dataIndex: 'address', key: '19' },
    { title: 'Column 20', dataIndex: 'address', key: '20' },
  ];
  const dataSource = Array.from<any>({ length: 128 }).map<any>((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }));

  const table2010Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 250, ellipsis: true, align: 'center', title: '조회일자(또는 휴가/연수/기타 종료일자)', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: true, align: 'end', title: '내 미처리 건수', render: (v, r, i) => { return ( <strong className="g-bold c-color-point">9,999</strong> ) }, },
  ];
  const table2010DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2020Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:57:48` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: '12%', ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: <SppObjLabel label="조회용도" required={true} />, render: (v, r, i) => { return (
      <SppMultiSelect placeholder="조회용도 선택" width="60"
        options={[
          { value: '0', label: '수신업무(펀드,방카,신탁 등)' },
          { value: '1', label: '여신업무' },
          { value: '2', label: '외환업무' },
          { value: '3', label: '부수대행/전자금융' },
          { value: '4', label: '담당고객 기일관리' },
          { value: '5', label: '마케팅' },
          { value: '6', label: '내부통제(감사부,준법감시부,여신감리부 등)' },
          { value: '7', label: '기타(단순업무문의 등)' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: <SppObjLabel label="조회목적" required={true} />, render: (v, r, i) => { return (
      <SppSelect placeholder="조회목적 선택" width="60"
        options={[
          { value: '0', label: '상담' },
          { value: '1', label: '고객요청' },
          { value: '2', label: '기타' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: <SppObjLabel label="조회사유" required={true} />, render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '반려사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} className="mode-string" value={`이러이러한 이유와 저러저러한 사유로 반려하고 싶으나 뭔가 이유가 있었을 거라 나는 생각하긴 하지만 그래도 이러이러한 이유와 저러저러한 사유로 반려`} readOnly />
    ) }, },
  ];
  const table2020DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2030Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 250, ellipsis: true, align: 'center', title: '조회일자(또는 휴가/연수/기타 종료일자)', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '부서코드', render: (v, r, i) => { return `0000` }, },
    { dataIndex: 'data1010', width: '30%', ellipsis: true, align: 'start', title: '부서명', render: (v, r, i) => { return `봉은사로` }, },
    { dataIndex: 'data1010', width: '', ellipsis: true, align: 'end', title: '내 미처리 건수', render: (v, r, i) => { return ( <strong className="g-bold c-color-point">9,999</strong> ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: true, align: 'end', title: '부서 총 건수', render: (v, r, i) => { return `9,999` }, },
  ];
  const table2030DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2040Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:57:48` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '직원명', render: (v, r, i) => { return `김신한` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: '12%', ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: '10%', ellipsis: true, align: 'start', title: '조회용도', render: (v, r, i) => { return `수신업무(펀드,방카,신탁 등), 내부통제(감사부,준법감시부,여신감리부 등)` }, },
    { dataIndex: 'data1010', width: '5%', ellipsis: true, align: 'center', title: '조회목적', render: (v, r, i) => { return `상담` }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '조회사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { title: '적정성상태', children: [
      { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '현장대리인', render: (v, r, i) => { return (
        <div className="m-inline-binds item-justify">
          {i === 1 ?
            <em className="o-chip var-status-80"><span className="label">적정</span></em>
            :
            ``
          }
          {i === 2 ?
            <em className="o-chip var-status-20"><span className="label">부적정</span></em>
            :
            ``
          }
        </div>
      ) }, },
      { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: <SppObjLabel label="정보보호담당자" required={true} />, render: (v, r, i) => { return (
        <div className="m-inline-binds item-justify">
          {i === 1 ?
            <SppButton variant="filled" color="green" specName="filled-status-80">적정</SppButton>
            :
            <SppButton variant="filled" color="default" specName="filled-status-00">적정</SppButton>
          }
          {i === 2 ?
            <SppButton variant="filled" color="red" specName="filled-status-20">부적정</SppButton>
            :
            <SppButton variant="filled" color="default" specName="filled-status-00">부적정</SppButton>
          }
        </div>
      ) }, },
    ], },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '반려', render: (v, r, i) => { return (
      <div className="m-inline-binds item-justify">
        <SppButton variant="outlined" color="default" specName="normal">반려</SppButton>
      </div>
    ) }, },
  ];
  const table2040DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2050Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '반려취소', render: (v, r, i) => { return (
      <div className="m-inline-binds item-justify">
        <SppButton variant="outlined" color="default" specName="normal">반려취소</SppButton>
      </div>
    ) }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '반려사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} className="mode-string" value={`이러이러한 이유와 저러저러한 사유로 반려하고 싶으나 뭔가 이유가 있었을 거라 나는 생각하긴 하지만 그래도 이러이러한 이유와 저러저러한 사유로 반려`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회일자', render: (v, r, i) => { return `2026-04-19` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '조회시각', render: (v, r, i) => { return `13:57:48` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '직원명', render: (v, r, i) => { return `김신한` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객번호', render: (v, r, i) => { return <a href="#" className="o-link _link-primary"><span className="label">798745156</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '고객명', render: (v, r, i) => { return `홍길동` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `3510010000` }, },
    { dataIndex: 'data1010', width: '12%', ellipsis: true, align: 'start', title: '화면명', render: (v, r, i) => { return `[NEXT CRM] 고객종합정보 고객종합정보` }, },
    { dataIndex: 'data1010', width: '10%', ellipsis: true, align: 'start', title: '조회용도', render: (v, r, i) => { return `수신업무(펀드,방카,신탁 등), 내부통제(감사부,준법감시부,여신감리부 등)` }, },
    { dataIndex: 'data1010', width: '5%', ellipsis: true, align: 'center', title: '조회목적', render: (v, r, i) => { return `상담` }, },
    { dataIndex: 'data1010', width: 290, ellipsis: false, align: 'center', title: '조회사유', render: (v, r, i) => { return (
      <SppTextArea placeholder="" rows={3} value={`이러저러한 사유로 고객정보를 조회하였음`} readOnly />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '적정성상태', render: (v, r, i) => { return (
      <div className="m-inline-binds item-justify">
        {i === 1 ?
          <em className="o-chip var-status-80"><span className="label">적정</span></em>
          :
          ``
        }
        {i === 2 ?
          <em className="o-chip var-status-20"><span className="label">부적정</span></em>
          :
          ``
        }
      </div>
    ) }, },
  ];
  const table2050DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2060Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: 120, ellipsis: false, align: 'center', title: '허용여부', render: (v, r, i) => { return `불가` }, },
    { dataIndex: 'data1010', width: 160, ellipsis: false, align: 'center', title: '화면번호', render: (v, r, i) => { return `1234567890` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'start', title: '화면명', render: (v, r, i) => { return ( `화면명 및 화면설명` ) }, },
  ];
  const table2060DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

  const table2070Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Banking System', render: (v, r, i) => { return (
      <>
        {/* <SppRadio
          groupClassName="axis-cols"
          options={[
            { value: '0', label: '사용' },
            { value: '1', label: '미사용' },
          ]}
          defaultValue={'0'}
        /> */}
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>NEXT통합단말(개발)</SppCheckbox></div>
          <div className="item"><SppCheckbox>NEXT통합단말(테스트/(구)연수겸용)</SppCheckbox></div>
          <div className="item"><SppCheckbox>방카슈랑스</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Business System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Management System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'Credit System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'HR/컴플라이언스 System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
    { dataIndex: 'data1010', width: 'calc(100% * 1 / 6)', ellipsis: true, align: 'start', title: 'ICT System', render: (v, r, i) => { return (
      <>
        <div className="m-checks axis-cols items-ellipsis">
          <div className="item"><SppCheckbox>전체</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
          <div className="item"><SppCheckbox>캔버스메뉴명</SppCheckbox></div>
        </div>
      </>
    ) }, },
  ];
  const table2070DataSource = Array.from<any>({ length: 1 }).map<any>((_, i) => ({}));

  const table2080Columns: ColumnsType<any> = [
    { dataIndex: 'data1010', width: 64, ellipsis: false, align: 'center', title: '순번', render: (v, r, i) => { return `${i + 1}` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '직원번호', render: (v, r, i) => { return `00000001` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '직원명', render: (v, r, i) => { return `김신한` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '직위', render: (v, r, i) => { return `S프로(파트장)` }, },
    { dataIndex: 'data1010', width: 140, ellipsis: false, align: 'center', title: <SppObjLabel label={`조회권한`} required={false} append={<SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말" onClick={(e) => setIsOpenHelp1020(true)}></SppButton>} />, render: (v, r, i) => { return (
      <SppSelect width="50"
        options={[
          { value: '1', label: '권한요청' },
          { value: '2', label: '권한허용' },
          { value: '3', label: '권한불가' },
          { value: '4', label: '연장요청' },
          { value: '5', label: '권한만료' },
          { value: '6', label: '분기회수' },
        ]}
      />
    ) }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '상태', render: (v, r, i) => { return `요청중` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'end', title: '허용메뉴수', render: (v, r, i) => { return `9,999` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'end', title: '허용화면수', render: (v, r, i) => { return `9,999` }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '캔버스 메뉴권한', render: (v, r, i) => { return <a href="#" className="o-link _link-primary" onClick={(e) => { e.preventDefault(); setIsOpenTable2070(true); }}><span className="label">메뉴권한관리</span></a> }, },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '통합단말 화면권한', render: (v, r, i) => { return <a href="#" className="o-link _link-primary" onClick={(e) => { e.preventDefault(); setIsOpenTable2060(true); }}><span className="label">화면권한관리</span></a> }, },
    { title: '등록자', children: [
      { dataIndex: 'data1010', width: '6%', ellipsis: false, align: 'center', title: '직원번호', render: (v, r, i) => { return `12345678` }, },
      { dataIndex: 'data1010', width: '6%', ellipsis: false, align: 'center', title: '직원명', render: (v, r, i) => { return `이신한` }, },
    ], },
    { dataIndex: 'data1010', width: '', ellipsis: false, align: 'center', title: '만료일자', render: (v, r, i) => { return `2026-04-19` }, },
  ];
  const table2080DataSource = Array.from<any>({ length: 10 }).map<any>((_, i) => ({}));

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
                        <SppButton variant="outlined" color="geekblue" specName="lined-2">조회사유 당일등록</SppButton>
                      </div>
                      <div className="group _primary">
                        <SppButton variant="outlined" color="purple" specName="lined-1">미처리현황조회</SppButton>
                        <SppButton variant="solid" color="purple" specName="solid-1">최종반려</SppButton>
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
                    className="m-tabs type-1 _primary"
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
                            <div className="m-extra-binds">
                              <div className="m-binds type-end">
                                <div className="group _primary">
                                  <SppButton variant="outlined" color="geekblue" specName="lined-2">조회사유 당일등록</SppButton>
                                  <SppButton variant="outlined" color="purple" specName="lined-1">미처리현황조회</SppButton>
                                  <SppButton variant="solid" color="purple" specName="solid-1">최종반려</SppButton>
                                </div>
                              </div>
                            </div>

                            <div>탭패널 2</div>

                            <Tabs
                              type="line"
                              className="m-tabs type-2  _primary"
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

                  <div className="m-grid _primary">
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
                              <SppAutoComplete placeholder="" width="80" className="mode-required" value={`[88888888] 제갈공명`} />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={true} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" width="90" className="mode-required" value={`[4444] 디지털금융센터`} />
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
                                // defaultValue={'0'}
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
                              <SppTextArea placeholder="" rows={1} className="mode-required" />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton variant="solid" color="default" specName="inquire">조회</SppButton>
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
                              <em className="o-chip var-lined-1"><span className="label">2025년</span></em>
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">신청상태</dt>
                            <dd className="data">
                              <em className="o-chip var-lined-1"><span className="label">신청마감</span></em>
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">계약내역</span></h2>

                            <div className="o-helper style-strong"><strong className="label">권한허용 상태의 직원만 일괄적용이 가능합니다.</strong></div>
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
                                      <SppObjLabel label={`SppButton`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="extra">
                                        <div className="m-binds type-start">
                                          <div className="group">
                                            {/* <CommonButton label="알림전송" className="_lined-secondary" />
                                            <CommonButton label="공지사항" className="_lined-secondary" />
                                            <CommonButton label="결재선변경관리" className="_lined-secondary" />
                                            <CommonButton label="결재바로가기" className="_lined-secondary" /> */}
                                            <SppButton variant="filled" color="green" specName="filled-status-80">적정</SppButton>
                                            <SppButton variant="outlined" color="default" specName="normal">저장</SppButton>
                                            <SppButton variant="outlined" color="purple" specName="lined-1">저장</SppButton>
                                            <SppButton variant="outlined" color="geekblue" specName="lined-2">저장</SppButton>
                                            <SppButton variant="outlined" color="cyan" specName="lined-3">저장</SppButton>
                                            <SppButton variant="outlined" color="volcano" specName="lined-4">저장</SppButton>
                                          </div>
                                        </div>

                                        <div className="m-binds type-end">
                                          <div className="group _primary">
                                            {/* <CommonButton label="업무지원반려" className="_lined-primary" />
                                            <CommonButton label="업무지원결정" className="_lined-primary" />
                                            <CommonButton label="삭제" className="_delete" />
                                            <CommonButton label="취소" className="_cancel" />
                                            <CommonButton label="결재요청" className="_solid-primary" /> */}
                                            <SppButton variant="filled" color="default" specName="filled-status-00">적정</SppButton>
                                            <SppButton variant="filled" color="red" specName="filled-status-20">부적정</SppButton>
                                            <SppButton variant="solid" color="default" specName="inquire">저장</SppButton>
                                            <SppButton variant="solid" color="purple" specName="solid-1">저장</SppButton>
                                            <SppButton variant="solid" color="geekblue" specName="create">저장</SppButton>
                                            <SppButton variant="solid" color="cyan" specName="solid-3">저장</SppButton>
                                            <SppButton variant="solid" color="volcano" specName="solid-4">저장</SppButton>
                                          </div>
                                        </div>
                                      </div>

                                      {/*
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
                                      */}
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`.m-filelist`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="m-filelist">
                                        <ul>
                                          {[...Array(2)].map((e, idx) => (
                                          <li key={idx}>
                                            <div className="card">
                                              <SppCheckbox title="선택" />

                                              <div className="m-file">
                                                <a href="javascript:" className="o-file" title="##파일명.ext (99.9MB)##">
                                                  <span className="name">파일명</span>
                                                  <span className="ext">.ext</span>
                                                </a>
                                                <span className="o-limit type-file">
                                                  <span className="head">파일크기</span>
                                                  <span className="data">
                                                    <em className="value">(1,023KB)</em>
                                                  </span>
                                                </span>
                                              </div>

                                              <div className="binds">
                                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={`delete`} />} modelType="symbol" title="파일삭제"></SppButton>
                                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={`download`} />} modelType="symbol" title="다운로드"></SppButton>
                                              </div>
                                            </div>
                                          </li>
                                          ))}

                                          <li>
                                            <div className="card">
                                              <SppObjSymbol label={resLabel.fileAttachedList} />

                                              <div className="m-file">
                                                <a href="javascript:" className="o-file" title="##업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리.xlsx (99.9MB)##">
                                                  <span className="name">업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리</span>
                                                  <span className="ext">.xlsx</span>
                                                </a>
                                                <span className="o-limit type-file">
                                                  <span className="head">파일크기</span>
                                                  <span className="data">
                                                    <em className="value">(99.9MB)</em>
                                                  </span>
                                                </span>
                                              </div>

                                              <div className="binds">
                                                <SppButton>다운로드</SppButton>
                                              </div>
                                            </div>
                                          </li>

                                          <li>
                                            <div className="card">
                                              <SppObjSymbol label={resLabel.fileAttachedList} />

                                              <div className="m-file">
                                                <a href="javascript:" className="o-file" title="##파일명.ext (99.9MB)##">
                                                  <span className="name">파일명</span>
                                                  <span className="ext">.ext</span>
                                                </a>
                                                <span className="o-limit type-file">
                                                  <span className="head">파일크기</span>
                                                  <span className="data">
                                                    <em className="value">(101MB)</em>
                                                  </span>
                                                </span>
                                              </div>

                                              <div className="binds">
                                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={`delete`} />} modelType="symbol" title="파일삭제"></SppButton>
                                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={`download`} />} modelType="symbol" title="다운로드"></SppButton>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`.m-field`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="m-field">
                                        <div className="main">
                                          <SppDatePicker placeholder="50" />
                                          <SppInputText placeholder="auto end" width="auto" align="end" />
                                          <span className="string type-amount _percent"><span className="label">%</span></span>
                                          <SppAutoComplete placeholder="100p" width="100p" />
                                          <SppSelect placeholder="auto" width="auto" />
                                          <SppInputText placeholder="auto" width="auto" />
                                          <SppInputText placeholder="100p" width="100p" />
                                          <SppSelect placeholder="auto" width="auto" />
                                          <SppInputText placeholder="justify" width="justify" />
                                          <SppInputText placeholder="justify" width="justify" />
                                          <SppInputText placeholder="100p" width="100p" />
                                          <SppAutoComplete placeholder="항목명 입력" />
                                          <span className="binds">
                                            <SppButton>추가</SppButton>
                                            <SppButton>삭제</SppButton>
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`.m-string-binds`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="m-string-binds">
                                        <span className="string">대상</span>
                                        <span className="binds justify-end"><SppButton>위수탁시스템</SppButton></span>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`.m-string-binds.type-file`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="m-string-binds type-file">
                                        <span className="string m-file">
                                          <span className="o-file" title="##업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리.xlsx (99.9MB)##">
                                            <span className="name">업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리업무분장관리</span>
                                            <span className="ext">.xlsx</span>
                                          </span>
                                          <span className="o-limit type-file">
                                            <span className="head">파일크기</span>
                                            <span className="data">
                                              <em className="value">(1,023MB)</em>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="binds justify-end">
                                          <SppButton>업로드</SppButton>
                                          <SppButton>다운로드</SppButton>
                                        </span>
                                      </div>
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`.m-form`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <div className="m-form">
                                        <SppCheckbox defaultChecked>
                                          추가
                                        </SppCheckbox>

                                        <div className="m-field">
                                          <div className="main">
                                            <SppInputText width="50" />
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`AutoComplete`} required={true} />
                                    </th>
                                    <td colSpan={1}>
                                      <SppAutoComplete placeholder="" className="mode-required" />
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`InputFile`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      <SppInputFile value={testValueFile1010} onChange={(e) => setTestValueFile1010(e)} downloadButtonRender />
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`head`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      DATA
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`공통팝업`} required={false} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="m-binds">
                                        <div className="group align-start">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenPopupSample(true)}>팝업샘플</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenSppCm0000P01(true)}>파일첨부</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenSppCm0000P02(true)}>반려</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenSppCm0000P03(true)}>알림발송</SppButton>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`Ap팝업`} required={false} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="m-binds">
                                        <div className="group align-start">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenPopupSample(true)}>팝업샘플</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenSppAp0002P01(true)}>신청서</SppButton>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`Ck팝업`} required={false} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="m-binds">
                                        <div className="group align-start">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenPopupSample(true)}>팝업샘플</SppButton>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`Cr팝업`} required={false} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="m-binds">
                                        <div className="group align-start">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenPopupSample(true)}>팝업샘플</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenSppCr0001P02(true)}>동의서 신규등록</SppButton>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`Au팝업`} required={false} />
                                    </th>
                                    <td colSpan={5}>
                                      <div className="m-binds">
                                        <div className="group align-start">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenPopupSample(true)}>팝업샘플</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenHelp1010(true)}>도움말 (통합단말화면)</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenHelp1020(true)}>조회권한관리 안내</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenTable2060(true)}>통합단말 화면권한관리</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenTable2070(true)}>캔버스 메뉴권한관리</SppButton>
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2" onClick={(e) => setIsOpenTable2071(true)}>권한설정 추가인증</SppButton>
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
                        <div className="main">
                          <div className="o-board type-1 -has-board-container">
                            <div className="board-container">
                              <div className="m-header">
                                <div className="prime">
                                  <strong className="o-heading"><span className="label">유의사항</span></strong>
                                </div>
                              </div>

                              <ul className="o-bullets type-disc">
                                <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                                <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                                <li>
                                  블라블라블라

                                  <ul className="o-bullets type-hyphen">
                                    <li>블라블라블라</li>
                                    <li>
                                      블라블라블라

                                      <ul className="o-bullets type-asterisk">
                                        <li>블라블라블라</li>
                                        <li>블라블라블라</li>
                                      </ul>
                                    </li>
                                    <li>블라블라블라</li>
                                  </ul>
                                </li>
                                <li>블라블라블라</li>
                              </ul>
                            </div>

                            <div className="board-container">
                              <div className="m-header">
                                <div className="prime">
                                  <strong className="o-heading"><span className="label">Order Lists</span></strong>
                                </div>
                              </div>

                              <ol className="o-bullets type-decimal level1">
                                <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                                <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                                <li>블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라 블라블라블라</li>
                                <li>
                                  블라블라블라

                                  <ol className="o-bullets type-decimal level2">
                                    <li>블라블라블라</li>
                                    <li>블라블라블라</li>
                                  </ol>
                                </li>
                                <li className="g-abshidden"></li>
                                <li className="g-abshidden"></li>
                                <li className="g-abshidden"></li>
                                <li className="g-abshidden"></li>
                                <li>블라블라블라</li>
                                <li>블라블라블라</li>
                                <li>블라블라블라</li>
                                <li>블라블라블라</li>
                              </ol>
                            </div>

                            <div className="board-container">
                              <div className="m-header">
                                <div className="prime">
                                  <strong className="o-heading"><span className="label">유의사항</span></strong>
                                </div>
                              </div>

                              <ul className="o-bullets type-disc">
                                <li>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 <em className="c-color-strong">인수직원의 부점정보를 확인해주세요.</em></li>
                                <li><em className="c-color-strong">행내등기 대상</em>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                              </ul>

                              <div className="board-container type-sub">
                                <div className="m-header">
                                  <div className="prime">
                                    <strong className="o-heading"><span className="label">여신자필서류(STP)</span></strong>
                                  </div>
                                </div>

                                <ul className="o-bullets type-disc">
                                  <li><em className="c-color-strong">NET점 고객의 여신자필 서류를 대신 받아 전달</em>할 경우, <em className="c-color-strong">영업점 간 비용이 정산</em>됩니다.(발송지점 비용 1만원 ↓, 인수지점 비용 1만원 ↑)</li>
                                  <li><em className="c-color-strong">자점 고객이 NET점 방문 시</em> 고객에게 받을 서류를 미리 세팅하여 NET점에 보내는 경우 <em className="c-color-strong">서류구분을 [일반서류]로 선택</em> 후 신청해주세요.</li>
                                </ul>
                              </div>

                              <div className="board-container type-sub">
                                <div className="m-header">
                                  <div className="prime">
                                    <strong className="o-heading"><span className="label">유의사항</span></strong>
                                  </div>
                                </div>

                                <ul className="o-bullets type-disc">
                                  <li className="c-color-strong"><em>인수직원이 타 부점에 있는 경우가 있으니 정확한 배송을 위해 인수직원의 부점정보를 확인해주세요.</em></li>
                                  <li><strong className="c-color-strong">행내등기 대상</strong>은 서류 종류로 <em className="c-color-strong">은행업무와 관련이 있는 중요 우편물에 한해 신청 가능</em>합니다.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="m-grid _primary">
                    <div className="column">

                      <div className="m-section _primary">
                        <div className="m-header">
                          <div className="prime">
                            <h3 className="o-heading level3"><span className="label">계약내역</span></h3>

                            <div className="m-inline-binds">
                              <SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말"></SppButton>
                            </div>
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
                                <SppButton variant="outlined" color="default" specName="normal">행추가</SppButton>
                                <SppButton variant="outlined" color="default" specName="normal">행삭제</SppButton>
                                <SppButton variant="outlined" color="default" specName="normal">취소</SppButton>
                              </div>
                              <div className="group">
                                <SppButton variant="outlined" color="default" icon={<SppObjSymbol label={resLabel.excelUploadLabel} modelType="icon" specName="excel-upload-label" />} specName="normal">엑셀양식​업로드</SppButton>
                                <SppButton variant="outlined" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadLabel} modelType="icon" specName="excel-download-label" />} specName="normal">엑셀양식​다운로드</SppButton>
                              </div>
                              <div className="group">
                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelUploadSection} modelType="icon" specName="excel-upload" />} modelType="symbol" title="엑셀​업로드"></SppButton>
                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            // pagination={false}
                            paginationFlag
                            // heightSectionFixed
                            // heightSectionBasis={ 1 * 41 + 3 * 41 }
                            // scroll={{ x: 4096 }}
                          />
                        </div>
                      </div>

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h4 className="o-heading level4"><span className="label">데이터테이블</span></h4>
                          </div>

                          <div className="extra">
                            <div className="m-legend">
                              <header className="header g-hidden"><strong>범례</strong></header>

                              <div className="o-legend type-univ type-units style-normal"><em className="label">(단위 : 건, 백만)</em></div>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <div className="o-datatable">
                            <div className="table-wrapper">
                              <table className="table">
                                <colgroup>
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                  <col style={{ width: '' }} />
                                </colgroup>

                                <thead>
                                  <tr>
                                    <th colSpan={1} rowSpan={2}>항목</th>
                                    <th colSpan={1} rowSpan={2}>
                                      <SppObjLabel label={
                                        <>
                                          <SppObjSymbol label={resLabel.footnoteTableHeader} className="va-middle c-color-footnote1" />
                                          전체
                                        </>
                                      } />
                                    </th>
                                    <th colSpan={3} rowSpan={1}>연도별</th>
                                    <th colSpan={3} rowSpan={1}>월별</th>
                                    <th colSpan={3} rowSpan={1}>일별</th>
                                  </tr>
                                  <tr>
                                    <th colSpan={1} rowSpan={1}>전년도</th>
                                    <th colSpan={1} rowSpan={1}>당해연도</th>
                                    <th colSpan={1} rowSpan={1}>증감</th>
                                    <th colSpan={1} rowSpan={1}>전월</th>
                                    <th colSpan={1} rowSpan={1}>당월</th>
                                    <th colSpan={1} rowSpan={1}>증감</th>
                                    <th colSpan={1} rowSpan={1}>전일</th>
                                    <th colSpan={1} rowSpan={1}>당일</th>
                                    <th colSpan={1} rowSpan={1}>증감</th>
                                  </tr>
                                </thead>

                                <tbody className="g-end">
                                  <tr className="subtotal-tcell">
                                    <th>결재건수</th>
                                    <td>69,965</td>
                                    <td>38,965</td>
                                    <td>31,965</td>
                                    <td>-7,965</td>
                                    <td>88</td>
                                    <td>68</td>
                                    <td>-28</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>-2</td>
                                  </tr>
                                  <tr>
                                    <th colSpan={1} rowSpan={1}>HEAD</th>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                    <td colSpan={1} rowSpan={1}>DATA</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="m-footer">
                          <ul className="o-bullets type-symbol type-footnote">
                            <li><SppObjSymbol label={resLabel.footnoteTableHeader} className="va-middle c-color-footnote1" />블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</li>
                            <li><SppObjSymbol label={resLabel.footnoteTableHeader} className="va-middle c-color-footnote2" />블라블라블라</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="m-grid _primary">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel label={`조회기간`} required={true} wrapper="header" />

                            <div className="main">
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                              <span className="seps type-string _tilde"><span className="string">~</span></span>
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={false} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" width="90" value={`[4444] 디지털금융센터`} disabled />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton variant="solid" color="default" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">총 건수</dt>
                            <dd className="data">
                              9,999
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">미등록</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">등록</dt>
                            <dd className="data">
                              0
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="m-section g-wd-max">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">조회일자별 미처리 건수</span></h2>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            // rowSelection={rowSelection}
                            columns={table2010Columns}
                            dataSource={table2010DataSource}
                            pagination={false}
                            // paginationFlag
                            heightSectionFixed
                            heightSectionBasis={ 1 * 35 + 3 * 35 }
                            // scroll={{ x: 4096 }}
                            className="style-fit"
                          />
                        </div>
                      </div>

                      <div className="m-section _primary">
                        <div className="m-header">
                          <div className="prime">
                            <h3 className="o-heading level3"><span className="label">고객정보 조회내역</span></h3>

                            <div className="o-helper style-strong"><strong className="label">조회사유 일괄적용 및 결재요청은 조회일자가 동일한 경우만 가능합니다.</strong></div>
                          </div>

                          <div className="extra">
                            <div className="m-binds">
                              <div className="group">
                                <SppButton variant="outlined" color="geekblue" specName="lined-2">조회사유 일괄적용</SppButton>
                              </div>
                              <div className="group">
                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            rowSelection={rowSelection}
                            columns={table2020Columns}
                            dataSource={table2020DataSource}
                            // pagination={false}
                            paginationFlag
                            // heightSectionFixed
                            heightSectionBasis={ 1 * 41 + 3 * 81 }
                            // scroll={{ x: 4096 }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="m-grid">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel label={`조회기간`} required={true} wrapper="header" />

                            <div className="main">
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                              <span className="seps type-string _tilde"><span className="string">~</span></span>
                              <SppDatePicker placeholder="" className="mode-required" picker="date" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={false} wrapper="header" />

                            <div className="main">
                              <SppSelect width="90"
                                // options={[
                                //   { value: '0', label: '전체' },
                                //   { value: '1', label: '예' },
                                //   { value: '2', label: '아니오' },
                                // ]}
                                defaultValue={'0'}
                              />
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton variant="solid" color="default" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">총 건수</dt>
                            <dd className="data">
                              9,999
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">결재요청중</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">결재완료</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">미등록</dt>
                            <dd className="data">
                              10
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">등록중</dt>
                            <dd className="data">
                              0
                            </dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>

                  <Tabs
                    type="card"
                    className="m-tabs type-1 _primary"
                    defaultActiveKey="1"
                    items={[
                      {
                        key: '1',
                        label: <><span className="label">미결재내역</span></>,
                        children: (
                          <>

                            <div className="m-grid _primary">
                              <div className="column">

                                <div className="m-section">
                                  <div className="m-header">
                                    <div className="prime">
                                      <h2 className="o-heading level2"><span className="label">조회일자별 미결재 건수</span></h2>
                                    </div>
                                  </div>

                                  <div className="main">
                                    <SppTable<any>
                                      // rowSelection={rowSelection}
                                      columns={table2030Columns}
                                      dataSource={table2030DataSource}
                                      pagination={false}
                                      // paginationFlag
                                      heightSectionFixed
                                      heightSectionBasis={ 1 * 35 + 3 * 35 }
                                      // scroll={{ x: 4096 }}
                                      className="style-fit"
                                    />
                                  </div>
                                </div>

                                <div className="m-section _primary">
                                  <div className="m-header">
                                    <div className="prime">
                                      <h3 className="o-heading level3"><span className="label">조회사유 미결재내역</span></h3>
                                    </div>

                                    <div className="extra">
                                      <div className="m-binds">
                                        <div className="group">
                                          <SppButton variant="outlined" color="geekblue" specName="lined-2">일괄적정</SppButton>
                                          <SppButton variant="outlined" color="volcano" specName="lined-4">일괄부적정</SppButton>
                                        </div>
                                        <div className="group">
                                          <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="main">
                                    <SppTable<any>
                                      rowSelection={rowSelection}
                                      columns={table2040Columns}
                                      dataSource={table2040DataSource}
                                      // pagination={false}
                                      paginationFlag
                                      // heightSectionFixed
                                      heightSectionBasis={ 2 * 41 + 3 * 81 }
                                      // scroll={{ x: 4096 }}
                                    />
                                  </div>
                                </div>

                              </div>
                            </div>

                          </>
                        ),
                      },
                      {
                        key: '2',
                        // label: <>반려내역</>,
                        label: <><span className="label">반려내역</span> <Badge showZero={true} count={1000} /></>,
                        children: (
                          <>

                            <div className="m-grid _primary">
                              <div className="column">

                                <div className="m-section _primary">
                                  <div className="m-header">
                                    <div className="prime">
                                      <h2 className="o-heading level2"><span className="label">조회사유 반려내역</span></h2>

                                      <div className="o-helper style-strong"><strong className="label">반려내역 확인 후 반드시 [최종반려] 처리가 완료되어야 미결재내역에 대한 [승인] 처리가 가능합니다.</strong></div>
                                    </div>

                                    <div className="extra">
                                      <div className="m-binds">
                                        <div className="group">
                                          <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="main">
                                    <SppTable<any>
                                      rowSelection={rowSelection}
                                      columns={table2050Columns}
                                      dataSource={table2050DataSource}
                                      // pagination={false}
                                      paginationFlag
                                      // heightSectionFixed
                                      heightSectionBasis={ 1 * 41 + 3 * 81 }
                                      // scroll={{ x: 4096 }}
                                    />
                                  </div>
                                </div>

                              </div>
                            </div>

                          </>
                        ),
                      },
                    ]}
                  />



                  <div className="m-grid _primary">
                    <div className="column">

                      <div className="m-section">
                        <div className="main">
                          <div className="o-dataform">
                            <div className="table-wrapper">
                              <table className="table">
                                <colgroup>
                                  <col className="head" />
                                  <col className="data" />
                                  <col className="head" />
                                  <col className="data" />
                                </colgroup>

                                <tbody>
                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`My 개인(신용)정보 조회권한`} required={false} />
                                    </th>
                                    <td colSpan={3}>
                                      허용중
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`직원`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      [00000001] 김신한
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`직위`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      본부장
                                    </td>
                                  </tr>

                                  <tr>
                                    <th colSpan={1}>
                                      <SppObjLabel label={`적용일자`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      2026-04-19
                                    </td>

                                    <th colSpan={1}>
                                      <SppObjLabel label={`만료일자`} required={false} />
                                    </th>
                                    <td colSpan={1}>
                                      2026-04-19
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">[0507] Tech기획부 부서 허용화면</dt>
                            <dd className="data">
                              9,999
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">직원 허용화면</dt>
                            <dd className="data">
                              10
                            </dd>
                            <dd className="data">
                              (문의 : 정보보호본부 개인(신용)정보권한관리 담당자)
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="m-section _primary">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">통합단말 화면</span></h2>

                            <div className="m-inline-binds">
                              <SppButton variant="text" color="default" size="small" icon={<SppObjSymbol label={`help`} className="style-fill" />} modelType="symbol sym-help" title="도움말" onClick={(e) => setIsOpenHelp1010(true)}></SppButton>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            // rowSelection={rowSelection}
                            columns={table2060Columns}
                            dataSource={table2060DataSource}
                            // pagination={false}
                            paginationFlag
                            // heightSectionFixed
                            // heightSectionBasis={ 1 * 41 + 3 * 41 }
                            // scroll={{ x: 4096 }}
                          />
                        </div>
                      </div>

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h3 className="o-heading level3"><span className="label">허용중인 캔버스 메뉴</span></h3>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            // rowSelection={rowSelection}
                            columns={table2070Columns}
                            dataSource={table2070DataSource}
                            pagination={false}
                            // paginationFlag
                            // heightSectionFixed
                            heightSectionBasis={ 1 * 41 + 1 * 41 - 12 }
                            // scroll={{ x: 4096 }}
                            scroll={{ y: 208 }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="m-grid _primary">
                    <div className="column">

                      <div className="m-filter-form">
                        <div className="fieldset">

                          <div className="m-field">
                            <SppObjLabel label={`부서`} required={false} wrapper="header" />

                            <div className="main">
                              <SppSelect width="90"
                                options={[
                                  { value: '0', label: '[0507] Tech기획부' },
                                ]}
                                defaultValue={'0'}
                              />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`직원`} required={false} wrapper="header" />

                            <div className="main">
                              <SppAutoComplete placeholder="" width="80" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`잔여일수`} required={false} wrapper="header" />

                            <div className="main">
                              <SppInputText placeholder="" width="30" />
                            </div>
                          </div>

                          <div className="m-field">
                            <SppObjLabel label={`조회권한`} required={false} wrapper="header" />

                            <div className="main">
                              <div className="m-form">
                                <SppSelect width="50"
                                  options={[
                                    { value: '0', label: '전체' },
                                    { value: '1', label: '권한요청' },
                                    { value: '2', label: '권한허용' },
                                    { value: '3', label: '권한불가' },
                                    { value: '4', label: '연장요청' },
                                    { value: '5', label: '권한만료' },
                                    { value: '6', label: '분기회수' },
                                  ]}
                                  defaultValue={'0'}
                                />
                                <div className="m-checks">
                                  <div className="item"><SppCheckbox>만료예정자</SppCheckbox></div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="binds">
                          <SppButton variant="solid" color="default" specName="inquire">조회</SppButton>
                        </div>
                      </div>

                      <div className="o-board _m-defines">
                        <dl className="m-defines">
                          <div className="group">
                            <dt className="head">[0507] Tech기획부 최대허용인원</dt>
                            <dd className="data">
                              9,999명
                            </dd>
                          </div>

                          <div className="group">
                            <dt className="head">현재 허용인원</dt>
                            <dd className="data">
                              10명
                            </dd>
                            <dd className="data">
                              (문의 : 정보보호본부 개인(신용)정보권한관리 담당자)
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="m-section _primary">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">권한설정내역</span></h2>

                            <div className="o-helper style-strong"><strong className="label">권한허용 상태의 직원만 일괄적용이 가능합니다.</strong></div>
                          </div>

                          <div className="extra">
                            <div className="o-length">
                              <span className="head">전체</span>
                              <em className="data">
                                <span className="value">8</span>
                                <span className="units">건</span>
                              </em>
                            </div>

                            <div className="m-form">
                              <div className="m-field">
                                <div className="main">
                                  <SppSelect placeholder="메뉴권한 동일설정 참조 직원" width="90" />
                                  <div className="binds">
                                    <SppButton variant="outlined" color="default" specName="normal">일괄적용</SppButton>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="m-binds">
                              <div className="group">
                                <SppButton variant="text" color="default" icon={<SppObjSymbol label={resLabel.excelDownloadSection} modelType="icon" specName="excel-download" />} modelType="symbol" title="엑셀​다운로드"></SppButton>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="main">
                          <SppTable<any>
                            rowSelection={rowSelection}
                            columns={table2080Columns}
                            dataSource={table2080DataSource}
                            // pagination={false}
                            paginationFlag
                            // heightSectionFixed
                            heightSectionBasis={ 2 * 41 + 3 * 41 }
                            // scroll={{ x: 4096 }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="m-grid _primary">
                    <div className="column">

                      <div className="m-section">
                        <div className="m-header">
                          <div className="prime">
                            <h2 className="o-heading level2"><span className="label">클라우드 이용보고 개요 및 업무 흐름도</span></h2>
                          </div>
                        </div>

                        <div className="main">
                          <div className="o-board type-2">
                            <div className="m-figcaption x-report-cloud-process">
                              <div className="m-caption-header">
                                <p className="o-para">
                                  클라우드 이용보고는 클라우드를 사용하거나, 클라우드를 사용하는 서비스를 이용하는 경우,<br />
                                  <em className="g-strong">계약시점 3개월 이내</em> 금융감독원에 보고해야합니다. (전자금융감독규정 제14조의2)<br />
                                  <br />
                                  해당 서비스가 클라우드 이용과 관련된 서비스인지 사전에 법률자문 등을 통해 충분한 검토가 필요합니다.
                                </p>
                              </div>

                              <div className="o-board type-1">
                                <div className="o-figure">
                                  <div className="figure-container">
                                    <img src={SYS_IMAGE_PARTIAL.SppCl0002M_0101} alt="" />
                                  </div>
                                </div>

                                <div className="m-footer">
                                  <ul className="o-bullets type-asterisk">
                                    <li>정보보호위원회 개최 준비와 위수탁계약은 병렬로 준비가 필요합니다.</li>
                                    <li><strong className="c-color-strong">클라우드 이용 계약 체결은 정보보호위원회 개최 후 가결 시 진행 가능합니다.</strong> (금융분야 클라우드 이용가이드 참고)</li>
                                  </ul>
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



              {/* {isOpenPopupSample && ( */}
                <PopupSample
                  open={isOpenPopupSample}
                  onCancel={() => setIsOpenPopupSample(false)}
                />
              {/* )} */}

              {/* {isOpenSppCm0000P01 && ( */}
                <SppCm0000P01
                  open={isOpenSppCm0000P01}
                  onCancel={() => setIsOpenSppCm0000P01(false)}
                />
              {/* )} */}

              {/* {isOpenSppCm0000P02 && ( */}
                <SppCm0000P02
                  open={isOpenSppCm0000P02}
                  onCancel={() => setIsOpenSppCm0000P02(false)}
                />
              {/* )} */}

              {/* {isOpenSppCm0000P03 && ( */}
                <SppCm0000P03
                  open={isOpenSppCm0000P03}
                  onCancel={() => setIsOpenSppCm0000P03(false)}
                />
              {/* )} */}

              {/* {isOpenSppAp0002P01 && ( */}
                <SppAp0002P01
                  open={isOpenSppAp0002P01}
                  onCancel={() => setIsOpenSppAp0002P01(false)}
                />
              {/* )} */}

              {/* {isOpenSppCr0001P02 && ( */}
                <SppCr0001P02
                  open={isOpenSppCr0001P02}
                  onCancel={() => setIsOpenSppCr0001P02(false)}
                />
              {/* )} */}

              {/* {isOpenTable2060 && ( */}
                <Table2060
                  open={isOpenTable2060}
                  onCancel={() => setIsOpenTable2060(false)}
                />
              {/* )} */}

              {/* {isOpenTable2070 && ( */}
                <Table2070
                  open={isOpenTable2070}
                  onCancel={() => setIsOpenTable2070(false)}
                />
              {/* )} */}

              {/* {isOpenTable2071 && ( */}
                <Table2071
                  open={isOpenTable2071}
                  onCancel={() => setIsOpenTable2071(false)}
                />
              {/* )} */}

              {/* {isOpenHelp1010 && ( */}
                <Help1010
                  open={isOpenHelp1010}
                  onCancel={() => setIsOpenHelp1010(false)}
                />
              {/* )} */}

              {/* {isOpenHelp1020 && ( */}
                <Help1020
                  open={isOpenHelp1020}
                  onCancel={() => setIsOpenHelp1020(false)}
                />
              {/* )} */}
    </>
  );
}

export default TmpTsProg;
