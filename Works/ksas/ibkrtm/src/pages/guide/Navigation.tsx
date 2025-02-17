/**
 * @description 퍼블리싱 가이드 네비 컴포넌트
 */

// dependency
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  useEffect(() => {
    document.title = '웹 퍼블리싱 가이드';
  }, []);

  return (
    <div className="navi">
      <div className="ci">
        <img src="/public/images/common/img_logo_ci.svg" />
      </div>
      <div className="menu">
        <div className="box">
          <NavLink to="/guide/pages" className={({ isActive }) => (isActive ? 'active' : '')}>
            Pages
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/splitter-home">splitter</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/header">Header</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/typography">Typography</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/buttons">Buttons</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/icons">Icons</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/forms">Forms</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/table">Table</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/alert">Alert</NavLink>
        </div>
        <div className="box">
          <NavLink to="/guide/popup">Popup</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
