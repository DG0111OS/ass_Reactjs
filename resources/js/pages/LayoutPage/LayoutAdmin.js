import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";

export default function LayoutAdmin( {children}) {
    return (
        <div className="container-scroller">
            <Navbar/>
            <div className="container-fluid page-body-wrapper">
                <SideBar/>
                {/* partial */}
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="page-header">
                            <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"/>
            </span>
                                Table Product
                            </h3>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <span/>Overview
                                        <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"/>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="row">
                            {children}
                        </div>

                    </div>
                    {/* content-wrapper ends */}
                    {/* partial:partials/_footer.html */}
                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2017 <a
                                href="https://www.bootstrapdash.com/" target="_blank">Bootstrap Dash</a>. All rights reserved.</span>
                            <span
                                className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i
                                className="mdi mdi-heart text-danger"/></span>
                        </div>
                    </footer>
                    {/* partial */}
                </div>
                {/* main-panel ends */}
            </div>
        </div>

    )
}
