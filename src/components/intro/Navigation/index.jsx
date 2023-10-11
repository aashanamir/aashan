import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./sytle.scss";
import Logo from "../../../images/logo.png";
import CallToAction from "../../shared/callToAction";
import { scrollToSrction } from "../../utils/helper";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        // setMobileMenu(!mobileMenu);
        scrollToSrction(section);
    };
    return (
        <div className="top-navigation-bar">
            <div className="logo">
                <img
                    src={Logo}
                    alt="Muhammad Aashan"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`navigation-bar ${mobileMenu ? "active" : ""}`}>
                <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </div>
                <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </div>
                <div
                    className="navigation-items"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                    Blogs & Articles
                </div>
                <CallToAction
                    text="Contact me"
                    action={() => menuItemClickHandler("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
