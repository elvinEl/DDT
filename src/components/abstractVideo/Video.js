import React from "react";
import { VideoTag } from "react-video-tag";

function Video() {
  return (
    <>
      <div className="h-[200px] relative mb-4" data-aos="fade-up" data-aos-duration="2000">
        <VideoTag
          className="h-full w-full object-cover blur-[3px]"
          autoPlay={`${true}`}
          muted={`${true}`}
          playsInline={`${true}`}
          loop={`${true}`}
          src={`${"../../assets/video/video.mp4"}`}
        />
        <div className="position_transform max-md:text-[16px] max-lg:w-[80%]">
          <p>
            İnanırıq ki, texnologiyanın gücü biznes performansını artırmaq üçün
            saysız-hesabsız imkanlar təqdim edir
          </p>
        </div>
      </div>
    </>
  );
}

export default Video;
