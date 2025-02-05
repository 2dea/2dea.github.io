/**
 * @description 퍼블리싱 가이드_버튼 컴포넌트
 */

// dependency
import React from 'react';

// components
import Navigation from '@pages/guide/Navigation';
import SubNavigation from '@components/SubNavigation';
import { Button } from 'primereact/button';

function Buttons() {
  return (
    <div className="ov-html-guide">
      <div className="inner">
        <Navigation />
        <div className="document">
          <h2>buttons</h2>

          <div className="wrap">
            <section className="grid">
              <div className="col-6">
                <h3 className="title">Primary</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary blue-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary blue-fill" />
                            <Button label="버튼" className="btn-text primary blue-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary blue-line" />
                            <Button label="버튼" className="btn-text primary blue-line ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary sub-blue</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary sub-blue" />
                            <Button label="버튼" className="btn-text primary sub-blue ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary gray-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary gray-fill" />
                            <Button label="버튼" className="btn-text primary gray-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary default</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary default" />
                            <Button label="버튼" className="btn-text primary default ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary notice blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text primary notice blue-line" />
                            <Button label="버튼" className="btn-text primary notice blue-line ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3 className="title">Secondary</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text secondary blue-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary blue-fill" />
                            <Button label="버튼" className="btn-text secondary blue-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text secondary blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary blue-line" />
                            <Button label="버튼" className="btn-text secondary blue-line ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text secondary sub-blue</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary sub-blue" />
                            <Button label="버튼" className="btn-text secondary sub-blue ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text primary gray-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary gray-fill" />
                            <Button label="버튼" className="btn-text secondary gray-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text secondary default</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary default" />
                            <Button label="버튼" className="btn-text secondary default ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text secondary notice blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text secondary notice blue-line" />
                            <Button label="버튼" className="btn-text secondary notice blue-line ml-12" disabled />
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
                <h3 className="title">Tertiary</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary blue-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary blue-fill" />
                            <Button label="버튼" className="btn-text tertiary blue-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary blue-line" />
                            <Button label="버튼" className="btn-text tertiary blue-line ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary sub-blue</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary sub-blue" />
                            <Button label="버튼" className="btn-text tertiary sub-blue ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary gray-fill</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary gray-fill" />
                            <Button label="버튼" className="btn-text tertiary gray-fill ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary default</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary default" />
                            <Button label="버튼" className="btn-text tertiary default ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-text tertiary notice blue-line</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-text tertiary notice blue-line" />
                            <Button label="버튼" className="btn-text tertiary notice blue-line ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3 className="title">Text</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-download icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-download" icon="pi" />
                            <Button label="버튼" className="btn-download ml-12" icon="pi" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-download-all icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-download-all" icon="pi" />
                            <Button label="버튼" className="btn-download-all ml-12" icon="pi" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-img-print icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-img-print" icon="pi" />
                            <Button label="버튼" className="btn-img-print ml-12" icon="pi" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-print" icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="버튼" className="btn-print" icon="pi" />
                            <Button label="버튼" className="btn-print ml-12" icon="pi" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-copy</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="텍스트 버튼" className="btn-copy" />
                            <Button label="텍스트 버튼" className="btn-copy ml-12" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-underline</span>
                        </dt>
                        <dd>
                          <span>
                            <Button label="텍스트 버튼" className="btn-underline" />
                            <Button label="텍스트 버튼" className="btn-underline ml-12" disabled />
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
                <h3 className="title">Icon Button</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico accordion icon="pi"
                            <br />
                            .btn-ico accordion-open icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico accordion" icon="pi" />
                            <Button className="btn-ico accordion-open ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico arrow prev icon="pi"
                            <br />
                            .btn-ico arrow next icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico arrow prev" icon="pi" />
                            <Button className="btn-ico arrow next ml-12" icon="pi" />
                            <Button className="btn-ico arrow prev ml-12" icon="pi" disabled />
                            <Button className="btn-ico arrow next ml-12" icon="pi" disabled />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico drag icon="pi"
                            <br />
                            .btn-ico waste icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico drag" icon="pi" />
                            <Button className="btn-ico waste ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-ico more icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico more" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico search icon="pi"
                            <br />
                            .btn-ico clear icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico search" icon="pi" />
                            <Button className="btn-ico clear ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico tool more icon="pi"
                            <br />
                            .btn-ico tool all icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico tool more" icon="pi" />
                            <Button className="btn-ico tool all ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h3 className="title">Text</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-plus sm / .btn-miuns sm icon="pi
                            <br />
                            .btn-plus / .btn-miuns icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-plus sm" icon="pi" />
                            <Button className="btn-minus sm ml-12" icon="pi" />
                            <Button className="btn-plus ml-12" icon="pi" />
                            <Button className="btn-minus ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-close sm icon="pi"
                            <br />
                            .btn-close icon="pi"
                            <br />
                            .btn-close lg icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-close sm" icon="pi" />
                            <Button className="btn-close ml-12" icon="pi" />
                            <Button className="btn-close lg ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">.btn-up icon="pi"</span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-up" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-plus icon="pi"
                            <br />
                            .btn-minus icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span className="flex">
                            <div className="p-splitter-gutter">
                              <div className="p-splitter">
                                <div className="p-splitter-gutter-handle"></div>
                              </div>
                            </div>
                            <div className="p-splitter-vertical ml-12">
                              <div className="p-splitter-gutter">
                                <div className="p-splitter">
                                  <div className="p-splitter-gutter-handle"></div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-swap lt icon="pi"
                            <br />
                            .btn-swap icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-swap lt" icon="pi" />
                            <Button className="btn-swap ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">
                            .btn-ico direction left icon="pi"
                            <br />
                            .btn-ico direction right icon="pi"
                          </span>
                        </dt>
                        <dd>
                          <span>
                            <Button className="btn-ico direction left" icon="pi" />
                            <Button className="btn-ico direction right ml-12" icon="pi" />
                            <Button className="btn-ico direction left lg ml-12" icon="pi" />
                            <Button className="btn-ico direction right lg ml-12" icon="pi" />
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid">
              <div className="col-12">
                <h3 className="title">Tab Button</h3>
                <div className="u-window">
                  <div className="win-panel">
                    <div className="u-dataview w-250">
                      <dl className="u-dataview-list">
                        <dt>
                          <span className="text-right">SubNavigation</span>
                        </dt>
                        <dd className="">
                          <div className="w-full">
                            <SubNavigation />
                          </div>
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

export default Buttons;
