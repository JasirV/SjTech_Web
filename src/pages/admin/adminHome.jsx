import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

// Admin Home Component
const AdminHome = () => {
  // Data for the line graph
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Trading',
        data: [50000, 60000, 70000, 55000, 65000, 70000],
        borderColor: '#312D81',
        backgroundColor: 'rgba(49, 45, 129, 0.5)',
        // fill: true,
      },
      {
        label: 'Contracting',
        data: [30000, 35000, 40000, 30000, 45000, 50000],
        borderColor: '#D23F57',
        backgroundColor: 'rgba(210, 63, 87, 0.5)',
        // fill: true,
      },
    ],
  };

  return (
    <div className="adminHome">
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <h3 className="stat-box-title">Trading</h3>
          <p className="stat-box-value">₹20,000</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-box-title">Contracting</h3>
          <p className="stat-box-value">₹30,000</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-box-title">Total</h3>
          <p className="stat-box-value">₹80,000</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="graph-section">
        <h3 >Performance Overview</h3>
        <div className="graph-placeholder">
          <Line data={data} options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }} />
        </div>
      </div>
    </div>
  );
};
export default AdminHome