/**
 * @description 마이메뉴등록 영역
 */

// dependency
import React, { useRef, useState } from 'react';

// components
import Icon from "app/shared/modules/OIcon";

interface ConsultsDivProps {
  visible?: boolean;
  heading?: string;
  divName?: string;
  telNumber?: string;
  asideLabel?: string;
  asideIcon?: string;
}

function ConsultsDiv({ visible=false, heading='문의', divName, telNumber='undefined', asideLabel, asideIcon='consult-alert' }: ConsultsDivProps) {
  return (
    <>
      {/* <div className="div-consults">
        <div className="bodies">
          <ul className="m-bullets">
            <li>
              <div className="m-consult">
                <span className="header">
                  <strong className="heading">문의</strong>
                </span>
                <span className="bodies">
                  <span className="o-consult"><strong className="head">안전관리팀</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">7463, 0000</span></span></span>
                </span>

                <span className="aside">
                  <span className="o-icon-text">
                    <Icon icon="consult-alert" />
                    <span className="label">반드시 조회 후 신청해주세요.</span>
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      { (visible) &&
        <div className="div-consults">
          <div className="bodies">
            <ul className="m-bullets">
              <li>
                <div className="m-consult">
                  <span className="header">
                    <strong className="heading">{heading}</strong>
                  </span>
                  <span className="bodies">
                    <span className="o-consult"><strong className="head">{divName}</strong> <span className="data o-icon-text"><Icon icon="consult" /><span className="label">{telNumber}</span></span></span>
                  </span>

                  { (asideLabel) &&
                    <span className="aside">
                      <span className="o-icon-text">
                        <Icon icon={asideIcon} />
                        <span className="label">{asideLabel}</span>
                      </span>
                    </span>
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}

export default ConsultsDiv;
