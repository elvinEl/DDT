import React from 'react'

function AboutFeatureItem({feature}) {
  return (
    <>
        <div className="mt-6">
          <p data-aos="fade-left" className="text-[24px] font-bold text-[#0b163f]">
            {feature.title}
          </p>
          <p data-aos="fade-right" className="text-[18px]">{feature.description}</p>
        </div>
    </>
  )
}

export default AboutFeatureItem