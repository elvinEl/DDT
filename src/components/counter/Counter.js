import React,{useState} from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { getI18n, useTranslation } from "react-i18next";



function Counter() {
  const [counterStart, setCounterStart] = useState(false);
  const {t} = useTranslation()
  return (
    <>
     <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div data-aos="fade-up"  data-aos-duration="2000" className='bg-[#383838] max-w-[90%] mx-auto rounded-[20px] max-md:max-w-[95%]'>
          

          <div className="grid grid-cols-3 gap-8 my-16 py-16  px-4 text-white max-md:mb-0 max-md:mt-8 max-md:flex max-lg:py-8  max-md:flex-col max-md:gap-4 max-md:py-8 max-lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px] font-medium text-[#0057FF]">
                {counterStart && (
                  <CountUp start={0} end={30} duration={2} delay={0} />
                )}{" "}
                +
              </div>

              <div className='flex flex-col items-center justify-center'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center">{t("Hazırlanmış sayt")} </p>
                <span className='text-center max-lg:text-[16px]'>
              {t("Biznesinə dəyər verən, onun hər şeyin ən yaxşısına layiq olduğunu düşünən 300-dən çox sahibkarla çalışırıq")}  
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px] font-medium text-[#0057FF]">
                {counterStart && (
                  <CountUp start={0} end={16} duration={2} delay={0} />
                )}{" "}
                +
              </div>
              <div className='flex flex-col'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center">{t("Əməkdaş")} </p>
                <span className='text-center max-lg:text-[16px]'>
                  {t("Komandamız mümkün olan ən yüksək nəticəni əldə etmək üçün təcrübə və biliklərini layihələrdə tətbiq edirlər")}
                
                </span>
              </div>
              
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px] font-medium text-[#0057FF]">
                {counterStart && (
                  <CountUp start={0} end={2} duration={2} delay={0} />
                )}
                +
              </div>
              <div className='flex flex-col'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center">{t("İllik Təcrübə")} </p>
                <span className='text-center max-lg:text-[16px]'>
                  {t("10 ildir ki, bütün fokusumuzu cəmləyərək yalnız veb texnologiyalar sahəsində ixtisaslaşmışıq")}
                
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  )
}

export default Counter