import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "../responsive.css";
const Sidebar = ({ history }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-3 col-md-4 sidebar">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>
              <Link to="">Dashboard</Link>
            </MenuItem>
            <SubMenu title="Users">
              <MenuItem>
                <Link to="/admin/clientlist">All Users</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Auditors">
              <MenuItem>
                <Link to="/admin/users">All Auditors</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/admin/users">Add Auditor</Link>
              </MenuItem>
            </SubMenu>
            <MenuItem>Audit Reports</MenuItem>
            <MenuItem>Settings</MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
