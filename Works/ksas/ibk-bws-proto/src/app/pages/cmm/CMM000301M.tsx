/**
 * @description 공통 ~ 메인
 */

// dependency
import React, { useRef, useState } from 'react';

// components
// import '@modules/Index';
import FavoriteDiv from 'app/shared/layouts/Favorite';
import ConsultsDiv from 'app/shared/layouts/Consults';
import Icon from 'app/shared/modules/OIcon';
import Label from 'app/shared/modules/OLabel';
import CommonButton from 'app/shared/modules/OButton';
import ImageButton from 'app/shared/modules/OImageButton';
import InputCheck from 'app/shared/modules/OInputCheck';
import InputRadio from 'app/shared/modules/OInputRadio';
import XDropdown from 'app/shared/modules/XDropdown';
import XMultiSelect from 'app/shared/modules/XMultiSelect';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import { addLocale } from 'primereact/api';
import { Nullable } from 'primereact/ts-helpers';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function CMM000301M() {
  // Dialog
  // const [visible, setVisible] = useState<boolean>(true);

  // OverlayPanel
  const viewimageOverlay0 = useRef(null);
  const viewimageOverlay1 = useRef(null);
  const viewimageOverlay2 = useRef(null);

  // BreadCrumb
  const paths: MenuItem[] = [{ label: '행내등기·우편물' }, { label: '우편물' }, { label: '우편물신청' }];

  // InputText
  const [value, setValue] = useState<string>('');

  // InputMask
  const [Mask, setMask] = useState(null);

  // InputNumber
  const [InputNumberValue, setInputNumberValue] = useState(0);

  // AutoComplete
  const [AutoCompleteValue, setAutoCompleteValue] = useState('');
  const [AutoCompleteItems, setAutoCompleteItems] = useState([]);
  const AutoCompleteSearch = (evt) => {
    setAutoCompleteItems([...Array(10).keys()].map(item => evt.query + '-' + item));
  };
  const itemTemplate = (item) => {
    return (
      <>
        <span className="p-autocomplete-cell">[0001] 홍길동</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">부장</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[0031] 을지6가</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">0031</span>
        <span className="p-autocomplete-cell sep">|</span>
        <span className="p-autocomplete-cell">[1111] 을지6가</span>
      </>
    );
  };

  // Calendar
  addLocale('ko', {
    firstDayOfWeek: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });
  const [Date, setDate] = useState<Nullable<Date>>(null);
  const [Time, setTime] = useState(null);

  // RadioButton
  const [ingredient, setIngredient] = useState<string>('');

  // Checkbox
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div className="roles page-home" data-div-role="0">
        <div className="div-home">
          <div className="home-primary">

            <div className="home-header">
              헤더
            </div>

            <div className="home-group _task">

              <div className="home-section _my">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">나의 미처리 업무</strong>
                    </div>
                    <div className="data">
                      <span className="value">4,444</span>
                      <span className="units">건</span>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <table className="table">
                      <colgroup>
                        <col />
                        <col />
                        <col />
                      </colgroup>

                      <tbody>
                      {[...Array(3)].map((e, idx) => (
                      <>
                        <tr key={idx}>
                          <td>
                            <a href="javascript:" className="subject">
                              <span className="main">외화 자금현송명령부 미등록</span>
                              <em className="category">행내등기·우편물</em>
                            </a>
                          </td>
                          <td>
                            <div className="auth">
                              <span className="main">홍길동</span>
                              <em className="position">대리</em>
                            </div>
                          </td>
                          <td>
                            <div className="data">
                              <span className="value">4,444</span>
                              <span className="units">건</span>
                            </div>
                          </td>
                        </tr>
                      </>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="home-section _branch">
                <div className="header">
                  <div className="primary">
                    <div className="heading">
                      <strong className="label">나의 미처리 업무</strong>
                    </div>
                    <div className="data">
                      <span className="value">4,444</span>
                      <span className="units">건</span>
                    </div>
                  </div>
                </div>

                <div className="center">
                  <div className="contain">
                    <table className="table">
                      <colgroup>
                        <col />
                        <col />
                        <col />
                      </colgroup>

                      <tbody>
                      {[...Array(24)].map((e, idx) => (
                      <>
                        <tr key={idx}>
                          <td>
                            <a href="javascript:" className="subject">
                              <span className="main">외화 자금현송명령부 미등록</span>
                              <em className="category">행내등기·우편물</em>
                            </a>
                          </td>
                          <td>
                            <div className="auth">
                              <span className="main">홍길동</span>
                              <em className="position">대리</em>
                            </div>
                          </td>
                          <td>
                            <div className="data">
                              <span className="value">4,444</span>
                              <span className="units">건</span>
                            </div>
                          </td>
                        </tr>
                      </>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

            <div className="home-group _ship">
              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>
            </div>

            <div className="home-group _notice">
              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>
            </div>

          </div>

          <div className="home-secondary">

            <div className="home-group _setting">
              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>
            </div>

            <div className="home-group _watch">
              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>
            </div>

            <div className="home-group _quick">
              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>

              <div className="home-section">
                <div className="header">
                  <div className="primary">
                    ddddd
                  </div>
                </div>

                <div className="center">
                  dddddddddddddddddddddddd
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CMM000301M;
