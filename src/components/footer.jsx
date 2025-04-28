import React from "react";
import Logo from "../assets/img/logo/logo-blue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div
      id="_314_74__Frame_188"
      className="absolute flex flex-col items-center h-[380.88px] w-full gap-[68px]"
    >
      {/* Top Section */} 
      <div className="relative flex flex-col items-start gap-10 w-full px-24 py-3">
        {/* Logo + Name */}
        <div className="relative flex flex-col items-start h-[126.21px] w-[391.5px] gap-10">
          <div className="relative h-[86.21px] w-[151px]">
            <img
              src={Logo}
              alt="Group_21"
              className="absolute left-0"
            />
            {/* <div className="absolute top-[48.21px]">
              <h2 className="text-[25.27px] leading-[37.4px] font-semibold tracking-[-1px] text-primary bg-clip-text font-dm-sans">
                MobuisEngine
              </h2>
            </div> */}
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        {/* Address, Email, Telephone, Socials */}
        <div className="relative flex justify-between items-center w-full h-[77.67px]">
          {/* Contact Info */}
          <div className="flex gap-[125px] items-start">
            {/* Address */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold underline text-primary bg-clip-text font-dm-sans">
                Address
              </h3>
              <p className="text-[18px] font-medium leading-[104%] text-primary bg-clip-text font-dm-sans">
                1875 Mission St Ste 103 #450
                <br />
                San Francisco, CA 94103
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold underline text-primary bg-clip-text font-dm-sans">
                Email
              </h3>
              <a
                href="mailto:finance@mobiusengine.ai"
                className="text-[18px] font-medium underline text-primary bg-clip-text font-dm-sans"
              >
                finance@mobiusengine.ai
              </a>
            </div>

            {/* Telephone */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold underline text-primary bg-clip-text font-dm-sans">
                Telephone
              </h3>
              <p className="text-[18px] font-medium text-primary bg-clip-text font-dm-sans">
                650-889-6026
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 items-start w-[103.34px]">
            <h3 className="text-[16px] font-semibold underline text-primary bg-clip-text font-dm-sans">
              Socials
            </h3>
            <div className="flex gap-[13px]">
              <div className="p-3 rounded-full border text-primary border-primary flex items-center justify-center">
                {/* Add your social icon */}
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="px-[13px] py-3 rounded-full text-primary border border-primary flex items-center justify-center">
                {/* Add your social icon */}
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative flex flex-col bg-[#0649e7] w-full px-[103px] py-[26px]">
        <div className="flex justify-between items-center w-full">
          <p className="text-[16px] font-medium text-white font-dm-sans">
            © 2023 Mobiusservices LLC
          </p>
          <div className="flex gap-16">
            <p className="text-[16px] font-medium text-white font-dm-sans">
              Terms & Conditions
            </p>
            <p className="text-[16px] font-medium text-white font-dm-sans">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
