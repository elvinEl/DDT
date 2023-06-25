import React, { useEffect } from "react";
import { fetchAboutWhyUs } from "../../store/about/aboutActions";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchAbout } from "../../store/about/aboutActions";

function AboutServices() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const whyUsRedux = useSelector((state) => state.whyUs.whyUsData);
  const aboutRedux = useSelector((state) => state.about.aboutData);
  const aboutImage = aboutRedux.length > 0 ? aboutRedux[0].image2 : null;

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchAbout({ language }));
    dispatch(fetchAboutWhyUs({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="grid grid-cols-2 mt-12 text-white">
      <div className="col-span-1 max-w-full max-lg:max-w-[50%] mx-auto max-md:max-w-full ">
        <img src={aboutImage} alt="" />
      </div>
      <div className="col-span-1">
        <p data-aos="fade-up" className="text-[2.5rem]  font-bold">
          Niyə Biz ?
        </p>
        <div>
          {Object.keys(whyUsRedux).map((key) => (
            <div className="pt-4">
              <p data-aos="fade-up" className="text-[24px] font-bold">
                {whyUsRedux[key].title}
              </p>
              <p
                data-aos="fade-up"
                className="text-[18px]"
                dangerouslySetInnerHTML={{
                  __html: whyUsRedux[key].description,
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AboutServices;
