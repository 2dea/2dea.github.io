/**
 * @description 공통 데이트픽커 컴포넌트
 */

// dependency
import React, { useState } from 'react';

// components
import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';

function DatePicker() {
  // 데이트픽커
  const [Date, setDate] = useState<Nullable<Date>>(null);

  addLocale('ko', {
    firstDayOfWeek: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });

  return <Calendar value={Date} onChange={(e) => setDate(e.value)} dateFormat="yy-mm-dd" locale="ko" showIcon />;
}

export default DatePicker;
