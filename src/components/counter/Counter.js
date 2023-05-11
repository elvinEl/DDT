import React,{useState} from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";



function Counter() {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
     <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div data-aos="fade-up"  data-aos-duration="2000" className='bg-[#fdeeee] max-w-[90%] mx-auto rounded-[20px]'>
          

          <div className="grid grid-cols-3 mt-16 mb-16 pt-16 pb-16 text-black max-md:mb-0 max-md:mt-8 max-md:flex  max-md:flex-col max-md:gap-4">
            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px]">
                {counterStart && (
                  <CountUp start={0} end={30} duration={2} delay={0} />
                )}{" "}
                +
              </div>

              <div className='flex flex-col'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center"> Hazırlanmış sayt</p>
                <span className='text-center max-lg:text-[16px]'>
                Biznesinə dəyər verən, onun hər şeyin ən yaxşısına layiq olduğunu düşünən 300-dən çox sahibkarla çalışırıq
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px]">
                {counterStart && (
                  <CountUp start={0} end={16} duration={2} delay={0} />
                )}{" "}
                +
              </div>
              <div className='flex flex-col'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center">Əməkdaş</p>
                <span className='text-center max-lg:text-[16px]'>
                Komandamız mümkün olan ən yüksək nəticəni əldə etmək üçün təcrübə və biliklərini layihələrdə tətbiq edirlər
                </span>
              </div>
              
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex text-[50px] max-md:text-[30px] max-lg:text-[35px]">
                {counterStart && (
                  <CountUp start={0} end={2} duration={2} delay={0} />
                )}
                +
              </div>
              <div className='flex flex-col'>
              <p className="text-[32px] max-md:text-[24px] max-lg:text-[28px] text-center">İllik Təcrübə</p>
                <span className='text-center max-lg:text-[16px]'>
                10 ildir ki, bütün fokusumuzu cəmləyərək yalnız veb texnologiyalar sahəsində ixtisaslaşmışıq
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