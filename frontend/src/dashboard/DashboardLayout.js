import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; 
import "../Styles/DashboardLayout.css"





const DashboardLayout=()=>{
    return(
        <div className='demo-9'>
           <SideBar/>
            <Outlet/>
        </div>
    )
}
export default DashboardLayout;