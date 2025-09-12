/**
 * @description 공통 헤더 컴포넌트
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import Icon from 'app/shared/modules/OIcon';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import { Tooltip } from 'primereact/tooltip';
import { AutoComplete } from "primereact/autocomplete";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Header() {
  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
        <span className="p-autocomplete-cell">재난·안전관리 › <mark className="keyword">열쇠</mark>관리 › <mark className="keyword">열쇠</mark>종류관리</span>
      </>
    );
  };

  // 레이아웃 버튼
  const [isSwitched, setIsSwitced] = useState(false);
  const handlerChangeLayout = () => {
    setIsSwitced(!isSwitched);
  };

  // 뎁스2 메뉴 열기
  const [isHovering, setIsHovering] = useState(false);
  const handleGnbMouseOver = () => {
    setIsHovering(true);
  };
  const handleGnbMouseOut = () => {
    setIsHovering(false);
  };

  // gnb depth3 open
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handlerOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 뎁스3 메뉴 열기
  const [checked, setChecked] = useState(false);

  return (
    <>
      <header role="banner" id="Header" className="dom-header">
        <div role="navigation" className="div-skip">
          <span className="o-ogp"><img src={require("assets/images/img_ogp.alt.png")} alt="" /></span>

          <ul>
            <li><a id="Go-SkipMain" href="#Center"><strong>주요 콘텐츠로 이동</strong></a></li>
          </ul>
        </div>

        <div className="roles">
          <div className="div-root">
            <span className="logo"><span className="inner"><em className="symbol">IBK</em></span></span>
            <strong className="system"><span className="inner">업무지원시스템</span></strong>
          </div>

          <div className="div-account">
            <dl>
              <dt><span className="label">사용자 정보</span></dt>
              <dd>
                <span className="user">
                  <span className="name">김기업</span>
                  <em className="id" aria-label="아이디">04123</em>
                </span>
              </dd>
              <dd>
                <span className="task">
                  <span className="prop">
                    <span className="head">미처리업무</span>
                    <em className="data">
                      <span className="value">8</span>
                      <span className="units">건</span>
                    </em>
                  </span>
                  <span className="binds">
                    <ImageButton label="새로고침" icon="refresh" />
                  </span>
                </span>
              </dd>
              <dd>
                <span className="contacts">
                  <ImageButton label="업무별 문의처" icon="contacts" />
                </span>
              </dd>
              <dd>
                <span className="settings">
                  <ImageButton label="설정" icon="settings" />
                </span>
              </dd>
            </dl>
          </div>

          <div className="div-nav-global">
            <ul>
              <li><a href="javascript:" className="link"><span className="label">원화정산</span></a></li>
              <li><a href="javascript:" className="link" aria-current="true"><span className="label">중요용지용도품(영업점)</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">중요용지용도품(본부)</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">행내등기우편물</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">안전관리</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">비상계획안전기획</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">영업지원</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">수수료관리</span></a></li>
              <li><a href="javascript:" className="link"><span className="label">공통·결재</span></a></li>
            </ul>
          </div>

          {/* <div className="div-account">
            <strong className="data">
              <span className="name">홍길동</span>
              <span className="div">(<span>04123</span>)</span>
            </strong>
            <span className="binds">
              <button type="button" className="signout"><i aria-hidden="true"></i><span className="inner">로그아웃</span></button>
            </span>
          </div>

          <div className="div-bind">
            <span className="item mymenu"><button type="button" title="My 메뉴"><i aria-hidden="true"></i><span className="inner">My메뉴</span></button></span>
            <span className="item menu-show"><a id="Go-Navigator" href="#Navigator" title="전체메뉴 보이기"><i aria-hidden="true"></i><span className="inner">전체메뉴</span></a></span>
          </div> */}

          {/* <div className="div-search">
            <div className="fields">
              <span className="o-form _input">
                <input type="text" placeholder="Settings Search" value="" className="bind" /><i aria-hidden="true"></i>
                <span className="inner-binds">
                  <button type="button" title="Search" className="o-button type-icon"><i className="o-symbol style-outlined" aria-hidden="true">search</i><span className="label">Search</span></button>
                </span>
              </span>
            </div>
          </div> */}
        </div>

        <hr className="g-overlay" />
      </header>

      <Tabs role="navigation" id="Navigator" className="dom-nav" defaultIndex={0}>
        <div className="div-search">
          {/* <div className="o-field">
            <div className="fields">
              <span className="o-form _input">
                <i aria-hidden="true" className="o-icon _search"></i>
                <input type="text" placeholder="메뉴명이나 코드를 검색해주세요" value="" className="bind" /><i aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div className="result">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div> */}
          <div className="o-field">
            <div className="fields">
              <div className="o-form _input">
                <Icon icon="search" />
                <AutoComplete className="bind" placeholder="메뉴명을 입력해주세요" value={AutoCompleteValue} suggestions={AutoCompleteItems} itemTemplate={itemTemplate} completeMethod={AutoCompleteSearch} onChange={(e) => setAutoCompleteValue(e.target.value)} />
                <i aria-hidden="true"></i>
                <span className="inner-binds">
                  <ImageButton label="초기화" icon="remove" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="div-tablist">
          <div className="m-tab">
            <TabList className="lists">
              <Tab className="link _total"><i className="o-icon _menu" aria-hidden="true"></i><span className="label">전체메뉴</span></Tab>
              <Tab className="link _person"><i className="o-icon _favorite" aria-hidden="true"></i><span className="label">마이메뉴</span></Tab>
            </TabList>
            {/* <ul className="lists">
              <li>
                <a href="javascript:" className="link total" aria-selected="true"><i className="o-icon _menu" aria-hidden="true"></i><span className="label">전체메뉴</span></a>
              </li>
              <li>
                <a href="javascript:" className="link person"><i className="o-icon _favorite" aria-hidden="true"></i><span className="label">마이메뉴</span></a>
              </li>
            </ul> */}

            <ul className="controls">
              <li>
                <label className="toggle o-image-check _menu-toggle">
                  <input type="checkbox" title="메뉴영역 확장/축소" value="" className="bind" /><i aria-hidden="true"></i>
                  <span className="label">메뉴 확장/축소</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="roles">
          <TabPanel className="div-nav-local _total">
            {/* <Accordion className="lists" multiple activeIndex={[0]}>
              <AccordionTab unstyled className="item" header="대시보드">
                <a href="javascript:" title="menu" className="p-accordion-header-link">
                  <span className="p-accordion-header-text">menu</span>
                </a>
                <a href="javascript:" title="menu" className="p-accordion-header-link">
                  <span className="p-accordion-header-text">menu</span>
                </a>
              </AccordionTab>
              <AccordionTab unstyled className="item" header="Header I">
                a
              </AccordionTab>
            </Accordion> */}
            <div className="lists">
              <div className="item">
                <div className="header">
                  <a href="javascript:" title="대시보드" className="p-accordion-header-link"><span className="p-accordion-header-text">대시보드</span></a>{/* Link { @DEV } */}
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="안전점검의 날 점검표 긴 메뉴명 긴 메뉴명 긴 메뉴명 긴 메뉴명" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">안전점검의 날 점검표 긴 메뉴명 긴 메뉴명 긴 메뉴명 긴 메뉴명</span>
                  </a>
                </div>

                <div className="p-toggleable-content">
                  <div className="p-accordion-content">
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="보안진단의 날 점검표" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">보안진단의 날 점검표</span>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="연간자율보안체계" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">연간자율보안체계</span>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="인사이동 조치사항" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">인사이동 조치사항</span>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="도급사업 관리" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">도급사업 관리</span>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="열쇠관리" className="p-accordion-header-link" aria-expanded="true">{/* .p-accordion-header-link[aria-expanded="true"] */}
                    <span className="p-accordion-header-text">열쇠관리</span>
                  </a>
                </div>

                <div className="p-toggleable-content">
                  <div className="p-accordion-content">
                    <a href="javascript:" title="열쇠종류관리" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">열쇠종류관리</span>
                    </a>
                    <a href="javascript:" title="가나다라마바사아자차카타파하하(18글자예요)" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">가나다라마바사아자차카타파하하(18글자예요)</span>
                    </a>
                    <a href="javascript:" title="열쇠등록관리" className="p-accordion-header-link" aria-current="true">{/* .p-accordion-header-link[aria-current="true"] */}
                      <span className="p-accordion-header-text">열쇠등록관리</span>
                    </a>
                    <a href="javascript:" title="열쇠인수도내역" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">열쇠인수도내역</span>
                    </a>
                    <a href="javascript:" title="예비열쇠관리" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">예비열쇠관리</span>
                    </a>
                    <a href="javascript:" title="예비열쇠보관확인증" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">예비열쇠보관확인증</span>
                    </a>
                    <a href="javascript:" title="관련조회 및 출력" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">관련조회 및 출력</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="소방안전관리" className="p-accordion-header-link" aria-expanded="false">
                    <span className="p-accordion-header-text">소방안전관리</span>
                  </a>
                </div>

                <div className="p-toggleable-content">
                  <div className="p-accordion-content">
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                    <a href="javascript:" title="menu" className="p-accordion-header-link">
                      <span className="p-accordion-header-text">menu</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="header">
                  <a href="javascript:" title="기타관리" className="p-accordion-header-link">{/* Link { @DEV } */}
                    <span className="p-accordion-header-text">기타관리</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="m-binds">
              <span className="group _center">
                <CommonButton label="모두닫힘" className="_normal" />
                <CommonButton label="모두펼침" className="_normal" />
              </span>
            </div>
          </TabPanel>

          <TabPanel className="div-nav-local _person">
            <ul className="lists">
            {[...Array(32)].map((e, idx) => (
            <>
              <li key={idx} className={`${idx === 1 ? 'is-selected' : ''}`}>
                <div className="menu">
                  <ImageButton label="순서 재정렬" icon="move" className={'g-cursor-grab'} />
                  <a href="javascript:" className="main"><span className="label">가나다라마바사아자차카타파하하(18글자예요)</span></a>
                  {
                    idx % 3 === 2 ?
                    <ImageButton label="메모보기" icon="memo" />
                    :
                    <ImageButton label="메모작성" icon="memo-empty" />
                  }
                </div>
              </li>
            </>
            ))}
            </ul>

            <div className="m-binds">
              <span className="group _center">
                <CommonButton label="위로" className="_normal" />
                <CommonButton label="아래로" className="_normal" />
                <CommonButton label="삭제" className="_normal" />
                <CommonButton label="저장" className="_normal" disabled />
              </span>
            </div>
          </TabPanel>
        </div>

        <hr className="g-overlay" />
      </Tabs>

    </>
  );
}

export default Header;
