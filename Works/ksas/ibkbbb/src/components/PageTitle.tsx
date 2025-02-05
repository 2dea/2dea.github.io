/**
 * @description 공통 페이지 타이틀 컴포넌트
 */

// dependency
import React from 'react';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return <h3 className="title">{title}</h3>;
}

export default PageTitle;
