
import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsComponent = () => {
  const location = useLocation();
  const rowData = location.state;

  if (!rowData) {
    return <div>No data available</div>;
  }

  return (
    <div className="details  bg-dark text-light">
      <h2>Details</h2>
      <div>
        <p>First Name: {rowData.firstname}</p>
        <p>Last Name: {rowData.lastname}</p>
        <p>Email: {rowData.email}</p>
        <p>Number: {rowData.number}</p>
        {/* Render other details here */}
      </div>
    </div>
  );
};

export default DetailsComponent;
