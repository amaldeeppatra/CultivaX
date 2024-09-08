import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import './analysisresults.css';

const AnalysisResults = () => {
    // State variables to hold result data
    const [resultDate, setResultDate] = useState("Not Available");
    const [resultType, setResultType] = useState("Not Available");
    const [resultStatus, setResultStatus] = useState("Not Available");

    // Use useEffect to simulate data fetching or setting default values
    useEffect(() => {
        const fetchResultData = () => {
            const date = "01/09/2024"; // Example date
            const type = "Crop Disease"; // Example type
            const status = "Healthy"; // Example status

            setResultDate(date);
            setResultType(type);
            setResultStatus(status);
        };

        fetchResultData();
    }, []);

    // Handler function for viewing details button
    const handleViewDetails = () => {
        alert('Viewing detailed results for the latest analysis.');
    };

    // Determine the status class
    const statusClass = resultStatus === 'Healthy' ? 'positive' :
                        resultStatus === 'Needs Attention' ? 'negative' : 'neutral';

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <h1>Analysis Results</h1>
                <div className="tiles-container">
                    <div className="tile">
                        <h2>Date</h2>
                        <p id="result-date">{resultDate}</p>
                    </div>
                    <div className="tile">
                        <h2>Type</h2>
                        <p id="result-type">{resultType}</p>
                    </div>
                    <div className="tile">
                        <h2>Status</h2>
                        <p id="result-status" className={`status ${statusClass}`}>{resultStatus}</p>
                    </div>
                </div>
                <button className="view-details-btn" onClick={handleViewDetails}>View Details</button>
            </div>
        </div>
    );
};

export default AnalysisResults;