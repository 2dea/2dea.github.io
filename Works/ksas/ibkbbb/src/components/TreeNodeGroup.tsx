/**
 * @description 공통 트리메뉴 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Tree, TreeNodeTemplateOptions, TreeTogglerTemplateOptions } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';

function TreeNodeGroup() {
  const nodes: TreeNode[] = [
    {
      key: '0',
      label: '감사명령',
      children: [
        { key: '0-0', label: '감사자명령관리' },
        { key: '0-1', label: '감사자업무배정관리' },
        { key: '0-2', label: '감시역명령관리' },
        { key: '0-3', label: '감시역업무배정관리' },
      ],
    },
    {
      key: '1',
      label: '감사실시',
      children: [
        { key: '1-0', label: '2뎁스 메뉴명' },
        { key: '1-1', label: '2뎁스 메뉴명' },
        { key: '1-2', label: '2뎁스 메뉴명' },
        { key: '1-3', label: '2뎁스 메뉴명' },
      ],
    },
    {
      key: '2',
      label: '감사사후관리',
      children: [
        {
          key: '2-0',
          label: '보완요청목록',
          children: [
            {
              key: '2-0-0',
              label: '보완요청목록',
            },
            {
              key: '2-0-1',
              label: '부점보완요청목록',
            },
            {
              key: '2-0-2',
              label: '이익제공보완요청목록',
            },
            {
              key: '2-0-3',
              label: '점검요청목록(고위험)',
            },
          ],
        },
        {
          key: '2-1',
          label: '준법상시모니터링 사후관리',
          children: [
            {
              key: '2-1-0',
              label: 'SMS 발송대상부점 현황',
            },
            {
              key: '2-1-1',
              label: '부점감사점검대상목록',
            },
          ],
        },
      ],
    },
    {
      key: '3',
      label: '감사보고서실시',
      children: [
        { key: '3-0', label: '보완요청현황' },
        { key: '3-1', label: '기간별통계자료' },
        { key: '3-2', label: '실적보고(일/주/년)' },
        { key: '3-3', label: '내부보고서관리' },
      ],
    },
    {
      key: '4',
      label: '사고예방대책',
      children: [{ key: '4-0', label: '자기평가' }],
    },
  ];

  const nodeTemplate = (node: TreeNode, options: TreeNodeTemplateOptions) => {
    let label = (
      <em>
        {node.label}
        <Button label="M123456" className="btn-copy ml-8" />
      </em>
    );
    return <span className={options.className}>{label}</span>;
  };

  const togglerTemplate = (node: TreeNode, options: TreeTogglerTemplateOptions) => {
    if (!node) {
      return;
    }
    const expanded = options.expanded;
    const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
      'pi-caret-right': !expanded,
      'pi-caret-down': expanded,
    });
    return (
      <button type="button" className="p-tree-toggler" tabIndex={-1} onClick={options.onClick}>
        <span className={iconClassName} aria-hidden="true"></span>
      </button>
    );
  };

  return (
    <div className="u-treenode">
      <div className="inner">
        <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} />
      </div>
    </div>
  );
}

export default TreeNodeGroup;
