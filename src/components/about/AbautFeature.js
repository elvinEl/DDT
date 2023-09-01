import React, { useEffect } from "react";
import { fetchFeatures } from "../../store/feature/featureAction";
import { fetchAbout } from "../../store/about/aboutActions";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function AbautFeature() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const featureRedux = useSelector((state) => state.feature.featureData);
  console.log(featureRedux);
  const featureData =
    featureRedux && featureRedux.data ? featureRedux.data : "";
  const aboutRedux = useSelector((state) => state.about.aboutData);
  const aboutImage =
    aboutRedux && aboutRedux.data ? aboutRedux.data.image3 : "";
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchFeatures({ language }));
    dispatch(fetchAbout({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="grid grid-cols-2 mt-12  overflow-y-hidden text-white gap-8 max-md:grid-cols-1">
      <div className="col-span-1">
        <p data-aos="fade-up" className="text-[2.5rem]  font-bold">
          Bizim xüsusiyyətlərimiz
        </p>
        <>
          {Object.keys(featureData).map((key) => (
            <div className="pt-4">
              <p data-aos="fade-up" className="text-[24px] font-bold">
                {featureData[key].title}
              </p>
              <p
                data-aos="fade-up"
                className="text-[18px]"
                dangerouslySetInnerHTML={{
                  __html: featureData[key].description,
                }}
              ></p>
            </div>
          ))}
        </>
      </div>
      <div className="col-span-1 max-w-full max-lg:max-w-full mx-auto max-md:max-w-full  ">
        <img
          className="rounded-[24px] w-full  max-lg:h-auto"
          src={aboutImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default AbautFeature;
