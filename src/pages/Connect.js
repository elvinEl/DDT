import React, { useState, useEffect } from "react";
import { IoMdHeadset } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import Form from "../components/connect/Form";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {Helmet} from 'react-helmet'



function Connect() {
  const { t, i18n } = useTranslation();
  const [contact, setContact] = useState([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    async function fetchContact() {
      const language = i18n.language;
      const response = await axios.get(
        `${baseUrl}/general-data`,
        {
          headers: { "Accept-Language": language },
        }
      );
      setContact(response.data);
    }
    fetchContact();
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <div data-aos="fade-up" data-aos-duration="2000" className=" mt-24">
        <p className="flex justify-center text-[24px] font-bold">Əlaqə</p>

        {Object.keys(contact).map((key) => (
          <div
            className={`connect/${contact[key]} grid grid-cols-3 max-w-[90%] mt-8 gap-4 mx-auto max-lg:grid-cols-2 max-md:grid-cols-1`}
          >
            <div className="box col-span-1-1 bg-[#F8F8F8] rounded-[10px] p-6 relative border-[#ebebeb] border-[1px] ">
              <div className="icon-box absolute top-[-30px] text-[25px] text-[#4ebcdf]  duration-300 left-[47px] rounded-[50%] p-6 border-[1px] border-[#ebebeb] bg-[#f8f8f8]">
                <IoMdHeadset />
              </div>
              <div className=" py-7 text-[#283C83]">
                <p className="text-[18px] font-bold">Əlaqə Nömrələri</p>
                <div className="mt-[1rem]">
                  <a className="text-[18px]" href="tel:(+994 12)5027477">
                    {contact[key].phone}
                  </a>{" "}
                  <br />
                  <a className="text-[18px]" href="tel:(+994 50)2361555">
                    {contact[key].phone2}
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
                    {contact[key].email}
                  </a>
                  <br />
                  <a className="text-[18px]" href="mailto:cv@allbuy.az">
                    {contact[key].email}
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
                <div className="mt-4">
                  <p className="text-[18px]">{contact[key].address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

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
