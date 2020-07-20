import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="index.html">
                    <img src="https://i.dlpng.com/static/png/4034874-pengertian-crud-di-php-dan-mysql-forum-programmer-indonesia-apa-pengertian-dari-png-520_209_preview.webp" alt="logo"/>
                </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <ul className="navbar-nav navbar-nav-right">

                    <li className="nav-item nav-logout d-none d-lg-block">
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-power"/>
                        </a>
                    </li>

                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                    <span className="mdi mdi-menu"/>
                </button>
            </div>
        </nav>
    )
}
