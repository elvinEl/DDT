import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [position, setPosition] = useState({});
  const clickHandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
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
    const { top, width, height } = el.getBoundingClientRect();
    // const left = el.offsetLeft;
    setPosition({
      // left,
      top,
      width,
      height,
    });
  }, []);
  return (
    <header ref={ref} className="bg-white menu">
      <div className="h-[5rem] flex justify-between items-center max-w-[80%] mx-auto ">
        <div >
          <a href="/">
            <img src="./assets/logo/logo.jpg" alt="" />
          </a>
        </div>

         
        <div className="gap-4 flex">
          {Object.values(position).length > 0 && (
            <div
              className="divider"
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
            className="active text-base font-medium"
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
        </div>
      </div>

      
    </header>
  );
}

export default Header;
