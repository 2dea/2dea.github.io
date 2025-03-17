/**
 * @description 공통 서브 네비게이션 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { Button } from 'primereact/button';
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

// ListBox
interface Item {
  name: string;
  code: string;
}

function SubNavigation() {
  // 네비 메뉴 잠금
  const [isSwitched, setIsSwitced] = useState(false);
  const handlerLockMenu = () => {
    setIsSwitced(!isSwitched);
  };

  // 리스트박스 보기 버튼
  const [isSelected, setIsSelected] = useState(false);
  const handlerMoreMenu = () => {
    setIsSelected(!isSelected);
  };

  // 리스트박스 아이템
  const [listItem, setListItem] = useState<Item | null>(null);
  const items: Item[] = [
    { name: '감시항목조회', code: '1' },
    { name: '감시역업무배정현황', code: '2' },
    { name: '공지사항/업무가이드', code: '3' },
    { name: '시스템관리', code: '4' },
  ];

  return (
    <div className="u-sub-navigation">
      <div className="inner">
        <div className="snb-tabs">
          <ul className="snb-tabs-list">
            <li className="dashboard">
              <Button className="btn-dashboard" icon="pi" onClick={handlerLockMenu} />
            </li>
            <li className="toggle">
              <Button
                label="감시항목조회"
                className={`btn-lock${isSwitched ? ' btn-lock-off' : ''}`}
                onClick={handlerLockMenu}
              />
            </li>
            <li className="toggle active">
              <Button
                label="감시역업무배정관리"
                className={`btn-lock${isSwitched ? ' btn-lock-off' : ''}`}
                onClick={handlerLockMenu}
              />
            </li>
            <li className="toggle">
              <Button
                label="공지사항/업무가이드"
                className={`btn-lock${isSwitched ? ' btn-lock-off' : ''}`}
                onClick={handlerLockMenu}
              />
            </li>
            <li className="toggle">
              <Button
                label="시스템관리"
                className={`btn-lock${isSwitched ? ' btn-lock-off' : ''}`}
                onClick={handlerLockMenu}
              />
            </li>
          </ul>
        </div>
        <div className="snb-tools">
          <div className="flex">
            <Button className="btn-ico tool more" icon="pi" onClick={handlerMoreMenu} />
            <Button className="btn-ico tool all" icon="pi" />
            <ListBox
              value={listItem}
              onChange={(e: ListBoxChangeEvent) => setListItem(e.value)}
              options={items}
              optionLabel="name"
              className={`btn-ico tool more${isSelected ? ' p-listbox-open' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNavigation;
