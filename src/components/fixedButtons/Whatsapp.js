import React from "react";
import { ImWhatsapp } from "react-icons/im";
import ReactWhatsapp from "react-whatsapp";
import '../../styles/fixedButtons.css'

function Whatsapp() {
  return (
    <div>
      <a href="https://web.whatsapp.com/" target="_blank">
        <button className="fixed z-50 right-[20px] bottom-[120px] hover:scale-[1] bg-green-500 rounded-[50%]">
           
            <ReactWhatsapp className="flex justify-center items-center p-4 text-[30px] max-md:text-[20px] text-white" number="+99455 282-48-00" message="Salam">
              <ImWhatsapp />
            </ReactWhatsapp>

          <span className="before"></span>
          <span className="after"></span>
        </button>
      </a>
    </div>
  );
}

export default Whatsapp;
