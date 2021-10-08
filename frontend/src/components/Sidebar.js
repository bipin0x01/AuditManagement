import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import '../responsive.css'
const Sidebar = () => {
    return (
        <>
            <ProSidebar>
  <Menu iconShape="square">
    <MenuItem ><Link to="">Dashboard</Link></MenuItem>
    <SubMenu title="Users">
        <MenuItem>
            <Link to="/admin/clientlist">All Users</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/admin/clientlist">Add User</Link>
        </MenuItem>
    </SubMenu>
    <MenuItem>Auditors</MenuItem>
    <MenuItem >Audit Reports</MenuItem>
    <MenuItem>Settings</MenuItem>
    
  </Menu>
</ProSidebar>;
        </>
    )
}

export default Sidebar
