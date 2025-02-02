(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "날짜선택...",
		        "buttonLabel": "캘린더를 열려면 Enter키 또는 스페이스바를 누르거나 클릭하십시오.",
		        "prevButtonLabel": "이전달로 이동",
		        "prevMonthButtonLabel": "전년도로 이동",
		        "prevYearButtonLabel": "이전 20년도 이동",
		        "nextButtonLabel": "다음달로 이동",
		        "nextMonthButtonLabel": "내년으로 이동",
		        "nextYearButtonLabel": "다음 20년도 이동",
		        "changeMonthButtonLabel": "월을 변경하려면 Enter키 또는 스페이스바를 누르거나 클릭하십시오.",
		        "changeYearButtonLabel": "연도를 변경하려면 Enter키 또는 스페이스바를 누르거나 클릭하십시오.",
		        "changeRangeButtonLabel": "이전/다음 20년도 이동을 위해 Enter키 또는 스페이스바를 누르거나 클릭하십시오.",
		        "closeButtonTitle": "확인",
		        "closeButtonLabel": "확인 / 날짜선택 닫기",
		        "calendarHelp": "- 상하 커서이동 - 이전 또는 다음 주에 각각 같은 요일로 이동합니다.\r\n- 좌우 커서이동 - 이전 또는 다음 날로 이동합니다.\r\n- Ctrl+Page Up - 전년도 같은 날짜로 이동합니다.\r\n- Ctrl+Page Down - 내년도 같은 날짜로 이동합니다.\r\n- Home - 현재 달의 첫날로 이동합니다.\r\n- End - 현재 달의 마지막 날로 이동합니다.\r\n- Page Up - 이전달 같은 날짜로 이동합니다.\r\n- Page Down - 다음달 같은 날짜로 이동합니다.\r\n- Enter or Espace - 캘린더가 닫히고 선택한 날짜가 관련 텍스트 상자에 표시됩니다.\r\n- Escape - 아무 작업없이 캘린더를 닫습니다."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "01",
		        "02",
		        "03",
		        "04",
		        "05",
		        "06",
		        "07",
		        "08",
		        "09",
		        "10",
		        "11",
		        "12"
		    ],
		    "month_names_abbreviated": [
		        "1월",
		        "2월",
		        "3월",
		        "4월",
		        "5월",
		        "6월",
		        "7월",
		        "8월",
		        "9월",
		        "10월",
		        "11월",
		        "12월"
		    ],
		    "month_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4",
		        "5",
		        "6",
		        "7",
		        "8",
		        "9",
		        "10",
		        "11",
		        "12"
		    ],
		    "day_names": [
		        "일요일",
		        "월요일",
		        "화요일",
		        "수요일",
		        "목요일",
		        "금요일",
		        "토요일"
		    ],
		    "day_names_abbreviated": [
		        "Sun",
		        "Mon",
		        "Tue",
		        "Wed",
		        "Thu",
		        "Fri",
		        "Sat"
		    ],
		    "day_names_short": [
		        "일",
		        "월",
		        "화",
		        "수",
		        "목",
		        "금",
		        "토"
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "W",
		        "T",
		        "F",
		        "S"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "noon",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "noon",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "A",
		        "noon": "N",
		        "pm": "P"
		    },
		    "quarter_names": [
		        "1/4분기",
		        "2/4분기",
		        "3/4분기",
		        "4/4분기"
		    ],
		    "quarter_names_abbreviated": [
		        "1분기",
		        "2분기",
		        "3분기",
		        "4분기"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "기원전",
		        "서기"
		    ],
		    "era_names_abbreviated": [
		        "BC",
		        "AD"
		    ],
		    "era_names_narrow": [
		        "BC",
		        "AD"
		    ],
		    "full_format": "y년 MMMM월 d일 EEEE",
		    "long_format": "MMMM d, y",
		    "medium_format": "MMM d, y",
		    "short_format": "M/d/yy",
		    "firstday_of_week": 0
		};
	}
})();