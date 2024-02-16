import React from "react";
import './Dashboard.css';
function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
        <h5>Dashboard</h5>
        </div>
        </div>
        <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
        <div className="col-sm-4 me-2" id="employees">
          <h5>Total Employees</h5>
          <h3>50</h3>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-50"></div>
</div>
        </div>
        <div className="col-sm-4 me-2" id="present">
        <h5>Total Present</h5>
        <h3>25</h3>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-25"></div>
</div>
        </div>
        <div className="col-sm-4 me-2" id="absent">
        <h5>Total Absent</h5>
        <h3>25</h3><div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-25"></div>
</div>
</div>
        </div>
        <h4>Department Summary</h4>
          <div className="row">
            <div className="col-sm-3 me-3">
              <h3>Accounts</h3>
              <h4>1</h4>
            </div>
            <div className="col-sm-3 me-3">
              <h3>Development</h3>
              <h4>1</h4>
            </div>
            <div className="col-sm-3 me-3">
              <h3>Administrator</h3>
              <h4>1</h4>
            </div>
            <div className="col-sm-3 me-2 my-3">
              <h3>Sales</h3>
              <h4>1</h4>
            </div>
          </div>
        </div>
  );
}
export default Dashboard;