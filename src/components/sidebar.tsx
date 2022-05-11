import React from 'react';
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';

const SideBar = ({sidebar}:any) => {
  const menuItems = [
    {
      text: 'Overview',
      iconCss: 'icon-user icon',
      items: [
        { text: 'All Data' },
        { text: 'Category2' },
        { text: 'Category3' }
      ]
    },
    {
      text: 'Notification',
      iconCss: 'icon-bell-alt icon',
      items: [
        { text: 'Change Profile' },
        { text: 'Add Name' },
        { text: 'Add Details' }
      ]
    },
    {
      text: 'Info',
      iconCss: 'icon-tag icon',
      items: [
        { text: 'Message' },
        { text: 'Facebook' },
        { text: 'Twitter' }
      ]
    },
    {
      text: 'Comments',
      iconCss: 'icon-comment-inv-alt2 icon',
      items: [
        { text: 'Category1' },
        { text: 'Category2' },
        { text: 'Category3' }
      ]
    },
    {
      text: 'Bookmarks',
      iconCss: 'icon-bookmark icon',
      items: [
        { text: 'All Comments' },
        { text: 'Add Comments' },
        { text: 'Delete Comments' }
      ]
    },
    {
      text: 'Images',
      iconCss: 'icon-picture icon',
      items: [
        { text: 'Add Name' },
        { text: 'Add Mobile Number' }
      ]
    },
    {
      text: 'Users ',
      iconCss: 'icon-user icon',
      items: [
        { text: 'Mobile User' },
        { text: 'Laptop User' },
        { text: 'Desktop User' }
      ]
    },
    {
      text: 'Settings',
      iconCss: 'icon-eye icon',
      items: [
        { text: 'Change Profile' },
        { text: 'Add Name' },
        { text: 'Add Details' }
      ]
    }
  ];
  const enableDock = true;
  const dockSize = '50px';
  const width = '220px';
  const target = '.main-menu-content';
  return (
    <div>
      <SidebarComponent
        id="menuSidebar"
        className="sidebar-menu"
        ref={(Sidebar:any) => sidebar = Sidebar}
        enableDock={enableDock} dockSize={dockSize}
        width={width} target={target} isOpen={true}
        type="Auto">
        <div className="main-menu">
          <div>
            <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu'></MenuComponent>
          </div>
        </div>
      </SidebarComponent>
    </div>
  );
};

export default SideBar;