/**
 * @description SUBTMPL
 */

// dependency
import React, { useState } from 'react';

// components
// import '@modules/Index';
import OIcon from 'app/shared/modules/OIcon';
import OLabel from 'app/shared/modules/OLabel';
import OButton from 'app/shared/modules/OButton';
import OImageButton from 'app/shared/modules/OImageButton';
import XDropdown from 'app/shared/modules/XDropdown';
import { Dialog } from 'primereact/dialog';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
