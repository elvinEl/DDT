import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function Form() {
  const [to_name, setTo_Name] = useState("");
  const [from_name, setFrom_Name] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const { t, i18n } = useTranslation();


  const notify = () => toast("Mesajınız göndərildi");
  const errorNotify = () => toast("Mesajınız göndərilmədi !");

  const submitInfo = () => {
    console.log(to_name + from_name + message + number);
    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
      number: number,
    };



    emailjs
      .send(
        "service_e8vlqho",
        "template_f12fcta",
        emailContent,
        "3X8qMNo1IHMb3G0Hr"
      )
      .then(
        (result) => {
          notify(result.text);
        },
        (error) => {
          errorNotify(error.text);
        });
  };
  return (
    <>
      <div className="relative z-0 mb-4">
        <input
          type="text"
          tabIndex="1"
          onChange={(event) => {
            setTo_Name(event.target.value);
          }}
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t('Ad , Soyad')}
         
        </label>
      </div>

      <div className="relative z-0 mb-4" >
        <input
          type="text"
          tabIndex="2"
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label 
    
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t('Telefon nömrəniz')}
          
        </label>
      </div>

      <div className="relative z-0 mb-4">
        <input
          type="email"
          tabIndex="3"
          onChange={(event) => {
            setFrom_Name(event.target.value);
          }}
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t('E-mail')}
          
        </label>
      </div>

      <div className="relative z-0 col-span-3">
        <textarea
          type="email"
          tabIndex="4"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t('Mesajınız')}
          
        </label>

        <div className="flex justify-end max-lg:justify-center max-md:justify-center mt-4 pb-4">
          <button
            name="submit"
            type="submit"
            onClick={submitInfo}
            className="px-12 py-4 text-[18px] bg-[#4EBCDF] text-white rounded hover:bg-[#4EBCDF]"
          >
            {t('Göndər')}
            
          </button>
          <div>
            <Toaster position="bottom-right" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
