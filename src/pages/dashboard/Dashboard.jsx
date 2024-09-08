import React from 'react'
// import { Link } from 'react-router-dom';
import './dashboard.css'
// import cultivaxLogo from '../../assets/logo-circular.png'
// import { MdOutlineDataExploration } from "react-icons/md";
// import { BsFillCloudSunFill } from "react-icons/bs";
// import { MdNewspaper } from "react-icons/md";
// import { TbLogout } from "react-icons/tb";
import UploadImage from '../../components/dashboard/UploadImage';
import News from '../../components/dashboard/News';
import Sidebar from '../../components/dashboard/Sidebar';

const Dashboard = () => {
  return (
    <>
    <div class="layout">
        <Sidebar/>

        <main class="main-content">
            <h1 className='welcome'>Welcome USER to CultivaX</h1>
            <UploadImage/>
            <News/>
        </main>
    </div>
    </>
  )
}

export default Dashboard