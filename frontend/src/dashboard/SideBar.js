
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards ,HiSupport, HiOutlineCloudUpload} from 'react-icons/hi';
import userImg from "../assets/profile.jpg"
import "../Styles/SideBar.css"


const SideBar=()=>{
    return(
      <div className='reference'>
        <Sidebar aria-label="Sidebar with content separator example">
         
      <div className='local-host'>
      <Sidebar.Items>
        <div className='work'>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
         
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        </div>
        
      </Sidebar.Items>
      </div>
    </Sidebar>
    </div>
    )
}
export default SideBar;