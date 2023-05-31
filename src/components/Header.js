import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { getI18n, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {


  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const serviceR = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );
  console.log(serviceR);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  // // Scroll
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  //
  const { i18n } = useTranslation();
  const changeSelect = (option) => {
    i18n.changeLanguage(option.target.value);
    // lang_name = option.target.value
    // params.slug = "preparation-of-web-pages";
    // const location = window.location.pathname.split("/")[1];
    // navigate(`/${location}/${option.target.value}`);
    // console.log(params);
  };

  const clickHandle = (e) => {
    showNavbar(!showNavbar);
  };

  return (
    <header className="text-black  fixed top-0 z-50 w-full menu">
      <div className={navbar ? "navbar-active" : "navbar1"}>
        <div className="container flex justify-between items-center max-w-[90%] mx-auto ">
          <div>
            <a className="max-md:max-w-[95px]" href="/">
              <img
                className="w-[100px]"
                src="./assets/logo/NewLogo.png"
                alt=""
              />
            </a>
          </div>

          <nav ref={navRef} className=" flex overflow-hidden">
            <NavLink
              onClick={clickHandle}
              className=" border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575] active:border-[#757575] "
              to="/"
            >
              Ana səhifə
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              to="/about"
            >
              Haqqımızda
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              to="/portfolios"
            >
              Portfolio
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              to="/connect"
            >
              Əlaqə
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>

            <select
              value={i18n.language}
              className="select-option text-white"
              onChange={changeSelect}
            >
              <option value="az">Az</option>
              <option value="en">En</option>
            </select>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
