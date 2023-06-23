import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../store/partners/partnersActions";

function Partners() {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const partnersRedux = useSelector((state) => state.partners.partnersData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchPartners({ language }));
  }, [dispatch, i18n.language]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <span className="flex justify-center items-center mt-8 text-[35px] font-bold text-[white] max-md:text-[30px]">
        {t("Bizim Müştərilərimiz")}
      </span>
      <div className="grid grid-cols-5 mb-8 max-w-[90%] mx-auto gap-16 mt-[3rem] py-8 max-xl:max-w-[90%] bg-white  max-lg:grid-cols-3 max-md:grid-cols-2">
        {Object.keys(partnersRedux).map((key) => (
          <div className=" flex justify-center items-center opacity-40 hover:opacity-100 duration-500 hover:scale-150">
            <img
              className="max-w-[140px]  max-md:max-w-[100px]  "
              src={partnersRedux[key].image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
