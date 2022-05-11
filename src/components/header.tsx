import React from 'react';
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';

const Header = () => {
  const toolbarCliked = (args: any) => {
    console.log(args);
    var sidebarobj: SidebarComponent;
    if (args.item.tooltipText === "Menu") {
      // sidebarobj.toggle();
    }
  }
  let folderEle = '<div class="e-folder"><div class="e-folder-name">Navigation Pane</div></div>';
  return (
    <div>
      <ToolbarComponent id="menuToolbar" clicked={toolbarCliked.bind(this)}>
        <ItemsDirective>
          <ItemDirective prefixIcon="menu" tooltipText="Menu"></ItemDirective>
          <ItemDirective
            template={folderEle}
          ></ItemDirective>
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );
};

export default Header;