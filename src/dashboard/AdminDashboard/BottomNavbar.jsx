import React, {useState} from "react";
import {Link} from "react-router-dom";
import {MenuItem} from "./MenuItem";

function BottomNavbar({showNavbar, setShowNavbar}) {
    const [selectedIndex, setselectedIndex] = useState(0);
    return (
        <>
            <div className={
                `l-navbar ${
                    showNavbar ? `show` : ""
                } `
            }>
                <div className="header_toggle"
                    onClick={
                        () => setShowNavbar(!showNavbar)
                }>
                    {" "}
                    {
                    !showNavbar ? (
                        <i class="bx bx-menu" id="header-toggle"></i>
                    ) : (
                        <i className="fa fa-close" id="header-toggle"></i>
                    )
                } </div>
                <nav className="nav">
                    <div>
                        <div className="nav_list">
                            {
                            MenuItem.map((link, index) => (
                                <Link to={
                                        link.to
                                    }
                                    className={
                                        `nav_link ${
                                            selectedIndex === index ? `active` : ""
                                        } `
                                    }
                                    key={index}
                                    onClick={
                                        () => setselectedIndex(index)
                                }>
                                    <i className={
                                        link.icon
                                    }></i>
                                    <span className="nav_name">
                                        {
                                        link.name
                                    }</span>
                                </Link>
                            ))
                        } </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default BottomNavbar;
