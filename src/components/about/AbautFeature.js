import React, { useEffect } from "react";
import { fetchFeatures } from "../../store/feature/featureAction";
import { fetchAbout } from "../../store/about/aboutActions";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function AbautFeature() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const featureRedux = useSelector((state) => state.feature.featureData);
  const aboutRedux = useSelector((state) => state.about.aboutData);
  const aboutImage = aboutRedux.length > 0 ? aboutRedux[0].image1 :null;
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchFeatures({ language }));
    dispatch(fetchAbout({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="grid grid-cols-2 mt-12 max-lg:flex-col overflow-y-hidden text-white">
      <div className="col-span-1">
        <p data-aos="fade-up" className="text-[2.5rem]  font-bold">
          Bizim xüsusiyyətlərimiz
        </p>
        <>
          {Object.keys(featureRedux).map((key) => (
            <div className="pt-4">
              <p data-aos="fade-up" className="text-[24px] font-bold">
                {featureRedux[key].title}
              </p>
              <p
                data-aos="fade-up"
                className="text-[18px]"
                dangerouslySetInnerHTML={{
                  __html: featureRedux[key].description,
                }}
              ></p>
            </div>
          ))}
        </>
      </div>
      <div className="col-span-1 max-w-full max-lg:max-w-[50%] mx-auto max-md:max-w-full ">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default AbautFeature;
