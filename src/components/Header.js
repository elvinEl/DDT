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

  // Scroll
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
    const location = window.location.pathname.split("/")[1]
    navigate(`/${location}/${option.target.value}`);
    console.log(params);
  };

  const [position, setPosition] = useState({});
  const clickHandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    localStorage.setItem("item", JSON.stringify({ top, width, height, left }));
    showNavbar(!showNavbar);
    setPosition({
      left,
      top,
      width,
      height,
    });
  };
  const ref = useRef();
  useEffect(() => {
    const el = ref.current.querySelector(".active");

    // const left = el.offsetLeft;
    const newArr = JSON.parse(localStorage.getItem("item"));

    if (newArr !== null) {
      setPosition({
        left: newArr.left,
        top: newArr.top,
        width: newArr.width,
        height: newArr.height,
      });
    } else {
      const { top, width, height } = el.getBoundingClientRect();
      setPosition({
        top,
        width,
        height,
      });
    }
  }, []);
  return (
    <header ref={ref} className="text-black  fixed top-0 z-50 w-full menu">
      <div className={navbar ? "navbar-active" : "navbar1"}>
        <div className="container flex justify-between items-center max-w-[90%] mx-auto ">
          <div>
            <a className="max-md:max-w-[95px]" href="/">
              <img src="./assets/logo/logo.jpg" alt="" />
            </a>
          </div>

          <nav ref={navRef} className="gap-4 flex ">
            {Object.values(position).length > 0 && (
              <div
                className="divider "
                style={{
                  "--left": position.left + "px",
                  "--top": position.top + "px",
                  "--width": position.width + "px",
                  "--height": position.height + "px",
                }}
              />
            )}

            <NavLink
              onClick={clickHandle}
              className="text-base font-medium"
              to="/"
            >
              Ana səhifə
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className=" text-base font-medium"
              to="/about"
            >
              Haqqımızda
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="text-base font-medium"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              onClick={clickHandle}
              className="text-base font-medium"
              to="/connect"
            >
              Əlaqə
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>

            <select
              value={i18n.language}
              className="select-option"
              onChange={changeSelect}
            >
              {serviceR.multi_langs &&
                serviceR.multi_langs.map((lang, index) => (
                  <option value={lang.slug} key={index}>
                    {lang.lang_name}
                  </option>
                ))}
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
