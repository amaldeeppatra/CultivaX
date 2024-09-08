import React from 'react'
import { Link } from 'react-router-dom';
import cultivaxLogo from '../../assets/logo-circular.png'
import { MdOutlineDataExploration } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { MdNewspaper } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import '../../pages/dashboard/dashboard.css'

const Sidebar = () => {
  return (
    <aside class="sidebar">
        <div class="logo">
            <Link to="/dashboard"><img src={cultivaxLogo} alt="Logo" className='cultivaxLogo'/></Link>
        </div>

        <div class="button-group">
            <Link className='sidebar-element' to="/results"><MdOutlineDataExploration /></Link>
            <Link className='sidebar-element' to="/weather"><BsFillCloudSunFill /></Link>
            <Link className='sidebar-element' to="/past-analyses"><MdNewspaper /></Link>
        </div>

        <Link className='logout'><TbLogout /></Link>
    </aside>
  )
}

export default Sidebar