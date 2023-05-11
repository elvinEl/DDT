import React from "react";
import { IoMdHeadset } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import Form from "../components/connect/Form";

function Connect() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="overflow-hidden mt-24"
      >
        <p className="flex justify-center text-[24px] font-bold">Əlaqə</p>

        <div className="grid grid-cols-3 max-w-[90%] mt-8 gap-4 mx-auto max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="box col-span-1-1 bg-[#F8F8F8] rounded-[10px] p-6 relative border-[#ebebeb] border-[1px] ">
            <div className="icon-box absolute top-[-30px] text-[25px] text-[#4ebcdf]  duration-300 left-[47px] rounded-[50%] p-6 border-[1px] border-[#ebebeb] bg-[#f8f8f8]">
              <IoMdHeadset />
            </div>
            <div className=" py-7 text-[#283C83]">
              <p className="text-[18px] font-bold">Əlaqə Nömrələri</p>
              <div className="mt-[1rem]">
                <a className="text-[18px]" href="tel:(+994 12)5027477">
                  (+994 50)211xx00
                </a>{" "}
                <br />
                <a className="text-[18px]" href="tel:(+994 50)2361555">
                  (+994 50)212xx55
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="box col-span-1 relative bg-[#F8F8F8] border-[#ebebeb] border-[1px] rounded-[10px] p-6">
            <div className="icon-box absolute top-[-30px] text-[25px] text-[#4ebcdf]  duration-300 left-[47px] rounded-[50%] p-6 border-[1px] border-[#ebebeb] bg-[#f8f8f8]">
              <BiMessageDetail />
            </div>
            <div className=" py-7 text-[#283C83]">
              <p className="text-[18px] font-bold">E-maill</p>
              <div className="mt-[1rem]">
                <a className="text-[18px]" href="mailto:info@allbuy.az">
                  gmail@gmail.com
                </a>
                <br />
                <a className="text-[18px]" href="mailto:cv@allbuy.az">
                  mail@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div className="box col-span-1 relative bg-[#F8F8F8] border-[#ebebeb] border-[1px] rounded-[10px] p-6">
            <div className="icon-box absolute top-[-30px] text-[25px] text-[#4ebcdf]  duration-300 left-[47px] rounded-[50%] p-6 border-[1px] border-[#ebebeb] bg-[#f8f8f8]">
              <ImLocation />
            </div>
            <div className=" py-7 text-[#283C83]">
              <p className="text-[18px] font-bold">Ünvan</p>
              <p className="text-[18px] mt-4">Sahib Ibrahimxelilov 31</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="my-8 max-w-[90%] mx-auto border"
        >
          <p className="flex justify-center pt-4 text-[24px] font-bold">
            Bizə Yazın
          </p>
          <div className="max-w-[80%] mx-auto grid grid-cols-3 mt-8 max-md:block gap-4 max-md:max-w-[90%] max-lg:max-w-[90%]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
