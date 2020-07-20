import React from "react";

import {
    Link,
} from "react-router-dom";

export default function SideBar() {


    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/109361649_1246257175715887_625984274368050879_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=XAh4Umg_M1QAX-2tmdR&_nc_ht=scontent.fhan2-3.fna&oh=cf18f2946cf8831a245f8adf9508091e&oe=5F3A2D52" title="Hình ảnh" alt="profile"/>
                            <span className="login-status online"/> {/*change to offline or busy as needed*/}
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                            <span className="font-weight-bold mb-2">Ngô Văn Long </span>
                            <span className="text-secondary text-small"> Quản trị viên </span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <span className="menu-title">Dashboard</span>
                        <i className="mdi mdi-home menu-icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false"
                       aria-controls="page-layouts">
                        <span className="menu-title">Sản phẩm</span>
                        <i className="menu-arrow"/>
                        <i className="mdi mdi-apps menu-icon"/>
                    </a>
                    <div className="collapse" id="page-layouts">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Danh sách sản phẩm</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add/product">Thêm sản phẩm</Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item sidebar-actions">
                  <span className="nav-link">
                    <div className="border-bottom">
                      <h6 className="font-weight-normal mb-3">Projects Crud Product</h6>
                    </div>
                  </span>
                </li>
            </ul>
        </nav>
    )
}
