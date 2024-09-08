import React, { useEffect, useState } from 'react';
import './dashboard.css';
import UploadImage from '../../components/dashboard/UploadImage';
import News from '../../components/dashboard/News';
import Sidebar from '../../components/dashboard/Sidebar';

const Dashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve fullName from localStorage
    const fullName = localStorage.getItem('fullName');
    if (fullName) {
      setUserName(fullName);
    }
  }, []);

  return (
    <>
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <h1 className="welcome">Welcome {userName ? userName : 'USER'} to CultivaX</h1>
          <UploadImage />
          <News />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
