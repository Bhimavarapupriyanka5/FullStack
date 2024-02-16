import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function SideNavbar() {
    const [show, setShow] = useState(false);
    const [toggleMenu, setToggleMenu] = useState({
        isShowEmployees: true,
        isShowAttendance: false,
        isShowPayroll: false
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleMenuItems = (menuName) => {
        let _toggleMenu = {...toggleMenu};
        for (let key in toggleMenu) {
            if (key !== menuName) {
                _toggleMenu[key] = false;
            }
        }
        setToggleMenu({..._toggleMenu, [menuName]: !toggleMenu[menuName]});
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow} id="sidenavbar">
            <i className="fa-solid fa-bars" ></i>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link to="/dashboard"></Link>DashBoard</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                    <ul>
                        <li><i class="fa-solid fa-desktop"></i><Link to="/dashboard">Dashboard</Link></li>
                      
                       
                         <li>Employees <span onClick={() => toggleMenuItems('isShowEmployees')} style={{fontSize: '20px', cursor: 'pointer'}}><b>{toggleMenu.isShowEmployees ? '-' : '+'}</b></span>
                            {toggleMenu.isShowEmployees && (<ul>
                                <li onClick={handleClose}><Link to="/createemployee">Createemploye</Link></li>
                                <li onClick={handleClose}><Link to="/employelist">Employelist</Link></li>
                                <li onClick={handleClose}><Link to="/employee imports">Employee Imports</Link></li>
                                <li onClick={handleClose}><Link to="/awards list">Awards List</Link></li>
                                <li onClick={handleClose}><Link to="/notice list">Notice List</Link></li>
                            </ul>)}
                        </li>
                        <li><i className="fa-solid fa-book-open"></i>Attendance <span onClick={() => toggleMenuItems('isShowAttendance')} style={{fontSize: '20px', cursor: 'pointer'}}><b>{toggleMenu.isShowAttendance ? '-' : '+'}</b></span>
                            {toggleMenu.isShowAttendance && (<ul>
                                <li onclick={handleClose}><Link to="/attendence">Attendance Import</Link></li>
                                <li onClick={handleClose}><Link to="/manual">Manual Punching</Link></li>
                                <li onClick={handleClose}><Link to="/Leave">Leave Application</Link></li>
                                <li onclick={handleClose}><Link to="/Absent">Absent Details</Link></li>
                                <li onClick={handleClose}><Link to="/attendence ver">Attendance Verfication</Link></li>
                            </ul>)}
                        </li>
                        <li>Payroll <span onClick={() => toggleMenuItems('isShowPayroll')} style={{fontSize: '20px', cursor: 'pointer'}}><b>{toggleMenu.isShowPayroll ? '-' : '+'}</b></span>
                            {toggleMenu.isShowPayroll && (<ul>
                                <li onClick={handleClose}>Payslip</li>
                                <li onClick={handleClose}>Salary Setup</li>
                                <li onClick={handleClose}>Salary Process</li>
                                <li onClick={handleClose}>Employee Loan</li>
                                <li onClick={handleClose}>Employee Conveyance</li>
                                <li onClick={handleClose}>Tax File Upload</li>
                            </ul>)}
                        </li>
                        <li>Reports <span onClick={() => toggleMenuItems('isShowPayroll')} style={{fontSize: '20px', cursor: 'pointer'}}><b>{toggleMenu.isShowPayroll ? '-' : '+'}</b></span>
                            {toggleMenu.isShowPayroll && (<ul>
                                <li onClick={handleClose}>Attendence</li>
                                <li onClick={handleClose}>Payslip Bulk Download</li>
                                <li onClick={handleClose}>Monthly Salary</li>
                                <li onClick={handleClose}>Yearly Salary</li>
                                <li onClick={handleClose}>Salary Deduction Details</li>
                            </ul>)}
                        </li>
                        <li>Job <span onClick={() => toggleMenuItems('isShowPayroll')} style={{fontSize: '20px', cursor: 'pointer'}}><b>{toggleMenu.isShowPayroll ? '-' : '+'}</b></span>
                            {toggleMenu.isShowPayroll && (<ul>
                                <li onClick={handleClose}>Candidate Create</li>
                                <li onClick={handleClose}>Candidates List</li>
                                <li onClick={handleClose}>Job openings list</li>
                                <li onClick={handleClose}>Job Application List</li>
                                <li onClick={handleClose}>Trainings List</li>
                            </ul>)}
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default SideNavbar;