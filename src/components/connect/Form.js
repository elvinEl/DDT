import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const notify = () => toast("Mesajınız göndərildi");
  const errorNotify = () => toast("Mesajınız göndərilmədi !");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const url = `${baseUrl}/contact`;
    const XStaticToken = "b@b!um1JBF4rRs#gGskv^SaFC5@DX68y";

    try {
      const response = await axios.post(url, formData, {
        headers: {
        "X-Static-Token": XStaticToken,
        },
      
      });
      notify("Mesajınız gönderildi");
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        // message: "",
      });
    } catch (error) {
      errorNotify("Mesajınız gönderilemedi!");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 gap-y-20 max-md:grid-cols-1">
      <div className="relative z-0 mb-4">
        <input
        name="name"
          type="text"
          tabIndex="1"
          value={formData.name}
          onChange={handleInputChange}
          id="name-input"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t("Ad")}
        </label>
      </div>

      <div className="relative z-0 mb-4 col-span-1">
        <input
          type="text"
          name="surname"
          tabIndex="5"
          value={formData.surname}
          onChange={handleInputChange}
          id="surname-input"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t("Soyad")}
        </label>
      </div>

      <div className="relative z-0 mb-4 col-span-1">
        <input
          type="text"
          name="phone"
          tabIndex="2"
          value={formData.phone}
          onChange={handleInputChange}
          id="phone-input"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t("Telefon nömrəniz")}
        </label>
      </div>

      <div className="relative z-0 mb-4 col-span-1">
        <input
          type="email"
          tabIndex="3"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
          id="email-input"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t("E-mail")}
        </label>
      </div>

      <div className="relative z-0 col-span-4 max-md:col-span-1 ">
        <textarea
          type="text"
          name="message"
          tabIndex="4"
          value={formData.message}
          onChange={handleInputChange}
          id="message-input"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4EBCDF] focus:outline-none focus:ring-0 focus:border-[#4EBCDF] peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4EBCDF] peer-focus:dark:text-[#4EBCDF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          required
        >
          {t("Mesajınız")}
        </label>

        <div className="flex justify-end max-lg:justify-center max-md:justify-center mt-4 pb-4">
          <button
            name="submit"
            type="submit"
            className="px-5 py-2 text-[16px] bg-[#4EBCDF] text-white rounded hover:bg-[#4EBCDF] duration-200"
          >
            {t("Göndər")}
          </button>
          <div>
            <Toaster position="bottom-right" />
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default Form;
