import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import './pastanalysis.css';

const PastAnalyses = () => {
  const handleViewDetails = () => {
    alert('Viewing detailed results for the latest analysis.');
};

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <div className="container">
            <h1>Past Crop Analysis Reports</h1>
            <div className="reports-container">
                <div className="report-card">
                    <h2>Report 1</h2>
                    <p>Date: 01/09/2024</p>
                    <p>Type: Crop Disease Analysis</p>
                    <button className="view-report-btn" data-report="1" onClick={handleViewDetails}>View Report</button>
                </div>
                <div className="report-card">
                    <h2>Report 2</h2>
                    <p>Date: 25/08/2024</p>
                    <p>Type: Crop Health Monitoring</p>
                    <button className="view-report-btn" data-report="2" onClick={handleViewDetails}>View Report</button>
                </div>
                <div className="report-card">
                    <h2>Report 3</h2>
                    <p>Date: 15/08/2024</p>
                    <p>Type: Soil Quality Analysis</p>
                    <button className="view-report-btn" data-report="3" onClick={handleViewDetails}>View Report</button>
                </div>
                <div className="report-card">
                    <h2>Report 4</h2>
                    <p>Date: 01/08/2024</p>
                    <p>Type: Irrigation Efficiency</p>
                    <button className="view-report-btn" data-report="4" onClick={handleViewDetails}>View Report</button>
                </div>
                <div className="report-card">
                    <h2>Report 5</h2>
                    <p>Date: 20/07/2024</p>
                    <p>Type: Pest Infestation</p>
                    <button className="view-report-btn" data-report="5" onClick={handleViewDetails}>View Report</button>
                </div>
                <div className="report-card">
                    <h2>Report 6</h2>
                    <p>Date: 10/07/2024</p>
                    <p>Type: Fertilizer Usage</p>
                    <button className="view-report-btn" data-report="6" onClick={handleViewDetails}>View Report</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PastAnalyses;
