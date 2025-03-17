/**
 * @description 퍼블리싱 가이드_폰트
 */

// dependency
import React, { useRef } from 'react';

// components
import Navigation from '@pages/guide/Navigation';

function Typography() {
  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>Typography</h2>
          <div className="wrap">
            <section className="grid">
              <div className="col-12">
                <h3 className="title">
                  폰트는 <span className="ft-bold">Pretendard</span>를 사용한다.
                </h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-family</span>
                        </dt>
                        <dd>
                          <span>Pretendard</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.ft-bold - font-weight: 600</span>
                        </dt>
                        <dd>
                          <span className="ft-bold">IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.ft-medium - font-weight: 500</span>
                        </dt>
                        <dd>
                          <span className="ft-medium">IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.ft-default - font-weight: 400</span>
                        </dt>
                        <dd>
                          <span>IBK상시감시시스템 (default)</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 11px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '11px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 12px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '12px' }}>IBK상시감시시스템 (default)</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 13px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '13px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 14px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '14px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 15px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '15px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 16px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '16px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 17px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '17px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 18px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '18px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 19px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '19px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">font-size: 20px</span>
                        </dt>
                        <dd>
                          <span style={{ fontSize: '20px' }}>IBK상시감시시스템</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typography;
