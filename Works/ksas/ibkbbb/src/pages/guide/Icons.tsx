/**
 * @description 퍼블리싱 가이드_아이콘 컴포넌트
 */

// dependency
import React from 'react';

// components
import Navigation from '@pages/guide/Navigation';
import SubNavigation from '@components/SubNavigation';
import { Button } from 'primereact/button';

function Icons() {
  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>icons</h2>

          <div className="wrap">
            <section className="grid">
              <div className="col-6">
                <h3 className="title">Icons</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .ico notice
                            <br />
                            .ico file
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <i className="ico notice"></i>
                            <i className="ico file ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">img_profile.svg</span>
                        </dt>
                        <dd>
                          <span>
                            <img src="/public/images/gnb/img_profile.svg" alt="썸네일" />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3 className="title">Logo</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">img_logo.svg</span>
                        </dt>
                        <dd>
                          <span>
                            <img src="/public/images/gnb/img_logo.svg" style={{ width: '200px' }} />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">img_logo_blue.svg</span>
                        </dt>
                        <dd>
                          <span>
                            <img src="/public/images/common/img_logo_blue.svg" style={{ width: '200px' }} />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-6">
                <h3 className="title">Status</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-clock</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-clock-1"></i>
                            <i className="btn-status talk-clock-2 ml-12"></i>
                            <i className="btn-status talk-clock-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-dish</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-dish-1"></i>
                            <i className="btn-status talk-dish-2 ml-12"></i>
                            <i className="btn-status talk-dish-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-distance</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-distance-1"></i>
                            <i className="btn-status talk-distance-2 ml-12"></i>
                            <i className="btn-status talk-distance-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-house</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-house-1"></i>
                            <i className="btn-status talk-house-2 ml-12"></i>
                            <i className="btn-status talk-house-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-location</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-location-1"></i>
                            <i className="btn-status talk-location-2 ml-12"></i>
                            <i className="btn-status talk-location-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-minus</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-minus-1"></i>
                            <i className="btn-status talk-minus-2 ml-12"></i>
                            <i className="btn-status talk-minus-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3 className="title"></h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-offline</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-offline-1"></i>
                            <i className="btn-status talk-offline-2 ml-12"></i>
                            <i className="btn-status talk-offline-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-presentation</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-presentation-1"></i>
                            <i className="btn-status talk-presentation-2 ml-12"></i>
                            <i className="btn-status talk-presentation-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-stop</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-stop-1"></i>
                            <i className="btn-status talk-stop-2 ml-12"></i>
                            <i className="btn-status talk-stop-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-suitcase</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-suitcase-1"></i>
                            <i className="btn-status talk-suitcase-2 ml-12"></i>
                            <i className="btn-status talk-suitcase-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-travel</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-travel-1"></i>
                            <i className="btn-status talk-travel-2 ml-12"></i>
                            <i className="btn-status talk-travel-3 ml-12"></i>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-status talk-user</span>
                        </dt>
                        <dd>
                          <span>
                            <i className="btn-status talk-user-1"></i>
                            <i className="btn-status talk-user-2 ml-12"></i>
                            <i className="btn-status talk-user-3 ml-12"></i>
                          </span>
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

export default Icons;
