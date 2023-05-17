import React from "react";
import { NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
function Footer() {
  return (
    <>
      <div >
        <div className="w-[60%] absolute left-[0px] h-[325px] max-xl:static max-xl:w-full">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.7978984665197!2d49.82157144929728!3d40.36858178064437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc5db2da509%3A0x8cc1c152888dcd4b!2z0JDQu9GC0LXRgSDQn9C70LDQt9Cw!5e0!3m2!1sru!2s!4v1673804433367!5m2!1sru!2s"
            width="600"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>

        <div className="clip_path  bg-gradient-to-br from-[#e9ffd4] via-[#f5bfd7] to-[#4dc9e6] absolute right-[0px] w-[60%] max-xl:w-full max-xl:clip ">
          <div className="pt-8">
            <div className="pl-4 flex justify-center">
              <a href="/">
                <img src="./assets/logo/logo.jpg" alt="" />
              </a>
            </div>

            <div className="pl-24 pt-12 pb-[2rem]  grid grid-cols-3 max-lg:pl-0 max-w-[95%] mx-auto max-lg:gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              <div className="col-span-1">
                <p className="text-[18px] font-bold text-start  ">Əlaqə</p>
                <span className="flex items-center gap-1 pt-3 text-[18px]">
                  <GrLocation />
                  Bakı ş , N.Nərimanov
                </span>
                <span className="flex items-center gap-1 pt-3 text-[18px]">
                  <AiOutlineWhatsApp />
                  <a href="tel:0519991188">(+994 51) 9991188</a>
                </span>
                <span className="flex items-center gap-1 pt-3 text-[18px]">
                  <AiOutlineWhatsApp />
                  <a href="tel:0519991188">(+994 51) 9991188</a>
                </span>
                <span className="flex items-center gap-1 pt-3  text-[18px]">
                  <SlEnvolopeLetter />
                  <a href="mailto:gmail@gmail.com">gmail@gmail.com</a>
                </span>
              </div>

              <div className="col-span-1">
                <p className="text-[18px] font-bold text-start">Xidmətlər</p>
                <p className="pt-3 text-[18px]">
                  <NavLink to="/">Veb layihələr</NavLink>
                </p>
                <p className="pt-3 text-[18px]">
                  <NavLink to="/about"> Saytlara Texniki Dəstək</NavLink>
                </p>
                <p className="pt-3 text-[18px]">
                  <NavLink to="/connect">Korporativ Mail Xidməti</NavLink>
                </p>
                <p className="pt-3 text-[18px]">
                  <NavLink to="/connect">Ödəmə sisttemi inteqrasiyası</NavLink>
                </p>
              </div>

              <div className="col-span-1">
                <p className="text-[18px] font-bold text-stat  ">Menyu</p>

                <div className="flex flex-col   ">
                  <NavLink className="pt-3 text-[18px]" to="/">
                    Ana Səhifə
                  </NavLink>
                  <NavLink className="pt-3 text-[18px]" to="/about">
                    Haqqımızda
                  </NavLink>
                  <NavLink className="pt-3 text-[18px]" to="/portfolio">
                    Portfolio
                  </NavLink>
                  <NavLink className="pt-3 text-[18px]" to="/connect">
                    Əlaqə
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
