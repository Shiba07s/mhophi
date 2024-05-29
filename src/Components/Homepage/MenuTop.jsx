import React from 'react';
import './MenuTop.css';

const MenuTop = ({ className = "" }) => {
  return (
    <div className={`menuTop ${className}`}>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="active" src="/dashboardicon.svg" />
        <span>Dashboard</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="order" src="/ordersicon.svg" />
        <span>Orders</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/assignmenticon.svg" />
        <span>Assignment</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/planicon.svg" />
        <span>Production Plan</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/materialicon.svg" />
        <span>Material</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/inventoryicon.svg" />
        <span>Inventory</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/workstationicon.svg" />
        <span>Workstation</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/processviolationicon.svg" />
        <span>Process Violation</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="rejectionIcon" alt="reject" src="/rejectionicon@2x.png" />
        <span>Reject</span>
      </div>
      <div className="menuActive1">
        <div className="menuActiveItem" />
        <img className="dashboardIcon" alt="" src="/issuesicon.svg" />
        <span>Issue</span>
      </div>
    </div>
  );
};

export default MenuTop;
