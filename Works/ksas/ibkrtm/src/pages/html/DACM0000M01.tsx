/**
 * @description 공통_07로그인_DACM0000M01
 */

// dependency
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import { Button } from 'primereact/button';

function DACM0000M01() {
  return (
    <div className="ibk-sys-login">
      <div className="login-logo">
        <Link to="/">
          <span className="skip">IBK상시감시시스템</span>
        </Link>
      </div>
      <div className="mt-17 ft-13 ft-c3">오늘보다 나은 미래를 위해 노력합니다.</div>
      <div className="login-sso">
        <Button label="SSO 로그인" className="btn-text blue-fill" />
      </div>
      <div className="mt-12 ft-11 warn">인증이 실패 했습니다. 다시 시도해주시기 바랍니다.</div>
    </div>
  );
}

export default DACM0000M01;
