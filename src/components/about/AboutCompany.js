import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../../store/about/aboutActions";
function AboutCompany() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const aboutRedux = useSelector((state) => state.about.aboutData);

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchAbout({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div>
      {Object.keys(aboutRedux).map((key) => (
        <>
          <div className="pb-12 grid grid-cols-2 pt-8 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col text-white">
            <div className="col-span-1 max-lg:w-full max-lg:place-content-center ">
              <p
                data-aos="fade-up"
                className="text-[2.5rem] font-extrabold mb-2 leading-tight max-lg:text-[2rem]"
              >
                {aboutRedux[key].title}
              </p>
              <p data-aos="fade-up" className="text-[1.2rem]  font-medium">
                {aboutRedux[key].slogan}
              </p>

              <div className="mt-8">
                <img
                  className="max-w-[100%] rounded-[24px]"
                  src={aboutRedux[key].image1}
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-1 max-lg:hidden">
              <div className="flex justify-end">
                <img
                  className="rounded-[24px] min-w-[75%]"
                  src={aboutRedux[key].image2}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="text-white text-[18px]"
            dangerouslySetInnerHTML={{
              __html: aboutRedux[key].description,
            }}
          ></div>
        </>
      ))}
    </div>
  );
}

export default AboutCompany;
