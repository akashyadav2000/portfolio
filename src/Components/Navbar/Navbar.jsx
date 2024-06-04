import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "/src/assets/Images/logo.png";
import underline from "/src/assets/Images/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "/src/assets/Images/menu_open.svg";
import menu_close from "/src/assets/Images/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    // menuRef.current.style.right = "-440px";
    menuRef.current.style.right = "-64rem";
  };

  const handleClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu();
  };

  return (
    <>
      <div className="navbar">
        <AnchorLink className="logo" href="#home" offset={100}>
          <p onClick={() => handleClick("home")}><img src={logo} className="logo" alt="logo" /></p>
        </AnchorLink>

        <img
          src={menu_open}
          onClick={openMenu}
          alt=""
          className="nav-mob-open"
        />
        <ul ref={menuRef} className="nav-menu">
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close"
          />
          <li>
            <AnchorLink className="anchor-link" href="#home" offset={100}>
              <p onClick={() => handleClick("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => handleClick("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => handleClick("services")}>Education & Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#portfolio">
              <p onClick={() => handleClick("portfolio")}>Portfolio</p>
            </AnchorLink>
            {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => handleClick("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
