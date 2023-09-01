import React, { useEffect } from "react";
import { fetchAboutWhyUs } from "../../store/about/aboutActions";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchAbout } from "../../store/about/aboutActions";

function AboutServices() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const whyUsRedux = useSelector((state) => state.whyUs.whyUsData);
  console.log(whyUsRedux);
  const whyUsData = whyUsRedux && whyUsRedux.data ? whyUsRedux.data : "";
  const aboutRedux = useSelector((state) => state.about.aboutData);
  console.log(aboutRedux);
  const aboutImage = aboutRedux && aboutRedux.data ? aboutRedux.data.image4 : "";
  console.log(aboutImage);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchAbout({ language }));
    dispatch(fetchAboutWhyUs({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="grid grid-cols-2 mt-12 text-white gap-8 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse">
      <div className="col-span-1 max-w-full max-lg:max-w-full mx-auto max-md:max-w-full ">
        <img className="w-full  rounded-[24px] max-lg:h-auto" src={aboutImage} alt="" />
      </div>
      <div className="col-span-1">
        <p data-aos="fade-up" className="text-[2.5rem]  font-bold">
          Niyə Biz ?
        </p>
        <div>
          {Object.keys(whyUsData).map((key) => (
            <div className="pt-4">
              <p data-aos="fade-up" className="text-[24px] font-bold">
                {whyUsData[key].title}
              </p>
              <p
                data-aos="fade-up"
                className="text-[18px]"
                dangerouslySetInnerHTML={{
                  __html: whyUsData[key].description,
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
