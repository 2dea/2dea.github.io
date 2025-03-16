/**
 * @description SUBTMPL
 */

// dependency
import React, { useState } from 'react';

// components
// import CheckBox from '@components/CheckBox';
// import SelectBox from '@components/SelectBox';
// import DatePicker from '@components/DatePicker';
// import PageTitle from '@components/PageTitle';
// import SubNavigation from '@components/SubNavigation';
// import { BreadCrumb } from 'primereact/breadcrumb';
// import { MenuItem } from 'primereact/menuitem';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function POPTMPL() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
      <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Dialog>
  );
}

export default POPTMPL;
