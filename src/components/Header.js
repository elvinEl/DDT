import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsChevronCompactDown } from "react-icons/bs";
import "../styles/drop.css";
function Header() {
  // ---------------SELECT LANGUAGE---------------
  const [isOpen, setIsOpen] = useState(false);
  const options = ["AZ", "EN", "RU"];
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(i18n.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    i18n.changeLanguage(option);
    toggleDropdown();
  };

  const filteredOptions = options.filter((option) => option !== selectedOption);
  // -------------------------------------
  const params = useParams();
  const serviceR = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );
  const navRef = useRef();
  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive");
  // };
  const showNavbar = () => {
    const navElement = navRef.current;
    navElement.classList.toggle("responsive");
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

  // const clickHandle = (e) => {
  //   showNavbar(!showNavbar);
  // };
  const isMobile = window.innerWidth <= 768;
  const clickHandle = (e) => {
    if (!isMobile && e.target.classList.contains("dropdown-container-2")) {
      setIsOpenE(!isOpenE);
    }
    showNavbar();
  };
  ///////////////////////////////
  const [isOpenE, setIsOpenE] = useState(false);

  const handleMouseEnter = () => {
    setIsOpenE(true);
  };

  const handleMouseLeave = () => {
    setIsOpenE(false);
  };

  //////////////////////////////

  return (
    <header className="text-black  fixed top-0 z-50 w-full menu">
      <div className={navbar ? "navbar-active" : "navbar1"}>
        <div className="container flex justify-between items-center max-w-[90%] mx-auto ">
          <div>
            <a className="max-md:max-w-[95px]" href="/">
              <img className="w-[100px]" src="./assets/logo/Logo.png" alt="" />
            </a>
          </div>

          <nav ref={navRef} className="flex  mx-auto">
            <NavLink
              onClick={clickHandle}
              className=" border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575] active:border-[#757575] "
              to="/"
            >
              {t("Ana səhifə")}
            </NavLink>
            {/* <div
              onClick={clickHandle}
              className="dropdown-container-2 border-b-[3px] text-white border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              onMouseLeave={handleMouseLeave}
            > */}
             <div
          className={`dropdown-container-2 border-b-[3px] text-white border-transparent px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575] ${
            isMobile ? "hover:border-b-[3px] hover:border-[#757575]" : ""
          }`}
          onMouseLeave={handleMouseLeave}
        >
              <button className="max-md:text-[1.5rem]" onMouseEnter={handleMouseEnter} >
              {t("Haqqımızda")}
              </button>
              <div className={`dropdown-content-2 ${isOpenE ? "open" : ""}`}>
                <NavLink to="about">Şirkət haqqında</NavLink>
                <NavLink to="aboutteams">Bizim komanda</NavLink>
              </div>
            </div>
           
            <NavLink
              onClick={clickHandle}
              className="border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              to="/portfolios"
            >
              {t("Portfolio")}
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#757575] px-[14px] py-[16px] text-center block active:border-b-[3px] focus:border-[#757575]"
              to="/connect"
            >
              {t("Əlaqə")}
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div>
            <div
              className={`select-box relative ${isOpen ? "open" : ""}`}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <div
                className="custom-selected  py-2 bg-transparent  text-white   cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="selected-item">
                  {selectedOption || "Select an option"}
                  <BsChevronCompactDown />
                </div>
              </div>
              {isOpen && (
                <div className="dropdown-content">
                  {filteredOptions.map((option) => (
                    <div
                      key={option}
                      className="option py-2  cursor-pointer hover:bg-gray-100"
                      onClick={() => selectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
