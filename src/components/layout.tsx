import { SidebarComponent, ToolbarComponent, TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
// import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import {
  Link, Outlet
} from "react-router-dom";
import * as React from 'react';
import useAuth from "../routes2/useAuth";

const LayoutComponent = () => {
  const [sidebar, setSidebar] = React.useState(false)
  const { userRole } = useAuth()

  const menuItems = [
    {
      // id: 1,
      text: 'Overview',
      url: "/Overview",
      iconCss: 'icon icon-user',
      roles: ["admin", "user"],
      items: [
        {
          // id: 3,
          text: 'All Data', url: "/Overview/AllData", roles: ["admin"],
        },
        {
          // id: 4,
          text: 'Category2', url: "/Overview/Category2", roles: ["admin"],
          items: [
            {
              // id: 7,
              text: 'Product', url: "/Overview/Category2/Product", roles: ["user"]
            }
          ]
        },
        {
          // id: 3,
          text: 'All Data2', url: "/Overview/AllData", roles: ["admin"],
        },
        {
          // id: 4,
          text: 'Category3', url: "/Overview/Category2", roles: ["admin"],
          items: [
            {
              // id: 7,
              text: 'Product1', url: "/Overview/Category2/Product", roles: ["user"]
            }
          ]
        },
      ]
    },
    {
      // id: 2,
      text: 'Notification',
      url: "/Notification",
      iconCss: 'icon-bell-alt icon',
      roles: ["admin", "user"],
      items: [
        {
          // id: 5,
          text: 'Change Profile', url: "/Notification/ChangeProfile", roles: ["admin", "user"],
          items: [
            {
              // id: 8,
              text: 'Name', url: "/Notification/ChangeProfile/Name", roles: ["user"]
            },
            {
              // id: 9,
              text: 'Age', url: "/Notification/ChangeProfile/Age", roles: ["admin"]
            }
          ]
        },
        {
          // id: 6,
          text: 'Add Name1', url: "/Notification/AddName", roles: ["user"]
        },
        {
          // id: 6,
          text: 'Add Name2', url: "/Notification/AddName", roles: ["admin"]
        },
        {
          // id: 6,
          text: 'Add Name3', url: "/Notification/AddName", roles: ["admin"]
        },
      ]
    },
    {
      // id: 2,
      text: 'Form',
      url: "/Form",
      iconCss: 'icon-tag icon',
      roles: ["admin", "user"],
    },
    {
      // id: 2,
      text: 'Form2',
      url: "/Form2",
      iconCss: 'icon-tag icon',
      roles: ["admin", "user"],
    },
  ];

  function filterRoles(arr: any[], selectedKey: string) {

    return arr.filter(item => item.roles.includes(selectedKey)).map(item => {
      item = Object.assign({}, item)
      if (item.items) {
        item.items = filterRoles(item.items, selectedKey)
      }
      return item
    })
  }

  var sidebarobj: SidebarComponent;

  const toolbarCliked = (args: any) => {
    console.log(args);
    
    if (args.item.tooltipText === "Menu") {

      sidebarobj.toggle();
    }
  }

  const handleClick = () => {
    sidebarobj.toggle();
    setSidebar(!sidebar)
  }

  const handleSearch = () => {
    const inputSearch: HTMLElement = document.querySelector(".search-input") as HTMLInputElement;
    console.log(inputSearch?.classList.value);

    if (inputSearch.classList.value.indexOf("active") !== -1) {
      console.log(2);

      inputSearch.classList.remove("active")
      inputSearch.style.display = "none"
      // inputSearch.style.animation = "FadeOut ease-in .5s;"
    } else {
      console.log(1);

      inputSearch.classList.add("active")
      inputSearch.style.display = "block"
      inputSearch.focus()
      // inputSearch.style.animation = "FadeIn ease-in .5s;"
    }
  }

  const fields = {
    dataSource: filterRoles(menuItems, userRole), child: 'items',
    id: 'text', iconCss: "iconCss", text: 'text',
  };

  const nodeTemplate = (data: any) => {
    return (
      <>
        <Link className={`${data.roles}`} to={data.url} id={data.text}>
          <span style={{ display: 'flex' }} className="treeName">{data.text},<h6 style={{ height: '30px', lineHeight: '30px' }}>{data.roles}</h6></span></Link>
      </>
    );
  }

  const menuTemplate = (data: any) => {

    return (
      <>
        <Link to={data.properties.url} style={{ display: "flex", textDecoration: "none", color: "rgba(0,0,0,0.54)" }}>
          <div
            style={{ fontSize: "24px", minWidth: "24px", alignItems: "center", verticalAlign: "middle" }}
            className={`${data.properties.iconCss}`}></div>
          <div
            style={{ paddingLeft: "14px", display: "flex" }}
          >{data.properties.text}</div>
        </Link>
      </>
    );
  }

  return (
    <div className="layout-syncfusion">
      <div id="wrapper" className="control-section">
        <div id="sidebarmenu">
          {/* Header */}
          <ToolbarComponent
            id="menuToolbar"
            // clicked={toolbarCliked.bind(this)}
            style={{ borderBottom: "1px solid black", display: "flex", justifyContent: "space-between", flexWrap: "nowrap" }}
          >
            <div className="e-folder"><div className="e-folder-name"><Link to="/home">Logo</Link>{userRole}</div></div>
            <div className="e-folder header-right">
              {/* <span style={{
                display: "flex",
              }} className="e-folder-name e-icons e-search header-right-item icon-search" onClick={() => handleSearch()}> */}
              {/* <div className="search-input" > */}
              {/* <button style={{ padding: "6px 5px 2px", margin: "0 5px", cursor: "pointer" }}>X</button> */}
              {/* <input
                  className="search-input"
                  style={{
                    padding: "6px 5px 2px",
                    borderRadius: "5px",
                    margin: "0 5px",
                    cursor: "pointer",
                    display: "none"
                  }}
                  placeholder="search..."
                /> */}
              {/* </div> */}
              {/* </span> */}
              {/* <div
                  style={{
                    textAlign: 'right',
                    height: '42px',
                    lineHeight: '42px',
                    // boxShadow: '0 1px 4px rgba(0,21,41,.12)',
                    padding: '0 32px',
                    width: '400px',
                  }}
                > */}
              {/* <HeaderSearch
                placeholder="search..."
                style={{ width: '250px', padding: "0 12px", borderRadius: "10px", border: "1px solid #c0c0c0", marginRight: "10px" }}
                // dataSource={['1', '2', '3']}
                onSearch={value => {
                  console.log('input', value);
                }}
                onPressEnter={value => {
                  console.log('enter', value);
                }}
              /> */}
              {/* </div> */}
              <span className="e-folder-name e-icons e-circle-info header-right-item"></span>
              {/* <span className="e-folder-name header-right-item"><NoticeIcon count={5} /></span> */}
              <span className="e-folder-name header-right-item header__navbar-item-login">
                <img style={{
                  width: "32px",
                  marginBottom: "5px",
                  verticalAlign: "middle",
                  borderRadius: "50%"
                }} src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/78366847_1023258561351683_2533805506619768832_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QWvcfRSwNO8AX9RVnyC&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8aTsPXeXGAZKkh_LIB8M0GGuzkFw-VzEpXtkOJ6BgrBQ&oe=628B4BA1" alt="" />
                <span
                  style={{ marginLeft: "10px" }}
                  className="e-folder-name header-right-item">Đăng Phong</span>
                <ul className="header__navbar-user-menu">
                  <li className="header__navbar-user-menu-item">
                    <div>Tài khoản của tôi</div>
                  </li>
                  <li className="header__navbar-user-menu-item">
                    <div>Cài đặt</div>
                  </li>
                  <li className="header__navbar-user-menu-item header__navbar-user-menu-item--separate">
                    <div className="user header__navbar-item header__navbar-item--strong header__navbar-item-login" key="logout">
                      Đăng xuất
                    </div>
                  </li>
                </ul>
              </span>
              <span className="e-folder-name header-right-item">
                <i className="anticon">
                  <svg style={{ paddingTop: "12px" }} viewBox="0 0 24 24" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " className="css-c4d79v"></path>
                  </svg>
                </i>
              </span>

            </div>
            {/* </ItemsDirective> */}
          </ToolbarComponent>
          {/* Content */}
          <div className="main-menu-content" id="maintext">
            <div style={{ width: "calc(100% - 220px)" }} className="menu-content">
              <Outlet />
            </div>
          </div>
          {/* SideBar */}
          <SidebarComponent
            id="menuSidebar"
            className="sidebar-menu"
            ref={(Sidebar: any) => sidebarobj = Sidebar}
            enableDock={true}
            dockSize='50px'
            width='220px'
            target='.main-menu-content'
            isOpen={true}
            enableGestures={false}
            type="Auto"
          >
            <div className="main-menu">
              <div style={{
                maxHeight: "700px",
                // overflow: "auto" 
              }}>
                {sidebar ?
                  <MenuComponent
                    id="dockMenu"
                    items={filterRoles(menuItems, userRole)}
                    orientation='Vertical'
                    cssClass='dock-menu'
                    template={menuTemplate}
                  ></MenuComponent>
                  :
                  <TreeViewComponent
                    id='mainTree'
                    fields={fields}
                    expandOn='Click'
                    nodeTemplate={nodeTemplate}
                    fullRowNavigable={true}
                  />
                }
              </div>
            </div>
          </SidebarComponent>
          <span className="button-menu e-icons e-increase-indent" style={{ position: "fixed", zIndex: 999, bottom: "5px", left: "5px", width: "50px", fontSize: "20px", margin: "5px", color: "rgba(0,0,0,0.54)", cursor: "pointer" }} onClick={handleClick}></span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LayoutComponent)